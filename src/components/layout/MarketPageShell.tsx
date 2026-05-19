import type { ReactNode } from 'react';

import { MarketBackdrop } from '@/components/layout/MarketBackdrop';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import type { MarketContent } from '@/content/markets/types';

type PageTone = 'home' | 'partnership' | 'faq';

type MarketPageShellProps = {
  content: MarketContent;
  page: PageTone;
  children: ReactNode;
};

function getContextLinks(content: MarketContent, page: PageTone) {
  if (page === 'partnership') {
    return content.navigation.partnership;
  }

  if (page === 'faq') {
    return content.navigation.faq;
  }

  return content.navigation.home;
}

function getPathname(page: PageTone) {
  if (page === 'partnership') {
    return '/partnership';
  }

  if (page === 'faq') {
    return '/faq';
  }

  return '/';
}

export function MarketPageShell({ content, page, children }: MarketPageShellProps) {
  return (
    <div className={`market-shell market-shell--${page}`} dir={content.direction}>
      <MarketBackdrop page={page} />
      <div className="market-shell__content">
        <Header
          brand={content.brand}
          contextLinks={getContextLinks(content, page)}
          cta={content.navigation.headerCtas[page]}
          globalLinks={content.navigation.global}
          locale={content.locale}
          pathname={getPathname(page)}
          ui={content.ui}
        />
        <main className="market-main">{children}</main>
        <Footer
          actionLinks={content.footer.actionLinks}
          brand={content.brand}
          columns={content.footer.columns}
          description={content.footer.description}
          locale={content.locale}
          note={content.footer.note}
        />
      </div>
    </div>
  );
}
