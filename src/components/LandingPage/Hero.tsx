'use client';

import { FC } from 'react';

import Button from '@/components/Button';
import MainLogo from '../Logos/MainLogo';

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="secret">Tag Operations</h1>

      <div className="flex flex-col items-center text-center mt-20 mb-12 mx-5 sm:w-full sm:p-2 lg:w-full 2xl:w-1/2 2xl:my-36">
        <h1 className="text-h3 manrope-bold sm:text-h1">
          Simplify, Optimize, Scale with...
        </h1>

        <div className="w-2/3 relative">
          <MainLogo />
        </div>

        <p className="text-lg sm:text-h3 manrope-semibold text-center my-8 w-full">
          Your trusted, embedded, and proactive team.
        </p>

        <Button text={'This button does something?'} blue={true} />
      </div>
    </div>
  );
};

export default Hero;
