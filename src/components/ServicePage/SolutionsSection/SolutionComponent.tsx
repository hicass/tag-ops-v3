import { Variants, motion } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function SolutionComponent({ title, description }: any) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="rounded-xl mt-6 mb-10 p-4 bg-secondarylight drop-shadow"
    >
      <p className="txt-md-bold">{title}</p>
      <p className="mt-2 txt-rg">{description}</p>
    </motion.div>
  );
}
