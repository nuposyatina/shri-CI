import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <main className="Layout">
        { this.props.children }
      </main>
    )
  }
}
