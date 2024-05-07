import ContactForm from '@/components/ContactForm/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center mt-2 md:flex-row md:items-start md:justify-center">
      <section className="w-full flex flex-col items-center mt-8 p-6 pb-2 md:w-1/2 lg:w-1/3 md:items-start">
        <h2 className="text-4xl text-primary md:text-5xl">Contact</h2>

        <div className='flex flex-col'>
          <p className="mt-2 md:text-lg md:mt-4">
            Fill out this form to start the conversation on how we can best
            support your business. Whether your business is large or small,
            we're here to assist you in achieving your operational goals.
          </p>
          <Link
            href="mailto: tag@tagoperations.com"
            className="mt-4 underline underline-offset-2 hover:text-primary md:text-lg"
          >
            tag@tagoperations.com
          </Link>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
