import React from 'react';
import './index.css';

const Footer = () => {
  let date = new Date();

  return (
    <footer className='footer'>
      <div className='footer__info'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className='footer__navbar'>
        <p className='footer__date'>&copy; {date.getFullYear()}</p>
        <ul className='footer__nav'>
          <li>
            <a className='link footer__nav-link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
          </li>
          <li>
            <a className='link footer__nav-link' href='https://github.com/shuraaas/'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;