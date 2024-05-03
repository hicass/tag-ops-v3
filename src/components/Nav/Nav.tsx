import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between sticky top-0 px-2 py-4 bg-background drop-shadow-lg z-20">
      <Link href="/">
        <Image
          src="/logos/secondary-logo.svg"
          alt="Tag Ops"
          width={74}
          height={44}
        />
      </Link>

      <div className="flex items-center">
        <ul className="flex flex-row items-center gap-3">
          <li>
            <Link href="/about" className="manrope-semibold">About us</Link>
          </li>
          <li>
            <Link href="/human-resources" className="manrope-semibold">Services</Link>
          </li>
          <li>
            <Link href="/blog" className="manrope-semibold">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="manrope-semibold">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
