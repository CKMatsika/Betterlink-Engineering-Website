import React from 'react';
import Icon from '@/components/ui/AppIcon';


const servicesList = [
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
];

const contactEmails = [
  { label: 'General Enquiries', email: 'info@betterlinkengineering.co.zw', icon: 'EnvelopeIcon' },
  { label: 'Sales', email: 'sales@betterlinkengineering.co.zw', icon: 'CurrencyDollarIcon' },
  { label: 'Support', email: 'support@betterlinkengineering.co.zw', icon: 'LifebuoyIcon' },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Email contacts */}
      <div>
        <h2 className="font-display text-xl font-800 text-foreground mb-5">
          Get in Touch
        </h2>
        <div className="flex flex-col gap-4">
          {contactEmails.map((contact) => (
            <div
              key={contact.email}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-muted"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(29,106,229,0.1)' }}
              >
                <Icon name={contact.icon as any} size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-800 tracking-wide text-muted-foreground uppercase mb-1">
                  {contact.label}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-600 text-foreground hover:text-accent transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services reference */}
      <div className="bg-primary rounded-2xl p-6">
        <p className="text-xs font-800 tracking-[0.3em] text-white/40 uppercase mb-4">
          Services Available
        </p>
        <div className="flex flex-col gap-2">
          {servicesList.map((service) => (
            <div key={service} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
              <span className="text-sm font-500 text-white/70">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Domain */}
      <div className="bg-muted rounded-xl p-5 border border-border">
        <p className="text-xs font-800 tracking-widest text-muted-foreground uppercase mb-2">Website</p>
        <a
          href="https://www.betterlinkengineering.co.zw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-600 text-accent hover:underline"
        >
          www.betterlinkengineering.co.zw
        </a>
      </div>
    </div>
  );
}