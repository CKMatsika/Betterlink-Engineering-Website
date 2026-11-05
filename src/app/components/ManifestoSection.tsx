'use client';

import React from 'react';

export default function ManifestoSection() {
  return (
    <section className="dark-section section wrap" aria-labelledby="manifesto-title">
      <div className="max-w-5xl">
        <p className="eyebrow light">The Betterlink standard</p>
        <h2
          id="manifesto-title"
          className="text-white text-[clamp(2.5rem,6.5vw,5.8rem)] font-light leading-[1.02] tracking-[-0.035em] my-8"
        >
          See beyond the
          <br />
          <span className="font-bold text-[#e2530b]">individual opportunity.</span>
        </h2>
        <div className="pt-6 border-t border-white/15 max-w-2xl">
          <p className="text-white/80 text-[clamp(1.125rem,1.5vw,1.4rem)] leading-relaxed font-normal">
            Look at what happens when industrial machinery, clean renewable power, structural civil
            works, and intelligent software begin to work together. That is the perspective at the
            heart of Betterlink.
          </p>
        </div>
      </div>
    </section>
  );
}
