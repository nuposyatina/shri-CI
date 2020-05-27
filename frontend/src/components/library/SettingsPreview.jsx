import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from 'img/logo.svg';
import { localize } from 'lib';

const SettingsPreview = () => (
  <section className='Layout__Container SettingsPreview'>
    <LogoIcon
      className='SettingsPreview__Logo'
      width="124"
      height="124"
      viewBox="0 0 124 124"
      xmlns="http://www.w3.org/2000/svg"
    />
    <p
      className='SettingsPreview__Description Text Text_size_s Text_view_primary'
    >
      { localize('Main_Text') }
    </p>
    <Link
      className='Button Button_size_m Button_view_submit Button_type_default'
      to='/settings'
    >
      { localize('Main_Button') }
    </Link>
  </section>
);

export default SettingsPreview;