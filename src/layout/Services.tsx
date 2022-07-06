import React from 'react';

import classes from './Services.module.scss';
import { Card } from '../components/Card';

export const Services: React.FC = () => {
  return (
    <section className={classes['services']}>
      <h2 className={classes['services__heading']}>Our Services</h2>
      <div className={classes['services__cards']}>
        <Card name="Branding" />
        <Card name="Design" />
        <Card name="Development" />
      </div>
    </section>
  );
};
