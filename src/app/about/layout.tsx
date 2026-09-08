import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Mohis Developers – Engineering & Tech Vision',
  description:
    'Learn about Mohis Developers — a modern hybrid developer bridging physical civil engineering (Homes, Roads, Infrastructure) and custom software IT systems across India.',
  keywords: [
    'About Mohis Developers',
    'hybrid civil and tech developer',
    'construction company philosophy',
    'engineering and software firm',
    'Mohis Developers team',
  ],
  openGraph: {
    title: 'About Us | Mohis Developers',
    description:
      'Learn about our vision, leadership pillars, and unified physical + digital engineering approach.',
    url: 'https://mohisdevelopers.com/about',
    siteName: 'Mohis Developers',
    images: [
      {
        url: '/work/15.webp',
        width: 1200,
        height: 630,
        alt: 'About Mohis Developers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Mohis Developers',
    description:
      'Engineering physical foundations & building digital futures.',
    images: ['/work/15.webp'],
  },
  alternates: {
    canonical: 'https://mohisdevelopers.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
