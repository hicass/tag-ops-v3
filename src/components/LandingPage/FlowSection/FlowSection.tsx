'use client';

import { FC } from 'react';

import FlowCards from './FlowCards';

const FlowSection: FC = () => {
  return (
    <section className="flex flex-col items-center gap-4 my-8 p-6 md:w-2/3 2xl:w-1/2">
      <h2>Our Flow</h2>

      <div className="w-3/4">
        <FlowCards />
      </div>
    </section>
  );
};

export default FlowSection;
