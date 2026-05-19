import type { SportsSectionContent } from '@/content/markets/types';

import { SectionShell } from '@/components/layout/SectionShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type KuwaitSportsSectionProps = {
  section: SportsSectionContent;
};

export function KuwaitSportsSection({ section }: KuwaitSportsSectionProps) {
  return (
    <RevealGroup>
      <SectionShell
        description={section.description}
        eyebrow={section.eyebrow}
        id={section.id}
        title={section.title}
        tone="emphasis"
      >
        <div className="sports-pill-row" data-reveal>
          {section.pills.map((pill) => (
            <span className="sports-pill" key={pill}>
              {pill}
            </span>
          ))}
        </div>

        <div className="sports-grid">
          <SurfaceCard className="sports-lead-card" data-hover="tilt" data-reveal="scale" variant="stage">
            {section.lead.media ? (
              <MediaSlot className="sports-lead-card__media" media={section.lead.media}>
                <div className="sports-lead-card__overlay">
                  {section.lead.eyebrow ? <span className="sports-lead-card__eyebrow">{section.lead.eyebrow}</span> : null}
                  <div className="sports-lead-card__copy">
                    <div className="sports-lead-card__top">
                      <h3>{section.lead.title}</h3>
                      {section.lead.metric ? <span>{section.lead.metric}</span> : null}
                    </div>
                    <p>{section.lead.description}</p>
                  </div>
                  {section.lead.tags?.length ? (
                    <div className="sports-lead-card__tags">
                      {section.lead.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </MediaSlot>
            ) : null}
          </SurfaceCard>

          <div className="sports-side-grid">
            {section.cards.map((card) => (
              <SurfaceCard className="sports-side-card" data-hover="lift" data-reveal="scale" key={card.title} variant="media">
                {card.media ? <MediaSlot className="sports-side-card__media" media={card.media} /> : null}
                <div className="sports-side-card__body">
                  <div className="sports-side-card__row">
                    {card.eyebrow ? <span className="content-card__eyebrow">{card.eyebrow}</span> : null}
                    {card.metric ? <span className="content-card__metric">{card.metric}</span> : null}
                  </div>
                  <h3 className="content-card__title">{card.title}</h3>
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
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </SectionShell>
    </RevealGroup>
  );
}
