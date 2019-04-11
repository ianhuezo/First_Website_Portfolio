import React from 'react';
import {Link} from 'react-router-dom';
import logo_prime from '../images/logo_prime.png'

const Navigation = () =>{
  return(
    <div>
      <div className='navigation'>
        <div className = 'header-title-container'>
          <h1 className = 'header-title'>Ian Huezo's Portfolio</h1>
        </div>
        <div className = 'all-logo-container'>
          <div className='line-container'>
            <div className='white-line'></div>
          </div>
            <div className = 'logo-container'>
              <img src={logo_prime} alt="" className='header-logo'/>
            </div>
          <div className='line-container'>
            <div className='white-line'></div>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to='/' className = 'link'>Home</Link></li>
            <li><Link to='/About' className = 'link'>About</Link></li>
            <li><Link to='/Projects' className = 'link'>Projects</Link></li>
            <li><Link to='/Contact' className = 'link'>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className='transition-header'></div>
    </div>
  );
}

export default Navigation;
