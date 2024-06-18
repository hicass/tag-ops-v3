'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';

import { motion } from 'framer-motion';

const Header: FC = () => {
  return (
    <section className="w-full flex flex-col items-center my-12 md:h-96 sm:mb-40 sm:mt-24 lg:w-3/4">
      <h1 className="secret">Tag Operations</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:mt-10 sm:gap-12 lg:w-full">
        <h1 className="text-center sm:mt-6 text-4xl sm:text-7xl text-primary">
          Simplify, Optimize, <br /> Scale with...
        </h1>

        <motion.div
          animate={{
            rotate: [2, 0, -2, 0, 2],
            transition: {
              duration: 2.8,
              repeat: Infinity,
              repeatType: 'loop',
            },
          }}
          className="w-2/3 sm:w-1/4"
        >
          <Image
            src="/logos/main-logo.svg"
            alt="Tag Operations Finance Human Resources"
            layout="responsive"
            priority
            width={100}
            height={100}
          />
        </motion.div>
      </div>

      <p className="text-center text-lg w-2/3 sm:w-full  sm:-mt-4 md:text-3xl">
        Your tech forward, embedded, and flexible back office team!
      </p>
    </section>
  );
};

export default Header;
