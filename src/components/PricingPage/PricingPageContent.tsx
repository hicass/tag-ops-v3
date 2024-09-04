'use client';

import { FC, useState } from 'react';

import Header from './Header';
import Intro from './Intro/Intro';
import Quote from './Quote';
import PricingCardSection from './PricingCardSection/PricingCardSection';
import ClientsServed from '../ClientsServed/ClientsServed';

const PricingPageContent: FC = () => {
  const [pageBlur, setPageBlur] = useState(false);

  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header />
      <Intro />
      <Quote />
      <PricingCardSection pageBlur={pageBlur} setPageBlur={setPageBlur} />
      <ClientsServed />

      {pageBlur && (
        <div
          className="w-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-transparent h-full backdrop-filter backdrop-blur-[1.5px]"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, transparent, rgba(245, 238, 254, .40), transparent)',
          }}
        ></div>
      )}
    </main>
  );
};

export default PricingPageContent;
