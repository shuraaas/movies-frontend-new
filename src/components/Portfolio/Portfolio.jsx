import React from 'react';
import './index.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links-list'>
        <li>
          <a
            className='link portfolio__link'
            href='https://shuraaas.github.io/how-to-learn/index.html'
            target='_blank' 
            rel='noopener noreferrer'
          >
            Статичный сайт
          </a>
        </li>
        <li>
          <a
            className='link portfolio__link'
            href='https://shuraaas.github.io/russian-travel/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Адаптивный сайт
          </a>
        </li>
        <li>
          <a
            className='link portfolio__link'
            href='https://shuraaas.github.io/mesto-react-auth/index.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;