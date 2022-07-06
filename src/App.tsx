import React from 'react';
import { Hero } from './layout/Hero';
import { About } from './layout/About';
import { Services } from './layout/Services';
import { Works } from './layout/Works';

export const App: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
    </>
  );
};
