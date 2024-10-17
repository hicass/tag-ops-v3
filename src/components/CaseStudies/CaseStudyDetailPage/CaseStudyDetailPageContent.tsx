'use client';

import { FC } from 'react';

import { Testimonial } from '@/components/LandingPage/TestimonialsSection/TestimonialsSection';

import Header from './Header';
import SnapshotSection from './SnapshotSection';
import ProblemSection from './ProblemSection';
import ClientsServed from '@/components/ClientsServed/ClientsServed';
import ResultsSection from './ResultsSection';
import TestimonialSection from './TestimonialSection';
import { CaseStudy } from '../CaseStudiesPageContent';

const CaseStudyDetailPageContent: FC<CaseStudy> = ({
  title,
  overview,
  snapshot,
  companyLogo,
  problem,
  results,
  testimonial,
}) => {
  console.log('OVERVIEW: ', overview);
  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header title={title} topCards={overview} />
      <SnapshotSection snapshot={snapshot} logo={companyLogo} />
      <ProblemSection problem={problem} />
      <ResultsSection results={results} />
      <TestimonialSection testimonial={testimonial} />
      <ClientsServed />
    </main>
  );
};

export default CaseStudyDetailPageContent;
