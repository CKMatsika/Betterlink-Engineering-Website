import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import OpeningFilm from '@/app/components/OpeningFilm';
import VisionSection from '@/app/components/VisionSection';
import GroupStructureSection from '@/app/components/GroupStructureSection';
import ManifestoSection from '@/app/components/ManifestoSection';
import EcosystemSection from '@/app/components/EcosystemSection';
import MilestonesSection from '@/app/components/MilestonesSection';
import ApproachSection from '@/app/components/ApproachSection';
import LeadershipSection from '@/app/components/LeadershipSection';
import HomeCTASection from '@/app/components/HomeCTASection';

export const metadata: Metadata = {
  title: 'Betterlink Industries — Technology, Mining, Energy & Construction',
  description:
    'Betterlink Industries is a Zimbabwean multi-disciplinary industrial group delivering technology & software, heavy mining machinery, utility solar energy, and base station civil infrastructure across Africa.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw',
  },
};

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <OpeningFilm />
        <VisionSection />
        <GroupStructureSection />
        <ManifestoSection />
        <EcosystemSection />
        <MilestonesSection />
        <ApproachSection />
        <LeadershipSection />
        <HomeCTASection />
      </main>
      <Footer />
    </>
  );
}
