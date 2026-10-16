import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface AICard {
  title: string;
  icon: string;
  applications: string[];
}

const aiCards: AICard[] = [
  {
    title: 'AI for Human Resources',
    icon: 'UserGroupIcon',
    applications: [
      'HR knowledge assistants',
      'Employee self-service AI',
      'CV analysis & recruitment assistance',
      'Employee onboarding automation',
      'Policy search & document automation',
      'Workforce & performance analytics',
    ],
  },
  {
    title: 'AI for Supply Chain',
    icon: 'TruckIcon',
    applications: [
      'Demand forecasting',
      'Procurement intelligence',
      'Inventory optimisation',
      'Supplier analysis & recommendations',
      'Logistics analytics',
      'Exception detection & document automation',
    ],
  },
  {
    title: 'AI for Cold Chain',
    icon: 'CubeIcon',
    applications: [
      'Temperature monitoring & predictive alerts',
      'IoT integration',
      'Route monitoring & compliance records',
      'Exception management',
      'Analytics dashboards',
    ],
  },
  {
    title: 'AI for Finance',
    icon: 'BanknotesIcon',
    applications: [
      'Financial document processing',
      'Reconciliation assistance',
      'Financial analytics & forecasting',
      'Management reporting automation',
      'Anomaly detection',
      'Intelligent document search',
    ],
  },
];

const aiCapabilities = [
  'Generative AI Solutions',
  'Enterprise AI Assistants',
  'AI Copilots & Agents',
  'Workflow Automation',
  'Natural Language Processing',
  'Computer Vision',
  'Predictive Analytics',
  'Recommendation Systems',
  'Intelligent Search',
  'RAG / Enterprise Knowledge Systems',
  'AI Document Processing',
  'Localised AI',
  'Adaptive Learning',
  'AI Integration into Existing Applications',
  'AI-Enabled Analytics',
];

export default function AISection() {
  return (
    <section
      id="artificial-intelligence"
      className="py-20 bg-muted grid-lines-light"
      aria-labelledby="ai-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-label mb-5">Artificial Intelligence</span>
          <h2
            id="ai-heading"
            className="font-display text-section-xl text-foreground mb-4 leading-tight"
          >
            Turning AI Into Practical Business Capability
          </h2>
          <p className="text-muted-foreground text-base font-500 leading-relaxed">
            Betterlink Engineering designs and implements AI solutions that address real operational
            problems — not AI for its own sake, but AI that improves how organisations work.
          </p>
        </div>

        {/* Capabilities list */}
        <div className="bg-primary rounded-2xl p-8 mb-10">
          <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase mb-6">
            AI Capabilities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiCapabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="text-sm font-500 text-white/70">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {aiCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl p-7 border border-border card-hover shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(29,106,229,0.1)' }}
                >
                  <Icon name={card.icon} size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-800 text-foreground leading-tight">
                  {card.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {card.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={15}
                      className="text-accent flex-shrink-0 mt-0.5"
                      variant="solid"
                    />
                    <span className="text-sm font-500 text-muted-foreground leading-relaxed">
                      {app}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/contact" className="btn-primary">
            Discuss an AI Project
            <Icon name="ArrowRightIcon" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
