import React from 'react';

import classes from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer__upper']}>
        <div className={classes['footer__address']}>
          3rd Floor, Santa Monica Beach, CA, San Francisco
        </div>
        <div className={classes['footer__contacts']}>(359) 0 123 456 789 - info@yourmail.com</div>
        <div className={classes['footer__social']}>
          <img src="../assets/icons/fb.svg" alt="Facebook Icon" />
          <img src="../assets/icons/twitter.svg" alt="Twitter Icon" />
          <img src="../assets/icons/pinterest.svg" alt="Pinterest Icon" />
        </div>
      </div>
      <div className={classes['footer__lower']}>
        Copyright 2016 - All Rights Reserved - Designed by JD
      </div>
    </footer>
  );
};
