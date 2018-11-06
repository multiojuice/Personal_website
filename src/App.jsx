import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectsData from './content/projects';
import {
  Home,
  Posts
} from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' render={() => <Posts data={ProjectsData}/>}/>
        <Route exact path='/projects/:id' component={Posts}/>
      </Switch>
      );
  }
}

export default App;