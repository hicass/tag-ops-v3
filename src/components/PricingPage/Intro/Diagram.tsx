'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

const diagramVariants: Variants = {
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

const Diagram: FC = () => {
  return (
    <motion.div
      variants={diagramVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <Image
        src="/images/operations-diagram.png"
        alt="Operations Flow Chart"
        className="rounded-xl drop-shadow border"
        width={450}
        height={450}
      />
    </motion.div>
  );
};

export default Diagram;
