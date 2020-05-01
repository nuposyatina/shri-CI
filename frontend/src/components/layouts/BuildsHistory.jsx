import React, { Fragment, Component } from 'react';
import Footer from 'library/Footer';
import Layout from 'library/Layout';
import Builds from 'library/Builds';
import Header from 'library/Header';
import Modal from 'library/Modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RunBuildIcon from 'img/runBuild.svg';
import SettingsIcon from 'img/settings.svg';
import { getBuilds } from 'store/actions/buildsQueue';

export class BuildsHistory extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showModal: false,
      offset: 0,
      limit: 5
    }

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onShowMoreBuilds = this.onShowMoreBuilds.bind(this);
  }

  componentDidMount() {
    const { limit, offset } = this.state;
    this.props.dispatch(getBuilds({ limit, offset }));
    this.setState({ offset: this.state.offset + 5 });
  }

  onOpenModal() {
    this.setState({ showModal: true });
  }

  onCloseModal() {
    this.setState({ showModal: false })
  }

  onShowMoreBuilds() {
    const { limit, offset } = this.state;
    this.props.dispatch(getBuilds({ limit, offset }));
    this.setState({ offset: this.state.offset + 5 });
  }
  
  render() {
    const { settings, history, dispatch, buildsQueue } = this.props;
    return (
      <Fragment>
        <Header
          headerText={ settings.repoName }
          headerView='primary'
        >
          <div className='Header__Action'>
            <button
              id='build'
              className='Header__Button Button Button_size_s Button_role_build Button_view_default Button_type_action Button_textVisible'
              onClick={ this.onOpenModal }
            >
              <RunBuildIcon className='Button__Icon Button__Icon_view_primary' />
              <span className='Button__Text'>Run build</span>
            </button>
            <Link
              className='Button Button_size_s Button_role_settings Button_view_default Button_type_action'
              to='/settings'
            >
              <SettingsIcon className='Button__Icon Button__Icon_view_primary'/>
              <span className='Button__Text'>Settings</span>
            </Link>
          </div>
        </Header>
        <Layout>
          <section className='Layout__Container BuildHistory'>
            { this.state.showModal && (
              <Modal dispatch={ dispatch } onClose={ this.onCloseModal }/>
            ) }
            <Builds 
              builds={ buildsQueue.builds }
              dispatch={ dispatch }
              history={ history }
            />
            { !buildsQueue.allBuildsLoaded && (
              <button
                id='show-more'
                className='Button Button_view_default Button_size_s Button_type_default'
                onClick={ this.onShowMoreBuilds }
              >Show more</button>
            ) }
          </section>
        </Layout>
        <Footer />
      </Fragment>
    )
  }
};

export default connect((state) => {
  return {
    buildsQueue: state.buildsQueue
  };
})(BuildsHistory);