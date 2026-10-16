import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Technology', href: '/solutions' },
  { label: 'Mining', href: '/mining' },
  { label: 'Energy', href: '/energy' },
  { label: 'Construction & Civils', href: '/construction' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <AppLogo size={32} />
            <div className="flex flex-col">
              <span className="font-display text-sm font-800 text-foreground leading-tight">
                Betterlink
              </span>
              <span className="text-[0.6rem] font-700 tracking-[0.2em] text-muted-foreground uppercase">
                Industries
              </span>
            </div>
          </div>

          {/* Links */}
          <nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-500 text-muted-foreground">
              © 2026 Betterlink Industries
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="font-500">Technology · Mining · Energy · Construction &amp; Civils</span>
          <span className="font-500">
            <a
              href="mailto:info@betterlinkengineering.co.zw"
              className="hover:text-accent transition-colors"
            >
              info@betterlinkengineering.co.zw
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
