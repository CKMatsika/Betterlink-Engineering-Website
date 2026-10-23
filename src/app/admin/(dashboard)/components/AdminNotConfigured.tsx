import React from 'react';
import Link from 'next/link';

/**
 * Shown when the admin area is opened before Supabase has been configured.
 * Keeps the route from crashing while the backend keys are still pending.
 */
export default function AdminNotConfigured() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background grid-lines-light">
      <div className="w-full max-w-lg bg-card rounded-2xl border border-border p-8 shadow-sm">
        <span className="section-label">Admin Portal</span>
        <h1 className="font-display text-3xl font-800 text-foreground mt-4 mb-3">
          Backend Not Configured
        </h1>
        <p className="text-muted-foreground text-base font-500 leading-relaxed mb-6">
          The admin portal is built but not yet wired to a database. Complete these steps to
          activate it:
        </p>
        <ol className="text-sm text-foreground font-500 space-y-3 list-decimal list-inside mb-8">
          <li>
            Add your Supabase <code className="text-accent">anon</code> and{' '}
            <code className="text-accent">service_role</code> keys to <code>.env</code>.
          </li>
          <li>
            Run <code className="text-accent">supabase/migrations/0001_init.sql</code> in the
            Supabase SQL Editor.
          </li>
          <li>Create your admin user under Authentication → Users.</li>
        </ol>
        <Link href="/" className="btn-outline-dark">
          Return to website
        </Link>
      </div>
    </div>
  );
}
