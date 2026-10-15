import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const deliverables = [
  'Enterprise Web Applications',
  'Android & Mobile Applications',
  'SaaS Platforms',
  'Business Management Systems',
  'Customer & Employee Portals',
  'Education Platforms',
  'Financial Systems',
  'Workflow & Operational Systems',
  'Reporting & Analytics Platforms',
  'API-Driven Applications',
  'Cloud & Progressive Web Apps',
  'Bespoke Enterprise Systems',
];

const lifecycle = [
  { step: 'Discovery', icon: 'MagnifyingGlassIcon' },
  { step: 'Business Analysis', icon: 'DocumentTextIcon' },
  { step: 'UX/UI Design', icon: 'PaintBrushIcon' },
  { step: 'Architecture', icon: 'RectangleGroupIcon' },
  { step: 'Development', icon: 'CodeBracketIcon' },
  { step: 'Testing', icon: 'BeakerIcon' },
  { step: 'Security', icon: 'ShieldCheckIcon' },
  { step: 'Deployment', icon: 'RocketLaunchIcon' },
  { step: 'Maintenance', icon: 'WrenchScrewdriverIcon' },
];

export default function SoftwareEngineeringSection() {
  return (
    <section
      id="software-engineering"
      className="py-20 bg-background"
      aria-labelledby="se-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="section-label mb-5">Software Engineering</span>
            <h2
              id="se-heading"
              className="font-display text-section-xl text-foreground mb-5 leading-tight"
            >
              Custom Software Built Around Your Business
            </h2>
            <p className="text-muted-foreground text-base font-500 leading-relaxed mb-5">
              Betterlink Engineering designs and develops software around business processes rather than forcing organisations into inappropriate generic solutions. Every application is engineered to the specific operational requirements of the client.
            </p>
            <p className="text-muted-foreground text-base font-500 leading-relaxed mb-8">
              We build across the full application stack — from front-end interfaces through back-end services, APIs, databases, cloud infrastructure and security layers.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
              <Icon name="ArrowRightIcon" size={15} />
            </Link>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Deliverables grid */}
            <div className="bg-muted rounded-2xl p-7 border border-border">
              <p className="text-xs font-800 tracking-[0.3em] text-muted-foreground uppercase mb-5">
                What We Build
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="CheckCircleIcon" size={16} className="text-accent flex-shrink-0" variant="solid" />
                    <span className="text-sm font-500 text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifecycle flow */}
            <div className="bg-primary rounded-2xl p-7">
              <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase mb-5">
                Development Lifecycle
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {lifecycle.map((item, i) => (
                  <React.Fragment key={item.step}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(29,106,229,0.2)' }}
                      >
                        <Icon name={item.icon as any} size={14} className="text-accent" />
                      </div>
                      <span className="text-xs font-700 text-white/70">{item.step}</span>
                    </div>
                    {i < lifecycle.length - 1 && (
                      <Icon name="ChevronRightIcon" size={12} className="text-white/20" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}