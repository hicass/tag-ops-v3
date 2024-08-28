'use client';

import { FC } from 'react';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { motion, Variants } from 'framer-motion';

import Blob from '@/components/Blob/Blob';

type SolutionLink = {
  href: string;
  iconPath: string;
  iconAlt: string;
  title: string;
};

const solutionsLinks: SolutionLink[] = [
  {
    href: '/operations',
    iconPath: '/icons/settings.svg',
    iconAlt: 'Gear',
    title: 'Operations',
  },
  {
    href: '/finance',
    iconPath: '/icons/report-money.svg',
    iconAlt: 'Clip board with money',
    title: 'Finance',
  },
  {
    href: '/human-resources',
    iconPath: '/icons/heart-handshake.svg',
    iconAlt: 'Handshake in the shape of a heart',
    title: 'Human Resources',
  },
];

const animationContainerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const animationLinkVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {},
};

const SolutionsSection: FC = () => {
  return (
    <section className="w-full mt-14 sm:mt-28 relative">
      <div className="flex flex-col items-center gap-10 bg-primary drop-shadow-md z-10 py-14 lg:py-32 lg:pb-36">
        <h1 className="text-background">Our Solutions</h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-10 px-6 md:px-0 w-full md:w-4/5 md:border g:w-2/3 2xl:w-1/2"
        >
          <p className="text-background txt-md">
            Did you know that businesses can save at least
            <span className="text-accent"> 30% on back-office costs </span> by
            leveraging fractional support? Not only do we offer tailored
            back-office support services, but we also provide you with the data
            behind our services. You’ll know how much time is spent on your
            company's various back-office processes enabling you to strategize
            scaling your company.
          </p>
          <p className="text-background txt-md">
            With the flexibility to adjust services as needed,
            <span className="text-accent">
              {' '}
              we empower you to focus on what truly matters{' '}
            </span>{' '}
            – nurturing your business's growth and success - while being
            efficient with your resources.
          </p>
        </motion.div>

        <motion.div
          variants={animationContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 'all',
          }}
          className="flex flex-col px-6 sm:flex-row gap-8 sm:gap-0 w-full justify-between md:w-4/5 lg:w-2/3 2xl:w-1/2 mt-8"
        >
          {solutionsLinks.map((solution, idx) => (
            <Link key={idx} href={solution.href}>
              <motion.div
                variants={animationLinkVariants}
                className="txt-md kayak-bold px-4 py-[0.4rem] rounded-md w-fit flex flex-row items-center py-4 gap-2 bg-secondary hover:bg-secondarylight/80"
              >
                <Image
                  src={solution.iconPath}
                  alt={solution.iconAlt}
                  width={30}
                  height={30}
                />
                <p className="kayak-bold txt-lg">{solution.title}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div>
        <Blob positionX={'left'} positionY={'back'} />
        <Blob positionX={'middle'} positionY={'back'} />
        <Blob positionX={'right'} positionY={'back'} />
        <Blob positionX={'left'} positionY={'front'} />
        <Blob positionX={'middle'} positionY={'front'} />
        <Blob positionX={'right'} positionY={'front'} />
      </div>

      <div className="bg-accent w-full h-6"></div>
    </section>
  );
};

export default SolutionsSection;
