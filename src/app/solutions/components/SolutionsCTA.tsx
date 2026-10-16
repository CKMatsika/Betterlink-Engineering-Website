import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function SolutionsCTA() {
  return (
    <section className="py-20 bg-background" aria-labelledby="solutions-cta-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-primary rounded-3xl px-8 md:px-16 py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 70% 50%, rgba(226,83,11,0.2) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2
                id="solutions-cta-heading"
                className="font-display text-section-xl text-white mb-4 leading-tight"
              >
                Ready to Discuss Your Technology Requirements?
              </h2>
              <p className="text-white/60 text-base font-500 leading-relaxed">
                Whether you need custom software, AI integration, cybersecurity assessment, ERP
                implementation or systems integration — let us understand your challenge and
                engineer the right solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link href="/contact" className="btn-primary">
                Request a Consultation
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
