'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      {/* Top Header Eyebrow & Location Indicator */}
      <div className="hero-top pt-6 md:pt-10">
        <p className="eyebrow !mb-0 font-bold text-[#e2530b]">Betterlink Industries (Pvt) Ltd</p>
        <p className="hero-location text-[0.8125rem] text-[#606a78] font-medium tracking-wider uppercase">
          Harare, Zimbabwe · Pan-African Operations
        </p>
      </div>

      {/* Main Massive Editorial Title - getalfa.uk style */}
      <div className="py-12 md:py-16 lg:py-20 max-w-[1300px]">
        <h1
          id="hero-title"
          className="text-[#071529] text-[clamp(2.75rem,7.2vw,6.8rem)] leading-[0.96] tracking-[-0.04em] font-normal"
        >
          Engineering industries.
          <br />
          <span className="font-bold text-[#e2530b] tracking-[-0.035em]">That build Africa.</span>
        </h1>
      </div>

      {/* Bottom Row - Description + Discover Link */}
      <div className="hero-bottom pb-8 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4 border-t border-[#dce2e9]/60">
        <p className="text-[#606a78] text-[clamp(1rem,1.25vw,1.25rem)] leading-relaxed max-w-2xl font-normal">
          Technology. Mining. Energy. Construction &amp; Civils.
          <br className="hidden sm:inline" />
          An integrated multi-disciplinary engineering group driving industrial progress across
          Africa.
        </p>

        <a href="#film" className="text-link group flex-shrink-0">
          <span>Discover the ecosystem</span>
          <span className="transform transition-transform duration-200 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
