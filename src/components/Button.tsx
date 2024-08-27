'use client';

import { FC } from 'react';

import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  blue?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ text, href, onClick, blue }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${
          blue ? 'bg-accent' : 'bg-secondary'
        } txt-md kayak-bold px-4 py-[0.4rem] rounded-md w-fit`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`${
        blue ? 'bg-accent' : 'bg-secondary'
      } txt-md kayak-bold px-4 py-[0.4rem] rounded-md w-fit`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
