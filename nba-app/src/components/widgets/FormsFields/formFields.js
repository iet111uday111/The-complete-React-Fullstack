import React from 'react'

const FormFields = ({formData, change, id}) => {

    const renderTemplate = () => {
        let formTemplate = null;
        
        switch (formData.element) {
            case'input':
                formTemplate = (
                    <div>
                        Input
                    </div>
                )
                break;
        
            default:
                formTemplate = null;
                break;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormFields
