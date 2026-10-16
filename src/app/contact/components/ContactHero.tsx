import React from 'react';

export default function ContactHero() {
  return (
    <section
      className="relative pt-32 pb-16 bg-primary overflow-hidden"
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0 grid-lines-bg" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(226,83,11,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <span className="section-label justify-center mb-6">Contact</span>
        <h1
          id="contact-hero-heading"
          className="font-display text-hero-lg text-white mb-4 leading-tight"
        >
          Have a Technology Challenge?
        </h1>
        <p className="text-xl font-700 mb-4" style={{ color: 'var(--accent)' }}>
          Let us Engineer the Solution.
        </p>
        <p className="text-white/60 text-base font-500 leading-relaxed max-w-2xl mx-auto">
          Tell us about your organisation and technology requirements. Betterlink Engineering will
          respond to discuss how we can help you move forward.
        </p>
      </div>
    </section>
  );
}
