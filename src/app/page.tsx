'use client';

import { useSession, signOut } from 'next-auth/react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export default function Home() {
  const { data: session } = useSession();

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <main className="px-6">
        <section className="w-full flex flex-col items-center my-8 py-5">
          <h1 className="secret">Tag Ops</h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-5xl text-primary">
              Simplify, Optimize, Scale with Tag Operations!
            </h1>
            <p className="text-center text-lg py-2">
              Your tech forward, embedded, and flexible back office team!
            </p>
          </div>
        </section>
      </main>
    </LocalizationProvider>
  );
}
