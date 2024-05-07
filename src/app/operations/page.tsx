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
            <h2 className="flex flex-row items-center gap-2 w-full text-xl">
              <Image
                src="/icons/bulb.svg"
                alt="Light Bulb"
                width={50}
                height={50}
              />
              What are the costs of operational Inefficiencies?
            </h2>

          <div className="mt-2">
            <h3 className="manrope-semibold">Financial Impact</h3>
            <p className="text-sm">
              Inefficient processes drain revenue and hinder success, especially
              for small- to medium-sized businesses with narrow margins.
              External factors like competition and market changes exacerbate
              the impact. Handling all back-office tasks internally is costly
              and time-consuming, undermining profitability.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="manrope-semibold">Time Consumption</h3>
            <p className="text-sm">
              Outdated systems lead to prolonged tasks, impeding productivity.
              Manual processes slow down operations compared to automated ones,
              putting companies at a disadvantage. Complex procedures result in
              employees spending more time navigating them, reducing their
              actual productive hours.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="manrope-semibold">Impact on Work Quality</h3>
            <p className="text-sm">
              Efficient operations uphold work quality, while inefficiencies
              lead to errors and reduced morale. Automation minimizes mistakes
              and opens up resources for other goals.
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
              Tag Ops specializes in establishing interdepartmental processes
              and policies, ensuring cohesive workflows that drive efficiency
              and unity across your business.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Software Strategization</h4>
            <p className="pt-2">
              Thrive in the ever-evolving tech landscape with our knowledge in
              scouting, implementing, and training on cutting-edge software that
              fuels your company's growth.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Inventory Management</h4>
            <p className="pt-2">
              Optimize your processes with Tag Ops' expertise in implementing
              robust systems and providing tailored solutions to ensure your
              inventory is managed efficiently.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">
              Information/Change Management
            </h4>
            <p className="pt-2">
              Upgrade your internal communication and collaboration with our
              mastery in building customized intranet solutions. We specialize
              in implementing user-friendly platforms that enhance team
              connectivity, streamline information sharing, and foster a
              collaborative work environment.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">General Project Management</h4>
            <p className="pt-2">
              Optimize your project endeavors with our specialized project
              management assistance. Tag Ops brings expertise in planning,
              execution, and monitoring to ensure your projects are delivered on
              time and within scope.
            </p>
          </div>
        </div>

        <p>
          Let us help you standardize, optimize, and document your back office
          processes. For more information and pricing details, get in touch with
          us to craft the ideal solution for your business.
        </p>

        <Link href="/contact" className="button mt-4 text-2xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
