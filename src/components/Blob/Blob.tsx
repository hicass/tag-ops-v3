import { motion } from 'framer-motion';

export default function Blob({ positionX, positionY, flip }: any) {
  const borderRadiusTop = '50% 50% 0 0';
  const borderRadiusBottom = '0 0 50% 50%';

  return (
    <motion.div
      className={`blob-${positionX} blob-${positionY}`}
      initial={{
        borderRadius: flip ? borderRadiusBottom : borderRadiusTop,
      }}
      animate={{
        borderRadius: flip
          ? ['0 0 50% 50%', '0 0 40% 60%', '0 0 50% 50%', '0 0 60% 40%']
          : ['50% 50% 0 0', '60% 40% 0 0', '50% 50% 0 0', '40% 60% 0 0'],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 7,
        ease: 'linear',
      }}
    />
  );
}
