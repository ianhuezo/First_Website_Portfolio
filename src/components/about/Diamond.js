import React from 'react';
import classNames from 'classnames';

class Diamond extends React.Component{

  render(){
    return(
      <div className = 'single-diamond-container'>
          <button className = {classNames('diamond-button', this.props.colorButton)} onClick={() =>this.props.onClick()}>
            <div className = "text-diamond">
              {this.props.buttonName}
            </div>
          </button>
      </div>
    );
  }
}

export default Diamond
