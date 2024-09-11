'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

type Card = {
  iconLink: string;
  iconAlt: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    iconLink: '/icons/compass.svg',
    iconAlt: 'Compass',
    title: '1 • Discovery',
    description:
      'We jump on a discovery call to discuss your back-office needs and how Tag Ops can help.',
  },
  {
    iconLink: '/icons/telescope.svg',
    iconAlt: 'Telescope',
    title: '2 • Initial Scope',
    description:
      'We create an initial scope for the first quarter of our partnership.',
  },
  {
    iconLink: '/icons/rocket.svg',
    iconAlt: 'Rocket',
    title: '3 • Kickoff',
    description:
      "You approve the scope, and we kick off the project. You'll receive access to our project management dashboard, enabling collaboration and visibility into the progress.",
  },
  {
    iconLink: '/icons/telescope.svg',
    iconAlt: 'Telescope',
    title: '4 • Scope In Progress',
    description: 'We complete the project as determined in the scope.',
  },
  {
    iconLink: '/icons/calendar.svg',
    iconAlt: 'Calendar',
    title: '5 • Quarterly Review',
    description:
      'At the end of the quarter, you will receive a report on time and cost regarding the tasks in each division (Ops, Finance, Human Resources), enabling data-driven decisions around your workforce and empowering your growth.',
  },
  {
    iconLink: '/icons/bulb.svg',
    iconAlt: 'Light Bulb',
    title: '6 • Decision',
    description: 'You determine whether you need ongoing support from us.',
  },
  {
    iconLink: '/icons/telescope.svg',
    iconAlt: 'Telescope',
    title: 'If Yes • New Scope',
    description: 'We create a new scope for the upcoming quarter.',
  },
  {
    iconLink: '/icons/user.svg',
    iconAlt: 'Person',
    title: 'If No • Transition',
    description:
      'We help you recruit, fill the role, train as needed, and close out the project.',
  },
];

const cardVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

const FlowCards: FC = () => {
  return (
    <>
      {cards.map((card, idx: number) => (
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          key={idx}
          className="relative my-6 min-h-fit"
        >
          <div className="w-10 h-10 absolute top-0 left-0 -ml-5 -mt-2">
            <Image
              src={card.iconLink}
              alt={card.iconAlt}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <h3 className="txt-md-bold pl-6">{card.title}</h3>
          <p className="mt-2 txt-rg text-text/80 border-l-4 pl-6 min-h-24 h-fit">
            {card.description}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export default FlowCards;
