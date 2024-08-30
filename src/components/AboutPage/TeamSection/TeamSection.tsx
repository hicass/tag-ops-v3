import { FC } from 'react';

import TeamMemberCards from './TeamMemberCards';

const TeamSection: FC = () => {
  return (
    <section className="w-full flex flex-col items-center my-8 p-6 md:w-2/3 2xl:w-1/2">
      <h2 className="flex flex-row items-center gap-2">
        Meet the team!
      </h2>

      <p className="mt-6 txt-md">
        Our Tag Ops team is a dynamic group of experts dedicated to operational
        excellence. With diverse industry backgrounds, we bring a wealth of
        knowledge to every project. We're committed to tailoring solutions to
        your specific needs, from process optimization to strategic guidance.
      </p>

      <div className="flex flex-col w-full mt-8 gap-8">
        <TeamMemberCards />
      </div>
    </section>
  );
};

export default TeamSection;
