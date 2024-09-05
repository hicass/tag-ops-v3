import { Metadata } from 'next';

import CaseStudiesPageContent from '@/components/CaseStudies/CaseStudiesPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Case Studies',
  description:
    'Discover our success stories showcasing how we streamline operations and cut costs for diverse industries. Read our case studies to learn how custom systems, process optimizations, and cost saving solutions have saved thousands and improved efficiency for our clients.',
};

export default function AboutPage() {
  return (
    <CaseStudiesPageContent />
  );
}