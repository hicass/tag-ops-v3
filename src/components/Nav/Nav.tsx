'use client';

import { FC, useEffect, useState } from 'react';

import RegularNav from './RegularNav/RegularNav';
import MobileNav from './MobileNav/MobileNav';

export interface NavProps {
  companyLinks: NavLink[];
  serviceLinks: NavLink[];
}

export type NavLink = {
  title: string;
  href: string;
};

const navProps = {
  companyLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Pricing', href: '/pricing' },
  ],
  serviceLinks: [
    { title: 'Operations', href: '/operations' },
    { title: 'Finance', href: '/finance' },
    { title: 'Human Resources', href: '/human-resources' },
  ],
};

const Nav: FC = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    setIsMobileScreen(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-40">
      {isMobileScreen ? (
        <MobileNav
          companyLinks={navProps.companyLinks}
          serviceLinks={navProps.serviceLinks}
        />
      ) : (
        <RegularNav
          companyLinks={navProps.companyLinks}
          serviceLinks={navProps.serviceLinks}
        />
      )}
    </nav>
  );
};

export default Nav;
