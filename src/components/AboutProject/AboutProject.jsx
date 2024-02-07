import React from 'react';
import './index.css';

const AboutProject = () => {
  return (
    <section className='about-project' id='about'>
      <h2 className='section-title'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__info-item'>
          <h4 className='about-project__info-head'>Дипломный проект включал 5 этапов</h4>
          <p className='about-project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__info-item'>
          <h4 className='about-project__info-head'>На выполнение диплома ушло 5 недель</h4>
          <p className='about-project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__table'>
        <p className='about-project__table-head about-project__table-head_active'>1 неделя</p>
        <p className='about-project__table-head'>4 недели</p>
        <p className='about-project__table-text'>Back-end</p>
        <p className='about-project__table-text'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;