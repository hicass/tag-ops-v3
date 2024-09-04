import { FC } from 'react';

import Header from './Header';
import InefficiencySection from './InefficiencySection/InefficiencySection';
import SolutionsSection from './SolutionsSection/SolutionsSection';
import ClientsServed from '../ClientsServed/ClientsServed';
import WavyLine from '../Accents/WavyLine';

export type Service = {
  name: string;
  description: string;
  question: string;
  inefficiencyCosts: InefficiencyCost[];
  solutions: Solution[];
  endingParagraph: string;
}

export type InefficiencyCost = {
  title: string;
  description: string;
}

export type Solution = {
  title: string;
  description: string;
}

interface ServicePageContentProps {
  service: Service;
}

const ServicePageContent: FC<ServicePageContentProps> = ({ service }: ServicePageContentProps) => {
  const { name, description, question, inefficiencyCosts, solutions, endingParagraph } = service;

  return (
    <main className="flex flex-col items-center gap-10 overflow-hidden">
      <Header name={name} description={description} />
      <InefficiencySection question={question} inefficiencyCosts={inefficiencyCosts} />
      <WavyLine />
      <SolutionsSection solutions={solutions} endingParagraph={endingParagraph} />
      <ClientsServed />
    </main>
  );
}

export default ServicePageContent;
