'use client';
import { FC } from 'react';

import { motion, Variants } from 'framer-motion';

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

const blogCardsData = [
  {
    title: 'The Hidden Dangers of Siloed Technology in Your Company',
    description:
      'Uncover the risks of siloed technology in your company, including inefficiencies and security vulnerabilities. Learn how breaking down these silos can improve workflows, collaboration, and innovation.',
    href: '/blog/1',
  },
  {
    title: 'Embracing the Future: The Rise of Fractional Work',
    description:
      "Learn how fractional work is transforming careers and workforce structures, offering flexibility for individuals and strategic advantages for companies in today's evolving professional landscape.",
    href: '/blog/2',
  },
];

const BlogCards: FC = () => {
  return (
    <div className="flex flex-wrap md:w-full lg:w-full 2xl:w-3/5 justify-center gap-6 mx-5">
      {blogCardsData.map((card, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="flex flex-col justify-between p-4 bg-accentlight rounded-xl drop-shadow w-full md:w-1/4 gap-4"
        >
          <div className="flex flex-col gap-4">
            <p className="txt-md-bold">{card.title}</p>
            <p className="txt-rg">{card.description}</p>
          </div>

          <div className="flex gap-2 w-fit relative hover:cursor-pointer blog-card-link">
            <a href={card.href} className="text-primary txt-rg">
              Read
            </a>
            <img
              src="/icons/arrow.svg"
              width={20}
              height={20}
              className="blog-card-arrow"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCards;
