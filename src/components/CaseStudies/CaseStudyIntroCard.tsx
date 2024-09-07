import { FC, RefObject } from 'react';
import Image from 'next/legacy/image';

import { motion, MotionValue, useTransform } from 'framer-motion';

import { CaseStudyIntro } from './CaseStudyIntroCards';

import Button from '../Button';

interface CaseStudyIntroCardProps {
  caseStudyIntro: CaseStudyIntro;
  idx: number;
  length: number;
  container: RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
}

const CaseStudyIntroCard: FC<CaseStudyIntroCardProps> = ({
  caseStudyIntro,
  idx,
  length,
  container,
  scrollYProgress,
}) => {
  const range = [idx * 0.1, 1];
  const targetScale = 1 - (length - idx) * 0.05;
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <motion.div
      ref={container}
      className="h-fit sm:sticky relative sm:mb-8 top-5 lg:top-40 2xl:w-1/20"
      style={{ scale }}
    >
      <div className="flex flex-col gap-4 md:gap-10 bg-accentlight rounded-xl mb-10 sm:mb-20 p-4 sm:p-4 drop-shadow">
        <div className="flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row justify-between">
          <h3 className="w-full sm:w-1/2">{caseStudyIntro.title}</h3>
          <div className="flex flex-col justify-center w-full sm:w-1/3">
            <div>
              <Image
                src={caseStudyIntro.logo}
                alt={caseStudyIntro.logoAlt}
                layout="responsive"
                width={caseStudyIntro.logoWidth}
                height={caseStudyIntro.logoHeight}
              />
            </div>
          </div>
        </div>

        <p className="txt-md mb-6 sm:mb-0">{caseStudyIntro.description}</p>

        <Button
          text="View Case Study"
          blue={true}
          textSize={'text-lg'}
          href={caseStudyIntro.href}
        />
      </div>
    </motion.div>
  );
};

export default CaseStudyIntroCard;
