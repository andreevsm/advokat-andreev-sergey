import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './index.scss';

const Header = ({ siteTitle }) => (

  <header className="header" style={{ padding: '0 10px' }}>
    <div style={{ maxWidth: 1024, width: '100%', margin: '0 auto' }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1024,
          width: '100%',
          padding: '10px 0',
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
      <nav>
        <ul style={{
          padding: 0,
          margin: 0,
        }}
        >
          <li style={{
            display: 'inline-block',
            marginRight: '20px',
          }}
          >
            <Link
              to="/"
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Главная
            </Link>
          </li>
          <li style={{
            display: 'inline-block',
            marginRight: '20px',
          }}
          >
            <Link
              to="/experience"
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Опыт работы
            </Link>
          </li>
          <li style={{
            display: 'inline-block',
            marginRight: '20px',
          }}
          >
            <Link
              to="/services"
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Услуги
            </Link>
          </li>
          <li style={{
            display: 'inline-block',
            marginRight: '20px',
          }}
          >
            <Link
              to="/contacts"
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: '20px',
              }}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
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
