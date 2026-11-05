'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Architect & Feasibility',
    subtitle: 'Front-End Engineering Design (FEED)',
    description:
      'Every project begins with rigorous technical scoping, structural modeling, environmental impact assessments, and statutory compliance verification. We quantify risk, define exact tolerances, and validate commercial viability prior to fabrication.',
    points: [
      'Geotechnical & structural analysis',
      'Statutory permitting & compliance',
      'Financial & energy yield modeling',
    ],
  },
  {
    number: '02',
    title: 'Fabricate & Construct',
    subtitle: 'Precision Manufacturing & Site Civils',
    description:
      'Execution under certified ASME and regional engineering codes. High-tolerance boiler plate rolling, automated submerged arc welding, clean telecom civil trenching, and agile software development monitored by certified QA/QC inspectors.',
    points: [
      'Non-destructive testing (NDT)',
      'High-grade steel fabrication',
      'Precision site civil works',
    ],
  },
  {
    number: '03',
    title: 'Commission & Support',
    subtitle: 'Operational Sign-Off & Lifecycle SLAs',
    description:
      'Comprehensive cold and hot commissioning under live load conditions. We secure final regulatory sign-off, provide hands-on operator training, and establish ongoing predictive maintenance agreements for long-term operational resilience.',
    points: [
      'Statutory inspector sign-off',
      'Operator handover & manualization',
      'Predictive maintenance & SLA support',
    ],
  },
];

export default function ApproachSection() {
  return (
    <section
      className="section wrap border-b border-[#dce2e9] bg-white"
      id="approach"
      aria-labelledby="approach-title"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
        <div className="lg:col-span-6">
          <p className="eyebrow">05 / Operational methodology</p>
          <h2
            id="approach-title"
            className="text-[#071529] text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            A considered path.
            <br />
            <span className="font-semibold text-[#071529]">A disciplined execution.</span>
          </h2>
        </div>
        <div className="lg:col-span-6">
          <p className="text-[#606a78] text-[clamp(1.0625rem,1.35vw,1.3rem)] leading-relaxed font-normal">
            From initial geotechnical and software architecture to plant commissioning and
            life-of-asset support, our methodology minimizes risk and protects capital.
          </p>
        </div>
      </div>

      {/* Methodology Steps 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border border-[#dce2e9] rounded-lg p-8 sm:p-10 flex flex-col justify-between hover:border-[#e2530b] hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <span className="text-4xl font-light text-[#e2530b] tracking-tight block mb-6">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-[#071529] tracking-tight mb-1">
                {step.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#606a78] mb-5">
                {step.subtitle}
              </p>
              <p className="text-sm text-[#606a78] leading-relaxed mb-6 font-normal">
                {step.description}
              </p>
            </div>

            <ul className="space-y-2 pt-6 border-t border-[#dce2e9] text-xs font-medium text-[#071529]">
              {step.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2530b]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
