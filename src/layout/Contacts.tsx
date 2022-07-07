import React from 'react';

import classes from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  return (
    <section className={classes['contacts']}>
      <div className={classes['contacts__careers']}>
        <img src="../assets/icons/case.svg" alt="Case Icon" />
        <div className={classes['contacts__subheading']}>Want to work together?</div>
        <p className={classes['contacts__paragraph']}>Amazing. Tell us about your project!</p>
      </div>
      <div className={classes['contacts__info']}>
        <img src="../assets/icons/mail.svg" alt="Mail Icon" />
        <div className={classes['contacts__subheading']}>Contact us</div>
        <p className={classes['contacts__paragraph']}>Get in touch</p>
      </div>
    </section>
  );
};
