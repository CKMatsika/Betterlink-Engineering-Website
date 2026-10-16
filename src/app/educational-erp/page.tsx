import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Educational ERP — Integrated School Management | Betterlink Engineering',
  description:
    'Educational ERP is an integrated school management system by Betterlink Engineering — admissions, academics, examinations, attendance, fees & invoicing, finance & accounting, HR, boarding, library, communication and analytics on one multi-school platform.',
  alternates: {
    canonical: 'https://www.betterlinkengineering.co.zw/educational-erp',
  },
  openGraph: {
    title: 'Educational ERP — Integrated School Management',
    description:
      'Run the whole school on one platform: admissions, academics, fees & invoicing, finance & accounting, HR, boarding, library, communication and analytics.',
    url: 'https://www.betterlinkengineering.co.zw/educational-erp',
  },
};

const ACCENT = '#E2530B';
const LIVE_URL = 'https://handehigh-production-mbxi6c.laravel.cloud/';

const heroBadges = ['Multi-School', 'Fees & Invoicing', 'Finance & Accounting', 'AI Insights'];

const heroStats = [
  { value: 'One Platform', label: 'Academics · Finance · Admin' },
  { value: 'Multi-School', label: 'Multi-Tenant by Design' },
  { value: 'Term-Based', label: 'Accounting & Reporting' },
  { value: 'Role-Based', label: 'Granular Permissions' },
];

const modules = [
  {
    icon: 'ClipboardDocumentListIcon',
    title: 'Admissions & Enrolment',
    desc: 'Bulk enrolment, student records, class placement, transfers, promotion and graduation clearance across the full student lifecycle.',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Academics & Curriculum',
    desc: 'Classes, streams, subjects and curricula with teacher allocation and subject management for every grade.',
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Examinations & Results',
    desc: 'Exam setup, marks capture, result registers and academic performance reporting per subject, class and student.',
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Attendance',
    desc: 'Daily student and staff attendance with registers, summaries and exportable reporting.',
  },
  {
    icon: 'ReceiptPercentIcon',
    title: 'Fees, Invoicing & Receipts',
    desc: 'Fee structures, bulk and auto-generated invoices, scheduled billing, payments, receipts and student statements.',
  },
  {
    icon: 'CalculatorIcon',
    title: 'Finance & Accounting',
    desc: 'Chart of accounts, journals, general ledger, trial balance, income statement, balance sheet and cash-flow reporting.',
  },
  {
    icon: 'BanknotesIcon',
    title: 'Cashbook & Reconciliations',
    desc: 'Cashbook, bank accounts, cash and interbank transfers with automated bank reconciliation.',
  },
  {
    icon: 'PresentationChartLineIcon',
    title: 'Budgets & Procurement',
    desc: 'Budget workflows with review and approval, plus bills, vendors and purchasing control.',
  },
  {
    icon: 'BriefcaseIcon',
    title: 'HR & Staff',
    desc: 'Teacher and staff records, qualifications, roles, permissions and staff attendance in one place.',
  },
  {
    icon: 'HomeModernIcon',
    title: 'Boarding & Hostels',
    desc: 'Hostels, dormitories and bed allocation with residency transitions and full boarding management.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Analytics & AI Finance',
    desc: 'Dashboards plus AI-assisted financial health scoring, anomaly detection and forecasting.',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Communication',
    desc: 'Internal messaging, SMS and email to reach staff and parents from a single platform.',
  },
];

const alsoIncluded = [
  'Parent, Student & Librarian Portals',
  'Library Management',
  'SDA & Committee Governance',
  'Kiosk & Canteen Point-of-Sale',
  'Multi-School Administration',
  'Currency & Payment Methods',
  'Role-Based Permissions',
  'PDF Printing & Excel Exports',
];

const audiences = [
  {
    icon: 'AcademicCapIcon',
    title: 'Private & Public Schools',
    desc: 'A single, integrated system to run day-to-day academics, finance and administration.',
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Multi-School Groups',
    desc: 'Manage several schools from one deployment, each with isolated data, users and branding.',
  },
  {
    icon: 'HomeModernIcon',
    title: 'Boarding Schools',
    desc: 'Hostel, dormitory and residency management built into the same platform as academics and billing.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'School Development Bodies',
    desc: 'Committee, meeting, minutes and resolution workflows for development associations and governing bodies.',
  },
];

const whyPartner = [
  {
    icon: 'Squares2X2Icon',
    title: 'One Integrated System',
    desc: 'Academics, finance, boarding and administration share one database — no more stitching spreadsheets together.',
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Multi-School by Design',
    desc: 'A multi-tenant architecture lets groups run multiple schools with strict data separation.',
  },
  {
    icon: 'ReceiptPercentIcon',
    title: 'Automated Billing',
    desc: 'Generate invoices in bulk or on a monthly schedule, with fee structures configured per grade and term.',
  },
  {
    icon: 'LockClosedIcon',
    title: 'Controls & Security',
    desc: 'Role-based permissions and audit trails keep sensitive financial and student data protected.',
  },
  {
    icon: 'CloudArrowUpIcon',
    title: 'Accessible Anywhere',
    desc: 'A modern web application staff can access from desktop, tablet or phone — no local installs.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Delivered & Supported Locally',
    desc: 'Implemented, deployed and supported by Betterlink Engineering, with training and ongoing support.',
  },
];

export default function EducationalErpPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#150d0a]">
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 grid-lines-bg opacity-40" />
          <div
            className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'rgba(226,83,11,0.10)', filter: 'blur(120px)' }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'rgba(180,0,1,0.14)', filter: 'blur(100px)' }}
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
                    Software Product · Education
                  </span>
                </div>

                <h1 className="font-display text-white leading-[0.9] tracking-tight mb-6">
                  <span className="block text-5xl lg:text-6xl font-800">Educational ERP</span>
                  <span
                    className="block text-3xl lg:text-4xl xl:text-5xl font-800 mt-2"
                    style={{ color: ACCENT }}
                  >
                    Integrated School Management.
                  </span>
                </h1>

                <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-lg">
                  Run the whole school on one platform — admissions, academics, examinations,
                  attendance, fees &amp; invoicing, finance &amp; accounting, HR, boarding, library,
                  communication and analytics.
                </p>

                <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-lg">
                  Built by Betterlink Engineering for single schools and multi-school groups, and
                  now live in production.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {heroBadges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-700 tracking-widest uppercase"
                      style={{
                        border: `1px solid ${ACCENT}4D`,
                        backgroundColor: `${ACCENT}1A`,
                        color: '#F7B08A',
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
                    Request a Demo
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                  <a href="#modules" className="btn-outline-white text-[0.75rem]">
                    Product Overview
                  </a>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-5">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.value}
                      className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-accent/30 hover:bg-white/8 transition-all duration-300"
                    >
                      <div
                        className="font-display text-2xl font-800 mb-2 leading-tight"
                        style={{ color: ACCENT }}
                      >
                        {stat.value}
                      </div>
                      <p className="text-white/55 text-xs font-700 tracking-widest uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background" />
        </section>

        {/* ── Modules ── */}
        <section id="modules" className="scroll-mt-24 py-24 bg-background grid-lines-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="section-label mb-4">Everything in One System</span>
                <h2 className="font-display text-section-xl text-foreground">
                  One Platform for the Whole School
                </h2>
              </div>
              <p className="text-muted-foreground text-base font-500 leading-relaxed max-w-sm">
                Educational ERP replaces disconnected tools and spreadsheets with a single,
                integrated school management platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((item) => (
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

            {/* Also included */}
            <div className="mt-12 bg-muted border border-border rounded-2xl p-8">
              <p className="text-xs font-800 tracking-[0.3em] text-muted-foreground uppercase mb-5">
                Also Included
              </p>
              <div className="flex flex-wrap gap-3">
                {alsoIncluded.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-xs font-700 text-foreground"
                  >
                    <Icon
                      name="CheckCircleIcon"
                      size={14}
                      className="text-accent"
                      variant="solid"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Who it is for ── */}
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
                <span
                  className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase"
                  style={{ color: ACCENT }}
                >
                  Who It Is For
                </span>
                <span className="w-8 h-px" style={{ backgroundColor: ACCENT }} />
              </div>
              <h2 className="font-display text-section-xl text-white">
                Built for Schools of Every Size
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((item) => (
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

        {/* ── Why Educational ERP ── */}
        <section className="py-24 bg-background grid-lines-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-14">
              <span className="section-label mb-4">Why Educational ERP</span>
              <h2 className="font-display text-section-xl text-foreground mb-4">
                Engineered for the Operational Reality of Schools
              </h2>
              <p className="text-muted-foreground text-base font-500 leading-relaxed">
                Not a generic admin tool — a purpose-built school management system that reflects
                how schools actually run, from admissions to year-end.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(226,83,11,0.1)' }}
                  >
                    <Icon name={item.icon} size={20} className="text-accent" />
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
        <section className="py-24 bg-[#150d0a] relative overflow-hidden">
          <div className="absolute inset-0 grid-lines-bg opacity-30" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'rgba(226,83,11,0.12)', filter: 'blur(120px)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <span
              className="text-[0.6875rem] font-800 tracking-[0.35em] uppercase"
              style={{ color: ACCENT }}
            >
              See Educational ERP in Action
            </span>
            <h2 className="font-display text-section-xl text-white mt-4 mb-5">
              Bring Educational ERP to Your School
            </h2>
            <p className="text-white/55 text-base font-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Book a guided walkthrough for your school or group. We will map Educational ERP to
              your academic calendar, fee structures and reporting requirements.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-white text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Request a Demo
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-[0.75rem]"
              >
                Sign In to the Live System
                <Icon name="ArrowTopRightOnSquareIcon" size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
