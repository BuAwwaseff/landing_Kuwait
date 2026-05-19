import type { ReactNode } from 'react';

type HighlightedTextProps = {
  text: string;
  phrases?: string[];
  className?: string;
};

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function HighlightedText({
  text,
  phrases = [],
  className = 'text-glow',
}: HighlightedTextProps): ReactNode {
  const uniquePhrases = Array.from(new Set(phrases.filter(Boolean)));

  if (!uniquePhrases.length) {
    return text;
  }

  const matcher = new RegExp(
    `(${uniquePhrases.map(escapeRegex).sort((a, b) => b.length - a.length).join('|')})`,
    'gi',
  );
  const parts = text.split(matcher);

  return parts.map((part, index) => {
    const isMatch = uniquePhrases.some((phrase) => phrase.toLocaleLowerCase() === part.toLocaleLowerCase());

    if (isMatch) {
      return (
        <span className={className} key={`${part}-${index}`}>
          {part}
        </span>
      );
    }

    return part;
  });
}
