'use client';

import React from 'react';

export default function VisionSection() {
  return (
    <section
      className="section wrap border-b border-[#dce2e9]"
      id="vision"
      aria-labelledby="vision-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Eyebrow */}
        <div className="lg:col-span-5">
          <p className="eyebrow">01 / The group perspective</p>
          <h2
            id="vision-title"
            className="text-[#071529] text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            Engineering that
            <br />
            <span className="font-semibold text-[#071529]">builds further.</span>
          </h2>
        </div>

        {/* Right Column: Narrative & Foundation Badges */}
        <div className="lg:col-span-7 max-w-2xl">
          <p className="lead mb-6 text-[#071529]">
            Four pillars of industrial capability. A perspective that connects the physical and
            digital lifecycle of modern enterprise.
          </p>

          <p className="text-[#606a78] text-[1.0625rem] leading-[1.75] mb-5">
            Betterlink Industries unites specialized operating divisions across software engineering
            &amp; artificial intelligence, heavy industrial boiler fabrication &amp; mining
            processing plants, utility-scale renewable solar energy, and base station civil
            infrastructure.
          </p>

          <p className="text-[#606a78] text-[1.0625rem] leading-[1.75] mb-5">
            Software automates supply chains and unlocks operational transparency. Heavy mining
            engineering manufactures the processing plants and steam boilers that drive mineral
            extraction. Clean solar energy guarantees steady, uninterrupted power. And civil
            construction builds the telecom towers, concrete foundations, and reticulation systems
            that ground these assets in reality.
          </p>

          <p className="text-[#606a78] text-[1.0625rem] leading-[1.75] mb-8">
            Operating from our headquarters in Harare, Zimbabwe, Betterlink provides the
            institutional governance, technical rigor, and single-source accountability required to
            deliver complex industrial projects across Africa.
          </p>

          {/* Foundation Line Badges */}
          <div className="foundation-line">
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2530b]" />
              Zimbabwean Engineering Group
            </span>
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#071529]" />
              Ministry of Mines Registered
            </span>
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075bff]" />
              Pan-African Infrastructure
            </span>
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Turnkey Accountability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
