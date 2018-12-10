import React from 'react';

const FormFields = (props) => {
    /**
     * Converting the rules into an Array
     * with Id and Setting 
     */
    const renderFields = () => {
        const formArray = [];

        for (let elementName in props.formData) {
            formArray.push({
                id: elementName,
                settings: props.formData[elementName]
            })
        }

        return formArray.map((item, i) => {
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })

    }

    /**
     * Showing Label or not
     * @param show 
     * @param label 
     */
    const showLabel = (show, label) => {
        return show ?
            <label>{label}</label>
            : null
    }

    /**
     * Passing the new state to user Component
     * @param event 
     * @param id 
     */
    const changeHandler = (event, id, blur) => {
        const newState = props.formData;
        newState[id].value = event.target.value;

        if(blur){
            let validData = validate(newState[id]);
            newState[id].valid = validData[0];
            newState[id].validationMessage = validData[1];    
        }

        newState[id].touched = true;

        props.change(newState);
    }

    /**
     * Validating Error and Creating Error Message
     * @param element 
     */

    const validate = (element) => {
        let error = [true, ''];

        if(element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen;
            const message = `${ !valid ? 'Must be greater than ' + element.validation.minLen :''}`
            error = !valid ?[valid,message]:error
        }

        if(element.validation.required){
            const valid = element.value.trim() !== '';
            const message = `${!valid ? `${element.labelText} is required` : ''}`;
            
            error = !valid ? [valid, message] : error
        }

        return error; 
    }

    /**
     * Showing Validation Mesaage on UI
     * @param data 
     */
    const showValidation = (data) => {
        let errorMessage = null;

        if(data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }

    /**
     * Creating dynamic template with type of form field
     * @param data 
     */
    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;

        switch (values.element) {
            case 'input':
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <input
                            {...values.config}
                            value={values.value}
                            onBlur={
                                (event) => changeHandler(event, data.id,true)
                            }
                            onChange={
                                (event) => changeHandler(event, data.id,false)
                            }
                        />
                        {showValidation(values)}
                    </div>
                )

                break;
            case 'textarea':
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <textarea
                            {...values.config}
                            value={values.value}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        />

                    </div>
                )
                break;
            case 'select':
                formTemplate = (
                    <div>
                        {showLabel(values.label, values.labelText)}
                        <select
                            value={values.value}
                            name={values.config.name}
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }
                        >
                            {values.config.options.map((item, i) => (
                                <option key={i} value={item.val}>
                                    {item.text}
                                </option>
                            ))}

                        </select>
                    </div>
                )
                break;
            default:

                formTemplate = '';
        }

        return formTemplate;
    }

    return (
        <div>
            {renderFields()}
        </div>
    )
}

export default FormFields;