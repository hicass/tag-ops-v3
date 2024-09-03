'use client';
import { FC } from 'react';
import Link from 'next/link';

import { useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import NavList from './NavList';
import SecondaryLogo from '@/components/Logos/SecondaryLogo';
import { NavProps } from '../Nav';

const MobileNav: FC<NavProps> = ({ companyLinks, serviceLinks }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex flex-row justify-between sticky items-center top-0 p-2 z-40 bg-background drop-shadow-lg">
      <div className="w-20">
        <Link href="/">
          <SecondaryLogo />
        </Link>
      </div>

      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

      {isOpen && (
        <NavList
          toggleOpen={toggleOpen}
          companyLinks={companyLinks}
          serviceLinks={serviceLinks}
        />
      )}
    </div>
  );
};

export default MobileNav;
