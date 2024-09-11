'use client';

import { FC, useEffect, useRef } from 'react';

import Button from '@/components/Button';
import AddOnCard, { AddOn } from './AddOnCard';

type Card = {
  title: string;
  price: {
    cost: string;
    fee?: string;
  };
  description: string[];
  addOns?: boolean;
  addOnCards?: AddOn[];
};

interface PricingCardProps {
  card: Card;
  handleAddOnClick: React.MouseEventHandler<HTMLButtonElement>;
  addOnsOpen: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  card,
  handleAddOnClick,
  addOnsOpen,
}) => {
  const addOnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addOnRef.current &&
        !addOnRef.current.contains(event.target as Node)
      ) {
        handleAddOnClick({} as React.MouseEvent<HTMLButtonElement>);
      }
    };

    if (addOnsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [addOnsOpen]);

  return (
    <div
      className={`flex flex-col gap-4 items-center ${card.addOns && 'z-30'}`}
      ref={card.addOns ? addOnRef : null}
    >
      <div
        className={`flex flex-col items-center justify-between bg-secondarylight rounded-lg p-6 drop-shadow w-5/6 sm:w-[17.8rem] h-[32rem]`}
      >
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
              <p key={idx} className='text-text/80'>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap-reverse gap-2 justify-start lg:justify-center w-full h-fit">
          <Button text="Contact Us" href="/contact" />
          {!addOnsOpen && card.addOns ? (
            <Button text="Add Ons" onClick={handleAddOnClick} />
          ) : (
            ''
          )}
        </div>
      </div>

      {addOnsOpen && card.addOnCards ? (
        card.addOnCards.map((addOn, idx) => (
          <AddOnCard addOn={addOn} key={idx} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default PricingCard;
