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
    <section className="flex flex-col items-center py-10 sm:py-20">
      <div className="flex flex-col items-center px-6 gap-2 md:w-2/3 2xl:w-1/2">
        <h2 className="flex flex-row items-center">
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
    </section>
  );
};

export default SolutionsSection;
