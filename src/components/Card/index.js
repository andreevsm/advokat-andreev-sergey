import React from 'react';

import styles from './card.module.scss';

const Card = ({
  children,
}) => (
  <div className={styles.card}>
    <div className={styles.card__inner}>
      {children}
    </div>
  </div>
);

export default Card;
