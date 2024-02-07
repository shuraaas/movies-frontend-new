import React, { useState } from 'react';
import Footer from '../Footer/index.js';
import SearchForm from '../SearchForm/index.js';
import MoviesCardList from '../MoviesCardList/index.js';
import Preloader from '../Preloader/index.js';
import Header from '../Header/index.js';
import MoviesNav from '../MoviesNav/index.js';
import { useResize } from '../../utils/hooks/useResize.js';
import {
  ADD_TWO_CARDS,
  ADD_THREE_CARDS,
  INITIAL_COUNT_OF_CARDS_IS_FIVE,
  INITIAL_COUNT_OF_CARDS_IS_EIGHT,
  INITIAL_COUNT_OF_CARDS_IS_TWELVE,
} from '../../utils/constants.js';
import './index.css';

const Movies = ({ movies, savedMovies, onDelete, onCreate }) => {
  const {
    isScreenS,
    isScreenM,
    isScreenL,
  } = useResize();
  const [moviesList, setMoviesList] = useState(getMovies);
  const [checkboxState, setCheckboxState] = useState(getCheckboxState);
  const [firstSearch, setFirstSearch] = useState(false);
  const [btnShowMore, setBtnShowMore] = useState(false);
  const [resultArr, setResultArr] = useState([]);
  const [next, setNext] = useState(0);
  const [cardsOnPage, setCardsOnPage] = useState(getCountInitialCards);
  const [countCardsToShow, setCountCardsToShow] = useState(getCountCardsToShow);
  const [spin, setSpin] = useState(false);

  function getCountInitialCards() {
    if (isScreenS) return INITIAL_COUNT_OF_CARDS_IS_FIVE;
    if (isScreenM) return INITIAL_COUNT_OF_CARDS_IS_EIGHT;
    if (isScreenL) return INITIAL_COUNT_OF_CARDS_IS_TWELVE;
  };

  function getCountCardsToShow() {
    if (isScreenS || isScreenM) return ADD_TWO_CARDS;
    if (isScreenL) return ADD_THREE_CARDS;
  };

  function getMovies () {
    return JSON.parse(localStorage.getItem('movies')) || [];
  };

  function getCheckboxState () {
    return JSON.parse(localStorage.getItem('checkboxState')) || false;
  };

  const handleShowMorePosts = () => {
    const res = moviesList.slice(next, next + countCardsToShow);
    if ((res.length + resultArr.length) === moviesList.length) setBtnShowMore(false);

    setResultArr([...resultArr, ...res]);
    setNext(next + countCardsToShow);
  };

  const getRequest = () => localStorage.getItem('request') || '';

  const renderFirstSlicedCards = (data) => {
    const resultOfSliced = data.slice(0, cardsOnPage);

    if (data.length > cardsOnPage) setBtnShowMore(true);

    setResultArr(resultOfSliced);
    renderCards(resultOfSliced)
    setNext(cardsOnPage);
  };

  const handleSearch = (res, data) => {
    setMoviesList([]);
    setSpin(true);
    localStorage.setItem('movies', JSON.stringify(res));
    localStorage.setItem('request', data.search);
    setTimeout(() => {
      renderFirstSlicedCards(res);
      setMoviesList(res);
      setFirstSearch(true);
      setSpin(false);
    }, 1500);
  };

  const handleCheckbox = (state) => {
    localStorage.setItem('checkboxState', state);
    setCheckboxState(state);
  };

  const renderCards = () => {
    if (resultArr.length === 0) {
      return moviesList;
    } else {
      return resultArr;
    }
  };

  return (
    <>
      <Header>
        <MoviesNav />
      </Header>
      <section className='movies'>
        <SearchForm onSearch={handleSearch} movies={movies} movieRequest={getRequest()} checkboxState={checkboxState} setCheckbox={handleCheckbox} />
        <MoviesCardList
          movies={renderCards()}
          savedMovies={savedMovies}
          onDelete={onDelete}
          onCreate={onCreate}
          />
        <Preloader onClick={handleShowMorePosts} btnShowMore={btnShowMore} spin={spin} />
        {moviesList.length === 0 && firstSearch ? <p>Ничего не найдено</p> : null}
      </section>
      <Footer />
    </>
  );
};

export default Movies;
