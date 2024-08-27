import { FC } from 'react';

import Hero from './Hero';
import SolutionsSection from './SolutionsSection';
import FlowSection from './FlowSection/FlowSection';
import TestimonialsSection from './TestimonialsSection';
import ClientsServed from '@/components/ClientsServed/ClientsServed';

const LandingPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <Hero />
      <SolutionsSection />
      <FlowSection />
      <TestimonialsSection />
      <ClientsServed />
    </main>
  );
}

export default LandingPageContent;
