import React from 'react';
import io from 'socket.io-client';
let socket = io(process.env.REACT_APP_SITE_URL);

class ContactForm extends React.Component{
  constructor(props) {
    super(props);
    this.state =
    {
      nameValue: '',
      emailValue: '',
      subjectValue: '',
      contentValue: '',
      submit: false,
      failed: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeSubmit = this.closeSubmit.bind(this);
    this.closeFailSubmit = this.closeFailSubmit.bind(this);
  }

  handleName(event) {
    this.setState({nameValue: event.target.value})
  }
  handleMail(event) {
    this.setState({emailValue: event.target.value})
  }

  handleSubject(event) {
    this.setState({subjectValue: event.target.value})
  }
  handleContent(event) {
    this.setState({contentValue: event.target.value})
  }

  handleSubmit(event) {
    const nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    let nameTrue = true;
    let emailTrue = true;
    let subjectTrue = true;
    let contentTrue = true;

    if(nameReg.test(this.state.nameValue) === false){
      nameTrue = false;
    }
    if(emailReg.test(this.state.emailValue) === false){
      emailTrue = false;
    }
    if(this.state.subjectValue === ''){
      subjectTrue = false;
    }
    if(this.state.contentValue === ''){
      contentTrue = false;
    }
    if(nameTrue && emailTrue && subjectTrue && contentTrue){
      let information = {
        name: this.state.nameValue,
        email: this.state.emailValue,
        subject: this.state.subjectValue,
        content: this.state.contentValue
      }
      socket.emit('user-info', information);
      this.setState({submit: true, nameValue: '', emailValue: '', subjectValue: '', contentValue: ''})
    }
    else{
      this.setState({failed: true, nameValue: '', emailValue: '', subjectValue: '', contentValue: ''})
    }
    event.preventDefault();
  }
  closeSubmit(){
    this.setState({submit: false});
  }
  closeFailSubmit(){
    this.setState({failed: false})
  }
  render(){
    const submitCover = this.state.submit ? 'modal-cover modal-cover-active' : 'modal-cover';
    const submitContainer = this.state.submit ? 'modal-container  modal-submit' : 'modal-container';
    const submitFailCover = this.state.failed ? 'modal-cover modal-cover-active' : 'modal-cover';
    const submitFailContainer = this.state.failed ? 'modal-container  modal-fail-submit' : 'modal-container';
    return(
      <div className = 'form-container'>
        <div className = {submitCover} onClick = {this.closeSubmit}></div>
        <div className = {submitContainer}><div className = 'submit-message'>Submission successful! I will get back to you soon.</div></div>
        <div className = {submitFailCover} onClick = {this.closeFailSubmit}></div>
        <div className = {submitFailContainer}><div className = 'submit-message'>Your submission failed, please try again.</div></div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.nameValue} onChange={this.handleName} />
          </label>
          <label>
            E-mail:
            <input type="text" value={this.state.emailValue} onChange={this.handleMail} />
          </label>
          <label>
            Subject:
            <input type="text" value={this.state.subjectValue} onChange={this.handleSubject} />
          </label>
          <label>
            Message:
            <textarea value={this.state.contentValue} onChange={this.handleContent} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm
