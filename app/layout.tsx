import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Rajan K K - Master Woodworker | 40 Years of Craftsmanship | Koyilandy, Kerala',
  description: 'Experience four decades of exceptional woodworking craftsmanship in the heart of Kerala. Custom furniture, traditional designs, and modern woodwork by Rajan K K.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-forest-dark text-forest-light overflow-x-hidden`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}