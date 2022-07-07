import React from 'react';

import classes from './Works.module.scss';
import { Work } from '../components/Work';

export const Works: React.FC = () => {
  return (
    <section className={classes['works']}>
      <h2 className={classes['works__heading']}>Latest Works</h2>
      <ul className={classes['works__types']}>
        <li className={classes['works__type']}>All</li>
        <li className={classes['works__type']}>Web design</li>
        <li className={classes['works__type']}>Branding</li>
        <li className={classes['works__type']}>Photography</li>
        <li className={classes['works__type']}>Illustration</li>
      </ul>
      <div className={classes['works__grid']}>
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
      <a href="#" className={classes['works__more']}>
        view more
      </a>
    </section>
  );
};
