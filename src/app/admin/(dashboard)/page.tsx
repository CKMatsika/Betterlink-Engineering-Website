import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const sections = [
  {
    href: '/admin/projects',
    label: 'Projects',
    icon: 'BriefcaseIcon',
    description: 'Case studies and flagship projects across every division.',
  },
  {
    href: '/admin/services',
    label: 'Services',
    icon: 'WrenchScrewdriverIcon',
    description: 'Service offerings shown on the technology and division pages.',
  },
  {
    href: '/admin/gallery',
    label: 'Gallery',
    icon: 'PhotoIcon',
    description: 'Photos and site imagery, with captions and categories.',
  },
  {
    href: '/admin/news',
    label: 'News & Insights',
    icon: 'NewspaperIcon',
    description: 'Articles, announcements and company updates.',
  },
  {
    href: '/admin/stats',
    label: 'Statistics',
    icon: 'ChartBarIcon',
    description: 'The headline numbers highlighted across the website.',
  },
  {
    href: '/admin/settings',
    label: 'Site Settings',
    icon: 'Cog6ToothIcon',
    description: 'Contact details, company information and global settings.',
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="font-display text-3xl font-800 text-foreground mb-2">Dashboard</h1>
      <p className="text-muted-foreground font-500 mb-8">
        Manage all website content from one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="bg-card border border-border rounded-2xl p-6 card-hover"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(226,83,11,0.12)' }}
            >
              <Icon name={section.icon} size={20} className="text-accent" />
            </div>
            <h2 className="font-display text-lg font-800 text-foreground mb-1">{section.label}</h2>
            <p className="text-sm text-muted-foreground font-500 leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
