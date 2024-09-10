'use client';
import { FC } from 'react';

import { motion } from 'framer-motion';

const clientsServedData = [
  {
    src: '/client-logos/allo-hire-logo.png',
    alt: 'Allo Hire',
    width: 2500,
    height: 447,
  },
  { src: '/client-logos/mend-logo.png', alt: 'Mend', width: 1400, height: 525 },
  {
    src: '/client-logos/pursuits-logo.png',
    alt: 'Pursuits',
    width: 950,
    height: 251,
  },
  {
    src: '/client-logos/nurture-source-logo.png',
    alt: 'Nurture Source',
    width: 2700,
    height: 601,
  },
  {
    src: '/client-logos/mind-hire-logo.png',
    alt: 'Mind Hire',
    width: 2500,
    height: 501,
  },
  {
    src: '/client-logos/diversity-zoom-logo.png',
    alt: 'Diversity Zoom Logo',
    width: 1600,
    height: 320,
  },
  {
    src: '/client-logos/cocoon-logo.png',
    alt: 'Cocoon Logo',
    width: 535,
    height: 87,
  },
];

const Marquee: FC = () => {
  const marqueeAnimation = {
    x: ['0%', '-100%'],
    transition: {
      duration: 30,
      ease: 'linear',
      repeat: Infinity,
    },
  };

  return (
    <div className="marquee-container my-8 relative">
      <div className="md:absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
      <motion.div animate={marqueeAnimation} className="marquee">
        {clientsServedData.map((client, idx) => (
          <Logo key={idx} client={client} />
        ))}
      </motion.div>
      <motion.div animate={marqueeAnimation} className="marquee">
        {clientsServedData.map((client, idx) => (
          <Logo key={`duplicate-${idx}`} client={client} />
        ))}
      </motion.div>
      <div className="md:absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

const Logo = ({ client, idx }: any) => {
  return (
    <img key={idx} src={client.src} alt={client.alt} className="marquee-logo" />
  );
};

export default Marquee;
