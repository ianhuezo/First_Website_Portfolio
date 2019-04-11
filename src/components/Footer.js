import React from 'react';

const Footer = () =>{
  return(
    <div>
      <div className = 'footer-container'>
        <div className = 'footer-icon-container'>
          <a href = {"https://codepen.io/ianhuezo/pens/public/"} target = "_blank" ><i className="fa fa-codepen fa-3x"></i></a>
          <a href = {"https://www.linkedin.com/in/ian-huezo-ba2a22126/"} target="_blank"><i className="fa fa-linkedin-square fa-3x"></i></a>
          <a href = {"https://github.com/ianhuezo"} target="_blank"><i className="fa fa-github fa-3x"></i></a>
        </div>
      </div>
    </div>
  );
}
/*
<a href = "https://www.linkedin.com/in/ian-huezo-ba2a22126/" target="_blank"><i class="fa fa-linkedin-square fa-3x" aria-hidden = "true"></i></a>
<a href = "https://codepen.io/ianhuezo/pens/public/" target = "_blank"><i class="fa fa-codepen fa-3x" aria-hidden="true"></i></a>
<a href = "https://github.com/ianhuezo" target = "_blank"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
*/
export default Footer
