import { Metadata } from 'next';

import CaseStudyPageContent, {
  CaseStudy,
} from '@/components/CaseStudies/CaseStudyPage/CaseStudyPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Diversity Zoom',
  description:
    'Discover how our operations consulting services helped a recruiting agency save $13,992 per year with a scalable, custom Applicant Tracking System (ATS) and optimized onboarding process. Learn about our solutions for process efficiency and cost reduction.',
};

const diversityZoomCaseStudyData: CaseStudy = {
  title: 'A Scalable ATS',
  topCards: [
    'A documented onboarding process for the recruiting team',
    '$13,992 saved per year with a new system implementation',
    'A new client and recruiter interface of the candidate pipeline',
  ],
  logo: {
    logoSrc: '/client-logos/diversity-zoom-logo.png',
    logoAlt: 'Diversity Zoom Logo',
    logoWidth: 1600,
    logoHeight: 320,
    logoLink: 'https://www.diversityzoom.com/',
  },
  snapshot: {
    industry: 'Recruiting, Staffing, and HR',
    location: 'Oakland, CA',
    companySize: '6',
    yearFounded: '2024',
    solution: 'ATS Implementation + Process Optimization',
    description:
      'Diversity Zoom is a recruiting agency that launched in 2024 with the goal of advocating and lifting up minorities in the venture capital ecosystem. With their collective recruiter network, they’re on a mission to revolutionize talent acquisition and HR, envisioning a future where diversity is the bedrock of innovation.',
  },
  problem: [
    'Diversity Zoom partnered with Tag Ops initially to build out their Recruiter onboarding process. As an early stage company, they didn’t have any software or processes in place and were beginning to build these out to allow for scalability.',
    'Together, we quickly discovered that we also needed to build out a system for them to partner with their recruiters through to capture candidates, submit them to jobs, and to track their progress through the interviewing pipeline. Creating a system through spreadsheets wasn’t scalable and implementing an expensive prebuilt Applicant Tracking System (ATS) wasn’t in their budget.',
  ],
  results: [
    'Within three months, Tag Ops implemented a customized and automated ATS and process for Diversity Zoom to work with their recruiting team in. This system allowed for their external recruiting team to submit candidates to a job via a form that would automatically translate into their database to then be tracked as they moved through the recruitment pipeline. The system also allowed for a client and recruiter interface to gain full visibility into their relevant jobs and candidates.',
    'This system was built with scalability in mind. With the assumption that one Diversity Zoom recruiter sources 150 candidates per month, this base system would allow for up to 10 recruiters for 3 years on the base monthly plan which costs $24/month ($288/year). With a cheap and quick upgrade of $54/month ($648/year), the system can scale to up to 25 recruiters for 3 years until another upgrade or migration would be needed. The data structure in this system is also formatted to ensure a quick and easy migration into a more robust ATS when the budget allows for it.',
    'A prebuilt ATS costs at least $109 per seat. If Diversity Zoom subscribed to a prebuilt ATS, they’d be paying $1,190  each month ($14,280/year) for 10 recruiters. In implementing this custom build system, Diversity Zoom will save a minimum of $13,992 per year, or $41,976 until they would need to upgrade systems.',
  ],
  testimonial: {
    name: 'Chris Chen',
    title: 'Chief of Operations',
    description:
      '“Courtney / Tag Ops more than delivered on her engagement with DiversityZoom. As a small business owner, we were impressed with the structure, speed, and strategic mindset provided as early as the discovery call, through to the final deliverables. Working with Tag Ops resulted in immediate impact in our P&L and business roadmap, and a lot of "oh, that\'s cool" from our executive team in response to suggested solutions. We appreciated how Courtney / TagOps took the time to maintain project timelines and incorporate continuous feedback throughout the engagement. We plan to work with TagOps for our future needs, and wholeheartedly recommend TagOps.”',
  },
};

export default function AboutPage() {
  return <CaseStudyPageContent caseStudy={diversityZoomCaseStudyData} />;
}
