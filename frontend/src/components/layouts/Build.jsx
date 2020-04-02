import React, { Fragment } from 'react';
import Header from 'library/Header';
import Layout from 'library/Layout';
import Footer from 'library/Footer';
import BuildCard from 'library/BuildCard';
import Logs from 'library/Logs';

const Build = () => {
  return (
    <Fragment>
      <Header />
      <Layout>
        <section className='Layout__Container BuildDetails'>
          {/* <BuildCard /> */}
        </section>
        <Logs />
      </Layout>
      <Footer />
    </Fragment>
  )
};

export default Build;