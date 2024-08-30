'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { useAnimate, stagger, motion } from 'framer-motion';
import SecondaryLogo from '@/components/Logos/SecondaryLogo';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export default function RegularNav(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        'ul',
        {
          clipPath: isOpen
            ? 'inset(0% 0% 0% 0% round 10px)'
            : 'inset(10% 50% 90% 50% round 10px)',
        },
        {
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }
      );

      animate(
        'li',
        isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }, [isOpen, animate]);

    return scope;
  }

  return (
    <div className="flex flex-row justify-between items-center px-6 py-2 bg-background drop-shadow-lg">
      <div className="link w-20">
        <Link href="/">
          <SecondaryLogo />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex flex-row items-center gap-8">
          <li>
            <Link href="/about" className="txt-md-semibold hover:text-primary">
              About us
            </Link>
          </li>

          <li>
            <Link
              href="/pricing"
              className="txt-md-semibold hover:text-primary"
            >
              Pricing
            </Link>
          </li>

          <li
            ref={scope}
            onMouseEnter={() => setIsOpen(!isOpen)}
            onMouseLeave={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-2 hover:cursor-pointer"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 txt-md-semibold ${
                isOpen && 'text-primary'
              }`}
            >
              Services{' '}
              <div
                className="arrow flex items-center"
                style={{ transformOrigin: '50% 55%' }}
              >
                <svg width="12" height="12" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" stroke="rgb(97, 38, 216)" />
                </svg>
              </div>
            </motion.button>
            <ul
              style={{
                pointerEvents: isOpen ? 'auto' : 'none',
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
              }}
              className="flex flex-col items-center absolute gap-2 bg-background border-t-4 border-secondarylight top-2/3 -ml-4 mt-1 w-26 p-4 z-40 drop-shadow-lg"
            >
              <li className="manrope-semibold w-full text-center hover:text-primary pb-2 border-b border-secondarylight">
                <Link
                  href="/operations"
                  className="txt-rg-semibold hover:text-primary"
                >
                  Operations
                </Link>
              </li>
              <li className="w-full text-center hover:text-primary pb-2 border-b border-secondarylight">
                <Link
                  href="/finance"
                  className="txt-rg-semibold hover:text-primary"
                >
                  Finance
                </Link>
              </li>
              <li className="w-full text-center hover:text-primary pb-2 border-b border-secondarylight">
                <Link
                  href="/human-resources"
                  className="txt-rg-semibold hover:text-primary"
                >
                  HR
                </Link>
              </li>
            </ul>{' '}
          </li>

          <li>
            <Link href="/contact">
              <motion.div
                whileHover={{ y: 2 }}
                className="bg-accent hover:bg-accent/80 hover:text-primary txt-md kayak-bold px-4 py-[0.4rem] rounded-md w-fit"
              >
                Contact
              </motion.div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
