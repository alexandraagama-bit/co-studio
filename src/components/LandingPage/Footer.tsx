import React from 'react';
import { ContactForm } from './ContactForm';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute left-0 right-0 flex justify-between items-center p-4 max-sm:flex-col max-sm:gap-4 max-sm:p-2" style={{ top: 'calc(110vh - 40px)' }}>
      <div className="text-white text-center max-sm:order-2">
        <p className="font-roboto-light font-light text-[15px] text-white max-sm:text-[12px] max-[375px]:text-[10px]">
          architecture &amp; design
        </p>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 max-sm:relative max-sm:left-auto max-sm:transform-none max-sm:order-1">
        <ContactForm />
      </div>
      
      <div className="text-white text-center max-sm:order-3">
        <address className="font-roboto-light font-light text-[15px] text-white not-italic max-sm:text-[12px] max-[375px]:text-[10px]">
          portugal // norway // egypt
        </address>
      </div>
    </footer>
  );
};
