import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <div className='Header__Content'>
          <h1 className='Text Text_size_xl Text_view_primary Title Header__Title'>philip1967/my-aw esome-repo-with-long-long-long-repo-name</h1>
          { this.props.children }
        </div>
      </header>
    )
  }
}
