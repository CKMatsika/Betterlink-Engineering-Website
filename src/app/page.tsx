import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import DivisionsSection from '@/app/components/DivisionsSection';
import CapabilitiesSection from '@/app/components/CapabilitiesSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import MethodologySection from '@/app/components/MethodologySection';
import WhyBetterlinkSection from '@/app/components/WhyBetterlinkSection';
import HomeCTASection from '@/app/components/HomeCTASection';

export const metadata: Metadata = {
  title: 'Betterlink Industries — Technology, Mining, Energy & Construction',
  description:
    'Betterlink Industries is a Zimbabwean multi-disciplinary group delivering technology & software, mining & industrial, energy, and construction & civils solutions across Africa.',
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
        <DivisionsSection />
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
