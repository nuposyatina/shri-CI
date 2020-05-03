import React, { Component } from 'react'
import { connect, RootStateOrAny } from 'react-redux';
import { getLogs } from 'store/actions/logs';

export interface LogProps {
  buildId: string;
  dispatch;
  logs: string;
}

class Logs extends Component<LogProps> {

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

export default connect((state: RootStateOrAny) => {
  return {
    logs: state.logs
  };
})(Logs);
