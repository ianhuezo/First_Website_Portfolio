import React from 'react';
import printer from '../../images/printer.jpg';
import soldering_iron from '../../images/soldering_iron.jpg';
import profile_pic from '../../images/profile_pic.jpg';

const Content = () =>{
  return(
    <div className = 'content-container'>
      <div className = 'profile-picture'>
        <img  src = {profile_pic} className = 'image-fill-container rounded' alt = "" />
      </div>
      <div className = 'left-picture-container'>
        <img  src = {printer} className = 'image-fill-container' alt = "" />
      </div>
      <div className = 'right-picture-container'>
        <img src = {soldering_iron} className = 'image-fill-container' alt = "" />
      </div>
      <div className = 'content-text-container'>
        <div className = "faded-purple"></div>
        <p className = "introduction-text">
        Hello my name is Ian Huezo and I am currently working as an Instrumentation Engineer
        for John Deere - Iconma in Cedar Falls, Iowa. This portfolio highlights all the cool things I've done. 
        </p>
      </div>
    </div>
  );
}

export default Content;
