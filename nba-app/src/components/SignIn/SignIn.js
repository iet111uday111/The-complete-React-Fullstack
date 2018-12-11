import React, { Component } from 'react';
import styles from './SignIn.css';
import { firebase } from '../../firebase';

import FormField from '../widgets/FormsFields/formFields';

export default class SignIn extends Component {
    state = {
        registerError: '',
        loading: false,
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        console.log(element);
    }

    showButton = () => {
        console.log('showButton');
    }

    showError = () => {
        console.log('showError');
    }

    render() {
        return (
            <div className={styles.logContainer}>
                <form>
                    <FormField
                        id={'email'}
                        formData={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}   
                    />

                    <FormField
                        id={'password'}
                        formData={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}   
                    />

                    {this.showButton()}
                    {this.showError()}

                </form>
            </div>
        )
    }
}
