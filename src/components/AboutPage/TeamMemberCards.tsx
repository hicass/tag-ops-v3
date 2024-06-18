'use client';
import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

type Card = {
  imageLink: string;
  imageAlt: string;
  name: string;
  title: string;
  description: string;
};

const cardVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const cards: Card[] = [
  {
    imageLink: '/images/courtney-walters.jpeg',
    imageAlt: 'Smiling person with brown and blue hair',
    name: 'Courtney Walters',
    title: 'Founder & Operations Consultant',
    description:
      '"I founded Tag Ops after 8 years of working in Operations in the San Francisco startup sphere. From Accounting & HR SaaS companies, to FinTech and Cryptocurrency, to Recruiting. Regardless of the industry, I\'m incredibly adaptable, enjoy learning, and love problem solving. I have a fiery passion for helping small companies strategize and stay organized amongst the chaos of scaling. In my spare time, I enjoy hiking around the Bay Area, playing dnd and strategy-based RPGs, and spending time with my family, friends, and partner."',
  },
  {
    imageLink: '/images/cass-walters.jpg',
    imageAlt: 'Smiling woman with dark hair looking to the side',
    name: 'Cass Walters',
    title: 'Software Developer & Digital Operations Specialist',
    description:
      '"As a coder and artist, I\'m driven by the fusion of creativity and technology. With a passion for both coding and artistic expression, I find fulfillment in crafting elegant and efficient solutions that seamlessly marries functionality with aesthetics. I thrive on the exhilaration of exploring cutting-edge tools and frameworks, constantly expanding my skill set. Beyond the code, I am a gamer, hiker, and dog parent!"',
  },
  {
    imageLink: '/images/daniel-soyinka.png',
    imageAlt: 'Man looking at camera in an orange plaid button up shirt',
    name: 'Daniel Soyinka',
    title: 'Bookkeeping Consultant',
    description:
      '"With a degree in Accounting, I have gained experience across various roles in different companies, from internee to CEO. I have been helping numerous small and medium-size businesses grow by serving as a remote Bookkeeper. I possess comprehensive expertise in all aspects of Accounting and Bookkeeping."',
  },
];

export default function TeamMemberCards() {
  return (
    <>
      {cards.map((card, idx: number) => (
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          key={idx}
          className="p-4 bg-secondarylight rounded-xl drop-shadow"
        >
          <div className="flex gap-4">
            <div className="m-w-1/3">
              <Image
                src={card.imageLink}
                alt={card.imageAlt}
                className="rounded-xl drop-shadow border"
                width={100}
                height={100}
              />
            </div>

            <div>
              <p className="text-lg manrope-bold">{card.name}</p>
              <p className="manrope-semibold">{card.title}</p>
            </div>
          </div>

          <p className="mt-6">{card.description}</p>
        </motion.div>
      ))}
    </>
  );
}
