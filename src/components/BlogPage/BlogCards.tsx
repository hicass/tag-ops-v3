'use client';
import { FC } from 'react';
import { motion, Variants } from 'framer-motion';

import { BlogPostsContentProps } from './BlogPageContent';

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

interface BlogPostCard {
  title: string;
  preview: string;
  slug: {
    current: string;
  };
}

const BlogCards: FC<BlogPostsContentProps> = ({ BlogPostsData }) => {
  return (
    <div className="flex flex-wrap md:w-full lg:w-full 2xl:w-4/5 justify-center gap-6 mx-5">
      {BlogPostsData.map((card: BlogPostCard, idx: number) => (
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
            <p className="txt-rg">{card.preview}</p>
          </div>

          <a
            href={card.slug.current}
            className="text-primary txt-rg flex gap-2 w-fit relative hover:cursor-pointer blog-card-link"
          >
            Read
            <img
              src="/icons/arrow.svg"
              width={20}
              height={20}
              className="blog-card-arrow"
            />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCards;
