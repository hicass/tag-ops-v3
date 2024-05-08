'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { AnimatePresence, useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import NavList from './NavList';

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="flex flex-row justify-between sticky items-center top-0 px-6 bg-background drop-shadow-lg">
      <div className="w-20">
        <Link href="/">
          <Image
            src="/logos/secondary-logo.svg"
            alt="Tag Ops"
            width={100}
            height={100}
            layout="responsive"
          />
        </Link>
      </div>

      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

      {isOpen && <NavList toggleOpen={toggleOpen} />}
    </div>
  );
}
