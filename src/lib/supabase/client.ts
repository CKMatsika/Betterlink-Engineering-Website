'use client';

import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './database.types';
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from './config';

/**
 * Browser-side Supabase client.
 *
 * Uses the public anon key only — never the service-role key. Safe to use in
 * client components for reads (RLS restricts what is visible) and for auth.
 */
export function createClient() {
  if (!isSupabaseConfigured) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    );
  }

  return createBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
}
