'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Division {
  number: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
}

const divisions: Division[] = [
  {
    number: '01',
    icon: 'CpuChipIcon',
    name: 'Technology',
    tagline: 'Software, AI & Digital Systems',
    description:
      'Custom software engineering, artificial intelligence, cybersecurity, ERP transformation, systems integration and ICT consulting — built around real organisational requirements.',
    tags: ['Software', 'AI / ML', 'Cybersecurity', 'ERP', 'Integration'],
    href: '/solutions',
    accent: '#1d6ae5',
  },
  {
    number: '02',
    icon: 'WrenchScrewdriverIcon',
    name: 'Mining',
    tagline: 'Boilers, Processing Plants & Industrial',
    description:
      'Fabrication, installation, commissioning and maintenance of 500 KG and 1 Ton boilers, mining processing plants, trommels and gold & chrome wash plants. Ministry of Mines registered.',
    tags: ['Boilers', 'Processing Plants', 'NDT', 'Maintenance'],
    href: '/mining',
    accent: '#E87B1E',
  },
  {
    number: '03',
    icon: 'SunIcon',
    name: 'Energy',
    tagline: 'Utility-Scale Solar & Power Infrastructure',
    description:
      'Development of utility-scale solar independent power projects — feasibility studies, grid integration, project development and renewable energy infrastructure across the region.',
    tags: ['Solar PV', 'IPP', 'Feasibility', 'Grid'],
    href: '/energy',
    accent: '#E8A21E',
  },
  {
    number: '04',
    icon: 'BuildingOffice2Icon',
    name: 'Construction & Civils',
    tagline: 'Civil Works & Site Infrastructure',
    description:
      'Civil works on base stations and industrial sites — tower foundations, equipment plinths, access roads, cable trenching, earthing & lightning protection, shelter slabs and site rehabilitation.',
    tags: ['Civil Works', 'Foundations', 'Reticulation', 'Site Works'],
    href: '/construction',
    accent: '#5B7089',
  },
];

export default function DivisionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.division-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 90);
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
      id="divisions"
      className="scroll-mt-24 py-24 bg-background grid-lines-light"
      aria-labelledby="divisions-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label mb-4">Betterlink Industries</span>
            <h2 id="divisions-heading" className="font-display text-section-xl text-foreground">
              Four Divisions. One Partner.
            </h2>
          </div>
          <p className="text-muted-foreground text-base font-500 leading-relaxed max-w-sm">
            A multi-disciplinary group delivering engineering and technology solutions across
            Africa. Explore the division that fits your project.
          </p>
        </div>

        {/* Division grid — 2x2 desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {divisions.map((division) => (
            <div
              key={division.name}
              className="division-card group relative bg-card rounded-2xl border border-border p-8 lg:p-10 flex flex-col shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition:
                  'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
              }}
            >
              {/* Accent bar */}
              <span
                className="absolute top-0 left-0 h-1 w-full"
                style={{ backgroundColor: division.accent }}
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${division.accent}1A` }}
                >
                  <Icon name={division.icon} size={26} style={{ color: division.accent }} />
                </div>
                <span
                  className="font-display text-4xl font-800 leading-none opacity-20"
                  style={{ color: division.accent }}
                  aria-hidden="true"
                >
                  {division.number}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-2xl font-800 text-foreground mb-1">
                  {division.name}
                </h3>
                <p
                  className="text-xs font-800 tracking-[0.15em] uppercase mb-4"
                  style={{ color: division.accent }}
                >
                  {division.tagline}
                </p>
                <p className="text-muted-foreground text-sm font-500 leading-relaxed mb-6">
                  {division.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {division.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Explore */}
              <Link
                href={division.href}
                className="inline-flex items-center gap-2 text-xs font-800 tracking-widest uppercase transition-all duration-200 hover:gap-3 mt-auto"
                style={{ color: division.accent }}
                aria-label={`Explore the ${division.name} division`}
              >
                Explore {division.name}
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
