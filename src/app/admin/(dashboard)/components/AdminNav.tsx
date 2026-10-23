'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

const links = [
  { href: '/admin', label: 'Dashboard', icon: 'Squares2X2Icon' },
  { href: '/admin/projects', label: 'Projects', icon: 'BriefcaseIcon' },
  { href: '/admin/services', label: 'Services', icon: 'WrenchScrewdriverIcon' },
  { href: '/admin/gallery', label: 'Gallery', icon: 'PhotoIcon' },
  { href: '/admin/news', label: 'News & Insights', icon: 'NewspaperIcon' },
  { href: '/admin/stats', label: 'Statistics', icon: 'ChartBarIcon' },
  { href: '/admin/settings', label: 'Site Settings', icon: 'Cog6ToothIcon' },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1" aria-label="Admin sections">
      {links.map((link) => {
        const active =
          link.href === '/admin' ? pathname === '/admin' : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-600 transition-colors ${
              active ? 'bg-accent text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon name={link.icon} size={18} />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
