import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from './database.types';
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from './config';

/**
 * Server-side Supabase client bound to the current request's cookies.
 *
 * Use this in Server Components, Server Actions and Route Handlers. Returns a
 * client only when Supabase is configured; otherwise `createClient()` throws.
 */
export async function createClient() {
  if (!isSupabaseConfigured) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    );
  }

  const cookieStore = await cookies();

  return createServerClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        // Called from a Server Component; cookie writes are ignored there. The
        // middleware refreshes the session on every request instead.
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          /* no-op */
        }
      },
    },
  });
}

export { isSupabaseConfigured };
