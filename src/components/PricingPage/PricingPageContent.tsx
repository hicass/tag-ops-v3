import { FC } from 'react';

import Header from './Header';
import Intro from './Intro/Intro';

const PricingPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center my-20 mx-40 gap-10">
      <Header />
      <Intro />
    </main>
  );
}

export default PricingPageContent;