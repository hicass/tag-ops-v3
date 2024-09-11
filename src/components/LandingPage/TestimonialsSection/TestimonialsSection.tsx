'use client';

import { FC } from 'react';

import TestimonialsCarousel from './TestimonialCarousel';

export type Testimonial = {
  name: string;
  title: string;
  description: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Riece Keck',
    title: 'Founder & CEO, Vault Recruiting',
    description:
      '"Courtney, in short, has transformed the back-end operations of our business. She started with bare bones and made an immediate, dramatic impact. She documented processes that improved candidate and internal employee experience, created more reports than I can count that gave excellent insight into our sales function, and fully owned and improved our routine operational processes."',
  },
  {
    name: 'Chris Chen',
    title: 'Chief of Operations',
    description:
      '"Courtney / Tag Ops more than delivered on her engagement with DiversityZoom. As a small business owner, we were impressed with the structure, speed, and strategic mindset provided as early as the discovery call, through to the final deliverables. Working with Tag Ops resulted in immediate impact in our P&L and business roadmap, and a lot of "oh, that\'s cool" from our executive team in response to suggested solutions. We appreciated how Courtney / TagOps took the time to maintain project timelines and incorporate continuous feedback throughout the engagement. We plan to work with TagOps for our future needs, and wholeheartedly recommend TagOps."',
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
  {
    name: 'Alice Zheng',
    title: 'Chief of Staff and Director of Operations, Support, and Finance',
    description:
      '"Courtney’s been a pleasure and joy to work with and always very responsive. With a "no task too small" mentality, she has been an incredible resource to us. I would highly recommend her to anyone in need of her services!"',
  },
  {
    name: 'Liz Simmons',
    title: 'CEO',
    description:
      '“Courtney has been vital to a project in which we helped open an interability coffee shop in Atlanta Georgia, where she was pivotal in all the software integrations, setup policies, procedures, and documentation.”',
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="flex justify-center bg-accent py-20 w-full">
      <div className="flex flex-col items-center md:px-0 w-full md:w-4/5 lg:w-2/3 2xl:w-1/2">
        <h2 className="text-center px-6">See what our clients are saying...</h2>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
