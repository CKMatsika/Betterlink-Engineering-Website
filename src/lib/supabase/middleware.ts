import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Refreshes the Supabase auth session for the incoming request and guards the
 * /admin area. Returns the response that should be returned from middleware.
 */
export async function updateSession(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Until Supabase is configured, don't interfere with any request.
  if (!url || !anonKey) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // IMPORTANT: keep getUser() directly after createServerClient and do not add
  // logic in between — it refreshes the token and keeps the session valid.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/');
  const isLoginRoute = pathname === '/admin/login' || pathname.startsWith('/admin/login/');

  if (isAdminRoute && !isLoginRoute && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin/login';
    redirectUrl.searchParams.set('redirectedFrom', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (isLoginRoute && user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/admin';
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl);
  }

  return supabaseResponse;
}
