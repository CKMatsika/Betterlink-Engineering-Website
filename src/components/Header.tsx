'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Overview', href: '/#vision' },
  { label: 'Structure', href: '/#structure' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  { label: 'Milestones', href: '/#milestones' },
  { label: 'Methodology', href: '/#approach' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Insights', href: '/news' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
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

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if (menuOpen) {
      closeButtonRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#dce2e9] shadow-sm'
            : 'bg-white border-b border-[#dce2e9]/70'
        }`}
      >
        <div className="wrap flex items-center justify-between h-[84px]">
          {/* Brand Logo - getalfa.uk style */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group select-none"
            aria-label="Betterlink Industries Home"
          >
            <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/images/betterlink-symbol.png"
                alt="Betterlink Emblem"
                width={44}
                height={48}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-sans text-[0.9375rem] font-bold text-[#071529] tracking-[0.14em] uppercase leading-tight group-hover:text-[#e2530b] transition-colors">
                Betterlink
              </span>
              <span className="text-[0.625rem] font-semibold text-[#606a78] tracking-[0.22em] uppercase leading-none mt-0.5">
                Industries
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] font-semibold text-[#606a78] hover:text-[#071529] transition-colors tracking-[0.06em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Connect Action Button - getalfa.uk style */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#071529] text-[0.8125rem] font-semibold text-[#071529] tracking-[0.08em] uppercase hover:bg-[#071529] hover:text-white transition-all duration-200"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={menuButtonRef}
            className="lg:hidden text-[#071529] p-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#e2530b]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#071529] text-white flex flex-col p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <Image
                src="/assets/images/betterlink-symbol.png"
                alt="Betterlink Emblem"
                width={36}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-[0.14em] uppercase">
                  Betterlink
                </span>
                <span className="text-[0.625rem] font-semibold text-white/60 tracking-[0.2em] uppercase">
                  Industries
                </span>
              </div>
            </Link>
            <button
              ref={closeButtonRef}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e2530b]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <Icon name="XMarkIcon" size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-light text-white/80 hover:text-white transition-colors tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full py-3 text-center rounded-full bg-[#e2530b] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#c14305] transition-colors"
            >
              Connect with Leadership
            </Link>
            <p className="text-xs text-white/50 text-center">
              Harare · Zimbabwe · Pan-African Operations
            </p>
          </div>
        </div>
      )}
    </>
  );
}
