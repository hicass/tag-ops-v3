import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col p-6 bg-primary">
      <div>
        <h3 className="text-lg manrope-semibold text-background">Services</h3>
        <ul>
          <li>
            <Link
              href="/operations"
              className="text-secondarylight hover:text-background"
            >
              Operations
            </Link>
          </li>
          <li>
            <Link
              href="/finance"
              className="text-secondarylight hover:text-background"
            >
              Finance
            </Link>
          </li>
          <li>
            <Link
              href="/finance"
              className="text-secondarylight hover:text-background"
            >
              Human Resources
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg manrope-semibold text-background">Company</h3>
        <ul>
          <li>
            <Link
              href="/about"
              className="text-secondarylight hover:text-background"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-secondarylight hover:text-background"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="mailto: tag@tagoperations.com"
              className="text-secondarylight hover:text-background"
            >
              tag@tagoperations.com
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex w-1/2 my-6">
        <Image 
          src="/logos/main-logo-white.svg"
          alt="Tag Operations Finance Human Resources"
          layout="responsive"
          width={100}
          height={100}
        />
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
        <p className="text-secondary">
          &copy; {new Date().getFullYear()} Tag Operations
        </p>
      </div>
    </footer>
  );
}
