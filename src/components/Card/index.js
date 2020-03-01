import React from 'react';

import './index.scss';

const Card = ({
  children,
}) => (
  <div className="card">
    <div className="card__inner">
      {children}
    </div>
  </div>
);

export default Card;
