import type { PartnershipToolsSection } from '@/content/markets/types';

import { SectionShell } from '@/components/layout/SectionShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type KuwaitToolsSectionProps = {
  section: PartnershipToolsSection;
};

export function KuwaitToolsSection({ section }: KuwaitToolsSectionProps) {
  return (
    <RevealGroup>
      <SectionShell
        description={section.description}
        eyebrow={section.eyebrow}
        id={section.id}
        title={section.title}
        tone="emphasis"
      >
        <div className="tools-grid">
          <SurfaceCard className="tools-stage h-full" data-hover="tilt" data-reveal="scale" variant="stage">
            <div className="tools-stage__top">
              <div>
                <span className="content-card__eyebrow">{section.spotlightTitle}</span>
                <p className="tools-stage__description">{section.spotlightBody}</p>
              </div>
            </div>

            <MediaSlot className="tools-stage__media" media={section.media} />

            <div className="tools-stage__stats">
              {section.spotlightStats.map((item) => (
                <div className="tools-stage__stat" key={item.label}>
                  <span dir="ltr">{item.value}</span>
                  <strong>{item.label}</strong>
                  {item.note ? <p>{item.note}</p> : null}
                </div>
              ))}
            </div>

            <div className="tools-stage__feed">
              {section.spotlightFeed.map((item) => (
                <div className="tools-stage__feed-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>

          <div className="section-card-grid section-card-grid--three tools-grid__cards">
            {section.cards.map((card) => (
              <SurfaceCard className="content-card h-full" data-hover="lift" data-reveal="scale" key={card.title} variant="accent">
                <div className="content-card__body">
                  {card.eyebrow ? <span className="content-card__eyebrow">{card.eyebrow}</span> : null}
                  <div className="content-card__title-row">
                    <h3 className="content-card__title">{card.title}</h3>
                    {card.metric ? <span className="content-card__metric">{card.metric}</span> : null}
                  </div>
                  <p className="content-card__description">{card.description}</p>
                  {card.tags?.length ? (
                    <div className="content-card__tags">
                      {card.tags.map((tag) => (
                        <span className="content-card__tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {card.bullets?.length ? (
                    <div className="content-card__bullets">
                      {card.bullets.map((bullet) => (
                        <div className="content-card__bullet" key={bullet}>
                          {bullet}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </SectionShell>
    </RevealGroup>
  );
}
