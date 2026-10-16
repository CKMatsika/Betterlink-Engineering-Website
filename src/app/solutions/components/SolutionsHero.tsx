import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const solutionAnchors = [
  { label: 'Software Engineering', href: '#software-engineering' },
  { label: 'Artificial Intelligence', href: '#artificial-intelligence' },
  { label: 'Cybersecurity', href: '#cybersecurity' },
  { label: 'ERP Transformation', href: '#erp-transformation' },
  { label: 'Systems Integration', href: '#systems-integration' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Industries', href: '#industries' },
];

export default function SolutionsHero() {
  return (
    <section
      className="relative pt-32 pb-20 bg-primary overflow-hidden"
      aria-labelledby="solutions-hero-heading"
    >
      <div className="absolute inset-0 grid-lines-bg opacity-100" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,106,229,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <span className="section-label mb-6">Our Solutions</span>
          <h1
            id="solutions-hero-heading"
            className="font-display text-hero-lg text-white mb-6 leading-tight"
          >
            Technology Solutions Built for Real Organisations
          </h1>
          <p className="text-white/60 text-lg font-500 leading-relaxed mb-8">
            From custom software and AI to cybersecurity, ERP transformation and systems integration
            — Betterlink Engineering delivers end-to-end technology capability designed around the
            operational realities of organisations in Africa.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* Quick navigation anchors */}
        <div className="flex flex-wrap gap-3 border-t border-white/10 pt-8">
          {solutionAnchors?.map((anchor) => (
            <a
              key={anchor?.href}
              href={anchor?.href}
              className="text-[0.7rem] font-800 tracking-widest uppercase text-white/40 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
            >
              {anchor?.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
