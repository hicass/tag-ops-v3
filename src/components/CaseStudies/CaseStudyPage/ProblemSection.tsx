import { FC } from 'react';

import Paragraph from '@/components/Paragraph';

interface ProblemProps {
  problem: string[];
}

const ProblemSection: FC<ProblemProps> = ({ problem }) => {
  return (
    <section className="w-fit flex flex-col items-start gap-6 mx-5 md:mx-0 md:w-2/3 2xl:w-1/2">
      <h2>Problem</h2>

      {problem.map((p, idx) => (
        <Paragraph text={p} key={idx} />
      ))}
    </section>
  );
};

export default ProblemSection;
