'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

type Testimonial = {
  name: string;
  title: string;
  description: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Riece Keck',
    title: 'Founder & CEO, Vault Recruiting',
    description:
      '"Courtney, in short, has transformed the back-end operations of our business. She started with bare bones and made an immediate, dramatic impact. She documented processes that improved candidate and internal employee experience, created more reports than I can count that gave excellent insight into our sales function, and fully owned and improved our routine operational pro ',
  },
  {
    name: 'Jolie Curran',
    title: 'Head of Operations, Ejento',
    description:
      '"It is rare to find a talent like Courtney. She is intelligent, proactive, and professional. She tackles projects through thoughtful planning and then executes projects flawlessly. If she doesn\'t know how to do something, she dives into research and figures out a strategy."',
  },
  {
    name: 'David Milner',
    title: 'Head of IT, Celsius Network',
    description:
      '"Working with Courtney was an absolute pleasure. She helped the IT team greatly in our interactions and took responsibility even for items that were not in her field of responsibility and brought them to the next level. We always felt she was a part of the team and her organisational skills are some of the best I have seen. Anyone would be happy to have her work in their company."',
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="flex justify-center bg-accent pb-10">
      <div className="flex flex-col items-center p-6 sm:mt-16 md:w-2/3 2xl:w-1/2">
        <h2 className="text-3xl sm:text-4xl">
          See what our clients are saying...
        </h2>

        <div>
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-accentlight rounded-xl my-10 p-4 drop-shadow"
            >
              <div>
                <p className="text-lg sm:text-xl manrope-bold">
                  {testimonial.name}
                </p>
                <p className="sm:text-lg manrope-semibold">
                  {testimonial.title}
                </p>
              </div>

              <p className="pt-2 sm:text-lg">{testimonial.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
