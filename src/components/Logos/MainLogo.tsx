import { FC } from 'react';
import Image from 'next/legacy/image';

const MainLogo: FC = () => {
  return (
    <Image
      src="/logos/main-logo.png"
      alt="Tag Operations"
      layout="responsive"
      priority
      width={830}
      height={146.21}
    />
  );
};

export default MainLogo;
