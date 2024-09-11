'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';


interface ParagraphProps {
  text: String;
}

const Paragraph: FC<ParagraphProps> = ({ text }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-md text-text/80"
    >
      {text}
    </motion.p>
  );
};

export default Paragraph;