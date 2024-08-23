import { Metadata } from 'next';

import PricingPageContent from '@/components/PricingPage/PricingPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Pricing',
  description:
    'Strategize your tech stack with expert system integration and standardization. Prevent errors, streamline processes, and ensure scalable growth with our holistic technology solutions.',
};

export default function AboutPage() {
  return (
    <PricingPageContent />
  );
}
