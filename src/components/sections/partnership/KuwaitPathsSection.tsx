import type { PartnershipPathsSection } from '@/content/markets/types';

import { SectionShell } from '@/components/layout/SectionShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { Button } from '@/components/ui/Button';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type KuwaitPathsSectionProps = {
  section: PartnershipPathsSection;
};

export function KuwaitPathsSection({ section }: KuwaitPathsSectionProps) {
  return (
    <RevealGroup>
      <SectionShell
        description={section.description}
        eyebrow={section.eyebrow}
        id={section.id}
        title={section.title}
        tone="soft"
      >
        <div className="section-card-grid section-card-grid--two">
          {section.cards.map((card) => (
            <SurfaceCard className="path-card h-full" data-hover="tilt" data-reveal="scale" key={card.title} variant="stage">
              <MediaSlot className="path-card__media" media={card.media} />
              <div className="path-card__body">
                <div className="path-card__meta">
                  <span className="content-card__eyebrow">{card.eyebrow}</span>
                  <span className="path-card__value" dir="ltr">
                    {card.value}
                  </span>
                </div>
                <h3 className="content-card__title">{card.title}</h3>
                <p className="content-card__description">{card.description}</p>
                <div className="path-card__note">{card.note}</div>
                <div className="content-card__bullets">
                  {card.bullets.map((bullet) => (
                    <div className="content-card__bullet" key={bullet}>
                      {bullet}
                    </div>
                  ))}
                </div>
                <Button className="path-card__action" href={card.href} size="md">
                  {card.ctaLabel}
                </Button>
              </div>
            </SurfaceCard>
          ))}
        </div>
        <p className="section-footnote" data-reveal>
          {section.footerNote}
        </p>
      </SectionShell>
    </RevealGroup>
  );
}
