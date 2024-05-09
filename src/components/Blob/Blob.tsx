import { motion } from 'framer-motion';

export default function Blob({positionX, positionY}: any) {
  return (
    <motion.div
    className={`blob-${positionX} blob-${positionY}`}
    initial={{
      borderRadius: '50% 50% 0 0',
      transform: 'translate3d(0, 0, 0) rotateZ(0.01deg)',
    }}
    animate={{
      borderRadius: [
        '50% 50% 0 0',
        '60% 40% 0 0',
        '50% 50% 0 0',
        '40% 60% 0 0',
      ], 
      transform: [
        'rotateZ(0.01deg)', 
        'rotateZ(0.01deg)',
        'rotateZ(0.01deg)', 
        'rotateZ(0.01deg)',
      ],
    }}
    transition={{
      repeat: Infinity, 
      repeatType: 'reverse',
      duration: 7,
      ease: 'linear',
    }}
  />
  )
}