import { FC } from 'react';

import Header from '@/components/CaseStudies/Header';
import CaseStudyIntroCards from '@/components/CaseStudies/CaseStudyIntroCards';
import ClientsServed from '../ClientsServed/ClientsServed';

const CaseStudiesPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header />
      <CaseStudyIntroCards />
      <ClientsServed />
    </main>
  );
}

export default CaseStudiesPageContent;