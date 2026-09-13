import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Mohis Developers – Project Portfolio & Showcase',
  description:
    "Explore Mohis Developers' completed project portfolio — luxury home interiors, residential exteriors, civil infrastructure builds, and digital IT solutions. 120+ projects delivered across India.",
  keywords: [
    'Mohis Developers portfolio',
    'home interior design projects',
    'residential construction Kerala',
    'luxury bedroom interior design',
    'civil infrastructure projects',
    'exterior home design India',
    'construction company portfolio',
    'home builders portfolio',
    'IT solutions project showcase',
    'software development portfolio India',
  ],
  openGraph: {
    title: 'Our Work | Mohis Developers – Project Portfolio',
    description:
      'Browse 120+ delivered projects including luxury interiors, residential builds, civil infrastructure, and digital IT solutions by Mohis Developers.',
    url: 'https://mohisdevelopers.com/our-work',
    siteName: 'Mohis Developers',
    images: [
      {
        url: '/work/15.webp',
        width: 1270,
        height: 760,
        alt: 'Mohis Developers – Kerala-Style Luxury Residence',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Mohis Developers',
    description:
      "Explore Mohis Developers' portfolio of luxury homes, civil infrastructure projects & digital IT solutions.",
    images: ['/work/15.webp'],
  },
  alternates: {
    canonical: 'https://mohisdevelopers.com/our-work',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Our Work – Mohis Developers Portfolio',
            description:
              'Portfolio showcasing 120+ completed projects by Mohis Developers including luxury home interiors, residential exteriors, civil infrastructure builds, and IT digital solutions.',
            url: 'https://mohisdevelopers.com/our-work',
            author: {
              '@type': 'Organization',
              name: 'Mohis Developers',
              url: 'https://mohisdevelopers.com',
              logo: 'https://mohisdevelopers.com/fav.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-97452-57040',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi', 'Malayalam'],
              },
            },
            about: [
              { '@type': 'Thing', name: 'Home Construction' },
              { '@type': 'Thing', name: 'Interior Design' },
              { '@type': 'Thing', name: 'Civil Engineering' },
              { '@type': 'Thing', name: 'IT Solutions' },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
