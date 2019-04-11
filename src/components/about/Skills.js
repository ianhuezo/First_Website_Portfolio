import React from 'react';
import SkillBlock from './SkillBlock';
import cpp from '../../images/cpp_logo.png';
import python from '../../images/python_logo.png';
import webLang from '../../images/web_lang.png';
import react_logo from '../../images/react_logo.png';
import cadence from '../../images/cadence.png';
import labview from '../../images/labview.png';
import msOffice from '../../images/ms_office.png';
import microcontroller from '../../images/microcontroller.png';
import solidworks from '../../images/solidworks.png';
import mosfet from '../../images/mosfet.png';
import oscilloscope from '../../images/oscilloscope.png';
import printer from '../../images/printer.png';

const Skills = () =>{
  return(
    <div className = 'about-container-two'>
      <div className = 'skills-container'>
        <div className = 'skills-header'>
            <div className = 'skills-line-left'>
            </div>
            <p className = 'skills-text'>Skills</p>
            <div className = 'skills-line-right'>
            </div>
        </div>
        <div>
          <div className = 'image-skill-container'>
            <div className = 'skill-row'>
              <SkillBlock putImage = {cpp}/>
              <SkillBlock putImage = {python}/>
              <SkillBlock putImage = {webLang}/>
              <SkillBlock putImage = {react_logo}/>
            </div>
            <div className = 'skill-row'>
              <SkillBlock putImage = {labview}/>
              <SkillBlock putImage = {cadence}/>
              <SkillBlock putImage = {msOffice}/>
              <SkillBlock putImage = {microcontroller}/>
            </div>
            <div className = 'skill-row'>
              <SkillBlock putImage = {solidworks}/>
              <SkillBlock putImage = {mosfet}/>
              <SkillBlock putImage = {oscilloscope}/>
              <SkillBlock putImage = {printer}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
