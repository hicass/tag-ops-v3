'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

import InefficiencyCostComponent from './InefficiencyCostComponent';
import { InefficiencyCost } from '../ServicePageContent';

interface InefficiencySectionProps {
  question: string;
  inefficiencyCosts: InefficiencyCost[];
}

const floatingVariants: Variants = {
  floating: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const InefficiencySection: FC<InefficiencySectionProps> = ({
  question,
  inefficiencyCosts,
}) => {
  return (
    <section className="flex flex-col items-center py-6 sm:py-20">
      <div className="px-6 md:w-2/3 2xl:w-1/2">
        <h3 className="flex flex-col items-center text-center gap-6 sm:gap-10 w-full">
          <motion.div
            variants={floatingVariants}
            animate="floating"
            className="w-10 h-10"
          >
            <Image
              src="/icons/bulb.svg"
              alt="Light Bulb"
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          {question}
        </h3>

        {inefficiencyCosts.map((cost: any, idx: number) => (
          <InefficiencyCostComponent
            key={idx}
            title={cost.title}
            description={cost.description}
          />
        ))}
      </div>
    </section>
  );
};

export default InefficiencySection;
