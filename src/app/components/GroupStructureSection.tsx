'use client';

import React from 'react';
import Link from 'next/link';

export default function GroupStructureSection() {
  return (
    <section
      className="section wrap border-b border-[#dce2e9]"
      id="structure"
      aria-labelledby="structure-title"
    >
      {/* Heading Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 lg:mb-24">
        <div className="lg:col-span-6">
          <p className="eyebrow">02 / Enterprise structure</p>
          <h2
            id="structure-title"
            className="text-[#071529] text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            One parent.
            <br />
            <span className="font-semibold text-[#071529]">Strategic reach.</span>
          </h2>
        </div>
        <div className="lg:col-span-6">
          <p className="text-[#606a78] text-[clamp(1.0625rem,1.35vw,1.3rem)] leading-relaxed font-normal">
            A corporate group centre providing governance, capital allocation, and engineering
            standards — with four autonomous operating divisions driving execution across Africa.
          </p>
        </div>
      </div>

      {/* Group Hierarchy Tree - getalfa.uk style */}
      <div className="w-full" aria-label="Corporate Group Hierarchy">
        {/* Parent Box */}
        <div className="bg-[#071529] text-white rounded-xl p-8 sm:p-12 max-w-2xl mx-auto text-center shadow-xl relative border border-white/10">
          <p className="text-[#e2530b] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Harare, Zimbabwe / Corporate Parent
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Betterlink Industries (Pvt) Ltd
          </h3>
          <p className="text-white/70 text-sm sm:text-base font-normal max-w-lg mx-auto leading-relaxed">
            Corporate Governance · Strategic Capital · Engineering Compliance · Pan-African
            Partnerships
          </p>
        </div>

        {/* Tree Connector Stem */}
        <div className="w-px h-12 bg-[#dce2e9] mx-auto hidden md:block" />

        {/* Operating Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-0">
          {/* Division 01 */}
          <div className="bg-white border border-[#dce2e9] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#e2530b] hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#606a78] tracking-widest">01</span>
                <span className="text-[0.6875rem] font-semibold text-[#e2530b] uppercase tracking-wider bg-[#e2530b]/10 px-2.5 py-1 rounded-full">
                  Digital &amp; AI
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#071529] tracking-tight mb-2 group-hover:text-[#e2530b] transition-colors">
                Betterlink Technology
              </h4>
              <p className="text-sm text-[#606a78] leading-relaxed mb-6">
                Custom software engineering, AI/ML models, cybersecurity, enterprise ERP systems,
                and digital integration.
              </p>
            </div>
            <Link href="/solutions" className="text-link text-xs group-hover:border-[#e2530b]">
              Explore Division →
            </Link>
          </div>

          {/* Division 02 */}
          <div className="bg-white border border-[#dce2e9] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#e2530b] hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#606a78] tracking-widest">02</span>
                <span className="text-[0.6875rem] font-semibold text-[#c82010] uppercase tracking-wider bg-[#c82010]/10 px-2.5 py-1 rounded-full">
                  Heavy Industry
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#071529] tracking-tight mb-2 group-hover:text-[#e2530b] transition-colors">
                Betterlink Mining
              </h4>
              <p className="text-sm text-[#606a78] leading-relaxed mb-6">
                Fabrication of 500KG &amp; 1 Ton steam boilers, gold &amp; chrome wash plants,
                trommels, NDT testing, and plant commissioning.
              </p>
            </div>
            <Link href="/mining" className="text-link text-xs group-hover:border-[#e2530b]">
              Explore Division →
            </Link>
          </div>

          {/* Division 03 */}
          <div className="bg-white border border-[#dce2e9] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#e2530b] hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#606a78] tracking-widest">03</span>
                <span className="text-[0.6875rem] font-semibold text-[#d97706] uppercase tracking-wider bg-[#d97706]/10 px-2.5 py-1 rounded-full">
                  Clean Power
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#071529] tracking-tight mb-2 group-hover:text-[#e2530b] transition-colors">
                Betterlink Energy
              </h4>
              <p className="text-sm text-[#606a78] leading-relaxed mb-6">
                Utility-scale solar IPP development, grid feasibility appraisals, power integration,
                and industrial renewable energy.
              </p>
            </div>
            <Link href="/energy" className="text-link text-xs group-hover:border-[#e2530b]">
              Explore Division →
            </Link>
          </div>

          {/* Division 04 */}
          <div className="bg-white border border-[#dce2e9] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#e2530b] hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#606a78] tracking-widest">04</span>
                <span className="text-[0.6875rem] font-semibold text-[#075bff] uppercase tracking-wider bg-[#075bff]/10 px-2.5 py-1 rounded-full">
                  Infrastructure
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#071529] tracking-tight mb-2 group-hover:text-[#e2530b] transition-colors">
                Betterlink Construction
              </h4>
              <p className="text-sm text-[#606a78] leading-relaxed mb-6">
                Telecom base station civils, tower foundations, equipment plinths, access roads,
                earthing &amp; lightning protection.
              </p>
            </div>
            <Link href="/construction" className="text-link text-xs group-hover:border-[#e2530b]">
              Explore Division →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
