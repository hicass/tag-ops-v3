'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';

import SolutionComponent from './SolutionComponent';
import InefficiencyCostComponent from './InefficiencyCostComponent';

export default function SerivcePageContent({
  serviceName,
  serviceDescription,
  serviceQuestion,
  inefficiencyCosts,
  serviceSolutions,
  serviceEndingParagraph,
}: any) {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="w-full bg-primary mb-8 drop-shadow-md">
        <div className="w-full flex flex-col items-center my-12 p-10">
          <h1 className="text-3xl text-background sm:text-5xl">
            {serviceName}
          </h1>

          <p className="mt-4 text-lg text-background md:text-2xl md:text-center md:w-2/3">
            {serviceDescription}
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="my-8 p-10 md:w-2/3">
          <h2 className="flex flex-col items-center gap-6 w-full text-2xl sm:text-3xl">
            <div className="w-10 h-10">
              <Image
                src="/icons/bulb.svg"
                alt="Light Bulb"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            {serviceQuestion}
          </h2>

          {inefficiencyCosts.map((cost: any, idx: number) => (
            <InefficiencyCostComponent
              key={idx}
              title={cost.title}
              description={cost.description}
            />
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center mb-8 p-6 gap-2 md:w-2/3">
        <h2 className="flex flex-row items-center text-3xl">
          How we can help:
        </h2>

        <div>
          {serviceSolutions.map((solution: any, idx: number) => (
            <SolutionComponent
              key={idx}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>

        <p className="sm:text-lg md:text-2xl mb-6">{serviceEndingParagraph}</p>

        <Link
          href="/contact"
          className="contact-button my-4 text-2xl md:text-3xl"
        >
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
