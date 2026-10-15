import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Industry {
  icon: string;
  title: string;
  solutions: string[];
}

const industries: Industry[] = [
  {
    icon: 'AcademicCapIcon',
    title: 'Education',
    solutions: [
      'School Management Systems',
      'Learning Management Systems',
      'AI-Powered Learning',
      'Student & Parent Portals',
      'Curriculum & Assessment Systems',
      'Examination Systems',
      'Inclusive & Accessible EdTech',
      'Offline Learning',
      'Education Analytics',
    ],
  },
  {
    icon: 'BuildingLibraryIcon',
    title: 'Government & Local Authorities',
    solutions: [
      'Municipal ERP',
      'Finance, Billing & Revenue Collection',
      'Property, Rates & Land',
      'Procurement, HR & Assets',
      'Planning & Development',
      'Council Governance',
      'Resident Services',
      'Reporting & Analytics',
    ],
  },
  {
    icon: 'BanknotesIcon',
    title: 'Financial Services',
    solutions: [
      'Cybersecurity & Penetration Testing',
      'Systems & API Integration',
      'Workflow Automation',
      'ERP Implementation',
      'Data Analytics',
      'AI Solutions',
      'Digital Transformation',
    ],
  },
  {
    icon: 'CogIcon',
    title: 'Mining & Engineering',
    solutions: [
      'Asset & Maintenance Management',
      'Procurement & Inventory',
      'Production Reporting',
      'Financial Integration',
      'Project Management',
      'Data Analytics',
      'IoT Integration',
    ],
  },
  {
    icon: 'TruckIcon',
    title: 'Logistics & Supply Chain',
    solutions: [
      'Fleet Systems',
      'Procurement & Inventory',
      'Warehousing & Tracking',
      'Supply Chain Analytics',
      'AI Optimisation',
    ],
  },
  {
    icon: 'HeartIcon',
    title: 'Healthcare & NGOs',
    solutions: [
      'Programme Management Systems',
      'Monitoring & Evaluation',
      'Financial Management',
      'Data Collection & Reporting',
      'Workflow Systems',
      'Systems Integration',
      'Analytics',
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-20 bg-muted grid-lines-light"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <span className="section-label mb-5">Industries</span>
          <h2
            id="industries-heading"
            className="font-display text-section-xl text-foreground mb-4 leading-tight"
          >
            Sectors We Serve
          </h2>
          <p className="text-muted-foreground text-base font-500 leading-relaxed">
            Betterlink Engineering understands that each sector has distinct operational requirements. We bring industry-specific knowledge to every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-card rounded-2xl p-7 border border-border card-hover shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(29,106,229,0.1)' }}
                >
                  <Icon name={industry.icon as any} size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-800 text-foreground leading-tight">
                  {industry.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {industry.solutions.map((sol) => (
                  <li key={sol} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-sm font-500 text-muted-foreground">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}