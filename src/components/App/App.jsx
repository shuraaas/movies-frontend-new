import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import * as auth from '../../utils/auth.js';
import Main from '../Main/index.js';
import Movies from '../Movies/index.js';
import SavedMovies from '../SavedMovies/index.js';
import Profile from '../Profile/index.js';
import Register from '../Register/index.js';
import Login from '../Login/index.js';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import ProtectedRoute from '../ProtectedRoute/index.js';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [result, setResult] = useState({});
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      tokenCheck(jwt);
      getMoviesData();
      getSavedMovies();
    };
  }, [loggedIn]);

  const getMoviesData = async () => {
    try {
      const movies = await moviesApi.getMovies();
      setMovies(movies);
    } catch (err) {
      console.log(err);
    }
  };

  const getSavedMovies = async () => {
    try {
      const savedMovies = await mainApi.getSavedMovies();
      setSavedMovies(savedMovies);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      await auth.register(name, email, password);
      await handleLogin({ email, password });
    } catch (err) {
      console.log(err);
      setResult({
        message: 'Что-то пошло не так...',
      });
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const data = await auth.login(email, password);
      if (!data.token) throw new Error('Missing token');
      localStorage.setItem('jwt', data.token);
      setLoggedIn(true);
      navigate('/movies', {replace: true});
    } catch (err) {
      console.log(err);
      setResult({
        message: 'Неправильные почта или пароль',
      });
    }
  };

  const handleUpdateUser = async (userInfo) => {
    try {
      const newUserInfo = await mainApi.setUserInfo(userInfo);
      setUser(newUserInfo);
      setResult({
        message: 'Данные обновлены',
      });
    } catch (err) {
      console.log(err);
      setResult({
        message: 'Что-то пошло не так...',
      });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUser({});
    navigate('/', {replace: true});
  };

  const handleDeleteMovieClick = async (id) => {
    try {
      if (Number(id)) {
        const movie = savedMovies.filter(item => item.movieId === id)
        await mainApi.deleteMovie(movie[0]._id);
        setSavedMovies(movies => movies.filter(item => item._id !== movie[0]._id));
        return;
      }

      await mainApi.deleteMovie(id);
      setSavedMovies(movies => movies.filter(movie => movie._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddMovieClick = async (data) => {
    try {
      const newMovie = await mainApi.createMovie(data);
      setSavedMovies([...savedMovies, newMovie]);
    } catch (err) {
      console.log(err);
    }
  };

  const tokenCheck = async (token) => {
    try {
      const user = await auth.getContent(token);
      setUser(user);
      setLoggedIn(true);
      if (location.pathname === '/signin' || location.pathname === '/signup') {
        navigate('/movies', { replace: true });
      } else {
        navigate(location.pathname, { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CurrentUserContext.Provider value={user}>
      <div className='page'>
        <Routes>
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                movies={movies || []}
                savedMovies={savedMovies || []}
                onDelete={handleDeleteMovieClick}
                onCreate={handleAddMovieClick}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies || []}
                onDelete={handleDeleteMovieClick}
              />
            }
          />
          <Route
            path='/profile'
            element={<ProtectedRoute element={Profile} onLogout={handleLogout} onUpdate={handleUpdateUser} resultUpdate={result} loggedIn={loggedIn}/>}
          />
          <Route
            path='*'
            element={<ProtectedRoute element={PageNotFound} loggedIn={loggedIn}/>}
          />
          <Route path='/' element={<Main loggedIn={loggedIn} />}/>
          <Route path='/signin' element={<Login onLogin={handleLogin} resultLogin={result} />}/>
          <Route path='/signup' element={<Register onRegister={handleRegister} resultRegister={result} />}/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
