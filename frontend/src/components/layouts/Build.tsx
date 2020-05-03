import React, { Component, Fragment } from 'react'
import Header from 'library/Header';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import BuildCard from 'library/BuildCard';
import { connect, RootStateOrAny } from 'react-redux';
import Logs from 'library/Logs';
import { Link } from 'react-router-dom';
import SettingsIcon from 'img/settings.svg';
import RebuildIcon from 'img/rebuild.svg';
import { Dispatch } from 'redux';
import { History } from 'history';

export interface BuildProps {
  dispatch: Dispatch;
  settings: {
    repoName: string;
  },
  match: {
    params: {
      buildId: string;
    }
  },
  history: History
}
const Build: React.FC<BuildProps> = ({ dispatch, settings, match, history }) => (
  <Fragment>
    <Header 
      headerText={ settings.repoName }
      headerView='primary'
    >
      <div className='Header__Action'>
        <button className='Header__Button Button Button_size_s Button_role_build Button_view_default Button_type_action Button_textVisible'>
          <RebuildIcon className='Button__Icon Button__Icon_view_primary'/>
          <span className='Button__Text'>Rebuild</span>
        </button>
        <Link className='Button Button_size_s Button_role_settings Button_view_default Button_type_action' to='/settings'>
          <SettingsIcon className='Button__Icon Button__Icon_view_primary'/>
          <span className='Button__Text'>Settings</span>
        </Link>
      </div>
    </Header>
    <Layout>
      <section className='Layout__Container BuildDetails'>
        <BuildCard 
          buildId={ match.params.buildId }
          dispatch={ dispatch }
          status='details'
          history={ history }
        />
      </section>
      <Logs buildId={ match.params.buildId } />
    </Layout>
    <Footer />
  </Fragment>
);

export default connect((state: RootStateOrAny) => {
  return {
    build: state.build,
    buildsQueue: state.buildsQueue,
    buildDetails: state.buildDetails,
    settings: state.settings
  };
})(Build);