import { Metadata } from 'next';

import { client } from '@/sanity/lib/client';
import CaseStudiesDetailPageContent from '@/components/CaseStudies/CaseStudyDetailPage/CaseStudyDetailPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Case Studies',
  description:
    'Discover our success stories showcasing how we streamline operations and cut costs for diverse industries. Read our case studies to learn how custom systems, process optimizations, and cost saving solutions have saved thousands and improved efficiency for our clients.',
};

export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "caseStudy" && slug.current == $slug][0]`;
  const caseStudy = await client.fetch(query, {
    slug: `/case-studies/${params.slug}`,
  });

  return <CaseStudiesDetailPageContent {...caseStudy} />;
}
