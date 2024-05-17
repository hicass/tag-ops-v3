'use client';

import { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import Blob from '@/components/Blob/Blob';
import ClientsServed from '@/components/ClientsServed/ClientsServed';

export default function LandingPageContent() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    setIsMobileScreen(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col items-center overflow-hidden">
      {/* Header */}
      <section className="w-full flex flex-col items-center mt-12 p-6 md:h-96 sm:my-28 lg:flex-row lg:gap-16 lg:w-3/4">
        <h1 className="secret">Tag Ops</h1>
        <div className="flex flex-col gap-4 md:w-full">
          <h1 className="text-center text-5xl sm:text-6xl text-primary">
            Simplify, Optimize, Scale
          </h1>
          <h1 className="text-center text-5xl sm:text-6xl  text-primary">
            with Tag Operations!
          </h1>
          <p className="text-center text-lg py-2 md:text-2xl">
            Your tech forward, embedded, and flexible back office team!
          </p>
        </div>

        {!isMobileScreen && (
          <div className="w-1/3">
            <Image
              src="/logos/main-logo.svg"
              alt="Tag Operations Finance Human Resources"
              layout="responsive"
              priority
              width={100}
              height={100}
            />
          </div>
        )}
      </section>

      {/* Our Solutions */}
      <section className="w-full mt-14 sm:mt-28 relative">
        <div className="flex flex-col items-center p-6 bg-primary drop-shadow-md z-10 py-14 sm:py-24">
          <h2 className="text-3xl text-background sm:text-5xl">
            Our Solutions
          </h2>

          <div className="flex flex-col mt-4 gap-4 sm:mt-10 md:w-2/3 2xl:w-1/2">
            <p className="text-background sm:text-xl">
              Did you know that businesses can save at least
              <span className="text-accent"> 30% on back-office costs </span> by
              leveraging fractional support? Not only do we offer tailored
              back-office support services, but we also provide you with the
              data behind our services. You’ll know how much time is spent on
              your company's various back-office processes enabling you to
              strategize scaling your company.
            </p>
            <p className="text-background sm:text-xl">
              With the flexibility to adjust services as needed,
              <span className="text-accent">
                {' '}
                we empower you to focus on what truly matters{' '}
              </span>{' '}
              – nurturing your business's growth and success - while being
              efficient with your resources.
            </p>
          </div>

          <div className="flex flex-col w-full mt-4 md:w-2/3 2xl:w-1/2">
            <Link
              href="/operations"
              className="flex flex-row items-center py-4 gap-2"
            >
              <Image
                src="/icons/settings.svg"
                alt="Gear"
                width={30}
                height={30}
              />
              <h3 className="link text-2xl text-background">Operations</h3>
            </Link>

            <Link
              href="/finance"
              className="flex flex-row items-center py-4 gap-2"
            >
              <Image
                src="/icons/report-money.svg"
                alt="Money"
                width={30}
                height={30}
              />
              <h3 className="link text-2xl text-background">Finance</h3>
            </Link>

            <Link
              href="/finance"
              className="flex flex-row items-center py-4 gap-2"
            >
              <Image
                src="/icons/heart-handshake.svg"
                alt="Hanshake in the shape of a heart"
                width={30}
                height={30}
              />
              <h3 className="link text-2xl text-background">Human Resources</h3>
            </Link>
          </div>

          <Link
            href="/contact"
            className="contact-button mt-4 text-2xl md:mt-10"
          >
            Learn More!
          </Link>
        </div>

        <div>
          <Blob positionX={'left'} positionY={'back'} />
          <Blob positionX={'middle'} positionY={'back'} />
          <Blob positionX={'right'} positionY={'back'} />
          <Blob positionX={'left'} positionY={'front'} />
          <Blob positionX={'middle'} positionY={'front'} />
          <Blob positionX={'right'} positionY={'front'} />
        </div>

        <div className="bg-accent w-full h-6"></div>
      </section>

      {/* Our Flow */}
      <section className="flex flex-col items-center gap-4 m4-4 p-6 sm:mt-16 md:w-2/3 2xl:w-1/2">
        <h2 className="text-3xl sm:text-4xl">Our Flow</h2>

        <div className="w-full">
          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/compass.svg"
                alt="Compass"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <h3 className="text-lg sm:text-xl manrope-semibold">
              1 • Discovery
            </h3>
            <p className="mt-2 sm:text-lg">
              We jump on a discovery call to discuss your back-office needs and
              how Tag Ops can help.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/telescope.svg"
                alt="Telescope"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg sm:text-xl manrope-semibold">
              2 • Initial Scope
            </h3>
            <p className="mt-2 sm:text-lg">
              We create an initial scope for the first quarter of our
              partnership.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/rocket.svg"
                alt="Rocket"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg sm:text-xl manrope-semibold">3 • Kickoff</h3>
            <p className="mt-2 sm:text-lg">
              You approve the scope, and we kick off the project. You'll receive
              access to our project management dashboard, enabling collaboration
              and visibility into the progress.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/telescope.svg"
                alt="Telescope"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg sm:text-xl manrope-semibold">
              4 • Scope In Progress
            </h3>
            <p className="mt-2 sm:text-lg">
              We complete the project as determined in the scope.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg sm:text-xl manrope-semibold">
              5 • Quarterly Review
            </h3>
            <p className="mt-2 sm:text-lg">
              At the end of the quarter, you will receive a report on time and
              cost regarding the tasks in each division (Ops, Finance, Human
              Resources), enabling data-driven decisions around your workforce
              and empowering your growth.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/bulb.svg"
                alt="Light Bulb"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg sm:text-xl manrope-semibold">
              6 • Decision
            </h3>
            <p className="mt-2 sm:text-lg">
              You determine whether you need ongoing support from us.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/telescope.svg"
                alt="Telescope"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg manrope-semibold">
              <span className="text-inherit sm:text-xl manrope-semibold">
                If Yes:
              </span>{' '}
              New Scope
            </h3>
            <p className="mt-2 sm:text-lg">
              We create a new scope for the upcoming quarter.
            </p>
          </div>

          <div className="relative my-10 p-6 bg-secondarylight rounded-xl drop-shadow">
            <div className="w-10 h-10 absolute top-0 left-0 -ml-4 -mt-4">
              <Image
                src="/icons/user.svg"
                alt="Person"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <h3 className="text-lg manrope-semibold">
              <span className="text-inherit sm:text-xl manrope-semibold">
                If No:
              </span>{' '}
              Transition
            </h3>
            <p className="mt-2 sm:text-lg">
              We help you recruit, fill the role, train as needed, and close out
              the project.
            </p>
          </div>
        </div>

        <h3 className="text-center mt-4 text-3xl sm:text-4xl lg:mt-10 manrope-semibold">
          Analytics Empowerment
        </h3>

        <div className="flex flex-col items-center mt-4 gap-4">
          <div className="flex flex-col gap-4 w-full sm:w-2/3 md:w-2/3 lg:w-1/2 mt-6">
            <div className="border-4 border-secondarylight padding-2 rounded-xl drop-shadow">
              <Image
                src="/images/dashboard.png"
                alt="Teamwork Dashboard"
                layout="responsive"
                className="rounded-xl"
                objectFit="cover"
                width={1010}
                height={638}
              />
            </div>

            <div className="flex w-full flex-row items-center gap-2">
              <p className="sm:text-lg">Powered By: </p>
              <div className="w-1/3">
                <Link href="https://www.teamwork.com/" target="_blank">
                  <Image
                    src="/images/teamwork-logo.png"
                    alt="Teamwork Logo"
                    layout="responsive"
                    objectFit="cover"
                    width={1920}
                    height={248}
                  />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 sm:text-lg">
            Our project management software empowers your business with
            analytics, not only on tasks and project budgets but also a
            breakdown of how much time is spent on any specific task within any
            division (Finance, HR, Ops) every quarter.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col items-center p-6 sm:mt-16 md:w-2/3 2xl:w-1/2">
        <h2 className="text-3xl sm:text-4xl">
          See what our clients are saying...
        </h2>

        <div>
          <div className="bg-accentlight rounded-xl my-10 p-4 drop-shadow">
            <div>
              <p className="text-lg sm:text-xl manrope-bold">Riece Keck</p>
              <p className="sm:text-lg manrope-semibold">
                Founder & CEO, Vault Recruiting
              </p>
            </div>

            <p className="pt-2 sm:text-lg">
              "Courtney, in short, has transformed the back-end operations of
              our business. She started with bare bones and made an immediate,
              dramatic impact. She documented processes that improved candidate
              and internal employee experience, created more reports than I can
              count that gave excellent insight into our sales function, and
              fully owned and improved our routine operational processes."
            </p>
          </div>

          <div className="bg-accentlight rounded-xl my-10 p-4 drop-shadow">
            <div>
              <p className="text-lg sm:text-xl manrope-bold">Jolie Curran</p>
              <p className="sm:text-lg manrope-semibold">
                Head of Operations, Ejento
              </p>
            </div>

            <p className="pt-2 sm:text-lg">
              "It is rare to find a talent like Courtney. She is intelligent,
              proactive, and professional. She tackles projects through
              thoughtful planning and then executes projects flawlessly. If she
              doesn't know how to do something, she dives into research and
              figures out a strategy."
            </p>
          </div>

          <div className="bg-accentlight rounded-xl my-10 p-4  drop-shadow">
            <div>
              <p className="text-lg sm:text-xl manrope-bold">David Milner</p>
              <p className="sm:text-lg manrope-semibold">
                Head of IT, Celsius Network
              </p>
            </div>

            <p className="pt-2 sm:text-lg">
              "Working with Courtney was an absolute pleasure. She helped the IT
              team greatly in our interactions and took responsibility even for
              items that were not in her field of responsibility and brought
              them to the next level. We always felt she was a part of the team
              and her organisational skills are some of the best I have seen.
              Anyone would be happy to have her work in their company."
            </p>
          </div>
        </div>
      </section>

      <ClientsServed />
    </main>
  );
}
