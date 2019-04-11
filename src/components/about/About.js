import React from 'react';
import Navigation from '../Navigation';
import DiamondContainer from './diamond-container'
import Skills from './Skills'
import Footer from '../Footer';

class About extends React.Component{
  render(){
    return(
      <div>
        <Navigation />
        <DiamondContainer />
        <Skills/>
        <div className = 'footer-space'></div>
        <Footer />
      </div>
    );
  };
}

export default About
