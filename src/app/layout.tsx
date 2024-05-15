import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tag Operations',
  description:
    'Tag Operations: Empowering Businesses with Comprehensive Back-Office Solutions. From HR, to Operations, to Finance, we optimize your back-office for efficiency and growth. Customizable support tailored to your needs. Partner with us for scalable, cost-saving strategies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
