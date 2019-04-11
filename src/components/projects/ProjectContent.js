import React from 'react';
import ProjectFrame from './ProjectFrame';
import EachProject from './EachProject'
import pong from '../../images/pong.png';
import gdp from '../../images/gdp.png';
import life from '../../images/game_of_life.jpg';
import ecocar from '../../images/ecocar.JPG';
import pomodoro from '../../images/pomodoro.png';
import led from '../../images/led.JPG';
import weather from '../../images/weather.png';
import escoffier from '../../images/escoffier.png';
import ledNode from '../../images/led_node.jpg'
import mbed from '../../images/mbed.jpg'
import schematic from '../../images/cadence_schematic.png'
import lab from '../../images/lab.jpg'
import Titles from './Titles'
import descriptions from './Descriptions'
const mainPicture = [pong, gdp, life, ecocar, pomodoro, led, weather, escoffier, ledNode, mbed,
schematic, lab];

class ProjectContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expanded: Array(12).fill(null),
      deflated: Array(12).fill(null),
      defaultImage: schematic,
      allPictures: mainPicture,
      allDescriptions: descriptions,
      chooseTitle: Titles[10],
      chooseDescription: descriptions[10]
    }
    this.hovered = this.hovered.bind(this)
    this.leaving = this.leaving.bind(this)
    this.decideFrame = this.decideFrame.bind(this)
  }
  whatValueHover(value){
      this.state.expanded[value] = true;
      this.state.deflated[value] = false;
      let newArray = this.state.expanded;
      let newArray2 = this.state.deflated;
      this.setState({expanded: newArray, deflated: newArray2})
  }
  hovered(value){
    this.whatValueHover(value);
  }

  whatValueLeave(value){
    this.state.deflated[value] = true;
    this.state.expanded[value] = null;
    let newArray = this.state.deflated;
    let newArray2 = this.state.expanded;
    this.setState({expanded: newArray2, deflated: newArray});
  }
  leaving(value){
    this.whatValueLeave(value)
  }
  decideFrame(value){
    const newImg = mainPicture[value];
    const newTitle = Titles[value];
    const newDescription = descriptions[value];
    this.setState({defaultImage: newImg, chooseTitle: newTitle, chooseDescription: newDescription});
  }
  render(){
    let decideExpand = [];
    let decideDeflate = [];
    for(let i = 0; i < 12; i++){
      decideExpand[i] = !this.state.expanded[i] ? null : 'expand';
      decideDeflate[i] = !this.state.deflated[i] ? null : 'deflate';
    }
    let decideImage = this.state.defaultImage
    return(
      <div className = 'project-page-container'>
        <div className = 'project-background'> </div>
        <div className = 'project-container'>
          <ProjectFrame getImage = {decideImage}/>
          <div className = 'project-picture-container'>
            <div className = 'project-all-picture-container'>
              {this.state.allPictures.map((image, i) =>{
                return <EachProject
                  onClick= {this.decideFrame}
                  value = {i}
                  chooseImage = {image}
                  expandImage = {decideExpand[i]}
                  deflateImage = {decideDeflate[i]}
                  onMouseOver = {this.hovered}
                  onMouseLeave = {this.leaving}
                  key={i} />
              })}
            </div>
            <div className = 'project-text-container'>
              <h3 className = 'project-text-title'>
                {this.state.chooseTitle}
              </h3>
              <p className = 'project-text-content'>
                {this.state.chooseDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent
