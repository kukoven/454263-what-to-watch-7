import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../../props/film-prop.js';

import Logo from '../../interface/logo/logo.jsx';
import FilmList from '../../interface/film-list/film-list.jsx';
import PageFooter from '../../interface/page-footer/page-footer.jsx';
import UserBlock from '../../interface/user/user.jsx';
import PageTitle from '../../interface/page-title/page-title.jsx';

const filterByFavorites = (films) => films.filter((film) => film.isFavorite);

function MyList({films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <PageTitle title="My list"/>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={filterByFavorites(films)}/>
      </section>

      <PageFooter/>
    </div>
  );
}

MyList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default MyList;
