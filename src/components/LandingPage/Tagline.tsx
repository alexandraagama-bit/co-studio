import React from 'react';

export const Tagline: React.FC = () => {
  return (
    <section 
      className="absolute -translate-x-2/4 text-[#FBFBFB] text-center text-lg font-normal leading-[15.3px] w-[248px] h-[15px] left-2/4 top-[calc(42%-53px)] max-md:text-base max-md:w-[200px] max-sm:text-xs max-sm:w-[160px] max-sm:top-[calc(32%-53px)] max-[375px]:text-[10px] max-[375px]:w-[140px] max-[375px]:top-[calc(28%-53px)]"
      aria-label="Company tagline"
    >
      <p className="font-roboto-condensed-extralight font-extralight text-[18px] text-[rgba(251,251,251,1)] max-sm:text-[14px] max-[375px]:text-[12px]">
        crafting spaces for inspiring people
      </p>
    </section>
  );
};
