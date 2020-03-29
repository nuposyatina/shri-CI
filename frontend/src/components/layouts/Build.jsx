import React, { Component, Fragment } from 'react'
import Header from '../library/Header'
import Layout from '../library/Layout'
import Footer from '../library/Footer'
import BuildCard from '../library/BuildCard'
import Form from '../library/Form'
import Logs from '../library/Logs'

export default class Build extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <section className='Layout__Container BuildDetails'>
            <BuildCard />
          </section>
          <Logs />
        </Layout>
        <Footer />
      </Fragment>
    )
  }
}
