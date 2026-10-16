'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    src: '/assets/images/mining-hero/01.jpg',
    alt: 'Industrial boiler installation in progress at a mining site',
  },
  {
    src: '/assets/images/mining-hero/02.jpg',
    alt: 'Heavy-duty processing machinery fabricated in the Betterlink workshop',
  },
  {
    src: '/assets/images/mining-hero/03.jpg',
    alt: 'Completed boiler unit prepared for delivery to a mine site',
  },
  {
    src: '/assets/images/mining-hero/04.jpg',
    alt: 'Fabricated mineral processing equipment on site',
  },
  {
    src: '/assets/images/mining-hero/05.jpg',
    alt: 'Boiler service and maintenance work carried out by Betterlink engineers',
  },
  {
    src: '/assets/images/mining-hero/06.jpg',
    alt: 'Mining processing plant installation with control systems',
  },
  {
    src: '/assets/images/mining-hero/07.jpg',
    alt: 'Boiler systems installed at an operational mining site in Zimbabwe',
  },
];

const INTERVAL_MS = 6000;

export default function MiningHeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Legibility overlays — kept light so the slideshow stays clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/90 via-[#07101F]/50 to-[#07101F]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07101F] via-transparent to-[#07101F]/25" />
    </div>
  );
}
