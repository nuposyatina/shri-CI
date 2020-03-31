import React, { Fragment } from 'react';
import Footer from 'library/Footer';
import Layout from 'library/Layout';
import Builds from 'library/Builds';
import Header from 'library/Header';

export default () => {
  return (
    <Fragment>
      <Header />
      <Layout>
        <section className='Layout__Container BuildHistory'>
          <Builds />
          <button className='Button Button_view_default Button_size_s Button_type_default'>Show more</button>
        </section>
      </Layout>
      <Footer />
    </Fragment>
  )
};
