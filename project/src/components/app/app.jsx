import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

function App({promoFilm, films}) {
  return (
    <MainPage promoFilm={promoFilm} films={films}/>
  );
}

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
