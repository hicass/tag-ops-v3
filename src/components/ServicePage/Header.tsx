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
    <section className="w-full bg-primary mb-8 drop-shadow-md">
      <motion.div
        variants={titleVariants}
        viewport={{
          once: true,
        }}
        initial="offscreen"
        whileInView="onscreen"
        className="w-full flex flex-col items-center my-10 p-10"
      >
        <h1 className="text-background">{name}</h1>

        <p className="mt-4 txt-lg text-background md:text-center md:w-2/3 2xl:w-1/2">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default Header;
