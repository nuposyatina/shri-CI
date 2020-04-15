import React, { Component, Fragment } from 'react'
import Header from 'library/Header';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import BuildCard from 'library/BuildCard';
import { connect } from 'react-redux';
import Logs from 'library/Logs';
import { Link } from 'react-router-dom';


class Build extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      buildId: null
    }
  }
  

  componentDidMount() {
    // const { buildId } = this.props.match.params;
    // const { builds } = this.props.buildsQueue;
    // const build = builds.find(build => build.buildNumber === +buildNumber);
    // if (build) {
    //   this.setState({buildId: build.id})
    // }
  }

  render() {
    const { dispatch, settings } = this.props;
    return (
      <Fragment>
        <Header 
          headerText={ settings.repoName }
          headerView='primary'
        >
          <div className='Header__Action'>
            <button className='Header__Button Button Button_size_s Button_role_build Button_view_default Button_type_action Button_textVisible'>
              <svg className='Button__Icon Button__Icon_view_primary' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.77548 3.03097C8.01915 2.32277 7.03761 1.93456 5.99632 1.93548C4.12234 1.93713 2.50452 3.22205 2.05783 5.00444C2.02531 5.13419 1.90972 5.22581 1.77595 5.22581H0.389589C0.208185 5.22581 0.070379 5.06112 0.103935 4.88284C0.627411 2.103 3.06806 0 6 0C7.60761 0 9.06752 0.632322 10.1447 1.66173L11.0088 0.797661C11.3746 0.431879 12 0.690944 12 1.20825V4.45161C12 4.7723 11.74 5.03226 11.4194 5.03226H8.17599C7.65869 5.03226 7.39962 4.40683 7.7654 4.04102L8.77548 3.03097ZM0.580645 6.96774H3.82401C4.34131 6.96774 4.60038 7.59317 4.2346 7.95898L3.22452 8.96906C3.98085 9.67727 4.96246 10.0655 6.00377 10.0645C7.87679 10.0628 9.49527 8.7788 9.94217 6.99561C9.97468 6.86586 10.0903 6.77424 10.224 6.77424H11.6104C11.7918 6.77424 11.9296 6.93893 11.8961 7.11721C11.3726 9.897 8.93194 12 6 12C4.39239 12 2.93248 11.3677 1.85528 10.3383L0.99121 11.2023C0.625427 11.5681 0 11.3091 0 10.7917V7.54839C0 7.2277 0.25996 6.96774 0.580645 6.96774Z"/>
                </svg>
              <span className='Button__Text'>Rebuild</span>
            </button>
            <Link className='Button Button_size_s Button_role_settings Button_view_default Button_type_action' to='/settings'>
              <svg className='Button__Icon Button__Icon_view_primary' width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
                <path d='M11.3408 7.44193L10.3102 6.84677C10.4142 6.28548 10.4142 5.70968 10.3102 5.14839L11.3408 4.55323C11.4594 4.48549 11.5126 4.34517 11.4739 4.21452C11.2053 3.35324 10.7481 2.57421 10.1505 1.92582C10.0586 1.82663 9.90858 1.80244 9.79245 1.87018L8.76181 2.46534C8.32874 2.09276 7.83036 1.80485 7.29085 1.61615V0.428247C7.29085 0.292763 7.19649 0.174216 7.06343 0.145183C6.17553 -0.0532029 5.26585 -0.0435256 4.4215 0.145183C4.28844 0.174216 4.19408 0.292763 4.19408 0.428247V1.61856C3.65699 1.80969 3.1586 2.0976 2.72312 2.46776L1.6949 1.8726C1.57635 1.80485 1.42877 1.82663 1.33684 1.92824C0.739258 2.57421 0.282002 3.35324 0.0134545 4.21694C-0.0276744 4.34759 0.0279705 4.48791 0.146518 4.55565L1.17716 5.15081C1.07313 5.7121 1.07313 6.2879 1.17716 6.84919L0.146518 7.44435C0.0279705 7.51209 -0.0252551 7.65241 0.0134545 7.78306C0.282002 8.64434 0.739258 9.42337 1.33684 10.0718C1.42877 10.171 1.57877 10.1951 1.6949 10.1274L2.72554 9.53224C3.1586 9.90482 3.65699 10.1927 4.1965 10.3814V11.5718C4.1965 11.7072 4.29086 11.8258 4.42392 11.8548C5.31182 12.0532 6.2215 12.0435 7.06585 11.8548C7.19891 11.8258 7.29327 11.7072 7.29327 11.5718V10.3814C7.83036 10.1903 8.32874 9.9024 8.76423 9.53224L9.79487 10.1274C9.91342 10.1951 10.061 10.1734 10.1529 10.0718C10.7505 9.42579 11.2078 8.64676 11.4763 7.78306C11.5126 7.64999 11.4594 7.50967 11.3408 7.44193ZM5.74247 7.93306C4.67553 7.93306 3.80699 7.06451 3.80699 5.99758C3.80699 4.93065 4.67553 4.0621 5.74247 4.0621C6.8094 4.0621 7.67794 4.93065 7.67794 5.99758C7.67794 7.06451 6.8094 7.93306 5.74247 7.93306Z'/>
              </svg>
              <span className='Button__Text'>Settings</span>
            </Link>
          </div>
        </Header>
        <Layout>
          <section className='Layout__Container BuildDetails'>
            <BuildCard 
              buildId={ this.props.match.params.buildId }
              dispatch={ dispatch }
              status='details'
            />
          </section>
          { this.state.buildId && (
            <Logs buildId={ this.state.buildId } />
          ) }
        </Layout>
        <Footer />
      </Fragment>
    )
  }
}

export default connect((state) => {
  return {
    build: state.build,
    buildsQueue: state.buildsQueue,
    buildDetails: state.buildDetails,
    settings: state.settings
  };
})(Build);