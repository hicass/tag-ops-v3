'use client';
import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence, useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import NavList from './NavList';

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className="flex flex-row justify-between sticky items-center top-0 px-2 py-4 bg-background drop-shadow-lg z-20">
      <AnimatePresence>
        <Link href="/">
          <div className="w-1/4">
            <Image
              src="/logos/secondary-logo.svg"
              alt="Tag Ops"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </Link>

        <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />

        {isOpen && <NavList toggleOpen={toggleOpen} />}
      </AnimatePresence>
    </nav>
  );
}
