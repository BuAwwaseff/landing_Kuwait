import type { FaqItem } from '@/content/markets/types';

type FaqAccordionProps = {
  item: FaqItem;
};

export function FaqAccordion({ item }: FaqAccordionProps) {
  return (
    <details className="faq-item">
      <summary className="faq-summary">
        <span className="faq-question font-heading-face text-base leading-7 text-[var(--color-foreground)]">
          {item.question}
        </span>
        <span aria-hidden="true" className="faq-arrow">
          +
        </span>
      </summary>
      <div className="faq-answer px-4 pb-4 text-sm leading-7 text-[var(--color-foreground-soft)] sm:px-5 sm:pb-5">
        {item.answer}
      </div>
    </details>
  );
}
