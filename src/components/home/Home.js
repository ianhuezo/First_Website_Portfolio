import React from 'react';
import Navigation from '../Navigation';
import Content from './Content';
import Footer from '../Footer';

class Home extends React.Component{
  render(){
    return(
      <div className = 'home-container'>
        <Navigation />
        <Content />
        <div className = 'position-home-footer'>
          <Footer />
        </div>
      </div>
    );
  };
}

export default Home
