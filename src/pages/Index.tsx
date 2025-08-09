import React from 'react';
import { Hero, Tagline, ComingSoon, Footer } from '@/components/LandingPage';
import backgroundImage from '@/assets/background-enhanced.jpg';

const Index = () => {
  return (
    <main className="relative w-screen min-h-screen bg-[#EBEBEB]">
      <img
        src={backgroundImage}
        alt="CO+ Studio architectural background"
        className="absolute w-full min-h-[120vh] object-cover shrink-0 left-0 top-0"
      />
      
      <Hero />
      <Tagline />
      <ComingSoon />
      <Footer />
    </main>
  );
};

export default Index;
