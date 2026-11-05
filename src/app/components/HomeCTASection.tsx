'use client';

import React, { useState } from 'react';

const divisionsList = [
  'Technology & Software Systems',
  'Mining Boilers & Wash Plants',
  'Energy & Utility Solar IPP',
  'Construction & Telecom Civils',
  'Educational ERP Systems',
  'General Group Partnership',
];

export default function HomeCTASection() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    serviceRequired: divisionsList[0],
    projectDescription: '',
    companyWebsite: '', // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyWebsite) {
      // bot trapped
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          organisation: formData.organisation || 'N/A',
          position: 'Executive',
          email: formData.email,
          phone: formData.phone || 'N/A',
          country: 'Zimbabwe',
          serviceRequired: formData.serviceRequired,
          projectDescription: formData.projectDescription,
          estimatedTimeline: 'Immediate',
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please contact us directly via email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dark-section section wrap" id="contact" aria-labelledby="contact-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Heading & Direct Coordinates */}
        <div className="lg:col-span-5">
          <p className="eyebrow light">07 / Corporate inquiries</p>
          <h2
            id="contact-heading"
            className="text-white text-[clamp(2.4rem,4.5vw,4.2rem)] font-light leading-[1.05] tracking-[-0.03em] mb-6"
          >
            Shared ambition.
            <br />
            <span className="font-semibold text-[#e2530b]">Lasting partnerships.</span>
          </h2>

          <p className="text-white/70 text-[1.0625rem] leading-relaxed mb-10">
            Whether scoping a multi-megawatt solar plant, commissioning a 1 Ton industrial boiler,
            deploying base station civil works, or architecting custom software, connect with our
            executive engineering desk in Harare.
          </p>

          <div className="space-y-6 pt-6 border-t border-white/15">
            <div>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-1">
                Executive Headquarters
              </p>
              <p className="text-white font-medium">Harare, Zimbabwe</p>
              <p className="text-sm text-white/70">Pan-African Operations &amp; Delivery</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-1">
                Direct Electronic Mail
              </p>
              <a
                href="mailto:clemence@betterlinkengineering.co.zw"
                className="text-white hover:text-[#e2530b] font-medium transition-colors text-base"
              >
                clemence@betterlinkengineering.co.zw
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-1">
                Statutory Status
              </p>
              <p className="text-sm text-white/70">
                Registered with the Ministry of Mines &amp; Mining Development
              </p>
            </div>
          </div>
        </div>

        {/* Right: Modern Embedded Inquiry Form */}
        <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10 backdrop-blur-md">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Transmitted</h3>
              <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Betterlink Industries. Our engineering desk has received
                your brief and will respond within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field */}
              <input
                type="text"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tendai Moyo"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="organisation">
                    Organisation / Company *
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    required
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="e.g. Anglo American / TelOne"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label" htmlFor="email">
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+263 ..."
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="serviceRequired">
                  Division of Interest *
                </label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="form-input bg-[#071529] text-white"
                >
                  {divisionsList.map((div) => (
                    <option key={div} value={div} className="bg-[#071529] text-white">
                      {div}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="projectDescription">
                  Project Scope &amp; Brief *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={4}
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Summarize project requirements, site location, timeline, and technical objectives..."
                  className="form-input resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-400 bg-red-950/40 p-3 rounded border border-red-800/40">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#e2530b] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#c14305] transition-all disabled:opacity-50"
              >
                {loading ? 'Transmitting Brief...' : 'Transmit Project Brief →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
