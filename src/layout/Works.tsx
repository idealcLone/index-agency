import React from 'react';

import classes from './Works.module.scss';
import { Work } from '../components/Work';

export const Works: React.FC = () => {
  return (
    <section className={classes['works']}>
      <div className={classes['works__grid']}>
        <div className={classes['works__left']}>
          <h2 className={classes['works__heading']}>Latest Works</h2>
          <ul className={classes['works__types']}>
            <li className={classes['works__type']}>All</li>
            <li className={classes['works__type']}>Web design</li>
            <li className={classes['works__type']}>Branding</li>
            <li className={classes['works__type']}>Photography</li>
            <li className={classes['works__type']}>Illustration</li>
          </ul>
          <Work index={2} firstLine="A kitten's" secondLine="life" position="left" />
          <Work index={4} firstLine="Apple's" secondLine="lost magic" position="left" />
        </div>
        <div className={classes['works__right']}>
          <Work index={1} firstLine="100 years" secondLine="photography" position="right" />
          <Work index={3} firstLine="groovemade" secondLine="products for mac" position="right" />
        </div>
      </div>
      <a href="#" className={classes['works__more']}>
        view more
      </a>
    </section>
  );
};
