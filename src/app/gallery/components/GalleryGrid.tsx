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
}

const galleryItems: GalleryItem[] = [
{
  id: 1,
  title: 'Industrial Boiler Fabrication',
  category: 'Boilers',
  description: 'Custom 1-ton high-pressure boiler fabricated and certified for a mining operation in Mashonaland.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_177678792-1772649599516.png",
  alt: 'Large industrial boiler fabricated from steel with pressure gauges and pipe fittings in a workshop',
  span: 'wide'
},
{
  id: 2,
  title: 'Gold Wash Plant Installation',
  category: 'Mining Plants',
  description: 'Complete gold wash plant installed and commissioned for a small-scale miner in Midlands Province.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ebece8ce-1773992876240.png",
  alt: 'Gold wash plant with sluice boxes and water pumps installed at a mining site in Zimbabwe',
  span: 'tall'
},
{
  id: 3,
  title: 'Boiler Pipe Welding & Assembly',
  category: 'Boilers',
  description: 'Precision pipe welding and pressure vessel assembly for a 500 KG low-pressure steam boiler.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_155c47fe7-1771886389388.png",
  alt: 'Welder performing precision pipe welding on a boiler pressure vessel in a fabrication workshop'
},
{
  id: 4,
  title: 'Chrome Wash Plant',
  category: 'Mining Plants',
  description: 'Chrome ore processing plant with spiral concentrators and jig separators for a Midlands chrome miner.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e71c3771-1768430128386.png",
  alt: 'Chrome wash plant with spiral concentrators and water channels processing chrome ore at a mining site'
},
{
  id: 5,
  title: 'Trommel Screen Fabrication',
  category: 'Equipment',
  description: 'Heavy-duty trommel screen fabricated for alluvial gold recovery, rated for 20 tonnes per hour.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1617548a8-1783832965958.png",
  alt: 'Rotating trommel screen drum fabricated from perforated steel for alluvial gold mining operations',
  span: 'wide'
},
{
  id: 6,
  title: 'Boiler Room Installation',
  category: 'Installation',
  description: 'Full boiler room fit-out including steam distribution, safety valves, and control panel wiring.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15217b684-1772166147520.png",
  alt: 'Industrial boiler room with steam pipes, pressure gauges, safety valves and electrical control panels'
},
{
  id: 7,
  title: 'Electrical Control Systems',
  category: 'Electrical',
  description: 'PLC-based control panel designed and installed for automated boiler monitoring and safety shutdown.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b804c08-1773054350694.png",
  alt: 'Electrical control panel with PLC modules, circuit breakers and wiring for industrial boiler automation'
},
{
  id: 8,
  title: 'Mining Processing Plant',
  category: 'Mining Plants',
  description: 'Modular processing plant for a medium-scale gold miner — includes crushing, milling and concentration.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4ffb2f2c7-1791181819691.png",
  alt: 'Modular gold mining processing plant with ball mill, crusher and concentration equipment on site',
  span: 'tall'
},
{
  id: 9,
  title: 'Boiler Maintenance & NDT',
  category: 'Maintenance',
  description: 'Non-destructive testing and annual inspection of a high-pressure boiler at a tobacco processing facility.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a283ed07-1772116686207.png",
  alt: 'Technician performing non-destructive testing on a boiler pressure vessel using ultrasonic equipment'
},
{
  id: 10,
  title: 'Structural Steel Fabrication',
  category: 'Equipment',
  description: 'Heavy structural steel framework for a processing plant support structure, hot-dip galvanised.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f4e20a7a-1768951888988.png",
  alt: 'Structural steel framework being assembled in a fabrication yard for a mining plant support structure'
},
{
  id: 11,
  title: 'Boiler Transportation & Rigging',
  category: 'Installation',
  description: 'Safe transportation and rigging of a 1-ton boiler to a remote mining site in Mashonaland West.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_141be15ce-1772166146550.png",
  alt: 'Heavy industrial boiler being lifted by crane and rigged for transportation to a remote mining site',
  span: 'wide'
},
{
  id: 12,
  title: 'Pump Station Installation',
  category: 'Installation',
  description: 'High-volume water pump station installed for a gold wash plant water supply and recirculation system.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e8c7d6d-1772623686340.png",
  alt: 'Industrial pump station with centrifugal pumps and pipework installed for a mining water supply system'
}];


const categories = ['All', 'Boilers', 'Mining Plants', 'Equipment', 'Installation', 'Electrical', 'Maintenance'];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'All' ?
  galleryItems :
  galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[#07101F] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-700 tracking-widest uppercase transition-all duration-200 ${
            activeCategory === cat ?
            'bg-[#E87B1E] text-white shadow-[0_4px_16px_rgba(232,123,30,0.4)]' :
            'border border-white/15 text-white/50 hover:border-[#E87B1E]/50 hover:text-white/80'}`
            }>
            
              {cat}
            </button>
          )}
        </div>

        {/* Bento-style masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item) =>
          <div
            key={item.id}
            className={`break-inside-avoid group relative overflow-hidden rounded-xl border border-white/8 bg-white/4 cursor-pointer ${
            item.span === 'wide' ? 'sm:col-span-2' : ''}`
            }
            onClick={() => setLightboxItem(item)}>
            
              <div className={`relative w-full overflow-hidden ${item.span === 'tall' ? 'h-80' : 'h-56'}`}>
                <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/90 via-[#07101F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#E87B1E]/90 text-white text-[0.65rem] font-700 tracking-widest uppercase">
                    {item.category}
                  </span>
                </div>
                {/* Expand icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>

              {/* Card info */}
              <div className="p-5">
                <h3 className="text-white font-700 text-sm mb-1 leading-snug">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-px rounded-2xl bg-gradient-to-br from-[#E87B1E]/40 to-[#1D6AE5]/20">
            <div className="bg-[#07101F] rounded-2xl px-10 py-10">
              <p className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase text-[#E87B1E] mb-4">Start Your Project</p>
              <h2 className="font-display text-white text-3xl lg:text-4xl font-800 mb-4 leading-tight">
                Ready to work with us?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Contact Betterlink Engineering for a consultation on your boiler, mining plant or industrial engineering project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E87B1E] text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:bg-[#D06A10] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,123,30,0.4)]">
                
                Request a Quotation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem &&
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        onClick={() => setLightboxItem(null)}>
        
          <div
          className="relative max-w-4xl w-full bg-[#0D1B2E] rounded-2xl overflow-hidden border border-white/10"
          onClick={(e) => e.stopPropagation()}>
          
            <div className="relative w-full h-[55vh]">
              <Image
              src={lightboxItem.image}
              alt={lightboxItem.alt}
              fill
              className="object-cover"
              sizes="100vw" />
            
            </div>
            <div className="p-6 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#E87B1E]/20 text-[#E87B1E] text-[0.65rem] font-700 tracking-widest uppercase mb-3">
                  {lightboxItem.category}
                </span>
                <h3 className="text-white font-700 text-lg mb-2">{lightboxItem.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{lightboxItem.description}</p>
              </div>
              <button
              onClick={() => setLightboxItem(null)}
              className="flex-shrink-0 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Close lightbox">
              
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      }
    </section>);

}