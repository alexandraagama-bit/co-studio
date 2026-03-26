import React from 'react';
import { Hero, Tagline, ComingSoon, Footer } from '@/components/LandingPage';

const Index = () => {
  return (
    <main className="relative w-screen min-h-screen bg-[#EBEBEB] overflow-x-hidden">
      <img
        src="/images/background.png"
        alt="CO+ Studio architectural background"
        className="absolute w-full min-h-[120vh] object-cover shrink-0 left-0 top-0 max-sm:object-center"
      />
      
      <Hero />
      <Tagline />
      
      <Footer />
    </main>
  );
};

export default Index;
