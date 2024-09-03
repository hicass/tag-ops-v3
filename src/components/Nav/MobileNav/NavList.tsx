import { FC } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { NavLink } from '../Nav';

interface NavListProps {
  toggleOpen: () => void;
  serviceLinks: NavLink[];
  companyLinks: NavLink[];
}

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const NavList: FC<NavListProps> = ({
  toggleOpen,
  serviceLinks,
  companyLinks,
}) => {
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
      className="fixed left-0 top-16 w-full h-screen origin-top bg-background p-10 z-40"
    >
      <div className="overflow-hidden flex h-fit flex-col">
        <div className="flex flex-col h-full gap-4">
          {companyLinks.map((link, idx) => (
            <div className="overflow-hidden pb-2">
              <MobileNavLink
                title={link.title}
                href={link.href}
                style={'text-h4 manrope-bold'}
              />
            </div>
          ))}

          <div className="overflow-hidden">
            <div className="flex flex-col gap-1">
              <span className="text-h4 kayak-bold">Services</span>
              <div className="flex flex-col gap-2">
                {serviceLinks.map((link, idx) => (
                  <div className="overflow-hidden">
                    <MobileNavLink
                      title={link.title}
                      href={link.href}
                      style={'txt-rg'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 mb-10">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/80 hover:text-primary text-h4 txt-lg kayak-bold px-4 py-[0.4rem] rounded-md w-fit"
              onClick={() => setTimeout(() => toggleOpen(), 600)}
            >
              Lets Talk!
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavList;
