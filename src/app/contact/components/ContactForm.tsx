'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  organisation: string;
  position: string;
  email: string;
  phone: string;
  country: string;
  serviceRequired: string;
  projectDescription: string;
  estimatedTimeline: string;
}

const serviceOptions = [
  'Software Development',
  'Artificial Intelligence & Machine Learning',
  'Cybersecurity',
  'Penetration Testing',
  'ERP Implementation',
  'Legacy System Modernisation',
  'Systems Integration',
  'API Integration',
  'Business Analysis',
  'ERP Functional Consulting',
  'ICT Project Management',
  'Education Technology',
  'Other',
];

const timelineOptions = [
  'Immediate — within 1 month',
  'Short term — 1 to 3 months',
  'Medium term — 3 to 6 months',
  'Long term — 6 to 12 months',
  'Planning stage — not yet defined',
];

const initialForm: FormData = {
  fullName: '',
  organisation: '',
  position: '',
  email: '',
  phone: '',
  country: '',
  serviceRequired: '',
  projectDescription: '',
  estimatedTimeline: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mock submission — connect to backend/email service here
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl border border-border p-12 flex flex-col items-center text-center gap-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(29,106,229,0.12)' }}
        >
          <Icon name="CheckCircleIcon" size={32} className="text-accent" variant="solid" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-800 text-foreground mb-2">
            Enquiry Submitted
          </h3>
          <p className="text-muted-foreground text-base font-500 leading-relaxed max-w-md">
            Thank you for your enquiry, {form.fullName.split(' ')[0]}. Betterlink Engineering will review your requirements and respond to{' '}
            <strong className="text-foreground">{form.email}</strong>.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="btn-outline-dark"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
      <h2 className="font-display text-2xl font-800 text-foreground mb-2">
        Project Enquiry
      </h2>
      <p className="text-muted-foreground text-sm font-500 mb-8">
        Complete the form below and Betterlink Engineering will be in touch.
      </p>

      <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
        {/* Row 1: Full Name + Organisation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Tendai Moyo"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="organisation" className="form-label">
              Organisation <span className="text-accent">*</span>
            </label>
            <input
              id="organisation"
              name="organisation"
              type="text"
              required
              autoComplete="organization"
              value={form.organisation}
              onChange={handleChange}
              placeholder="Your organisation name"
              className="form-input"
            />
          </div>
        </div>

        {/* Row 2: Position + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="position" className="form-label">
              Position / Title
            </label>
            <input
              id="position"
              name="position"
              type="text"
              autoComplete="organization-title"
              value={form.position}
              onChange={handleChange}
              placeholder="e.g. Chief Executive Officer"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@organisation.co.zw"
              className="form-input"
            />
          </div>
        </div>

        {/* Row 3: Phone + Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+263 77 000 0000"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              value={form.country}
              onChange={handleChange}
              placeholder="Zimbabwe"
              className="form-input"
            />
          </div>
        </div>

        {/* Row 4: Service Required */}
        <div className="mb-5">
          <label htmlFor="serviceRequired" className="form-label">
            Service Required <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <select
              id="serviceRequired"
              name="serviceRequired"
              required
              value={form.serviceRequired}
              onChange={handleChange}
              className="form-input appearance-none pr-10"
            >
              <option value="" disabled>Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon name="ChevronDownIcon" size={16} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Row 5: Project Description */}
        <div className="mb-5">
          <label htmlFor="projectDescription" className="form-label">
            Project Description <span className="text-accent">*</span>
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            rows={5}
            value={form.projectDescription}
            onChange={handleChange}
            placeholder="Describe your technology challenge, project requirements or what you are trying to achieve. The more context you provide, the better we can respond."
            className="form-input resize-none"
          />
        </div>

        {/* Row 6: Estimated Timeline */}
        <div className="mb-8">
          <label htmlFor="estimatedTimeline" className="form-label">
            Estimated Timeline
          </label>
          <div className="relative">
            <select
              id="estimatedTimeline"
              name="estimatedTimeline"
              value={form.estimatedTimeline}
              onChange={handleChange}
              className="form-input appearance-none pr-10"
            >
              <option value="">Select a timeline...</option>
              {timelineOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon name="ChevronDownIcon" size={16} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {submitting ? (
            <>
              <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
              Submitting Enquiry...
            </>
          ) : (
            <>
              Submit Enquiry
              <Icon name="ArrowRightIcon" size={16} />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center mt-4 font-500">
          Betterlink Engineering treats all enquiries with strict confidentiality.
        </p>
      </form>
    </div>
  );
}