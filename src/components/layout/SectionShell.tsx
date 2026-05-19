import type { ReactNode } from 'react';

import { HighlightedText } from '@/components/ui/HighlightedText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { joinClasses } from '@/lib/classes';

export type SectionTone = 'default' | 'emphasis' | 'soft';

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  highlightPhrases?: string[];
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = 'default',
  highlightPhrases,
}: SectionShellProps) {
  return (
    <section className={joinClasses('section-shell', `section-shell--${tone}`, className)} id={id}>
      <div className="shell-container">
        <div className="section-head">
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 className="section-title" data-reveal>
            <HighlightedText phrases={highlightPhrases} text={title} />
          </h2>
          <p className="section-description" data-reveal>
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
