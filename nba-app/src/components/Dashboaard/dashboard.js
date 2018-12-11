import React, { Component } from 'react';

// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
// import { stateToHTML } from 'draft-js-export-html';

// import Uploader from '../widgets/FileUploader/fileUploader';
import FormField from '../widgets/FormsFields/formFields';
import styles from './dashboard.css';
import { firebaseTeams, firebaseArticles, firebase } from '../../firebase';


export default class Dashboard extends Component {

  state = {
    PostError: '',
    loading: false,
    formdata: {
      author: {
        element: 'input',
        value: '',
        config: {
          name: 'author_input',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      tittle: {
        element: 'input',
        value: '',
        config: {
          name: 'title_input',
          type: 'text',
          placeholder: 'Enter your title'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
    }
  }

  updateForm = (element) => {
    const newFormdata = {
      ...this.state.formdata
    }
    const newElement = {
      ...newFormdata[element.id]
    }
    newElement.value = element.event.target.value;
    if (element.blur) {
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    this.setState({
      formdata: newFormdata
    })
  }

  validate = (element) => {
    let error = [true, ''];

    if (element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`;
      error = !valid ? [valid, message] : error
    }

    return error;
  }

  submitButton = () => (
    this.state.loading ?
      'loading...'
      :
      <div>
        <button type="submit">Add Post</button>
      </div>
  )

  showError = () => (
    this.state.PostError !== '' ? 
        <div className={styles.error}>{this.state.PostError}</div>
    : ''
)


  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value
    }
    for (let key in this.state.formdata) {
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    console.log(dataToSubmit);
    
    if (formIsValid) {
      console.log('Submit Post');
    } else {
      this.setState({
        PostError: 'Something went wrong'
      })
    }
  }



  render() {
    return (
      <div className={styles.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>

          <FormField
            id={'author'}
            formdata={this.state.formdata.author}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={'tittle'}
            formdata={this.state.formdata.tittle}
            change={(element) => this.updateForm(element)}
          />

          {this.submitButton()}
          {this.showError()}
        </form>

      </div>
    )
  }
}
