import { Metadata } from 'next';

import SerivcePageContent, { Service } from '@/components/ServicePage/ServicePageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Human Resources',
  description:
    'Elevate your HR operations with Tag Ops. From benefits administration to recruiting, we streamline processes and enhance compliance. Mitigate risks, boost productivity, and optimize talent acquisition. Explore our solutions in benefits administration, HR policy documentation, reporting, recruiting, and employee transitions. Contact us for tailored HR solutions.',
};

export default function HumanResourcesPage() {
  const service: Service = {
    name: 'Human Resources',
    description:
      'From benefits administration to recruiting, we offer expert solutions for your HR needs, ensuring seamless processes and the right people in your organization.',
    question: 'What are the Impacts of Inefficient HR Processes?',
    inefficiencyCosts: [
      {
        title: 'Mismatched Hires',
        description:
          'Neglecting effective recruitment strategies can lead to high turnover costs and a lack of expertise in critical areas, increasing the potential for costly legal issues. Inaccurate assessments of employee requirements necessitate internal adjustments or external hires, incurring significant replacement costs.',
      },
      {
        title: 'Risk of Non-Compliance',
        description:
          "Inefficient HR procedures jeopardize compliance with labor and employment regulations. Neglecting crucial policies such as equal employment opportunity laws and leave benefits can result in costly litigation and damage to the company's reputation, directly impacting finances or indirectly affecting them through reputational damage.",
      },
      {
        title: 'Diminished Employee Engagement and Productivity',
        description:
          'Ineffective HR operations lead to decreased productivity and employee engagement, posing a significant challenge for the organization. Without adequate skill training and efforts to boost morale, employee engagement declines.',
      },
    ],
    solutions: [
      {
        title: 'Benefits Administration',
        description:
          "Optimize your employee benefits with our mastery in managing, enrolling, and overseeing your benefits programs to ensure they align with your organization's goals and meet regulatory requirements.",
      },
      {
        title: 'HR Policy Documentation',
        description:
          'Refine your organizational guidelines with our expert HR policy documentation, including creating and maintaining a detailed employee handbook. We craft comprehensive, compliant policies tailored to your needs.',
      },
      {
        title: 'HR Reporting',
        description:
          'Transform your HR strategy with our reporting. From performance metrics to employee morale insights, we provide comprehensive reports for a holistic view of your workforce.',
      },
      {
        title: 'Recruiting',
        description:
          'Upgrade your talent acquisition strategy with our recruiting expertise. We partner with multiple recruiting agencies to cast a wider net and ensure access to the best talent pool. Lean on Tag Ops to help you navigate the competitive recruitment landscape efficiently and confidently.',
      },
      {
        title: 'Employee Transitions',
        description:
          'Simplify employee transitions with seamless onboarding for new hires to professional and compliant termination processes, ensuring smooth workforce management.',
      },
    ],
    endingParagraph:
      'Let us help you build back office processes, recruit the right people, and train seamlessly. For more information and pricing details, get in touch with us to craft the ideal solution for your business.',
  };

  return <SerivcePageContent service={service} />;
}
