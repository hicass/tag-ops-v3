'use client';

import { FC } from 'react';
import Image from 'next/legacy/image';

import { motion } from 'framer-motion';
import Button from '../Button';

type CaseStudyIntro = {
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
    title: 'Cocoon: Streamlining Accounts Receivable Operations',
    logo: '/client-logos/cocoon-logo.png',
    logoAlt: 'Cocoon Logo',
    logoWidth: 535,
    logoHeight: 87,
    href: '/case-studies/cocoon',
    description:
      "Revamped and automated Cocoon's Accounts Receivable system, achieving a $25,800 annual savings in labor costs. The improvements led to a significant reduction in overdue invoices, decreasing 90+ days overdue amounts from $500,000 to $72,000, and streamlined invoicing and payment reconciliation processes.",
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
];

const TestimonialsSection: FC = () => {
  return (
    <div className="flex flex-col px-6 md:px-0 md:w-4/5 lg:w-2/3 2xl:w-1/2">
      <div className="mb-10">
        {caseStudyIntros.map((caseStudyIntro, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            viewport={{
              amount: 0.2,
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 md:gap-10 bg-accentlight rounded-xl mb-10 p-4 drop-shadow"
          >
            <div className="flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row justify-between">
              <h3 className="w-full text-center sm:text-left sm:w-1/2">
                {caseStudyIntro.title}
              </h3>
              <div className="flex flex-col justify-center w-full sm:w-1/3">
                <Image
                  src={caseStudyIntro.logo}
                  alt={caseStudyIntro.logoAlt}
                  layout="responsive"
                  width={caseStudyIntro.logoWidth}
                  height={caseStudyIntro.logoHeight}
                />
              </div>
            </div>

            <p className="txt-md mb-6 sm:mb-0">{caseStudyIntro.description}</p>

            <Button
              text="View Case Study"
              blue={true}
              textSize={'text-lg'}
              href={caseStudyIntro.href}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
