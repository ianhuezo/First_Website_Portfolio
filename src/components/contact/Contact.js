import React from 'react';
import Navigation from '../Navigation';
import ContactForm from './ContactForm';
import Footer from '../Footer'

class Contact extends React.Component{
  render(){
    return(
      <div className = 'contact-container'>
        <Navigation />
        <ContactForm />
        <div className = 'contact-background'></div>
        <div className = 'position-contact-footer'>
          <Footer />
        </div>
      </div>
    );
  };
}

export default Contact
