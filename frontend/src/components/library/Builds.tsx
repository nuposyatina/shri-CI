import React from 'react';
import BuildCard from 'library/BuildCard';
import { Build } from 'backend/server';
import { History } from 'history';

export interface BuildsProps {
  builds: Build[];
  dispatch;
  history: History;
}

const Builds: React.FC<BuildsProps> = (props: BuildsProps) => {
  const { builds, dispatch, history } = props;
  return (
  <ul className='Builds'>
    { 
      builds.map(build => (
        <BuildCard
          key={ build.id }
          buildId={ build.id }
          dispatch={ dispatch }
          status='list'
          history={ history }
        />
      ))
    }
  </ul>
)};

export default Builds;
