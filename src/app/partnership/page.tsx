import type { Metadata } from 'next';

import { MarketPageShell } from '@/components/layout/MarketPageShell';
import { PartnershipContactCtaSection } from '@/components/sections/partnership/PartnershipContactCtaSection';
import { PartnershipHeroSection } from '@/components/sections/partnership/PartnershipHeroSection';
import { KuwaitBenefitsSection } from '@/components/sections/partnership/KuwaitBenefitsSection';
import { KuwaitPathsSection } from '@/components/sections/partnership/KuwaitPathsSection';
import { KuwaitToolsSection } from '@/components/sections/partnership/KuwaitToolsSection';
import { StepsSection } from '@/components/sections/shared/StepsSection';
import { getKuwaitContent } from '@/content/markets/kuwait';
import { getRequestLocale } from '@/lib/request-locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { partnership } = getKuwaitContent(locale);

  return {
    title: partnership.seo.title,
    description: partnership.seo.description,
  };
}

export default async function PartnershipPage() {
  const locale = await getRequestLocale();
  const content = getKuwaitContent(locale);
  const { partnership } = content;

  return (
    <MarketPageShell content={content} page="partnership">
      <PartnershipHeroSection hero={partnership.hero} />
      <KuwaitBenefitsSection section={partnership.benefits} />
      <StepsSection section={partnership.steps} />
      <KuwaitPathsSection section={partnership.paths} />
      <KuwaitToolsSection section={partnership.tools} />
      <PartnershipContactCtaSection content={partnership.finalCta} />
    </MarketPageShell>
  );
}
