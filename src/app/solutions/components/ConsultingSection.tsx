import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const baServices = [
  'Requirements Gathering & Stakeholder Engagement',
  'Business Process Analysis & Mapping',
  'GAP Analysis & Functional Specifications',
  'User Stories & Process Redesign',
  'ERP Functional Configuration',
  'Finance Process Consulting',
  'Procurement & Inventory Process Design',
  'HR Process Design',
  'User Acceptance Testing',
  'Change Management',
  'User Training',
  'Digital Transformation Strategy',
];

const pmServices = [
  'ICT Project Management',
  'Technology Programme Management',
  'PMO Support',
  'Project Planning & Governance',
  'Vendor Management',
  'Technology Risk Management',
  'Technology Procurement Advisory',
  'Digital Transformation Roadmaps',
  'Implementation Supervision',
  'UAT Coordination',
  'Data Migration Management',
  'Go-Live Planning',
  'Post-Implementation Review',
];

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-20 bg-background" aria-labelledby="consulting-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <span className="section-label mb-5">Technology Consulting</span>
          <h2
            id="consulting-heading"
            className="font-display text-section-xl text-foreground mb-4 leading-tight"
          >
            Bridging Business, Finance, Operations and Technology
          </h2>
          <p className="text-muted-foreground text-base font-500 leading-relaxed">
            Successful technology implementation requires more than technical capability. Betterlink
            Engineering provides business analysis, ERP functional consulting and ICT project
            management to ensure technology delivers genuine operational value.
          </p>
        </div>

        {/* Bridging concept */}
        <div className="bg-primary rounded-2xl p-8 mb-8 flex flex-wrap items-center justify-center gap-4">
          {['Business Users', 'Finance', 'Operations', 'Technology']?.map((group, i) => (
            <React.Fragment key={group}>
              <div
                className="px-5 py-3 rounded-xl border border-white/15 text-sm font-700 text-white/80"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              >
                {group}
              </div>
              {i < 3 && <Icon name="ArrowsRightLeftIcon" size={16} className="text-accent" />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-muted rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(226,83,11,0.1)' }}
              >
                <Icon name="DocumentMagnifyingGlassIcon" size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-800 text-foreground">Business Analysis</h3>
            </div>
            <div className="flex flex-col gap-2.5">
              {baServices?.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={14}
                    className="text-accent flex-shrink-0 mt-0.5"
                    variant="solid"
                  />
                  <span className="text-sm font-500 text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(226,83,11,0.1)' }}
              >
                <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-800 text-foreground">
                ICT Project Management
              </h3>
            </div>
            <div className="flex flex-col gap-2.5">
              {pmServices?.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={14}
                    className="text-accent flex-shrink-0 mt-0.5"
                    variant="solid"
                  />
                  <span className="text-sm font-500 text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link href="/contact" className="btn-primary">
          Discuss Your Requirements
          <Icon name="ArrowRightIcon" size={15} />
        </Link>
      </div>
    </section>
  );
}
