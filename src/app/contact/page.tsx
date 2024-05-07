import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="w-full flex flex-col items-center mt-8 p-6 pb-2">
        <h2 className="text-3xl text-primary">Contact</h2>

        <p className="mt-2">
          Fill out this form to start the conversation on how we can best
          support your business. Whether your business is large or small, we're
          here to assist you in achieving your operational goals.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
