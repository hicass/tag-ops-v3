'use client';

import { FC } from 'react';

import { Testimonial } from '@/components/LandingPage/TestimonialsSection';

import Header from './Header';
import SnapshotSection from './SnapshotSection';
import ProblemSection from './ProblemSection';
import ClientsServed from '@/components/ClientsServed/ClientsServed';
import ResultsSection from './ResultsSection';
import TestimonialSection from './TestimonialSection';

export type CaseStudy = {
  title: string;
  topCards: string[];
  logo: Logo;
  snapshot: Snapshot;
  problem: string[];
  results: string[];
  testimonial: Testimonial;
};

export type Logo = {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoLink: string;
};

export type Snapshot = {
  industry: string;
  location: string;
  companySize: string;
  yearFounded: string;
  solution: string;
  description: string;
};

interface CaseStudyPageContentProps {
  caseStudy: CaseStudy;
}

const CaseStudyPageContent: FC<CaseStudyPageContentProps> = ({ caseStudy }) => {
  return (
    <main className="flex flex-col items-center gap-16 relative overflow-hidden">
      <Header title={caseStudy.title} topCards={caseStudy.topCards} />
      <SnapshotSection snapshot={caseStudy.snapshot} logo={caseStudy.logo} />
      <ProblemSection problem={caseStudy.problem} />
      <ResultsSection results={caseStudy.results} />
      <TestimonialSection testimonial={caseStudy.testimonial} />
      <ClientsServed />
    </main>
  );
};

export default CaseStudyPageContent;
