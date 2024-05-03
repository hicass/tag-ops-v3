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

      <section className="flex flex-col items-center mt-4">
        <div className="p-6 bg-secondarylight">
          <div className="flex flex-row justify-start items-end gap-2 w-full">
            <Image
              src="/icons/bulb.svg"
              alt="Light Bulb"
              width={30}
              height={30}
            />
            <h2 className="text-center text-xl">Did you know?</h2>
          </div>

          <p className="w-full justify-start manrope-semibold mt-2">
            With a recent statistic showing that the Fortune 500 companies had
            an estimated <span className="manrope-bold">$480 billion</span>{' '}
            'lost' in inefficiencies from back office processes, taking the
            small steps to counter this loss is very important.
          </p>

          <div className="flex justify-end mt-2">
            <p className="manrope-semibold">
              - The Shared Services & Outsourcing Network Editor,{' '}
              <Link
                href="https://www.ssonetwork.com/business-process-outsourcing/whitepapers/workforce-optimization-in-business-process-outsour"
                target="_blank"
                className="text-primary hover:text-text underline underline-offset-2"
              >
                Report
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6">
        <h2 className="flex flex-row items-center gap-2 text-3xl">
          How we can help:
        </h2>

        <div>
          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">
              Establishing Interdepartmental Processes/Policies
            </h4>

            <p className="pt-2">
              We specialize in establishing interdepartmental processes and
              policies, ensuring cohesive workflows that drive efficiency and
              unity across your entire business.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Software Strategization</h4>

            <p className="pt-2">
              We scout, implement, and train on cutting-edge software that fuels
              your company's growth, helping you thrive in the ever-evolving
              tech landscape.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Inventory Management</h4>

            <p className="pt-2">
              We optimize processes, implement robust systems, and provide
              tailored solutions to ensure your inventory is efficiently
              managed.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">
              Information/Change Management
            </h4>

            <p className="pt-2">
              We elevate your internal communication and collaboration with our
              expertise in building customized intranet solutions. We specialize
              in implementing user-friendly platforms that enhance team
              connectivity, streamline information sharing, and foster a
              collaborative work environment.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">General Project Management</h4>

            <p className="pt-2">
              Optimize your project endeavors with our specialized project
              management assistance. We bring expertise in planning, execution,
              and monitoring to ensure your projects are delivered on time and
              within scope.
            </p>
          </div>
        </div>

        <p>
          Let us help you standardize, optimize, and document your back office
          processes!
        </p>

        <Link href="/contact" className="button mt-4 text-2xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
