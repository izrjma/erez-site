import { Button } from '@/components/ui/Button';
import type { Lang } from '@/lib/utils';

interface Stat { value: string; label: string; }

interface CTAProps {
  lang: Lang;
  dict: {
    eyebrow: string;
    heading: string;
    sub: string;
    qualifier: string;
    cta: string;
    note: string;
    whoTitle: string;
    who: string[];
    stats: Stat[];
  };
}

export function CTA({ lang, dict }: CTAProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-36 overflow-hidden">
      {/* Ambient glow from below */}
      <div
        className="absolute bottom-0 inset-x-0 h-[400px] pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">

          {/* ── Left: headline + CTA ──────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Editorial eyebrow */}
            <div className="flex items-center gap-3">
              <div
                className="h-px w-6 flex-shrink-0"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
              />
              <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-violet-400/65">
                {dict.eyebrow}
              </span>
            </div>

            <h2
              className="font-semibold tracking-tight leading-[1.05] text-white"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}
            >
              {dict.heading}
            </h2>

            <div className="flex flex-col gap-3">
              <p className="text-[1rem] text-white/40 leading-relaxed">{dict.sub}</p>
              <p className="text-[1rem] text-white/55 leading-relaxed font-medium">{dict.qualifier}</p>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <div>
                <Button href={`/${lang}/contact`} variant="primary" size="lg">
                  {dict.cta}
                </Button>
              </div>
              <p className="text-[12px] text-white/22">{dict.note}</p>
            </div>
          </div>

          {/* ── Right: proof ──────────────────────────── */}
          <div className="flex flex-col gap-10 lg:pt-2">

            {/* Who we work with */}
            <div className="flex flex-col gap-5">
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/25 font-medium">
                {dict.whoTitle}
              </span>
              <ul className="flex flex-col gap-3.5">
                {dict.who.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <span
                      className="size-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                    />
                    <span className="text-[0.95rem] text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.05]" />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {dict.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <div
                    className="text-xl font-semibold tracking-tight"
                    style={{ color: '#a855f7' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] text-white/28 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
