'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Assessment & Scoping',
    description:
      'We assess your site requirements, operational needs and specifications to determine the right boiler or processing plant solution for your mining operation.',
  },
  {
    number: '02',
    title: 'Design & Engineering',
    description:
      'Our engineering team designs the solution to your exact specifications — whether fabricating a new boiler, designing a processing plant or engineering custom mining equipment.',
  },
  {
    number: '03',
    title: 'Fabrication',
    description:
      'Quality fabrication using appropriate steel and materials. All boilers and equipment are built to relevant safety standards and specifications.',
  },
  {
    number: '04',
    title: 'Transportation & Delivery',
    description:
      'Safe transportation of fabricated equipment to your mine site. We handle all logistics including loading, securing and delivery across Zimbabwe.',
  },
  {
    number: '05',
    title: 'Installation & Commissioning',
    description:
      'Professional on-site installation followed by full commissioning — including pressure testing, safety checks, certification and operator handover.',
  },
  {
    number: '06',
    title: 'Maintenance & Support',
    description:
      'Ongoing scheduled maintenance, emergency repairs, NDT inspections and technical support to keep your equipment running safely and efficiently.',
  },
];

export default function MiningProcess() {
  return (
    <section className="py-28 bg-[#07101F] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E87B1E]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#E87B1E]" />
            <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
              Our Process
            </span>
            <span className="w-8 h-px bg-[#E87B1E]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight tracking-tight mb-4">
            From Enquiry to{' '}
            <span className="text-[#E87B1E]">Operational Equipment</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            A structured engineering process that ensures your boiler or processing plant
            is delivered safely, on time and to specification.
          </p>
        </div>

        {/* Steps — horizontal scroll on mobile, grid on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps?.map((step) => (
            <div
              key={step?.number}
              className="group relative p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-[#E87B1E]/25 transition-all duration-400 card-hover"
            >
              {/* Number */}
              <div className="text-5xl font-display font-800 text-white/6 mb-4 leading-none select-none group-hover:text-[#E87B1E]/15 transition-colors duration-300">
                {step?.number}
              </div>

              {/* Accent line */}
              <div className="w-8 h-0.5 bg-[#E87B1E]/40 mb-4 group-hover:w-12 transition-all duration-300" />

              <h3 className="font-display text-white font-700 text-lg mb-3">{step?.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step?.description}</p>
            </div>
          ))}
        </div>

        {/* Compliance note */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl border border-white/8 bg-white/3">
          <div className="w-10 h-10 rounded-lg bg-[#E87B1E]/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#E87B1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-700 text-sm mb-1">Ministry of Mines Registered</div>
            <div className="text-white/40 text-xs leading-relaxed">
              Betterlink Engineering is registered with the Ministry of Mines for boiler installation,
              commissioning, testing and certification services in Zimbabwe. All work is carried out
              in compliance with applicable safety regulations and standards.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
