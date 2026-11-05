'use client';

import React from 'react';

interface Milestone {
  status: string;
  statusColor: string;
  category: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    status: 'Operational',
    statusColor: 'bg-emerald-500',
    category: 'Mining & Heavy Fabrication',
    title: '500KG & 1 Ton Steam Boilers Deployed',
    description:
      'Fabricated, non-destructively tested (NDT), commissioned, and maintained across active mineral processing and industrial facilities in Zimbabwe.',
  },
  {
    status: 'Statutory Active',
    statusColor: 'bg-blue-500',
    category: 'Accreditation & Governance',
    title: 'Ministry of Mines & Mining Development Registered',
    description:
      'Full regulatory compliance and certified engineering contractor status for high-risk industrial plant manufacturing and site installations.',
  },
  {
    status: 'Appraised',
    statusColor: 'bg-amber-500',
    category: 'Renewable Power',
    title: 'Multi-MW Utility Solar IPP Appraisals',
    description:
      'Comprehensive grid interconnection modeling, radiation profiling, and feasibility studies executed for independent solar power installations.',
  },
  {
    status: 'Delivered',
    statusColor: 'bg-emerald-500',
    category: 'Telecommunications & Civils',
    title: 'Turnkey Base Station Foundations',
    description:
      'Executed structural civil works, tower foundations, heavy equipment plinths, access roads, and lightning protection systems for regional telco operators.',
  },
  {
    status: 'In Production',
    statusColor: 'bg-purple-500',
    category: 'Digital Systems',
    title: 'Enterprise & Educational ERP Platforms',
    description:
      'Custom institutional enterprise resource planning platforms engineered for scale, driving automated admissions, finance, and asset management.',
  },
  {
    status: 'Certified QA',
    statusColor: 'bg-emerald-500',
    category: 'Quality Assurance',
    title: 'Non-Destructive Testing (NDT) Rigor',
    description:
      'Every boiler weld, structural joint, and pressure envelope is verified via ultrasonic, magnetic particle, and radiographic flaw detection.',
  },
];

export default function MilestonesSection() {
  return (
    <section
      className="section wrap border-b border-[#dce2e9] bg-[#f5f7fa]"
      id="milestones"
      aria-labelledby="milestones-title"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
        <div className="lg:col-span-6">
          <p className="eyebrow">04 / Verified track record</p>
          <h2
            id="milestones-title"
            className="text-[#071529] text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em]"
          >
            Experience behind
            <br />
            <span className="font-semibold text-[#071529]">the ambition.</span>
          </h2>
        </div>
        <div className="lg:col-span-6">
          <p className="text-[#606a78] text-[clamp(1.0625rem,1.35vw,1.3rem)] leading-relaxed font-normal">
            Proven execution across high-consequence industries. Our record reflects statutory
            compliance, engineering precision, and enduring client partnerships.
          </p>
        </div>
      </div>

      {/* Milestone Cards Grid - getalfa.io style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#dce2e9] rounded-lg p-7 flex flex-col justify-between hover:border-[#e2530b] hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-semibold text-[#606a78] uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium text-[#071529] bg-[#f5f7fa] border border-[#dce2e9] px-2.5 py-0.5 rounded-full">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`} />
                  {item.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#071529] tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm text-[#606a78] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
