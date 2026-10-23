import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  // Run on everything except Next internals and static assets.
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|map)$).*)',
  ],
};
