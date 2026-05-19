import type { HTMLAttributes, ReactNode } from 'react';

import { joinClasses } from '@/lib/classes';

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'media' | 'stage';
  padding?: 'md' | 'lg';
};

export function SurfaceCard({
  children,
  variant = 'default',
  padding = 'md',
  className,
  ...rest
}: SurfaceCardProps) {
  return (
    <div
      className={joinClasses(
        'surface-card',
        variant === 'accent' && 'surface-card--accent',
        variant === 'media' && 'surface-card--media',
        variant === 'stage' && 'surface-card--stage',
        padding === 'md' ? 'p-4 sm:p-5' : 'p-5 sm:p-6',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

