import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuildsHistory from 'layouts/BuildsHistory';
import Main from 'layouts/Main';
import { getSettings } from '../../store/actions/settings';
class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getSettings());
  }
  
  render() {
    const { settings } = this.props;
    return (
        settings.id ? (
          <BuildsHistory settings={ settings } />
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