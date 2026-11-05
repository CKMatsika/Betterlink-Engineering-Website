import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const divisions = [
  { label: 'Technology & Software', href: '/solutions' },
  { label: 'Mining & Industrial', href: '/mining' },
  { label: 'Energy & Solar IPP', href: '/energy' },
  { label: 'Construction & Civils', href: '/construction' },
  { label: 'Educational ERP', href: '/educational-erp' },
];

const navigation = [
  { label: 'Overview', href: '/#vision' },
  { label: 'Group Structure', href: '/#structure' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  { label: 'Milestones', href: '/#milestones' },
  { label: 'Methodology', href: '/#approach' },
  { label: 'Project Gallery', href: '/gallery' },
  { label: 'News & Insights', href: '/news' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#dce2e9] text-[#071529]">
      <div className="wrap py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#dce2e9]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/assets/images/betterlink-symbol.png"
                  alt="Betterlink Emblem"
                  width={48}
                  height={52}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold text-[#071529] tracking-[0.14em] uppercase leading-tight group-hover:text-[#e2530b] transition-colors">
                  Betterlink
                </span>
                <span className="text-[0.625rem] font-semibold text-[#606a78] tracking-[0.22em] uppercase leading-none mt-0.5">
                  Industries
                </span>
              </div>
            </Link>

            <p className="text-[0.9375rem] text-[#606a78] leading-relaxed max-w-md mb-6">
              A multi-disciplinary African engineering and industrial holding group. Delivering
              integrated excellence across software intelligence, heavy mining machinery,
              utility-scale renewable power, and critical civil infrastructure.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="badge-pill">Harare, Zimbabwe</span>
              <span className="badge-pill">Ministry of Mines Registered</span>
              <span className="badge-pill">Regional Reach</span>
            </div>
          </div>

          {/* Operating Divisions */}
          <div className="lg:col-span-3">
            <p className="text-[0.75rem] font-bold text-[#071529] uppercase tracking-[0.14em] mb-5">
              Operating Divisions
            </p>
            <ul className="space-y-3">
              {divisions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-[#606a78] hover:text-[#e2530b] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Navigation */}
          <div className="lg:col-span-2">
            <p className="text-[0.75rem] font-bold text-[#071529] uppercase tracking-[0.14em] mb-5">
              Group
            </p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-[#606a78] hover:text-[#071529] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters / Contact */}
          <div className="lg:col-span-2">
            <p className="text-[0.75rem] font-bold text-[#071529] uppercase tracking-[0.14em] mb-5">
              Executive Desk
            </p>
            <div className="space-y-3 text-[0.875rem] text-[#606a78]">
              <p className="font-medium text-[#071529]">Group Headquarters</p>
              <p>Harare, Zimbabwe</p>
              <p>
                <a
                  href="mailto:info@betterlinkengineering.co.zw"
                  className="hover:text-[#e2530b] transition-colors break-words font-medium"
                >
                  info@betterlinkengineering.co.zw
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="text-xs text-[#606a78] hover:text-[#071529] underline underline-offset-4"
                >
                  Corporate Portal
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#606a78]">
          <p>© {new Date().getFullYear()} Betterlink Industries (Pvt) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#071529] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#071529] transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
