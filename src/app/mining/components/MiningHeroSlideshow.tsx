'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    src: '/assets/images/work/boiler-installation-site-dual.jpg',
    alt: 'Dual vertical industrial steam boilers installed on steel platform at a mining site',
  },
  {
    src: '/assets/images/work/078-photo-78.jpg',
    alt: 'Heavy industrial boiler plant and piping installed on mine site in Zimbabwe',
  },
  {
    src: '/assets/images/work/019-photo-19.jpeg',
    alt: 'Boiler shell welding and fabrication in the Betterlink workshop',
  },
  {
    src: '/assets/images/work/079-photo-79.jpg',
    alt: 'Mining processing plant and wash plant installations across Zimbabwe',
  },
  {
    src: '/assets/images/work/032-photo-32.jpeg',
    alt: 'Completed 1-ton industrial boiler prepared for delivery to mine site',
  },
  {
    src: '/assets/images/work/203-photo-203.jpeg',
    alt: 'Mining processing plant installation with automated electrical control systems',
  },
  {
    src: '/assets/images/work/002-photo-2.jpeg',
    alt: 'Boiler systems installed and commissioned at an operational mining site',
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
