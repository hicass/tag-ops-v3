import { FC } from 'react';

import Paragraph from '@/components/Paragraph';
import PricingCard from './PricingCard';

const pricingCardData = {
  intro:
    "These pricing fees are starting points and can fluctuate based off of the size and complexity of the scope, as well as the systems and processes that are already in place. Whether you're starting from scratch or refining existing processes, our flexible pricing adapts to the scope and complexity of your project. Explore our services to see how we can support your growth.",
  pricingCards: [
    {
      title: 'Initial Intake',
      price: { cost: 'FREE' },
      description: [
        'We do an initial intake to understand what your needs are, formulate an initial tech strategy, and build out a project scope. From there, we either begin working together or you can walk away with the strategy that we built.',
      ],
    },
    {
      title: 'Build',
      price: { cost: '$5,000', fee: '+ (Flat Fee)' },
      description: [
        "We build out all of the necessary systems and processes you need to get your foot off the ground as a company. If you have existing systems in place, we'll optimize them holistically and integrate them with the rest of your systems for a fraction of the cost of building it from scratch.",
      ],
      addOns: true,
    },
    {
      title: 'Manage',
      price: { cost: '$1,400', fee: '+ (Monthly)' },
      description: [
        'We manage the preexisting systems and processes that were built by you or the systems and processes that we built in the Foundational Build stage - serving as your Fractional Operations team.',
      ],
    },
    {
      title: 'Recruit',
      price: { cost: '$3,400', fee: '+ (Per Role)' },
      description: [
        'When / if you need help filling our role or another role in the company, we offer hourly recruiting services',
        "*we'll first build out our tried and true recruiting system and process to fit your company, then get the search going (see build add ons)",
      ],
    },
  ],
};

const PricingCards: FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-6 lg:w-4/5 lg:p-0">
      <h1>Pricing</h1>

      <Paragraph text={pricingCardData.intro} />

      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-6 mt-8 lg:gap-4">
        {pricingCardData.pricingCards.map((card, idx) => (
          <PricingCard card={card} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
