'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';
import { Testimonial } from '../CaseStudiesPageContent';

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialSection: FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <section className="w-fit flex flex-col items-start gap-6 mx-5 md:mx-0 md:w-2/3 2xl:w-1/2">
      <h2>Testimonial</h2>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{
          amount: 0.2,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-accentlight rounded-xl p-4 drop-shadow"
      >
        <div>
          <p className="txt-lg-bold">{testimonial.name}</p>
          <p className="txt-rg-semibold">{testimonial.title}</p>
        </div>

        <p className="pt-2 txt-rg text-text/80">{testimonial.body}</p>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
