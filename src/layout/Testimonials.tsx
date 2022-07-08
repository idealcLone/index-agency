import React, { useCallback, useEffect, useRef, useState } from 'react';

import classes from './Testimonials.module.scss';
import { Testimonial } from '../components/Testimonial';
import classNames from 'classnames';

export const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLUListElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const trackInit = useCallback(() => {
    const testimonials = Array.from(trackRef.current!.children as HTMLCollectionOf<HTMLElement>);
    const slideWidth = testimonials[0].getBoundingClientRect().width;
    testimonials.forEach((testimonial, index) => {
      testimonial.style.left = `${slideWidth * index}px`;
    });
  }, []);

  useEffect(() => {
    trackInit();
  }, [trackInit]);

  const handleTrackMove = (step: number) => {
    const testimonial = Array.from(trackRef.current!.children as HTMLCollectionOf<HTMLElement>)[
      currentIndex + step
    ];
    const moveAmount = testimonial.style.left;
    trackRef.current!.style.transform = `translateX(-${moveAmount})`;
    setCurrentIndex(currentIndex + step);
  };

  const handleLeftArrowClick = () => {
    handleTrackMove(-1);
  };

  const handleRightArrowClick = () => {
    handleTrackMove(1);
  };

  return (
    <section className={classes['container']}>
      <div className={classes['arrow']}>
        {currentIndex > 0 && (
          <img
            src="../assets/icons/arrow-left.svg"
            alt="Arrow Left"
            className={classes['arrow-left']}
            onClick={handleLeftArrowClick}
          />
        )}
      </div>
      <div className={classes['track']}>
        <ul ref={trackRef} className={classNames('testimonials', classes['testimonials'])}>
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </ul>
      </div>
      <div className={classes['arrow']}>
        {currentIndex < 4 && (
          <img
            src="../assets/icons/arrow-right.svg"
            alt="Arrow right"
            className={classes['arrow-right']}
            onClick={handleRightArrowClick}
          />
        )}
      </div>
    </section>
  );
};
