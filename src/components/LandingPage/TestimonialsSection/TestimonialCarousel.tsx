import { FC, useRef } from 'react';
import Image from 'next/legacy/image';

import { motion } from 'framer-motion';
import { Testimonial } from './TestimonialsSection';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  const handlePrevClick = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex flex-col-reverse sm:flex-col mt-10">
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-accent to-transparent pointer-events-none z-10"></div>

        <ul
          ref={scrollRef}
          className="flex flex-start overflow-x-auto w-full snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0 }}
              viewport={{
                amount: 0.05,
              }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="snap-center snap-always bg-accentlight mt-4 rounded-xl w-[77vw] sm:w-[70vw] md:w-[55vw] my-10 p-4 mx-2 sm:mx-4 first:ml-4 md:first:ml-10 last:mr-10 drop-shadow shrink-0"
            >
              <div>
                <p className="txt-md-bold">{testimonial.name}</p>
                <p className="txt-rg-semibold">{testimonial.title}</p>
              </div>

              <p className="mt-4 txt-rg text-text/80 ">{testimonial.description}</p>
            </motion.li>
          ))}
        </ul>

        <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-accent to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="hidden md:flex w-full justify-between px-6">
        <button className="w-[50px]" onClick={handlePrevClick}>
          <span className="sr-only">Prev</span>
          <Image
            src="/icons/chevron-left.svg"
            width={30}
            height={30}
            alt={'Chevron'}
            layout="responsive"
          />
        </button>

        <button className="w-[50px]" onClick={handleNextClick}>
          <span className="sr-only">Next</span>
          <Image
            src="/icons/chevron-right.svg"
            width={30}
            height={30}
            alt={'Chevron'}
            layout="responsive"
          />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
