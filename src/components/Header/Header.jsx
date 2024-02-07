import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ place, children }) => {

  let headerStyle = (
    `${place === 'main' ? 'header header_place_main' : 'header'}`
  );

  return (
    <header className={headerStyle}>
      <Link className='header__logo' to='/' />
      { children }
    </header>
  );
};

export default Header;