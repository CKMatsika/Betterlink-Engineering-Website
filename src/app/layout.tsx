import React from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import '../styles/tailwind.css';

// Manrope variable font, self-hosted (latin subset) so the app no longer
// fetches from Google Fonts at build/runtime. A single woff2 covers 200–800.
const manrope = localFont({
  src: [{ path: './fonts/manrope-latin.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1628',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.betterlinkengineering.co.zw'),
  title: 'Betterlink Engineering — Technology & Digital Transformation',
  description:
    'Betterlink Engineering delivers software engineering, AI solutions, cybersecurity, ERP transformation, systems integration and ICT consulting for organisations in Africa.',
  keywords: [
    'Software Development Zimbabwe',
    'AI Solutions Zimbabwe',
    'Cybersecurity Zimbabwe',
    'ERP Implementation Zimbabwe',
    'Systems Integration Zimbabwe',
    'Digital Transformation Zimbabwe',
    'ICT Consulting Africa',
  ],
  authors: [{ name: 'Betterlink Engineering', url: 'https://www.betterlinkengineering.co.zw' }],
  openGraph: {
    title: 'Betterlink Engineering — Technology & Digital Transformation',
    description:
      'Software Engineering, AI/ML, Cybersecurity, ERP Transformation and Systems Integration for Africa.',
    url: 'https://www.betterlinkengineering.co.zw',
    siteName: 'Betterlink Engineering',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Betterlink Engineering',
      },
    ],
    locale: 'en_ZW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Betterlink Engineering',
    description: 'Engineering Technology That Solves Real Business Problems.',
    images: ['/assets/images/app_logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.betterlinkengineering.co.zw/#organization',
      name: 'Betterlink Engineering',
      url: 'https://www.betterlinkengineering.co.zw',
      logo: 'https://www.betterlinkengineering.co.zw/assets/images/app_logo.png',
      description:
        'Betterlink Engineering delivers software engineering, AI solutions, cybersecurity, ERP transformation, systems integration and ICT consulting for organisations across Africa.',
      email: 'info@betterlinkengineering.co.zw',
      areaServed: 'ZW',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'General Enquiries',
          email: 'info@betterlinkengineering.co.zw',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Sales',
          email: 'sales@betterlinkengineering.co.zw',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Support',
          email: 'support@betterlinkengineering.co.zw',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.betterlinkengineering.co.zw/#website',
      name: 'Betterlink Engineering',
      url: 'https://www.betterlinkengineering.co.zw',
      publisher: { '@id': 'https://www.betterlinkengineering.co.zw/#organization' },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
