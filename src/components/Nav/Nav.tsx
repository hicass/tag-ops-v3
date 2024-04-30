import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between px-2 py-4">
      <Link href="/">
        <Image
          src="/logos/secondary-logo.svg"
          alt="Tag Ops"
          width={74}
          height={44}
        />
      </Link>

      <div className="flex items-center">
        <ul className="flex flex-row items-center gap-2 ">
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
