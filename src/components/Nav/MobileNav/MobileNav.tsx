'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import NavList from './NavList';
import SecondaryLogo from '@/components/Logos/SecondaryLogo';

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex flex-row justify-between sticky items-center top-0 p-2 bg-background drop-shadow-lg">
      <div className="w-20">
        <Link href="/">
          <SecondaryLogo />
        </Link>
      </div>

      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

      {isOpen && <NavList toggleOpen={toggleOpen} />}
    </div>
  );
}
