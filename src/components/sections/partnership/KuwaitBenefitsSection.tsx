import type { SectionContent } from '@/content/markets/types';

import { SectionShell } from '@/components/layout/SectionShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type KuwaitBenefitsSectionProps = {
  section: SectionContent;
};

export function KuwaitBenefitsSection({ section }: KuwaitBenefitsSectionProps) {
  return (
    <RevealGroup>
      <SectionShell
        description={section.description}
        eyebrow={section.eyebrow}
        id={section.id}
        title={section.title}
        tone="default"
      >
        <div className="section-card-grid section-card-grid--three">
          {section.cards.map((card, index) => (
            <SurfaceCard
              className="content-card h-full"
              data-hover={index === 1 ? 'tilt' : 'lift'}
              data-reveal="scale"
              key={card.title}
              variant={index === 1 ? 'stage' : 'accent'}
            >
              {card.media ? <MediaSlot className="content-card__media content-card__media--tall" media={card.media} /> : null}
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
      </SectionShell>
    </RevealGroup>
  );
}
