import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuildsHistory from 'layouts/BuildsHistory';
import Main from 'layouts/Main';
class Root extends Component {
  
  render() {
    const { settings, history } = this.props;
    return (
        settings.id ? (
          <BuildsHistory settings={ settings } history={ history } />
        ) : (
          <Main />
        )
    )
  }
}

export default connect((state) => {
  return {
    settings: state.settings
  };
})(Root);