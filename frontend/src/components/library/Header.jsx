import React, { Component } from 'react';
import cx from 'classnames';

export default class Header extends Component {
  render() {
    const { headerText, headerView } = this.props;
    return (
      <header className='Header'>
        <div className='Header__Content'>
          <h1
            className={ `Text Text_size_xl Text_view_${headerView} Title Header__Title` }
          >
            { headerText }
          </h1>
          { this.props.children }
        </div>
      </header>
    )
  }
}
