import Image from 'next/legacy/image';
import Link from 'next/link';

export default function RegularNav() {
  return (
    <div className="flex flex-row justify-between items-center px-6 bg-background drop-shadow-lg">
      <div className="link w-24">
        <Link href="/">
          <Image
            src="/logos/secondary-logo.svg"
            alt="Tag Ops"
            layout="responsive"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex flex-row items-center gap-8">
          <li>
            <Link href="/about" className="manrope-semibold text-lg hover:text-primary">
              About us
            </Link>
          </li>
          <li>
            <Link href="/human-resources" className="manrope-semibold text-lg hover:text-primary">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="manrope-semibold text-lg hover:text-primary">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="contact-button manrope-semibold text-lg hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
