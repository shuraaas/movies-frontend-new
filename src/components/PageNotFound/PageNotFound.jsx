import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/movies');

  return (
    <section className='page-not-found'>
      <div className='page-not-found__content'>
        <h2 className='page-not-found__title'>404</h2>
        <p className='page-not-found__subtitle'>Страница не найдена</p>
        <button className='btn page-not-found__link' onClick={handleClick}>Назад</button>
      </div>
    </section>
  );
};

export default PageNotFound;
