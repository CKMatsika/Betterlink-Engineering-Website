'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Differentiator {
  icon: string;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: 'BuildingOfficeIcon',
    title: 'Business + Technology',
    description:
      'Successful technology starts with understanding how the organisation operates. We combine domain knowledge with engineering capability.',
  },
  {
    icon: 'ArrowsPointingOutIcon',
    title: 'End-to-End Capability',
    description:
      'From requirements and architecture through implementation, security, integration and support — one partner for the full lifecycle.',
  },
  {
    icon: 'ArrowsRightLeftIcon',
    title: 'Integration First',
    description:
      'We can connect and modernise existing systems rather than automatically recommending complete replacement. You do not always need to replace everything.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Security by Design',
    description:
      'Cybersecurity is considered throughout the technology lifecycle — not added as an afterthought at the end of a project.',
  },
  {
    icon: 'CpuChipIcon',
    title: 'AI With Purpose',
    description:
      'AI is applied to practical organisational and educational problems rather than added simply because it is fashionable.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'African Context',
    description:
      'Solutions designed around local operating environments, connectivity realities and organisational requirements. Practical innovation for Africa.',
  },
];

export default function WhyBetterlinkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.diff-item');
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
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
      id="why-betterlink"
      className="py-24 bg-primary"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left sticky panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="section-label mb-6">Why Betterlink</span>
            <h2
              id="why-heading"
              className="font-display text-section-xl text-white mb-6 leading-tight"
            >
              What Makes Us Different
            </h2>
            <p className="text-white/55 text-base font-500 leading-relaxed mb-8">
              We combine business process understanding with technology engineering capability —
              taking organisations from challenge through to working solution.
            </p>
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs font-800 tracking-[0.3em] text-white/30 uppercase mb-4">
                Our Focus
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Business Challenge',
                  'Requirements',
                  'Architecture',
                  'Development',
                  'Integration',
                  'Security',
                  'Deployment',
                  'Support',
                ].map((stage) => (
                  <div key={stage} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm font-600 text-white/50">{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: differentiator cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="diff-item group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/30 hover:bg-white/8 transition-all duration-300"
                style={{
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition:
                    'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(226,83,11,0.15)' }}
                >
                  <Icon name={diff.icon} size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-800 text-white mb-2">{diff.title}</h3>
                <p className="text-white/55 text-sm font-500 leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
