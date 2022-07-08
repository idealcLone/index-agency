import React from 'react';

import classes from './Work.module.scss';
import classNames from 'classnames';

type PropsType = {
  index: number;
  firstLine: string;
  secondLine: string;
  position: string;
};

export const Work: React.FC<PropsType> = ({ index, firstLine, secondLine, position }) => {
  return (
    <div className={classNames(classes['work'], classes[`work--${position}`])}>
      <img
        src={`../assets/img/works-${index}.png`}
        alt="Work Image"
        className={classes['work__image']}
      />
      <h3 className={classes['work__title']}>
        <span>{firstLine}</span>
        <span>{secondLine}</span>
      </h3>
      <div className={classes['work__info']}>
        <h4 className={classes['work__name']}>Photography</h4>
        <p className={classes['work__description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};
