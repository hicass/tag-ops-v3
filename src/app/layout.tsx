import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Nav from '@/components/Nav/Nav';

import Provider from '@/context/Provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tag Operations',
  description:
    'Simplify, Optimize, Scale with Tag Operations! Your tech forward, embedded, and flexible back office team!',
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en">
      <Provider session={session}>
        <body suppressHydrationWarning={true} className={inter.className}>
          <Nav />
          {children}
        </body>
      </Provider>
    </html>
  );
}
