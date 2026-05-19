'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { joinClasses } from '@/lib/classes';
import { type Locale } from '@/lib/i18n';

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

const languageOptions: Array<{ code: Locale; shortLabel: string }> = [
  { code: 'ar', shortLabel: 'AR' },
  { code: 'en', shortLabel: 'EN' },
];

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const persistLocale = async (nextLocale: Locale) => {
    await fetch('/api/locale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ locale: nextLocale }),
    });
  };

  const handleSelect = async (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    await persistLocale(nextLocale);

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div aria-label={label} className="locale-switcher" role="group">
      {languageOptions.map((option) => (
        <button
          className={joinClasses('locale-switcher__button', locale === option.code && 'is-active')}
          disabled={isPending || locale === option.code}
          key={option.code}
          onClick={() => {
            void handleSelect(option.code);
          }}
          type="button"
        >
          {option.shortLabel}
        </button>
      ))}
    </div>
  );
}
