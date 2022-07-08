import React from 'react';
import { Hero } from './layout/Hero';
import { About } from './layout/About';
import { Services } from './layout/Services';
import { Works } from './layout/Works';
import { Team } from './layout/Team';
import { Testimonials } from './layout/Testimonials';
import { Contacts } from './layout/Contacts';
import { Footer } from './layout/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Team />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};
