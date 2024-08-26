'use client';

import { FC } from 'react';

import Link from 'next/link';

interface ButtonProps {
  text: String;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ text, href, onClick }) => {
  if (href) {
    return (
      <Link href={href} className="txt-md kayak-bold bg-secondary px-4 py-[0.4rem] rounded-md w-fit">
          {text}
      </Link>
    );
  }

  return (
    <button
      className="txt-md kayak-bold bg-secondary px-4 py-[0.4rem] rounded-md w-fit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
