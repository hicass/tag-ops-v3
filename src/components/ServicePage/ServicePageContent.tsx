'use client';
import Image from 'next/legacy/image';

import { motion, Variants } from 'framer-motion';

import SolutionComponent from './SolutionComponent';
import InefficiencyCostComponent from './InefficiencyCostComponent';
import ClientsServed from '../ClientsServed/ClientsServed';

const floatingVariants: Variants = {
  floating: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const titleVariants: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function SerivcePageContent({
  serviceName,
  serviceDescription,
  serviceQuestion,
  inefficiencyCosts,
  serviceSolutions,
  serviceEndingParagraph,
}: any) {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* Header */}
      <section className="w-full bg-primary mb-8 drop-shadow-md">
        <motion.div
          variants={titleVariants}
          viewport={{
            once: true,
          }}
          initial="offscreen"
          whileInView="onscreen"
          className="w-full flex flex-col items-center my-10 p-10"
        >
          <h1 className="text-3xl text-background sm:text-5xl">
            {serviceName}
          </h1>

          <p className="mt-4 text-lg text-background md:text-2xl md:text-center md:w-2/3 2xl:w-1/2">
            {serviceDescription}
          </p>
        </motion.div>
      </section>

      {/* Inefficiencies */}
      <section className="flex flex-col items-center">
        <div className="p-10 md:w-2/3 2xl:w-1/2">
          <h2 className="flex flex-col items-center text-center gap-6 w-full text-2xl sm:text-3xl">
            <motion.div
              variants={floatingVariants}
              animate="floating"
              initial="flating"
              className="w-10 h-10"
            >
              <Image
                src="/icons/bulb.svg"
                alt="Light Bulb"
                width={100}
                height={100}
                layout="responsive"
              />
            </motion.div>
            {serviceQuestion}
          </h2>

          {inefficiencyCosts.map((cost: any, idx: number) => (
            <InefficiencyCostComponent
              key={idx}
              title={cost.title}
              description={cost.description}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center mt-14 bg-secondary">
        <div className="flex flex-col items-center my-12 p-6 gap-2 md:w-2/3 2xl:w-1/2">
          <h2 className="flex flex-row items-center text-3xl">
            How we can help:
          </h2>

          <div>
            {serviceSolutions.map((solution: any, idx: number) => (
              <SolutionComponent
                key={idx}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10 md:w-2/3 2xl:w-1/2"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-lg md:text-2xl"
        >
          {serviceEndingParagraph}
        </motion.p>
      </motion.div>

      <ClientsServed />
    </main>
  );
}
