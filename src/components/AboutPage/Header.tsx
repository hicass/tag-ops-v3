'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

const Header: FC = () => {
  return (
    <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3 2xl:w-1/2">
      <h1 className="secret">About Us</h1>

      <motion.h1
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        className="text-center text-5xl text-primary"
      >
        Hello!
      </motion.h1>
      <h2 className="mt-2 text-center text-xl md:text-2xl">
        We are Tag Operations, your partner in operational excellence.
      </h2>

      <p className="mt-4 md:text-lg">
        Every business, regardless of size, deserves tailored support to thrive.
        Born from this belief, we offer innovative and flexible back-office
        solutions, empowering you to streamline operations, optimize resources,
        and achieve lasting success.
      </p>
    </section>
  );
};

export default Header;
