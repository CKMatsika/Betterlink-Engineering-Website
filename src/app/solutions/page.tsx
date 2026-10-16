import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SolutionsHero from '@/app/solutions/components/SolutionsHero';
import SoftwareEngineeringSection from '@/app/solutions/components/SoftwareEngineeringSection';
import AISection from '@/app/solutions/components/AISection';
import CybersecuritySection from '@/app/solutions/components/CybersecuritySection';
import ERPSection from '@/app/solutions/components/ERPSection';
import SystemsIntegrationSection from '@/app/solutions/components/SystemsIntegrationSection';
import ConsultingSection from '@/app/solutions/components/ConsultingSection';
import IndustriesSection from '@/app/solutions/components/IndustriesSection';
import SolutionsCTA from '@/app/solutions/components/SolutionsCTA';

export const metadata: Metadata = {
  title: 'Solutions — Software, AI, Cybersecurity, ERP | Betterlink Engineering',
  description:
    'Explore Betterlink Engineering solutions: custom software development, AI/ML, cybersecurity and penetration testing, ERP transformation, systems integration and technology consulting for Africa.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SolutionsHero />
        <SoftwareEngineeringSection />
        <AISection />
        <CybersecuritySection />
        <ERPSection />
        <SystemsIntegrationSection />
        <ConsultingSection />
        <IndustriesSection />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  );
}
