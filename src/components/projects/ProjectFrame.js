import React from 'react';
import classNames from 'classnames';

class ProjectFrame extends React.Component{
  render(){
    return(
      <div className = 'project-frame'>
        <img className = {classNames('project-image')} src = {this.props.getImage} alt = ""/>
      </div>
    );
  }
}

export default ProjectFrame
