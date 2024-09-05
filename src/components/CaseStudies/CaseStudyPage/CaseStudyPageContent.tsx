'use client';

import ClientsServed from '@/components/ClientsServed/ClientsServed';
import { Testimonial } from '@/components/LandingPage/TestimonialsSection';
import { FC } from 'react';
import Header from './Header';

export type CaseStudy = {
  title: string;
  topCards: string[];
  logo: Logo;
  snapshot: Snapshot;
  problem: string[];
  results: string[];
  testimonial: Testimonial;
}

type Logo = {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoLink: string;
}

type Snapshot = {
  industry: string;
  location: string;
  companySize: string;
  yearFounded: string;
  solution: string;
  description: string;
}

interface CaseStudyPageContentProps {
  caseStudy: CaseStudy;
}

const CaseStudyPageContent: FC<CaseStudyPageContentProps> = ({ caseStudy }) => {
  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header title={caseStudy.title} topCards={caseStudy.topCards} />
      <ClientsServed />
    </main>
  );
};

export default CaseStudyPageContent;