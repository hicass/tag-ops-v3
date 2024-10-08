'use client';

import { FC } from 'react';

import Diagram from './Diagram';
import Paragraph from '@/components/Paragraph';

const introBlurbData = {
  blurb: [
    "We look at your systems holistically across your company and ensure that the technology and process as well as the data getting captured can be translated across systems and departments. How do we do this? Standardization, Simplification, and data funneling to ensure that your technology speaks to each other, your processes are integrated across systems, and your people understand what to expect and what is expected of them!",
    "We start with a Foundational build to ensure that the basic systems needed to run your company are established and optimized. We ensure that your basic tools are in place and if there’s a need, we can add on other systems as well. If you already have technology in place, we build the rest with what's in place and ensure that it's all fully integrated and optimized.",
    "If you'd like our help in maintaining the systems implemented, we got you! We stay on for a monthly fee as embedded team members to keep your systems afloat and if you want an internal employee to take our place - we can recruit and train them!",
  ],
};

const Intro: FC = () => {
  return (
    <div className="flex flex-col items-center gap-12 mb-20 px-6 w-full md:w-2/3 2xl:w-1/2">
      <Diagram />

      <div className="flex flex-col gap-10">
        {introBlurbData.blurb.map((text, idx) => (
          <Paragraph text={text} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
