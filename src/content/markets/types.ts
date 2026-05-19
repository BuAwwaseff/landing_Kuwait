import type { Direction } from '@/lib/direction';
import type { Locale } from '@/lib/i18n';

export type LinkAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavLink = LinkAction;

export type ContactAction = LinkAction & {
  iconSrc: string;
  platform: 'telegram' | 'whatsapp';
};

export type MediaTone =
  | 'hero'
  | 'games'
  | 'sports'
  | 'offers'
  | 'partnership'
  | 'faq'
  | 'cta'
  | 'dashboard';

export type MediaAsset = {
  slotId: string;
  src: string;
  alt: string;
  ratio: string;
  fit: 'cover' | 'contain';
  objectPosition?: string;
  tone: MediaTone;
  fallbackLabel: string;
};

export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export type SimpleCard = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  metric?: string;
  media?: MediaAsset;
};

export type HeroRailItem = {
  label: string;
  value: string;
  detail: string;
};

export type HomeHeroContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkAction;
  secondaryCta?: LinkAction;
  highlights: string[];
  stats: StatItem[];
  media: MediaAsset;
  stage: {
    eyebrow: string;
    title: string;
    description: string;
    pills: string[];
    rail: HeroRailItem[];
    quickStats: StatItem[];
  };
  quickCards: Array<{
    eyebrow: string;
    title: string;
    description: string;
    metric: string;
  }>;
};

export type SectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: SimpleCard[];
};

export type SportsSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  pills: string[];
  lead: SimpleCard;
  cards: SimpleCard[];
};

export type OfferCard = SimpleCard & {
  ctaLabel: string;
  href: string;
};

export type OffersSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: OfferCard[];
};

export type FinalCtaContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkAction;
  secondaryCta?: LinkAction;
  media?: MediaAsset;
  notes?: string[];
};

export type PartnershipHeroRoute = {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
};

export type PartnershipHeroContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkAction;
  secondaryCta?: LinkAction;
  highlights: string[];
  stats: StatItem[];
  media: MediaAsset;
  routeCards: PartnershipHeroRoute[];
  checkpointTitle: string;
  checkpointItems: StatItem[];
};

export type StepsItem = {
  step: string;
  title: string;
  description: string;
  note: string;
  media?: MediaAsset;
};

export type StepsSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: StepsItem[];
};

export type RouteCard = {
  eyebrow: string;
  title: string;
  description: string;
  value: string;
  note: string;
  bullets: string[];
  media: MediaAsset;
  ctaLabel: string;
  href: string;
};

export type PartnershipPathsSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: RouteCard[];
  footerNote: string;
};

export type ToolCard = SimpleCard & {
  stats?: StatItem[];
};

export type PartnershipToolsSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  spotlightTitle: string;
  spotlightBody: string;
  spotlightStats: StatItem[];
  spotlightFeed: string[];
  media: MediaAsset;
  cards: ToolCard[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
  media?: MediaAsset;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type MarketContent = {
  market: 'Kuwait';
  locale: Locale;
  direction: Direction;
  seo: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tag: string;
  };
  ui: {
    languageLabel: string;
  };
  navigation: {
    global: NavLink[];
    home: NavLink[];
    partnership: NavLink[];
    faq: NavLink[];
    headerCtas: {
      home: LinkAction;
      partnership: LinkAction;
      faq: LinkAction;
    };
  };
  footer: {
    description: string;
    columns: FooterColumn[];
    note: string;
    actionLinks: LinkAction[];
  };
  home: {
    seo: {
      title: string;
      description: string;
    };
    hero: HomeHeroContent;
    games: SectionContent;
    sports: SportsSectionContent;
    offers: OffersSectionContent;
    finalCta: FinalCtaContent;
  };
  partnership: {
    seo: {
      title: string;
      description: string;
    };
    hero: PartnershipHeroContent;
    benefits: SectionContent;
    steps: StepsSection;
    paths: PartnershipPathsSection;
    tools: PartnershipToolsSection;
    finalCta: FinalCtaContent & {
      channels: ContactAction[];
      helperText: string;
    };
  };
  faq: {
    seo: {
      title: string;
      description: string;
    };
    intro: FinalCtaContent;
    player: FaqGroup;
    partnership: FaqGroup;
    support: FinalCtaContent;
  };
};
