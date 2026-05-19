'use client';

import anime from 'animejs';
import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';

import { joinClasses } from '@/lib/classes';

type KuwaitLogoProps = {
  ariaLabel?: string;
  className?: string;
  decorative?: boolean;
  size?: 'nav' | 'footer' | 'hero';
};

type LetterConfig = {
  key: string;
  tone: 'mel' | 'bet';
  path: string;
};

function isSvgGroupElement(node: SVGGElement | null): node is SVGGElement {
  return node !== null;
}

const logoWidthBySize = {
  nav: '122px',
  footer: '148px',
  hero: 'clamp(180px, 28vw, 236px)',
} as const;

const frameWidthBySize = {
  nav: '152px',
  footer: '182px',
  hero: 'calc(clamp(180px, 28vw, 236px) + 34px)',
} as const;

const letters: LetterConfig[] = [
  {
    key: 'm',
    tone: 'mel',
    path: 'M101.335 94.0235H79.8467L88.1262 51.4329L57.6879 94.0235H44.2587L30.3794 51.4529L22.1099 94.0235H0.621094L18.8901 0H40.3989L57.9979 57.7644L98.096 0H119.604L101.335 94.0235Z',
  },
  {
    key: 'e1',
    tone: 'mel',
    path: 'M187.279 94.0235H106.703L124.992 0H205.568L201.388 21.4954H142.281L139.411 36.2691H185.069L180.889 57.7644H135.232L132.362 72.5381H191.448L187.279 94.0235Z',
  },
  {
    key: 'l',
    tone: 'mel',
    path: 'M261.275 94.0235H192.648L210.917 0H232.406L218.307 72.5381H265.454L261.275 94.0235Z',
  },
  {
    key: 'b',
    tone: 'bet',
    path: 'M341.752 65.1563C340.206 73.1583 336.063 79.9633 329.323 85.5714C322.584 91.1795 315.231 93.9968 307.264 94.0235H248.848L267.117 0H325.533C333.533 0 339.789 2.82071 344.302 8.46212C348.815 14.1035 350.312 20.9086 348.792 28.8772C347.686 34.6187 343.916 40.6635 337.483 47.0118C341.443 53.38 342.866 59.4282 341.752 65.1563ZM320.264 65.1563C320.485 64.2542 320.499 63.3134 320.303 62.4053C320.107 61.4972 319.707 60.6456 319.134 59.915C318.554 59.2044 317.817 58.6397 316.98 58.2662C316.143 57.8927 315.23 57.7209 314.314 57.7644H289.155L293.645 36.2791H318.484C320.568 36.2695 322.578 35.5056 324.143 34.1285C325.786 32.811 326.909 30.9541 327.313 28.8872C327.535 27.9851 327.548 27.0443 327.353 26.1362C327.157 25.2281 326.757 24.3765 326.183 23.6459C325.603 22.9372 324.865 22.3744 324.028 22.0026C323.191 21.6309 322.278 21.4606 321.364 21.5054H284.426L274.516 72.5181H311.444C313.525 72.5061 315.531 71.7424 317.094 70.3676C318.73 69.0576 319.853 67.2123 320.264 65.1563Z',
  },
  {
    key: 'e2',
    tone: 'bet',
    path: 'M422.076 94.0235H341.5L359.779 0H440.344L436.175 21.5054H377.088L374.208 36.2791H419.866L415.696 57.7644H370.038L367.169 72.5481H426.255L422.076 94.0235Z',
  },
  {
    key: 't',
    tone: 'bet',
    path: 'M528.832 21.5054H495.974L481.835 94.0235H460.346L474.445 21.4954H441.547L445.717 0H532.972L528.832 21.5054Z',
  },
];

const toneFill = {
  mel: '#f5efdf',
  bet: '#d7a94a',
} as const;

export function KuwaitLogo({
  ariaLabel = 'MELBET Kuwait',
  className,
  decorative = false,
  size = 'nav',
}: KuwaitLogoProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const shimmerRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<Array<SVGGElement | null>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const lettersTargets = letterRefs.current.filter(isSvgGroupElement);
    const shimmer = shimmerRef.current;
    const glow = glowRef.current;

    anime.remove(lettersTargets);
    anime.remove(shimmer);
    anime.remove(glow);

    const timeline = anime.timeline({
      autoplay: true,
      direction: 'normal',
      easing: 'easeInOutSine',
      loop: true,
      duration: 3600,
    });

    timeline
      .add({
        targets: glow,
        opacity: [0.18, 0.34, 0.18],
        scale: [0.96, 1.03, 0.96],
        duration: 2600,
      })
      .add(
        {
          targets: lettersTargets,
          translateY: (_target, index) => [0, index % 2 === 0 ? -1.4 : -0.8, 0],
          rotateZ: (_target, index) => [0, index % 2 === 0 ? -0.25 : 0.22, 0],
          duration: 2200,
          delay: anime.stagger(55),
        },
        0,
      )
      .add(
        {
          targets: shimmer,
          translateX: ['-135%', '155%'],
          opacity: [0, 0.68, 0],
          duration: 2350,
          easing: 'easeInOutQuad',
        },
        320,
      );

    return () => {
      anime.remove(lettersTargets);
      anime.remove(shimmer);
      anime.remove(glow);
      timeline.pause();
    };
  }, []);

  return (
    <span
      className={joinClasses('kuwait-logo', className)}
      ref={wrapperRef}
      style={
        {
          '--kuwait-logo-width': logoWidthBySize[size],
          '--kuwait-logo-frame-width': frameWidthBySize[size],
        } as CSSProperties
      }
    >
      <span aria-hidden="true" className="kuwait-logo__glow" ref={glowRef} />
      <span aria-hidden="true" className="kuwait-logo__shimmer" ref={shimmerRef} />
      <svg
        aria-hidden={decorative}
        aria-label={decorative ? undefined : ariaLabel}
        className="kuwait-logo__svg"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        role={decorative ? undefined : 'img'}
        viewBox="0 0 533 94"
        xmlns="http://www.w3.org/2000/svg"
      >
        {letters.map((letter, index) => (
          <g
            className={joinClasses('kuwait-logo__letter', `kuwait-logo__letter--${letter.tone}`)}
            key={letter.key}
            ref={(node) => {
              letterRefs.current[index] = node;
            }}
          >
            <path d={letter.path} fill={toneFill[letter.tone]} />
          </g>
        ))}
      </svg>
    </span>
  );
}
