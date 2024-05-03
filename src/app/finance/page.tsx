import Image from 'next/image';
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
          <div className="flex flex-row justify-start items-end gap-2 w-full">
            <Image
              src="/icons/bulb.svg"
              alt="Light Bulb"
              width={30}
              height={30}
            />
            <h2 className="text-center text-xl">Did you know? </h2>
          </div>

          <p className="w-full justify-start manrope-semibold mt-2">
            Inefficiencies cost many organizations as much as{' '}
            <span className="manrope-bold">20 to 30 percent</span> of their
            revenue each year.
          </p>

          <div className="flex justify-end mt-2">
            <p className="manrope-semibold">
              - Stampli,{' '}
              <Link
                href="https://www.stampli.com/blog/accounts-payable/inefficient-back-office"
                target="_blank"
                className="text-primary hover:text-text underline underline-offset-2"
              >
                Blog
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
            <h4 className="text-lg manrope-bold">Bookkeeping</h4>

            <p className="pt-2">
              Tag Ops simplifies your financial processes with our bookkeeping
              expertise. We assist in meticulous financial record-keeping,
              ensuring accuracy and compliance. With our bookkeeping services,
              you can focus on your core business while we handle the numbers,
              providing you with peace of mind and financial insight.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">AP/AR Management</h4>

            <p className="pt-2">
              Tag Ops optimizes cash flow, ensuring timely payments, and
              maintains strong relationships with vendors and clients. With our
              tailored solutions, you can enhance efficiency, reduce risks, and
              maintain financial stability.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Commission Calculation</h4>

            <p className="pt-2">
              Tag Ops offers tailored solutions to streamline the process of
              calculating commissions, ensuring precision and fairness. With our
              assistance, you can navigate the complexities of commission
              calculations effortlessly, fostering a results-driven and
              motivated sales environment.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Financial Health Reporting</h4>

            <p className="pt-2">
              Tag Ops enhances your financial transparency and strategic
              decision-making with our knowledge in financial reporting. We
              specialize in creating comprehensive reports that provide a clear
              snapshot of your financial health. With our assistance, you can
              gain a deeper understanding of your finances, track key
              performance indicators, and communicate your financial story
              effectively to stakeholders.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Payroll</h4>

            <p className="pt-2">
              Simplify your payroll processes with our specialized expertise. We
              offer comprehensive payroll solutions tailored to your business
              needs, ensuring accuracy and compliance with regulations. With our
              payroll services, you can streamline administrative tasks, reduce
              errors, and ensure timely and accurate compensation for your
              workforce.
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
