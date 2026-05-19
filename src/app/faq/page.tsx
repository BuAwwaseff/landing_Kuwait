import type { Metadata } from 'next';

import { MarketPageShell } from '@/components/layout/MarketPageShell';
import { KuwaitFaqSections } from '@/components/sections/faq/KuwaitFaqSections';
import { getKuwaitContent } from '@/content/markets/kuwait';
import { getRequestLocale } from '@/lib/request-locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { faq } = getKuwaitContent(locale);

  return {
    title: faq.seo.title,
    description: faq.seo.description,
  };
}

export default async function FaqPage() {
  const locale = await getRequestLocale();
  const content = getKuwaitContent(locale);

  return (
    <MarketPageShell content={content} page="faq">
      <KuwaitFaqSections content={content.faq} />
    </MarketPageShell>
  );
}
