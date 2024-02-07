import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './index.css';

const MoviesCardList = ({ movies, savedMovies, onDelete, onCreate }) => {
  return (
    <ul className='movies-card-list'>
      {movies.map(movie => (
        <MoviesCard
          key={movie._id || movie.id}
          savedMovies={savedMovies}
          onDelete={onDelete}
          onCreate={onCreate}
          {...movie}
        />
      ))}
    </ul>
  );
};

export default MoviesCardList;
