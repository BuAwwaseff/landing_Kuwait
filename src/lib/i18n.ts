import type { Direction } from '@/lib/direction';

export const supportedLocales = ['ar', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeCookieName = 'landing-locale';

const localeDirections: Record<Locale, Direction> = {
  ar: 'rtl',
  en: 'ltr',
};

export function isSupportedLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes((value ?? '') as Locale);
}

export function resolveLocale(value: string | null | undefined): Locale {
  return isSupportedLocale(value) ? value : 'ar';
}

export function getLocaleDirection(locale: Locale): Direction {
  return localeDirections[locale];
}
