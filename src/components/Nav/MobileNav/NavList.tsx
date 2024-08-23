import { motion } from 'framer-motion';
import Link from 'next/link';

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NavList({ toggleOpen }: any) {
  const MobileNavLink = ({ title, href, style }: any) => {
    return (
      <motion.div key={title}>
        <Link
          href={href}
          onClick={() => setTimeout(() => toggleOpen(), 600)}
          className={`hover:text-primary ${style}`}
        >
          {title}
        </Link>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-20 w-full h-screen origin-top bg-background p-10 z-40"
    >
      <div className="overflow-hidden flex h-fit flex-col">
        <div className="flex flex-col h-full gap-4">
        <div className="overflow-hidden pb-2">
            <MobileNavLink
              title={'About Us'}
              href={'/about'}
              style={'text-4xl font-semibold'}
            />
          </div>

          <div className="overflow-hidden pb-2">
            <MobileNavLink
              title={'Pricing'}
              href={'/pricing'}
              style={'text-4xl font-semibold'}
            />
          </div>

          <div className="overflow-hidden">
            <div className="flex flex-col gap-4">
              <span className="text-4xl manrope-semibold">Services</span>

              <div className="overflow-hidden">
                <MobileNavLink
                  title={'Operations'}
                  href={'/operations'}
                  style={'text-2xl font-semibold'}
                />
              </div>

              <div className="overflow-hidden">
                <MobileNavLink
                  title={'Finance'}
                  href={'/finance'}
                  style={'text-2xl font-semibold'}
                />
              </div>

              <div className="overflow-hidden">
                <MobileNavLink
                  title={'Human Resources'}
                  href={'/human-resources'}
                  style={'text-2xl font-semibold'}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 mb-10">
            <Link
              href="/contact"
              className="contact-button mt-4 text-2xl kayak-bold"
              onClick={() => setTimeout(() => toggleOpen(), 600)}
            >
              Lets Talk!
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
