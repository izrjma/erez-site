import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default async function WhyErezPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);
  const d = dict.whyErez;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,184,0,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14 sm:pt-32 sm:pb-20 w-full">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
            <Badge>{d.hero.eyebrow}</Badge>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] text-white">
              {d.hero.headline1}
              <br />
              <span className="gradient-text">{d.hero.headline2}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed">
              {d.hero.sub}
            </p>
          </div>
        </div>
      </section>

      {/* ── Three contrasts ───────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-36 bg-[#0a0a0a] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(d.points as { heading: string; body: string }[]).map((point, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-10 flex flex-col gap-5 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Cross mark — the "Not" */}
                <div className="size-8 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <svg className="size-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6"  y1="6" x2="18" y2="18" />
                  </svg>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                    {point.heading}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto ─────────────────────────────────────── */}
      <section className="py-16 sm:py-28 lg:py-44 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,184,0,0.04) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center gap-12">
          {/* Opening quote mark */}
          <div
            className="text-5xl sm:text-8xl font-serif leading-none select-none"
            style={{ color: 'rgba(255,184,0,0.15)' }}
            aria-hidden
          >
            &ldquo;
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/70 leading-relaxed tracking-tight -mt-4 sm:-mt-8">
            {d.manifesto}
          </blockquote>

          <Button href={`/${lang}/contact`} variant="primary" size="lg" className="mt-4">
            {dict.nav.requestAccess}
          </Button>
        </div>
      </section>
    </>
  );
}
