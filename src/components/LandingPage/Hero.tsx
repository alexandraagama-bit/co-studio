import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="absolute -translate-x-2/4 flex w-[189px] h-[61px] flex-col justify-center shrink-0 text-white text-center text-2xl font-light leading-[20.4px] left-2/4 top-[35%] max-md:text-xl max-md:w-40 max-sm:text-base max-sm:w-[120px] max-sm:top-[25%] max-[375px]:text-sm max-[375px]:top-[20%]">
        <h1 className="font-roboto-light font-light text-[24px] text-white max-sm:text-[20px] max-[375px]:text-[18px]">CO+ STUDIO</h1>
      </div>
    </header>
  );
};
