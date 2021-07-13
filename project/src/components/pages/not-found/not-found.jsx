import React from 'react';
import {Link} from 'react-router-dom';

import PageTitle from '../../interface/page-title/page-title.jsx';

function NotFound() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageTitle title="404"/>
      </header>

      <p>
        Страница не найдена. Попробуйте вернуться на <Link to="/">главную страницу</Link>.
      </p>
    </div>
  );
}

export default NotFound;
