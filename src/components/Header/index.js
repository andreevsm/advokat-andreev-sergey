import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// import Image from '../image';

import './index.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.2rem',
      }}
    >

      <h1 style={{ fontSize: '2rem' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 className="header__subtitle">8-918-111-11-11</h2>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;