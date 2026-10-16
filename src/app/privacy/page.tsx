import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Betterlink Engineering',
  description:
    'How Betterlink Engineering collects, uses and protects personal information submitted through this website.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/privacy',
  },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. Introduction',
    body: (
      <>
        Betterlink Engineering (“we”, “us”, “our”) respects your privacy. This policy explains how
        we collect, use, store and protect personal information when you use this website or submit
        an enquiry through it. We handle personal information in line with applicable Zimbabwean
        law, including the Cyber and Data Protection Act [Chapter 12:07].
      </>
    ),
  },
  {
    heading: '2. Information we collect',
    body: (
      <>
        We only collect information that you choose to provide, primarily through our project
        enquiry form. This may include your name, organisation, position, email address, telephone
        number, country, the service you require, an estimated timeline and the description of your
        project. We may also receive basic technical information (such as browser type) that is
        routinely generated when you visit any website.
      </>
    ),
  },
  {
    heading: '3. How we use your information',
    body: (
      <>
        We use your information to respond to your enquiry, prepare quotations, deliver the services
        you request and maintain records of our communications. We do not sell, rent or trade your
        personal information, and we do not use enquiry data for unsolicited marketing.
      </>
    ),
  },
  {
    heading: '4. Sharing and third parties',
    body: (
      <>
        To deliver enquiries by email we use a reputable transactional email provider which
        processes the submitted content on our behalf and only for that purpose. We may also share
        information with service providers who host and support this website. We may disclose
        information where required by law or to protect our legal rights.
      </>
    ),
  },
  {
    heading: '5. Retention',
    body: (
      <>
        We retain enquiry and project correspondence only for as long as necessary to serve you and
        to meet our legal, accounting and reporting obligations. When information is no longer
        required, we take reasonable steps to delete or anonymise it.
      </>
    ),
  },
  {
    heading: '6. Security',
    body: (
      <>
        We apply reasonable technical and organisational measures to protect personal information
        against loss, misuse and unauthorised access. Enquiries are transmitted over an encrypted
        connection. No method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </>
    ),
  },
  {
    heading: '7. Your rights',
    body: (
      <>
        Subject to applicable law, you may request access to the personal information we hold about
        you, ask us to correct or delete it, or object to certain processing. To exercise any of
        these rights, please contact us using the details below.
      </>
    ),
  },
  {
    heading: '8. Cookies',
    body: (
      <>
        This website is designed to function without advertising or tracking cookies. Should we
        introduce analytics or similar features in future, we will update this policy and, where
        required, seek your consent.
      </>
    ),
  },
  {
    heading: '9. Changes to this policy',
    body: (
      <>
        We may update this policy from time to time. The current version will always be available on
        this page, with the effective date shown above.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-background">
        {/* ── Header ── */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-lines-light opacity-60" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-16">
            <span className="section-label">Legal</span>
            <h1 className="font-display text-4xl lg:text-5xl font-800 text-foreground leading-[0.95] tracking-tight mt-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm font-600 mt-4">
              Last updated: 15 October 2026
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            This policy describes how Betterlink Engineering handles the personal information you
            share with us through this website.
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-800 text-foreground mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}

            <div>
              <h2 className="font-display text-xl font-800 text-foreground mb-3">10. Contact us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any privacy question or request, contact us at{' '}
                <a
                  href="mailto:info@betterlinkengineering.co.zw"
                  className="text-accent font-600 hover:underline"
                >
                  info@betterlinkengineering.co.zw
                </a>{' '}
                or use our{' '}
                <Link href="/contact" className="text-accent font-600 hover:underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
