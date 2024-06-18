'use client'

import { FC } from 'react';

import { motion } from 'framer-motion';

import { Solution } from '../ServicePageContent';
import SolutionComponent from './SolutionComponent';

interface SolutionsSectionProps {
  solutions: Solution[];
  endingParagraph: string;
}

const SolutionsSection: FC<SolutionsSectionProps> = ({
  solutions,
  endingParagraph,
}) => {
  return (
    <section className="flex flex-col items-center mt-14 bg-secondary">
      <div className="flex flex-col items-center mt-12 p-6 pb-0 gap-2 md:w-2/3 2xl:w-1/2">
        <h2 className="flex flex-row items-center text-3xl">
          How we can help:
        </h2>

        <div>
          {solutions.map((solution: any, idx: number) => (
            <SolutionComponent
              key={idx}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 pt-0 sm:p-10 sm:pt-0  mb-6 md:w-2/3 2xl:w-1/2"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-lg md:text-2xl"
        >
          {endingParagraph}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SolutionsSection;
