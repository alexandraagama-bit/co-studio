import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="absolute -translate-x-2/4 flex w-[189px] h-[61px] flex-col justify-center shrink-0 text-white text-center text-2xl font-light leading-[20.4px] left-2/4 top-[35%] max-md:text-xl max-md:w-40 max-sm:text-lg max-sm:w-[140px] max-sm:top-[30%]">
        <h1 className="font-normal text-2xl text-white">CO+ STUDIO</h1>
      </div>
    </header>
  );
};
