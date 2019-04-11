import React from 'react';
import stone_background from '../../images/stone_background.jpg';
import Diamond from './Diamond';

class DiamondContainer extends React.Component{
  constructor () {
    super()

    this.state = {
      modalOpenedHobby: false,
      modalOpenedIntern: false,
      modalOpenedActivities: false
    }

    this.hobbyClick = this.hobbyClick.bind(this)
    this.internClick = this.internClick.bind(this)
    this.activitiesClick = this.activitiesClick.bind(this)
  }

  hobbyClick(){
    this.setState({ modalOpenedHobby: !this.state.modalOpenedHobby })
  }
  internClick(){
    this.setState({ modalOpenedIntern: !this.state.modalOpenedIntern })
  }
  activitiesClick(){
    this.setState({ modalOpenedActivities: !this.state.modalOpenedActivities })
  }
  render(){
    const coverClassHobby = this.state.modalOpenedHobby ? 'modal-cover modal-cover-active' : 'modal-cover';
    const containerClassHobby = this.state.modalOpenedHobby ? 'modal-container  modal-hobby' : 'modal-container';
    const coverClassIntern = this.state.modalOpenedIntern ? 'modal-cover modal-cover-active' : 'modal-cover';
    const containerClassIntern = this.state.modalOpenedIntern ? 'modal-container modal-intern' : 'modal-container';
    const coverClassActivities = this.state.modalOpenedActivities ? 'modal-cover modal-cover-active' : 'modal-cover';
    const containerClassActivities = this.state.modalOpenedActivities ? 'modal-container modal-activities' : 'modal-container';

    return(
      <div className = "diamond-container">
        <div className = 'darken-stone-background'>
        </div>
        <img src = {stone_background} alt = "" className = "stone-background"/>
          <div className= 'position-diamond-container'>
            <div className = 'position-hobbies'><Diamond buttonName = {'Hobbies'} colorButton = {'color-gold'} onClick = {() =>this.hobbyClick()}/></div>
            <div className = 'position-intern'><Diamond buttonName = {'Ebir Internship'} colorButton = {'color-red'} onClick = {() => this.internClick()}/></div>
            <div className = 'position-activities'><Diamond buttonName = {'Extracurriculars'} colorButton = {'color-green'} onClick = {() => this.activitiesClick()}/></div>
          </div>
          <div className={containerClassHobby}>
            <div className='modal-header'>
              <div className = 'hobby-header'>
                <div className = 'header-image-hobby'>
                </div>
              </div>
            </div>
            <div className='modal-body hobby-body'>
              <div className = 'hobby-body-content'>
                <h4 className = 'underline'>Electronics:</h4>
                <p> During my first years in college, I decided to choose Electrical Engineering
                  as my major.  The classes were difficult, but I grew to love electronic design.
                  One of my classes had me create multiple circuits with interesting features,
                  including LabVIEW to create a reactive display using sound. That particular
                  project made me go out and buy an Arduino to start tinkering and creating. Today, still,
                  I like to create new electronics and I'm eagerly awaiting the day when I can afford an
                  oscilloscope of my own.
                </p>
                <h4 className = 'underline'>Programming: </h4>
                <p> My interest in programming arose from my interest in electronics.
                  I started to take a real interest when I learned of the limitations of
                  what I could do with electronics.  I could make an LED light up, amplify
                  a signal, or control a simple switch with some transducers, however, I wanted
                  to create a circuit to light up from my phone instead of relying on someone's
                  app.
                </p>
                <h4 className = 'underline'>3D Printing: </h4>
                <p> A year and a half ago, a very exciting moment emerged in my life,
                  my 3D printer.  Ever since I have had it, I have made various models
                  in fusion 360 to house or build components.  The material I enjoy to use the
                  most is PETG, which is non-toxic, stronger than PLA(A common printing plastic),
                  and close to the durability of ABS(plastic used in legos).
                </p>
                <h4 className = 'underline'>Cooking and Baking: </h4>
                <p> When I was little, I loved to bake sweets.  I started out baking
                  for the 4-H county fair.  When I came to college, I started to not only bake,
                  but also cook.  I learned how much care it took to create something delicious.
                  A few noteworthy things I'm proud of to have cooked have been the Beef
                  Wellington and Chicken Kiev.  On the baking side, I always love to make
                  my favorite chocolate cheesecake.
                </p>
              </div>
            </div>
            <div className='modal-footer hobby-footer'>
            </div>
          </div>
          <div className={containerClassIntern}>
            <div className='modal-header'>
              <div className = 'intern-header'>
                <div className = 'header-image-intern'>
                </div>
              </div>
            </div>
            <div className='modal-body intern-body'>
              <div className = 'intern-body-content'>
                <h4 className = 'underline'>Introduction: </h4>
                <p>
                  I worked as an intern in China for a bathroom lighting company called Ebir.
                  The men seen in the middle picture are my fellow engineering
                  co-workers and I relaxing after a hard days work.
                  The experience in China was a large cultural shock for me with different
                  Chinese customs inside and out of work.  For instance, some large differences were
                  the Chinese washing bowls with hot tea before use or a designated nap time after lunch.
                </p>
                <h4 className = 'underline'>Experience Gained: </h4>
                <p>
                  During my time at Ebir, I used Solidworks and Protel 99 SE. In Solidworks,
                  I created models of lighting fixtures based on designs from the
                  company.  I was also tasked with learning Protel 99 SE by myself
                  and teaching the basics to the others.  At Ebir, there were not many electrical engineers
                   in the company and
                  those that were there were more involved in the upper management.
                   Most of Ebir's electronics came from different suppliers and they wanted me to explain
                   how to create the PCB in Protel, then access the Gerber files in case they need to convey design modifications
                   to the circuit.

                </p>
              </div>
            </div>
            <div className='modal-footer'>
            </div>
          </div>
          <div className={containerClassActivities}>
            <div className='modal-header'>
              <div className = 'activity-header'>
                <div className = 'header-image-activity'>
                </div>
              </div>
            </div>
            <div className='modal-body activity-body'>
              <div className = 'activity-body-content'>
                <h4 className = 'underline'>Shell Eco-marathon: </h4>
                <p>
                  Shell Eco-marathon is a yearly event held in Detroit, Michigan where cars race for the best fuel efficiency.
                  There are two types of competitions for the cars, one of the types is creating a fuel-efficient vehicle that is able
                  to run on the road.  The other type is to create an electric vehicle. Our team’s car ran in the compressed natural gas section of the competition.
                  This section was for vehicles that could be driven on the road.  Since I am an electrical engineer, my job on the team was to create the methane
                  sensor on the car.  To see more about the methane sensor, check out my projects page.
                </p>
                <h4 className = 'underline'>SHPE: </h4>
                SHPE, also known as the Society of Hispanic Professional Engineers, is an organization for professional engineers to act as role models in the
                Hispanic community.  My dad is from Costa Rica, so I joined this society because I wanted to act as a role model for other Hispanics.
                SHPE's goal is to provide social networking to engineers.  Each year, SHPE holds an international conference for networking and I will be
                participating in this year.
                <p>
                </p>
              </div>
            </div>
            <div className='modal-footer'>
            </div>
          </div>

          <div className={coverClassHobby} onClick={this.hobbyClick}></div>
          <div className={coverClassIntern} onClick={this.internClick}></div>
          <div className={coverClassActivities} onClick={this.activitiesClick}></div>
      </div>
      );
  }
}

export default DiamondContainer
