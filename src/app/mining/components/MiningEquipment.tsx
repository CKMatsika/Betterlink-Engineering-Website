'use client';

import React from 'react';

interface EquipmentItem {
  title: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

const equipment: EquipmentItem[] = [
  {
    title: 'Mining Processing Plants',
    description:
      'Complete mining processing plant design, fabrication and installation for gold, chrome and other mineral extraction operations. Built to handle the specific ore characteristics and throughput requirements of your operation.',
    tags: ['Gold Processing', 'Chrome Processing', 'Custom Design', 'Full Installation'],
    highlight: true,
  },
  {
    title: 'Trommels & Screening Plants',
    description:
      'Rotary trommel screens and screening plants for alluvial gold and mineral separation. Designed for durability in harsh mining environments with easy maintenance access.',
    tags: ['Alluvial Gold', 'Mineral Separation', 'Rotary Screens', 'Heavy Duty'],
  },
  {
    title: 'Gold Wash Plants',
    description:
      'Complete gold wash plant systems for small and medium scale alluvial gold mining. Includes sluice boxes, concentrators and water recycling systems optimised for Zimbabwe\'s mining conditions.',
    tags: ['Alluvial Gold', 'Sluice Systems', 'Concentrators', 'Water Recycling'],
  },
  {
    title: 'Chrome Wash Plants',
    description:
      'Chrome ore washing and beneficiation plants designed for Zimbabwe\'s chrome mining sector. Efficient separation and concentration systems for small to medium scale chrome operations.',
    tags: ['Chrome Ore', 'Beneficiation', 'Concentration', 'Small Scale'],
  },
  {
    title: 'Custom Mining Equipment',
    description:
      'Bespoke mining equipment fabricated to your exact specifications. From custom conveyors and hoppers to specialised processing components — engineered for your specific mining operation.',
    tags: ['Bespoke Fabrication', 'Conveyors', 'Hoppers', 'Specialised Components'],
  },
  {
    title: 'Industrial Boilers for Mining',
    description:
      'High and low pressure boilers specifically configured for mining applications — powering processing plants, heating systems and industrial processes at mine sites across Zimbabwe.',
    tags: ['High Pressure', 'Low Pressure', 'Mine Site', '500KG & 1 Ton'],
  },
];

export default function MiningEquipment() {
  return (
    <section className="py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#E87B1E]" />
            <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
              Equipment &amp; Plants
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight tracking-tight">
              Processing Plants &amp;{' '}
              <span className="text-[#E87B1E]">Custom Equipment</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Tailored solutions for Zimbabwe&apos;s gold, chrome and mineral mining sector.
              Gold &amp; Chrome Wash Plants · Trommels · Custom Mining Equipment designed
              specifically for small and medium scale mining operations.
            </p>
          </div>
        </div>

        {/* Equipment grid — asymmetric bento */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {equipment.map((item, index) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl border p-7 transition-all duration-400 card-hover ${
                item.highlight
                  ? 'md:col-span-2 lg:col-span-1 border-[#E87B1E]/25 bg-gradient-to-br from-[#E87B1E]/8 to-transparent'
                  : 'border-white/8 bg-white/3 hover:border-[#E87B1E]/20'
              }`}
            >
              {/* Number */}
              <div className="text-[0.6rem] font-800 tracking-[0.3em] uppercase text-white/20 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="font-display text-white font-700 text-xl mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{item.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[0.65rem] font-700 tracking-wider uppercase px-3 py-1 rounded-full border ${
                      item.highlight
                        ? 'border-[#E87B1E]/30 bg-[#E87B1E]/10 text-[#E87B1E]'
                        : 'border-white/10 bg-white/5 text-white/50 group-hover:border-[#E87B1E]/20 group-hover:text-[#E87B1E]/70 transition-colors duration-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              {!item.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E87B1E]/50 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 p-8 rounded-2xl border border-[#E87B1E]/20 bg-[#E87B1E]/5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-display font-700 text-xl mb-2">
                Need Custom Mining Equipment?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We design and fabricate bespoke mining equipment to your exact specifications.
                Contact our engineering team to discuss your requirements.
              </p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5"
            >
              Enquire Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
