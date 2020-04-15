import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from 'img/logo.svg';

export default class SettingsPreview extends Component {
  render() {
    return (
      <section className='Layout__Container SettingsPreview'>
        <LogoIcon className='SettingsPreview__Logo' width="124" height="124" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg" />
        <p className='SettingsPreview__Description Text Text_size_s Text_view_primary'>Configure repository connection and synchronization settings</p>
        <Link to='/settings' className='Button Button_size_m Button_view_submit Button_type_default'>Open Settings</Link>
      </section>
    )
  }
}
