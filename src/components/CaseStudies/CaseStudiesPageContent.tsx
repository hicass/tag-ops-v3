import { FC } from 'react';

import Header from '@/components/CaseStudies/Header';
import CaseStudyIntroCards from '@/components/CaseStudies/CaseStudyIntroCards';

const CaseStudiesPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header />
      <CaseStudyIntroCards />
    </main>
  );
}

export default CaseStudiesPageContent;