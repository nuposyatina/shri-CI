import React, { Component } from 'react';
import { connect } from 'react-redux';

import BuildsHistory from 'layouts/BuildsHistory';
import Main from 'layouts/Main';
class Root extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       settings: null
    }
  }
  
  render() {
    return (
        this.props.settings.id ? (
          <BuildsHistory />
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