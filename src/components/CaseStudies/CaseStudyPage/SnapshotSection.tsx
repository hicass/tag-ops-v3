'use client';

import { FC } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { Logo, Snapshot } from './CaseStudyPageContent';
import Paragraph from '@/components/Paragraph';

interface SnapshotSectionProps {
  snapshot: Snapshot;
  logo: Logo;
}

const SnapshotSection: FC<SnapshotSectionProps> = ({ snapshot, logo }) => {
  return (
    <section className="w-full flex flex-col items-start gap-6 md:w-2/3 2xl:w-1/2">
      <div className="flex flex-col justify-center w-10/12 mx-5 md:mb-10 md:mx-0 sm:w-1/3">
        <Link href={logo.logoLink} target="_blank">
          <img
            src={logo.logoSrc}
            alt={logo.logoAlt}
          />
        </Link>
      </div>

      <div className="w-fit mx-5 md:mx-0">
        <h2>Snapshot</h2>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 mt-4 w-full">
          <div className="flex flex-col gap-1 w-full sm:w-1/3">
            <p className="txt-rg text-text/80">
              <span className="manrope-semibold">Industry:</span>{' '}
              {snapshot.industry}
            </p>
            <p className="txt-rg text-text/80">
              <span className="manrope-semibold">Location:</span>{' '}
              {snapshot.location}
            </p>
            <p className="txt-rg text-text/80">
              <span className="manrope-semibold">Company Size:</span>{' '}
              {snapshot.companySize}
            </p>
            <p className="txt-rg text-text/80">
              <span className="manrope-semibold">Year Founded:</span>{' '}
              {snapshot.yearFounded}
            </p>
            <p className="txt-rg text-text/80">
              <span className="manrope-semibold">Solution:</span>{' '}
              {snapshot.solution}
            </p>
          </div>

          <div className="w-fit sm:w-2/3">
            <Paragraph text={snapshot.description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapshotSection;
