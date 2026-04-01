import { Button } from '@/components/ui/Button';
import { DashboardMockup } from '@/components/ui/Mockup';
import type { Lang } from '@/lib/utils';

interface HeroProps {
  lang: Lang;
  dict: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    sub: string;
    proof: string[];
    cta1: string;
    cta2: string;
  };
}

export function Hero({ lang, dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow — top center, very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 65% 0%, rgba(124,58,237,0.05) 0%, transparent 55%)',
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14 sm:pt-28 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-10 lg:gap-10 items-center">

          {/* ── Left: copy ──────────────────────────────── */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-9">

            {/* Editorial eyebrow — line + label, not a pill */}
            <div className="flex items-center gap-3">
              <div
                className="h-px w-6 flex-shrink-0"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
              />
              <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-white/40">
                {dict.eyebrow}
              </span>
            </div>

            {/* Headline — display scale */}
            <h1
              className="font-semibold tracking-tight leading-[1.03] text-white"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
            >
              {dict.headline1}
              <br />
              <span className="gradient-text">{dict.headline2}</span>
            </h1>

            {/* Sub */}
            <p className="text-[1.05rem] leading-[1.75] text-white/40 max-w-[460px]">
              {dict.sub}
            </p>

            {/* Proof row */}
            <div className="flex flex-wrap gap-x-7 gap-y-2.5">
              {dict.proof.map((item) => (
                <span key={item} className="flex items-center gap-2.5 text-[12.5px] text-white/30">
                  <span
                    className="size-1 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  />
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              <Button href={`/${lang}/contact`} variant="primary" size="lg">
                {dict.cta1}
              </Button>
              <Button href={`/${lang}/how-it-works`} variant="ghost" size="lg">
                {dict.cta2}
                <svg
                  className="size-4 ml-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* ── Right: mockup ───────────────────────────── */}
          <div className="relative mt-4 lg:mt-0 overflow-hidden">
            {/* Glow layer behind the card */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none blur-2xl"
              aria-hidden
              style={{ background: 'rgba(124,58,237,0.05)' }}
            />
            {/* Slight upward offset on desktop to optically center within viewport */}
            <div className="relative lg:-mt-6">
              <DashboardMockup />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        aria-hidden
        style={{
          background: 'linear-gradient(to bottom, transparent, #080808)',
        }}
      />
    </section>
  );
}
