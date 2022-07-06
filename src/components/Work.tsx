import React from 'react';

import classes from './Work.module.scss';

export const Work: React.FC = () => {
  return (
    <div className={classes['work']}>
      <img src="../assets/img/works-1.png" alt="Work Image" className={classes['work__image']} />
      <h4 className={classes['work__name']}>Photography</h4>
      <p className={classes['work__description']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <a href="#" className={classes['work__read-more']}>
        Read more
      </a>
    </div>
  );
};
