import React, { Component } from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Build from 'layouts/Build';
import SettingsPage from 'layouts/SettingsPage';
import Root from 'layouts/Root';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class Application extends Component {
  render() {
    return (
      <Router history={ history }>
          <Switch>
            <Route path='/build/:buildId' component={ Build } />
            <Route path='/settings' component={ SettingsPage } />
            <Route path='/' component={ Root } />
          </Switch>
      </Router>
    )
  }
}
