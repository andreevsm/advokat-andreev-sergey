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
        <h2 className="header__subtitle">
          Тел.
          <div>
            <div>
              <a href="tel:8-928-260-26-37" className="header__subtitle_link">8-928-260-26-37</a>
            </div>
            <div>
              <a href="tel:8-918-433-15-36" className="header__subtitle_link">8-918-433-15-36</a>
            </div>
          </div>
        </h2>
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
                textDecoration: 'none',
                fontFamily: '"Roboto", sans-serif',
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
                textDecoration: 'none',
                fontFamily: '"Roboto", sans-serif',
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
                textDecoration: 'none',
                fontFamily: '"Roboto", sans-serif',
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
                textDecoration: 'none',
                fontFamily: '"Roboto", sans-serif',
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
