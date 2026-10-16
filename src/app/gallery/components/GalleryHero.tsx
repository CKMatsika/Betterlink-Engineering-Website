'use client';

import React from 'react';

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: 'ZW', label: 'Nationwide Coverage' },
];

export default function GalleryHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#07101F]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-lines-bg opacity-40" />

      {/* Glow accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#E87B1E]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-[#1D6AE5]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#E87B1E]" />
            <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
              Our Work
            </span>
          </div>

          <h1 className="font-display text-white leading-[0.9] tracking-tight mb-6">
            <span className="block text-5xl lg:text-6xl xl:text-7xl font-800">Project</span>
            <span className="block text-5xl lg:text-6xl xl:text-7xl font-800 text-[#E87B1E]">
              Gallery
            </span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
            A showcase of completed boiler fabrication, mining processing plants, industrial
            installations and engineering works delivered across Zimbabwe.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {stats?.map((s) => (
              <div key={s?.label} className="flex flex-col">
                <span className="text-3xl font-display font-800 text-[#E87B1E]">{s?.value}</span>
                <span className="text-white/50 text-xs font-600 tracking-widest uppercase mt-1">
                  {s?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#07101F] to-transparent" />
    </section>
  );
}
