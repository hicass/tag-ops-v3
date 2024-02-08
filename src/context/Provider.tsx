'use client';
import { ReactNode } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
    children: ReactNode;
    session: Session | null | undefined; // Define the type for session
}


export default function Provider({ children, session }: ProviderProps) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}
