import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function SmallFilmCard({name, poster}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="/">
          {name}
        </Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default SmallFilmCard;
