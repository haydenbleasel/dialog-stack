import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dialog Stack',
  description: 'Composable stacked dialogs for shadcn/ui.',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        'touch-manipulation font-sans antialiased'
      )}
    >
      <div className="prose prose-neutral mx-auto px-4 py-16">{children}</div>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
