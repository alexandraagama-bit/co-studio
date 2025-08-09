import React from 'react';
import { Hero, Tagline, ComingSoon, Footer } from '@/components/LandingPage';

const Index = () => {
  return (
    <main className="relative w-screen min-h-screen bg-[#EBEBEB] overflow-x-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f1df54cd6cc4c722dcc9c7c35c684263431aa7a7?width=3154"
        alt="CO+ Studio architectural background"
        className="absolute w-full min-h-[120vh] object-cover shrink-0 left-0 top-0 max-sm:object-center"
      />
      
      <Hero />
      <Tagline />
      <ComingSoon />
      <Footer />
    </main>
  );
};

export default Index;
