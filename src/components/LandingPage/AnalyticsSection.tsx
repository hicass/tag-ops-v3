'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

const AnalyticsSection: FC = () => {
  return (
    <div className="px-6">
      <h2 className="text-center">Analytics Empowerment</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row sm:justify-center items-center lg:items-start mt-4 gap-4 sm:gap-10"
      >
        <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/3 mt-6">
          <div className="border-4 border-secondary rounded-xl drop-shadow">
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
            <p className="text-rg">Powered By: </p>
            <div className="w-1/4">
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
        </div>

        <p className="lg:mt-6 txt-md lg:w-1/5">
          Our project management software empowers your business with analytics,
          not only on tasks and project budgets but also a breakdown of how much
          time is spent on any specific task within any division (Finance, HR,
          Ops) every quarter.
        </p>
      </motion.div>
    </div>
  );
};

export default AnalyticsSection;
