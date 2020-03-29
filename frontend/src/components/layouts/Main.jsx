import React, { Component, Fragment } from 'react'
import Header from '../library/Header'
import Layout from '../library/Layout'
import Footer from '../library/Footer'
import SettingsPreview from '../library/SettingsPreview'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <SettingsPreview />
        </Layout>
        <Footer />
      </Fragment>
    )
  }
}
