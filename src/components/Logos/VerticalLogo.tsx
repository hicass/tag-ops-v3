import { FC } from 'react';
import Image from 'next/legacy/image';

const SecondaryLogo: FC = () => {
  return (
    <Image
      src="/logos/vertical-logo.png"
      alt="Tag Operations"
      layout="responsive"
      priority
      width={346}
      height={396.16}
    />
  );
};

export default SecondaryLogo;
