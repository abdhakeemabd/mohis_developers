import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Mohis Developers – Civil Engineering & IT Solutions',
  description:
    'Explore 5 core capabilities offered by Mohis Developers: Residential Home Construction, Road Infrastructure, Civil Structures, Custom Software Engineering, and 24/7 IT Support Services.',
  keywords: [
    'Mohis Developers services',
    'home construction services',
    'road infrastructure engineering',
    'civil structure contracting',
    'software development company',
    'IT support services India',
    'hybrid developer services',
  ],
  openGraph: {
    title: 'Our Services | Mohis Developers',
    description:
      'Turnkey physical engineering & custom digital IT solutions designed for 2026 standards.',
    url: 'https://mohisdevelopers.com/services',
    siteName: 'Mohis Developers',
    images: [
      {
        url: '/work/15.webp',
        width: 1200,
        height: 630,
        alt: 'Mohis Developers Core Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Mohis Developers',
    description:
      'Civil construction, interior design, software development, and managed IT services.',
    images: ['/work/15.webp'],
  },
  alternates: {
    canonical: 'https://mohisdevelopers.com/services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Mohis Developers Engineering & IT Services',
            provider: {
              '@type': 'Organization',
              name: 'Mohis Developers',
              url: 'https://mohisdevelopers.com',
            },
            serviceType: [
              'Home Construction',
              'Road Infrastructure',
              'Civil Engineering',
              'Software Development',
              'IT Support Services',
            ],
            areaServed: 'India',
          }),
        }}
      />
      {children}
    </>
  );
}
