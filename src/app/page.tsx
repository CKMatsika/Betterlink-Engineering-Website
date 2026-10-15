import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import CapabilitiesSection from '@/app/components/CapabilitiesSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import MethodologySection from '@/app/components/MethodologySection';
import WhyBetterlinkSection from '@/app/components/WhyBetterlinkSection';
import HomeCTASection from '@/app/components/HomeCTASection';

export const metadata: Metadata = {
  title: 'Betterlink Engineering — Engineering Technology That Solves Real Business Problems',
  description:
    'Betterlink Engineering delivers software engineering, AI solutions, cybersecurity, ERP transformation, systems integration and ICT consulting for organisations across Africa.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <MethodologySection />
        <WhyBetterlinkSection />
        <HomeCTASection />
      </main>
      <Footer />
    </>
  );
}