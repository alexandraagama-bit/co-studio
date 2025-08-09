import React from 'react';

export const Tagline: React.FC = () => {
  return (
    <section 
      className="absolute -translate-x-2/4 text-[#FBFBFB] text-center text-lg font-normal leading-[15.3px] w-[248px] h-[15px] left-2/4 top-[42%] max-md:text-base max-md:w-[200px] max-sm:text-xs max-sm:w-[160px] max-sm:top-[32%] max-[375px]:text-[10px] max-[375px]:w-[140px] max-[375px]:top-[28%]"
      aria-label="Company tagline"
    >
      <p className="font-roboto-condensed-extralight font-extralight text-[18px] text-[rgba(251,251,251,1)] max-sm:text-[14px] max-[375px]:text-[12px]">
        crafting spaces for inspiring people
      </p>
    </section>
  );
};
