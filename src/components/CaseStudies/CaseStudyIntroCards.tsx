'use client';

import { FC, useRef } from 'react';
import Image from 'next/legacy/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import CaseStudyIntroCard from './CaseStudyIntroCard';

export type CaseStudyIntro = {
  title: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
  description: string;
};

const caseStudyIntros: CaseStudyIntro[] = [
  {
    title: 'Diversity Zoom: A Scalable ATS',
    logo: '/client-logos/diversity-zoom-logo.png',
    logoAlt: 'Diversity Zoom Logo',
    logoWidth: 1600,
    logoHeight: 320,
    href: '/case-studies/diversity-zoom',
    description:
      'Developed and implemented a scalable, cost-effective Applicant Tracking System (ATS) for Diversity Zoom, including a customized onboarding process and client-recruiter interface. This new system streamlined recruitment, saving the company $13,992 annually compared to prebuilt ATS options.',
  },
  {
    title: 'Mend: Launching a coffee shop for the interabled community',
    logo: '/client-logos/mend-logo.png',
    logoAlt: 'Cocoon Logo',
    logoWidth: 1200,
    logoHeight: 325,
    href: '/case-studies/mend',
    description:
      'Established robust HR and Operations systems for an inclusive coffee shop, Mend Coffee & Goods, by creating efficient software integrations, processes, and policies. This enabled a supportive environment for the interabled community while streamlining workflows and enhancing team cohesion.',
  },
  {
    title: 'Cocoon: Streamlining Accounts Receivable Operations',
    logo: '/client-logos/cocoon-logo.png',
    logoAlt: 'Cocoon Logo',
    logoWidth: 535,
    logoHeight: 87,
    href: '/case-studies/cocoon',
    description:
      "Revamped and automated Cocoon's Accounts Receivable system, achieving a $25,800 annual savings in labor costs. The improvements led to a significant reduction in overdue invoices, decreasing 90+ days overdue amounts from $500,000 to $72,000, and streamlined invoicing and payment reconciliation processes.",
  },
];

const CaseStudyIntroCards: FC = () => {
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
      {caseStudyIntros.map((caseStudyIntro, idx) => {
        return (
          <CaseStudyIntroCard
            key={idx}
            caseStudyIntro={caseStudyIntro}
            idx={idx}
            length={caseStudyIntros.length}
            scrollYProgress={scrollYProgress}
            container={container}
          />
        );
      })}
    </motion.div>
  );
};

export default CaseStudyIntroCards;
