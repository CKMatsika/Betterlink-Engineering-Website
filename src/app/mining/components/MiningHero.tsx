'use client';

import React from 'react';
import Link from 'next/link';

const badges = ['Fabrication', 'Installation', 'Commissioning', 'Repairs & Maintenance'];

export default function MiningHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07101F]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-lines-bg opacity-40" />

      {/* Amber/orange accent glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-[#E87B1E]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1D6AE5]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#E87B1E]" />
              <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
                Mining Division
              </span>
            </div>

            <h1 className="font-display text-white leading-[0.88] tracking-tight mb-6">
              <span className="block text-5xl lg:text-6xl xl:text-7xl font-800">
                Mining Boilers
              </span>
              <span className="block text-5xl lg:text-6xl xl:text-7xl font-800 text-[#E87B1E]">
                &amp; Processing
              </span>
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

            {/* Service badges */}
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

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,123,30,0.4)]"
              >
                Get a Quotation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline-white text-[0.75rem]">
                Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Right — stats/highlights panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500 KG', label: 'Boiler Capacity', sub: 'High & Low Pressure' },
              { value: '1 TON', label: 'Boiler Capacity', sub: 'High & Low Pressure' },
              { value: '6+', label: 'Core Services', sub: 'End-to-end capability' },
              { value: 'ZW', label: 'Ministry Registered', sub: 'Ministry of Mines' },
            ]?.map((stat) => (
              <div
                key={stat?.value}
                className="p-6 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm"
              >
                <div className="text-3xl font-display font-800 text-[#E87B1E] mb-1">
                  {stat?.value}
                </div>
                <div className="text-white text-sm font-700 mb-1">{stat?.label}</div>
                <div className="text-white/40 text-xs">{stat?.sub}</div>
              </div>
            ))}

            {/* Wide card */}
            <div className="col-span-2 p-6 rounded-xl border border-[#E87B1E]/20 bg-[#E87B1E]/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E87B1E]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#E87B1E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-700 text-sm mb-1">
                    Tailored for Zimbabwe&apos;s Miners
                  </div>
                  <div className="text-white/50 text-xs leading-relaxed">
                    Gold &amp; Chrome Wash Plants · Trommels · Custom Mining Equipment designed
                    specifically for small and medium scale mining operations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07101F] to-transparent" />
    </section>
  );
}
