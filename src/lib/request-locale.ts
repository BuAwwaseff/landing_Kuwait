import { cookies } from 'next/headers';

import { localeCookieName, resolveLocale } from '@/lib/i18n';

export async function getRequestLocale() {
  const cookieStore = await cookies();

  return resolveLocale(cookieStore.get(localeCookieName)?.value);
}
