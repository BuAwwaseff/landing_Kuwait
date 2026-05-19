import { NextResponse } from 'next/server';

import { localeCookieName, resolveLocale } from '@/lib/i18n';

type LocalePayload = {
  locale?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as LocalePayload;
  const locale = resolveLocale(body.locale);
  const response = NextResponse.json({ ok: true, locale });

  response.cookies.set(localeCookieName, locale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
