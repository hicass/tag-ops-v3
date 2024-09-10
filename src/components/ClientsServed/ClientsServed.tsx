'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import Button from '../Button';
import Marquee from './Marquee';

const ClientsServed: FC = () => {
  return (
    <section className="w-full flex flex-col items-center mb-20">
      <div className="flex flex-col items-center my-8 px-6 gap-6 w-full w-1/2 md:w-2/3 2xl:w-1/2">
        <h3 className="text-h2 text-center">Trusted by businesses like you:</h3>

        <Marquee />

        <Button text={"Let's Talk!"} blue={true} href={'/contact'} />
      </div>
    </section>
  );
};

export default ClientsServed;
