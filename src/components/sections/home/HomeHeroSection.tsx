import type { HomeHeroContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { Button } from '@/components/ui/Button';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type HomeHeroSectionProps = {
  hero: HomeHeroContent;
};

export function HomeHeroSection({ hero }: HomeHeroSectionProps) {
  return (
    <section className="section-shell section-shell--hero" id={hero.id}>
      <div className="shell-container">
        <RevealGroup>
          <SurfaceCard className="hero-shell p-5 sm:p-6 lg:p-8" data-reveal="scale" variant="stage">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="space-y-4">
                  <p className="eyebrow text-[var(--color-primary-strong)]" data-reveal>
                    {hero.eyebrow}
                  </p>
                  <h1 className="hero-title" data-reveal>
                    {hero.title}
                  </h1>
                  <p className="hero-description" data-reveal>
                    {hero.description}
                  </p>
                </div>

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

              <div className="hero-stage-card" data-reveal="scale">
                <MediaSlot className="hero-stage-card__media" media={hero.media} priority>
                  <div className="hero-stage-card__content">
                    <div className="hero-stage-card__head">
                      <span className="hero-stage-card__eyebrow">{hero.stage.eyebrow}</span>
                      <span className="hero-stage-card__signal">KWT</span>
                    </div>

                    <div className="hero-stage-card__body">
                      <h2 className="hero-stage-card__title">{hero.stage.title}</h2>
                      <p className="hero-stage-card__description">{hero.stage.description}</p>
                    </div>

                    <div className="hero-stage-card__pills">
                      {hero.stage.pills.map((pill) => (
                        <span className="hero-stage-card__pill" key={pill}>
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div className="hero-stage-card__rail">
                      {hero.stage.rail.map((item) => (
                        <div className="hero-stage-card__rail-card" key={item.label}>
                          <div className="hero-stage-card__rail-top">
                            <span>{item.label}</span>
                            <strong dir="ltr">{item.value}</strong>
                          </div>
                          <p>{item.detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="hero-stage-card__quick-grid">
                      {hero.stage.quickStats.map((item) => (
                        <div className="hero-stage-card__quick-card" key={item.label}>
                          <span dir="ltr">{item.value}</span>
                          <small>{item.label}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </MediaSlot>
              </div>
            </div>

            <div className="hero-feature-grid" data-reveal="scale">
              {hero.quickCards.map((card) => (
                <div className="hero-feature-card" key={card.title}>
                  <span className="hero-feature-card__eyebrow">{card.eyebrow}</span>
                  <div className="hero-feature-card__row">
                    <h3>{card.title}</h3>
                    <span>{card.metric}</span>
                  </div>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </RevealGroup>
      </div>
    </section>
  );
}
