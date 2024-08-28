'use client';

import Image from 'next/legacy/image';
import Button from '../Button';

export default function ClientsServed() {
  return (
    <section className="w-full flex flex-col items-center mb-20">
      <div className="flex flex-col items-center my-8 px-6 gap-6 md:w-2/3 2xl:w-1/2">
        <h3 className="text-h2">Trusted by businesses like you:</h3>

        <div className="w-2/3 sm:w-full flex flex-col gap-10 items-center sm:flex-row items-center my-8">
          <div>
            <Image
              src="/client-logos/allo-hire-logo.png"
              alt="Allo Hire"
              width="2500"
              height="447"
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/client-logos/mend-logo.png"
              alt="Mend"
              width="1400"
              height="525"
              objectFit="contain"
            />
          </div>
          <div className="w-1/2 sm:w-full">
            <Image
              src="/client-logos/pursuits-logo.png"
              alt="Nurture Source"
              width="410"
              height="500"
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/client-logos/nurture-source-logo.png"
              alt="Nurture Source"
              width="2700"
              height="601"
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/client-logos/mind-hire-logo.png"
              alt="Mind Hire"
              width="2500"
              height="501"
              objectFit="contain"
            />
          </div>
        </div>

        <Button text={"Let's Talk!"} blue={true} href={'/contact'} />
      </div>
    </section>
  );
}
