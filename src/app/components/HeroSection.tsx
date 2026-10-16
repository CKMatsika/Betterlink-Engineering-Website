'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const divisions = ['Technology', 'Mining', 'Energy', 'Construction & Civils'];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elements = [
      labelRef.current,
      ...(headlineRef.current?.children ? Array.from(headlineRef.current.children) : []),
      metaRef.current,
    ].filter(Boolean) as HTMLElement[];

    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      const delay = 150 + i * 120;
      setTimeout(() => {
        el.style.transition =
          'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center bg-primary noise-overlay overflow-hidden"
      aria-label="Betterlink Industries hero"
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 grid-lines-bg opacity-100" />

      {/* Atmospheric depth blobs */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,106,229,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29,106,229,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Vertical side label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2">
        <span className="vertical-text text-[0.6rem] font-800 tracking-[0.4em] text-white/15 uppercase">
          Harare · Zimbabwe · Africa
        </span>
        <div className="w-px h-24 bg-white/10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial headline */}
          <div className="lg:col-span-8">
            <span ref={labelRef} className="section-label mb-10 block" style={{ opacity: 1 }}>
              African Engineering &amp; Industrial Group
            </span>

            <div ref={headlineRef} className="mb-12">
              <h1 className="font-display editorial-heading text-hero-xl text-white uppercase block">
                Engineering
              </h1>
              <h1
                className="font-display editorial-heading text-hero-xl uppercase block accent-glow"
                style={{ color: 'var(--accent)' }}
              >
                Industries
              </h1>
              <h1 className="font-display editorial-heading text-hero-xl text-outline-white uppercase block">
                That Build
              </h1>
              <h1 className="font-display editorial-heading text-hero-xl text-white uppercase block">
                Africa.
              </h1>
            </div>

            <div ref={metaRef} style={{ opacity: 1 }}>
              <p className="text-white/55 text-lg md:text-xl font-500 leading-relaxed max-w-xl mb-10">
                Betterlink Industries is a multi-disciplinary group uniting Technology, Mining,
                Energy and Construction &amp; Civils — delivering engineering and digital solutions
                built around the operational realities of organisations across Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#divisions" className="btn-primary">
                  Explore Our Divisions
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
                <Link href="/contact" className="btn-outline-white">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Division stack */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-2">
            {divisions.map((division, i) => (
              <div
                key={division}
                className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-white/8 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="text-sm font-600 text-white/60 group-hover:text-white transition-colors duration-200 tracking-wide">
                  {division}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
            <Icon name="ChevronDownIcon" size={14} className="text-white/40" />
          </div>
          <span className="text-[0.65rem] font-800 tracking-[0.4em] text-white/25 uppercase">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
