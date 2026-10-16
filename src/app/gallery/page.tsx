import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryHero from './components/GalleryHero';
import GalleryGrid from './components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Project Gallery | Betterlink Engineering Zimbabwe',
  description:
    "Browse Betterlink Engineering's portfolio of completed projects — boiler fabrication, mining processing plants, industrial installations, and engineering works across Zimbabwe.",
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/gallery',
  },
  openGraph: {
    title: 'Project Gallery | Betterlink Engineering Zimbabwe',
    description:
      'Completed boiler fabrication, mining processing plants, industrial installations and engineering works by Betterlink Engineering across Zimbabwe.',
    url: 'https://www.betterlinkengineering.co.zw/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
