import type { FinalCtaContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { Button } from '@/components/ui/Button';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type FinalCtaSectionProps = {
  content: FinalCtaContent;
  tone?: 'player' | 'partner' | 'faq';
};

export function FinalCtaSection({ content, tone = 'player' }: FinalCtaSectionProps) {
  return (
    <section className={`section-shell section-shell--cta section-shell--cta-${tone}`} id={content.id}>
      <div className="shell-container">
        <RevealGroup>
          <SurfaceCard className="final-cta-shell p-5 sm:p-6 lg:p-8" data-reveal="scale" variant="stage">
            <div className="final-cta-grid">
              <div className="final-cta-copy">
                <p className="eyebrow text-[var(--color-primary-strong)]" data-reveal>
                  {content.eyebrow}
                </p>
                <h2 className="final-cta-title" data-reveal>
                  {content.title}
                </h2>
                <p className="final-cta-description" data-reveal>
                  {content.description}
                </p>

                {content.notes?.length ? (
                  <div className="final-cta-notes" data-reveal>
                    {content.notes.map((note) => (
                      <span className="final-cta-note" key={note}>
                        {note}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="final-cta-actions" data-reveal>
                  <Button href={content.primaryCta.href} size="lg">
                    {content.primaryCta.label}
                  </Button>
                  {content.secondaryCta ? (
                    <Button href={content.secondaryCta.href} size="lg" variant="secondary">
                      {content.secondaryCta.label}
                    </Button>
                  ) : null}
                </div>
              </div>

              {content.media ? (
                <div className="final-cta-media" data-reveal="scale">
                  <MediaSlot className="final-cta-media__slot" media={content.media} />
                </div>
              ) : null}
            </div>
          </SurfaceCard>
        </RevealGroup>
      </div>
    </section>
  );
}
