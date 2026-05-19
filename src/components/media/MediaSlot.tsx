'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { useState } from 'react';

import type { MediaAsset } from '@/content/markets/types';
import { joinClasses } from '@/lib/classes';

type MediaSlotProps = {
  media?: MediaAsset;
  className?: string;
  priority?: boolean;
  children?: ReactNode;
};

export function MediaSlot({ media, className, priority = false, children }: MediaSlotProps) {
  const imageSrc = media?.src;
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [failedSrcs, setFailedSrcs] = useState<Record<string, true>>({});
  const isFallback = !imageSrc || Boolean(failedSrcs[imageSrc]);
  const isReady = Boolean(imageSrc) && loadedSrc === imageSrc && !isFallback;

  return (
    <div
      className={joinClasses('media-slot', className)}
      data-fit={media?.fit ?? 'cover'}
      data-ready={isReady ? 'true' : 'false'}
      data-tone={media?.tone ?? 'hero'}
      style={{ aspectRatio: media?.ratio ?? '16 / 10' }}
    >
      {imageSrc ? (
        <Image
          alt={media.alt}
          className="media-slot__image"
          fill
          key={imageSrc}
          onError={() => {
            setFailedSrcs((current) => (current[imageSrc] ? current : { ...current, [imageSrc]: true }));
          }}
          onLoad={() => {
            setLoadedSrc(imageSrc);
          }}
          priority={priority}
          sizes="(max-width: 767px) 100vw, 50vw"
          src={imageSrc}
          style={{ objectPosition: media.objectPosition ?? 'center' }}
        />
      ) : null}

      {!isReady ? (
        <div aria-hidden="true" className="media-slot__fallback">
          <span className="media-slot__wash media-slot__wash--a" />
          <span className="media-slot__wash media-slot__wash--b" />
          <span className="media-slot__grid" />
          <span className="media-slot__panel media-slot__panel--back" />
          <span className="media-slot__panel media-slot__panel--front" />
          <span className="media-slot__orb" />
          {media?.fallbackLabel ? <span className="media-slot__label">{media.fallbackLabel}</span> : null}
        </div>
      ) : null}

      <div className="media-slot__overlay" />
      {children}
    </div>
  );
}
