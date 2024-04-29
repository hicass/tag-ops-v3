'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

import { getLatest } from '../utilities/post-handler';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export default function Home() {
  const { data: session } = useSession();

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <main>
        <h1>Tag Ops</h1>
      </main>
    </LocalizationProvider>
  );
}
