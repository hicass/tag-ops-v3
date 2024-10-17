import { Metadata } from 'next';
import { client } from "@/sanity/lib/client";

import LandingPageContent from "@/components/LandingPage/LandingPageContent";

export const metadata: Metadata = {
  title: 'Tag Operations',
  description:
    'Tag Operations specializes in operational support and consulting, offering tailored back-office solutions to help businesses streamline operations, reduce costs, and achieve scalable growth. Discover how our expert team can transform your processes with reliable systems and insightful strategies. Partner with us to simplify, optimize, and scale your operations effectively.',
};

export default async function LandingPage() {
  const LandingPageData = await client.fetch(`*[_type == "landingPage"][0]`);

  return (
    <LandingPageContent LandingPageData={LandingPageData} />
  );
}
