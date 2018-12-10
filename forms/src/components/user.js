import React, { Component } from 'react';
import FormFields from './widgets/Forms/formFields';

class User extends Component {
/**
 * Rule for Form Fields
 */
    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label:true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name',

                }
            },
            lastname: {
                element: 'input',
                value: '',
                label:true,
                labelText: 'Lastname',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your Lastname',
                    
                }
            }
        }
    }

    /**
     * Updating the state of the form 
     */
    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    /**
     * Geting the values of the form data 
     * and Can be make Network Call to API
     */
    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }

        /**
         * API Can Be make with dataToSubmit
         */
        
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                            
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;