import { FC } from 'react';

import Header from '@/components/CaseStudies/Header';
import CaseStudyIntroCards from '@/components/CaseStudies/CaseStudyIntroCards';
import ClientsServed from '../ClientsServed/ClientsServed';

const CaseStudiesPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center gap-8 md:gap-10 relative">
      <Header />
      <CaseStudyIntroCards />
      <ClientsServed />
    </main>
  );
};

export default CaseStudiesPageContent;
