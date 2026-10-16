import React from 'react';

const GALLERY_URL = 'https://boilertrack.lovable.app/gallery';
const TRACKER_URL = 'https://boilertrack.lovable.app/tracker';

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

interface Highlight {
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    title: 'Boiler Installation',
    description:
      'Professional installation of all boiler types — high and low pressure, 500 KG and 1 Ton.',
  },
  {
    title: 'Commissioning & Testing',
    description: 'Comprehensive performance testing to bring boilers into safe, optimal operation.',
  },
  {
    title: 'Certification',
    description:
      'Official certification meeting all regulatory and Ministry of Mines requirements.',
  },
  {
    title: 'Maintenance & NDT',
    description:
      'Scheduled maintenance and non-destructive testing to keep assets safe and efficient.',
  },
  {
    title: 'Fumes Chimneys',
    description:
      'Custom chimney systems for elution processing, in line with Ministry of Mines standards.',
  },
  {
    title: 'Gensets & Electrical',
    description:
      'Generator set installation, distribution boards, change-over switches and wiring.',
  },
  {
    title: 'BTS Civil, Solar & Electrical',
    description:
      'Tower foundations, PV arrays, inverters and battery banks for telecom base stations.',
  },
  {
    title: '24/7 Support',
    description: 'Rapid-response technical support and emergency call-outs nationwide.',
  },
];

export default function MiningBoilerTrack() {
  return (
    <section className="border-t border-white/8 bg-[#0A1628] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy + links */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#E87B1E]" />
              <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
                BoilerTrack Platform
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-[0.95] tracking-tight mb-6">
              Boiler Engineering <span className="text-[#E87B1E]">&amp; Tracking</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-5">
              Beyond fabrication, Betterlink Engineering delivers complete boiler services — from
              installation, commissioning and certification to maintenance and non-destructive
              testing — backed by our BoilerTracker platform for managing boiler assets, service
              history and compliance records.
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              A multi-disciplinary civil, electrical and mechanical partner serving mining, telecoms
              and industrial operations across Zimbabwe.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={GALLERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,123,30,0.4)]"
              >
                View Boiler Gallery
                <ArrowIcon />
              </a>
              <a
                href={TRACKER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white inline-flex items-center gap-2"
              >
                Open the BoilerTracker App
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right — service highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-5 rounded-xl border border-white/8 bg-white/3 hover:border-[#E87B1E]/25 hover:bg-[#E87B1E]/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E87B1E] flex-shrink-0" />
                  <h3 className="text-white font-700 text-sm leading-tight">{item.title}</h3>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
