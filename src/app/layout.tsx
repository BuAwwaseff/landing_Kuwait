import type { Metadata } from 'next';
import { Alexandria, Noto_Kufi_Arabic } from 'next/font/google';
import type { ReactNode } from 'react';

import { getKuwaitContent } from '@/content/markets/kuwait';
import { getRequestLocale } from '@/lib/request-locale';

import './globals.css';

const bodyFont = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const displayFont = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-display',
  weight: ['500', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MELBET Kuwait',
  description: 'A premium Kuwait market landing for players, partners, and agents.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getRequestLocale();
  const content = getKuwaitContent(locale);

  return (
    <html dir={content.direction} lang={content.locale}>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
