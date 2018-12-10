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
    const changeHandler = (event, id) => {
        const newState = props.formData;
        newState[id].value = event.target.value;
        props.change(newState);
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
                            onChange={
                                (event) => changeHandler(event, data.id)
                            }    
                        />
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