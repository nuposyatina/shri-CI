import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ headerText, headerView, children }) => (
  <header className='Header'>
    <div className='Header__Content'>
      <Link className='Header__Link' to='/'>
        <h1
          className={ `Text Text_size_xl Text_view_${headerView} Title Header__Title` }
        >
          { headerText }
        </h1>
      </Link>
      { children }
    </div>
  </header>
);

export default Header;