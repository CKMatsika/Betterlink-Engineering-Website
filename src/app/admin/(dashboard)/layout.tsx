import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { signOutAction } from '@/app/admin/actions';
import AdminNav from './components/AdminNav';
import AdminNotConfigured from './components/AdminNotConfigured';

export const metadata: Metadata = {
  title: 'Admin — Betterlink Industries',
  robots: { index: false, follow: false },
};

// Always render on the server (reads the auth session from cookies).
export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!isSupabaseConfigured) {
    return <AdminNotConfigured />;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-muted flex flex-col md:flex-row">
      <aside className="md:w-64 md:min-h-screen bg-[#120a08] text-white flex flex-col">
        <div className="px-5 py-6 border-b border-white/10">
          <p className="text-[0.65rem] font-800 uppercase tracking-[0.25em] text-accent">
            Betterlink
          </p>
          <p className="font-display text-lg font-800 text-white leading-tight">Admin Console</p>
        </div>

        <div className="p-3">
          <AdminNav />
        </div>

        <div className="mt-auto p-3 border-t border-white/10">
          {user.email && (
            <p className="px-3 py-2 text-xs text-white/50 truncate" title={user.email}>
              {user.email}
            </p>
          )}
          <form action={signOutAction}>
            <button
              type="submit"
              className="w-full text-left px-3 py-2 rounded-md text-sm font-600 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between gap-4">
          <p className="text-sm font-700 text-muted-foreground uppercase tracking-wider">
            Content Management
          </p>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-700 text-accent hover:underline"
          >
            View Site ↗
          </Link>
        </header>
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
