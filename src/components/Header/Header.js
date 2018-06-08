import React from 'react';
import {Link} from 'react-router-dom'
import FontAwesome from 'react-font-awesome'

import style from './header.css'

const Header = () => {

  const logo = () => {
    <Link to="/" className={style.logo}>
      <img src="/logo.png" alt="wc18 logo"/>
    </Link>
  }

  const navBar = () => {
    return (
      <FontAwesome name="bars"
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: pointer
        }}
        />
    )
  }

  return (
    <header>
      <div className={style.header}>
        <div className={style.headeropt}></div>
        {navBar()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;