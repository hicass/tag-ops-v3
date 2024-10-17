import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen justify-center items-center -mt-24">
      <h2 className="mt-2 text-center text-xl md:text-2xl">
        What your looking for doesn't exist
      </h2>
      <p className="md:text-lg">Could not find requested resource</p>
      <Link
        href="/"
        className="mt-4 underline underline-offset-2 hover:text-primary md:text-lg"
      >
        Return Home
      </Link>
    </main>
  );
}
