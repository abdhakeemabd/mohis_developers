import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Mohis Developers – Book a Discovery Call',
  description:
    'Get in touch with Mohis Developers for custom home construction, civil infrastructure builds, or digital IT software solutions. Book a consultation call today.',
  keywords: [
    'Contact Mohis Developers',
    'book consultation Mohis Developers',
    'construction consultation Kerala',
    'software development inquiry',
    'Mohis Developers office address',
    'phone contact Mohis Developers',
  ],
  openGraph: {
    title: 'Contact Us | Mohis Developers',
    description:
      'Schedule a consultation for your civil infrastructure or digital software project.',
    url: 'https://mohisdevelopers.com/contact',
    siteName: 'Mohis Developers',
    images: [
      {
        url: '/work/15.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Mohis Developers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Mohis Developers',
    description:
      'Book a discovery call with Mohis Developers.',
    images: ['/work/15.webp'],
  },
  alternates: {
    canonical: 'https://mohisdevelopers.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
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
            '@type': 'ContactPage',
            name: 'Contact Mohis Developers',
            url: 'https://mohisdevelopers.com/contact',
            mainEntity: {
              '@type': 'Organization',
              name: 'Mohis Developers',
              telephone: '+91-97452-57040',
              email: 'contact@mohisdevelopers.com',
            },
          }),
        }}
      />
      {children}
    </>
  );
}
