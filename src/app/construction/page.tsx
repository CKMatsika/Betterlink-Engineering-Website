import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Construction & Civils Division | Betterlink Industries',
  description:
    'Betterlink Industries Construction & Civils Division delivers civil works on base stations and industrial sites — tower foundations, equipment plinths, access roads, cable trenching, earthing & lightning protection, shelter slabs and site rehabilitation across Zimbabwe.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/construction',
  },
  openGraph: {
    title: 'Construction & Civils Division | Betterlink Industries',
    description:
      'Civil works on base stations and industrial sites — foundations, plinths, access roads, trenching, earthing & lightning protection, shelter slabs and site rehabilitation.',
    url: 'https://www.betterlinkengineering.co.zw/construction',
  },
};

const ACCENT = '#E2530B';

const heroStats = [
  { value: 'Nationwide', label: 'Coverage from Harare HQ' },
  { value: 'In-House', label: 'Civil, Electrical & Solar Teams' },
  { value: 'ZESA · RIOZ', label: 'Standards Compliance' },
  { value: 'PPE', label: 'Compliant & Insured Crews' },
];

const civilWorks = [
  {
    icon: 'CubeTransparentIcon',
    title: 'Tower Foundations',
    desc: 'Reinforced concrete tower foundations engineered and cast to specification.',
  },
  {
    icon: 'Squares2X2Icon',
    title: 'Equipment Plinths',
    desc: 'Equipment plinths and mounting bases for base station and industrial equipment.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Fence-Line Construction',
    desc: 'Perimeter fencing and security fence-line construction around site boundaries.',
  },
  {
    icon: 'TruckIcon',
    title: 'Access Roads',
    desc: 'Access roads and site approaches for remote base station and industrial locations.',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Cable Trenching',
    desc: 'Cable trenching and ducting for power and signal reticulation across site.',
  },
  {
    icon: 'BoltIcon',
    title: 'Earthing & Lightning Protection',
    desc: 'Earthing systems and lightning protection installations for site and equipment safety.',
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Shelter Slabs',
    desc: 'Shelter slabs and equipment housing bases built to withstand site conditions.',
  },
  {
    icon: 'CheckBadgeIcon',
    title: 'Site Rehabilitation',
    desc: 'Site rehabilitation and reinstatement works following construction completion.',
  },
];

const industrial = [
  {
    icon: 'BuildingOffice2Icon',
    title: 'Boiler Sheds & Industrial Infrastructure',
    desc: 'Boiler sheds, plant bases and supporting industrial infrastructure for mining and processing operations.',
  },
  {
    icon: 'Cog6ToothIcon',
    title: 'Site Works & Civil Support',
    desc: 'General civil support, site preparation and reinstatement for industrial and telecom installations.',
  },
];

const whyPartner = [
  {
    icon: 'MapPinIcon',
    title: 'Nationwide Coverage',
    desc: 'Rapid deployment from our Harare HQ to remote base station and industrial sites across Zimbabwe.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'One Accountable Partner',
    desc: 'In-house civil, electrical and solar teams — one contractor, one accountability line.',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'Digital Site Tracker',
    desc: 'Every site, fault, photo and certification logged and reportable through a tracked maintenance system.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Compliant & Insured',
    desc: 'Fully insured, PPE-compliant crews working to ZESA, RIOZ and Ministry of Mines standards.',
  },
];

const contactDetails = [
  {
    icon: 'MapPinIcon',
    label: 'Head Office',
    value: '51a Steven Drive, Msasa, Harare, Zimbabwe',
    href: null as string | null,
  },
  {
    icon: 'PhoneIcon',
    label: 'Telephone',
    value: '+263 779 613 700 / +263 713 741 410',
    href: 'tel:+263779613700',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'info@betterlinkengineering.co.zw',
    href: 'mailto:info@betterlinkengineering.co.zw',
  },
];

export default function ConstructionPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#150e0b]">
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-lines-bg opacity-40" />
          <div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'rgba(226,83,11,0.10)', filter: 'blur(120px)' }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'rgba(91,112,137,0.14)', filter: 'blur(100px)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
                  <span
                    className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase"
                    style={{ color: ACCENT }}
                  >
                    Construction &amp; Civils Division
                  </span>
                </div>

                <h1 className="font-display text-white leading-[0.9] tracking-tight mb-6">
                  <span className="block text-5xl lg:text-6xl xl:text-7xl font-800">
                    Civil Works
                  </span>
                  <span
                    className="block text-5xl lg:text-6xl xl:text-7xl font-800"
                    style={{ color: ACCENT }}
                  >
                    Built to Last.
                  </span>
                </h1>

                <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-lg">
                  The Betterlink Industries Construction &amp; Civils Division delivers civil works
                  on base stations and industrial sites — the foundations, access, reticulation and
                  reinstatement that keep infrastructure standing.
                </p>

                <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-lg">
                  A single, accountable local partner for nationwide base station civil works,
                  backed by certified crews and full PPE compliance.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {['Base Stations', 'Foundations', 'Reticulation', 'Nationwide'].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-700 tracking-widest uppercase"
                      style={{
                        border: `1px solid ${ACCENT}4D`,
                        backgroundColor: `${ACCENT}1A`,
                        color: '#8FB6F5',
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Get a Quotation
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                  <a href="#civil-works" className="btn-outline-white text-[0.75rem]">
                    View Civil Works
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.value}
                      className="p-6 rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm"
                    >
                      <div
                        className="text-xl font-display font-800 mb-1 leading-tight"
                        style={{ color: ACCENT }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-xs font-700 tracking-wide uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#150e0b] to-transparent" />
        </section>

        {/* ── Civil works ── */}
        <section id="civil-works" className="scroll-mt-24 py-24 bg-background grid-lines-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="section-label mb-4">Civil Works on Base Stations</span>
                <h2 className="font-display text-section-xl text-foreground">
                  Ground-Up Capability
                </h2>
              </div>
              <p className="text-muted-foreground text-base font-500 leading-relaxed max-w-sm">
                Complete civil scope for base station and industrial infrastructure — from
                foundations to final reinstatement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {civilWorks.map((item) => (
                <div
                  key={item.title}
                  className="service-card-border bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(226,83,11,0.1)' }}
                  >
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display text-base font-800 text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Industrial infrastructure */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {industrial.map((item) => (
                <div key={item.title} className="bg-primary rounded-2xl p-8 flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(226,83,11,0.15)' }}
                  >
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-800 text-white mb-2">{item.title}</h3>
                    <p className="text-white/55 text-sm font-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why partner ── */}
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
                <span
                  className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Why Partner With Us
                </span>
                <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
              </div>
              <h2 className="font-display text-section-xl text-white">
                Reliable, Accountable, Compliant
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyPartner.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-accent/30 hover:bg-white/8 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(226,83,11,0.15)' }}
                  >
                    <Icon name={item.icon} size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display text-base font-800 text-white mb-2">{item.title}</h3>
                  <p className="text-white/55 text-sm font-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact strip ── */}
        <section className="py-24 bg-background grid-lines-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="section-label mb-4">Contact the Division</span>
                <h2 className="font-display text-section-xl text-foreground mb-5">
                  Talk to Our Civils Team
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Discuss your base station, industrial or site works requirements. Our team will
                  assess the scope and provide a clear, accountable quotation.
                </p>
                <Link href="/contact" className="btn-primary text-sm mt-8">
                  Request a Consultation
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="bg-card border border-border rounded-2xl p-6 shadow-sm"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(226,83,11,0.1)' }}
                    >
                      <Icon name={detail.icon} size={18} className="text-accent" />
                    </div>
                    <p className="text-xs font-800 tracking-widest uppercase text-muted-foreground mb-2">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm font-600 text-foreground hover:text-accent transition-colors leading-relaxed"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-sm font-600 text-foreground leading-relaxed">
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
