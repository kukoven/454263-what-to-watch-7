import React from 'react';
import Genre from '../genre/genre.jsx';

const GENRES = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const getGenre = (genre) => (
  <Genre key={genre} genre={genre}/>
);

function GenreList() {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map(getGenre)}
    </ul>
  );
}

export default GenreList;
