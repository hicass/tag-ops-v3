'use client';

import { FC } from 'react';

import { motion, Variants } from 'framer-motion';

interface HeaderProps {
  name: string;
  description: string;
}


const titleVariants: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Header: FC<HeaderProps> = ({name, description}) => {
  return (
    <section className="w-full bg-primary drop-shadow-md px-6">
      <motion.div
        variants={titleVariants}
        viewport={{
          once: true,
        }}
        initial="offscreen"
        whileInView="onscreen"
        className="w-full flex flex-col items-center my-16"
      >
        <h1 className="text-background text-center">{name}</h1>

        <p className="mt-4 txt-lg sm:text-h4 text-background text-center md:w-3/4 2xl:w-1/2">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default Header;
