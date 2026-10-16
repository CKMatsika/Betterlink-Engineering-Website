'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the organisation, problem, users and strategic objectives. We start by listening.',
    icon: 'MagnifyingGlassIcon',
  },
  {
    number: '02',
    title: 'Analyse',
    description:
      'Map processes, requirements, systems, risks and integration requirements. Document what exists and what is needed.',
    icon: 'DocumentMagnifyingGlassIcon',
  },
  {
    number: '03',
    title: 'Architect',
    description:
      'Design the solution, technology, data, integration and security architecture before a line of code is written.',
    icon: 'RectangleGroupIcon',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Develop the software or configure and implement the selected enterprise platform against agreed specifications.',
    icon: 'WrenchScrewdriverIcon',
  },
  {
    number: '05',
    title: 'Integrate & Secure',
    description:
      'Connect systems, migrate data, test functionality and implement appropriate cybersecurity controls throughout.',
    icon: 'ShieldCheckIcon',
  },
  {
    number: '06',
    title: 'Deploy & Support',
    description:
      'Training, go-live, monitoring, support and continuous improvement. We remain engaged after delivery.',
    icon: 'RocketLaunchIcon',
  },
];

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.method-step');
            steps.forEach((step, i) => {
              setTimeout(() => {
                (step as HTMLElement).style.opacity = '1';
                (step as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="methodology"
      className="py-24 bg-muted grid-lines-light"
      aria-labelledby="methodology-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="section-label justify-center mb-4">How We Work</span>
          <h2
            id="methodology-heading"
            className="font-display text-section-xl text-foreground mb-4"
          >
            The Betterlink Methodology
          </h2>
          <p className="text-muted-foreground text-lg font-500 max-w-xl mx-auto leading-relaxed">
            From business challenge to deployed solution — a structured engineering approach.
          </p>
        </div>

        {/* 6-step grid — 3-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="method-step methodology-step group"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {/* Step number + icon row */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="font-display text-4xl font-800 leading-none"
                  style={{ color: 'rgba(226,83,11,0.15)' }}
                >
                  {step.number}
                </span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(226,83,11,0.08)' }}
                >
                  <Icon name={step.icon} size={20} className="text-accent" />
                </div>
              </div>

              <h3 className="font-display text-xl font-800 text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm font-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow indicator */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 text-xs font-800 tracking-widest text-muted-foreground uppercase">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <span className="hover:text-accent transition-colors cursor-default">
                {step.title}
              </span>
              {i < steps.length - 1 && (
                <Icon name="ChevronRightIcon" size={14} className="text-muted-foreground/40" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
