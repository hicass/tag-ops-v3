'use client';

import { FC } from 'react';

import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  blue?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textSize?: string;
}

const Button: FC<ButtonProps> = ({ text, href, onClick, blue, textSize }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${
          blue
            ? `bg-accent hover:bg-accent/80 hover:text-primary ${
                textSize ? textSize : 'text-h4'
              }`
            : 'bg-secondary hover:bg-secondary/70'
        } txt-lg kayak-bold px-4 py-[0.4rem] rounded-md w-fit`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`${
        blue
          ? 'bg-accent hover:bg-accent/80 hover:text-primary text-h4'
          : 'bg-secondary hover:bg-secondary/70'
      } txt-md kayak-bold px-4 py-[0.4rem] rounded-md w-fit`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
