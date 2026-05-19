import Image from 'next/image';

import type { MarketContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { MediaSlot } from '@/components/media/MediaSlot';
import { Button } from '@/components/ui/Button';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type PartnershipContactCtaSectionProps = {
  content: MarketContent['partnership']['finalCta'];
};

export function PartnershipContactCtaSection({ content }: PartnershipContactCtaSectionProps) {
  return (
    <section className="section-shell section-shell--cta section-shell--cta-partner" id={content.id}>
      <div className="shell-container">
        <RevealGroup>
          <SurfaceCard className="final-cta-shell p-5 sm:p-6 lg:p-8" data-reveal="scale" variant="stage">
            <div className="final-cta-grid final-cta-grid--partner">
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

                <p className="final-cta-helper" data-reveal>
                  {content.helperText}
                </p>

                <div className="partner-contact-grid" data-reveal="scale">
                  {content.channels.map((channel) => (
                    <a
                      className="partner-contact-card"
                      href={channel.href}
                      key={channel.platform}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className="partner-contact-card__icon">
                        <Image alt="" height={22} src={channel.iconSrc} width={22} />
                      </div>
                      <div className="partner-contact-card__copy">
                        <strong>{channel.label}</strong>
                        <span>{channel.platform}</span>
                      </div>
                    </a>
                  ))}
                </div>

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
