import React from 'react';
import { notFound } from 'next/navigation';

const sections: Record<string, { title: string; description: string }> = {
  projects: {
    title: 'Projects',
    description: 'Create, edit and publish projects shown across the website.',
  },
  services: {
    title: 'Services',
    description: 'Manage the services listed for each division.',
  },
  gallery: {
    title: 'Gallery',
    description: 'Upload and organise gallery images.',
  },
  news: {
    title: 'News & Insights',
    description: 'Write and publish articles and company updates.',
  },
  stats: {
    title: 'Statistics',
    description: 'Update the headline figures displayed on the site.',
  },
  settings: {
    title: 'Site Settings',
    description: 'Contact details, company information and global site settings.',
  },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export default async function AdminSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const meta = sections[section];

  if (!meta) {
    notFound();
  }

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-3xl font-800 text-foreground mb-2">{meta.title}</h1>
      <p className="text-muted-foreground font-500 mb-8">{meta.description}</p>

      <div className="bg-card border border-dashed border-border rounded-2xl p-10 text-center">
        <p className="font-display text-lg font-800 text-foreground mb-2">Coming next</p>
        <p className="text-sm text-muted-foreground font-500 max-w-md mx-auto">
          The editing tools for <strong className="text-foreground">{meta.title}</strong> will be
          enabled in an upcoming phase. The database, authentication and admin shell are already in
          place.
        </p>
      </div>
    </div>
  );
}
