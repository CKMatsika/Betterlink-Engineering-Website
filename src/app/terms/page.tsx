import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | Betterlink Engineering',
  description:
    'The terms and conditions governing the use of the Betterlink Engineering website and the services described on it.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/terms',
  },
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: '1. Acceptance of these terms',
    body: (
      <>
        By accessing or using this website you agree to these Terms of Use. If you do not agree with
        them, please do not use the site. These terms apply to your use of the website and do not,
        of themselves, create a contract for engineering services.
      </>
    ),
  },
  {
    heading: '2. About this website',
    body: (
      <>
        This website is operated by Betterlink Engineering and provides information about our
        engineering, industrial, mining and technology services. Content is provided for general
        information only and does not constitute professional, technical or legal advice.
      </>
    ),
  },
  {
    heading: '3. Enquiries and quotations',
    body: (
      <>
        Submitting the enquiry form, or otherwise contacting us, does not create a binding
        agreement. Any engagement is subject to a separate written agreement, specification and
        quotation agreed between you and Betterlink Engineering.
      </>
    ),
  },
  {
    heading: '4. Acceptable use',
    body: (
      <>
        You agree not to misuse this website, including by attempting to gain unauthorised access,
        interfering with its normal operation, submitting false or misleading information, or using
        automated tools to abuse our enquiry system.
      </>
    ),
  },
  {
    heading: '5. Intellectual property',
    body: (
      <>
        Unless otherwise stated, the content, branding, graphics and design of this website are
        owned by or licensed to Betterlink Engineering and may not be reproduced or used without our
        prior written permission.
      </>
    ),
  },
  {
    heading: '6. Limitation of liability',
    body: (
      <>
        While we take care to keep information accurate and current, we make no warranties that the
        website will be uninterrupted, error-free or free of harmful components. To the extent
        permitted by law, we are not liable for any loss arising from reliance on the website
        content or from your use of the site.
      </>
    ),
  },
  {
    heading: '7. Third-party links',
    body: (
      <>
        This website may contain links to third-party sites. Those sites are governed by their own
        terms and privacy practices, and we are not responsible for their content or availability.
      </>
    ),
  },
  {
    heading: '8. Governing law',
    body: (
      <>
        These terms are governed by the laws of Zimbabwe, and any dispute relating to the website is
        subject to the jurisdiction of the Zimbabwean courts.
      </>
    ),
  },
];

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-muted-foreground text-sm font-600 mt-4">
              Last updated: 15 October 2026
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            These terms govern your use of the Betterlink Engineering website. Please read them
            carefully before using the site.
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
              <h2 className="font-display text-xl font-800 text-foreground mb-3">9. Contact us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at{' '}
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
