import React from 'react';
import './index.css';
import avatarPath from '../../images/AboutMe/avatar.png';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h2 className='section-title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__text'>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__prof'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          <a className='link about-me__link' href='https://github.com/shuraaas'>Github</a>
        </div>
        <img className='about-me__avatar' src={avatarPath} alt='Аватар пользователя' />
      </div>
    </section>
  );
};

export default AboutMe;