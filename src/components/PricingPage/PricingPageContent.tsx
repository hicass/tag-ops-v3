import { FC } from 'react';

import Header from './Header';
import Intro from './Intro/Intro';
import Quote from './Quote';
import PricingCardSection from './PricingCardSection';
import ClientsServed from '../ClientsServed/ClientsServed';

const PricingPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center my-20 gap-16">
      <Header />
      <Intro />
      <Quote />
      <PricingCardSection />
      <ClientsServed />
    </main>
  );
}

export default PricingPageContent;