import React from 'react';
import{ Switch, Route, BrowserRouter}  from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
