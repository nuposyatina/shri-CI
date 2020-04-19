import React, { Fragment } from 'react';
import Header from 'library/Header';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import SettingsPreview from 'library/SettingsPreview';
import { Link } from 'react-router-dom';
import SettingsIcon from 'img/settings.svg';

export default () => {
  return (
    <Fragment>
      <Header
        headerText='School CI server'
        headerView='secondary'
      >
        <Link className='Button Button_size_s Button_role_settings Button_view_default Button_textVisible Button_type_action' to='/settings'>
          <SettingsIcon className='Button__Icon Button__Icon_view_primary'/>
          <span className='Button__Text'>Settings</span>
        </Link>
      </Header>
      <Layout>
        <SettingsPreview />
      </Layout>
      <Footer />
    </Fragment>
  )
};
