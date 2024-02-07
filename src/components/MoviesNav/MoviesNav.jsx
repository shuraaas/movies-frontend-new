import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MoviesNav = () => {
  const burgerBtnRef = useRef(null);
  const moviesNavRef = useRef(null);

  let menuOpen = false;

  const handleBurgerClick = () => {
    if(!menuOpen) {
      burgerBtnRef.current.classList.add('open');
      burgerBtnRef.current.style.position = 'fixed';
      burgerBtnRef.current.style.top = '23px';
      burgerBtnRef.current.style.right = '29px';
      moviesNavRef.current.classList.add('header__movies-nav_burger');
      menuOpen = true;
    } else {
      burgerBtnRef.current.classList.remove('open');
      burgerBtnRef.current.style.position = 'relative';
      burgerBtnRef.current.style.top = 0;
      burgerBtnRef.current.style.right = 0;
      moviesNavRef.current.classList.remove('header__movies-nav_burger');
      menuOpen = false;
    }
  };

  return (
    <>
      <div className='header__movies-nav' ref={moviesNavRef}>
        <ul className='header__movies-nav-list'>
          <li className='header__movies-nav-item'>
            <Link className='header__movies-nav-link' to='/'>Главная</Link>
          </li>
          <li className='header__movies-nav-item'>
            <Link className='header__movies-nav-link' to='/movies'>Фильмы</Link>
          </li>
          <li className='header__movies-nav-item'>
            <Link className='header__movies-nav-link' to='/saved-movies'>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link className='header__movies-nav-btn' to='/profile'>Аккаунт</Link>
      </div>
      <div className='header__movies-nav-burger-btn' onClick={handleBurgerClick} ref={burgerBtnRef}>
        <span className='header__movies-nav-burger'></span>
      </div>
    </>
  );
};

export default MoviesNav;
