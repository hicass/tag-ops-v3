'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <main>
        <section className="w-full flex flex-col items-center my-8 p-6">
          <h1 className="secret">Tag Ops</h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-5xl text-primary">
              Simplify, Optimize, Scale with Tag Operations!
            </h1>
            <p className="text-center text-lg py-2">
              Your tech forward, embedded, and flexible back office team!
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center p-6 bg-primary">
          <h2 className="text-3xl text-background">Our Solutions</h2>

          <div className="flex flex-col mt-4 gap-2">
            <p className="text-background">
              Staffing your back office with a{' '}
              <span className="text-accent">full-time</span> Operations,
              Finance, and HR leader can cost you over{' '}
              <span className="text-accent">$7,000</span> per month per role,
              totaling <span className="text-accent">$63,000</span> per quarter.
            </p>
            <p className="text-background">
              We work with you to gain insights into your back office workload
              and tailor your back office people costs to{' '}
              <span className="text-accent">fit your needs</span> as a business,{' '}
              <span className="text-accent">saving</span> you as much as we can.
            </p>
          </div>

          <div className="flex flex-col w-full mt-4">
            <div className="flex flex-row items-center py-4 gap-2">
              <Image
                src="/icons/settings.svg"
                alt="Gear"
                width={30}
                height={30}
              />
              <h3 className="text-2xl text-background">Operations</h3>
            </div>

            <div className="flex flex-row items-center py-4 gap-2">
              <Image
                src="/icons/report-money.svg"
                alt="Money"
                width={30}
                height={30}
              />
              <h3 className="text-2xl text-background">Finance</h3>
            </div>

            <div className="flex flex-row items-center py-4 gap-2">
              <Image
                src="/icons/heart-handshake.svg"
                alt="Hanshake in the shape of a heart"
                width={30}
                height={30}
              />
              <h3 className="text-2xl text-background">Human Resources</h3>
            </div>
          </div>

          <Link href="/services" className="button mt-4 text-lg">
            Learn More!
          </Link>
        </section>

        <section className="flex flex-col items-center mt-4 p-6">
          <h2 className="text-3xl">Our Flow</h2>

          <div className="w-full">
            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/compass.svg"
                alt="Compass"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">1 Discovery</h3>
              <p className="mt-2">
                We jump on a discovery call to discuss your back-office needs
                and how Tag Ops can help.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/telescope.svg"
                alt="Telescope"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">2 Initial Scope</h3>
              <p className="mt-2">
                We create an initial scope for the first quarter of our
                partnership.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/rocket.svg"
                alt="Rocket"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">3 Kickoff</h3>
              <p className="mt-2">
                You approve the scope, and we kick off the project. You'll
                receive access to our project management dashboard, enabling
                collaboration and visibility into the progress.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/telescope.svg"
                alt="Telescope"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">4 Scope In Progress</h3>
              <p className="mt-2">
                We complete the project as determined in the scope.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/calendar.svg"
                alt="Calendar"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">5 Quarterly Review</h3>
              <p className="mt-2">
                At the end of the quarter, you will receive a report on time and
                cost regarding the tasks in each division (Ops, Finance, Human
                Resources), enabling data-driven decisions around your workforce
                and empowering your growth.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/bulb.svg"
                alt="Light Bulb"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">6 Decision</h3>
              <p className="mt-2">
                You determine whether you need ongoing support from us.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/telescope.svg"
                alt="Telescope"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">
                <span className="text-inherit manrope-semibold">If Yes:</span>{' '}
                New Scope
              </h3>
              <p className="mt-2">
                We create a new scope for the upcoming quarter.
              </p>
            </div>

            <div className="relative my-6 p-4 bg-secondarylight rounded-xl">
              <Image
                src="/icons/user.svg"
                alt="Person"
                className="absolute top-0 left-0 -ml-3 -mt-3"
                width={30}
                height={30}
              />
              <h3 className="text-lg manrope-semibold">
                <span className="text-inherit manrope-semibold">If No:</span>{' '}
                Transition
              </h3>
              <p className="mt-2">
                We help you recruit, fill the role, train as needed, and close
                out the project.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center p-6">
          <h2 className="text-3xl">See what our clients are saying...</h2>

          <div>
            <div className="bg-accentlight rounded-xl my-6 p-4">
              <div>
                <p className="text-lg manrope-bold">Riece Keck</p>
                <p className="manrope-semibold">
                  Founder & CEO, Vault Recruiting
                </p>
              </div>

              <p className="pt-2">
                "Courtney, in short, has transformed the back-end operations of
                our business. She started with bare bones and made an immediate,
                dramatic impact. She documented processes that improved
                candidate and internal employee experience, created more reports
                than I can count that gave excellent insight into our sales
                function, and fully owned and improved our routine operational
                processes."
              </p>
            </div>

            <div className="bg-accentlight rounded-xl my-6 p-4">
              <div>
                <p className="text-lg manrope-bold">Jolie Curran</p>
                <p className="manrope-semibold">Head of Operations, Ejento</p>
              </div>

              <p className="pt-2">
                "It is rare to find a talent like Courtney. She is intelligent,
                proactive, and professional. She tackles projects through
                thoughtful planning and then executes projects flawlessly. If
                she doesn't know how to do something, she dives into research
                and figures out a strategy."
              </p>
            </div>

            <div className="bg-accentlight rounded-xl my-6 p-4">
              <div>
                <p className="text-lg manrope-bold">David Milner</p>
                <p className="manrope-semibold">Head of IT, Celsius Network</p>
              </div>

              <p className="pt-2">
                "Working with Courtney was an absolute pleasure. She helped the
                IT team greatly in our interactions and took responsibility even
                for items that were not in her field of responsibility and
                brought them to the next level. We always felt she was a part of
                the team and her organisational skills are some of the best I
                have seen. Anyone would be happy to have her work in their
                company."
              </p>
            </div>
          </div>
        </section>
      </main>
    </LocalizationProvider>
  );
}
