import Link from 'next/link';
import Image from 'next/legacy/image';

const footerProps = {
  serviceLinks: [
    { title: 'Operations', href: '/operations' },
    { title: 'Finance', href: '/finance' },
    { title: 'Human Resources', href: '/human-resources' },
  ],
  companyLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Contact', href: '/contact' },
    { title: 'tag@tagoperations.com', href: 'mailto: tag@tagoperations.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="flex flex-col p-6 bg-primary sm:p-4 z-40">
      <div className="sm:flex sm:flex-row-reverse sm:justify-end sm:gap-20">
        <div className="sm:flex sm:flex-row sm:w-1/2 sm:mt-4 sm:gap-16 lg:w-1/3 lg:items-center">
          <div className="mt-4 sm:mt-0">
            <h4 className="text-background">Company</h4>
            <ul>
              {footerProps.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-secondarylight hover:text-secondary txt-rg"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-full">
            <h4 className="text-background">Services</h4>
            <ul>
              {footerProps.serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-secondarylight hover:text-secondary txt-rg"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 sm:w-1/5 md:w-40 flex flex-col justify-center">
          <Image
            src="/logos/secondary-logo-white.png"
            alt="Tag Operations Finance Human Resources"
            layout="responsive"
            width={532}
            height={341}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between items-start mt-6">
          <Link
            href="https://www.linkedin.com/company/tag-operations"
            target="_blank"
            className='flex'
          >
            <Image
              src="/icons/brand-linkedin.svg"
              alt="Linked In"
              width={30}
              height={30}
            />
          </Link>
        <p className="text-secondary text-md">
          &copy; {new Date().getFullYear()} Tag Operations
        </p>
      </div>
    </footer>
  );
}
