import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact — Request a Consultation | Betterlink Engineering',
  description:
    'Have a technology challenge? Contact Betterlink Engineering to discuss software development, AI, cybersecurity, ERP implementation or systems integration for your organisation.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero />
        <section className="py-16 bg-background" aria-label="Contact details and enquiry form">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <ContactInfo />
              </div>
              <div className="lg:col-span-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}