import { FC } from 'react';
import Link from 'next/link';

interface RegularNavDropDownProps {
  isOpen: boolean;
  serviceLinks: navLink[];
}

type navLink = {
  title: string;
  href: string;
};

const RegularNavDropDown: FC<RegularNavDropDownProps> = ({
  isOpen,
  serviceLinks,
}) => {
  return (
    <ul
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
        clipPath: 'inset(10% 50% 90% 50% round 10px)',
      }}
      className="flex flex-col items-center absolute gap-2 bg-background border-t-4 border-secondarylight top-2/3 -ml-10 mt-2 w-26 p-4 z-40 drop-shadow-lg"
    >
      {serviceLinks.map((link, idx) => (
        <li
          className="manrope-semibold w-full text-center hover:text-primary pb-2 border-b border-secondarylight"
          key={idx}
        >
          <Link href={link.href} className="txt-rg-semibold hover:text-primary">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RegularNavDropDown;
