'use client';

import Link from 'next/link';
import { useState } from 'react';

import type { LinkAction, NavLink } from '@/content/markets/types';
import type { Locale } from '@/lib/i18n';

import { KuwaitLogo } from '@/components/brand/KuwaitLogo';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { joinClasses } from '@/lib/classes';

type HeaderProps = {
  brand: {
    name: string;
    tag: string;
  };
  globalLinks: NavLink[];
  contextLinks: NavLink[];
  locale: Locale;
  pathname: string;
  ui: {
    languageLabel: string;
  };
  cta: LinkAction;
};

const globalNavOrder: Record<string, number> = {
  '/': 0,
  '/partnership': 1,
  '/faq': 2,
};

function isRouteActive(pathname: string, href: string) {
  const route = href.split('#')[0] || '/';

  return route === pathname;
}

function isExternalLink(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:');
}

export function Header({ brand, globalLinks, contextLinks, locale, pathname, ui, cta }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const orderedGlobalLinks = [...globalLinks].sort(
    (left, right) => (globalNavOrder[left.href] ?? Number.MAX_SAFE_INTEGER) - (globalNavOrder[right.href] ?? Number.MAX_SAFE_INTEGER),
  );

  return (
    <header className="header-shell">
      <div className="shell-container">
        <div className="header-panel">
          <div className="header-main" dir={direction}>
            <Link aria-label={brand.name} className="header-brand" href="/">
              <KuwaitLogo decorative size="nav" />
            </Link>

            <nav aria-label="Primary navigation" className="header-nav header-nav--desktop">
              {orderedGlobalLinks.map((link) => (
                <Link
                  className="nav-pill nav-pill--primary"
                  data-active={isRouteActive(pathname, link.href)}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="header-actions">
              <LanguageSwitcher label={ui.languageLabel} locale={locale} />
              <a
                className="btn-base btn-primary btn-md header-cta"
                href={cta.href}
                rel={cta.external || isExternalLink(cta.href) ? 'noreferrer' : undefined}
                target={cta.external || isExternalLink(cta.href) ? '_blank' : undefined}
              >
                <span className="btn-base__label">{cta.label}</span>
              </a>
            </div>

            <button
              aria-expanded={menuOpen}
              aria-label={locale === 'ar' ? 'فتح القائمة' : 'Open menu'}
              className={joinClasses('header-toggle', menuOpen && 'header-toggle--open')}
              onClick={() => {
                setMenuOpen((current) => !current);
              }}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <nav aria-label="Section navigation" className="header-context header-nav--desktop" dir={direction}>
            {contextLinks.map((link) => (
              <Link className="nav-pill nav-pill--secondary" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          {menuOpen ? (
            <div className="header-mobile" dir={direction}>
              <div className="header-mobile__group">
                {orderedGlobalLinks.map((link) => (
                  <Link
                    className="header-mobile__link"
                    data-active={isRouteActive(pathname, link.href)}
                    href={link.href}
                    key={link.href}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="header-mobile__divider" />

              <div className="header-mobile__group">
                {contextLinks.map((link) => (
                  <Link
                    className="header-mobile__link header-mobile__link--soft"
                    href={link.href}
                    key={link.href}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="header-mobile__footer">
                <a
                  className="btn-base btn-primary btn-md"
                  href={cta.href}
                  rel={cta.external || isExternalLink(cta.href) ? 'noreferrer' : undefined}
                  target={cta.external || isExternalLink(cta.href) ? '_blank' : undefined}
                >
                  <span className="btn-base__label">{cta.label}</span>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
