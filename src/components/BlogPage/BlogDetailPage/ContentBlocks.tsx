'use client';

import { FC } from 'react';
import { ContentBlock } from '@/app/blog/[id]/page';

import { motion } from 'framer-motion';

import Paragraph from '@/components/Paragraph';

interface ContentBlocksProps {
  contentBlocks: ContentBlock[];
}

const ContentBlocks: FC<ContentBlocksProps> = ({ contentBlocks }) => {
  return (
    <section className="w-fit flex flex-col items-start gap-10 mx-5 md:mx-0 md:w-2/3 2xl:w-1/2">
      {contentBlocks.map((block, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          {block.title && (
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="txt-lg-bold"
            >
              {block.title}
            </motion.h4>
          )}

          {block.text &&
            block.text.map((text, idx) => <Paragraph text={text} key={idx} />)}
        </div>
      ))}
    </section>
  );
};

export default ContentBlocks;
