import Image from 'next/legacy/image';
import Link from 'next/link';

export default function FinancePage() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="w-full bg-primary mb-8 drop-shadow-md">
        <div className="w-full flex flex-col items-center my-12 p-10">
          <h1 className="text-3xl text-background sm:text-5xl">Finance</h1>

          <p className="mt-4 text-lg text-background md:text-2xl md:text-center md:w-2/3">
            From precise bookkeeping to optimized cash flow, our tailored
            financial solutions drive savings and streamline operations.
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
            What are the leading Causes of Financial Inefficiencies?
          </h2>

          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">Bottlenecks</h3>
            <p className="mt-2 sm:text-lg">
              Bottlenecks are major obstacles that hinder robust financial
              health. Identifying and tracking these bottlenecks is crucial. By
              doing so, you can pinpoint the specific areas impeding the entire
              workflow and take effective measures to eliminate them.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Lack of Technological Integration
            </h3>
            <p className="mt-2 sm:text-lg">
              Failure to leverage financial technology tools further compounds
              these inefficiencies, as streamlined processes are not utilized to
              their full potential.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Absence of Standardized Processes
            </h3>
            <p className="mt-2 sm:text-lg">
              Neglecting to standardize financial processes often results in
              inefficiencies within an organization. Without clear guidelines in
              place, confusion reigns, leading to non-compliance, errors, and
              miscommunication.
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
            <h4 className="text-lg sm:text-xl manrope-bold">Bookkeeping</h4>
            <p className="mt-2 sm:text-lg">
              Simplify your financial processes with our bookkeeping expertise.
              We specialize in meticulous financial record-keeping, ensuring
              accuracy and compliance. With our bookkeeping services, you can
              focus on your core business while we handle the numbers, providing
              you with peace of mind and financial insight.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">
              AP/AR Management
            </h4>
            <p className="mt-2 sm:text-lg">
              Optimize your cash flow, ensure timely payments, and maintain
              strong relationships with vendors and clients with our tailored
              solutions. We will help your company enhance efficiency, reduce
              risks, and maintain financial stability.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">
              Commission Calculation
            </h4>
            <p className="mt-2 sm:text-lg">
              Streamline calculating commissions with our expertise, ensuring
              precision and fairness. With our assistance, you can navigate the
              complexities of commission calculations and effortlessly foster a
              results-driven and motivated sales environment.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">Payroll</h4>
            <p className="mt-2 sm:text-lg">
              Tag Ops offers comprehensive payroll solutions tailored to your
              business needs, guaranteeing accuracy and compliance with
              regulations. With our payroll services, you can streamline
              administrative tasks, reduce errors, and ensure timely and
              accurate compensation for your workforce.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg manrope-bold">Financial Health Reporting</h4>
            <p className="mt-2 sm:text-lg">
              Unlock a deeper understanding of your finances, track key
              performance indicators, and communicate your financial story
              effectively to stakeholders with our knowledge of financial
              reporting. Tag Ops will enhance your financial clarity and create
              comprehensive reports that provide a clear snapshot of your
              financial health.
            </p>
          </div>
        </div>

        <p className="sm:text-lg md:text-2xl mb-6">
          Let us improve your financial efficiency, provide you with data, and
          help you make decisions that cut costs. For more information and
          pricing details, get in touch with us to craft the ideal solution for
          your business.
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
