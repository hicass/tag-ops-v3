import { FC } from 'react';

import Hero from './Hero';
import SolutionsSection from './SolutionsSection';
import FlowSection from './FlowSection/FlowSection';
import WavyLine from '@/components/Accents/WavyLine';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import ClientsServed from '@/components/ClientsServed/ClientsServed';
import AnalyticsSection from './AnalyticsSection';

interface LandingPageContentProps {
  LandingPageData: any; // Replace with more specific types
}

const LandingPageContent: FC<LandingPageContentProps> = async ({ LandingPageData }) => {
  console.log(LandingPageData);

  return (
    <main className="flex flex-col items-center gap-16 overflow-hidden">
      <Hero {...LandingPageData.hero} />
      <SolutionsSection />
      <FlowSection />
      <WavyLine />
      <AnalyticsSection />
      <TestimonialsSection />
      <ClientsServed />
    </main>
  );
};

export default LandingPageContent;

