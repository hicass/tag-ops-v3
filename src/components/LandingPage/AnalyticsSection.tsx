'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { motion, Variants } from 'framer-motion';

const slideVariants: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

const AnalyticsSection: FC = () => {
  return (
    <div className="px-6 lg:pt-20 pb-24">
      <h2 className="text-center">Analytics Empowerment</h2>

      <div className="flex flex-col lg:flex-row sm:justify-center items-center lg:items-start mt-4 gap-4 sm:gap-10">
        <motion.div
          variants={slideVariants}
          initial={{ x: -200, opacity: 0 }}
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex flex-col gap-4  mt-6 w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4"
        >
          <div className="border-4 border-secondary rounded-xl p-2">
            <Image
              src="/images/dashboard.png"
              alt="Teamwork Dashboard"
              layout="responsive"
              className="rounded-xl"
              objectFit="cover"
              width={1010}
              height={638}
            />
          </div>

          <div className="flex w-full flex-row items-center gap-2">
            <p className="text-md">Powered By: </p>
            <div className="w-1/3">
              <Link href="https://www.teamwork.com/" target="_blank">
                <Image
                  src="/images/teamwork-logo.png"
                  alt="Teamwork Logo"
                  layout="responsive"
                  objectFit="cover"
                  width={1920}
                  height={248}
                />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={slideVariants}
          initial={{ x: 200, opacity: 0 }}
          whileInView="onscreen"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="lg:mt-6 txt-md md:w-4/5 lg:w-1/5"
        >
          Our project management software empowers your business with analytics,
          not only on tasks and project budgets but also a breakdown of how much
          time is spent on any specific task within any division (Finance, HR,
          Ops) every quarter.
        </motion.p>
      </div>
    </div>
  );
};

export default AnalyticsSection;
