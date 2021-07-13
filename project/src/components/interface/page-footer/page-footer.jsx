import React from 'react';

import Logo from '../logo/logo.jsx';

function PageFooter() {
  return (
    <footer className="page-footer">
      <Logo isModifier/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
