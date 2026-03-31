import React from 'react';
import { Footer } from '@/components/LandingPage';

const Index = () => {
  return (
    <main className="relative w-screen min-h-screen bg-[#EBEBEB] overflow-x-hidden">
      <img
        src="/images/background.jpg"
        alt="CO+ Studio architectural background"
        className="absolute w-full h-full object-cover shrink-0 left-0 top-0"
      />
      
      <Footer />
    </main>
  );
};

export default Index;
