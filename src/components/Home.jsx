import React from 'react';
import { Hero, AboutUs, Service, Product, FAQ, Blog, Contact, Process } from '.';
import { faqs } from '../constants';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero />
        <AboutUs />
        <Service />
        <Process />
        <Product />
        <FAQ items={faqs} />
        <Blog />
        <Contact />
    </div>
  );
}

export default Home;
