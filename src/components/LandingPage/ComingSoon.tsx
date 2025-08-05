import React from 'react';

export const ComingSoon: React.FC = () => {
  return (
    <section 
      className="absolute -translate-x-2/4 flex w-[1255px] h-[94px] flex-col justify-center shrink-0 text-[#FBFBFB] text-center text-[100px] font-thin leading-[85px] opacity-20 left-2/4 top-[83%] max-md:text-6xl max-md:w-[800px] max-md:h-[60px] max-sm:text-3xl max-sm:w-[300px] max-sm:h-[30px] max-sm:top-3/4"
      aria-label="Website status announcement"
    >
      <h2 className="font-roboto-condensed-extralight font-extralight text-[100px] text-[rgba(251,251,251,1)]">
        WEBSITE COMING SOON
      </h2>
    </section>
  );
};
