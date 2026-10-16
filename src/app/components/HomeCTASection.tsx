import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HomeCTASection() {
  return (
    <section className="py-24 bg-background grid-lines-light" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-primary rounded-3xl px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(29,106,229,0.25) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="section-label mb-5">Get Started</span>
              <h2
                id="cta-heading"
                className="font-display text-section-xl text-white mb-4 leading-tight"
              >
                Have an Engineering Challenge?
              </h2>
              <p className="text-white/60 text-lg font-500 leading-relaxed">
                Let us engineer the solution. From technology and digital systems to mining, energy
                and construction, Betterlink Industries is your end-to-end partner.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link href="/contact" className="btn-primary text-sm">
                Request a Consultation
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/#divisions" className="btn-outline-white text-sm">
                Explore Divisions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
