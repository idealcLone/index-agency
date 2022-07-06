import React from 'react';

import classes from './Nav.module.scss';

export const Nav: React.FC = () => {
  return (
    <nav className={classes['nav']}>
      <ul className={classes['nav__list']}>
        <li className={classes['nav__item']}>
          <a href="#" className={classes['nav__link']}>
            Works
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a href="#" className={classes['nav__link']}>
            About
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a href="#" className={classes['nav__link']}>
            Services
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a href="#" className={classes['nav__link']}>
            Blog
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a href="#" className={classes['nav__link']}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
