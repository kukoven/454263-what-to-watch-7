import React from 'react';
import PropTypes from 'prop-types';

const setStarsCount = (count) => `star-${count}`;

function Rating({count}) {
  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={setStarsCount(count)}
        type="radio"
        name="rating"
        defaultValue={count}
      />
      <label className="rating__label" htmlFor={setStarsCount(count)}>
        Rating {count}
      </label>
    </React.Fragment>
  );
}

Rating.propTypes = {
  count: PropTypes.number.isRequired,
};


export default Rating;
