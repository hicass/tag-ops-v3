import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/context/Provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Parcae',
  description: "Because sometimes it feels like i'm cheating fate",
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
          {children}
        </body>
      </Provider>
    </html>
  );
}
