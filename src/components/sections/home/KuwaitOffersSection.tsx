import type { OffersSectionContent } from '@/content/markets/types';

import { SectionShell } from '@/components/layout/SectionShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { Button } from '@/components/ui/Button';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type KuwaitOffersSectionProps = {
  section: OffersSectionContent;
};

export function KuwaitOffersSection({ section }: KuwaitOffersSectionProps) {
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
            <SurfaceCard className="offer-card h-full" data-hover="lift" data-reveal="scale" key={card.title} variant="stage">
              {card.media ? <MediaSlot className="offer-card__media" media={card.media} /> : null}
              <div className="offer-card__body">
                <div className="offer-card__meta">
                  {card.eyebrow ? <span className="content-card__eyebrow">{card.eyebrow}</span> : null}
                  {card.metric ? <span className="offer-card__metric">{card.metric}</span> : null}
                </div>
                <h3 className="content-card__title">{card.title}</h3>
                <p className="content-card__description">{card.description}</p>
                {card.bullets?.length ? (
                  <div className="content-card__bullets">
                    {card.bullets.map((bullet) => (
                      <div className="content-card__bullet" key={bullet}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="offer-card__footer">
                  {card.tags?.length ? (
                    <div className="content-card__tags">
                      {card.tags.map((tag) => (
                        <span className="content-card__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <Button href={card.href} size="md">
                    {card.ctaLabel}
                  </Button>
                </div>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>
    </RevealGroup>
  );
}
