'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Dual Vertical Boiler Installation & Commissioning',
    category: 'Boiler Installation',
    description:
      'Turnkey installation of dual vertical steam boiler vessels mounted on heavy structural steel staging with operator platform, access stairway, and automated control instrumentation at a gold mining site in Zimbabwe.',
    image: '/assets/images/work/boiler-installation-site-dual.jpg',
    alt: 'Dual vertical industrial steam boilers installed on blue structural steel support platform at a mining site',
    span: 'tall',
    featured: true,
  },
  {
    id: 2,
    title: '1-Ton Industrial Boiler Shell Fabrication',
    category: 'Boiler Fabrication',
    description:
      'High-pressure boiler vessel rolling and precision submerged arc welding in the Betterlink industrial workshop, conforming to ASME Section VIII and factory inspector standards.',
    image: '/assets/images/work/019-photo-19.jpeg',
    alt: 'Heavy steel boiler vessel shell fabricated in the Betterlink workshop',
    span: 'wide',
    featured: true,
  },
  {
    id: 3,
    title: 'Operational Mine-Site Boiler & Processing Facility',
    category: 'Boiler Installation',
    description:
      'Full boiler plant commissioning including high-pressure steam reticulation, safety blow-off valves, and chimney stack for mineral elution processing.',
    image: '/assets/images/work/078-photo-78.jpg',
    alt: 'Completed industrial boiler plant in operation at a mining facility in Zimbabwe',
    span: 'wide',
    featured: true,
  },
  {
    id: 4,
    title: 'On-Site Boiler Assembly & Rigging',
    category: 'Boiler Installation',
    description:
      'Rigging, positioning, and mechanical alignment of a steam boiler on reinforced concrete foundation plinths at an active extraction site.',
    image: '/assets/images/work/002-photo-2.jpeg',
    alt: 'Boiler unit being installed on site by Betterlink engineering technicians',
    span: 'normal',
  },
  {
    id: 5,
    title: 'Gold & Chrome Wash Plant Installation',
    category: 'Mining Processing Plants',
    description:
      'Complete alluvial wash plant system with vibrating feed hopper, slurry distribution, and multi-stage sluice recovery units.',
    image: '/assets/images/work/079-photo-79.jpg',
    alt: 'Large-scale mineral wash plant and processing infrastructure on site',
    span: 'wide',
    featured: true,
  },
  {
    id: 6,
    title: 'Heavy-Duty Rotary Trommel Screen Fabrication',
    category: 'Mining Processing Plants',
    description:
      'Perforated steel rotary trommel screen built for high-throughput ore washing, separation, and alluvial gold recovery.',
    image: '/assets/images/work/039-photo-39.jpeg',
    alt: 'Fabricated heavy mining trommel screen and structural components in workshop',
    span: 'normal',
  },
  {
    id: 7,
    title: '500 KG Low-Pressure Boiler Unit Dispatched',
    category: 'Boiler Fabrication',
    description:
      'Completed 500 KG horizontal steam boiler loaded onto transport truck, hydrostatically pressure tested and certified by regulatory inspectors.',
    image: '/assets/images/work/032-photo-32.jpeg',
    alt: 'Completed industrial boiler packaged and secured for delivery to client mine',
    span: 'normal',
  },
  {
    id: 8,
    title: 'Automated Electrical Switchgear & Control Panels',
    category: 'Electrical & Control Systems',
    description:
      'Weatherproof industrial control console with digital pressure monitoring, emergency stop interlocks, and generator automatic transfer switch (ATS).',
    image: '/assets/images/work/203-photo-203.jpeg',
    alt: 'Electrical control panel mounted on structural steel frame at mining plant',
    span: 'normal',
  },
  {
    id: 9,
    title: 'Boiler Pressure Vessel Welding & Fitting',
    category: 'Boiler Fabrication',
    description:
      'Precision welding of dished ends and nozzle stubs on thick-gauge boiler steel plate under certified quality control inspection.',
    image: '/assets/images/work/020-photo-20.jpeg',
    alt: 'Boiler plate welding and fitting inside fabrication workshop',
    span: 'normal',
  },
  {
    id: 10,
    title: 'Full Boiler Plant Room Housing',
    category: 'Boiler Installation',
    description:
      'Installed boiler system with protective weather enclosure, steam distribution headers, and feed water treatment tanks at a Midlands mine.',
    image: '/assets/images/work/046-photo-46.jpeg',
    alt: 'Industrial boiler plant installation with protective enclosure and piping',
    span: 'tall',
  },
  {
    id: 11,
    title: 'Boiler Refurbishment & Ultrasonic NDT Inspection',
    category: 'Maintenance & NDT',
    description:
      'Comprehensive non-destructive thickness testing, tube bundle replacement, and statutory hydrostatic testing for operational license renewal.',
    image: '/assets/images/work/071-photo-71.jpg',
    alt: 'Betterlink engineers inspecting and maintaining industrial boiler equipment',
    span: 'normal',
  },
  {
    id: 12,
    title: 'Industrial Elution Column & Steel Framework',
    category: 'Mining Processing Plants',
    description:
      'Fabrication of vertical stainless steel elution columns and hot-dip galvanized structural staging for carbon-in-leach (CIL) processing.',
    image: '/assets/images/work/181-photo-181.jpeg',
    alt: 'Processing plant structural frame and elution equipment at mine site',
    span: 'normal',
  },
  {
    id: 13,
    title: 'Boiler Steam Piping Reticulation',
    category: 'Boiler Installation',
    description:
      'High-temperature steam line fabrication, thermal lagging insulation, pressure reducing stations, and condensate traps.',
    image: '/assets/images/work/206-photo-206.jpeg',
    alt: 'Boiler steam piping and control valves installed at operational site',
    span: 'normal',
  },
  {
    id: 14,
    title: 'Generator Set & Industrial Power Integration',
    category: 'Electrical & Control Systems',
    description:
      'Heavy-duty backup diesel generator integration, synchronization panels, and electrical reticulation for uninterrupted plant processing.',
    image: '/assets/images/work/024-photo-24.jpeg',
    alt: 'Industrial generator set and power distribution equipment on site',
    span: 'normal',
  },
  {
    id: 15,
    title: 'Trommel Screen Barrel & Drive Assembly',
    category: 'Mining Processing Plants',
    description:
      'Fabrication of heavy rubber-lined trommel barrel, chain drive gearboxes, and high-pressure water spray manifolds for clay and gravel washing.',
    image: '/assets/images/work/060-photo-60.jpeg',
    alt: 'Trommel screen barrel and mechanical drive assembly in workshop',
    span: 'normal',
  },
  {
    id: 16,
    title: 'Structural Steel Staging & Catwalks',
    category: 'Civils & Infrastructure',
    description:
      'Modular steel access walkways, safety handrails, and equipment support structures fabricated for mineral processing facilities.',
    image: '/assets/images/work/074-photo-74.jpg',
    alt: 'Heavy structural steel staging and catwalks manufactured by Betterlink',
    span: 'wide',
  },
  {
    id: 17,
    title: 'Boiler Flue Gas Stack & Cyclone Separator',
    category: 'Boiler Fabrication',
    description:
      'Custom particulate collection cyclones and industrial chimney stacks engineered to meet environmental emissions guidelines.',
    image: '/assets/images/work/075-photo-75.jpg',
    alt: 'Boiler flue gas chimney stack and structural support framework',
    span: 'tall',
  },
  {
    id: 18,
    title: 'Mine Water Recirculation & High-Volume Pumps',
    category: 'Mining Processing Plants',
    description:
      'Multi-stage centrifugal slurry and water pumps installed with HDPE piping networks for closed-loop wash plant water recycling.',
    image: '/assets/images/work/077-photo-77.jpg',
    alt: 'Industrial pump manifold and water reticulation system at mine site',
    span: 'normal',
  },
  {
    id: 19,
    title: 'Boiler Dished End Forming & Edge Preparation',
    category: 'Boiler Fabrication',
    description:
      'Heavy hydraulic pressing and beveling of boiler pressure vessel end caps prior to circumferential seam welding.',
    image: '/assets/images/work/058-photo-58.jpeg',
    alt: 'Heavy steel boiler vessel end plate fabrication in progress',
    span: 'normal',
  },
  {
    id: 20,
    title: 'Complete Gold Recovery Circuit Handover',
    category: 'Mining Processing Plants',
    description:
      'Turnkey commissioning of crushing, milling, screening, and elution plant with full on-site operator training and safety certification.',
    image: '/assets/images/work/080-photo-80.jpg',
    alt: 'Operational gold recovery plant handed over to mining client in Zimbabwe',
    span: 'wide',
    featured: true,
  },
];

const categories = [
  'All',
  'Boiler Fabrication',
  'Boiler Installation',
  'Mining Processing Plants',
  'Electrical & Control Systems',
  'Maintenance & NDT',
  'Civils & Infrastructure',
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[#071529] py-20 lg:py-28 text-white min-h-screen">
      <div className="wrap">
        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#e2530b] text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:border-[#e2530b] hover:shadow-2xl"
              onClick={() => setLightboxItem(item)}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  item.span === 'tall' ? 'h-96' : item.span === 'wide' ? 'h-72' : 'h-64'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071529] via-[#071529]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#071529]/80 backdrop-blur-md border border-white/15 text-[#e2530b] text-[0.6875rem] font-bold tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Text overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-[#e2530b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#071529]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0b1b33] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#e2530b] transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Lightbox Image */}
            <div className="relative h-[clamp(320px,55vh,600px)] w-full bg-black">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold text-[#e2530b] uppercase tracking-widest block mb-2">
                {lightboxItem.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {lightboxItem.title}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
