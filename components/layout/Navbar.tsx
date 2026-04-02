'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import type { Lang } from '@/lib/utils';

const LANGS: Lang[] = ['en', 'de', 'es'];

interface NavbarProps {
  lang: Lang;
  dict: {
    forClubs: string;
    howItWorks: string;
    whyErez: string;
    contact: string;
    requestAccess: string;
  };
}

export function Navbar({ lang, dict }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Derive path without the language prefix to allow lang switching
  const pathWithoutLang = pathname.replace(/^\/(en|de|es)/, '') || '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const navLinks = [
    { label: dict.forClubs,   href: `/${lang}/for-venues` },
    { label: dict.howItWorks, href: `/${lang}/how-it-works` },
    { label: dict.whyErez,    href: `/${lang}/why-erez` },
    { label: dict.contact,    href: `/${lang}/contact` },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/[0.06] bg-[#080808]/90 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="erez"
              width={180}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-sm transition-colors duration-150',
                  pathname === l.href
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/80',
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language switcher */}
            <div className="flex items-center gap-1">
              {LANGS.map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="text-white/15 text-xs mx-1">/</span>}
                  <Link
                    href={`/${l}${pathWithoutLang === '/' ? '' : pathWithoutLang}`}
                    className={cn(
                      'text-[11px] font-medium uppercase tracking-wider transition-colors',
                      l === lang ? 'text-white' : 'text-white/25 hover:text-white/60',
                    )}
                  >
                    {l}
                  </Link>
                </span>
              ))}
            </div>

            <Button
              href={`/${lang}/contact`}
              variant="primary"
              size="sm"
            >
              {dict.requestAccess}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-3 -mr-1 text-white/50 hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300 origin-center',
                  open ? 'rotate-45 translate-y-[7px]' : '',
                )}
              />
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300',
                  open ? 'opacity-0' : '',
                )}
              />
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300 origin-center',
                  open ? '-rotate-45 -translate-y-[7px]' : '',
                )}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300',
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
        style={{ background: '#080808' }}
      >
        <div className="h-16" /> {/* Spacer for header */}
        <div className="flex-1 flex flex-col px-6 py-10 gap-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-2xl sm:text-3xl font-semibold tracking-tight transition-colors',
                  pathname === l.href ? 'text-white' : 'text-white/40',
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-2">
              {LANGS.map((l) => (
                <Link
                  key={l}
                  href={`/${l}${pathWithoutLang === '/' ? '' : pathWithoutLang}`}
                  className={cn(
                    'text-sm font-medium uppercase tracking-wider px-3.5 py-2 rounded-full border transition-colors',
                    l === lang
                      ? 'border-white/20 text-white bg-white/[0.06]'
                      : 'border-white/[0.06] text-white/30 hover:text-white/60',
                  )}
                >
                  {l}
                </Link>
              ))}
            </div>

            <Button href={`/${lang}/contact`} variant="primary" size="lg" className="w-full">
              {dict.requestAccess}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
