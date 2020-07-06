import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div style={{ maxWidth: 1024, width: '100%', margin: '0 auto' }}>
      <p className={styles.footer__paragraph}>
        Адрес: г. Геленджик, ул, Рыбникова, д.1
      </p>
      <p className={styles.footer__paragraph}>
        Тел.
        {' '}
        <a href="tel:8-928-260-26-37">8-928-260-26-37</a>
      </p>
      <p className={styles.footer__paragraph}>
        Почта:
        {' '}
        <a href="mailto:advokatsea@mail.ru">advokatsea@mail.ru</a>
      </p>
    </div>
  </footer>
);

export default Footer;
