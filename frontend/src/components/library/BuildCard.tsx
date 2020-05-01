import React, { Component, Fragment } from 'react'
import { getBuildDetails } from 'store/actions/buildDetails';
import { connect, RootStateOrAny } from 'react-redux';
import cx from 'classnames';
import { formatDuration } from 'library/lib';
import SuccessIcon from 'img/success.svg';
import ProgressIcon from 'img/progress.svg';
import FailIcon from 'img/fail.svg';
import CommitIcon from 'img/commit.svg';
import UserIcon from 'img/user.svg';
import CalendarIcon from 'img/calendar.svg';
import ClockIcon from 'img/clock.svg';
//TODO: учитывать таймзону
import moment from 'moment';
import 'moment/locale/ru';
import { History } from 'history';

export interface BuildCardProps {
  buildId: string;
  buildDetails: string;
  status: string;
  dispatch;
  history: History;
};

export class BuildCard extends Component<BuildCardProps> {
  componentDidMount() {
    const { buildId, dispatch } = this.props;
    dispatch(getBuildDetails(buildId));
  }

  onSelectBuild(buildId: string) {
    return () => {
      this.props.history.push(`/build/${buildId}`);
    }
  }

  render() {
    const { buildDetails, buildId, status } = this.props;
    const currentBuild = buildDetails[buildId];
    return (
      <Fragment>
      { currentBuild && (
        <a
          onClick={ this.onSelectBuild(buildId) }
          className={`BuildCard BuildCard_status_${status}`}
        >
          <div className='BuildCard__Content'>
            <div className='BuildCard__Info'>
              <div className='BuildCard__Main'>
                <SuccessIcon 
                  className={
                    cx({
                      'BuildCard__Status': true,
                      'BuildCard__Status_status_success': currentBuild && currentBuild.status === 'Success',
                      'BuildCard__Status_status_progress': currentBuild && (currentBuild.status === 'Waiting' || currentBuild.status === 'InProgress'),
                      'BuildCard__Status_status_fail': currentBuild && (currentBuild.status === 'Fail' || currentBuild.status === 'Canceled'),
                    })
                  }
                />
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
                  <CommitIcon className='BuildCard__Icon' />
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
                  <UserIcon className='BuildCard__Icon' />
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
                  <CalendarIcon className='BuildCard__Icon' />
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
                    <ClockIcon className='BuildCard__Icon' />
                    <span
                      className='BuildCard__Time Text Text_size_s Text_view_primary'
                    >
                      { formatDuration(currentBuild.duration) }
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

export default connect((state: RootStateOrAny) => {
  return {
    buildDetails: state.buildDetails
  };
}, null)(BuildCard);
