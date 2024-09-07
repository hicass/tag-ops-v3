import { Metadata } from 'next';

import CaseStudyPageContent, {
  CaseStudy,
} from '@/components/CaseStudies/CaseStudyPage/CaseStudyPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Diversity Zoom',
  description:
    'Discover how our operations consulting services helped a recruiting agency save $13,992 per year with a scalable, custom Applicant Tracking System (ATS) and optimized onboarding process. Learn about our solutions for process efficiency and cost reduction.',
};

const cocoonCaseStudyData: CaseStudy = {
  title: 'Launching a coffee shop for the interabled community',
  topCards: [
    'Built out the HR department’s software, processes, and policies',
    'Built out the Operations department’s software, processes, and policies',
    'Created a company wiki to house and organize all processes and policies',
  ],
  logo: {
    logoSrc: '/client-logos/mend-logo.png',
    logoAlt: 'Mend Logo',
    logoWidth: 1200,
    logoHeight: 325,
    logoLink: 'https://www.mendcoffee.com/',
  },
  snapshot: {
    industry: 'Hospitality',
    location: 'Atlanta, GA',
    companySize: 'From 0 at the start of the scope to 25 in 2024',
    yearFounded: '2023',
    solution:
      'A built out HR and Operations division including software, processes, and policies',
    description:
      "Mend Coffee & Goods is a welcoming coffee shop in Atlanta, Georgia, dedicated to creating a space of belovedness and belonging, especially for the interabled community. Known for its specialty coffee and locally sourced goods, Mend fosters connections and sustainability within the community. The shop is more than just a place for great coffee—it's a supportive environment where everyone is valued and included. ",
  },
  problem: [
    'During the inception of Mend Coffee & Goods, the company faced significant challenges in its Ops and HR verticals. One major pain point was establishing efficient workflows that balanced the demands of a high-quality coffee service with the shop’s mission of inclusion and community engagement. Staffing posed its own challenges, as Mend aimed to hire a diverse team that reflected its commitment to belovedness and belonging, particularly for the interabled community. This required careful planning around training programs, creating accessible work environments, and fostering a supportive culture from the outset. Additionally, Mend had to navigate the complexities of managing schedules, ensuring compliance with labor laws, and building a cohesive team that could deliver both exceptional service and a welcoming atmosphere. Balancing these operational and HR elements while staying true to their mission was a key challenge in the early stages of Mend’s development.',
  ],
  results: [
    'During the first 6 months of the engagement, the Tag team assisted Mend in creating standard HR workflows and templatizing documentation, such as the recruiting, onboarding, payroll, performance review, and termination processes to ensure consistency and compliance from the start. The Tag team also helped establish a centralized system where all recruiting, performance reviews, and exit feedback were maintained, organized, and tracked through Airtable.',
    'The following 6 months of the engagement, Tag assisted in building out their inventory and vendor tracking systems through Airtable as well as their various Operations, menu, and recipe related checklists and documentation to manage everything from vendor relations, store maintenance, and the event/catering processes.',
  ],
  testimonial: {
    name: 'Liz Simmons',
    title: 'CEO',
    description:
      '“Courtney has been vital to a project in which we helped open an interability coffee shop in Atlanta Georgia, where she was pivotal in all the software integrations, setup policies, procedures, and documentation.”',
  },
};

export default function CocoonCaseStudyPage() {
  return <CaseStudyPageContent caseStudy={cocoonCaseStudyData} />;
}
