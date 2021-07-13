import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../../props/film-prop.js';

import GenreList from '../../interface/genres/genre-list/genre-list.jsx';
import PageFooter from '../../interface/page-footer/page-footer.jsx';
import FilmList from '../../interface/film-list/film-list.jsx';
import Preview from '../../interface/film-card/preview/preview.jsx';
import Description from '../../interface/film-card/description/description.jsx';
import Poster from '../../interface/film-card/poster/poster.jsx';

function Main({
  promoFilm: {name, posterImage, backgroundImage, genre, released},
  films,
}) {
  return (
    <React.Fragment>
      <section className="film-card">
        <Preview image={backgroundImage} name={name}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster poster={posterImage} name={name}/>

            <Description name={name} genre={genre} released={released}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>
          <FilmList films={films}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <PageFooter/>
      </div>
    </React.Fragment>
  );
}

Main.propTypes = {
  promoFilm: filmProp.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default Main;
