'use client';

import { FC } from 'react';

const Header: FC = () => {
  return (
    <section className="w-full flex flex-col items-center sm:mt-8 p-6 md:w-2/3 2xl:w-1/2">
      <h1>Case Studies</h1>

      <p className="mt-4 txt-md text-center">
        Explore our case studies to see how we help businesses streamline
        operations, reduce costs, and scale efficiently. From implementing
        custom systems that save thousands annually to optimizing processes that
        drive impactful results, learn how our tailored solutions have
        transformed companies across various industries.
      </p>
    </section>
  );
};

export default Header;
