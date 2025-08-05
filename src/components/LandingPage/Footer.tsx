import React from 'react';
import { ContactForm } from './ContactForm';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-4">
      <div className="text-white text-center text-[15px] font-light leading-[12.75px] w-[139px] h-[13px] left-[20%] bottom-[5%] max-md:text-[13px] max-md:left-[10%] max-sm:text-[11px] max-sm:w-[100px] max-sm:left-[5%] max-sm:bottom-[3%]">
        <p className="font-normal text-[15px] text-white">
          architecture &amp; design
        </p>
      </div>
      
      <div className="absolute -translate-x-2/4 left-2/4 bottom-[5%] max-sm:bottom-[3%]">
        <ContactForm />
      </div>
      
      <div className="flex w-[226px] h-[13px] flex-col justify-center shrink-0 text-white text-center text-[15px] font-light leading-[12.75px] right-[20%] bottom-[5%] max-md:text-[13px] max-md:right-[10%] max-sm:text-[11px] max-sm:w-[150px] max-sm:right-[5%] max-sm:bottom-[3%]">
        <address className="font-normal text-[15px] text-white not-italic">
          portugal // norway // egypt
        </address>
      </div>
    </footer>
  );
};
