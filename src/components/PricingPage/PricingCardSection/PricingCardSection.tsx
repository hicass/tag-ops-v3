'use client';
import { FC, useState } from 'react';

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
      addOnCards: [
        {
          title: 'Foundational Build',
          items: [
            'Software Integration / Data Flow Strategization',
            'Messaging Software Implementation',
            'E-Signature Software Implementation',
            'CRM Implementation',
            'Helpdesk Ticketing System',
            'HRIS/Payroll System Implementation',
            'Onboarding & Dismissals Process Implementation',
            'Accounting Software Implementation',
            'Expense Management Software/Process Implementation',
            'Vendor Tracking System',
          ],
        },
        {
          title: 'Additional Build',
          description:
            "These are systems and processes that aren't immediately needed when you start out, but will be as you continue to scale. Implementation can be on an ad hoc basis as you grow.",
          items: [
            'Project Management Software Implementation',
            'Documentation Organization (Wiki/Intranet)',
            'Hardware/Inventory Management Implementation',
            'Custom Dashboard Build',
            'Recruiting Process Implementation & Documentation',
            'ATS Implementation',
            'Employee Success System & Process Implementation',
            'Commission Calculation Process Implementation',
            'AR/AP Automation Software Implementation',
          ],
        },
      ],
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

interface PricingCardsProps {
  pageBlur: boolean;
  setPageBlur: (data: boolean) => void;
}

const PricingCards: FC<PricingCardsProps> = ({ pageBlur, setPageBlur }) => {
  const [addOnsOpen, setAddOnsOpen] = useState(false);

  const handleAddOnClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAddOnsOpen(!addOnsOpen);
    setPageBlur(!pageBlur);
  };

  return (
    <div className="flex flex-col items-center gap-8 px-6 py-20 w-full lg:px-0">
      <h1>Pricing</h1>

      <div className="md:w-2/3 2xl:w-1/2 ">
        <Paragraph text={pricingCardData.intro} />
      </div>

      <div className="flex flex-col items-center lg:flex-row flex-wrap lg:items-start gap-6 mt-8 lg:gap-4 items-center">
        {pricingCardData.pricingCards.map((card, idx) => (
          <PricingCard
            card={card}
            key={idx}
            addOnsOpen={addOnsOpen}
            handleAddOnClick={handleAddOnClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
