import Image from "next/legacy/image";
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
          <h2 className="flex flex-row items-center gap-2 w-full text-xl">
            <Image
              src="/icons/bulb.svg"
              alt="Light Bulb"
              width={50}
              height={50}
            />
            What are the Impacts of Inefficient HR Processes?
          </h2>

          <div className="mt-2">
            <h3 className="manrope-semibold">Mismatched Hires</h3>
            <p className="text-sm">
              Neglecting effective recruitment strategies can lead to high
              turnover costs and a lack of expertise in critical areas,
              increasing the potential for costly legal issues. Inaccurate
              assessments of employee requirements necessitate internal
              adjustments or external hires, incurring significant replacement
              costs.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="manrope-semibold">Risk of Non-Compliance</h3>
            <p className="text-sm">
              Inefficient HR procedures jeopardize compliance with labor and
              employment regulations. Neglecting crucial policies such as equal
              employment opportunity laws and leave benefits can result in
              costly litigation and damage to the company's reputation, directly
              impacting finances or indirectly affecting them through
              reputational damage.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="manrope-semibold">
              Diminished Employee Engagement and Productivity
            </h3>
            <p className="text-sm">
              Ineffective HR operations lead to decreased productivity and
              employee engagement, posing a significant challenge for the
              organization. Without adequate skill training and efforts to boost
              morale, employee engagement declines.
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
              Optimize your employee benefits with our mastery in managing,
              enrolling, and overseeing your benefits programs to ensure they
              align with your organization's goals and meet regulatory
              requirements.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">HR Policy Documentation</h4>
            <p className="pt-2">
              Refine your organizational guidelines with our expert HR policy
              documentation, including creating and maintaining a detailed
              employee handbook. We craft comprehensive, compliant policies
              tailored to your needs.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">HR Reporting</h4>
            <p className="pt-2">
              Transform your HR strategy with our reporting. From performance
              metrics to employee morale insights, we provide comprehensive
              reports for a holistic view of your workforce.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Recruiting</h4>
            <p className="pt-2">
              Upgrade your talent acquisition strategy with our recruiting
              expertise. We partner with multiple recruiting agencies to cast a
              wider net and ensure access to the best talent pool. Lean on Tag
              Ops to help you navigate the competitive recruitment landscape
              efficiently and confidently.
            </p>
          </div>

          <div className="rounded-xl my-6 p-4 border-2 border-accent bg-background drop-shadow">
            <h4 className="text-lg manrope-bold">Employee Transitions</h4>
            <p className="pt-2">
              Simplify employee transitions with seamless onboarding for new
              hires to professional and compliant termination processes,
              ensuring smooth workforce management.
            </p>
          </div>
        </div>

        <p>
          Let us help you build back office processes, recruit the right people,
          and train seamlessly. For more information and pricing details, get in
          touch with us to craft the ideal solution for your business.
        </p>

        <Link href="/contact" className="button mt-4 text-2xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
