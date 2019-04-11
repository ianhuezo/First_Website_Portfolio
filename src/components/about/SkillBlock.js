import React from 'react';

class SkillBlock extends React.Component{
  render(){
    return(
      <span>
        <div className = 'image-portrait'>
          <img  src = {this.props.putImage} className = 'image-skill' alt = ""/>
        </div>
      </span>
    );
  }
}

export default SkillBlock

//<img  src = {this.props.putImage} className = 'image-skill'/>
