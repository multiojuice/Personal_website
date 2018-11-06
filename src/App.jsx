import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  Projects
} from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/projects/:id' component={Projects}/>
      </Switch>
      );
  }
}

export default App;