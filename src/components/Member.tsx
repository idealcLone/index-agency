import React from 'react';

import classes from './Member.module.scss';

export const Member: React.FC = () => {
  return (
    <div className={classes['member']}>
      <img src="../assets/img/member-1.png" alt="Member 1" className={classes['member__photo']} />
      <div className={classes['member__name']}>Tom Jones</div>
    </div>
  );
};
