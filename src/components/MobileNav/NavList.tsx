import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Link from 'next/link';

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
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

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const buttonVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
    rotate: [-5, 5, -5, 5, 0],
  },
};
export default function NavList({toggleOpen}: any) {
  const MobileNavLink = ({ title, href, style }: any) => {
    return (
      <motion.div variants={mobileLinkVars} className={`${style}`} key={title}>
        <Link href={href} onClick={() => setTimeout(() => toggleOpen(), 600)}>
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
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full gap-4 mt-8"
              >
                <div className="overflow-hidden">
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col gap-4"
                  >
                    <motion.div variants={mobileLinkVars}>
                      <span className="text-4xl manrope-semibold">
                        Services
                      </span>
                    </motion.div>

                    <div className="overflow-hidden">
                      <MobileNavLink
                        title={'Operations'}
                        href={'/operations'}
                        style={'text-2xl'}
                      />
                    </div>

                    <div className="overflow-hidden">
                      <MobileNavLink
                        title={'Finance'}
                        href={'/finance'}
                        style={'text-2xl'}
                      />
                    </div>

                    <div className="overflow-hidden">
                      <MobileNavLink
                        title={'Human Resources'}
                        href={'/human-resources'}
                        style={'text-2xl'}
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="overflow-hidden pb-2">
                  <MobileNavLink
                    title={'About Us'}
                    href={'/about'}
                    style={'text-4xl font-semibold'}
                  />
                </div>

                <div className="overflow-hidden pb-2">
                  <MobileNavLink
                    title={'Blog'}
                    href={'/blog'}
                    style={'text-4xl font-semibold'}
                  />
                </div>

                <div className="mt-10 mb-4">
                  <motion.div variants={buttonVars}>
                    <Link
                      href="/contact"
                      className="button mt-4 text-2xl"
                      onClick={() => setTimeout(() => toggleOpen(), 600)}
                    >
                      Lets Talk!
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
  )
}