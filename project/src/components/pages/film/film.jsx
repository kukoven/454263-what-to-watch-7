import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {PosterModifier} from '../../../const.js';
import filmProp from '../../../props/film-prop.js';

import PageFooter from '../../interface/page-footer/page-footer.jsx';
import FilmList from '../../interface/film-list/film-list.jsx';
import Preview from '../../interface/film-card/preview/preview.jsx';
import Description from '../../interface/film-card/description/description.jsx';
import Poster from '../../interface/film-card/poster/poster.jsx';

const MAX_FILMS_CARD = 4;

function Film({
  film: {name, posterImage, backgroundImage, genre, released},
  similarFilms,
}) {
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Preview image={backgroundImage} name={name}/>

          <div className="film-card__wrap">
            <Description isReview name={name} genre={genre} released={released}/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster modifier={PosterModifier.BIG} poster={posterImage} name={name}/>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link className="film-nav__link" to="#">
                      Overview
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to="#">
                      Details
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to="#">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>
                  In the 1930s, the Grand Budapest Hotel is a popular European ski
                  resort, presided over by concierge Gustave H. (Ralph Fiennes).
                  Zero, a junior lobby boy, becomes Gustave&apos;s friend
                  and protege.
                </p>

                <p>
                  Gustave prides himself on providing first-class service to the
                  hotel&apos;s guests, including satisfying the sexual needs of the
                  many elderly women who stay there. When one of Gustave&apos;s
                  lovers dies mysteriously, Gustave finds himself the recipient
                  of a priceless painting and the chief suspect in her murder.
                </p>

                <p className="film-card__director">
                  <strong>Director: Wes Andreson</strong>
                </p>

                <p className="film-card__starring">
                  <strong>
                    Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
                    and other
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms.slice(0, MAX_FILMS_CARD)}/>
        </section>

        <PageFooter/>
      </div>
    </React.Fragment>
  );
}

Film.propTypes = {
  film: filmProp.isRequired,
  similarFilms: PropTypes.arrayOf(filmProp).isRequired,
};

export default Film;
