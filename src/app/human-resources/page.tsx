import Image from 'next/legacy/image';
import Link from 'next/link';

export default function HumanResourcesPage() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <section className="w-full bg-primary mb-8 drop-shadow-md">
        <div className="w-full flex flex-col items-center my-12 p-10">
          <h1 className="text-3xl text-background sm:text-5xl">
            Human Resources
          </h1>

          <p className="mt-4 text-lg text-background md:text-2xl md:text-center md:w-2/3">
            From benefits administration to recruiting, we offer expert
            solutions for your HR needs, ensuring seamless processes and the
            right people in your organization.
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
            What are the Impact of Inefficient HR Processes?
          </h2>

          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Mismatched Hires
            </h3>
            <p className="mt-2 sm:text-lg">
              Neglecting effective recruitment strategies can lead to high
              turnover costs and a lack of expertise in critical areas,
              increasing the potential for costly legal issues. Inaccurate
              assessments of employee requirements necessitate internal
              adjustments or external hires, incurring significant replacement
              costs.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Risk of Non-Compliance
            </h3>
            <p className="mt-2 sm:text-lg">
              Inefficient HR procedures jeopardize compliance with labor and
              employment regulations. Neglecting crucial policies such as equal
              employment opportunity laws and leave benefits can result in
              costly litigation and damage to the company's reputation, directly
              impacting finances or indirectly affecting them through
              reputational damage.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg sm:text-xl manrope-bold">
              Diminished Employee Engagement and Productivity
            </h3>
            <p className="mt-2 sm:text-lg">
              Ineffective HR operations lead to decreased productivity and
              employee engagement, posing a significant challenge for the
              organization. Without adequate skill training and efforts to boost
              morale, employee engagement declines.
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
              Benefits Administration
            </h4>
            <p className="mt-2 sm:text-lg">
              Optimize your employee benefits with our mastery in managing,
              enrolling, and overseeing your benefits programs to ensure they
              align with your organization's goals and meet regulatory
              requirements.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">
              HR Policy Documentation
            </h4>
            <p className="mt-2 sm:text-lg">
              Refine your organizational guidelines with our expert HR policy
              documentation, including creating and maintaining a detailed
              employee handbook. We craft comprehensive, compliant policies
              tailored to your needs.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">HR Reporting</h4>
            <p className="mt-2 sm:text-lg">
              Transform your HR strategy with our reporting. From performance
              metrics to employee morale insights, we provide comprehensive
              reports for a holistic view of your workforce.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg sm:text-xl manrope-bold">Recruiting</h4>
            <p className="mt-2 sm:text-lg">
              Upgrade your talent acquisition strategy with our recruiting
              expertise. We partner with multiple recruiting agencies to cast a
              wider net and ensure access to the best talent pool. Lean on Tag
              Ops to help you navigate the competitive recruitment landscape
              efficiently and confidently.
            </p>
          </div>

          <div className="rounded-xl my-10 p-4 bg-secondarylight drop-shadow">
            <h4 className="text-lg manrope-bold">Employee Transitions</h4>
            <p className="mt-2 sm:text-lg">
              Simplify employee transitions with seamless onboarding for new
              hires to professional and compliant termination processes,
              ensuring smooth workforce management.
            </p>
          </div>
        </div>

        <p className="sm:text-lg md:text-2xl mb-6">
          Let us help you build back office processes, recruit the right people,
          and train seamlessly. For more information and pricing details, get in
          touch with us to craft the ideal solution for your business.
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
