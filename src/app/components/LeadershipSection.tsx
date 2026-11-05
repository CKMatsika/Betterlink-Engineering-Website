'use client';

import React from 'react';

export default function LeadershipSection() {
  return (
    <section
      className="dark-section section wrap"
      id="governance"
      aria-labelledby="governance-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow light">06 / Corporate governance</p>
          <h2
            id="governance-title"
            className="text-white text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            Engineering leadership.
            <br />
            <span className="font-semibold text-[#e2530b]">African execution.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 max-w-2xl">
          <p className="text-white text-[clamp(1.2rem,1.6vw,1.5rem)] font-normal leading-relaxed mb-6">
            Industrial infrastructure demands long-term commitment, uncompromising safety culture,
            and deep alignment with national developmental priorities.
          </p>

          <p className="text-white/70 text-[1.0625rem] leading-[1.75] mb-5">
            Betterlink Industries is steered by executive leadership with extensive backgrounds
            across mechanical plant manufacturing, utility power contracts, telecommunications
            rollout, and enterprise software engineering.
          </p>

          <p className="text-white/70 text-[1.0625rem] leading-[1.75] mb-8">
            We invest in certified Zimbabwean artisans, mechanical technicians, and software
            engineers — pairing regional operational wisdom with international engineering
            benchmarks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/15">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#e2530b] font-bold mb-1">
                Zero Harm Culture
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Strict occupational safety protocols across all workshop fabrication and on-site
                installations.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#e2530b] font-bold mb-1">
                Local Value Addition
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Empowering Zimbabwean engineering talent and developing regional supply chain
                resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
