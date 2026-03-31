import React from 'react';
import { ContactForm } from './ContactForm';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-4 max-sm:p-2 opacity-85">
      <ContactForm />
    </footer>
  );
};