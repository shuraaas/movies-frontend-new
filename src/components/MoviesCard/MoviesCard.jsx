import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const MoviesCard = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  id,
  _id,
  nameRU,
  nameEN,
  savedMovies,
  onDelete,
  onCreate
}) => {
  const location = useLocation();
  const isSaved = savedMovies.some(item => item.movieId === id && location.pathname === '/movies');
  const savedMoviesPage = location.pathname === '/saved-movies';

  const checkDuration = () => {
    let hour = 0;
    let minute = 0;

    if ( duration >= 60 ) {
      hour = Math.floor(duration / 60);
      minute = duration % 60;

      if (minute !== 0) {
        return `${hour}ч ${minute}м`;
      }

      return `${hour}ч`;
    } else {
      return `${duration}м`;
    }
  };

  const handleSaveBtnClick = () => {
    if (savedMoviesPage) {
      onDelete(_id);
      return;
    }
    if (isSaved) {
      onDelete(id);
    } else {
      onCreate({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      });
    }
  };

  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <div className='movies-card__info'>
          <h2 className='movies-card__name'>{nameRU}</h2>
          <p className='movies-card__duration'>{checkDuration()}</p>
        </div>
        <button
          className={savedMoviesPage ? 'btn btn_movie_unsaved' : isSaved ? 'btn btn_movie_saved' : 'btn btn_movie_save'}
          type='button'
          onClick={handleSaveBtnClick}
        ></button>
      </div>
      <a className='movies-card__link' href={trailerLink} target='_blank' rel='noopener noreferrer'>
        <img className='movies-card__image' src={image.url ? `https://api.nomoreparties.co${image.url}` : image} alt={nameRU} />
      </a>
    </li>
  );
};

export default MoviesCard;
