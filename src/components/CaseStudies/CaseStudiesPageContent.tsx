import { FC } from 'react';

import { PortableTextBlock } from '@portabletext/types';

import Header from '@/components/CaseStudies/Header';
import CaseStudyIntroCards from '@/components/CaseStudies/CaseStudyIntroCards';
import ClientsServed from '../ClientsServed/ClientsServed';

interface Slug {
  current: string;
  _type: string;
}

export interface Testimonial {
  title: string;
  name: string;
  body: string;
}

export interface CompanyLogo {
  asset: object;
  _type: 'image';
  alt: string;
}

export interface Snapshot {
  about: string;
  industry: string;
  location: string;
  companySize: string;
  yearFounded: string;
  solution: string;
}

export interface CaseStudy {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: 'caseStudy';
  title: string;
  slug: Slug;
  testimonial: Testimonial;
  overview: string[];
  companyLogo: CompanyLogo;
  companyName: string;
  problem: PortableTextBlock[];
  results: PortableTextBlock[];
  snapshot: Snapshot;
  preview: string;
}

export interface CaseStudiesContentProps {
  CaseStudiesData: CaseStudy[];
}

const CaseStudiesPageContent: FC<CaseStudiesContentProps> = ({
  CaseStudiesData,
}) => {
  return (
    <main className="flex flex-col items-center gap-8 md:gap-10 relative">
      <Header />
      <CaseStudyIntroCards CaseStudiesData={CaseStudiesData} />
      <ClientsServed />
    </main>
  );
};

export default CaseStudiesPageContent;
