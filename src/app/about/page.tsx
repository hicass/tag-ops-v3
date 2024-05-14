import { Metadata } from 'next';

import AboutPageContent from '../../components/AboutPage/AboutPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | About',
  description:
    'Discover Tag Operations: Your partner in unlocking back-office potential. From streamlining operations to optimizing HR and finance, we empower businesses to thrive. Learn more about our journey and commitment to operational excellence.',
};

export default function AboutPage() {
  return (
    <AboutPageContent />
  );
}
