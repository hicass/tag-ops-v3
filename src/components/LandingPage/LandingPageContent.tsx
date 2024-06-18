'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { motion, Variants } from 'framer-motion';

import Blob from '@/components/Blob/Blob';
import ClientsServed from '@/components/ClientsServed/ClientsServed';

import FlowCards from './FlowCards';

const containerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between children animations
    },
  },
};

const linkVariants: Variants = {
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

export default function LandingPageContent() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* Header */}
      <section className="w-full flex flex-col items-center my-12 md:h-96 sm:mb-40 sm:mt-24 lg:w-3/4">
        <h1 className="secret">Tag Operations</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:mt-10 sm:gap-12 lg:w-full">
          <h1 className="text-center sm:mt-6 text-4xl sm:text-7xl text-primary">
            Simplify, Optimize, <br /> Scale with...
          </h1>

          <motion.div
            animate={{
              rotate: [2, 0, -2, 0, 2],
              transition: {
                duration: 2.8,
                repeat: Infinity,
                repeatType: 'loop',
              },
            }}
            className="w-2/3 sm:w-1/4"
          >
            <Image
              src="/logos/main-logo.svg"
              alt="Tag Operations Finance Human Resources"
              layout="responsive"
              priority
              width={100}
              height={100}
            />
          </motion.div>
        </div>

        <p className="text-center text-lg w-2/3 sm:w-full  sm:-mt-4 md:text-3xl">
          Your tech forward, embedded, and flexible back office team!
        </p>
      </section>

      {/* Our Solutions */}
      <section className="w-full mt-14 sm:mt-28 relative">
        <div className="flex flex-col items-center p-6 bg-primary drop-shadow-md z-10 py-14 sm:py-24">
          <h2 className="text-3xl text-background sm:text-5xl">
            Our Solutions
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col mt-4 gap-8 sm:mt-10 md:w-2/3 2xl:w-1/2"
          >
            <p className="text-background sm:text-xl">
              Did you know that businesses can save at least
              <span className="text-accent"> 30% on back-office costs </span> by
              leveraging fractional support? Not only do we offer tailored
              back-office support services, but we also provide you with the
              data behind our services. You’ll know how much time is spent on
              your company's various back-office processes enabling you to
              strategize scaling your company.
            </p>
            <p className="text-background sm:text-xl">
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 'all',
            }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-0 w-full justify-around mt-10 sm:mt-16 md:w-2/3 2xl:w-1/2"
          >
            <Link href="/operations">
              <motion.div
                variants={linkVariants}
                whileHover={{ y: 3 }}
                className="service-button flex flex-row items-center py-4 gap-2"
              >
                <Image
                  src="/icons/settings.svg"
                  alt="Gear"
                  width={30}
                  height={30}
                />
                <h3 className="kayak-bold text-2xl">Operations</h3>
              </motion.div>
            </Link>

            <Link href="/finance">
              <motion.div
                variants={linkVariants}
                whileHover={{ y: 3 }}
                className="service-button flex flex-row items-center py-4 gap-2"
              >
                <Image
                  src="/icons/report-money.svg"
                  alt="Clip board with money"
                  width={30}
                  height={30}
                />
                <h3 className="kayak-bold text-2xl">Finance</h3>
              </motion.div>
            </Link>

            <Link href="/human-resources">
              <motion.div
                variants={linkVariants}
                whileHover={{ y: 3 }}
                className="service-button flex flex-row items-center py-4 gap-2"
              >
                <Image
                  src="/icons/heart-handshake.svg"
                  alt="Handshake in the shape of a heart"
                  width={30}
                  height={30}
                />
                <h3 className="kayak-bold text-2xl">Human Resources</h3>
              </motion.div>
            </Link>
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

      {/* Our Flow */}
      <section className="flex flex-col items-center gap-4 my-8 sm:my-16 p-6 sm:mt-20 md:w-2/3 2xl:w-1/2">
        <h2 className="text-3xl sm:text-4xl">Our Flow</h2>

        <div className="w-full">
          <FlowCards />
        </div>

        <h3 className="text-center mt-4 text-3xl sm:text-4xl lg:mt-10 kayak-bold">
          Analytics Empowerment
        </h3>

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
              <p className="sm:text-lg">Powered By: </p>
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
          </div>

          <p className="mt-6 sm:text-lg">
            Our project management software empowers your business with
            analytics, not only on tasks and project budgets but also a
            breakdown of how much time is spent on any specific task within any
            division (Finance, HR, Ops) every quarter.
          </p>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="flex justify-center bg-accent pb-10">
        <div className="flex flex-col items-center p-6 sm:mt-16 md:w-2/3 2xl:w-1/2">
          <h2 className="text-3xl sm:text-4xl">
            See what our clients are saying...
          </h2>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-accentlight rounded-xl my-10 p-4 drop-shadow"
            >
              <div>
                <p className="text-lg sm:text-xl manrope-bold">Riece Keck</p>
                <p className="sm:text-lg manrope-semibold">
                  Founder & CEO, Vault Recruiting
                </p>
              </div>

              <p className="pt-2 sm:text-lg">
                "Courtney, in short, has transformed the back-end operations of
                our business. She started with bare bones and made an immediate,
                dramatic impact. She documented processes that improved
                candidate and internal employee experience, created more reports
                than I can count that gave excellent insight into our sales
                function, and fully owned and improved our routine operational
                processes."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-accentlight rounded-xl my-10 p-4 drop-shadow"
            >
              <div>
                <p className="text-lg sm:text-xl manrope-bold">Jolie Curran</p>
                <p className="sm:text-lg manrope-semibold">
                  Head of Operations, Ejento
                </p>
              </div>

              <p className="pt-2 sm:text-lg">
                "It is rare to find a talent like Courtney. She is intelligent,
                proactive, and professional. She tackles projects through
                thoughtful planning and then executes projects flawlessly. If
                she doesn't know how to do something, she dives into research
                and figures out a strategy."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-accentlight rounded-xl my-10 p-4  drop-shadow"
            >
              <div>
                <p className="text-lg sm:text-xl manrope-bold">David Milner</p>
                <p className="sm:text-lg manrope-semibold">
                  Head of IT, Celsius Network
                </p>
              </div>

              <p className="pt-2 sm:text-lg">
                "Working with Courtney was an absolute pleasure. She helped the
                IT team greatly in our interactions and took responsibility even
                for items that were not in her field of responsibility and
                brought them to the next level. We always felt she was a part of
                the team and her organisational skills are some of the best I
                have seen. Anyone would be happy to have her work in their
                company."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ClientsServed />
    </main>
  );
}
