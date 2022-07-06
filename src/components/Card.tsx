import React from 'react';

import classes from './Card.module.scss';

type PropsType = {
  name: string;
};

export const Card: React.FC<PropsType> = ({ name }) => {
  return (
    <div className={classes['card']}>
      <div className={classes['card__header']}>
        <h3 className={classes['card__title']}>{name}</h3>
        <img
          src="../assets/icons/services-1.svg"
          alt="Services Icon"
          className={classes['card__icon']}
        />
      </div>
      <p className={classes['card__description']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <a href="#" className={classes['card__read-more']}>
        Read More
      </a>
    </div>
  );
};
