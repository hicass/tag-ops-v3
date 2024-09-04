import { Metadata } from 'next';

import ContactForm from '@/components/ContactForm/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tag Operations | Contact',
  description:
    "Get in touch with Tag Ops to explore tailored solutions for your business. Whether large or small, we're here to support your operational goals. Fill out the form or email us at tag@tagoperations.com to start the conversation.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center mt-2 md:flex-row md:items-start md:justify-center">
      <section className="w-full flex flex-col items-center mt-8 p-6 pb-2 md:w-1/2 lg:w-1/3 md:items-start">
        <h2>Contact</h2>

        <div className="flex flex-col">
          <p className="mt-2 txt-rg md:mt-4">
            Fill out this form to start the conversation on how we can best
            support your business. Whether your business is large or small,
            we're here to assist you in achieving your operational goals.
          </p>
          <Link
            href="mailto: tag@tagoperations.com"
            className="mt-4 underline underline-offset-2 hover:text-primary txt-rg"
          >
            tag@tagoperations.com
          </Link>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
