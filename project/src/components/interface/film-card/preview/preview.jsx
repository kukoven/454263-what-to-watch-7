import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import Logo from '../../logo/logo.jsx';
import User from '../../user/user.jsx';

function Preview({image, name, isReview}) {
  const headerClass = cn('page-header', {'film-card__head': !isReview});

  return (
    <>
      <div className="film-card__bg">
        <img
          src={image}
          alt={name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className={headerClass}>
        <Logo/>

        {isReview && <Breadcrumbs name={name} />}

        <User/>
      </header>
    </>
  );
}

Preview.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isReview: PropTypes.bool,
};

export default Preview;
