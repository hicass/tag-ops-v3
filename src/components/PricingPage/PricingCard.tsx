'use client';

import { FC } from 'react';

import Button from '@/components/Button';

type Card = {
  title: string;
  price: {
    cost: string;
    fee?: string;
  };
  description: string[];
  addOns?: boolean;
};

interface PricingCardProps {
  card: Card;
}

const PricingCard: FC<PricingCardProps> = ({ card }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-secondarylight rounded-lg p-6 drop-shadow w-5/6 sm:w-[17.6rem] h-[32rem] ">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between w-full h-[3.5rem]">
          <h4>{card.title}</h4>

          <div className="flex flex-col items-center">
            <p className="txt-lg-bold">{card.price.cost}</p>
            <p className="txt-rg-bold">{card.price.fee}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {card.description.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap-reverse gap-2 justify-start lg:justify-center w-full">
        <Button text="Contact Us" href="/contact" />
        {card.addOns && <Button text="Add Ons" />}
      </div>
    </div>
  );
};

export default PricingCard;
