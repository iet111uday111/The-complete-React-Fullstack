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

                },
                validation: {
                    required: true,
                    minLen:5
                },
                valid: false,
                touched: false,
                validationMessage: ''
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
                    
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label:true,
                labelText: 'Message',
                config: {
                    name: 'message',
                    rows:4,
                    cols:36                
                },
                validation: {
                    required: false,
                },
                valid: true
            },
            age:{
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                    name:'age_input',
                    options:[
                        {val:'1',text:'10-20'},
                        {val:'2',text:'20-30'},
                        {val:'3',text:'+30'}
                    ]
                },
                validation: {
                    required: false,
                },
                valid: true
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
        let formIsValid = true;
        
        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;

        }
        
        /**
         * API Can Be make with dataToSubmit
         */
        if(formIsValid){
            console.log(dataToSubmit);
        }
         
         
        
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                            
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;