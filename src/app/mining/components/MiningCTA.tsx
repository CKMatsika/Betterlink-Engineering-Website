'use client';

import React from 'react';
import Link from 'next/link';

export default function MiningCTA() {
  return (
    <section className="py-28 bg-[#0A1628] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-lines-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#E87B1E]/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#E87B1E]" />
          <span className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E]">
            Get in Touch
          </span>
          <span className="w-8 h-px bg-[#E87B1E]" />
        </div>

        <h2 className="font-display text-4xl lg:text-6xl font-800 text-white leading-tight tracking-tight mb-6">
          Gold &amp; Chrome Wash Plants · <span className="text-[#E87B1E]">Trommels</span> · Custom
          Mining Equipment
        </h2>

        <p className="text-white/50 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
          Tailored solutions for Zimbabwe&apos;s small and medium scale miners. Contact our
          engineering team today to discuss your boiler or processing plant requirements.
        </p>

        <p className="text-white/30 text-sm mb-12">www.betterlinkengineering.co.zw</p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,123,30,0.5)]"
          >
            Get a Quotation Today
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
          <Link href="/contact" className="btn-outline-white text-[0.75rem] justify-center">
            Discuss Your Project
          </Link>
        </div>

        {/* Contact info strip */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: 'General Enquiries',
              value: 'info@betterlinkengineering.co.zw',
              href: 'mailto:info@betterlinkengineering.co.zw',
            },
            {
              label: 'Sales & Quotations',
              value: 'sales@betterlinkengineering.co.zw',
              href: 'mailto:sales@betterlinkengineering.co.zw',
            },
            {
              label: 'Technical Support',
              value: 'support@betterlinkengineering.co.zw',
              href: 'mailto:support@betterlinkengineering.co.zw',
            },
          ]?.map((contact) => (
            <a
              key={contact?.label}
              href={contact?.href}
              className="group p-5 rounded-xl border border-white/8 bg-white/3 hover:border-[#E87B1E]/25 transition-all duration-300 text-left"
            >
              <div className="text-[0.6rem] font-800 tracking-[0.3em] uppercase text-white/30 mb-2">
                {contact?.label}
              </div>
              <div className="text-white/70 text-xs group-hover:text-[#E87B1E] transition-colors duration-200 break-all">
                {contact?.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
