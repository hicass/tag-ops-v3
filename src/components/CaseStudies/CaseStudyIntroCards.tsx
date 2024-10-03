'use client';

import { FC, useRef } from 'react';

import { motion, useScroll } from 'framer-motion';
import CaseStudyIntroCard from './CaseStudyIntroCard';
import { CaseStudiesContentProps } from './CaseStudiesPageContent';

export type CaseStudyIntro = {
  title: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
  description: string;
};

const CaseStudyIntroCards: FC<CaseStudiesContentProps> = ({
  CaseStudiesData,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center px-6 md:px-0 md:w-4/5 lg:w-2/3 2xl:w-1/2 relative"
    >
      {CaseStudiesData.map((caseStudy, idx) => {
        return (
          <CaseStudyIntroCard
            key={idx}
            caseStudy={caseStudy}
            idx={idx}
            length={CaseStudiesData.length}
            scrollYProgress={scrollYProgress}
            container={container}
          />
        );
      })}
    </motion.div>
  );
};

export default CaseStudyIntroCards;
