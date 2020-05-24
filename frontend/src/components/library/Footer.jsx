import React, { Component } from 'react';
import { localize } from 'lib';

export default class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='Footer__Content'>
          <div className='Footer__Links'>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>{ localize('Footer_SupportLink') }</a>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>{ localize('Footer_LearningLink') }</a>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>{ localize('Footer_LangLink') }</a>
          </div>
          <div className='Footer__Copyright Text Text_size_s Text_view_secondary'>{ localize('Footer_Copyright') }</div>
        </div>
      </footer>
    )
  }
}
