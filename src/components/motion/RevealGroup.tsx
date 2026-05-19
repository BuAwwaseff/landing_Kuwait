'use client';

import type { ReactNode } from 'react';
import { useEffect, useLayoutEffect, useRef } from 'react';

import { joinClasses } from '@/lib/classes';
import { observeOnce } from '@/motion/observers';
import { floatLoop, hoverLift, hoverTilt, pulseGlow, revealLeft, revealScale, revealUp } from '@/motion/presets';

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

const REVEAL_DELAY_STEP = 55;
const REVEAL_DELAY_MAX = 220;

function getRevealDelay(index: number) {
  return Math.min(index * REVEAL_DELAY_STEP, REVEAL_DELAY_MAX);
}

function isRevealTargetInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const topEdge = viewportHeight * 0.96;
  const bottomEdge = viewportHeight * 0.04;

  return rect.top <= topEdge && rect.bottom >= bottomEdge;
}

function runReveal(element: HTMLElement, index: number) {
  if (element.dataset.revealState && element.dataset.revealState !== 'pending') {
    return;
  }

  const delay = getRevealDelay(index);
  const mode = element.dataset.reveal;

  if (mode === 'left') {
    revealLeft(element, delay);
    return;
  }

  if (mode === 'scale') {
    revealScale(element, delay);
    return;
  }

  revealUp(element, delay);
}

export function RevealGroup({ children, className }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;

    if (!node || typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (prefersReducedMotion) {
      revealTargets.forEach((element) => {
        element.dataset.revealState = 'revealed';
      });
      return;
    }

    node.dataset.motionReady = 'true';
    revealTargets.forEach((element) => {
      element.dataset.revealState = 'pending';
    });
  }, []);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const revealTargets = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'));
    const hoverCleanups = Array.from(node.querySelectorAll<HTMLElement>('[data-hover="lift"]')).map((element) =>
      hoverLift(element),
    );
    const tiltCleanups = canHover
      ? Array.from(node.querySelectorAll<HTMLElement>('[data-hover="tilt"]')).map((element) =>
          hoverTilt(element, { maxX: 5, maxY: 6 }),
        )
      : [];
    const floatAnimations = Array.from(node.querySelectorAll<HTMLElement>('[data-float]')).map((element, index) =>
      floatLoop(element, 6 + index * 2),
    );
    const pulseAnimations = Array.from(node.querySelectorAll<HTMLElement>('[data-pulse]')).map((element) =>
      pulseGlow(element),
    );
    const revealCleanups = revealTargets.map((element, index) => {
      if (isRevealTargetInView(element)) {
        runReveal(element, index);
        return undefined;
      }

      return observeOnce(
        element,
        () => {
          runReveal(element, index);
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.01 },
      );
    });

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup?.());
      tiltCleanups.forEach((cleanup) => cleanup?.());
      floatAnimations.forEach((animation) => animation.pause());
      pulseAnimations.forEach((animation) => animation.pause());
      revealCleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <div className={joinClasses('reveal-scope', className)} ref={ref}>
      {children}
    </div>
  );
}
