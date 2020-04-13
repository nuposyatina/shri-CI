import React, { Component, Fragment } from 'react'
import { getBuildDetails } from '../../store/actions/buildDetails';
import { connect } from 'react-redux';
import cx from 'classnames';
import moment from 'moment';
import 'moment/locale/ru';

export class BuildCard extends Component {  
  componentDidMount() {
    const { buildId, dispatch } = this.props;
    dispatch(getBuildDetails(buildId));
  }

  formatDuration(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours} ч ${minutes} мин`
  }

  onSelectBuild(buildNumber, status) {
    return () => {
      if (!(status === 'Success' || status == 'Fail')) return;
      this.props.history.push(`/build/${buildNumber}`);
    }
  }

  render() {
    const { buildDetails, buildId, status } = this.props;
    const currentBuild = buildDetails[buildId];
    return (
      <Fragment>
      { currentBuild && (
        <a
          onClick={ this.onSelectBuild(currentBuild.buildNumber, currentBuild.status) }
          className={`BuildCard BuildCard_status_${status}`}
        >
          <div className='BuildCard__Content'>
            <div className='BuildCard__Info'>
              <div className='BuildCard__Main'>
                <svg 
                  className={
                    cx({
                      'BuildCard__Status': true,
                      'BuildCard__Status_status_success': currentBuild && currentBuild.status === 'Success',
                      'BuildCard__Status_status_progress': currentBuild && (currentBuild.status === 'Waiting' || currentBuild.status === 'InProgress'),
                      'BuildCard__Status_status_fail': currentBuild && (currentBuild.status === 'Fail' || currentBuild.status === 'Canceled'),
                    })
                  }
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M15.1042 7.99992C15.1042 11.9235 11.9236 15.1041 8.00004 15.1041C4.07651 15.1041 0.895874 11.9235 0.895874 7.99992C0.895874 4.07639 4.07651 0.895752 8.00004 0.895752C11.9236 0.895752 15.1042 4.07639 15.1042 7.99992ZM7.17831 11.7615L12.4491 6.49068C12.6281 6.31171 12.6281 6.02149 12.4491 5.84251L11.801 5.19435C11.622 5.01534 11.3318 5.01534 11.1528 5.19435L6.85421 9.49288L4.84731 7.48598C4.66833 7.307 4.37812 7.307 4.19911 7.48598L3.55094 8.13415C3.37196 8.31313 3.37196 8.60334 3.55094 8.78232L6.53011 11.7615C6.70912 11.9405 6.9993 11.9405 7.17831 11.7615Z'/>
                </svg>
                <div
                  className={
                    cx({
                      'BuildCard__Number': true,
                      'BuildCard__Number_status_success': currentBuild && currentBuild.status === 'Success',
                      'BuildCard__Number_status_progress': currentBuild && (currentBuild.status === 'Waiting' || currentBuild.status === 'InProgress'),
                      'BuildCard__Number_status_fail': currentBuild && (currentBuild.status === 'Fail' || currentBuild.status === 'Canceled'),
                      'Text': true,
                      'Text_size_l': true,
                      'Text_view_success': currentBuild && currentBuild.status === 'Success',
                      'Text_view_progress': currentBuild && (currentBuild.status === 'Waiting' || currentBuild.status === 'InProgress'),
                      'Text_view_fail': currentBuild && (currentBuild.status === 'Fail' || currentBuild.status === 'Canceled'),
                    })
                  }
                >
                  #{ currentBuild.buildNumber }
                </div>
                <p
                  className='BuildCard__Description Text Text_size_m Text_view_primary'
                >
                  { currentBuild.commitMessage }
                </p>
              </div>
              <div className='BuildCard__Git'>
                <div className='BuildCard__CommitInfo'>
                  <svg
                    className='BuildCard__Icon'
                    width='16'
                    height='8'
                    viewBox='0 0 16 8'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M3.2 4C3.2 4.27 3.2225 4.5375 3.265 4.8H0.3C0.135 4.8 0 4.665 0 4.5V3.5C0 3.335 0.135 3.2 0.3 3.2H3.265C3.2225 3.4625 3.2 3.73 3.2 4ZM15.7 3.2H12.735C12.78 3.4625 12.8 3.73 12.8 4C12.8 4.27 12.7775 4.5375 12.735 4.8H15.7C15.865 4.8 16 4.665 16 4.5V3.5C16 3.335 15.865 3.2 15.7 3.2ZM8 1.2C7.2525 1.2 6.55 1.4925 6.02 2.02C5.49 2.55 5.2 3.2525 5.2 4C5.2 4.7475 5.49 5.45 6.02 5.98C6.55 6.5075 7.2525 6.8 8 6.8C8.7475 6.8 9.45 6.5075 9.98 5.98C10.51 5.45 10.8 4.7475 10.8 4C10.8 3.2525 10.51 2.55 9.98 2.02C9.45 1.4925 8.7475 1.2 8 1.2ZM8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0Z'/>
                  </svg>
                  <div
                    className='BuildCard__Branch Text Text_size_s Text_view_primary'
                  >
                    { currentBuild.branchName }
                  </div>
                  <div
                    className='BuildCard__Commit Text Text_size_s Text_view_primary'
                  >
                    { currentBuild.commitHash.slice(0, 7) }
                  </div>
                </div>
                <div className='BuildCard__UserInfo'>
                  <svg
                    className='BuildCard__Icon'
                    width='13'
                    height='14'
                    viewBox='0 0 13 14'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M6.125 7C8.0582 7 9.625 5.4332 9.625 3.5C9.625 1.5668 8.0582 0 6.125 0C4.1918 0 2.625 1.5668 2.625 3.5C2.625 5.4332 4.1918 7 6.125 7ZM8.575 7.875H8.11836C7.51133 8.15391 6.83594 8.3125 6.125 8.3125C5.41406 8.3125 4.74141 8.15391 4.13164 7.875H3.675C1.64609 7.875 0 9.52109 0 11.55V12.6875C0 13.4121 0.587891 14 1.3125 14H10.9375C11.6621 14 12.25 13.4121 12.25 12.6875V11.55C12.25 9.52109 10.6039 7.875 8.575 7.875Z'/>
                    </svg>
                  <div
                    className='BuildCard__Author Text Text_size_s Text_view_primary'
                  >
                    { currentBuild.authorName }
                  </div>
                </div>
              </div>
            </div>
            { currentBuild.start && (
              <div className='BuildCard__BuildDateTime'>
                <div className='BuildCard__DateInfo'>
                  <svg
                    className='BuildCard__Icon'
                    width='14'
                    height='16'
                    viewBox='0 0 14 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M4.60806 9H3.36264C3.15714 9 2.98901 8.83125 2.98901 8.625V7.375C2.98901 7.16875 3.15714 7 3.36264 7H4.60806C4.81355 7 4.98169 7.16875 4.98169 7.375V8.625C4.98169 8.83125 4.81355 9 4.60806 9ZM7.9707 8.625V7.375C7.9707 7.16875 7.80256 7 7.59707 7H6.35165C6.14615 7 5.97802 7.16875 5.97802 7.375V8.625C5.97802 8.83125 6.14615 9 6.35165 9H7.59707C7.80256 9 7.9707 8.83125 7.9707 8.625ZM10.9597 8.625V7.375C10.9597 7.16875 10.7916 7 10.5861 7H9.34066C9.13517 7 8.96703 7.16875 8.96703 7.375V8.625C8.96703 8.83125 9.13517 9 9.34066 9H10.5861C10.7916 9 10.9597 8.83125 10.9597 8.625ZM7.9707 11.625V10.375C7.9707 10.1687 7.80256 10 7.59707 10H6.35165C6.14615 10 5.97802 10.1687 5.97802 10.375V11.625C5.97802 11.8313 6.14615 12 6.35165 12H7.59707C7.80256 12 7.9707 11.8313 7.9707 11.625ZM4.98169 11.625V10.375C4.98169 10.1687 4.81355 10 4.60806 10H3.36264C3.15714 10 2.98901 10.1687 2.98901 10.375V11.625C2.98901 11.8313 3.15714 12 3.36264 12H4.60806C4.81355 12 4.98169 11.8313 4.98169 11.625ZM10.9597 11.625V10.375C10.9597 10.1687 10.7916 10 10.5861 10H9.34066C9.13517 10 8.96703 10.1687 8.96703 10.375V11.625C8.96703 11.8313 9.13517 12 9.34066 12H10.5861C10.7916 12 10.9597 11.8313 10.9597 11.625ZM13.9487 3.5V14.5C13.9487 15.3281 13.2793 16 12.4542 16H1.49451C0.669414 16 0 15.3281 0 14.5V3.5C0 2.67188 0.669414 2 1.49451 2H2.98901V0.375C2.98901 0.16875 3.15714 0 3.36264 0H4.60806C4.81355 0 4.98169 0.16875 4.98169 0.375V2H8.96703V0.375C8.96703 0.16875 9.13517 0 9.34066 0H10.5861C10.7916 0 10.9597 0.16875 10.9597 0.375V2H12.4542C13.2793 2 13.9487 2.67188 13.9487 3.5ZM12.4542 14.3125V5H1.49451V14.3125C1.49451 14.4156 1.57857 14.5 1.68132 14.5H12.2674C12.3701 14.5 12.4542 14.4156 12.4542 14.3125Z'/>
                  </svg>                
                  <time
                    className='BuildCard__Date Text Text_size_s Text_view_primary'
                    dateTime='2020-01-21 03:06'
                  >
                    {
                      moment(currentBuild.start).locale('ru').format("D MMM HH:mm")
                    }
                  </time>
                </div>
                { currentBuild.duration && (
                  <div className='BuildCard__TimeInfo'>
                    <svg
                      className='BuildCard__Icon'
                      width='14'
                      height='16'
                      viewBox='0 0 14 16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M12.2789 5.75L12.9834 5.04375C13.1299 4.89687 13.1299 4.65937 12.9834 4.5125L12.4535 3.98125C12.307 3.83438 12.07 3.83438 11.9235 3.98125L11.2783 4.62813C10.3088 3.76875 9.08371 3.19375 7.73082 3.04063V1.5H8.60365C8.80939 1.5 8.97772 1.33125 8.97772 1.125V0.375C8.97772 0.16875 8.80939 0 8.60365 0H5.3617C5.15596 0 4.98763 0.16875 4.98763 0.375V1.125C4.98763 1.33125 5.15596 1.5 5.3617 1.5H6.23454V3.04375C3.00506 3.41563 0.498779 6.1625 0.498779 9.5C0.498779 13.0906 3.40095 16 6.98268 16C10.5644 16 13.4666 13.0906 13.4666 9.5C13.4666 8.10312 13.027 6.80937 12.2789 5.75ZM6.98268 14.5C4.22702 14.5 1.99506 12.2625 1.99506 9.5C1.99506 6.7375 4.22702 4.5 6.98268 4.5C9.73833 4.5 11.9703 6.7375 11.9703 9.5C11.9703 12.2625 9.73833 14.5 6.98268 14.5ZM7.35675 11H6.60861C6.40287 11 6.23454 10.8313 6.23454 10.625V6.375C6.23454 6.16875 6.40287 6 6.60861 6H7.35675C7.56249 6 7.73082 6.16875 7.73082 6.375V10.625C7.73082 10.8313 7.56249 11 7.35675 11Z'/>
                    </svg>
                    <span
                      className='BuildCard__Time Text Text_size_s Text_view_primary'
                    >
                      { this.formatDuration(currentBuild.duration) }
                    </span>
                  </div>
                ) }
              </div>
            ) }
          </div>
        </a>
      ) }
      </Fragment>
    )
  }
}

export default connect((state) => {
  return {
    buildDetails: state.buildDetails
  };
})(BuildCard);
