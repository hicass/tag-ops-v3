import { Metadata } from 'next';

import SerivcePageContent, {
  Service,
} from '@/components/ServicePage/ServicePageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Operations',
  description:
    'Unlock efficiency with Tag Ops. From interdepartmental harmony to software strategization, we optimize operations for success. Streamline processes, minimize costs, and enhance work quality. Explore our solutions in interdepartmental processes, software, inventory management, and project management. Contact us for tailored solutions.',
};

export default function OperationsPage() {
  const service: Service = {
    name: 'Operations',
    description:
      'From interdepartmental harmony to cutting-edge software and inventory management, we help your business thrive in the digital age.',
    question: 'What are the costs of operational Inefficiencies?',
    inefficiencyCosts: [
      {
        title: 'Financial Impact',
        description:
          'Inefficient processes drain revenue and hinder success, especially for small- to medium-sized businesses with narrow margins. External factors like competition and market changes exacerbate the impact. Handling all back-office tasks internally is costly and time-consuming, undermining profitability.',
      },
      {
        title: 'Time Consumption',
        description:
          'Outdated systems lead to prolonged tasks, impeding productivity. Manual processes slow down operations compared to automated ones, putting companies at a disadvantage. Complex procedures result in employees spending more time navigating them, reducing their actual productive hours.',
      },
      {
        title: 'Impact on Work Quality',
        description:
          'Efficient operations uphold work quality, while inefficiencies lead to errors and reduced morale. Automation minimizes mistakes and opens up resources for other goals.',
      },
    ],
    solutions: [
      {
        title: 'Operations Process Documentation',
        description:
          'Tag Ops specializes in establishing interdepartmental process and policy documentation, ensuring cohesive workflows that drive efficiency and unity across your business.',
      },
      {
        title: 'Software Strategization',
        description:
          "Thrive in the ever-evolving tech landscape with our knowledge in scouting, implementing, and training on cutting-edge software that fuels your company's growth.",
      },
      {
        title: 'Inventory Management',
        description:
          "Optimize your processes with Tag Ops' expertise in implementing robust systems and providing tailored solutions to ensure your inventory is managed efficiently.",
      },
      {
        title: 'Information/Change Management',
        description:
          'Upgrade your internal communication and collaboration with our mastery in building customized intranet solutions. We specialize in implementing user-friendly platforms that enhance team connectivity, streamline information sharing, and foster a collaborative work environment.',
      },
      {
        title: 'General Project Management',
        description:
          'Optimize your project endeavors with our specialized project management assistance. Tag Ops brings expertise in planning, execution, and monitoring to ensure your projects are delivered on time and within scope.',
      },
    ],
    endingParagraph:
      'Let us help you standardize, optimize, and document your back office processes. For more information and pricing details, get in touch with us to craft the ideal solution for your business.',
  };

  return <SerivcePageContent service={service} />;
}
