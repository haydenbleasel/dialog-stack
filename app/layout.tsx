import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const title = 'Dialog Stack';
const description = 'Composable stacked dialogs for shadcn/ui.';
const author = 'Hayden Bleasel';
const twitterHandle = '@haydenbleasel';

export const metadata: Metadata = {
  title,
  description,
  applicationName: title,
  authors: [{ name: author, url: 'https://www.haydenbleasel.com' }],
  creator: author,
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title,
  },
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: title,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: twitterHandle,
  },
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
