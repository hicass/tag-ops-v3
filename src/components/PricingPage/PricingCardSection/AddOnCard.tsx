import { FC } from 'react';

import CheckMark from './CheckMark';

export type AddOn = {
  title: string;
  description?: string;
  items: string[];
};

interface AddOnCardProps {
  addOn: AddOn;
}

const AddOnCard: FC<AddOnCardProps> = ({ addOn }) => {
  return (
    <div className="flex flex-col items-center justify-between bg-secondarylight rounded-lg p-6 drop-shadow w-5/6 sm:w-[17.6rem] h-fit z-30">
      <div className="flex flex-col gap-6">
        <h4>{addOn.title}</h4>

        {addOn.description && <p>{addOn.description}</p>}

        <div className="flex flex-col gap-2">
          {addOn.items.map((item, idx) => (
            <div className="flex items-center gap-4" key={idx}>
              <div>
                <CheckMark />
              </div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOnCard;
