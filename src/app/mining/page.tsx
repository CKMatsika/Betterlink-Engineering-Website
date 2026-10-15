import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MiningServices from './components/MiningServices';
import MiningEquipment from './components/MiningEquipment';
import MiningProcess from './components/MiningProcess';
import MiningCTA from './components/MiningCTA';

export const metadata: Metadata = {
  title: 'Mining Division | Betterlink Engineering Zimbabwe',
  description:
    'Betterlink Engineering Mining Division — boiler fabrication, installation, commissioning and maintenance. Mining processing plants, trommels, gold & chrome wash plants for Zimbabwe\'s small and medium scale miners.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/mining',
  },
  openGraph: {
    title: 'Mining Division | Betterlink Engineering Zimbabwe',
    description:
      'Professional boiler fabrication, installation, commissioning, repairs & maintenance. Mining processing plants, trommels, gold & chrome wash plants for Zimbabwe miners.',
    url: 'https://www.betterlinkengineering.co.zw/mining',
  },
};

const milestones = [
  { year: '2010', title: 'Founded', desc: 'Betterlink Engineering established in Zimbabwe with a focus on industrial boiler services.' },
  { year: '2014', title: 'Mining Division', desc: 'Dedicated mining and industrial engineering division launched to serve small and medium scale miners.' },
  { year: '2017', title: 'Ministry Registered', desc: 'Officially registered with the Ministry of Mines for authorised boiler installation and certification.' },
  { year: '2020', title: 'Processing Plants', desc: 'Expanded into full mining processing plant fabrication — trommels, gold and chrome wash plants.' },
  { year: '2024', title: 'Nationwide Coverage', desc: 'Operations spanning all major mining provinces across Zimbabwe with 50+ completed projects.' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Safety First',
    desc: 'Every installation and maintenance operation follows strict safety protocols and Zimbabwe regulatory standards.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Precision Engineering',
    desc: 'NDT-certified fabrication and testing ensures every boiler and processing plant meets exact specifications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Local Expertise',
    desc: 'Deep understanding of Zimbabwe\'s mining landscape — from artisanal operations to large-scale industrial plants.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'End-to-End Service',
    desc: 'From initial assessment and design through fabrication, installation, commissioning and ongoing maintenance.',
  },
];

const capabilities = [
  { label: 'Boiler Fabrication', pct: 95 },
  { label: 'Mining Processing Plants', pct: 90 },
  { label: 'Electrical & Control Systems', pct: 85 },
  { label: 'NDT & Certification', pct: 92 },
  { label: 'Repairs & Maintenance', pct: 98 },
];

const projectPhotos = [
  {
    src: '/assets/images/WhatsApp_Image_2026-10-05_at_8.04.41_AM-1791182438504.jpeg',
    alt: 'Electrical control panel installation — industrial switchgear and wiring completed on site',
    caption: 'Electrical & Control Systems',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-05_at_8.04.40_AM__2_-1791182436859.jpeg',
    alt: 'Boiler fabrication in progress — steel boiler vessel being assembled in workshop',
    caption: 'Boiler Fabrication',
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-10-05_at_8.04.39_AM__1_-1791182447730.jpeg',
    alt: 'Completed boiler loaded on transport truck for delivery to mining site',
    caption: 'Boiler Transportation',
  },
  {
    src: '/assets/images/6b0fe249-a579-4161-8988-4e3adc984c67-0.5008048983456631-1791182470473.jpeg',
    alt: 'Installed mining processing plant with control panel mounted on blue steel structure at operational site',
    caption: 'Processing Plant Installation',
  },
  {
    src: '/assets/images/66677be2-c7c6-47e0-8d10-e408483b7928-1776844328907-zjteup2x3c-1791182474566.jpeg',
    alt: 'Boiler installation at mining site with black shed structure in background',
    caption: 'Boiler Installation',
  },
];

const badges = [
  'Fabrication',
  'Installation',
  'Commissioning',
  'Repairs & Maintenance',
];

export default function MiningPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#07101F]">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-lines-bg opacity-40" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#E87B1E]/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1D6AE5]/8 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-px bg-[#E87B1E]" />
                  <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
                    Mining Division
                  </span>
                </div>

                <h1 className="font-display text-white leading-[0.88] tracking-tight mb-6">
                  <span className="block text-5xl lg:text-6xl xl:text-7xl font-800">Mining Boilers</span>
                  <span className="block text-5xl lg:text-6xl xl:text-7xl font-800 text-[#E87B1E]">&amp; Processing</span>
                  <span className="block text-5xl lg:text-6xl xl:text-7xl font-800">Plants</span>
                </h1>

                <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-lg">
                  500 KG &amp; 1 Ton Boilers — High Pressure &amp; Low Pressure. Betterlink Engineering
                  fabricates, installs, commissions and maintains industrial boilers and mining
                  processing plants for Zimbabwe&apos;s small and medium scale miners.
                </p>

                <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-lg">
                  Ministry of Mines registered engineering services. Authorised boiler installation,
                  testing, certification and maintenance across Zimbabwe.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {badges?.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#E87B1E]/30 bg-[#E87B1E]/10 text-[#E87B1E] text-xs font-700 tracking-widest uppercase"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,123,30,0.4)]"
                  >
                    Get a Quotation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn-outline-white text-[0.75rem]">
                    Discuss Your Project
                  </Link>
                </div>
              </div>

              {/* Right — Logo + stats */}
              <div className="flex flex-col gap-6">
                {/* Logo card — properly positioned at top of right column */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 rounded-2xl bg-[#E87B1E]/15 blur-2xl scale-110" />
                    <div className="relative p-8 rounded-2xl border border-[#E87B1E]/25 bg-white/4 backdrop-blur-sm flex flex-col items-center gap-4">
                      <Image
                        src="/assets/images/image-1791181990629.png"
                        alt="Betterlink Engineering — Mining | Industrial | Engineering Solutions logo"
                        width={280}
                        height={160}
                        className="object-contain w-full h-auto"
                        priority
                      />
                      <div className="w-full h-px bg-[#E87B1E]/20" />
                      <p className="text-white/50 text-xs tracking-[0.2em] uppercase text-center font-600">
                        Mining · Industrial · Engineering Solutions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '500 KG', label: 'Boiler Capacity', sub: 'High & Low Pressure' },
                    { value: '1 TON', label: 'Boiler Capacity', sub: 'High & Low Pressure' },
                    { value: '6+', label: 'Core Services', sub: 'End-to-end capability' },
                    { value: 'ZW', label: 'Ministry Registered', sub: 'Ministry of Mines' },
                  ]?.map((stat) => (
                    <div
                      key={stat?.value + stat?.sub}
                      className="p-5 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-display font-800 text-[#E87B1E] mb-1">{stat?.value}</div>
                      <div className="text-white text-xs font-700 mb-1">{stat?.label}</div>
                      <div className="text-white/40 text-xs">{stat?.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07101F] to-transparent" />
        </section>

        {/* ── Stats bar ── */}
        <section className="border-y border-white/8 bg-white/2">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '10+', label: 'Years Experience' },
                { value: '6', label: 'Core Services' },
                { value: 'ZW', label: 'Ministry Registered' },
              ]?.map((s) => (
                <div key={s?.label} className="text-center">
                  <div className="text-4xl font-display font-800 text-[#E87B1E] mb-1">{s?.value}</div>
                  <div className="text-white/50 text-xs font-600 tracking-widest uppercase">{s?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MiningServices />
        <MiningEquipment />
        <MiningProcess />

        {/* ── Who We Are ── */}
        <section className="border-t border-white/8 max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#E87B1E]" />
                <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">Who We Are</span>
              </div>
              <h2 className="font-display text-white text-4xl lg:text-5xl font-800 leading-[0.92] mb-6">
                Built for Zimbabwe&apos;s<br />
                <span className="text-[#E87B1E]">Mining Industry</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                The Betterlink Engineering Mining &amp; Industrial division was established to address
                a critical gap in Zimbabwe&apos;s mining sector — the need for locally-based, technically
                capable engineering services that understand the unique challenges of small and medium
                scale mining operations.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                We fabricate, install, commission and maintain 500 KG and 1 Ton boilers — both high
                pressure and low pressure configurations — along with full mining processing plants
                including trommels, gold wash plants and chrome wash plants.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Our team of certified engineers and technicians brings deep field experience across
                Zimbabwe&apos;s major mining provinces, ensuring rapid response times and solutions
                engineered for local conditions.
              </p>
            </div>

            {/* Capability bars */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#E87B1E]" />
                <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">Core Capabilities</span>
              </div>
              {capabilities?.map((cap) => (
                <div key={cap?.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70 text-sm font-600">{cap?.label}</span>
                    <span className="text-[#E87B1E] text-sm font-700">{cap?.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#E87B1E] to-[#F5A623]"
                      style={{ width: `${cap?.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="border-t border-white/8 bg-white/2 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#E87B1E]" />
                <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">Our Values</span>
                <span className="w-8 h-px bg-[#E87B1E]" />
              </div>
              <h2 className="font-display text-white text-4xl font-800 leading-tight">
                What Drives Our Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values?.map((v, i) => (
                <div
                  key={v?.title}
                  className={`p-7 rounded-xl border border-white/8 bg-white/3 hover:border-[#E87B1E]/30 hover:bg-[#E87B1E]/5 transition-all duration-300 ${i === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E87B1E]/15 flex items-center justify-center text-[#E87B1E] mb-5">
                    {v?.icon}
                  </div>
                  <h3 className="text-white font-700 text-base mb-2">{v?.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project Gallery ── */}
        <section className="border-t border-white/8 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#E87B1E]" />
              <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">Our Work</span>
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-800 leading-[0.92] mb-4">
              Project <span className="text-[#E87B1E]">Gallery</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-2xl">
              A selection of completed projects across Zimbabwe — from boiler fabrication and transportation
              to full processing plant installations and electrical control systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectPhotos?.map((photo, i) => (
                <div
                  key={photo?.src}
                  className={`group relative overflow-hidden rounded-xl border border-white/8 bg-white/3 hover:border-[#E87B1E]/40 transition-all duration-300 ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={photo?.src}
                      alt={photo?.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E87B1E]/20 border border-[#E87B1E]/30 text-[#E87B1E] text-xs font-700 tracking-wider uppercase">
                      {photo?.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="border-t border-white/8 bg-white/2 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-12">
              <span className="w-8 h-px bg-[#E87B1E]" />
              <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">Our Journey</span>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {milestones?.map((m, i) => (
                <div
                  key={m?.year}
                  className={`relative p-6 rounded-xl border transition-all duration-300 hover:border-[#E87B1E]/40 ${
                    i % 2 === 0
                      ? 'border-[#E87B1E]/20 bg-[#E87B1E]/5 mt-0'
                      : 'border-white/8 bg-white/3 mt-8'
                  }`}
                >
                  <div className="text-[#E87B1E] font-display font-800 text-2xl mb-2">{m?.year}</div>
                  <div className="text-white font-700 text-sm mb-2">{m?.title}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{m?.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MiningCTA />
      </main>
      <Footer />
    </>
  );
}
