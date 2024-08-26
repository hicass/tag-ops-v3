'use client';

import { FC } from 'react';

import Diagram from './Diagram';
import Paragraph from '@/components/Paragraph';

const introBlurbData = {
  diagramText: [
    "During the early stages of a company, most Founders don't realize how important it is to strategize their tech stack from the beginning. Oftentimes, \"the train is getting built while it's moving\", which is completely understandable when there's little runway and you're just trying to get your footing as a company.",
    'This fast-paced mentality, though, makes it hard to stop and take a look at the strategy behind the growth and scalability of your systems, data, and processes. This oftentimes leads to human error, duplications in data, and multiple sources of truth that lead to confusion, miscommunication, and frustration in your company.',
  ],
  blurb: [
    "That's why we're here! We look at your systems holistically across your company and ensure that the technology and process as well as the data getting captured can be translated across systems and departments. How do we do this? Standardization, Simplification, and data funneling to ensure that your technology speaks to each other, your processes are integrated across systems, and your people understand what to expect and what is expected of them!",
    "We start with a Foundational build to ensure that the basic systems needed to run your company are established and optimized. We ensure that your basic tools are in place and if there’s a need, we can add on other systems as well. If you already have technology in place, we build the rest with what's in place and ensure that it's all fully integrated and optimized.",
    "If you'd like our help in maintaining the systems implemented, we got you! We stay on for a monthly fee as embedded team members to keep your systems afloat and if you want an internal employee to take our place - we can recruit and train them!",
  ],
};

const Intro: FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-6 w-full lg:w-4/5">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 sm:items-center justify-center">
        <Diagram />

        <div className="flex flex-col gap-10 lg:w-1/2">
          {introBlurbData.diagramText.map((text, idx) => (
            <Paragraph text={text} key={idx} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {introBlurbData.blurb.map((text, idx) => (
          <Paragraph text={text} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
