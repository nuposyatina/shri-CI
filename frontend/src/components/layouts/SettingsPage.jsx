import React, { Fragment } from 'react';
import Header from 'library/Header';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import Form from 'library/Form';
import { localize } from 'lib';


export default ({ history }) => {
  return (
    <Fragment>
      <Header
        headerText={ localize('Main_Header') }
        headerView='secondary'
      />
      <Layout>
        <section className='Layout__Container Settings'>
          <Form history={ history } />
        </section>
      </Layout>
      <Footer />
    </Fragment>
  )
};
