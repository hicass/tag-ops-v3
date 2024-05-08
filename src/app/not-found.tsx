import Image from 'next/legacy/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-row h-screen justify-center items-center -mt-24">
      <div className="w-24 h-fit">
        <Image
          src="/logos/full-gear.svg"
          alt="Gear"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      <section className="flex flex-col items-center h-fit md:w-1/3">
        <p className="text-5xl kayak-bold text-primary">Uh Oh!</p>
        <h2 className="mt-2 text-center text-xl md:text-2xl">
          What your looking for doesn't exist
        </h2>
        <p className="md:text-lg">Could not find requested resource</p>
        <Link href="/" className='mt-4 underline underline-offset-2 hover:text-primary md:text-lg'>Return Home</Link>
      </section>
    </main>
  );
}
