import React, { Component } from 'react'
import BuildCard from './BuildCard';

export default class Builds extends Component {
  render() {
    const { builds, dispatch } = this.props;
    return (
        <ul className='Builds'>
          { builds.map(build => (
              <BuildCard
                key={ build.id }
                buildId={ build.id }
                dispatch={ dispatch }
                status='list'
              />
            ))
          }
        </ul>
    )
  }
};
