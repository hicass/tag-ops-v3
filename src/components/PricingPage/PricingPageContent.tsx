import { FC } from 'react';

import Header from './Header';
import Intro from './Intro/Intro';
import Quote from './Quote';

const PricingPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center my-20 gap-16">
      <Header />
      <Intro />
      <Quote />
    </main>
  );
}

export default PricingPageContent;