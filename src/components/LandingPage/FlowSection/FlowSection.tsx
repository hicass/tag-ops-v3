'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import FlowCards from './FlowCards';

const FlowSection: FC = () => {
  return (
    <section className="flex flex-col items-center gap-4 my-8 sm:my-16 p-6 sm:mt-20 md:w-2/3 2xl:w-1/2">
      <h2>Our Flow</h2>

      <div className="w-full">
        <FlowCards />
      </div>

      <h2 className="text-center mt-4 lg:mt-10">
        Analytics Empowerment
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mt-4 gap-4"
      >
        <div className="flex flex-col gap-4 w-full sm:w-2/3 md:w-2/3 lg:w-1/2 mt-6">
          <div className="border-4 border-secondarylight padding-2 rounded-xl drop-shadow">
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

        <p className="mt-6 txt-md">
          Our project management software empowers your business with analytics,
          not only on tasks and project budgets but also a breakdown of how much
          time is spent on any specific task within any division (Finance, HR,
          Ops) every quarter.
        </p>
      </motion.div>
    </section>
  );
}

export default FlowSection;