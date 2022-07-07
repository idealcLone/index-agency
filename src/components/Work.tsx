import React from 'react';

import classes from './Work.module.scss';

export const Work: React.FC = () => {
  return (
    <div className={classes['work']}>
      <img src="../assets/img/works-1.png" alt="Work Image" className={classes['work__image']} />
      <h3 className={classes['work__title']}>A kitten's life</h3>
      <div className={classes['work__info']}>
        <h4 className={classes['work__name']}>Photography</h4>
        <p className={classes['work__description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};
