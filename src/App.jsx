import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => {
  return <div>Home</div>
}

const Projects = () => {
  return <div>Projects</div>
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
      </Switch>
      );
  }
}

export default App;