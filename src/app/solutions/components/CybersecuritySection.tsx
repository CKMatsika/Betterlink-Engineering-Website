import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const capabilities = [
  'Cybersecurity Assessments',
  'Vulnerability Assessments',
  'Penetration Testing',
  'Web Application Penetration Testing',
  'API Security Testing',
  'Network Penetration Testing',
  'Mobile Application Security Assessment',
  'Cloud Security Assessment',
  'Security Architecture Reviews',
  'Secure Software Development',
  'Vulnerability Remediation',
  'Cybersecurity Governance',
  'Cyber Risk Assessment',
  'Security Awareness',
  'Incident Readiness',
  'Endpoint Security Consulting',
  'Security Platform Consulting',
];

const processSteps = [
  { label: 'Scope', icon: 'DocumentTextIcon' },
  { label: 'Assess', icon: 'MagnifyingGlassIcon' },
  { label: 'Test', icon: 'BeakerIcon' },
  { label: 'Validate', icon: 'CheckBadgeIcon' },
  { label: 'Report', icon: 'ClipboardDocumentListIcon' },
  { label: 'Remediate', icon: 'WrenchScrewdriverIcon' },
  { label: 'Retest', icon: 'ArrowPathIcon' },
];

export default function CybersecuritySection() {
  return (
    <section
      id="cybersecurity"
      className="py-20 bg-primary"
      aria-labelledby="cyber-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left */}
          <div className="lg:col-span-5">
            <span className="section-label mb-5">Cybersecurity</span>
            <h2
              id="cyber-heading"
              className="font-display text-section-xl text-white mb-5 leading-tight"
            >
              Identify Weaknesses Before Attackers Do.
            </h2>
            <p className="text-white/60 text-base font-500 leading-relaxed mb-5">
              Betterlink Engineering delivers authorised security assessments, ethical penetration testing and cybersecurity consulting to help organisations understand and address their security posture.
            </p>
            <p className="text-white/60 text-base font-500 leading-relaxed mb-8">
              All penetration testing is conducted under formal authorisation with clearly defined scope. Security is considered throughout the technology lifecycle — not as an afterthought.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Security Assessment
              <Icon name="ArrowRightIcon" size={15} />
            </Link>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Capabilities */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase mb-5">
                Security Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <Icon name="ShieldCheckIcon" size={14} className="text-accent flex-shrink-0" />
                    <span className="text-sm font-500 text-white/70">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase mb-5">
                Security Assessment Process
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {processSteps.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(29,106,229,0.2)' }}
                      >
                        <Icon name={step.icon as any} size={13} className="text-accent" />
                      </div>
                      <span className="text-xs font-700 text-white/70">{step.label}</span>
                    </div>
                    {i < processSteps.length - 1 && (
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