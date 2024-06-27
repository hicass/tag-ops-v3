'use client';

import { FC } from 'react';

import Blob from '@/components/Blob/Blob';

const MissionSection: FC = () => {
  return (
    <section className="relative lg:w-full">
      <div className="w-full flex flex-col items-center my-8 p-10 bg-primary drop-shadow-md">
        <h1 className="text-center text-3xl text-background manrope-bold md:text-4xl">
          Our Mission
        </h1>

        <p className="mt-4 text-background text-center md:text-2xl md:w-2/3 2xl:w-1/2">
          We transform back offices with reliable systems, processes, and talent
          while empowering leadership with crucial insights into their
          operational costs.
        </p>
      </div>

      <div>
        <Blob positionX={'left'} positionY={'top-small'} />
        <Blob positionX={'right'} positionY={'bot-small'} flip={true} />
      </div>
    </section>
  );
};

export default MissionSection;
