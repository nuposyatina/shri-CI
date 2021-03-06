import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Build from 'layouts/Build';
import SettingsPage from 'layouts/SettingsPage';
import Root from 'layouts/Root';

import { history } from 'store/configureStore';

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
