import type { Metadata } from 'next';

import { MarketPageShell } from '@/components/layout/MarketPageShell';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { KuwaitGamesSection } from '@/components/sections/home/KuwaitGamesSection';
import { KuwaitOffersSection } from '@/components/sections/home/KuwaitOffersSection';
import { KuwaitSportsSection } from '@/components/sections/home/KuwaitSportsSection';
import { FinalCtaSection } from '@/components/sections/shared/FinalCtaSection';
import { getKuwaitContent } from '@/content/markets/kuwait';
import { getRequestLocale } from '@/lib/request-locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { home } = getKuwaitContent(locale);

  return {
    title: home.seo.title,
    description: home.seo.description,
  };
}

export default async function HomePage() {
  const locale = await getRequestLocale();
  const content = getKuwaitContent(locale);
  const { home } = content;

  return (
    <MarketPageShell content={content} page="home">
      <HomeHeroSection hero={home.hero} />
      <KuwaitGamesSection section={home.games} />
      <KuwaitSportsSection section={home.sports} />
      <KuwaitOffersSection section={home.offers} />
      <FinalCtaSection content={home.finalCta} tone="player" />
    </MarketPageShell>
  );
}
