'use client';

import RegularNav from './RegularNav/RegularNav';
import MobileNav from './MobileNav/MobileNav';
import { useEffect, useState } from 'react';

export default function Nav() {
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

  return <nav className='sticky top-0 z-20'>{isMobileScreen ? <MobileNav /> : <RegularNav />}</nav>;
}
