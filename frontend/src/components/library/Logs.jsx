import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getLogs } from '../../store/actions/logs';

class Logs extends Component {

  componentDidMount() {
    this.props.dispatch(getLogs(this.props.buildId));
  }
  
  render() {
    return (
      <pre className='Logs Layout__Container'>
        <code>
          {
            this.props.logs
          }
        </code>
        </pre>
    )
  }
}

export default connect((state) => {
  return {
    logs: state.logs
  };
})(Logs);
