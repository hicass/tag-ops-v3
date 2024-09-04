'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

const floatingVariants: Variants = {
  floating: {
    y: [0, -5, 0],
    transition: {
      duration: 2.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const StorySection: FC = () => {
  return (
    <section className="w-full flex flex-col items-center sm:my-8 p-5 md:w-2/3 2xl:w-1/2">
      <h2 className="flex text-nowrap flex-row items-center gap-2">
        Our Story
        <motion.div
          variants={floatingVariants}
          animate="floating"
          className="w-10"
        >
          <Image
            src="/icons/book.svg"
            alt="Book"
            width={100}
            height={100}
            layout="responsive"
          />
        </motion.div>
      </h2>

      <div className="flex flex-col gap-6 mt-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="txt-md"
        >
          Our journey began in late 2022 when our founder,{' '}
          <span className="manrope-semibold">Courtney Walters</span>, recognized
          a critical gap in the business landscape. Having worked extensively
          within San Francisco's startup ecosystem, it became evident that while
          front-office functions like customer success and marketing received
          ample attention, back-office operations were often overlooked. This
          disparity stemmed from the misconception that operations lacked direct
          revenue generation potential.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="txt-md"
        >
          Drawing from firsthand experiences, Courtney realized the
          <span className="manrope-semibold">
            {' '}
            transformative power hidden within back-office optimization
          </span>{' '}
          and embarked on a mission to help businesses achieve operational
          excellence. From automating processes to integrating sophisticated
          software solutions, the right approach drives scalability and unlocks{' '}
          <span className="manrope-semibold"> significant cost savings</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="txt-md"
        >
          We believe that{' '}
          <span className="manrope-semibold">
            {' '}
            high-quality operational support
          </span>{' '}
          is indispensable for every business{' '}
          <span className="manrope-semibold"> regardless of its size</span>, and
          understand that not all companies require a dedicated operations
          leader. We offer a
          <span className="manrope-semibold">
            {' '}
            holistic, flexible, and customizable
          </span>{' '}
          model to meet your unique needs. Our approach is rooted in
          collaboration, where we work closely with you to craft tailored
          solutions that optimize your back-office without draining resources.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="txt-md"
        >
          At{' '}
          <span className="text-primary manrope-semibold">Tag Operations</span>,
          we're not just another operations support company – we're partners
          dedicated to empowering businesses to thrive through efficient and
          effective back-office strategies.
        </motion.p>
      </div>
    </section>
  );
};

export default StorySection;
