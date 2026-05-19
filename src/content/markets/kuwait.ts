import type { MarketContent } from '@/content/markets/types';
import { getKuwaitMedia } from '@/content/markets/kuwait-image-briefs';
import { getLocaleDirection, type Locale } from '@/lib/i18n';

const contactChannels = {
  telegram: {
    href: '#',
    iconSrc: '/telegram.png',
    platform: 'telegram' as const,
  },
  whatsapp: {
    href: '#',
    iconSrc: '/whatsapp.png',
    platform: 'whatsapp' as const,
  },
};

const kuwaitContentByLocale: Record<Locale, MarketContent> = {
  ar: {
    market: 'Kuwait',
    locale: 'ar',
    direction: getLocaleDirection('ar'),
    seo: {
      title: 'MELBET الكويت',
      description: 'واجهة كويتية كاملة للرياضة والكازينو والعروض والشراكة، بهوية داكنة فاخرة ومسارات واضحة للاعبين والشركاء.',
    },
    brand: {
      name: 'MELBET الكويت',
      tag: 'رياضة، كازينو، وعروض سريعة للاعب، مع مسار شراكة واضح للشريك أو الوكيل.',
    },
    ui: {
      languageLabel: 'تبديل اللغة',
    },
    navigation: {
      global: [
        { label: 'الرئيسية', href: '/' },
        { label: 'الشراكة', href: '/partnership' },
        { label: 'الأسئلة', href: '/faq' },
      ],
      home: [
        { label: 'البداية', href: '/#top' },
        { label: 'الألعاب', href: '/#games' },
        { label: 'الرياضة', href: '/#sports' },
        { label: 'العروض', href: '/#offers' },
        { label: 'ابدأ الآن', href: '/#final-cta' },
      ],
      partnership: [
        { label: 'نظرة عامة', href: '/partnership#top' },
        { label: 'المزايا', href: '/partnership#benefits' },
        { label: 'الخطوات', href: '/partnership#steps' },
        { label: 'المسارات', href: '/partnership#paths' },
        { label: 'الأدوات', href: '/partnership#tools' },
        { label: 'التواصل', href: '/partnership#final-cta' },
      ],
      faq: [
        { label: 'مقدمة', href: '/faq#top' },
        { label: 'اللاعب', href: '/faq#players' },
        { label: 'الشراكة', href: '/faq#partnership' },
        { label: 'الدعم', href: '/faq#support' },
      ],
      headerCtas: {
        home: { label: 'ابدأ من الهاتف', href: '/#final-cta' },
        partnership: { label: 'تواصل مع المدير', href: '/partnership#final-cta' },
        faq: { label: 'افتح مسار الشراكة', href: '/partnership#final-cta' },
      },
    },
    footer: {
      description:
        'ابدأ من مباراة الليلة، جرّب الكازينو، راجع العروض، أو افتح مسار الشراكة من الهاتف بخطوات قصيرة وواضحة.',
      columns: [
        {
          title: 'صفحات اللاعب',
          links: [
            { label: 'الرئيسية', href: '/' },
            { label: 'الألعاب', href: '/#games' },
            { label: 'الرياضة', href: '/#sports' },
            { label: 'العروض', href: '/#offers' },
          ],
        },
        {
          title: 'الشراكة',
          links: [
            { label: 'لماذا نحن', href: '/partnership#benefits' },
            { label: 'الخطوات', href: '/partnership#steps' },
            { label: 'المسارات', href: '/partnership#paths' },
            { label: 'الأدوات', href: '/partnership#tools' },
          ],
        },
        {
          title: 'الدعم والأسئلة',
          links: [
            { label: 'الأسئلة الشائعة', href: '/faq' },
            { label: 'أسئلة اللاعب', href: '/faq#players' },
            { label: 'أسئلة الشراكة', href: '/faq#partnership' },
            { label: 'دعم مباشر', href: '/faq#support' },
          ],
        },
      ],
      note:
        'الهوامش ونماذج التعاون والعروض المعروضة هنا تعريفية، وتُراجع نهائيًا حسب نوع الجمهور، التغطية، المدينة، وآلية التشغيل.',
      actionLinks: [
        { label: 'Telegram', href: '#', external: true },
        { label: 'WhatsApp', href: '#', external: true },
      ],
    },
    home: {
      seo: {
        title: 'MELBET الكويت | الرئيسية',
        description: 'ابدأ من الرياضة أو الكازينو أو العروض داخل واجهة كويتية داكنة سريعة وواضحة.',
      },
      hero: {
        id: 'top',
        eyebrow: 'واجهة اللاعب في الكويت',
        title: 'ابدأ من مباراة الليلة، جرّب الكازينو، وخذ العرض الذي يرفع البداية.',
        description:
          'اختر ما يناسبك الآن: كرة قدم، كازينو حي، سلوتس، أو هدية افتتاحية. كل شيء جاهز من الهاتف بخطوات سريعة ودعم واضح.',
        primaryCta: {
          label: 'افتح الرياضة الآن',
          href: '#sports',
        },
        secondaryCta: {
          label: 'اكتشف الألعاب',
          href: '#games',
        },
        highlights: ['كرة القدم', 'كازينو حي', 'سلوتس', 'هدايا', 'وصول هاتفي', 'دعم مباشر'],
        stats: [
          {
            value: '24/7',
            label: 'وصول سريع من الهاتف',
            note: 'تنقل واضح بين الرياضة والكازينو والعروض في أي وقت.',
          },
          {
            value: '+200%',
            label: 'حافز البداية',
            note: 'قيمة العرض الفعلي ترتبط بالحملة النشطة وقت الدخول.',
          },
          {
            value: '2 مسار',
            label: 'رياضة وكازينو',
            note: 'ابدأ من المباراة أو من اللعبة ثم تحرك بسهولة داخل الواجهة.',
          },
        ],
        media: getKuwaitMedia('home-hero-stage'),
        stage: {
          eyebrow: 'لوحة الليلة',
          title: 'كرة القدم في الواجهة، والكازينو والعروض على بعد لمسة.',
          description:
            'ابدأ من كرة القدم إذا كنت تريد حركة الليلة، ثم افتح الكازينو أو العروض فورًا من نفس المسار.',
          pills: ['مباريات اليوم', 'كازينو مباشر', 'هدايا سريعة'],
          rail: [
            { label: 'المباراة', value: '21:30', detail: 'ذروة دخول اللاعب تبدأ من مباراة الليلة.' },
            { label: 'العرض', value: 'Welcome', detail: 'ادخل مع حافز افتتاحي ثم تحرك إلى الألعاب.' },
            { label: 'الوصول', value: '1 Tap', detail: 'تنقل مختصر ومهيأ للشاشات الصغيرة.' },
          ],
          quickStats: [
            { value: 'Live', label: 'كرة قدم مباشرة' },
            { value: 'Slots', label: 'جلسات سريعة' },
            { value: 'Gift', label: 'مكافآت جاهزة' },
          ],
        },
        quickCards: [
          {
            eyebrow: 'رياضة',
            title: 'تركيز قوي على كرة القدم',
            description: 'ادخل إلى المباريات الكبيرة بسرعة وتحرك مع إيقاع الليلة من أول لمسة.',
            metric: 'Night Run',
          },
          {
            eyebrow: 'كازينو',
            title: 'سلوتس وكازينو حي في مسار واحد',
            description: 'افتح السبين السريع أو الطاولات المباشرة وانتقل بينهما بدون تعطيل للإيقاع.',
            metric: 'Live + Slots',
          },
          {
            eyebrow: 'عروض',
            title: 'هدايا تدعم الجلسة الأولى',
            description: 'خذ حافز البداية ثم ارجع إلى اللعب أو الرياضة في الوقت الذي يناسبك.',
            metric: 'Bonus Flow',
          },
        ],
      },
      games: {
        id: 'games',
        eyebrow: 'اكتشاف الألعاب',
        title: 'ثلاث طرق واضحة للدخول: كازينو حي، سلوتس، وألعاب سريعة.',
        description:
          'اختر الجلسة التي تناسبك الآن: طاولة مباشرة، سبين سريع، أو لعبة حية جاهزة للهاتف.',
        cards: [
          {
            eyebrow: 'كازينو حي',
            title: 'جلسة مباشرة بطابع فاخر',
            description: 'ادخل إلى طاولات مباشرة بإيقاع هادئ وصورة قوية إذا كنت تريد جلسة ليلية بطابع فاخر.',
            bullets: ['طاولات مباشرة', 'إيقاع واضح', 'دخول سريع'],
            tags: ['Live Casino', 'Premium'],
            metric: 'Live',
            media: getKuwaitMedia('home-games-casino'),
          },
          {
            eyebrow: 'سلوتس',
            title: 'سبين سريع ومكتبة أوسع',
            description: 'ابدأ بسبين سريع، بدّل بين العناوين، وارجع إلى الرياضة متى أردت.',
            bullets: ['جلسات قصيرة', 'تنقل سريع', 'واجهة واضحة'],
            tags: ['Slots', 'Fast Flow'],
            metric: 'Fast',
            media: getKuwaitMedia('home-games-slots'),
          },
          {
            eyebrow: 'ألعاب حية',
            title: 'ألعاب تشتغل مع إيقاع الهاتف',
            description: 'افتح اللعب بسرعة من الهاتف وتحرك بين الجلسات بدون خطوات طويلة.',
            bullets: ['هاتف أولًا', 'انتقال سلس', 'حضور ليلي'],
            tags: ['Mobile', 'Quick Start'],
            metric: '24/7',
            media: getKuwaitMedia('home-games-live'),
          },
        ],
      },
      sports: {
        id: 'sports',
        eyebrow: 'الرياضة',
        title: 'كرة القدم تقود المشهد، والمباشر يفتح الطريق لمن يتحرك أسرع.',
        description:
          'تابع كرة القدم أولًا، ثم تحرك إلى المتابعة المباشرة والعروض من نفس الإيقاع إذا كنت تريد دخولًا أسرع.',
        pills: ['Football First', 'Live Match', 'Mobile Access', 'Match Night'],
        lead: {
          eyebrow: 'كرة القدم',
          title: 'أجواء مباراة الليلة تبدأ هنا',
          description: 'ادخل إلى مباراة الليلة مباشرة، ثم تحرك بين المتابعة الحية وبقية المسارات بدون تعطيل.',
          bullets: ['قمم كروية', 'إيقاع سريع', 'واجهة واضحة'],
          tags: ['Big Match', 'Tonight'],
          metric: 'Prime',
          media: getKuwaitMedia('home-sports-football'),
        },
        cards: [
          {
            eyebrow: 'مباشر',
            title: 'متابعة حية بدون ازدحام',
            description: 'راقب التحرك لحظة بلحظة إذا كنت تريد اللعب مع إيقاع المباراة نفسه.',
            tags: ['Live', 'Fast'],
            metric: 'Now',
            media: getKuwaitMedia('home-sports-live'),
          },
          {
            eyebrow: 'وصول',
            title: 'الرياضة تعمل من الهاتف كما يجب',
            description: 'انتقل من المباراة إلى العرض أو الخطوة التالية بلمسة واحدة من الهاتف.',
            tags: ['Mobile', 'Smooth'],
            metric: '1 Tap',
            media: getKuwaitMedia('home-sports-live'),
          },
        ],
      },
      offers: {
        id: 'offers',
        eyebrow: 'العروض والهدايا',
        title: 'ابدأ بهدية واضحة، ثم تحرك إلى المكافآت التي ترفع الجلسة التالية.',
        description:
          'خذ حافز البداية بسرعة، ثم افتح الهدايا والمكافآت التي تناسب الجلسة التالية.',
        cards: [
          {
            eyebrow: 'ترحيب',
            title: 'بداية أقوى لأول دخول',
            description: 'ادخل بأول حافز متاح، ارفع الجلسة الأولى، وابدأ بدون تعقيد.',
            bullets: ['حافز افتتاحي', 'مسار واضح', 'جاهز للهاتف'],
            tags: ['Welcome', 'Fast Start'],
            metric: '+200%',
            href: '#final-cta',
            ctaLabel: 'ابدأ من هنا',
            media: getKuwaitMedia('home-offers-welcome'),
          },
          {
            eyebrow: 'هدايا',
            title: 'مكافآت تواكب الإيقاع',
            description: 'استفد من هدايا ومكافآت رجوع تعيدك في الوقت المناسب وبجلسة أقوى.',
            bullets: ['هدايا', 'عروض رجوع', 'دعم الجلسة التالية'],
            tags: ['Rewards', 'Gifts'],
            metric: 'Boost',
            href: '#final-cta',
            ctaLabel: 'افتح العروض',
            media: getKuwaitMedia('home-offers-gifts'),
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'الخطوة الأخيرة',
        title: 'اختر طريقك الآن: مباراة الليلة، جلسة كازينو، أو عرض يرفع البداية.',
        description:
          'ابدأ من الرياضة إذا كنت تريد مباراة الليلة، افتح الألعاب إذا كنت تريد جلسة أسرع، أو راجع العروض إذا كنت تريد دفعة البداية.',
        primaryCta: {
          label: 'ابدأ من الرياضة',
          href: '#sports',
        },
        secondaryCta: {
          label: 'راجع العروض',
          href: '#offers',
        },
        media: getKuwaitMedia('home-final-cta'),
        notes: ['كرة القدم في المقدمة', 'كازينو حي وسلوتس', 'دعم واضح من الهاتف'],
      },
    },
    partnership: {
      seo: {
        title: 'MELBET الكويت | الشراكة',
        description: 'مسار شراكة ووكالة واضح للكويت، مع أدوات، دعم مدير، ومسارات منفصلة للشريك والوكيل.',
      },
      hero: {
        id: 'top',
        eyebrow: 'الشراكة والوكالة',
        title: 'حوّل جمهورك أو دورك المحلي إلى مسار شراكة واضح من أول تواصل.',
        description:
          'إذا كان لديك جمهور، قناة، مجتمع، أو قدرة على دعم اللاعبين محليًا، فابدأ من المسار الذي يناسب عملك فعلًا. الشريك يروّج ويقود الحملات، والوكيل يتابع الدفع والدعم المحلي.',
        primaryCta: {
          label: 'استعرض المسارات',
          href: '#paths',
        },
        secondaryCta: {
          label: 'تواصل مع المدير',
          href: '#final-cta',
        },
        highlights: ['Partner', 'Agent', 'Tracking', 'Manager Support'],
        stats: [
          {
            value: '2 مسار',
            label: 'شريك أو وكيل',
            note: 'فصل واضح بين الترويج وبين الدعم المحلي للدفعات.',
          },
          {
            value: '24/7',
            label: 'متابعة أسرع',
            note: 'قنوات تواصل مباشرة مع مدير أو مسؤول متابعة.',
          },
          {
            value: 'Local',
            label: 'تشغيل أقرب للسوق',
            note: 'المسار يُراجع حسب المدينة، الجمهور، وطريقة العمل.',
          },
        ],
        media: getKuwaitMedia('partnership-hero'),
        routeCards: [
          {
            eyebrow: 'Partner',
            title: 'شريك ترويج وجمهور',
            description: 'لمن يملك قناة أو مجتمعًا أو حركة زيارات ويريد كودًا واضحًا وحملات جاهزة ومتابعة أداء.',
            badge: 'Audience',
          },
          {
            eyebrow: 'Agent',
            title: 'وكيل دعم محلي',
            description: 'لمن يستطيع دعم الدفعات أو متابعة اللاعبين محليًا داخل منطقته بثقة وسرعة استجابة.',
            badge: 'Local Ops',
          },
          {
            eyebrow: 'Support',
            title: 'مدير يتابع المسار',
            description: 'ابدأ مع مدير يراجع الإطلاق، التعديل، وخطوة التوسع عندما تظهر النتائج.',
            badge: 'Manager',
          },
        ],
        checkpointTitle: 'قبل أن تبدأ، ما الذي يحدد المسار؟',
        checkpointItems: [
          {
            value: 'Traffic',
            label: 'حجم الجمهور أو الزيارات',
            note: 'مفيد لتقييم مسار الشريك والكود والحملات.',
          },
          {
            value: 'Coverage',
            label: 'المدينة أو التغطية المحلية',
            note: 'مهم أكثر عند تقييم مسار الوكيل وخدمة اللاعبين محليًا.',
          },
          {
            value: 'Setup',
            label: 'أسلوب التشغيل والدعم',
            note: 'يحدد الأدوات، المتابعة، وطبيعة الاتفاق بشكل عملي.',
          },
        ],
      },
      benefits: {
        id: 'benefits',
        eyebrow: 'لماذا هذا المسار',
        title: 'اختر من البداية: مسار ترويجي للشريك، أو دور محلي مباشر للوكيل.',
        description:
          'إذا كنت تملك جمهورًا فابدأ بمسار الشريك. وإذا كنت أقرب إلى الدفع وخدمة اللاعبين محليًا فابدأ بمسار الوكيل.',
        cards: [
          {
            eyebrow: 'Partner',
            title: 'مسار ترويجي واضح',
            description: 'روّج لجمهورك بكود خاص، مواد جاهزة، ومتابعة أداء تساعدك على تحسين الحملة.',
            bullets: ['مواد جاهزة', 'مدير متابعة', 'نقطة دخول واضحة'],
            tags: ['Promo Code', 'Campaign'],
            metric: 'Audience',
          },
          {
            eyebrow: 'Agent',
            title: 'دور محلي أكثر عملية',
            description: 'ادخل كوكيل إذا كنت تتابع الدفعات أو تساعد اللاعبين محليًا وتريد دورًا تشغيليًا واضحًا.',
            bullets: ['دعم الدفعات', 'متابعة اللاعب', 'تشغيل محلي'],
            tags: ['Local Ops', 'Trust'],
            metric: 'Local',
            media: getKuwaitMedia('partnership-benefits-support'),
          },
          {
            eyebrow: 'Support',
            title: 'دعم إداري لا يترك المسار غامضًا',
            description: 'تحرك من أول سؤال إلى الإطلاق ثم التوسع مع مدير يراجع الخطوة التالية معك بوضوح.',
            bullets: ['توجيه أولي', 'متابعة لاحقة', 'مراجعة عملية'],
            tags: ['Manager', 'Follow-up'],
            metric: 'Direct',
          },
        ],
      },
      steps: {
        id: 'steps',
        eyebrow: 'خطوات البدء',
        title: 'ابدأ بدور واضح، جهّز المسار المناسب، ثم انطلق مع متابعة حقيقية.',
        description:
          'أرسل دورك، راجع التغطية، استلم المواد أو إطار العمل، ثم تابع الأداء بعد الإطلاق.',
        items: [
          {
            step: '01',
            title: 'عرّف دورك',
            description: 'هل أنت أقرب إلى جمهور وحملات؟ أم إلى دفعات ودعم محلي؟',
            note: 'هذه الخطوة تفصل بين الشريك والوكيل مبكرًا.',
          },
          {
            step: '02',
            title: 'راجع التغطية والقدرة',
            description: 'يتم تقييم الجمهور، المدينة، ونوع العمل حتى يتضح المسار العملي المناسب.',
            note: 'لا يوجد قالب واحد يناسب الجميع.',
          },
          {
            step: '03',
            title: 'استلم المواد والأدوات',
            description: 'مسار الشريك يأخذ مواد وكودًا ومتابعة، ومسار الوكيل يأخذ وضوحًا تشغيليًا أكبر.',
            note: 'الهدف هنا أن تصبح البداية جاهزة لا نظرية.',
          },
          {
            step: '04',
            title: 'ابدأ التشغيل ثم تابع',
            description: 'بعد الإطلاق، تبدأ مرحلة المتابعة الفعلية: من أين جاء الرد؟ وما الذي يحتاج تعديلًا أو توسعًا؟',
            note: 'المتابعة أهم من البداية نفسها.',
          },
        ],
      },
      paths: {
        id: 'paths',
        eyebrow: 'المسارات',
        title: 'اختر المسار الذي يشبه عملك فعلًا، لا المسار الذي يبدو مناسبًا فقط.',
        description:
          'إذا كنت تملك جمهورًا فابدأ كشريك. وإذا كنت تدعم الدفع أو خدمة اللاعبين محليًا فابدأ كوكيل.',
        footerNote:
          'تتحدد التفاصيل النهائية بعد مراجعة الجمهور، المدينة، وطريقة العمل الفعلية.',
        cards: [
          {
            eyebrow: 'Partner Route',
            title: 'مسار الشريك',
            description: 'مناسب لمن يملك قناة، مجتمعًا، جمهورًا، أو حركة زيارات يمكن توجيهها إلى العرض بشكل منظم.',
            value: 'Campaign',
            note: 'يركز على الترويج، الكود، المواد، والمتابعة على مستوى الأداء.',
            bullets: [
              'كود أو مسار ترويجي واضح',
              'مواد حملات ورسائل جاهزة',
              'متابعة على مستوى الزيارات والاستجابة',
              'دعم من مدير عند التطوير أو التعديل',
            ],
            media: getKuwaitMedia('partnership-partner-route'),
            ctaLabel: 'أريد مسار الشريك',
            href: '#final-cta',
          },
          {
            eyebrow: 'Agent Route',
            title: 'مسار الوكيل',
            description: 'مناسب لمن يستطيع دعم الدفعات أو متابعة اللاعبين محليًا ضمن بيئة تعتمد على الثقة والوضوح التشغيلي.',
            value: 'Local Ops',
            note: 'يركز على الدفعات، العلاقة المحلية، وسلاسة دعم اللاعب عند الحاجة.',
            bullets: [
              'دور محلي أقرب إلى التشغيل',
              'متابعة للدفعات أو السحب بحسب الإطار المتاح',
              'قرب أكبر من اللاعب عندما يلزم',
              'وضوح أعلى في نطاق المدينة أو التغطية',
            ],
            media: getKuwaitMedia('partnership-agent-route'),
            ctaLabel: 'أريد مسار الوكيل',
            href: '#final-cta',
          },
        ],
      },
      tools: {
        id: 'tools',
        eyebrow: 'الأدوات والمتابعة',
        title: 'خذ مواد جاهزة، متابعة أداء، ومدير يعرف متى يعدّل المسار.',
        description:
          'اعرف ما الذي يتحرك، ما الذي يحتاج تعديلًا، ومتى تكون الخطوة التالية هي التوسّع أو تغيير الرسالة.',
        spotlightTitle: 'أدوات تسرّع القرار للشريك والوكيل',
        spotlightBody:
          'افتح المواد، راقب الأداء، وخذ القرار التالي بسرعة بدل الانتظار أو التخمين.',
        spotlightStats: [
          { value: 'Live', label: 'تغذية مستمرة', note: 'مراجعة أسرع لمسار الحملة أو التشغيل.' },
          { value: '2 View', label: 'شريك + وكيل', note: 'كل نموذج يرى ما يخصه بوضوح أكبر.' },
          { value: 'Manager', label: 'دعم موجه', note: 'المتابعة لا تبقى عامة أو ضبابية.' },
        ],
        spotlightFeed: [
          'راقب الاستجابة والحركة لحظة بلحظة',
          'تابع الحملة أو التشغيل المحلي بسرعة',
          'قرر التوسّع أو التعديل في الوقت المناسب',
        ],
        media: getKuwaitMedia('partnership-tools-dashboard'),
        cards: [
          {
            eyebrow: 'مواد جاهزة',
            title: 'أصول تسويقية ورسائل أوضح',
            description: 'ابدأ بمواد ورسائل جاهزة تقلل التأخير وتساعدك على إطلاق المسار بسرعة.',
            bullets: ['Copy واضح', 'رسائل حملات', 'توجيه أبسط للبداية'],
            tags: ['Messaging', 'Launch'],
            metric: 'Ready',
          },
          {
            eyebrow: 'متابعة',
            title: 'قراءة أفضل للحركة',
            description: 'تابع الأداء أو التشغيل المحلي بسرعة ثم عدّل الرسالة أو الخطوة التالية على أساس واضح.',
            bullets: ['أداء', 'رد فعل', 'تعديل أسرع'],
            tags: ['Tracking', 'Response'],
            metric: 'Clear',
          },
          {
            eyebrow: 'دعم',
            title: 'مدير يقرب المسار من الواقع',
            description: 'تواصل مع مدير يعرف متى يوجّهك، متى يراجع الأداء، ومتى يفتح لك خطوة جديدة.',
            bullets: ['متابعة', 'توجيه', 'مراجعة عملية'],
            tags: ['Manager', 'Ops'],
            metric: 'Direct',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'ابدأ التواصل',
        title: 'إذا كان لديك جمهور أو دور محلي واضح، فهذه هي نقطة الدخول الصحيحة.',
        description:
          'أرسل رسالة قصيرة عن جمهورك أو مدينتك أو دورك، وسنوجّهك إلى مسار الشريك أو الوكيل بخطوات واضحة.',
        primaryCta: {
          label: 'راجع الأسئلة أولًا',
          href: '/faq#partnership',
        },
        secondaryCta: {
          label: 'عد إلى البداية',
          href: '/partnership#top',
        },
        media: getKuwaitMedia('partnership-final-cta'),
        notes: ['Partner', 'Agent', 'Manager Follow-up'],
        channels: [
          {
            ...contactChannels.telegram,
            label: 'تواصل عبر Telegram',
          },
          {
            ...contactChannels.whatsapp,
            label: 'تواصل عبر WhatsApp',
          },
        ],
        helperText:
          'تختلف التفاصيل حسب المدينة، حجم الجمهور، وطريقة العمل، لذلك تبدأ المراجعة من أول تواصل.',
      },
    },
    faq: {
      seo: {
        title: 'MELBET الكويت | الأسئلة الشائعة',
        description: 'أسئلة قصيرة وواضحة للاعبين والشركاء والوكلاء ضمن صفحة FAQ مستقلة للكويت.',
      },
      intro: {
        id: 'top',
        eyebrow: 'FAQ الكويت',
        title: 'إجابات سريعة قبل أن تبدأ لاعبًا أو تتواصل كشريك.',
        description:
          'افتح أسئلة اللاعب إذا كنت تريد الرياضة أو الألعاب أو العروض، وافتح أسئلة الشراكة إذا كنت تريد مسار الشريك أو الوكيل.',
        primaryCta: {
          label: 'أسئلة اللاعب',
          href: '#players',
        },
        secondaryCta: {
          label: 'أسئلة الشراكة',
          href: '#partnership',
        },
      },
      player: {
        id: 'players',
        eyebrow: 'Player FAQ',
        title: 'أسئلة اللاعب',
        description: 'إذا كنت تريد بداية سريعة، ألعاب واضحة، عروض جاهزة، أو دعم قريب، ستجد الجواب هنا.',
        items: [
          {
            question: 'كيف أبدأ بسرعة داخل واجهة الكويت؟',
            answer: 'ابدأ من الرياضة أو الألعاب أو العروض عبر الأزرار الرئيسية في الأعلى أو من زر البدء في النهاية.',
          },
          {
            question: 'هل أبدأ من كرة القدم؟',
            answer: 'نعم. كرة القدم تقود قسم الرياضة ثم تفتح لك الوصول إلى المتابعة المباشرة وبقية المسارات.',
          },
          {
            question: 'ماذا سأجد داخل قسم الألعاب؟',
            answer: 'ستجد كازينو حي، سلوتس، وألعاب سريعة تفتح من الهاتف بخطوات قصيرة.',
          },
          {
            question: 'هل توجد عروض أو هدايا للبداية؟',
            answer: 'نعم. توجد بطاقات عروض مخصصة للبداية والهدايا، والقيمة الفعلية ترتبط بالحملة النشطة وقت الدخول.',
          },
          {
            question: 'هل التجربة مريحة على الهاتف؟',
            answer: 'نعم. ستتحرك من الهاتف بسهولة مع بطاقات واضحة ومسافات قصيرة ودون أي ازدحام أفقي.',
          },
          {
            question: 'إذا احتجت دعمًا، أين أذهب؟',
            answer: 'ارجع إلى زر الدعم في نهاية صفحة الأسئلة، أو افتح صفحة الشراكة إذا كنت تريد تواصلًا مباشرًا.',
          },
        ],
      },
      partnership: {
        id: 'partnership',
        eyebrow: 'Partnership FAQ',
        title: 'أسئلة الشراكة والوكالة',
        description: 'إذا كنت تريد معرفة الفرق بين الشريك والوكيل، الأدوات، أو طريقة البدء، فابدأ من هذه الإجابات.',
        items: [
          {
            question: 'من يمكنه التقديم كشريك أو وكيل؟',
            answer: 'من لديه جمهور أو حركة زيارات أو تغطية محلية أو قدرة فعلية على دعم الدفعات أو متابعة اللاعبين محليًا.',
          },
          {
            question: 'ما الفرق بين الشريك والوكيل؟',
            answer: 'الشريك يقود الجمهور والحملات والكود، بينما الوكيل يركز أكثر على الدفعات أو الدعم المحلي أو علاقة اللاعب.',
          },
          {
            question: 'هل يحصل الطرفان على نفس الأدوات؟',
            answer: 'كلاهما يحصل على متابعة ودعم، لكن الأدوات تتغير حسب طبيعة المسار: حملات وترويج للشريك، ووضوح تشغيلي أكبر للوكيل.',
          },
          {
            question: 'هل الشروط واحدة للجميع؟',
            answer: 'لا. المسار النهائي يُراجع حسب المدينة، الجمهور، طريقة العمل، والقدرة الحقيقية على التشغيل أو الترويج.',
          },
          {
            question: 'كيف أبدأ بأسرع طريقة؟',
            answer: 'راجع قسم المسارات في صفحة الشراكة ثم استخدم Telegram أو WhatsApp في زر التواصل الأخير مع وصف مختصر لوضعك.',
          },
        ],
      },
      support: {
        id: 'support',
        eyebrow: 'الدعم',
        title: 'هل تريد الخطوة التالية بعد الأسئلة؟',
        description:
          'ارجع إلى الرئيسية إذا كنت تريد الرياضة أو الألعاب أو العروض، أو افتح صفحة الشراكة إذا كنت تريد التحدث مع المدير.',
        primaryCta: {
          label: 'العودة إلى الرئيسية',
          href: '/',
        },
        secondaryCta: {
          label: 'فتح صفحة الشراكة',
          href: '/partnership#final-cta',
        },
        media: getKuwaitMedia('faq-support'),
        notes: ['Player', 'Partner', 'Agent'],
      },
    },
  },
  en: {
    market: 'Kuwait',
    locale: 'en',
    direction: getLocaleDirection('en'),
    seo: {
      title: 'MELBET Kuwait',
      description: 'A full Kuwait landing system for players, partners, and agents with a premium Gulf identity.',
    },
    brand: {
      name: 'MELBET Kuwait',
      tag: 'Sports, casino, rewards, and a direct partnership route for partners and agents.',
    },
    ui: {
      languageLabel: 'Language switcher',
    },
    navigation: {
      global: [
        { label: 'Home', href: '/' },
        { label: 'Partnership', href: '/partnership' },
        { label: 'FAQ', href: '/faq' },
      ],
      home: [
        { label: 'Start', href: '/#top' },
        { label: 'Games', href: '/#games' },
        { label: 'Sports', href: '/#sports' },
        { label: 'Offers', href: '/#offers' },
        { label: 'Play Now', href: '/#final-cta' },
      ],
      partnership: [
        { label: 'Overview', href: '/partnership#top' },
        { label: 'Benefits', href: '/partnership#benefits' },
        { label: 'Steps', href: '/partnership#steps' },
        { label: 'Paths', href: '/partnership#paths' },
        { label: 'Tools', href: '/partnership#tools' },
        { label: 'Contact', href: '/partnership#final-cta' },
      ],
      faq: [
        { label: 'Intro', href: '/faq#top' },
        { label: 'Players', href: '/faq#players' },
        { label: 'Partnership', href: '/faq#partnership' },
        { label: 'Support', href: '/faq#support' },
      ],
      headerCtas: {
        home: { label: 'Start on Mobile', href: '/#final-cta' },
        partnership: { label: 'Contact Manager', href: '/partnership#final-cta' },
        faq: { label: 'Open Partnership', href: '/partnership#final-cta' },
      },
    },
    footer: {
      description:
        'Start from tonight’s match, jump into the casino, review the offers, or open the partnership route from one phone-ready flow.',
      columns: [
        {
          title: 'Player Pages',
          links: [
            { label: 'Home', href: '/' },
            { label: 'Games', href: '/#games' },
            { label: 'Sports', href: '/#sports' },
            { label: 'Offers', href: '/#offers' },
          ],
        },
        {
          title: 'Partnership',
          links: [
            { label: 'Why Us', href: '/partnership#benefits' },
            { label: 'Steps', href: '/partnership#steps' },
            { label: 'Paths', href: '/partnership#paths' },
            { label: 'Tools', href: '/partnership#tools' },
          ],
        },
        {
          title: 'FAQ and Support',
          links: [
            { label: 'FAQ', href: '/faq' },
            { label: 'Player FAQ', href: '/faq#players' },
            { label: 'Partnership FAQ', href: '/faq#partnership' },
            { label: 'Support', href: '/faq#support' },
          ],
        },
      ],
      note:
        'Any ranges, offers, or route descriptions shown here are directional and should be reviewed against the real audience, city coverage, and operating setup.',
      actionLinks: [
        { label: 'Telegram', href: '#', external: true },
        { label: 'WhatsApp', href: '#', external: true },
      ],
    },
    home: {
      seo: {
        title: 'MELBET Kuwait | Home',
        description: 'A Kuwait player-facing page for sports, casino, offers, and fast mobile access.',
      },
      hero: {
        id: 'top',
        eyebrow: 'Kuwait Player Entry',
        title: 'Start with tonight’s match, open the casino fast, and take the offer that lifts the first run.',
        description:
          'Choose the move that fits the moment now: football, live casino, slots, or a welcome reward. Everything is ready on mobile with a shorter path and direct support.',
        primaryCta: {
          label: 'Open Sports',
          href: '#sports',
        },
        secondaryCta: {
          label: 'Explore Games',
          href: '#games',
        },
        highlights: ['Football', 'Live casino', 'Slots', 'Gifts', 'Mobile access', 'Support'],
        stats: [
          {
            value: '24/7',
            label: 'Fast mobile access',
            note: 'A clear route between sports, casino, and offers.',
          },
          {
            value: '+200%',
            label: 'Welcome push',
            note: 'The final value depends on the active campaign.',
          },
          {
            value: '2 Paths',
            label: 'Sports and casino',
            note: 'Start from the match or from the game without losing rhythm.',
          },
        ],
        media: getKuwaitMedia('home-hero-stage'),
        stage: {
          eyebrow: 'Tonight Board',
          title: 'Football in front, casino and offers one tap away.',
          description:
            'Start from football if match night is the priority, then move straight into casino or offers from the same route.',
          pills: ['Tonight', 'Live casino', 'Rewards'],
          rail: [
            { label: 'Kickoff', value: '21:30', detail: 'A football-first start for match-night traffic.' },
            { label: 'Offer', value: 'Welcome', detail: 'Take the welcome push before the next move.' },
            { label: 'Access', value: '1 Tap', detail: 'Built to feel short and clear on mobile.' },
          ],
          quickStats: [
            { value: 'Live', label: 'Football first' },
            { value: 'Slots', label: 'Quick games' },
            { value: 'Gift', label: 'Reward layer' },
          ],
        },
        quickCards: [
          {
            eyebrow: 'Sports',
            title: 'Football sits at the front',
            description: 'Big fixtures and a faster path into match-night action.',
            metric: 'Night Run',
          },
          {
            eyebrow: 'Casino',
            title: 'Live casino and slots in one route',
            description: 'Move between live play and quicker spin sessions without visual clutter.',
            metric: 'Live + Slots',
          },
          {
            eyebrow: 'Offers',
            title: 'Rewards that actually support the session',
            description: 'Take the opening push, then move back into play when the timing feels right.',
            metric: 'Bonus Flow',
          },
        ],
      },
      games: {
        id: 'games',
        eyebrow: 'Game Discovery',
        title: 'Three clear ways in: live casino, slots, and faster game sessions.',
        description:
          'Pick the session that fits now: a live table, a fast spin run, or a direct phone-first game entry.',
        cards: [
          {
            eyebrow: 'Live casino',
            title: 'A more premium live-table feel',
            description: 'Go straight into live tables if you want a darker, more polished late-night session.',
            bullets: ['Live tables', 'Premium pace', 'Quick entry'],
            tags: ['Live Casino', 'Premium'],
            metric: 'Live',
            media: getKuwaitMedia('home-games-casino'),
          },
          {
            eyebrow: 'Slots',
            title: 'Faster spins and broader choice',
            description: 'Run through quicker spins, switch titles, then jump back to sports whenever you want.',
            bullets: ['Short sessions', 'Fast movement', 'Clean layout'],
            tags: ['Slots', 'Fast Flow'],
            metric: 'Fast',
            media: getKuwaitMedia('home-games-slots'),
          },
          {
            eyebrow: 'Live games',
            title: 'Built around mobile rhythm',
            description: 'Open the game fast on mobile and keep moving between sessions without extra steps.',
            bullets: ['Mobile first', 'Smooth transition', 'Late-night tone'],
            tags: ['Mobile', 'Quick Start'],
            metric: '24/7',
            media: getKuwaitMedia('home-games-live'),
          },
        ],
      },
      sports: {
        id: 'sports',
        eyebrow: 'Sports',
        title: 'Football leads the start, and live movement opens the next step.',
        description:
          'Follow football first, then move into live tracking and the next offer from the same fast phone-ready flow.',
        pills: ['Football First', 'Live Match', 'Mobile Access', 'Match Night'],
        lead: {
          eyebrow: 'Football',
          title: 'Tonight’s match energy starts here',
          description: 'Open the match fast, stay with the live pace, and keep the next move close.',
          bullets: ['Major fixtures', 'Fast pace', 'Clear entry'],
          tags: ['Big Match', 'Tonight'],
          metric: 'Prime',
          media: getKuwaitMedia('home-sports-football'),
        },
        cards: [
          {
            eyebrow: 'Live',
            title: 'Live movement without crowding',
            description: 'Track the action while the match is live if you like moving with the moment, not after it.',
            tags: ['Live', 'Fast'],
            metric: 'Now',
            media: getKuwaitMedia('home-sports-live'),
          },
          {
            eyebrow: 'Access',
            title: 'Sports that actually fits the phone',
            description: 'Move from the match to the next offer or next move with one shorter mobile path.',
            tags: ['Mobile', 'Smooth'],
            metric: '1 Tap',
            media: getKuwaitMedia('home-sports-live'),
          },
        ],
      },
      offers: {
        id: 'offers',
        eyebrow: 'Offers and Gifts',
        title: 'Start with a welcome push, then move into rewards that help the next session.',
        description:
          'See the reward fast, understand the value quickly, and move back into play without losing momentum.',
        cards: [
          {
            eyebrow: 'Welcome',
            title: 'A stronger first-entry push',
            description: 'Open the first session with a direct welcome reward and start with better value.',
            bullets: ['Opening reward', 'Clear path', 'Mobile-ready'],
            tags: ['Welcome', 'Fast Start'],
            metric: '+200%',
            href: '#final-cta',
            ctaLabel: 'Start Here',
            media: getKuwaitMedia('home-offers-welcome'),
          },
          {
            eyebrow: 'Gifts',
            title: 'Rewards that keep pace',
            description: 'Use gift and return-style rewards when you want the next session to land stronger.',
            bullets: ['Gift layer', 'Return promos', 'Next-session support'],
            tags: ['Rewards', 'Gifts'],
            metric: 'Boost',
            href: '#final-cta',
            ctaLabel: 'Open Offers',
            media: getKuwaitMedia('home-offers-gifts'),
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'Last Step',
        title: 'Pick the route now: tonight’s match, a casino session, or the offer that lifts the start.',
        description:
          'Start from sports if the match is the priority, open games if you want a faster session, or review offers if you want the opening boost first.',
        primaryCta: {
          label: 'Start with Sports',
          href: '#sports',
        },
        secondaryCta: {
          label: 'Review Offers',
          href: '#offers',
        },
        media: getKuwaitMedia('home-final-cta'),
        notes: ['Football first', 'Live casino and slots', 'Clear mobile support'],
      },
    },
    partnership: {
      seo: {
        title: 'MELBET Kuwait | Partnership',
        description: 'A Kuwait partnership page with separate partner and agent logic, clear tools, and direct contact.',
      },
      hero: {
        id: 'top',
        eyebrow: 'Partnership and Agency',
        title: 'Turn your audience or local role into a partnership route that starts with the right contact.',
        description:
          'If you have an audience, a channel, a community, or a real local support role, start from the route that matches your work. Partners promote and drive campaigns. Agents support payments and local player continuity.',
        primaryCta: {
          label: 'View the Paths',
          href: '#paths',
        },
        secondaryCta: {
          label: 'Contact the Manager',
          href: '#final-cta',
        },
        highlights: ['Partner', 'Agent', 'Tracking', 'Manager Support'],
        stats: [
          {
            value: '2 Routes',
            label: 'Partner or agent',
            note: 'One route for promotion and one route for local operations.',
          },
          {
            value: '24/7',
            label: 'Faster follow-up',
            note: 'Direct channels into a manager or support contact.',
          },
          {
            value: 'Local',
            label: 'Closer market fit',
            note: 'The route is reviewed against city, audience, and working model.',
          },
        ],
        media: getKuwaitMedia('partnership-hero'),
        routeCards: [
          {
            eyebrow: 'Partner',
            title: 'Audience and campaign route',
            description: 'For channels, communities, traffic owners, and promoters who want code, materials, and campaign follow-up.',
            badge: 'Audience',
          },
          {
            eyebrow: 'Agent',
            title: 'Local support route',
            description: 'For people who can support payments, player follow-up, or local operating trust in their city.',
            badge: 'Local Ops',
          },
          {
            eyebrow: 'Support',
            title: 'Manager-led direction',
            description: 'Start with a manager who can review the launch, the adjustments, and the next growth step.',
            badge: 'Manager',
          },
        ],
        checkpointTitle: 'What shapes the route?',
        checkpointItems: [
          {
            value: 'Traffic',
            label: 'Audience or traffic size',
            note: 'Useful when the partner route depends on promotion quality and response.',
          },
          {
            value: 'Coverage',
            label: 'City or local reach',
            note: 'More important when the agent route depends on local player support.',
          },
          {
            value: 'Setup',
            label: 'Working model',
            note: 'It shapes the tools, follow-up, and the practical form of the agreement.',
          },
        ],
      },
      benefits: {
        id: 'benefits',
        eyebrow: 'Why This Route',
        title: 'Choose the route from the start: partner for audience growth, agent for local support.',
        description:
          'If you own traffic, start as a partner. If you support payments or players locally, start as an agent.',
        cards: [
          {
            eyebrow: 'Partner',
            title: 'A promotion route for real audience growth',
            description: 'Promote with a private code, launch materials, and performance follow-up that helps you improve the campaign.',
            bullets: ['Ready materials', 'Manager support', 'Campaign follow-up'],
            tags: ['Promo Code', 'Campaign'],
            metric: 'Audience',
          },
          {
            eyebrow: 'Agent',
            title: 'A local role with direct use',
            description: 'Start as an agent if your work is closer to payments, local trust, or player follow-up in the city.',
            bullets: ['Payment support', 'Player follow-up', 'Local operation'],
            tags: ['Local Ops', 'Trust'],
            metric: 'Local',
            media: getKuwaitMedia('partnership-benefits-support'),
          },
          {
            eyebrow: 'Support',
            title: 'Manager support that keeps the route realistic',
            description: 'Move from the first question into launch and then into the next operating step with one manager following the route.',
            bullets: ['Early direction', 'Ongoing review', 'Practical follow-up'],
            tags: ['Manager', 'Follow-up'],
            metric: 'Direct',
          },
        ],
      },
      steps: {
        id: 'steps',
        eyebrow: 'How It Starts',
        title: 'The setup is practical: define the role, review the fit, prepare the route, then operate.',
        description:
          'Send your role, review the coverage, receive the materials or operating frame, then launch and follow the response.',
        items: [
          {
            step: '01',
            title: 'Define the role',
            description: 'Are you closer to audience and campaigns, or to payments and local support?',
            note: 'This separates partner logic from agent logic early.',
          },
          {
            step: '02',
            title: 'Review the real coverage',
            description: 'Audience, city, and working capacity are reviewed so the route stays practical.',
            note: 'There is no single template that fits every case.',
          },
          {
            step: '03',
            title: 'Receive tools and direction',
            description: 'Partners get code, materials, and campaign support. Agents get a direct operating frame.',
            note: 'The goal is readiness, not theory.',
          },
          {
            step: '04',
            title: 'Launch and follow the response',
            description: 'After launch, the route becomes about what moved, what responded, and what should scale next.',
            note: 'Follow-up matters more than the first message.',
          },
        ],
      },
      paths: {
        id: 'paths',
        eyebrow: 'Paths',
        title: 'Choose the route that looks like your real work, not just the route that sounds attractive.',
        description:
          'If you bring audience, start as a partner. If you support payments or players locally, start as an agent.',
        footerNote:
          'Final terms depend on the city, the audience, and the real operating model after review.',
        cards: [
          {
            eyebrow: 'Partner Route',
            title: 'Partner',
            description: 'Built for traffic owners, communities, channels, and promoters who can move an audience into the offer cleanly.',
            value: 'Campaign',
            note: 'The focus stays on promotion, code, materials, and performance visibility.',
            bullets: [
              'A dedicated promo route or code',
              'Launch materials and campaign messaging',
              'Performance follow-up around response and movement',
              'Manager support for adjustment or scaling',
            ],
            media: getKuwaitMedia('partnership-partner-route'),
            ctaLabel: 'I Want the Partner Route',
            href: '#final-cta',
          },
          {
            eyebrow: 'Agent Route',
            title: 'Agent',
            description: 'Built for people who can support payments, local player follow-up, or city-level operating trust.',
            value: 'Local Ops',
            note: 'The focus stays on payment support, the local relationship, and player continuity.',
            bullets: [
              'A direct local operating role',
              'Payment or withdrawal support within the available setup',
              'Closer contact with the player when needed',
              'Clearer city scope and coverage',
            ],
            media: getKuwaitMedia('partnership-agent-route'),
            ctaLabel: 'I Want the Agent Route',
            href: '#final-cta',
          },
        ],
      },
      tools: {
        id: 'tools',
        eyebrow: 'Tools and Reporting',
        title: 'Get ready assets, live follow-up, and reporting that helps the next decision.',
        description:
          'See what is moving, what needs adjustment, and when the next step should be scale, support, or message change.',
        spotlightTitle: 'Tools that speed up the next move',
        spotlightBody:
          'Open the materials, watch the response, and make the next decision faster instead of guessing.',
        spotlightStats: [
          { value: 'Live', label: 'Continuous signal', note: 'A quicker read on campaign or route movement.' },
          { value: '2 View', label: 'Partner + agent', note: 'Each side sees the part that matters more.' },
          { value: 'Manager', label: 'Directed support', note: 'Follow-up stays closer to action.' },
        ],
        spotlightFeed: [
          'Track response and movement as it happens',
          'Follow campaigns or local operations faster',
          'Adjust or scale at the right time',
        ],
        media: getKuwaitMedia('partnership-tools-dashboard'),
        cards: [
          {
            eyebrow: 'Ready Assets',
            title: 'Marketing materials that reduce delay',
            description: 'Start with ready materials and direct launch messaging so the route can move faster.',
            bullets: ['Direct copy', 'Launch messaging', 'A faster start'],
            tags: ['Messaging', 'Launch'],
            metric: 'Ready',
          },
          {
            eyebrow: 'Tracking',
            title: 'A better view of movement',
            description: 'Read campaign response or local operating flow quickly, then act on what the numbers are telling you.',
            bullets: ['Performance', 'Response', 'Faster adjustment'],
            tags: ['Tracking', 'Response'],
            metric: 'Clear',
          },
          {
            eyebrow: 'Support',
            title: 'A manager who keeps the route grounded',
            description: 'Work with a manager who knows when to guide, when to review, and when to open the next step.',
            bullets: ['Follow-up', 'Direction', 'Operational review'],
            tags: ['Manager', 'Ops'],
            metric: 'Direct',
          },
        ],
      },
      finalCta: {
        id: 'final-cta',
        eyebrow: 'Start the Contact',
        title: 'If you have an audience or a real local role, this is the right entry point.',
        description:
          'Send a short note about your audience, city, or operating setup, and the next step can move into the right partner or agent route quickly.',
        primaryCta: {
          label: 'Review the FAQ First',
          href: '/faq#partnership',
        },
        secondaryCta: {
          label: 'Back to Top',
          href: '/partnership#top',
        },
        media: getKuwaitMedia('partnership-final-cta'),
        notes: ['Partner', 'Agent', 'Manager Follow-up'],
        channels: [
          {
            ...contactChannels.telegram,
            label: 'Contact on Telegram',
          },
          {
            ...contactChannels.whatsapp,
            label: 'Contact on WhatsApp',
          },
        ],
        helperText:
          'Before any route is finalized, the city, audience, working model, and support need are reviewed so the fit stays practical from the start.',
      },
    },
    faq: {
      seo: {
        title: 'MELBET Kuwait | FAQ',
        description: 'Short Kuwait FAQ answers for players, partners, and agents inside one dedicated page.',
      },
      intro: {
        id: 'top',
        eyebrow: 'Kuwait FAQ',
        title: 'Quick answers before you start as a player or reach out as a partner.',
        description:
          'Open the player answers if you want sports, games, or offers. Open the partnership answers if you want the partner or agent route.',
        primaryCta: {
          label: 'Player FAQ',
          href: '#players',
        },
        secondaryCta: {
          label: 'Partnership FAQ',
          href: '#partnership',
        },
      },
      player: {
        id: 'players',
        eyebrow: 'Player FAQ',
        title: 'Player Questions',
        description: 'If you want a fast start, direct game access, rewards, or support, the short answers are here.',
        items: [
          {
            question: 'How do I start quickly on the Kuwait page?',
            answer: 'Start from sports, games, or offers through the main buttons at the top or the final start button.',
          },
          {
            question: 'Should I start from football?',
            answer: 'Yes. Football is the fastest entry if match night is the priority.',
          },
          {
            question: 'What games can I open here?',
            answer: 'Live casino, slots, and faster game sessions that open quickly on mobile.',
          },
          {
            question: 'Are offers or gifts part of the experience?',
            answer: 'Yes. The offers section includes a welcome route and reward-style support tied to the active campaign.',
          },
          {
            question: 'Does it work well on mobile?',
            answer: 'Yes. Kuwait is mobile first, with tighter spacing, direct cards, and no horizontal overflow.',
          },
          {
            question: 'Where should I go if I need support?',
            answer: 'Use the support button below, or open the partnership page if you need a direct contact.',
          },
        ],
      },
      partnership: {
        id: 'partnership',
        eyebrow: 'Partnership FAQ',
        title: 'Partnership and Agent Questions',
        description: 'Start here if you want the route difference, the support model, or the fastest way to make contact.',
        items: [
          {
            question: 'Who can apply as a partner or agent?',
            answer: 'Anyone with a real audience, traffic source, local coverage, or payment-support role can be reviewed.',
          },
          {
            question: 'What is the difference between a partner and an agent?',
            answer: 'Partners focus on audience and campaigns. Agents focus more on payments, local trust, and player-facing operations.',
          },
          {
            question: 'Do both routes get the same tools?',
            answer: 'Both routes get support, but the tool mix changes by route: promotional assets for partners and operating guidance for agents.',
          },
          {
            question: 'Are the terms the same for everyone?',
            answer: 'No. The final route depends on the city, audience, working model, and the practical operating fit.',
          },
          {
            question: 'What is the fastest way to start?',
            answer: 'Review the partner and agent paths, then use Telegram or WhatsApp with a short description of your situation.',
          },
        ],
      },
      support: {
        id: 'support',
        eyebrow: 'Support',
        title: 'Need the next move after the FAQ?',
        description:
          'Go back home for sports, games, or offers, or open the partnership page if you want to speak with the manager about the right route.',
        primaryCta: {
          label: 'Back to Home',
          href: '/',
        },
        secondaryCta: {
          label: 'Open Partnership',
          href: '/partnership#final-cta',
        },
        media: getKuwaitMedia('faq-support'),
        notes: ['Player', 'Partner', 'Agent'],
      },
    },
  },
};

export const kuwaitContent = kuwaitContentByLocale.ar;

export function getKuwaitContent(locale: Locale) {
  return kuwaitContentByLocale[locale];
}
