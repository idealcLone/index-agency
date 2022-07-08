import React from 'react';
import classes from './Testimonial.module.scss';
import classNames from 'classnames';

export const Testimonial: React.FC = () => {
  return (
    <li className={classNames('testimonial', classes['testimonial'])}>
      <p className={classes['testimonial__text']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img src="../assets/icons/quote.svg" alt="Quote icon" />
      <div className={classes['testimonial__author']}>
        David James <span>/ Web Design</span>
      </div>
      <div className={classes['testimonial__stars']}>
        <img
          src="../assets/icons/star.svg"
          alt="Star Icon"
          className={classes['testimonial__star--filled']}
        />
        <img
          src="../assets/icons/star.svg"
          alt="Star Icon"
          className={classes['testimonial__star--filled']}
        />
        <img
          src="../assets/icons/star.svg"
          alt="Star Icon"
          className={classes['testimonial__star--filled']}
        />
        <img
          src="../assets/icons/star.svg"
          alt="Star Icon"
          className={classes['testimonial__star--filled']}
        />
        <img
          src="../assets/icons/star.svg"
          alt="Star Icon"
          className={classes['testimonial__star']}
        />
      </div>
    </li>
  );
};
