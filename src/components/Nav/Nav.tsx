'use client';

import { FC, useEffect, useState } from 'react';

import RegularNav from './RegularNav/RegularNav';
import MobileNav from './MobileNav/MobileNav';

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
      {isMobileScreen ? <MobileNav /> : <RegularNav />}
    </nav>
  );
};

export default Nav;
