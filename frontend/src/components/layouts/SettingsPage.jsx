import React, { Component, Fragment } from 'react'
import Header from '../library/Header'
import Layout from '../library/Layout'
import Footer from '../library/Footer'
import Form from '../library/Form'

export default class SettingsPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <section className='Layout__Container Settings'>
            <Form />
          </section>
        </Layout>
        <Footer />
      </Fragment>
    )
  }
}
