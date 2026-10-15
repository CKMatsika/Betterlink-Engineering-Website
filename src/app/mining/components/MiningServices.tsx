'use client';

import React from 'react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  accent?: boolean;
}

const WrenchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const CogIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const FireIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
);

const services: ServiceCard[] = [
  {
    icon: <FireIcon />,
    title: 'Boiler Fabrication',
    description:
      'Custom fabrication of 500 KG and 1 Ton industrial boilers — both high pressure and low pressure — built to specification for mining and industrial applications.',
    points: [
      'High pressure boilers',
      'Low pressure boilers',
      '500 KG capacity',
      '1 Ton capacity',
      'Custom specifications',
      'Quality steel construction',
    ],
    accent: true,
  },
  {
    icon: <WrenchIcon />,
    title: 'Installation',
    description:
      'Professional on-site installation of boilers and processing plant equipment at mining operations across Zimbabwe, ensuring safe and compliant setup.',
    points: [
      'On-site installation',
      'Safety compliance',
      'Pipework & connections',
      'Pressure testing',
      'Site preparation',
      'Documentation',
    ],
  },
  {
    icon: <CogIcon />,
    title: 'Commissioning',
    description:
      'Full commissioning services to bring boilers and processing plants into safe, efficient operation — including testing, certification and handover.',
    points: [
      'Performance testing',
      'Safety certification',
      'Operational handover',
      'Operator training',
      'Documentation',
      'Compliance sign-off',
    ],
  },
  {
    icon: <ShieldIcon />,
    title: 'Repairs & Maintenance',
    description:
      'Scheduled and emergency maintenance, repairs and non-destructive testing (NDT) to keep boilers and processing equipment running safely and efficiently.',
    points: [
      'Scheduled maintenance',
      'Emergency repairs',
      'Non-destructive testing (NDT)',
      'Boiler inspections',
      'Parts replacement',
      'Performance optimisation',
    ],
  },
  {
    icon: <BoltIcon />,
    title: 'Electrical & Control Systems',
    description:
      'Design, installation and maintenance of electrical and control systems for boilers and mining processing plants, including automation and monitoring.',
    points: [
      'Control panel design',
      'Electrical installation',
      'Automation systems',
      'Monitoring & instrumentation',
      'Safety interlocks',
      'Wiring & cabling',
    ],
  },
  {
    icon: <TruckIcon />,
    title: 'Boiler Transportation',
    description:
      'Safe and reliable transportation of boilers and heavy mining equipment to site locations across Zimbabwe, including loading, securing and delivery.',
    points: [
      'Heavy equipment transport',
      'Nationwide delivery',
      'Secure loading & rigging',
      'Route planning',
      'On-time delivery',
      'Insurance coverage',
    ],
  },
];

export default function MiningServices() {
  return (
    <section className="py-28 bg-[#07101F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="section-label mb-6" style={{ color: '#E87B1E' }}>
            <span className="w-8 h-px bg-[#E87B1E] block" />
            Core Services
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight tracking-tight">
              End-to-End Boiler &amp;{' '}
              <span className="text-[#E87B1E]">Engineering Services</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              From fabrication through to commissioning, maintenance and transportation —
              Betterlink Engineering provides a complete service offering for mining boilers
              and industrial processing equipment in Zimbabwe.
            </p>
          </div>
        </div>

        {/* Services bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-7 rounded-2xl border transition-all duration-400 card-hover ${
                service.accent
                  ? 'border-[#E87B1E]/30 bg-[#E87B1E]/5'
                  : 'border-white/8 bg-white/3 hover:border-[#E87B1E]/20'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.accent
                    ? 'bg-[#E87B1E]/20 text-[#E87B1E]'
                    : 'bg-white/8 text-white/60 group-hover:bg-[#E87B1E]/15 group-hover:text-[#E87B1E] transition-colors duration-300'
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-white font-display font-700 text-lg mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Points */}
              <ul className="space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-white/40">
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 ${service.accent ? 'bg-[#E87B1E]' : 'bg-white/30'}`} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Accent line on hover */}
              {!service.accent && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E87B1E]/0 via-[#E87B1E]/60 to-[#E87B1E]/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
