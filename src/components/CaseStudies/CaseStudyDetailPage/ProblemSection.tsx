import { FC } from 'react';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { customComponents } from '@/components/BlogPage/BlogDetailPage/Body';

interface ProblemProps {
  problem: PortableTextBlock[];
}

const ProblemSection: FC<ProblemProps> = ({ problem }) => {
  return (
    <section className="w-fit flex flex-col items-start gap-6 mx-5 md:mx-0 md:w-2/3 2xl:w-1/2">
      <h2>Problem</h2>

      <PortableText value={problem} components={customComponents} />
    </section>
  );
};

export default ProblemSection;
