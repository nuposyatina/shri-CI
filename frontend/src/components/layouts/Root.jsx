import React, { Component } from 'react';
import BuildsHistory from 'layouts/BuildsHistory';
import Main from 'layouts/Main';

export default class Root extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       settings: null
    }
  }
  
  render() {
    return (
        this.state.settings ? (
          <BuildsHistory />
        ) : (
          <Main />
        )
    )
  }
}
