'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/config';

/** Sign the current admin user out and return to the login screen. */
export async function signOutAction() {
  if (isSupabaseConfigured) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect('/admin/login');
}
