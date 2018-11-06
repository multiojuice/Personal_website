import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectsData from './content/projects';
import WritingsData from './content/writings';
import {
  Home,
  Posts
} from './pages';
import SinglePost from './pages/SinglePost/SinglePost';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' render={() => <Posts type="projects" data={ProjectsData}/>}/>
        <Route exact path='/writings' render={() => <Posts type="writings" data={WritingsData}/>}/>
        <Route path='/projects/:id' render={(props) => <SinglePost type="projects" data={ProjectsData} {...props} />} />
        <Route path='/writings/:id' render={(props) => <SinglePost type="writings" data={WritingsData} {...props} />} />
      </Switch>
      );
  }
}

export default App;