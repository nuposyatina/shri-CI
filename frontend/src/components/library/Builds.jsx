import React, { Component } from 'react'
import BuildCard from './BuildCard';

export default class Builds extends Component {
  render() {
    const { builds } = this.props;
    return (
        <ul className='Builds'>
          { builds.map(build => (
              <BuildCard
                key={ build.id }
                buildData={ build }
                status='list'
              />
            ))
          }
        </ul>
    )
  }
}
