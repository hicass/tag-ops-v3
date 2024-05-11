'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';

export default function OperationsPage() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="w-full bg-primary mb-8 drop-shadow-md">
        <div className="w-full flex flex-col items-center my-12 p-10">
          <h1 className="text-3xl text-background sm:text-5xl">Operations</h1>

          <p className="mt-4 text-lg text-background md:text-2xl md:text-center md:w-2/3">
            From interdepartmental harmony to cutting-edge software and
            inventory management, we help your business thrive in the digital
            age.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="my-8 p-10 md:w-2/3">
          <h2 className="flex flex-row flex-wrap sm:items-center md:justify-center gap-4 w-full text-2xl sm:text-3xl">
            <div className="w-10 h-10">
              <Image
                src="/icons/bulb.svg"
                alt="Light Bulb"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            What are the costs of operational Inefficiencies?
          </h2>

          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Financial Impact
            </h3>
            <p className="mt-2 sm:text-lg">
              Inefficient processes drain revenue and hinder success, especially
              for small- to medium-sized businesses with narrow margins.
              External factors like competition and market changes exacerbate
              the impact. Handling all back-office tasks internally is costly
              and time-consuming, undermining profitability.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Time Consumption
            </h3>
            <p className="mt-2 sm:text-lg">
              Outdated systems lead to prolonged tasks, impeding productivity.
              Manual processes slow down operations compared to automated ones,
              putting companies at a disadvantage. Complex procedures result in
              employees spending more time navigating them, reducing their
              actual productive hours.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Impact on Work Quality
            </h3>
            <p className="mt-2 sm:text-lg">
              Efficient operations uphold work quality, while inefficiencies
              lead to errors and reduced morale. Automation minimizes mistakes
              and opens up resources for other goals.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center mb-8 p-6 gap-2 md:w-2/3">
        <h2 className="flex flex-row items-center text-3xl">
          How we can help:
        </h2>

        <div>
          <div className="rounded-xl mt-6 mb-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">
              Establishing Interdepartmental Processes/Policies
            </h4>
            <p className="mt-2 sm:text-lg">
              Tag Ops specializes in establishing interdepartmental processes
              and policies, ensuring cohesive workflows that drive efficiency
              and unity across your business.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">Software Strategization</h4>
            <p className="mt-2 sm:text-lg">
              Thrive in the ever-evolving tech landscape with our knowledge in
              scouting, implementing, and training on cutting-edge software that
              fuels your company's growth.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">Inventory Management</h4>
            <p className="mt-2 sm:text-lg">
              Optimize your processes with Tag Ops' expertise in implementing
              robust systems and providing tailored solutions to ensure your
              inventory is managed efficiently.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">
              Information/Change Management
            </h4>
            <p className="mt-2 sm:text-lg">
              Upgrade your internal communication and collaboration with our
              mastery in building customized intranet solutions. We specialize
              in implementing user-friendly platforms that enhance team
              connectivity, streamline information sharing, and foster a
              collaborative work environment.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg manrope-bold">General Project Management</h4>
            <p className="mt-2 sm:text-lg">
              Optimize your project endeavors with our specialized project
              management assistance. Tag Ops brings expertise in planning,
              execution, and monitoring to ensure your projects are delivered on
              time and within scope.
            </p>
          </div>
        </div>

        <p className="sm:text-lg md:text-2xl mb-6">
          Let us help you standardize, optimize, and document your back office
          processes. For more information and pricing details, get in touch with
          us to craft the ideal solution for your business.
        </p>

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
