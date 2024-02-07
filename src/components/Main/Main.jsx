import React from 'react';
import Promo from '../Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio';
import Footer from '../Footer';
import Header from '../Header';
import Navigation from '../Navigation';
import MoviesNav from '../MoviesNav';

const Main = ({ loggedIn }) => {
  return (
    <>
      <Header place='main'>
        {loggedIn ? <MoviesNav /> : <Navigation />}
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;