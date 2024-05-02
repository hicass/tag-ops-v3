import Image from 'next/image';
import Link from 'next/link';

export default function OperationsPage() {
  return (
    <main>
      <section className="flex flex-col items-center mt-4 p-6">
        <h2 className="text-3xl text-primary">Operations</h2>

        <p className="mt-2">
          From interdepartmental harmony to cutting-edge software and inventory
          management, we help your business thrive in the digital age.
        </p>
      </section>

      <section className="flex flex-col items-center mt-4 p-6 bg-secondarylight">
        <div className="flex flex-row justify-start items-end gap-2 w-full">
          <Image
            src="/icons/bulb.svg"
            alt="Light Bulb"
            width={30}
            height={30}
          />
          <h2 className="text-center text-xl">Did you know? </h2>
        </div>

        <p className="w-full justify-start mt-2">
          With a recent statistic showing that the Fortune 500 companies had an
          estimated <span className="manrope-bold">$480 billion</span> 'lost' in inefficiencies from back office
          processes, taking the small steps to counter this loss is very
          important.
        </p>

        <p className="flex w-full justify-end mt-2">
          - The Shared Services & Outsourcing Network Editor,{' '}
          <Link
            href="https://www.ssonetwork.com/business-process-outsourcing/whitepapers/workforce-optimization-in-business-process-outsour"
            target="_blank"
            className="text-primary hover:text-text underline underline-offset-4"
          >
            Report
          </Link>
        </p>
      </section>
    </main>
  );
}
