'use client';

import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import { motion } from 'framer-motion';

interface BodyProps {
  body: PortableTextBlock[];
}

const customComponents = {
  types: {
    image: ({ value }: any) => (
      <img src={value.asset.url} alt={value.alt || 'Image'} />
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }: any) => (
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }: any) => (
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold"
      >
        {children}
      </motion.h3>
    ),
    h4: ({ children }: any) => (
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="txt-lg-bold font-bold"
      >
        {children}
      </motion.h4>
    ),
    normal: ({ children }: any) => (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-md text-text/80"
      >
        {children}
      </motion.p>
    ),
  },
};

const Body: FC<BodyProps> = ({ body }) => {
  return (
    <section className="w-fit flex flex-col items-start gap-10 mx-5 md:mx-0 md:w-2/3 2xl:w-1/2">
      <PortableText value={body} components={customComponents} />
    </section>
  );
};

export default Body;
