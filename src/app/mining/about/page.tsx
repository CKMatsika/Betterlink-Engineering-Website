import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export default function MiningAboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#07101F]">

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-lines-bg opacity-30" />
          <div className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full bg-[#E87B1E]/8 blur-[140px] pointer-events-none -translate-y-1/2" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-px bg-[#E87B1E]" />
                  <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
                    About the Division
                  </span>
                </div>

                <h1 className="font-display text-white leading-[0.9] tracking-tight mb-6">
                  <span className="block text-5xl lg:text-6xl font-800">Mining &amp;</span>
                  <span className="block text-5xl lg:text-6xl font-800 text-[#E87B1E]">Industrial</span>
                  <span className="block text-5xl lg:text-6xl font-800">Engineering</span>
                </h1>

                <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-lg">
                  Betterlink Engineering&apos;s Mining &amp; Industrial division delivers end-to-end boiler
                  fabrication, processing plant construction and maintenance services tailored for
                  Zimbabwe&apos;s small and medium scale mining sector.
                </p>

                <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-lg">
                  Ministry of Mines registered. NDT-certified. Serving gold, chrome and alluvial
                  mining operations across Zimbabwe since 2014.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/mining"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,123,30,0.4)]"
                  >
                    Our Services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn-outline-white text-[0.75rem]">
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Right — Logo card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-2xl bg-[#E87B1E]/15 blur-2xl scale-110" />
                  <div className="relative p-10 rounded-2xl border border-[#E87B1E]/25 bg-white/4 backdrop-blur-sm flex flex-col items-center gap-6">
                    <Image
                      src="/assets/images/image-1791181990629.png"
                      alt="Betterlink Engineering — Mining | Industrial | Engineering Solutions logo"
                      width={320}
                      height={200}
                      className="object-contain"
                      priority
                    />
                    <div className="w-full h-px bg-[#E87B1E]/20" />
                    <p className="text-white/50 text-xs tracking-[0.2em] uppercase text-center font-600">
                      Mining · Industrial · Engineering Solutions
                    </p>
                  </div>
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

        {/* ── Who We Are ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
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

            {/* Asymmetric bento */}
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

        {/* ── Timeline ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
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
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/8 py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#E87B1E]" />
              <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">Work With Us</span>
              <span className="w-8 h-px bg-[#E87B1E]" />
            </div>
            <h2 className="font-display text-white text-4xl lg:text-5xl font-800 leading-[0.92] mb-6">
              Ready to Start Your<br />
              <span className="text-[#E87B1E]">Mining Project?</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              From boiler fabrication to full processing plant construction — our team is ready to
              deliver engineering solutions built for Zimbabwe&apos;s mining conditions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,123,30,0.4)]"
              >
                Request a Quotation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/mining" className="btn-outline-white text-[0.75rem]">
                View All Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
