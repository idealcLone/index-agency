import React from 'react';

import classes from './Hero.module.scss';
import { Nav } from '../components/Nav';

export const Hero: React.FC = () => {
  return (
    <header className={classes['hero']}>
      <Nav />
      <div className={classes['hero__name']}>
        <h1 className={classes['hero__title']}>Where great ideas come to life</h1>
        <p className={classes['hero__quote']}>
          Passionate creative studio helping startups grow their business!
        </p>
      </div>
      <div className={classes['hero__slide-controls']}>
        <input
          type="radio"
          name="slide-control"
          id="slide-control-1"
          className={classes['slide-control__radio']}
          defaultChecked
        />
        <label htmlFor="slide-control-1" className={classes['slide-control__label']}>
          01
        </label>
        <input
          type="radio"
          name="slide-control"
          id="slide-control-2"
          className={classes['slide-control__radio']}
        />
        <label htmlFor="slide-control-2" className={classes['slide-control__label']}>
          02
        </label>
        <input
          type="radio"
          name="slide-control"
          id="slide-control-3"
          className={classes['slide-control__radio']}
        />
        <label htmlFor="slide-control-3" className={classes['slide-control__label']}>
          03
        </label>
      </div>
    </header>
  );
};
