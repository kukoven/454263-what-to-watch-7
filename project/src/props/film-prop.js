import PropTypes from 'prop-types';

const filmProp = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  rating: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  genre: PropTypes.string,
  released: PropTypes.number,
  isFavorite: PropTypes.bool,
});

export default filmProp;
