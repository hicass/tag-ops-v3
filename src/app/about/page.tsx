import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <section className="w-full flex flex-col items-center my-8 p-6">
        <h1 className="secret">About Us</h1>
        <h1 className="text-center text-5xl text-primary">Hello!</h1>
        <h2 className="text-center text-xl">We are your partner in operational excellence.</h2>

        <p className="mt-4">
          Every business, regardless of size, deserves tailored support to
          thrive. Born from this belief, we offer innovative and flexible
          back-office solutions, empowering you to streamline operations,
          optimize resources, and achieve lasting success.
        </p>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6 bg-primary drop-shadow-md">
        <h1 className="text-center text-3xl text-background">Our Mission</h1>

        <p className="mt-4 text-background">
          We transform back offices with reliable systems, processes, and talent
          while empowering leadership with crucial insights into their
          operational costs.
        </p>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6">
        <h1 className="flex flex-row items-center gap-2 text-3xl text-primary">
          Our Story
          <Image src="icons/book.svg" alt="Book" width={40} height={40} />
        </h1>

        <p className="mt-4">
          Tag Ops was founded on the principle that high-quality operational
          support is crucial for every business. We recognize that not all
          companies require a dedicated Operations leader to oversee extensive
          back-office projects or managing routine tasks like payroll and
          invoicing.
        </p>
        <p className="mt-4">
          Our approach at Tag Ops is different. We provide a customizable model
          designed to meet you where you are in your business journey while
          offering the flexibility to scale as needed. We take the time to
          understand your unique requirements, conducting in-depth research to
          identify the most cost-effective tools, processes, and policies. Our
          goal is to dig deep with our clients, assisting in the establishment
          of a robust infrastructure that ensures your company runs smoothly
          without exhausting your resources.
        </p>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6">
        <h1 className="flex flex-row items-center gap-2 text-3xl text-primary">
          Meet the team!
        </h1>

        <div className="w-full">
          <div className="relative my-6 p-4 bg-secondarylight rounded-xl drop-shadow">
            <div className="flex gap-2">
              <Image
                src="/images/courtney-profile.jpeg"
                alt="Smiling filipina woman"
                className="rounded-xl drop-shadow"
                width={80}
                height={80}
              />
              <div>
                <p className="text-lg manrope-bold">Courtney Walters</p>
                <p className="manrope-semibold">
                  Founder & Operations Consultant
                </p>
              </div>
            </div>

            <p className="pt-2">
              I founded Tag Ops after 8 years of working in Operations in the
              San Francisco startup sphere. From Accounting & HR SaaS companies,
              to FinTech and Cryptocurrency, to Recruiting. Regardless of the
              industry, I'm incredibly adaptable, enjoy learning, and love
              problem solving. I have a fiery passion for helping small
              companies strategize and stay organized amongst the chaos of
              scaling. In my spare time, I enjoy hiking around the Bay Area,
              playing dnd and strategy-based RPGs, and spending time with my
              family, friends, and partner.
            </p>
          </div>

          <div className="relative my-6 p-4 bg-secondarylight rounded-xl drop-shadow">
            <div className="flex gap-2">
              <Image
                src="/images/courtney-profile.jpeg"
                alt="Smiling filipina woman"
                className="rounded-xl drop-shadow"
                width={80}
                height={80}
              />
              <div>
                <p className="text-lg manrope-bold">Courtney Walters</p>
                <p className="manrope-semibold">
                  Founder & Operations Consultant
                </p>
              </div>
            </div>

            <p className="pt-2">
              I founded Tag Ops after 8 years of working in Operations in the
              San Francisco startup sphere. From Accounting & HR SaaS companies,
              to FinTech and Cryptocurrency, to Recruiting. Regardless of the
              industry, I'm incredibly adaptable, enjoy learning, and love
              problem solving. I have a fiery passion for helping small
              companies strategize and stay organized amongst the chaos of
              scaling. In my spare time, I enjoy hiking around the Bay Area,
              playing dnd and strategy-based RPGs, and spending time with my
              family, friends, and partner.
            </p>
          </div>

          <div className="relative my-6 p-4 bg-secondarylight rounded-xl drop-shadow">
            <div className="flex gap-2">
              <Image
                src="/images/courtney-profile.jpeg"
                alt="Smiling filipina woman"
                className="rounded-xl drop-shadow"
                width={80}
                height={80}
              />
              <div>
                <p className="text-lg manrope-bold">Courtney Walters</p>
                <p className="manrope-semibold">
                  Founder & Operations Consultant
                </p>
              </div>
            </div>

            <p className="pt-2">
              I founded Tag Ops after 8 years of working in Operations in the
              San Francisco startup sphere. From Accounting & HR SaaS companies,
              to FinTech and Cryptocurrency, to Recruiting. Regardless of the
              industry, I'm incredibly adaptable, enjoy learning, and love
              problem solving. I have a fiery passion for helping small
              companies strategize and stay organized amongst the chaos of
              scaling. In my spare time, I enjoy hiking around the Bay Area,
              playing dnd and strategy-based RPGs, and spending time with my
              family, friends, and partner.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6">
        <Link href="/contact" className="button mt-4 text-2xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
