import Image from 'next/image';
import Link from 'next/link';
import type { Lang } from '@/lib/utils';

interface FooterProps {
  lang: Lang;
  dict: {
    tagline: string;
    copyright: string;
    colProduct: string;
    colCompany: string;
    links: {
      forClubs: string;
      howItWorks: string;
      whyErez: string;
      contact: string;
      privacy: string;
      privacyUrl: string;
      terms: string;
      imprint: string;
    };
  };
}

export function Footer({ lang, dict }: FooterProps) {
  const productLinks = [
    { label: dict.links.forClubs,   href: `/${lang}/for-venues` },
    { label: dict.links.howItWorks, href: `/${lang}/how-it-works` },
    { label: dict.links.whyErez,    href: `/${lang}/why-erez` },
  ];

  const companyLinks: { label: string; href: string; external?: boolean }[] = [
    { label: dict.links.contact, href: `/${lang}/contact` },
    { label: dict.links.privacy, href: dict.links.privacyUrl, external: true },
    { label: dict.links.terms,   href: `/${lang}/terms` },
    { label: dict.links.imprint, href: `/${lang}/imprint` },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 flex flex-col gap-4">
          <Link href={`/${lang}`} className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="erez"
              width={180}
              height={56}
              className="h-14 w-auto"
            />
          </Link>
          <p className="text-sm text-white/30 leading-relaxed max-w-xs">
            {dict.tagline}
          </p>
        </div>

        {/* Product links */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] uppercase tracking-widest text-white/25 font-medium">
            {dict.colProduct}
          </span>
          <nav className="flex flex-col gap-3">
            {productLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Company links */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] uppercase tracking-widest text-white/25 font-medium">
            {dict.colCompany}
          </span>
          <nav className="flex flex-col gap-3">
            {companyLinks.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-white/20">{dict.copyright}</span>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
          <span className="text-xs text-white/20">All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
