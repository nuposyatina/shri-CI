import React, { Fragment } from 'react';
import Header from 'library/Header';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import Form from 'library/Form';
import { History } from 'history';

const SettingsPage: React.FC<{ history: History }> = ({ history }) => (
  <Fragment>
    <Header
      headerText='School CI server'
      headerView='secondary'
    />
    <Layout>
      <section className='Layout__Container Settings'>
        <Form history={ history } />
      </section>
    </Layout>
    <Footer />
  </Fragment>
);

export default SettingsPage;