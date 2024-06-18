import { FC } from 'react';

import Header from './Header';
import MissionSection from './MissionSection';
import StorySection from './StorySection';
import TeamSection from './TeamSection/TeamSection';
import ClientsServed from '../ClientsServed/ClientsServed';

const AboutPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <Header />
      <MissionSection />
      <StorySection />
      <TeamSection />
      <ClientsServed />
    </main>
  );
}

export default AboutPageContent;
