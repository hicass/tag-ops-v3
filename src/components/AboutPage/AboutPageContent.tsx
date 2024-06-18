'use client';
import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

import Blob from '@/components/Blob/Blob';
import ClientsServed from '../ClientsServed/ClientsServed';
import TeamMemberCards from './TeamMemberCards';

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

export default function AboutPageContent() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* Header */}
      <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3 2xl:w-1/2">
        <h1 className="secret">About Us</h1>

        <motion.h1
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          className="text-center text-5xl text-primary"
        >
          Hello!
        </motion.h1>
        <h2 className="mt-2 text-center text-xl md:text-2xl">
          We are Tag Operations, your partner in operational excellence.
        </h2>

        <p className="mt-4 md:text-lg">
          Every business, regardless of size, deserves tailored support to
          thrive. Born from this belief, we offer innovative and flexible
          back-office solutions, empowering you to streamline operations,
          optimize resources, and achieve lasting success.
        </p>
      </section>

      {/* Mission */}
      <section className="relative lg:w-full">
        <div className="w-full flex flex-col items-center my-8 p-10 bg-primary drop-shadow-md">
          <h1 className="text-center text-3xl text-background manrope-bold md:text-4xl">
            Our Mission
          </h1>

          <p className="mt-4 text-background text-center md:text-2xl md:w-2/3 2xl:w-1/2">
            We transform back offices with reliable systems, processes, and
            talent while empowering leadership with crucial insights into their
            operational costs.
          </p>
        </div>

        <div>
          <Blob positionX={'left'} positionY={'top-small'} />
          <Blob positionX={'right'} positionY={'bot-small'} flip={true} />
        </div>
      </section>

      {/* Story  */}
      <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3 2xl:w-1/2">
        <h2 className="flex text-nowrap flex-row items-center gap-2 text-3xl manrope-bold text-primary md:text-4xl">
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

        <div className="flex flex-col gap-4 mt-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:text-lg"
          >
            Our journey began in late 2022 when our founder,{' '}
            <span className="manrope-semibold">Courtney Walters</span>,
            recognized a critical gap in the business landscape. Having worked
            extensively within San Francisco's startup ecosystem, it became
            evident that while front-office functions like customer success and
            marketing received ample attention, back-office operations were
            often overlooked. This disparity stemmed from the misconception that
            operations lacked direct revenue generation potential.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:text-lg"
          >
            Drawing from firsthand experiences, Courtney realized the
            <span className="manrope-semibold">
              {' '}
              transformative power hidden within back-office optimization
            </span>{' '}
            and embarked on a mission to help businesses achieve operational
            excellence. From automating processes to integrating sophisticated
            software solutions, the right approach drives scalability and
            unlocks{' '}
            <span className="manrope-semibold"> significant cost savings</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:text-lg"
          >
            We believe that{' '}
            <span className="manrope-semibold">
              {' '}
              high-quality operational support
            </span>{' '}
            is indispensable for every business{' '}
            <span className="manrope-semibold"> regardless of its size</span>,
            and understand that not all companies require a dedicated operations
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
            className="md:text-lg"
          >
            At{' '}
            <span className="text-primary manrope-semibold">
              Tag Operations
            </span>
            , we're not just another operations support company – we're partners
            dedicated to empowering businesses to thrive through efficient and
            effective back-office strategies.
          </motion.p>
        </div>
      </section>

      {/* Team  */}
      <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3 2xl:w-1/2">
        <h1 className="flex flex-row items-center gap-2 text-3xl text-primary manrope-bold md:text-4xl">
          Meet the team!
        </h1>

        <p className="mt-6 md:text-lg">
          Our Tag Ops team is a dynamic group of experts dedicated to
          operational excellence. With diverse industry backgrounds, we bring a
          wealth of knowledge to every project. We're committed to tailoring
          solutions to your specific needs, from process optimization to
          strategic guidance.
        </p>

        <div className="flex flex-col w-full mt-8 gap-8 md:text-lg">
          <TeamMemberCards />
        </div>
      </section>

      <ClientsServed />
    </main>
  );
}
