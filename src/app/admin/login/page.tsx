import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Admin Sign In — Betterlink Industries',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background grid-lines-light">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors mb-6"
        >
          ← Back to website
        </Link>

        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
          <div className="mb-8">
            <span className="section-label">Admin Portal</span>
            <h1 className="font-display text-3xl font-800 text-foreground mt-4">Sign In</h1>
            <p className="text-muted-foreground text-sm font-500 mt-2">
              Sign in to manage Betterlink Industries website content.
            </p>
          </div>

          <Suspense
            fallback={<p className="text-sm text-muted-foreground font-500">Loading form…</p>}
          >
            <LoginForm />
          </Suspense>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6 font-500">
          Authorised personnel only. All access is logged.
        </p>
      </div>
    </div>
  );
}
