import Image from "next/legacy/image";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3">
        <h1 className="secret">About Us</h1>
        <h1 className="text-center text-5xl text-primary">Hello!</h1>
        <h2 className="mt-2 text-center text-xl md:text-2xl">
          We are Tag Operations, your partner in operational excellence.
        </h2>

        <p className="mt-4 md:text-lg">
          Every business, regardless of size, deserves tailored support to
          thrive. Born from this belief, we offer innovative and flexible
          back-office solutions, empowering you to streamline operations,
          optimize resources, and achieve lasting success.
        </p>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-10 bg-primary drop-shadow-md">
        <h1 className="text-center text-3xl text-background manrope-bold md:text-4xl">
          Our Mission
        </h1>

        <p className="mt-4 text-background text-center md:text-2xl md:w-2/3">
          We transform back offices with reliable systems, processes, and talent
          while empowering leadership with crucial insights into their
          operational costs.
        </p>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3">
        <h2 className="flex flex-row items-center gap-2 text-3xl manrope-bold text-primary md:text-4xl">
          Our Story
          <Image src="/icons/book.svg" alt="Book" width={40} height={40} />
        </h2>

        <div className="flex flex-col gap-4 mt-6">
          <p className="md:text-lg">
            Our journey began in late 2022 when our founder,{' '}
            <span className="manrope-semibold">Courtney Walters</span>,
            recognized a critical gap in the business landscape. Having worked
            extensively within San Francisco's startup ecosystem, it became
            evident that while front-office functions like customer success and
            marketing received ample attention, back-office operations were
            often overlooked. This disparity stemmed from the misconception that
            operations lacked direct revenue generation potential.
          </p>
          <p className="md:text-lg">
            Drawing from firsthand experiences, Courtney realized the
            <span className="manrope-semibold">
              {' '}
              transformative power hidden within back-office optimization
            </span>{' '}
            and embarked on a mission to help businesses achieve operational
            excellence. From automating processes to integrating sophisticated
            software solutions, the right approach drives scalability and
            unlocks{' '}
            <span className="manrope-semibold"> significant cost savings</span>.
          </p>
          <p className="md:text-lg">
            We believe that{' '}
            <span className="manrope-semibold">
              {' '}
              high-quality operational support
            </span>{' '}
            is indispensable for every business{' '}
            <span className="manrope-semibold"> regardless of its size</span>,
            and understand that not all companies require a dedicated operations
            leader. We offer a
            <span className="manrope-semibold">
              {' '}
              holistic, flexible, customizable
            </span>{' '}
            model to meet diverse needs. Our approach is rooted in
            collaboration, where we work closely with clients to craft tailored
            solutions that optimize efficiency without draining resources.
          </p>
          <p className="md:text-lg">
            At{' '}
            <span className="text-primary manrope-semibold">
              Tag Operations
            </span>
            , we're not just another operations support company – we're partners
            dedicated to empowering businesses to thrive through efficient and
            effective back-office strategies.
          </p>
        </div>
      </section>

      <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3">
        <h1 className="flex flex-row items-center gap-2 text-3xl text-primary manrope-bold md:text-4xl">
          Meet the team!
        </h1>

        <p className="mt-6 md:text-lg">
          Our Tag Ops team is a dynamic group of experts dedicated to
          operational excellence. With diverse industry backgrounds, we bring a
          wealth of knowledge to every project. We're committed to tailoring
          solutions to your specific needs, from process optimization to
          strategic guidance.
        </p>

        <div className="flex flex-col w-full mt-8 gap-8 md:text-lg">
          <div className="p-4 bg-secondarylight rounded-xl drop-shadow">
            <div className="flex gap-4">
              <div className="m-w-1/3">
                <Image
                  src="/images/courtney-walters.jpeg"
                  alt="Smiling woman with brown and blue hair"
                  className="rounded-xl drop-shadow border"
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <p className="text-lg manrope-bold">Courtney Walters</p>
                <p className="manrope-semibold">
                  Founder & Operations Consultant
                </p>
              </div>
            </div>

            <p className="mt-6">
              "I founded Tag Ops after 8 years of working in Operations in the
              San Francisco startup sphere. From Accounting & HR SaaS companies,
              to FinTech and Cryptocurrency, to Recruiting. Regardless of the
              industry, I'm incredibly adaptable, enjoy learning, and love
              problem solving. I have a fiery passion for helping small
              companies strategize and stay organized amongst the chaos of
              scaling. In my spare time, I enjoy hiking around the Bay Area,
              playing dnd and strategy-based RPGs, and spending time with my
              family, friends, and partner."
            </p>
          </div>

          <div className="p-4 bg-secondarylight rounded-xl drop-shadow">
            <div className="flex gap-4">
              <div className="m-w-1/3">
                <Image
                  src="/images/cass-walters.jpg"
                  alt="Smiling woman with dark hair looking to the side"
                  className="rounded-xl drop-shadow"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="text-lg manrope-bold">Cass Walters</p>
                <p className="manrope-semibold">
                  Business Operations Developer
                </p>
              </div>
            </div>

            <p className="mt-6">
              "As a coder and artist, I'm driven by the fusion of creativity and
              technology. With a passion for both coding and artistic
              expression, I find fulfillment in crafting elegant and efficient
              solutions that seamlessly marries functionality with aesthetics. I
              thrive on the exhilaration of exploring cutting-edge tools and
              frameworks, constantly expanding my skill set. Beyond the code, I
              am a gamer, hiker, and dog parent!"
            </p>
          </div>

          <div className="p-4 bg-secondarylight rounded-xl drop-shadow">
            <div className="flex gap-4">
              <div className="m-w-1/3">
                <Image
                  src="/images/daniel-soyinka.png"
                  alt="Man looking at camera in an orange plaid button up shirt"
                  className="rounded-xl drop-shadow"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="text-lg manrope-bold">Daniel Soyinka</p>
                <p className="manrope-semibold">Bookkeeping Consultant</p>
              </div>
            </div>

            <p className="mt-6">
              "With a degree in Accounting, I have gained experience across
              various roles in different companies, from internee to CEO. I have
              been helping numerous small and medium-size businesses grow by
              serving as a remote Bookkeeper. I possess comprehensive expertise
              in all aspects of Accounting and Bookkeeping.""
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center mb-10">
        <Link href="/contact" className="button mt-4 text-2xl md:text-3xl">
          Lets Talk!
        </Link>
      </section>
    </main>
  );
}
