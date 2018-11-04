import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home
} from './pages';

const Projects = () => {
  return <div>Projects</div>
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects/:id' component={Projects}/>
      </Switch>
      );
  }
}

export default App;