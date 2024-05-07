import Image from "next/legacy/image";
import Link from 'next/link';

export default function FinancePage() {
  return (
    <main>
      <section className="flex flex-col items-center mt-4 p-6">
        <h2 className="text-3xl text-primary">Finance</h2>

        <p className="mt-2">
          From precise bookkeeping to optimized cash flow, our tailored
          financial solutions drive savings and streamline operations.
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
            What are the leading Causes of Financial Inefficiencies?
          </h2>

          <div className="mt-2">
            <h3 className="manrope-semibold">Bottlenecks</h3>
            <p className="text-sm">
              Bottlenecks are major obstacles that hinder robust financial
              health. Identifying and tracking these bottlenecks is crucial. By
              doing so, you can pinpoint the specific areas impeding the entire
              workflow and take effective measures to eliminate them.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="manrope-semibold">
              Lack of Technological Integration
            </h3>
            <p className="text-sm">
              Failure to leverage financial technology tools further compounds
              these inefficiencies, as streamlined processes are not utilized to
              their full potential.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="manrope-semibold">
              Absence of Standardized Processes
            </h3>
            <p className="text-sm">
              Neglecting to standardize financial processes often results in
              inefficiencies within an organization. Without clear guidelines in
              place, confusion reigns, leading to non-compliance, errors, and
              miscommunication.
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
            <h4 className="text-lg manrope-bold">Bookkeeping</h4>
            <p className="pt-2">
              Simplify your financial processes with our bookkeeping expertise.
              We specialize in meticulous financial record-keeping, ensuring
              accuracy and compliance. With our bookkeeping services, you can
              focus on your core business while we handle the numbers, providing
              you with peace of mind and financial insight.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">AP/AR Management</h4>
            <p className="pt-2">
              Optimize your cash flow, ensure timely payments, and maintain
              strong relationships with vendors and clients with our tailored
              solutions. We will help your company enhance efficiency, reduce
              risks, and maintain financial stability.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Commission Calculation</h4>
            <p className="pt-2">
              Streamline calculating commissions with our expertise, ensuring
              precision and fairness. With our assistance, you can navigate the
              complexities of commission calculations and effortlessly foster a
              results-driven and motivated sales environment.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Financial Health Reporting</h4>
            <p className="pt-2">
              Unlock a deeper understanding of your finances, track key
              performance indicators, and communicate your financial story
              effectively to stakeholders with our knowledge of financial
              reporting. Tag Ops will enhance your financial clarity and create
              comprehensive reports that provide a clear snapshot of your
              financial health.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Payroll</h4>
            <p className="pt-2">
              Tag Ops offers comprehensive payroll solutions tailored to your
              business needs, guaranteeing accuracy and compliance with
              regulations. With our payroll services, you can streamline
              administrative tasks, reduce errors, and ensure timely and
              accurate compensation for your workforce.
            </p>
          </div>
        </div>

        <p>
          Let us improve your financial efficiency, provide you with data, and
          help you make decisions that cut costs. For more information and
          pricing details, get in touch with us to craft the ideal solution for
          your business.
        </p>

        <Link href="/contact" className="button mt-4 text-2xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
