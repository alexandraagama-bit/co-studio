import React from 'react';
import { ContactForm } from './ContactForm';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute left-0 right-0 flex justify-between items-center p-4 bottom-0">
      <div className="text-white text-center">
        <p className="font-roboto-light font-light text-[15px] text-white">
          architecture &amp; design
        </p>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ContactForm />
      </div>
      
      <div className="text-white text-center">
        <address className="font-roboto-light font-light text-[15px] text-white not-italic">
          portugal // norway // egypt
        </address>
      </div>
    </footer>
  );
};
