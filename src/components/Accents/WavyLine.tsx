import { FC } from 'react';

interface WavyLineProps {
  position?: string;
}

const WavyLine: FC<WavyLineProps> = ({ position }) => {
  return (
    <div className={`z-10 ${position}`}>
      <svg
        width="100vw"
        height="auto"
        viewBox="0 0 1440 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-27 94.5C100.347 19.415 374.591 -21.007 746 94.5C1037 185 1321.5 140.5 1475.5 94.5"
          stroke="#A3DDFF"
          strokeWidth="4%"
        />
      </svg>
    </div>
  );
};

export default WavyLine;
