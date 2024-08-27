import { FC } from 'react';
import Image from 'next/legacy/image';

const SecondaryLogo: FC = () => {
  return (
    <Image
      src="/logos/secondary-logo.png"
      alt="Tag Operations"
      layout="responsive"
      priority
      width={532}
      height={341}
    />
  );
};

export default SecondaryLogo;
