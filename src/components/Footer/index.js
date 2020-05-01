import React from 'react';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div style={{ maxWidth: 1024, width: '100%', margin: '0 auto' }}>
      <p className="footer__paragraph">
        Адрес: г. Геленджик, ул, Рыбникова, д.1
      </p>
      <p className="footer__paragraph">
        Тел.
        {' '}
        <a href="tel:8-928-260-26-37">8-928-260-26-37</a>
      </p>
      <p className="footer__paragraph">
        Почта:
        {' '}
        <a href="mailto:advokatsea@mail.ru">advokatsea@mail.ru</a>
      </p>
    </div>
  </footer>
);

export default Footer;
