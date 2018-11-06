import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectsData from './content/projects';
import WritingsData from './content/writings';
import {
  Home,
  Posts
} from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' render={() => <Posts type="projects" data={ProjectsData}/>}/>
        <Route exact path='/projects/:id' component={Posts}/>
        <Route exact path='/writings' render={() => <Posts type="writings" data={WritingsData}/>}/>
      </Switch>
      );
  }
}

export default App;