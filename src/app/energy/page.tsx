import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Energy Division — Utility-Scale Solar & Power | Betterlink Industries',
  description:
    'Betterlink Industries Energy Division develops utility-scale solar independent power projects — bankable feasibility studies, grid integration and renewable energy infrastructure. Flagship: Balunda Energy Park, a 100 MWp solar IPP in Kasempa, Zambia.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/energy',
  },
  openGraph: {
    title: 'Energy Division | Betterlink Industries',
    description:
      'Utility-scale solar and renewable power project development — feasibility, grid integration and infrastructure. Flagship: Balunda Energy Park, 100 MWp solar IPP, Kasempa, Zambia.',
    url: 'https://www.betterlinkengineering.co.zw/energy',
  },
};

const ACCENT = '#E8A21E';

const heroStats = [
  { value: '100 MWp', label: 'Installed Capacity' },
  { value: '85 MWac', label: 'Grid Export' },
  { value: '20 yr', label: 'PPA Tenor' },
  { value: '50 MWp', label: 'Phase I' },
];

const capabilities = [
  {
    icon: 'SunIcon',
    title: 'Solar Project Development',
    desc: 'Utility-scale solar PV development using high-efficiency modules on single-axis tracking structures, engineered for optimal yield.',
  },
  {
    icon: 'BeakerIcon',
    title: 'Bankable Feasibility',
    desc: 'Technical, financial and regulatory feasibility studies that stand up to lender and investor due diligence.',
  },
  {
    icon: 'BoltIcon',
    title: 'Grid Integration',
    desc: 'Interconnection and grid-impact studies that confirm point-of-delivery capacity and safe integration with the national grid.',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'Regulatory & PPA Support',
    desc: 'Navigation of IPP frameworks, energy regulation and power purchase agreements from conditional approval through to close.',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'EPC Coordination',
    desc: 'Engineering, procurement and construction coordination with rigorous document control, versioning and approval discipline.',
  },
  {
    icon: 'Cog6ToothIcon',
    title: 'Operations & Maintenance',
    desc: 'Operations, monitoring and maintenance to protect asset performance across the full project life cycle.',
  },
];

const projectFacts = [
  { k: 'Location', v: 'Kasempa District, North-Western Province, Zambia' },
  { k: 'Structure', v: 'Independent Power Producer (IPP)' },
  { k: 'Technology', v: 'Utility-scale solar PV with single-axis tracking' },
  { k: 'Capacity', v: '100 MWp / 85 MWac (Phase I: 50 MWp)' },
  { k: 'Off-taker', v: 'ZESCO direct PPA + diversified industrial off-take' },
  { k: 'PPA Status', v: 'ERB conditional approval secured' },
  { k: 'PPA Tenor', v: '20 years' },
  { k: 'Grid', v: '33 kV existing line, ZESCO substation ≤ 20 km' },
];

const differentiators = [
  {
    icon: 'GlobeAltIcon',
    title: 'Regional Focus',
    desc: 'Projects developed for Southern Africa’s energy transition, with an eye on the Southern African Power Pool and regional export pathways.',
  },
  {
    icon: 'ArrowTrendingUpIcon',
    title: 'End-to-End Development',
    desc: 'From site and resource assessment through feasibility, permitting, financing support and construction oversight.',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'Investor-Grade Discipline',
    desc: 'Every deliverable is coded, versioned and revision-logged — the document control institutional investors and lenders expect.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Community Alignment',
    desc: 'Projects built on strong local partnerships and community alignment, supporting skills development and lasting local value.',
  },
];

export default function EnergyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#150d0a]">
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-lines-bg opacity-40" />
          <div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'rgba(232,162,30,0.10)', filter: 'blur(120px)' }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'rgba(226,83,11,0.08)', filter: 'blur(100px)' }}
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
                    Energy Division
                  </span>
                </div>

                <h1 className="font-display text-white leading-[0.9] tracking-tight mb-6">
                  <span className="block text-5xl lg:text-6xl xl:text-7xl font-800">
                    Powering Africa&apos;s
                  </span>
                  <span
                    className="block text-5xl lg:text-6xl xl:text-7xl font-800"
                    style={{ color: ACCENT }}
                  >
                    Industrial Future.
                  </span>
                </h1>

                <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-lg">
                  The Betterlink Industries Energy Division develops utility-scale renewable power
                  projects — from bankable feasibility studies and grid integration through to
                  construction and operation.
                </p>

                <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-lg">
                  We structure clean, reliable and competitively priced power for mining,
                  industrial, commercial and public off-takers across the region.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {['Solar PV', 'IPP', 'Grid Integration', 'Feasibility'].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-700 tracking-widest uppercase"
                      style={{
                        border: `1px solid ${ACCENT}4D`,
                        backgroundColor: `${ACCENT}1A`,
                        color: ACCENT,
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
                    Discuss Energy Projects
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                  <a href="#flagship" className="btn-outline-white text-[0.75rem]">
                    View Flagship Project
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
                        className="text-3xl font-display font-800 mb-1"
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

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#150d0a] to-transparent" />
        </section>

        {/* ── Flagship project ── */}
        <section id="flagship" className="scroll-mt-24 py-24 bg-background grid-lines-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-2" style={{ backgroundColor: ACCENT }} />
              <span
                className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase"
                style={{ color: ACCENT }}
              >
                Flagship Project
              </span>
            </div>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <h2 className="font-display text-section-xl text-foreground mb-5">
                  Balunda Energy Park
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  A <strong className="text-foreground">100 MWp utility-scale solar</strong>{' '}
                  independent power project in Kasempa District, North-Western Zambia — developed to
                  supply clean, reliable and competitively priced electricity to mining, industrial,
                  commercial and public off-takers.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  The Bankable Feasibility Study was prepared by Betterlink Projects 360, the
                  projects and advisory arm of Betterlink Industries, covering technical, financial
                  and regulatory viability across geotechnical, hydrological, topographical and
                  grid-integration workstreams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['100 MWp Solar', 'Kasempa, Zambia', 'ERB Conditional PPA', '20-Year PPA'].map(
                    (tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="https://balunda-sun-spark.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-md text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  View the Project Website
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                  <dl className="divide-y divide-border">
                    {projectFacts.map((fact) => (
                      <div
                        key={fact.k}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4"
                      >
                        <dt className="text-xs font-800 tracking-widest uppercase text-muted-foreground sm:pt-0.5">
                          {fact.k}
                        </dt>
                        <dd className="sm:col-span-2 text-sm font-600 text-foreground">{fact.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="text-[0.7rem] text-muted-foreground mt-4 leading-relaxed">
                  Project information is provided at a high level. Detailed technical, financial and
                  contractual materials are available to qualified parties under NDA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="section-label mb-4">Energy Capabilities</span>
                <h2 className="font-display text-section-xl text-white">What We Deliver</h2>
              </div>
              <p className="text-white/55 text-base font-500 leading-relaxed max-w-sm">
                End-to-end capability across the renewable power project life cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${ACCENT}26` }}
                  >
                    <Icon name={cap.icon} size={22} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-display text-lg font-800 text-white mb-2">{cap.title}</h3>
                  <p className="text-white/55 text-sm font-500 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why us ── */}
        <section className="py-24 bg-background grid-lines-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
                <span
                  className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Why Betterlink Energy
                </span>
                <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
              </div>
              <h2 className="font-display text-section-xl text-foreground">
                Built to Bankable Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-7 shadow-sm"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${ACCENT}1A` }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: ACCENT }} />
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
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="bg-primary rounded-3xl px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${ACCENT}40 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="max-w-xl">
                  <span className="section-label mb-5">Energy Division</span>
                  <h2 className="font-display text-section-xl text-white mb-4 leading-tight">
                    Planning a Renewable Energy Project?
                  </h2>
                  <p className="text-white/60 text-lg font-500 leading-relaxed">
                    Talk to Betterlink Industries about feasibility, development and delivery of
                    utility-scale power infrastructure.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <Link href="/contact" className="btn-primary text-sm">
                    Request a Consultation
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                  <Link href="/#divisions" className="btn-outline-white text-sm">
                    All Divisions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
