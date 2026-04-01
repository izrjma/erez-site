import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DashboardMockup, PhoneMockup, StatsMockup } from '@/components/ui/Mockup';

const sectionMockups = [DashboardMockup, PhoneMockup, StatsMockup];

export default async function ForClubsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);
  const d = dict.forClubs;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(255,184,0,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14 sm:pt-32 sm:pb-20 w-full">
          <div className="max-w-3xl flex flex-col gap-8">
            <Badge>{d.hero.eyebrow}</Badge>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.04] text-white">
              {d.hero.headline1}
              <br />
              <span className="gradient-text">{d.hero.headline2}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/40 max-w-lg leading-relaxed">
              {d.hero.sub}
            </p>
            <div>
              <Button href={`/${lang}/contact`} variant="primary" size="lg">
                {dict.nav.requestAccess}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sections ──────────────────────────────────────── */}
      {(d.sections as { label: string; heading: string; body: string }[]).map((section, i) => {
        const MockupComponent = sectionMockups[i];
        const isEven = i % 2 === 0;

        return (
          <section
            key={section.label}
            className={`py-16 sm:py-24 lg:py-36 ${i % 2 === 1 ? 'bg-[#0a0a0a]' : ''} relative`}
          >
            {i % 2 === 1 && (
              <>
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
              </>
            )}

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Text */}
                <div className={`flex flex-col gap-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <span className="text-[11px] uppercase tracking-widest text-amber-400/70 font-medium">
                    {section.label}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-snug">
                    {section.heading}
                  </h2>
                  <p className="text-base text-white/40 leading-relaxed max-w-md">
                    {section.body}
                  </p>
                </div>

                {/* Mockup */}
                <div className={`overflow-hidden ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <MockupComponent />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-28 lg:py-40 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(255,184,0,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-xl">
            {d.cta.heading}
          </h2>
          <p className="text-lg text-white/40">{d.cta.sub}</p>
          <Button href={`/${lang}/contact`} variant="primary" size="lg">
            {dict.nav.requestAccess}
          </Button>
        </div>
      </section>
    </>
  );
}
