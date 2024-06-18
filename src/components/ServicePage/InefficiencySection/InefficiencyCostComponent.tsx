'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

interface InefficiencyCostProps {
  title: string;
  description: string;
}

const InefficiencyCostComponent: FC<InefficiencyCostProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10"
    >
      <h3 className="text-lg sm:text-xl manrope-bold">{title}</h3>
      <p className="mt-2 sm:text-lg">{description}</p>
    </motion.div>
  );
};

export default InefficiencyCostComponent;
