import { FC } from 'react';
import { AccentProps } from './Star';

const Starburst: FC<AccentProps> = ({ position, blue }) => {
  return (
    <div className={`absolute ${position}`}>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2119_2828)">
          <path
            d="M2.51834 10H17.6278"
            stroke={blue ? '#A3DDFF' : '#6126D8'}
            stroke-width="1.62242"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.073 17.5V2.5"
            stroke={blue ? '#A3DDFF' : '#6126D8'}
            stroke-width="1.62242"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.29568 6.25L13.8504 13.75"
            stroke={blue ? '#A3DDFF' : '#6126D8'}
            stroke-width="1.62242"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.29568 13.75L13.8504 6.25"
            stroke={blue ? '#A3DDFF' : '#6126D8'}
            stroke-width="1.62242"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2119_2828">
            <rect width="20.1459" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Starburst;
