import type { MediaAsset, MediaTone } from '@/content/markets/types';

export type KuwaitImageSlotId =
  | 'home-hero-stage'
  | 'home-games-casino'
  | 'home-games-slots'
  | 'home-games-live'
  | 'home-sports-football'
  | 'home-sports-live'
  | 'home-offers-welcome'
  | 'home-offers-gifts'
  | 'home-final-cta'
  | 'partnership-hero'
  | 'partnership-benefits-support'
  | 'partnership-tools-dashboard'
  | 'partnership-partner-route'
  | 'partnership-agent-route'
  | 'partnership-final-cta'
  | 'faq-support';

export type KuwaitImageBrief = {
  slotId: KuwaitImageSlotId;
  page: 'home' | 'partnership' | 'faq';
  section: string;
  useCase: string;
  targetPath: string;
  ratio: string;
  fit: 'cover' | 'contain';
  tone: MediaTone;
  alt: string;
  fallbackLabel: string;
  mood: string;
  colorPalette: string[];
  localCues: string[];
  cropSafety: string;
  overlaySafeArea: string;
  objectPosition?: string;
  prompt: string;
  negativePrompt: string;
};

const briefs: KuwaitImageBrief[] = [
  {
    slotId: 'home-hero-stage',
    page: 'home',
    section: 'Hero',
    useCase: 'Main player-facing stage visual beside the opening offer and fast-start copy.',
    targetPath: '/public/player/hero/kuwait-hero.webp',
    ratio: '16 / 11',
    fit: 'cover',
    tone: 'hero',
    alt: 'لاعب يفتح تجربة رياضية وكازينو ليلية بطابع كويتي فاخر',
    fallbackLabel: 'واجهة اللاعب',
    mood: 'premium Gulf night, composed, ambitious, expensive',
    colorPalette: ['deep navy', 'petrol black', 'warm gold', 'pearl white'],
    localCues: ['Kuwait skyline hints', 'Gulf premium fashion styling', 'subtle football and casino energy'],
    cropSafety: 'Keep the subject centered-right with shoulders and hands visible inside a safe vertical crop.',
    overlaySafeArea: 'Leave the left 42% and top-left quadrant quiet for headline and CTA overlay.',
    objectPosition: 'center',
    prompt:
      'Ultra-premium Gulf betting campaign scene, Arabic market, Kuwait atmosphere at night, elegant young Gulf player holding a phone with football match data and live casino glow, subtle Kuwait skyline cues in the background, deep navy and oil-black environment with refined gold highlights, cinematic but restrained, realistic lighting, high-end editorial ad photography, no text, no logo, crisp face and hands, clean negative space for marketing overlay.',
    negativePrompt:
      'cheap neon casino look, childish slot icons, exaggerated money rain, text, watermark, logo, distorted hands, blurry face, low detail crowd, bright green dominance',
  },
  {
    slotId: 'home-games-casino',
    page: 'home',
    section: 'Games Discovery',
    useCase: 'Featured casino discovery card focused on premium live casino entry.',
    targetPath: '/public/player/games/kuwait-casino.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'games',
    alt: 'طاولة كازينو حي بإضاءة ذهبية هادئة داخل أجواء فاخرة',
    fallbackLabel: 'كازينو مباشر',
    mood: 'quiet luxury, intimate, polished',
    colorPalette: ['coal black', 'bronze gold', 'soft white'],
    localCues: ['Gulf luxury interior styling', 'restrained table-game framing'],
    cropSafety: 'Keep the table and dealer centered with edges clear for rounded-card cropping.',
    overlaySafeArea: 'Top-left and lower-left quarter should remain visually calm for tags and title.',
    objectPosition: 'center',
    prompt:
      'Luxury live casino table scene for a Gulf market campaign, elegant dealer framing, premium black and gold interior, restrained cinematic light, realistic live-table detail, no visible brand, no text on cards or chips, quiet upscale mood, editorial product campaign quality.',
    negativePrompt:
      'cartoon casino, crowded gambling hall, text overlays, visible logos, exaggerated chip piles, fluorescent green, low realism',
  },
  {
    slotId: 'home-games-slots',
    page: 'home',
    section: 'Games Discovery',
    useCase: 'Slots discovery card with premium cabinet light and mobile-ready mood.',
    targetPath: '/public/player/games/kuwait-slots.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'games',
    alt: 'منطقة ألعاب سلوت فاخرة بإضاءة ذهبية وزرقاء هادئة',
    fallbackLabel: 'سلوتس سريعة',
    mood: 'modern, premium, energized but controlled',
    colorPalette: ['midnight blue', 'amber gold', 'soft pearl'],
    localCues: ['Gulf premium venue styling', 'clean machine composition'],
    cropSafety: 'Keep one dominant machine and one supporting glow layer; avoid tight face crops.',
    overlaySafeArea: 'Reserve the lower-left quarter for title and body copy.',
    objectPosition: 'center',
    prompt:
      'Premium slot-machine environment for a Gulf luxury gaming campaign, realistic cabinet light, deep midnight blue with warm gold reflections, sleek and modern, close enough to feel immersive, no text on the machine, no logos, sophisticated composition for marketing card usage.',
    negativePrompt:
      'arcade toy aesthetic, rainbow neon overload, jackpot text, logos, cartoon reels, noisy background, warped perspective',
  },
  {
    slotId: 'home-games-live',
    page: 'home',
    section: 'Games Discovery',
    useCase: 'Third games discovery card focused on live games and fast mobile sessions.',
    targetPath: '/public/player/games/kuwait-live.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'games',
    alt: 'جلسة ألعاب حية على الهاتف داخل إضاءة ليلية هادئة',
    fallbackLabel: 'ألعاب حية',
    mood: 'fast, intimate, after-hours premium',
    colorPalette: ['deep black', 'teal navy', 'muted gold'],
    localCues: ['phone-led play', 'Gulf evening styling'],
    cropSafety: 'Keep the phone screen and player hands readable inside tight card crops.',
    overlaySafeArea: 'Leave top-left quiet for eyebrow and small chips.',
    objectPosition: 'center',
    prompt:
      'Editorial campaign image of a player using a phone for live casino and instant games in a Gulf luxury setting, close crop on hands and phone, dark polished background, warm gold highlights, subtle modern interior cues, realistic phone lighting, no visible UI text, no logo.',
    negativePrompt:
      'broken phone, visible app text, watermark, cartoon glow, childish casino icons, cluttered hands, fake 3D render look',
  },
  {
    slotId: 'home-sports-football',
    page: 'home',
    section: 'Sports',
    useCase: 'Lead sports visual for football-first discovery.',
    targetPath: '/public/player/sports/kuwait-football.webp',
    ratio: '16 / 10',
    fit: 'cover',
    tone: 'sports',
    alt: 'أجواء مباراة كرة قدم ليلية بطابع خليجي راق',
    fallbackLabel: 'كرة القدم',
    mood: 'match-night anticipation, premium, sharp',
    colorPalette: ['deep navy', 'stadium white', 'gold accents'],
    localCues: ['big-match football energy', 'Gulf crowd styling without flags dominating'],
    cropSafety: 'Keep players and ball within center band so a wide crop still reads clearly.',
    overlaySafeArea: 'Right third should be calmer for metric stack and CTA chips.',
    objectPosition: 'center',
    prompt:
      'Premium football match-night campaign image for Kuwait market, dramatic stadium lighting, realistic players in motion, refined dark atmosphere, elegant gold accents in the environment, no team logos, no scoreboard text, cinematic sports photography.',
    negativePrompt:
      'blurry action, oversized scoreboard text, visible team brands, cheap poster look, oversaturated green field, low detail crowd',
  },
  {
    slotId: 'home-sports-live',
    page: 'home',
    section: 'Sports',
    useCase: 'Secondary sports image for live match boards or multi-market viewing.',
    targetPath: '/public/player/sports/kuwait-live-match.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'sports',
    alt: 'لوحة متابعة مباراة حية على الهاتف ضمن مزاج ليلي أنيق',
    fallbackLabel: 'مباشر الآن',
    mood: 'focused, tactical, real-time',
    colorPalette: ['oil blue', 'graphite', 'warm white'],
    localCues: ['mobile-first live betting setup', 'Gulf premium lounge tone'],
    cropSafety: 'Keep one phone or board dominant, avoid cutting the device in half.',
    overlaySafeArea: 'Lower-right and top-left corners should remain usable for labels.',
    objectPosition: 'center',
    prompt:
      'High-end sports live-tracking visual for Gulf betting campaign, realistic phone or digital board showing match momentum without readable text, dark luxury lounge lighting, subtle Kuwait atmosphere, controlled gold and cool-white reflections, editorial commercial photography.',
    negativePrompt:
      'readable interface text, logos, cluttered dashboards, fluorescent sports bar, cheap stock-photo look, distorted device',
  },
  {
    slotId: 'home-offers-welcome',
    page: 'home',
    section: 'Offers',
    useCase: 'Main welcome offer visual.',
    targetPath: '/public/offer/kuwait-welcome.webp',
    ratio: '4 / 3',
    fit: 'cover',
    tone: 'offers',
    alt: 'هدية ترحيب فاخرة بإضاءة ذهبية ناعمة وأجواء راقية',
    fallbackLabel: 'ترحيب أولي',
    mood: 'rewarded, elegant, premium promotion',
    colorPalette: ['champagne gold', 'deep navy', 'pearl white'],
    localCues: ['gift symbolism without childish wrapping', 'upscale Gulf tone'],
    cropSafety: 'Keep the hero object centered with enough margin for rounded card framing.',
    overlaySafeArea: 'Upper-left and lower-left zones should stay calm for copy blocks.',
    objectPosition: 'center',
    prompt:
      'Luxury welcome-offer campaign image for Kuwait betting brand, refined premium gift symbolism, dark navy and champagne-gold scene, elegant promotional mood, no currency text, no logos, no ribbons with words, tasteful commercial photography.',
    negativePrompt:
      'cartoon gift box, big percentage text, money explosion, loud holiday theme, logo, watermark, childlike props',
  },
  {
    slotId: 'home-offers-gifts',
    page: 'home',
    section: 'Offers',
    useCase: 'Secondary offers visual for gifts and rewards.',
    targetPath: '/public/offer/kuwait-gifts.webp',
    ratio: '4 / 3',
    fit: 'cover',
    tone: 'offers',
    alt: 'هدايا ومكافآت ليلية داخل مزاج خليجي فاخر',
    fallbackLabel: 'هدايا ومكافآت',
    mood: 'reward-first, polished, rich',
    colorPalette: ['dark petrol', 'warm gold', 'soft beige'],
    localCues: ['premium desk or lounge styling', 'subtle mobile and reward cues'],
    cropSafety: 'Keep the main reward prop large and centered; avoid tiny details that disappear on mobile.',
    overlaySafeArea: 'Right third should support title and bullets.',
    objectPosition: 'center',
    prompt:
      'Elegant rewards campaign image for Kuwait market, premium mobile-led reward concept, luxurious dark background, tasteful gold highlights, subtle props suggesting gifts and bonuses, realistic and editorial, no text, no logos.',
    negativePrompt:
      'cheap confetti, jackpot words, party balloons, loud red and green contrast, casino cliché posters, cluttered scene',
  },
  {
    slotId: 'home-final-cta',
    page: 'home',
    section: 'Final CTA',
    useCase: 'Closing player CTA visual that supports contact or fast start.',
    targetPath: '/public/player/cta/kuwait-final-cta.webp',
    ratio: '16 / 9',
    fit: 'cover',
    tone: 'cta',
    alt: 'ختام بصري أنيق يدعو اللاعب للانطلاق من الهاتف',
    fallbackLabel: 'ابدأ الآن',
    mood: 'clear, confident, luxurious finish',
    colorPalette: ['black navy', 'gold ember', 'soft white'],
    localCues: ['phone-led start cue', 'premium Gulf night ambience'],
    cropSafety: 'Keep the primary subject away from the lower-left CTA zone.',
    overlaySafeArea: 'Left half should stay readable for title, text, and buttons.',
    objectPosition: 'center',
    prompt:
      'Premium final-call campaign image for Kuwait online sports and casino landing page, elegant mobile start moment, dark Gulf night mood, warm gold sheen, clean composition, realistic editorial photography, generous negative space for CTA text, no logos, no text.',
    negativePrompt:
      'busy crowd, visible app text, overexposed highlights, childish excitement, green neon overload, watermarks',
  },
  {
    slotId: 'partnership-hero',
    page: 'partnership',
    section: 'Partnership Hero',
    useCase: 'Main partnership hero visual for business-facing entry.',
    targetPath: '/public/partnership/kuwait-partner-hero.webp',
    ratio: '16 / 10',
    fit: 'cover',
    tone: 'partnership',
    alt: 'مشهد شراكة احترافي بطابع خليجي يركز على الهاتف والدعم الإداري',
    fallbackLabel: 'مسار الشراكة',
    mood: 'credible, operational, premium',
    colorPalette: ['ink black', 'navy steel', 'gold highlights'],
    localCues: ['Gulf business attire', 'high-trust partnership mood', 'phone and reporting cues'],
    cropSafety: 'Keep the subject mid-frame with enough headroom for wide hero crops.',
    overlaySafeArea: 'Left 45% should remain relatively clean for the headline and route CTA.',
    objectPosition: 'center',
    prompt:
      'Business-facing Gulf partnership campaign image for Kuwait market, confident local operator or promoter reviewing mobile performance with a manager-style atmosphere, premium dark office lounge, restrained gold accents, realistic commercial photography, no logos, no visible text.',
    negativePrompt:
      'casino crowd, childish promotion scene, text overlays, corporate stock cliches, visible dashboards with readable text, watermark',
  },
  {
    slotId: 'partnership-benefits-support',
    page: 'partnership',
    section: 'Benefits',
    useCase: 'Support and manager-coverage visual for the why-us section.',
    targetPath: '/public/partnership/kuwait-support.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'partnership',
    alt: 'دعم تشغيلي وإداري منظم داخل بيئة فاخرة هادئة',
    fallbackLabel: 'دعم وتشغيل',
    mood: 'stable, supportive, manager-led',
    colorPalette: ['charcoal', 'gold', 'soft white'],
    localCues: ['one-to-one support feeling', 'Gulf business interior'],
    cropSafety: 'Frame one or two people with space above shoulders for card overlays.',
    overlaySafeArea: 'Top-left should stay soft for eyebrow/title usage.',
    objectPosition: 'center',
    prompt:
      'Premium operational-support image for Kuwait partnership page, calm one-to-one manager support atmosphere, dark refined office lounge, soft gold edge lighting, no screens with readable text, high-end editorial realism.',
    negativePrompt:
      'busy call center, cheap office stock photo, visible logos, text-heavy dashboard, fluorescent white office lighting',
  },
  {
    slotId: 'partnership-tools-dashboard',
    page: 'partnership',
    section: 'Tools',
    useCase: 'Dashboard and reporting showcase visual for partner tools.',
    targetPath: '/public/partnership/kuwait-tools.webp',
    ratio: '16 / 10',
    fit: 'cover',
    tone: 'dashboard',
    alt: 'لوحة متابعة أداء فاخرة واحترافية بطابع داكن منظم',
    fallbackLabel: 'تقارير وأدوات',
    mood: 'measured, data-led, high trust',
    colorPalette: ['graphite', 'deep blue', 'muted gold'],
    localCues: ['partner reporting context', 'Arabic-market design feeling without text'],
    cropSafety: 'Keep the main screen or board readable in the center with margins for wide crops.',
    overlaySafeArea: 'Left third and lower-left should remain usable for descriptive copy.',
    objectPosition: 'center',
    prompt:
      'Luxurious dark analytics dashboard visual for Kuwait partnership landing page, abstract performance reporting on a premium screen, no readable text, no logos, refined gold and cool-blue accents, realistic product-photography style, high-end operations mood.',
    negativePrompt:
      'readable charts, corporate template screenshot, watermark, cluttered metrics, bright fintech neon, toy interface',
  },
  {
    slotId: 'partnership-partner-route',
    page: 'partnership',
    section: 'Paths',
    useCase: 'Partner-route card for promoters and audience owners.',
    targetPath: '/public/partnership/kuwait-partner-route.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'partnership',
    alt: 'صاحب جمهور أو قناة يراجع مسار الترويج والأداء',
    fallbackLabel: 'مسار الشريك',
    mood: 'growth-minded, media-led, composed',
    colorPalette: ['midnight blue', 'charcoal', 'gold'],
    localCues: ['creator or promoter energy', 'Gulf audience-growth environment'],
    cropSafety: 'Keep laptop or phone secondary; the human subject should remain clear within the central crop.',
    overlaySafeArea: 'Lower-left area should stay readable for bullets and CTA.',
    objectPosition: 'center',
    prompt:
      'High-end partner-route campaign image for Kuwait market, confident promoter or channel owner reviewing campaign performance in a premium dark environment, tasteful technology cues, no readable screen text, no logos, polished editorial realism.',
    negativePrompt:
      'social media icons, influencer cliches, visible brand names, stock thumbs-up pose, chaotic background',
  },
  {
    slotId: 'partnership-agent-route',
    page: 'partnership',
    section: 'Paths',
    useCase: 'Agent-route card for local transaction and player support operations.',
    targetPath: '/public/partnership/kuwait-agent.webp',
    ratio: '4 / 5',
    fit: 'cover',
    tone: 'partnership',
    alt: 'وكيل محلي يدير الدعم والدفعات ضمن إطار موثوق',
    fallbackLabel: 'مسار الوكيل',
    mood: 'local trust, practical, secure',
    colorPalette: ['petrol black', 'sand gold', 'cool white'],
    localCues: ['trusted local operator', 'transaction support context'],
    cropSafety: 'Keep hands, phone, and desk elements visible; avoid tiny props that disappear on mobile.',
    overlaySafeArea: 'Right side should remain calmer for labels and CTA.',
    objectPosition: 'center',
    prompt:
      'Premium local-agent campaign image for Kuwait market, trusted Gulf operator handling player transaction support with a phone and discreet desk setup, dark refined atmosphere, realistic and professional, no readable payment text, no logos.',
    negativePrompt:
      'cash piles, scammy money imagery, visible bank logos, text overlays, cheap office, exaggerated fintech neon',
  },
  {
    slotId: 'partnership-final-cta',
    page: 'partnership',
    section: 'Final CTA',
    useCase: 'Strong contact-driven visual for Telegram or WhatsApp conversion.',
    targetPath: '/public/partnership/kuwait-final-cta.webp',
    ratio: '16 / 9',
    fit: 'cover',
    tone: 'cta',
    alt: 'ختام شراكة عملي يدعو للتواصل المباشر بثقة',
    fallbackLabel: 'ابدأ التواصل',
    mood: 'direct, confident, premium close',
    colorPalette: ['dark navy', 'bronze gold', 'muted white'],
    localCues: ['direct-contact moment', 'Gulf trust tone'],
    cropSafety: 'Keep the human subject offset to the right to preserve CTA copy space.',
    overlaySafeArea: 'Left half must stay open for message, buttons, and helper text.',
    objectPosition: 'center',
    prompt:
      'Premium direct-contact campaign image for Kuwait partnership page, elegant business-ready Gulf atmosphere, person preparing to connect via phone, luxurious dark palette with refined gold highlights, realistic editorial look, no logos, no text.',
    negativePrompt:
      'chat app logos, readable phone text, cartoon UI, empty corporate handshake photo, fluorescent office light',
  },
  {
    slotId: 'faq-support',
    page: 'faq',
    section: 'Support CTA',
    useCase: 'Shared support visual used near the FAQ close.',
    targetPath: '/public/support/kuwait-faq.webp',
    ratio: '16 / 9',
    fit: 'cover',
    tone: 'faq',
    alt: 'دعم واضح وسريع داخل مزاج بصري كويتي فاخر',
    fallbackLabel: 'الأسئلة والدعم',
    mood: 'clear, reassuring, refined',
    colorPalette: ['deep blue', 'soft gold', 'pearl white'],
    localCues: ['support-first mood', 'mobile access and guidance'],
    cropSafety: 'Keep the support subject mid-right with uncluttered left side.',
    overlaySafeArea: 'Left half should remain open for title, body, and two CTA buttons.',
    objectPosition: 'center',
    prompt:
      'Premium support-focused image for Kuwait FAQ landing page, calm Gulf night atmosphere, elegant person using a phone with reassuring guidance mood, dark luxury palette with soft gold accents, realistic editorial photography, no text, no logos.',
    negativePrompt:
      'help desk cliché headset shot, visible chat text, watermark, cheap stock office, childish icons',
  },
];

const briefMap = new Map(briefs.map((brief) => [brief.slotId, brief] as const));

function toPublicSrc(targetPath: string) {
  return targetPath.replace(/^\/public/, '');
}

export const kuwaitImageBriefs = briefs;

export function getKuwaitImageBrief(slotId: KuwaitImageSlotId) {
  const brief = briefMap.get(slotId);

  if (!brief) {
    throw new Error(`Unknown Kuwait image slot: ${slotId}`);
  }

  return brief;
}

export function getKuwaitMedia(slotId: KuwaitImageSlotId): MediaAsset {
  const brief = getKuwaitImageBrief(slotId);

  return {
    slotId: brief.slotId,
    src: toPublicSrc(brief.targetPath),
    alt: brief.alt,
    ratio: brief.ratio,
    fit: brief.fit,
    objectPosition: brief.objectPosition,
    tone: brief.tone,
    fallbackLabel: brief.fallbackLabel,
  };
}
