import { motion } from 'framer-motion';

export default function InefficiencyCostComponent({ title, description }: any) {
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
}
