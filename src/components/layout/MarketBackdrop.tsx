type MarketBackdropProps = {
  page: 'home' | 'partnership' | 'faq';
};

function KuwaitLandmark() {
  return (
    <div aria-hidden="true" className="market-backdrop__landmark">
      <svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg">
        <rect fill="currentColor" height="18" width="960" x="0" y="510" />
        <ellipse cx="480" cy="512" fill="currentColor" opacity="0.2" rx="320" ry="20" />

        <rect fill="currentColor" height="124" opacity="0.22" width="48" x="168" y="386" />
        <rect fill="currentColor" height="158" opacity="0.18" width="36" x="224" y="352" />
        <rect fill="currentColor" height="106" opacity="0.16" width="34" x="272" y="404" />

        <rect fill="currentColor" height="286" width="16" x="392" y="224" />
        <circle cx="400" cy="314" fill="currentColor" opacity="0.98" r="42" />
        <circle cx="400" cy="366" fill="var(--color-bg)" opacity="0.82" r="14" />
        <circle cx="400" cy="254" fill="currentColor" opacity="0.88" r="16" />

        <rect fill="currentColor" height="330" width="10" x="472" y="180" />
        <circle cx="477" cy="298" fill="currentColor" opacity="0.92" r="28" />
        <circle cx="477" cy="198" fill="currentColor" opacity="0.82" r="11" />

        <rect fill="currentColor" height="250" width="12" x="534" y="260" />
        <circle cx="540" cy="330" fill="currentColor" opacity="0.9" r="34" />
        <circle cx="540" cy="392" fill="var(--color-bg)" opacity="0.8" r="11" />

        <rect fill="currentColor" height="110" opacity="0.18" width="34" x="640" y="400" />
        <rect fill="currentColor" height="154" opacity="0.22" width="46" x="686" y="356" />
        <rect fill="currentColor" height="96" opacity="0.16" width="28" x="744" y="414" />

        <path
          d="M120 510 C214 482 296 476 360 482 C430 488 526 488 610 480 C706 470 790 478 852 510"
          fill="none"
          opacity="0.16"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

export function MarketBackdrop({ page }: MarketBackdropProps) {
  return (
    <div aria-hidden="true" className={`market-backdrop market-backdrop--${page}`}>
      <div className="market-backdrop__base" />
      <div className="market-backdrop__grid" />
      <div className="market-backdrop__veil market-backdrop__veil--top" />
      <div className="market-backdrop__veil market-backdrop__veil--mid" />
      <span className="market-backdrop__shaft market-backdrop__shaft--a" />
      <span className="market-backdrop__shaft market-backdrop__shaft--b" />
      <span className="market-backdrop__shaft market-backdrop__shaft--c" />
      <span className="market-backdrop__shaft market-backdrop__shaft--d" />
      <span className="market-backdrop__orb market-backdrop__orb--a" />
      <span className="market-backdrop__orb market-backdrop__orb--b" />
      <span className="market-backdrop__orb market-backdrop__orb--c" />
      <div className="market-backdrop__plane-wrap">
        <div className="market-backdrop__plane" />
      </div>
      <div className="market-backdrop__horizon" />
      <KuwaitLandmark />
      <div className="market-backdrop__grain" />
      <div className="market-backdrop__vignette" />
    </div>
  );
}
