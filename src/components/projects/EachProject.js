import React from 'react';
import classNames from 'classnames';

class EachProject extends React.Component{
  render(){
    return(
      <div className = 'project-single-picture-container'
         onMouseOver = {() => this.props.onMouseOver(this.props.value)}
         onMouseLeave = {() => this.props.onMouseLeave(this.props.value)}
         onClick = {() => this.props.onClick(this.props.value)}
        >
        <img className = {classNames('project-image-container', this.props.expandImage, this.props.deflateImage)} alt ="" src = {this.props.chooseImage}/>
      </div>
    );
  }
}

export default EachProject
