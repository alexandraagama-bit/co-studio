import React from 'react';

export const Tagline: React.FC = () => {
  return (
    <section 
      className="absolute -translate-x-2/4 text-[#FBFBFB] text-center text-lg font-normal leading-[15.3px] w-[248px] h-[15px] left-2/4 top-[42%] max-md:text-base max-md:w-[200px] max-sm:text-sm max-sm:w-[180px] max-sm:top-[36%]"
      aria-label="Company tagline"
    >
      <p className="font-roboto-condensed-extralight font-extralight text-[18px] text-[rgba(251,251,251,1)]">
        crafting spaces for inspiring people
      </p>
    </section>
  );
};
