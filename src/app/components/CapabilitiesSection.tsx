'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Capability {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

const capabilities: Capability[] = [
  {
    icon: 'CodeBracketIcon',
    title: 'Software Engineering',
    description:
      'Custom enterprise applications, mobile apps, SaaS platforms, business management systems and cloud-native solutions built around real organisational requirements.',
    tags: ['Web Apps', 'Mobile', 'APIs', 'Cloud'],
    href: '/solutions',
  },
  {
    icon: 'CpuChipIcon',
    title: 'Artificial Intelligence',
    description:
      'Practical AI and machine-learning solutions — enterprise assistants, workflow automation, predictive analytics, document intelligence and RAG knowledge systems.',
    tags: ['AI Agents', 'NLP', 'ML', 'Automation'],
    href: '/solutions',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Cybersecurity',
    description:
      'Security assessments, penetration testing, vulnerability management, secure software development and cybersecurity governance — identify weaknesses before attackers do.',
    tags: ['Pen Testing', 'VAPT', 'Security Arch'],
    href: '/solutions',
  },
  {
    icon: 'CircleStackIcon',
    title: 'ERP Transformation',
    description:
      'Implementation, modernisation and migration of enterprise business systems — finance, procurement, HR, payroll, assets and reporting across the full ERP lifecycle.',
    tags: ['ERP', 'Migration', 'Finance', 'HR'],
    href: '/solutions',
  },
  {
    icon: 'ArrowsRightLeftIcon',
    title: 'Systems Integration',
    description:
      'Connecting applications, APIs, data and enterprise platforms. We create integration layers so your systems work together without forcing complete replacement.',
    tags: ['REST APIs', 'Middleware', 'SSO', 'Sync'],
    href: '/solutions',
  },
  {
    icon: 'ChartBarIcon',
    title: 'Technology Consulting',
    description:
      'Business analysis, ERP functional consulting, ICT project management and digital transformation strategy — bridging business, finance, operations and technology.',
    tags: ['BA', 'PMO', 'Strategy', 'Change Mgmt'],
    href: '/solutions',
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.cap-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
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
      id="capabilities"
      className="py-24 bg-background grid-lines-light"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label mb-4">Technology Division</span>
            <h2 id="capabilities-heading" className="font-display text-section-xl text-foreground">
              What We Engineer
            </h2>
          </div>
          <p className="text-muted-foreground text-base font-500 leading-relaxed max-w-sm">
            We understand both the business process and the technology behind it.{' '}
            <a href="/solutions" className="text-accent font-700 hover:underline">
              Explore the Technology division
            </a>
            .
          </p>
        </div>

        {/* Bento grid — 3-col desktop, 2-col tablet, 1-col mobile */}
        {/* Row 1: [SoftwareEng cs-1][AI cs-1][Cybersecurity cs-1] */}
        {/* Row 2: [ERP cs-1][SystemsIntegration cs-1][TechConsulting cs-1] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            /* cap-card */
            <div
              key={cap.title}
              className="cap-card service-card-border bg-card rounded-2xl p-8 flex flex-col gap-5 shadow-sm border border-border"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition:
                  'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(29,106,229,0.1)' }}
              >
                <Icon name={cap.icon} size={22} className="text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-800 text-foreground mb-3 leading-tight">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground text-sm font-500 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={cap.href}
                className="flex items-center gap-2 text-accent text-xs font-800 tracking-widest uppercase hover:gap-3 transition-all duration-200 mt-auto pt-2"
              >
                Learn More
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
