import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Results from './components/Results';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import LatestBlog from './components/LatestBlogs';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <Results />
      <Pricing />
      <LatestBlog />
      <CTA />

      
      </>
     
  );
};

export default Home;