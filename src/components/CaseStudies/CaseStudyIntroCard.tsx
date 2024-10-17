import { FC, RefObject } from 'react';

import { motion, MotionValue, useTransform } from 'framer-motion';

import Button from '../Button';
import { CaseStudy } from './CaseStudiesPageContent';
import { urlFor } from '@/sanity/lib/image';

interface CaseStudyIntroCardProps {
  caseStudy: CaseStudy;
  idx: number;
  length: number;
  container: RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
}

const CaseStudyIntroCard: FC<CaseStudyIntroCardProps> = ({
  caseStudy,
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
          <h3 className="w-full sm:w-1/2">{caseStudy.title}</h3>
          <div className="flex flex-col justify-center w-full sm:w-1/3">
            <div>
              {caseStudy.companyLogo.asset && (
                <img
                  src={urlFor(caseStudy.companyLogo.asset).url()}
                  alt={caseStudy.companyLogo.alt}
                />
              )}
            </div>
          </div>
        </div>

        <p className="txt-md text-text/80 mb-6 sm:mb-0">{caseStudy.preview}</p>

        <Button
          text="View Case Study"
          blue={true}
          textSize={'text-lg'}
          href={caseStudy.slug.current}
        />
      </div>
    </motion.div>
  );
};

export default CaseStudyIntroCard;
