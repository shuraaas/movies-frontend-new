import React from 'react';
import './index.css';

const Techs = () => {
  return (
    <section className='techs'>
      <h2 className='section-title'>Технологии</h2>
      <div className='techs__info'>
        <h3 className='techs__info-title'>7 технологий</h3>
        <p className='techs__info-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className='techs__list'>
        <p className='techs__list-item'>HTML</p>
        <p className='techs__list-item'>CSS</p>
        <p className='techs__list-item'>JS</p>
        <p className='techs__list-item'>React</p>
        <p className='techs__list-item'>Git</p>
        <p className='techs__list-item'>Express.js</p>
        <p className='techs__list-item'>mongoDB</p>
      </div>
    </section>
  );
};

export default Techs;