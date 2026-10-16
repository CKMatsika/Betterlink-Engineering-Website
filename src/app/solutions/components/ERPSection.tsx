import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const erpServices = [
  'ERP Requirements Analysis',
  'Business Process Mapping',
  'ERP Selection',
  'ERP Implementation',
  'ERP Configuration & Customisation',
  'Legacy System Modernisation',
  'Legacy System Migration',
  'Data Cleansing & Migration',
  'Finance Implementation',
  'Procurement & Inventory',
  'Fixed Assets',
  'HR & Payroll Integration',
  'CRM Integration',
  'Reporting & Analytics',
  'User Acceptance Testing',
  'Training & Change Management',
  'Go-Live & Post-Implementation Optimisation',
];

const transformationFlow = [
  'Legacy Systems',
  'Business Process Analysis',
  'ERP / Solution Architecture',
  'Data Migration',
  'Systems Integration',
  'Implementation',
  'Training & Change Management',
  'Modern Digital Enterprise',
];

const platforms = [
  'Sage Pastel',
  'QuickBooks',
  'Xero',
  'ERPNext',
  'Microsoft Ecosystem',
  'Cloud ERP Platforms',
  'Legacy ERP Systems',
  'Custom Databases',
  'Third-Party SaaS',
];

export default function ERPSection() {
  return (
    <section id="erp-transformation" className="py-20 bg-background" aria-labelledby="erp-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <span className="section-label mb-5">ERP Transformation</span>
          <h2
            id="erp-heading"
            className="font-display text-section-xl text-foreground mb-4 leading-tight"
          >
            From Legacy Systems to Integrated Digital Enterprises
          </h2>
          <p className="text-muted-foreground text-base font-500 leading-relaxed">
            Betterlink Engineering manages the full ERP lifecycle — from requirements analysis
            through implementation, integration, training and ongoing optimisation. We work with
            organisations to understand their processes before recommending or implementing any
            system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Transformation flow */}
          <div className="bg-primary rounded-2xl p-7 flex flex-col gap-4">
            <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase">
              Transformation Journey
            </p>
            {transformationFlow?.map((stage, i) => (
              <div key={stage} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-800"
                    style={{
                      backgroundColor:
                        i === 0 || i === transformationFlow?.length - 1
                          ? 'rgba(29,106,229,0.3)'
                          : 'rgba(255,255,255,0.08)',
                      color:
                        i === transformationFlow?.length - 1
                          ? 'var(--accent)'
                          : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-sm font-600 ${
                      i === transformationFlow?.length - 1 ? 'text-accent' : 'text-white/70'
                    }`}
                  >
                    {stage}
                  </span>
                </div>
                {i < transformationFlow?.length - 1 && (
                  <div className="ml-3.5 w-px h-3 bg-white/10 mt-1" />
                )}
              </div>
            ))}
          </div>

          {/* ERP Services */}
          <div className="bg-muted rounded-2xl p-7 border border-border">
            <p className="text-xs font-800 tracking-[0.3em] text-muted-foreground uppercase mb-5">
              ERP Services
            </p>
            <div className="flex flex-col gap-2.5">
              {erpServices?.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={14}
                    className="text-accent flex-shrink-0"
                    variant="solid"
                  />
                  <span className="text-sm font-500 text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms + integration message */}
          <div className="flex flex-col gap-6">
            <div className="bg-muted rounded-2xl p-7 border border-border flex-1">
              <p className="text-xs font-800 tracking-[0.3em] text-muted-foreground uppercase mb-5">
                Systems We Work With
              </p>
              <div className="flex flex-col gap-2.5">
                {platforms?.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm font-500 text-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-7 border"
              style={{
                backgroundColor: 'rgba(29,106,229,0.06)',
                borderColor: 'rgba(29,106,229,0.2)',
              }}
            >
              <h3 className="font-display text-base font-800 text-foreground mb-2">
                You Do Not Always Need to Replace Everything.
              </h3>
              <p className="text-sm font-500 text-muted-foreground leading-relaxed">
                Betterlink Engineering can integrate, modernise or progressively migrate existing
                systems depending on requirements, risk profile and budget.
              </p>
            </div>
          </div>
        </div>

        <Link href="/contact" className="btn-primary">
          Discuss an ERP Project
          <Icon name="ArrowRightIcon" size={15} />
        </Link>
      </div>
    </section>
  );
}
