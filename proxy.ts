import { NextRequest, NextResponse } from 'next/server';
import { LANGS, isValidLang } from '@/lib/utils';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already has a valid lang prefix — let through
  const hasLang = LANGS.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );
  if (hasLang) return NextResponse.next();

  // Parse Accept-Language header
  const acceptLang = request.headers.get('accept-language') ?? '';
  const preferred = acceptLang
    .split(',')
    .map((s) => s.split(';')[0].trim().toLowerCase().slice(0, 2))
    .find((l) => isValidLang(l)) ?? 'en';

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|.*\\..*).*)'],
};
