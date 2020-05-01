import React, { Component } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import BuildsHistory from 'layouts/BuildsHistory';
import Main from 'layouts/Main';
import { History } from 'history';

export interface RootProps {
  settings: {
    id?: string;
    repoName: string;
  };
  history: History;
}

const Root: React.FC<RootProps> = ({ settings, history }) => (
  settings.id ? (
    <BuildsHistory settings={ settings } history={ history } />
  ) : (
    <Main />
  )
);

export default connect((state: RootStateOrAny) => {
  return {
    settings: state.settings
  };
})(Root);