import type { MarketContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { FinalCtaSection } from '@/components/sections/shared/FinalCtaSection';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type KuwaitFaqSectionsProps = {
  content: MarketContent['faq'];
};

export function KuwaitFaqSections({ content }: KuwaitFaqSectionsProps) {
  return (
    <>
      <section className="section-shell section-shell--hero" id={content.intro.id}>
        <div className="shell-container">
          <RevealGroup>
            <div className="faq-intro-shell" data-reveal="scale">
              <p className="eyebrow text-[var(--color-primary-strong)]" data-reveal>
                {content.intro.eyebrow}
              </p>
              <h1 className="hero-title faq-intro-shell__title" data-reveal>
                {content.intro.title}
              </h1>
              <p className="hero-description faq-intro-shell__description" data-reveal>
                {content.intro.description}
              </p>
              <div className="hero-actions" data-reveal>
                <a className="btn-base btn-primary btn-md" href={content.intro.primaryCta.href}>
                  <span className="btn-base__label">{content.intro.primaryCta.label}</span>
                </a>
                {content.intro.secondaryCta ? (
                  <a className="btn-base btn-secondary btn-md" href={content.intro.secondaryCta.href}>
                    <span className="btn-base__label">{content.intro.secondaryCta.label}</span>
                  </a>
                ) : null}
              </div>
            </div>
          </RevealGroup>
        </div>
      </section>

      <section className="section-shell" id={content.player.id}>
        <div className="shell-container">
          <RevealGroup>
            <div className="faq-grid">
              <SurfaceCard className="faq-column-card h-full" data-reveal="scale" variant="stage">
                <div className="faq-column-card__intro">
                  <span className="content-card__eyebrow">{content.player.eyebrow}</span>
                  <h2 className="section-title faq-column-card__title">{content.player.title}</h2>
                  <p className="section-description faq-column-card__description">{content.player.description}</p>
                </div>
                <div className="faq-column-card__items">
                  {content.player.items.map((item) => (
                    <FaqAccordion item={item} key={item.question} />
                  ))}
                </div>
              </SurfaceCard>

              <SurfaceCard className="faq-column-card h-full" data-reveal="scale" id={content.partnership.id} variant="accent">
                <div className="faq-column-card__intro">
                  <span className="content-card__eyebrow">{content.partnership.eyebrow}</span>
                  <h2 className="section-title faq-column-card__title">{content.partnership.title}</h2>
                  <p className="section-description faq-column-card__description">{content.partnership.description}</p>
                </div>
                <div className="faq-column-card__items">
                  {content.partnership.items.map((item) => (
                    <FaqAccordion item={item} key={item.question} />
                  ))}
                </div>
              </SurfaceCard>
            </div>
          </RevealGroup>
        </div>
      </section>

      <FinalCtaSection content={content.support} tone="faq" />
    </>
  );
}
