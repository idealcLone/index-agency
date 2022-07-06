import React from 'react';

import classes from './About.module.scss';
import classNames from 'classnames';

export const About: React.FC = () => {
  return (
    <section className={classes['about']}>
      <div className={classes['about__us']}>
        <h2 className={classes['about__we-are']}>We are</h2>
        <span className={classes['about__name']}>The SQWD</span>
        <p className={classes['about__paragraph']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <img
        src="../assets/img/about-1.png"
        alt="About Image 1"
        className={classNames(classes['about__img'], classes['about__img--1'])}
      />
      <img
        src="../assets/img/about-2.png"
        alt="About Image 2"
        className={classNames(classes['about__img'], classes['about__img--2'])}
      />
      <img
        src="../assets/img/about-3.png"
        alt="About Image 3"
        className={classNames(classes['about__img'], classes['about__img--3'])}
      />
      <div className={classes['about__last']}>
        <p className={classes['about__paragraph']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
    </section>
  );
};
