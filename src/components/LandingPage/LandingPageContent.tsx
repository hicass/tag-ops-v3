import { FC } from 'react';

import Hero from './Hero';
import SolutionsSection from './SolutionsSection';
import FlowSection from './FlowSection/FlowSection';
import WavyLine from '@/components/Accents/WavyLine';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import ClientsServed from '@/components/ClientsServed/ClientsServed';
import AnalyticsSection from './AnalyticsSection';

const LandingPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center gap-16 overflow-hidden">
      <Hero />
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
