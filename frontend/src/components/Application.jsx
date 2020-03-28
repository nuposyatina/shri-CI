import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Build from 'layouts/Build';
import Settings from 'layouts/Settings';
import Root from 'layouts/Root';

export default class Application extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/build/:buildId' component={ Build } />
            <Route path='/settings' component={ Settings } />
            <Route path='/' component={ Root } />
          </Switch>
      </BrowserRouter>
    )
  }
}
