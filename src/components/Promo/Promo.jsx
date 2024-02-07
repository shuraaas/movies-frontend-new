import React from 'react';
import './index.css';
import promoLogoPath from '../../images/Promo/promo-logo.png';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__info'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='btn btn_type_promo' type='button' onClick={() => window.location.replace('/#about')}>Узнать больше</button>
      </div>
      <img className='promo__main-illustration' src={promoLogoPath} alt='promo-logo' />
    </section>
  );
};

export default Promo;