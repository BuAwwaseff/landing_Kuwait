import type { StepsSection as StepsSectionContent } from '@/content/markets/types';

import { SectionShell } from '@/components/layout/SectionShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type StepsSectionProps = {
  section: StepsSectionContent;
};

export function StepsSection({ section }: StepsSectionProps) {
  return (
    <RevealGroup>
      <SectionShell
        description={section.description}
        eyebrow={section.eyebrow}
        id={section.id}
        title={section.title}
        tone="soft"
      >
        <div className="section-card-grid section-card-grid--four">
          {section.items.map((item) => (
            <SurfaceCard className="step-card h-full" data-hover="lift" data-reveal="scale" key={item.step} variant="accent">
              <div className="step-card__header">
                <span className="step-card__index" dir="ltr">
                  {item.step}
                </span>
                <span className="step-card__signal" />
              </div>
              <h3 className="step-card__title">{item.title}</h3>
              <p className="step-card__description">{item.description}</p>
              <div className="step-card__note">{item.note}</div>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>
    </RevealGroup>
  );
}
