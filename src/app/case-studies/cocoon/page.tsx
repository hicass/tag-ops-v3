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
  title: 'Streamlining Accounts Receivable Operations',
  topCards: [
    'Implemented a new Accounts Receivable system',
    '$25,800 saved per year on Accounts Receivable Labor',
    '90+ Days Overdue invoices dropped from $500,000 to $72,000',
  ],
  logo: {
    logoSrc: '/client-logos/cocoon-logo.png',
    logoAlt: 'Cocoon Logo',
    logoWidth: 535,
    logoHeight: 87,
    logoLink: 'https://www.cocoon.com/',
  },
  snapshot: {
    industry: 'Leave Management Software',
    location: 'San Francisco, CA',
    companySize: '68',
    yearFounded: '2020',
    solution: 'AR software implementation + AR data cleanup',
    description:
      'Cocoon Leave Management is a simple and efficient platform that makes managing employee leave easy. It streamlines the process for both employees and employers, ensuring smooth operations, compliance, and reducing administrative tasks, so everyone can focus on what matters most, the leave itself.',
  },
  problem: [
    'Cocoon partnered with Tag Ops to manage and optimize their Accounts Receivable and Accounts Payable functions. From issuing invoices and answering customer queries to paying bills and vendor management, Tag Ops served as a fractional and embedded team member.',
    'After running existing processes after the first few months, Tag Ops advised that they could be optimized. The invoicing process was manual, slow, and inefficient - not to mention, unscalable! There was no system to track customer contracts, statuses, and contract or billing changes. Additionally, there was no process to reconcile payments with invoices, leading to $500k in invoices overdue and aged over 90 days.',
  ],
  results: [
    'Within the first three months, Tag Ops implemented a more automated interim solution to calculate and track invoices while they worked with Cocoon to find a more scalable system for their AR needs. This interim solution saved Cocoon 40 hours per month that would’ve been spent on the manual invoicing process, equaling $23,400 a year in payroll expenses.',
    'Tag Ops then researched the best systems to run a fully automated AR process from, found a system that fit their needs, and implemented the system from there. This system not only tracked customer pricing, calculated their invoices, and led to optimized reporting; but it also ran an automated dunning process and reconciled payments made with outstanding invoices automatically. The implementation of this system saved another $2,400 a year on labor and ensured accuracy, efficiency, and scalability for the AR team.',
    'Lastly, in the three months following the implementation, Tag Ops was able to audit and reconcile the outstanding invoices, getting their 90+ aged invoices to drop from $500,000 to $72,000.',
  ],
  testimonial: {
    name: 'Alice Zheng',
    title: 'Chief of Staff and Director of Operations, Support, and Finance',
    description:
      '"Courtney’s been a pleasure and joy to work with and always very responsive. With a "no task too small" mentality, she has been an incredible resource to us. I would highly recommend her to anyone in need of her services!"',
  },
};

export default function CocoonCaseStudyPage() {
  return <CaseStudyPageContent caseStudy={cocoonCaseStudyData} />;
}
