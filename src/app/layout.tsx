import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mohisdevelopers.com'),
  title: {
    default: 'Mohis Developers | Engineering Physical Foundations. Building Digital Futures.',
    template: '%s | Mohis Developers',
  },
  description:
    'Mohis Developers is a premier modern hybrid developer bridging physical civil engineering (Homes, Interiors, Infrastructure) and cutting-edge digital solutions (Software & IT Services).',
  keywords: [
    'Mohis Developers',
    'Civil Engineering India',
    'Home Construction Kerala',
    'Luxury Interior Design',
    'Road Infrastructure Construction',
    'Software Development Company',
    'IT Solutions & Infrastructure',
    'Hybrid Construction and Tech Firm',
  ],
  authors: [{ name: 'Mohis Developers', url: 'https://mohisdevelopers.com' }],
  creator: 'Mohis Developers',
  publisher: 'Mohis Developers',
  icons: {
    icon: '/fav.png',
    shortcut: '/favicon.png',
    apple: '/fav.png',
  },
  alternates: {
    canonical: 'https://mohisdevelopers.com',
  },
  openGraph: {
    title: 'Mohis Developers | Engineering Physical Foundations. Building Digital Futures.',
    description:
      'Connecting civil engineering excellence with innovative software and IT solutions. Explore our homes, infrastructure builds, and tech services.',
    url: 'https://mohisdevelopers.com',
    siteName: 'Mohis Developers',
    images: [
      {
        url: '/work/15.webp',
        width: 1200,
        height: 630,
        alt: 'Mohis Developers Project Portfolio & Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohis Developers | Engineering Physical Foundations & Digital Futures',
    description:
      'Premier hybrid developer offering civil construction, interior design, and digital IT solutions.',
    images: ['/work/15.webp'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Organization & General Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mohis Developers',
              alternateName: 'Mohis Developers & Tech',
              url: 'https://mohisdevelopers.com',
              logo: 'https://mohisdevelopers.com/fav.png',
              description:
                'Mohis Developers is a hybrid developer offering civil engineering, home construction, interior design, and enterprise software IT solutions.',
              sameAs: [],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              knowsAbout: [
                'Civil Infrastructure',
                'Residential Construction',
                'Interior Design',
                'Software Development',
                'IT Support Services',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Core Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Civil Engineering & Construction',
                      description: 'Home construction, roads, infrastructure development.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Interior Architecture & Design',
                      description: 'Luxury interior turnkey design and execution.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Digital Solutions & Software Engineering',
                      description: 'Custom software development, IT support, and tech consulting.',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased text-navy bg-white selection:bg-gold selection:text-navy">
        {children}
      </body>
    </html>
  );
}

