'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VentureProps {
  id: string;
  number: string;
  category: string;
  title: string;
  deck: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
  ctaText: string;
}

const ventures: VentureProps[] = [
  {
    id: 'technology',
    number: '01',
    category: 'Software & Digital Intelligence',
    title: 'Betterlink\nTechnology.',
    deck: 'Intelligent systems built for African enterprise scale.',
    description:
      'Custom software engineering, machine learning pipelines, mission-critical cybersecurity, enterprise ERP systems, and cross-platform integrations. We design software architectures that eliminate operational bottlenecks across logistics, mining, education, and institutional finance.',
    tags: [
      'Custom Software',
      'AI / ML Pipelines',
      'Enterprise ERP',
      'Cybersecurity',
      'Systems Integration',
    ],
    imageSrc: '/assets/images/gallery/space-explorer.jpg',
    imageAlt: 'Betterlink digital software engineering and systems architecture',
    href: '/solutions',
    ctaText: 'Explore Technology',
  },
  {
    id: 'mining',
    number: '02',
    category: 'Industrial Fabrication & Mining Plants',
    title: 'Betterlink\nMining.',
    deck: 'Heavy plant manufacturing and industrial steam power.',
    description:
      'Full-lifecycle fabrication, pressure testing, commissioning, and maintenance of 500 KG and 1 Ton industrial steam boilers, trommels, and gold & chrome wash plants. Registered with the Ministry of Mines and Mining Development, operating under stringent ASME and NDT safety standards.',
    tags: [
      '500KG & 1 Ton Boilers',
      'Gold & Chrome Wash Plants',
      'Trommels',
      'NDT Non-Destructive Testing',
      'Full Commissioning',
    ],
    imageSrc: '/assets/images/mining-hero/02.jpg',
    imageAlt: 'Betterlink industrial boiler fabrication and mining machinery',
    href: '/mining',
    ctaText: 'Explore Mining & Industrial',
  },
  {
    id: 'energy',
    number: '03',
    category: 'Utility-Scale Solar & Power Infrastructure',
    title: 'Betterlink\nEnergy.',
    deck: 'Clean renewable power powering industrial growth.',
    description:
      'Development of utility-scale solar independent power producer (IPP) projects, comprehensive grid integration appraisals, environmental impact assessments, and commercial microgrids. Engineered to provide uninterrupted, cost-effective power to heavy industrial and mining operations.',
    tags: [
      'Utility Solar PV',
      'IPP Independent Power Projects',
      'Grid Integration Studies',
      'Industrial Microgrids',
      'BESS Storage',
    ],
    imageSrc: '/assets/images/gallery/rocket_gen_img_12b804c08-1773054350694.png',
    imageAlt: 'Betterlink utility solar and renewable power infrastructure',
    href: '/energy',
    ctaText: 'Explore Energy & Solar',
  },
  {
    id: 'construction',
    number: '04',
    category: 'Civil Works & Mission-Critical Site Infrastructure',
    title: 'Betterlink\nConstruction.',
    deck: 'Structural foundations engineered for African terrain.',
    description:
      'Turnkey civil engineering for base station telecommunications sites and heavy industrial operations — tower foundations, equipment plinths, heavy-duty access roads, cable reticulation, earthing & lightning dissipation, equipment shelter slabs, and environmental site rehabilitation.',
    tags: [
      'Base Station Civils',
      'Tower Foundations',
      'Equipment Plinths',
      'Access Road Construction',
      'Earthing & Lightning Systems',
    ],
    imageSrc: '/assets/images/gallery/rocket_gen_img_14ee21e1e-1774626811377.png',
    imageAlt: 'Betterlink telecommunications tower civil foundations and infrastructure',
    href: '/construction',
    ctaText: 'Explore Construction & Civils',
  },
];

export default function EcosystemSection() {
  return (
    <section className="bg-white" id="ecosystem" aria-labelledby="ecosystem-title">
      {/* Ecosystem Header */}
      <div className="section wrap border-b border-[#dce2e9]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <p className="eyebrow">03 / A connected ecosystem</p>
            <h2
              id="ecosystem-title"
              className="text-[#071529] text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em]"
            >
              Distinct strengths.
              <br />
              <span className="font-semibold text-[#071529]">A shared horizon.</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#606a78] text-[clamp(1.0625rem,1.35vw,1.3rem)] leading-relaxed font-normal">
              Four specialized divisions. Different capabilities.
              <br className="hidden sm:inline" />
              Unified by a single standard of engineering precision and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Venture Articles - getalfa.uk style */}
      <div className="divide-y divide-[#dce2e9]">
        {ventures.map((venture) => (
          <article
            key={venture.id}
            id={venture.id}
            className="scroll-mt-24 group"
            aria-labelledby={`venture-title-${venture.id}`}
          >
            {/* Cinematic Venture Image Banner */}
            <figure className="relative h-[clamp(360px,50svh,620px)] w-full overflow-hidden bg-[#071529]">
              <Image
                src={venture.imageSrc}
                alt={venture.imageAlt}
                fill
                sizes="100vw"
                className="object-cover object-center filter brightness-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071529]/90 via-[#071529]/40 to-transparent" />
              <div className="absolute bottom-8 sm:bottom-12 left-0 right-0">
                <div className="wrap">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.18em] mb-2">
                    Division {venture.number} / {venture.category}
                  </p>
                  <h3
                    id={`venture-title-${venture.id}`}
                    className="text-white text-3xl sm:text-5xl font-bold tracking-tight whitespace-pre-line"
                  >
                    {venture.title}
                  </h3>
                </div>
              </div>
            </figure>

            {/* Venture Copy Container */}
            <div className="wrap py-12 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Intro deck */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 text-xs font-bold text-[#606a78] tracking-widest uppercase mb-4">
                    <span className="text-[#e2530b]">{venture.number}</span>
                    <span>/</span>
                    <span>{venture.category}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-semibold text-[#071529] tracking-tight leading-snug">
                    {venture.deck}
                  </h4>
                </div>

                {/* Details & Tags */}
                <div className="lg:col-span-7">
                  <p className="text-[#606a78] text-[1.0625rem] leading-[1.75] mb-8 font-normal">
                    {venture.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8" aria-label="Capabilities">
                    {venture.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#071529] bg-[#f5f7fa] border border-[#dce2e9] px-3.5 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={venture.href} className="text-link group/link">
                    <span>{venture.ctaText}</span>
                    <span className="transform transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
