import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navigation = () => {
  return (
    <ul className='nav'>
      <li className='nav__item'>
        <Link className='nav__link' to='/signup'>Регистрация</Link>
      </li>
      <li className='nav__item'>
        <Link className='nav__link nav__link_type_promo-active' to='/signin'>Войти</Link>
      </li>
    </ul>
  );
};

export default Navigation;