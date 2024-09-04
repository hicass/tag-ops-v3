'use client';

import { FC } from 'react';

import FlowCards from './FlowCards';

const FlowSection: FC = () => {
  return (
    <section className="flex flex-col items-center relative gap-4 my-8 p-6 w-full md:w-2/3 2xl:w-1/2">
      <h2>Our Flow</h2>

      <div className="w-11/12 sm:w-3/4 z-20">
        <FlowCards />
      </div>
    </section>
  );
};

export default FlowSection;
