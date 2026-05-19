import type { PartnershipHeroContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { Button } from '@/components/ui/Button';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type PartnershipHeroSectionProps = {
  hero: PartnershipHeroContent;
};

export function PartnershipHeroSection({ hero }: PartnershipHeroSectionProps) {
  return (
    <section className="section-shell section-shell--hero" id={hero.id}>
      <div className="shell-container">
        <RevealGroup>
          <SurfaceCard className="partner-hero-shell p-5 sm:p-6 lg:p-8" data-reveal="scale" variant="stage">
            <div className="partner-hero-grid">
              <div className="partner-hero-copy">
                <p className="eyebrow text-[var(--color-primary-strong)]" data-reveal>
                  {hero.eyebrow}
                </p>
                <h1 className="hero-title" data-reveal>
                  {hero.title}
                </h1>
                <p className="hero-description" data-reveal>
                  {hero.description}
                </p>

                <div className="hero-pill-row" data-reveal>
                  {hero.highlights.map((item) => (
                    <span className="hero-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="hero-actions" data-reveal>
                  <Button href={hero.primaryCta.href} size="lg">
                    {hero.primaryCta.label}
                  </Button>
                  {hero.secondaryCta ? (
                    <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
                      {hero.secondaryCta.label}
                    </Button>
                  ) : null}
                </div>

                <div className="hero-stat-grid" data-reveal="scale">
                  {hero.stats.map((stat) => (
                    <div className="hero-stat-card" key={stat.label}>
                      <span className="hero-stat-card__value" dir="ltr">
                        {stat.value}
                      </span>
                      <span className="hero-stat-card__label">{stat.label}</span>
                      {stat.note ? <span className="hero-stat-card__note">{stat.note}</span> : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="partner-hero-stage">
                <div className="partner-hero-stage__visual" data-reveal="scale">
                  <MediaSlot className="partner-hero-stage__media" media={hero.media} priority />
                </div>

                <div className="partner-hero-route-grid" data-reveal="scale">
                  {hero.routeCards.map((card) => (
                    <div className="partner-hero-route-card" key={card.title}>
                      <span className="partner-hero-route-card__eyebrow">{card.eyebrow}</span>
                      <div className="partner-hero-route-card__row">
                        <h3>{card.title}</h3>
                        <span>{card.badge}</span>
                      </div>
                      <p>{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="partner-checkpoint-shell" data-reveal="scale">
              <div className="partner-checkpoint-shell__intro">
                <span className="content-card__eyebrow">{hero.checkpointTitle}</span>
              </div>
              <div className="partner-checkpoint-shell__grid">
                {hero.checkpointItems.map((item) => (
                  <div className="partner-checkpoint-card" key={item.label}>
                    <span className="partner-checkpoint-card__value" dir="ltr">
                      {item.value}
                    </span>
                    <strong>{item.label}</strong>
                    {item.note ? <p>{item.note}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </SurfaceCard>
        </RevealGroup>
      </div>
    </section>
  );
}
