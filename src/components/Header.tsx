'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Mining Division', href: '/mining' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-primary/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Betterlink Engineering Home"
          >
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-sm font-800 text-white leading-tight tracking-tight">
                Betterlink
              </span>
              <span className="text-[0.6rem] font-700 tracking-[0.2em] text-white/50 uppercase leading-none">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-[0.8125rem] font-600 text-white/60 hover:text-white transition-colors duration-200 tracking-wide uppercase"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-[0.75rem]">
              Request a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-lg flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <AppLogo size={36} />
              <div className="flex flex-col">
                <span className="font-display text-sm font-800 text-white leading-tight">
                  Betterlink
                </span>
                <span className="text-[0.6rem] font-700 tracking-[0.2em] text-white/50 uppercase">
                  Engineering
                </span>
              </div>
            </Link>
            <button
              className="text-white p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <Icon name="XMarkIcon" size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-display font-800 text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link?.label}
              </Link>
            ))}
            <div className="pt-8">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center text-base"
              >
                Request a Consultation
              </Link>
            </div>
          </nav>

          <div className="px-8 pb-10 text-xs text-white/30 font-600 tracking-widest uppercase">
            © 2026 Betterlink Engineering
          </div>
        </div>
      )}
    </>
  );
}
