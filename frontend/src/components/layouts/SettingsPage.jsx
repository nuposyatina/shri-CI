import React, { Fragment } from 'react';
import Header from 'library/Header.tsx';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import Form from 'library/Form';

export default ({ history }) => {
  return (
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
  )
};
