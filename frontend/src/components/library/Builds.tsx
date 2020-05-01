import React from 'react';
import BuildCard from 'library/BuildCard';
import { Dispatch } from 'redux';
import { Build } from 'backend/server';

export interface BuildsProps {
  builds: Build[];
  dispatch: Dispatch;
  history: History;
}

const Builds: React.FC<BuildsProps> = ({ builds, dispatch, history }) => (
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
);

export default Builds;
