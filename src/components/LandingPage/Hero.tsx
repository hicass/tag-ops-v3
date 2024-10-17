'use client';

import { FC } from 'react';

import MainLogo from '../Logos/MainLogo';

interface HeroProps {
  topText: string;
  botText: string;
}

const Hero: FC<HeroProps> = ({ topText, botText }:any) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="secret">Tag Operations</h1>

      <div className="flex flex-col items-center text-center mt-14 sm:mt-32 mx-2 gap-4 sm:gap-0 sm:w-full sm:p-2 lg:w-full 2xl:w-1/2 2xl:my-36 sm:mb-14">
        <h1 className="flex text-h3 manrope-bold mx-0 sm:mx-0 sm:text-h1">
          {topText}
        </h1>

        <div className="w-full sm:w-2/3 2xl:w-full relative">
          <MainLogo />
        </div>

        <p className="text-lg sm:text-h3 manrope-semibold text-center my-2 sm:mt-6 sm:mb-2 w-full">
          {botText}
        </p>
      </div>
    </div>
  );
};

export default Hero;
