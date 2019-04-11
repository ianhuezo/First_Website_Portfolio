import React from 'react';
import Navigation from '../Navigation';
import ProjectContent from './ProjectContent'
import Footer from '../Footer';

class Projects extends React.Component{
  render(){
    return(
      <div className = 'project-page'>
        <Navigation />
        <ProjectContent />
        <div className = 'project-footer'>
          <Footer />
        </div>
      </div>
    );
  };
}

export default Projects
