import Link from 'next/link';

import type { LinkAction, FooterColumn } from '@/content/markets/types';
import type { Locale } from '@/lib/i18n';

import { KuwaitLogo } from '@/components/brand/KuwaitLogo';

type FooterProps = {
  brand: {
    name: string;
    tag: string;
  };
  description: string;
  columns: FooterColumn[];
  note: string;
  locale: Locale;
  actionLinks: LinkAction[];
};

function isExternalLink(link: LinkAction) {
  return link.external === true || link.href.startsWith('http') || link.href.startsWith('mailto:');
}

export function Footer({ brand, description, columns, note, locale, actionLinks }: FooterProps) {
  return (
    <footer className="footer-shell">
      <div className="shell-container">
        <div className="footer-panel" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <div className="footer-grid">
            <div className="footer-brand">
              <Link aria-label={brand.name} className="footer-brand__logo" href="/">
                <KuwaitLogo decorative size="footer" />
              </Link>
              <p className="footer-brand__tag">{brand.tag}</p>
              <p className="footer-brand__description">{description}</p>
            </div>

            {columns.map((column) => (
              <div className="footer-column" key={column.title}>
                <p className="footer-column__title">{column.title}</p>
                <div className="footer-column__links">
                  {column.links.map((link) => (
                    <Link className="footer-link" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-note">{note}</p>
            <div className="footer-actions">
              {actionLinks.map((link) =>
                isExternalLink(link) ? (
                  <a
                    className="nav-pill nav-pill--secondary"
                    href={link.href}
                    key={`${link.href}-${link.label}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link className="nav-pill nav-pill--secondary" href={link.href} key={`${link.href}-${link.label}`}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
