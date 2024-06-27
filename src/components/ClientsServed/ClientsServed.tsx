'use client';

import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import Link from 'next/link';

export default function ClientsServed() {
  return (
    <section className="w-full flex flex-col items-center ">
      <div className="flex flex-col items-center my-8 p-6 gap-6 md:w-2/3 2xl:w-1/2">
        <h2 className="text-3xl md:text-4xl">
          Trusted by businesses like you:
        </h2>

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

        <Link href="/contact">
          <motion.div
            whileHover={{ y: 3 }}
            className="contact-button my-4 text-2xl md:text-3xl"
          >
            Lets Talk!
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
