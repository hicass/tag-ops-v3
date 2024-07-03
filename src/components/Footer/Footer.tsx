import Link from 'next/link';
import Image from 'next/legacy/image';

export default function Footer() {
  return (
    <footer className="flex flex-col p-6 bg-primary sm:p-4">
      <div className="sm:flex sm:flex-row-reverse sm:justify-end sm:gap-8">
        <div className='sm:flex sm:flex-row sm:w-1/2 sm:justify-between sm:mt-4 sm:gap-4 lg:w-1/3 lg:items-center'>
          <div>
            <h3 className="text-lg manrope-semibold text-background lg:text-2xl">
              Services
            </h3>
            <ul>
              <li>
                <Link
                  href="/operations"
                  className="text-secondarylight hover:text-background lg:text-lg"
                >
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/finance"
                  className="text-secondarylight hover:text-background lg:text-lg"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/human-resources"
                  className="text-secondarylight hover:text-background lg:text-lg"
                >
                  Human Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg manrope-semibold text-background lg:text-2xl">
              Company
            </h3>
            <ul>
              <li>
                <Link
                  href="/about"
                  className="text-secondarylight hover:text-background lg:text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondarylight hover:text-background lg:text-lg"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="mailto: tag@tagoperations.com"
                  className="text-secondarylight hover:text-background lg:text-lg"
                >
                  tag@tagoperations.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 sm:w-1/5 md:w-40">
          <Image
            src="/logos/main-logo-white.svg"
            alt="Tag Operations Finance Human Resources"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between items-end mt-6">
        <Link
          href="https://www.linkedin.com/company/tag-operations"
          target="_blank"
        >
          <Image
            src="/icons/brand-linkedin.svg"
            alt="Linked In"
            width={30}
            height={30}
          />
        </Link>
        <p className="text-secondary lg:text-lg">
          &copy; {new Date().getFullYear()} Tag Operations
        </p>
      </div>
    </footer>
  );
}
