'use client';

import React from 'react';
import Image from 'next/image';

export default function OpeningFilm() {
  return (
    <section className="relative w-full" id="film" aria-labelledby="opening-film-title">
      {/* Cinematic Film Frame */}
      <div className="film">
        {/* Background Image */}
        <Image
          src="/assets/images/gallery/space-explorer.jpg"
          alt="Betterlink engineering landscape and operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.85]"
        />

        {/* Gradient Shade Overlay */}
        <div className="film-shade" />

        {/* Text Copy in Film */}
        <div className="film-copy">
          <p className="eyebrow light !mb-4">
            Decades of combined technical mastery · An enduring pan-African vision
          </p>
          <h2
            id="opening-film-title"
            className="text-white text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.035em] mb-4"
          >
            One house.
            <br />
            <span className="font-semibold">A wider horizon.</span>
          </h2>
          <p className="text-white/80 text-[clamp(1rem,1.3vw,1.25rem)] leading-relaxed max-w-xl font-normal">
            Specialist engineering capabilities across four core industrial pillars. Unified under
            single-source accountability.
          </p>
        </div>
      </div>

      {/* Venture Ribbon - getalfa.uk style */}
      <nav className="venture-ribbon" aria-label="Operating Division Shortcuts">
        <a href="#technology" className="group">
          <span>Technology &amp; Software</span>
        </a>
        <a href="#mining" className="group">
          <span>Mining &amp; Industrial</span>
        </a>
        <a href="#energy" className="group">
          <span>Energy &amp; Solar IPP</span>
        </a>
        <a href="#construction" className="group">
          <span>Construction &amp; Civils</span>
        </a>
      </nav>
    </section>
  );
}
