import Image from 'next/image';
import Link from 'next/link';

export default function HumanResourcesPage() {
  return (
    <main>
      <section className="flex flex-col items-center mt-4 p-6">
        <h2 className="text-3xl text-primary">Human Resources</h2>

        <p className="mt-2">
          From benefits administration to recruiting, we offer expert solutions
          for your HR needs, ensuring seamless processes and the right people in
          your organization.
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
            Some studies predict that every time a business replaces a salaried
            employee, it costs
            <span className="manrope-bold"> 6 to 9 months'</span> salary on
            average.
          </p>

          <div className="flex justify-end mt-2">
            <p className="manrope-semibold">
              - People Keep,{' '}
              <Link
                href="https://www.peoplekeep.com/blog/employee-retention-the-real-cost-of-losing-an-employee"
                target="_blank"
                className="text-primary hover:text-text underline underline-offset-2"
              >
                Article
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
            <h4 className="text-lg manrope-bold">Benefits Administration</h4>

            <p className="pt-2">
              Optimize your employee benefits with our expertise in benefits
              administration. We specialize in managing, enrolling, and
              overseeing your benefits programs to ensure they align with your
              organization's goals and meet regulatory requirements.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">HR Policy Documentation</h4>

            <p className="pt-2">
              Refine your organizational guidelines with our expert HR policy
              documentation, including the creation and maintenance of a
              detailed employee handbook. We specialize in crafting
              comprehensive, compliant policies tailored to your needs.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Employee Transitions</h4>

            <p className="pt-2">
              Simplify employee transitions with our expertise. From seamless
              onboarding for new hires to professional and compliant termination
              processes, we ensure smooth workforce management.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">HR Reporting</h4>

            <p className="pt-2">
              Transform your HR strategy with our reporting expertise. From
              performance metrics to employee morale insights, we craft
              comprehensive reports for a holistic view of your workforce.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Recruiting</h4>

            <p className="pt-2">
              Optimize your talent acquisition strategy with comprehensive
              recruiting expertise. We partner with multiple recruiting agencies
              to cast a wider net and ensure access to the best talent pool
              available. With our combined efforts, you can navigate the
              competitive landscape of recruitment efficiently and confidently.
            </p>
          </div>
        </div>

        <p>
          Let us help you build back office processes, recruit the right people,
          and train seamlessly!
        </p>

        <Link href="/contact" className="button mt-4 text-2xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
