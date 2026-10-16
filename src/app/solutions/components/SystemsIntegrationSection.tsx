import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const integrationCapabilities = [
  'REST API Development & Integration',
  'Third-Party API Integration',
  'Payment & Banking Integration',
  'ERP & Accounting System Integration',
  'Government System Integration',
  'HR & CRM Integration',
  'Education Platform Integration',
  'Cloud Integration',
  'Legacy Database Integration',
  'Middleware & Webhooks',
  'Data Synchronisation',
  'Authentication & Single Sign-On',
  'Integration Monitoring',
];

export default function SystemsIntegrationSection() {
  return (
    <section
      id="systems-integration"
      className="py-20 bg-muted grid-lines-light"
      aria-labelledby="integration-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <span className="section-label mb-5">Systems Integration</span>
            <h2
              id="integration-heading"
              className="font-display text-section-xl text-foreground mb-5 leading-tight"
            >
              Make Your Systems Work Together.
            </h2>
            <p className="text-muted-foreground text-base font-500 leading-relaxed mb-5">
              Most organisations already have systems in place. Betterlink Engineering creates
              integration layers that allow existing applications to communicate, share data and
              operate as a connected enterprise — without forcing complete replacement.
            </p>
            <p className="text-muted-foreground text-base font-500 leading-relaxed mb-8">
              From REST APIs and payment gateways through to government system connections, ERP
              integration and legacy database bridging — we design integration architectures that
              work.
            </p>
            <Link href="/contact" className="btn-primary">
              Discuss Integration Requirements
              <Icon name="ArrowRightIcon" size={15} />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-6">
              <p className="text-xs font-800 tracking-[0.3em] text-muted-foreground uppercase mb-6">
                Integration Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {integrationCapabilities?.map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <Icon name="LinkIcon" size={14} className="text-accent flex-shrink-0" />
                    <span className="text-sm font-500 text-foreground">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration diagram concept */}
            <div className="bg-primary rounded-2xl p-7">
              <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase mb-6">
                Integration Architecture Concept
              </p>
              <div className="flex flex-col items-center gap-3">
                {/* Source systems */}
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {['ERP', 'CRM', 'HR System', 'Legacy DB']?.map((sys) => (
                    <div
                      key={sys}
                      className="px-4 py-2 rounded-lg text-xs font-700 text-white/70 border border-white/15"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                    >
                      {sys}
                    </div>
                  ))}
                </div>
                {/* Connector */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-4 bg-white/20" />
                  <div
                    className="px-6 py-3 rounded-xl text-xs font-800 tracking-widest uppercase"
                    style={{
                      backgroundColor: 'rgba(29,106,229,0.3)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(29,106,229,0.4)',
                    }}
                  >
                    Integration Layer
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                </div>
                {/* Target systems */}
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {['Portal', 'Mobile App', 'Analytics', 'Payment Gateway']?.map((sys) => (
                    <div
                      key={sys}
                      className="px-4 py-2 rounded-lg text-xs font-700 text-white/70 border border-white/15"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                    >
                      {sys}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
