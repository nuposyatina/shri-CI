import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='Footer__Content'>
          <div className='Footer__Links'>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>Support</a>
            <a href='' className='Footer__Link Text Text_size_s Text_view_secondary'>Learning</a>
          </div>
          <div className='Footer__Copyright Text Text_size_s Text_view_secondary'>© 2020 Your Name</div>
        </div>
      </footer>
    )
  }
}
