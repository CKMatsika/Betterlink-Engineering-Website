import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

/**
 * Privileged Supabase client using the service-role key.
 *
 * SERVER-ONLY. This bypasses Row Level Security, so it must never be imported
 * into client components or exposed to the browser. Use it for admin writes
 * (content CRUD) and storage uploads from Server Actions / Route Handlers.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'Supabase admin is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    );
  }

  return createSupabaseClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
