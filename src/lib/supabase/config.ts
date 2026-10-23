/**
 * Shared Supabase environment configuration.
 *
 * Safe to import from both server and client code. `NEXT_PUBLIC_*` values are
 * inlined at build time, so this works in the browser bundle too.
 */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

/** Whether the public Supabase environment variables are present. */
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
