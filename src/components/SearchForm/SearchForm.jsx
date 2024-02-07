import React from 'react';
import { useForm } from 'react-hook-form';
import FilterCheckbox from '../FilterCheckbox/index.js';
import { FILM_DURATION } from '../../utils/constants.js';
import './index.css';

const SearchForm = ({ onSearch, movies, movieRequest, checkboxState, setCheckbox }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      search: movieRequest,
    },
  });

  const checkDuration = () => movies.filter(movie => movie.duration <= FILM_DURATION);

  const findMovie = (req) => {
    if (checkboxState) {
      return checkDuration()
        .filter(movie => {
          return movie
            .nameRU
            .toLowerCase()
            .includes(req.toLowerCase())
            || movie
            .nameEN
            .toLowerCase()
            .includes(req.toLowerCase())
        });
    }

    return movies
      .filter(movie => {
        return movie
          .nameRU
          .toLowerCase()
          .includes(req.toLowerCase())
          || movie
          .nameEN
          .toLowerCase()
          .includes(req.toLowerCase())
        });
  };

  const onSubmit = (data) => {
    const result = findMovie(data.search);

    onSearch(result, data);
  };

  return (
    <div className='search-form'>
      <form className='search-form__inner' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='search-form__input'
          placeholder='Фильм'
          {...register('search', {
            required: 'Нужно ввести ключевое слово',
            minLength: 1,
          })}
        />
        {errors?.search && <span className='search-form__err'>{errors?.search?.message}</span>}
        <button className='btn btn_type_search-form' type='submit' disabled={!isValid}>Найти</button>
      </form>
      <FilterCheckbox setCheckbox={setCheckbox} checkboxState={checkboxState} />
    </div>
  );
};

export default SearchForm;
