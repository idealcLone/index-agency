import React from 'react';

import classes from './Team.module.scss';
import { Member } from '../components/Member';

export const Team: React.FC = () => {
  return (
    <div className={classes['team']}>
      <h2 className={classes['team__heading']}>The Team</h2>
      <div className={classes['team__members']}>
        <Member index={1} />
        <Member index={2} />
        <Member index={3} />
      </div>
    </div>
  );
};
