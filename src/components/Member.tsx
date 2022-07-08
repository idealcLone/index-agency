import React from 'react';

import classes from './Member.module.scss';

type PropsType = {
  index: number;
};

export const Member: React.FC<PropsType> = ({ index }) => {
  return (
    <div className={classes['member']}>
      <img
        src={`../assets/img/member-${index}.png`}
        alt={`Member ${index}`}
        className={classes['member__photo']}
      />
      <div className={classes['member__info']}>
        <div className={classes['member__name']}>Tom Jones</div>
        <div className={classes['divider']} />
        <div className={classes['member__role']}>Creative Director</div>
        <div className={classes['member__quote']}>Create with simplicity in mind!</div>
      </div>
    </div>
  );
};
