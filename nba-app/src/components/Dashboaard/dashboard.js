import React, { Component } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

// import Uploader from '../widgets/FileUploader/fileUploader';
import FormField from '../widgets/FormsFields/formFields';
import styles from './dashboard.css';
import { firebaseTeams, firebaseArticles, firebase } from '../../firebase';


export default class Dashboard extends Component {

  state = {
    editorState: EditorState.createEmpty(),
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
      body: {
        element: 'texteditor',
        value: '',
        valid: true
      },
      team: {
        element: 'select',
        value: '',
        config: {
          name: 'teams_input',
          options: []
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationMessage: ''
      }
    }
  }

  componentDidMount() {
    this.loadTeams()
  }

  loadTeams = () => {
    firebaseTeams.once('value')
    .then((snapshot)=>{
        let team = [];

        snapshot.forEach((childSnapshot)=>{
            team.push({
                id: childSnapshot.val().teamId,
                name: childSnapshot.val().city
            })
        })

        const newFormdata = {...this.state.formdata};
        const newElement = {...newFormdata['team'] };

        newElement.config.options = team;
        newFormdata['team'] = newElement;

        this.setState({
            formdata: newFormdata
        })
    })

}


  updateForm = (element, content = '') => {
    const newFormdata = {
      ...this.state.formdata
    }
    const newElement = {
      ...newFormdata[element.id]
    }
    if (content === '') {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

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

    if (formIsValid) {
      console.log('Submit Post', dataToSubmit);
    } else {
      this.setState({
        PostError: 'Something went wrong'
      })
    }
  }

  onEditorStateChange = (editorState) => {
    let contentState = editorState.getCurrentContent();
    let rawState = convertToRaw(contentState);
    let html = stateToHTML(contentState);
    console.log(html);

    this.updateForm({ id: 'body' }, html)

    this.setState({
      editorState
    })
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

          <Editor
            editorState={this.state.editorState}
            wrapperClassName="myEditor-wrapper"
            editorClassName="myEditor-editor"
            onEditorStateChange={this.onEditorStateChange}
          />

          <FormField
            id={'teams'}
            formdata={this.state.formdata.team}
            change={(element) => this.updateForm(element)}
          />

          {this.submitButton()}
          {this.showError()}

        </form>

      </div>
    )
  }
}
