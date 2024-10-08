'use client';

import { FC } from 'react';

import { Variants, motion } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface HeaderProps {
  title: string;
  topCards: string[];
}

const Header: FC<HeaderProps> = ({ title, topCards }) => {
  return (
    <section className="w-full flex flex-col items-center sm:mt-8 pt-6 gap-6 md:w-2/3 2xl:w-1/2">
      <h1 className="text-center xl:w-3/5 mb-2">{title}</h1>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center xl:justify-between gap-2 lg:w-full h-fit">
        {topCards.map((card, idx) => (
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            key={idx}
            className="flex-grow flex items-center justify-center rounded-xl mx-5 xl:mx-0 sm:mt-6 sm:mb-10 p-4 bg-secondarylight drop-shadow max-w-64"
          >
            <p className="txt-md-bold text-center">{card}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Header;
