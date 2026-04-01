import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface Step {
  number: string;
  title: string;
  body: string;
}

function FlowSection({
  label,
  heading,
  steps,
  accent,
}: {
  label: string;
  heading: string;
  steps: Step[];
  accent: string;
}) {
  return (
    <div className="flex flex-col gap-7 sm:gap-10">
      <div className="flex flex-col gap-3">
        <span
          className="text-[11px] uppercase tracking-widest font-medium"
          style={{ color: accent }}
        >
          {label}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-snug">
          {heading}
        </h2>
      </div>

      <ol className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <li key={step.number} className="relative flex gap-4 sm:gap-6 pb-7 sm:pb-10 last:pb-0">
            {i < steps.length - 1 && (
              <div
                className="absolute left-[19px] top-10 w-px h-full"
                style={{ background: `linear-gradient(to bottom, ${accent}30, transparent)` }}
                aria-hidden
              />
            )}
            <div
              className="relative flex-shrink-0 size-10 rounded-full border flex items-center justify-center text-xs font-bold"
              style={{
                borderColor: `${accent}40`,
                background: `${accent}0a`,
                color: accent,
              }}
            >
              {step.number}
            </div>
            <div className="pt-1.5">
              <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);
  const d = dict.howItWorksPage;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 60% 40%, rgba(255,184,0,0.05) 0%, transparent 60%)',
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
          </div>
        </div>
      </section>

      {/* ── Two flows ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-36 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32">
            <FlowSection
              label={d.guestFlow.label}
              heading={d.guestFlow.heading}
              steps={d.guestFlow.steps}
              accent="#ffb800"
            />
            <FlowSection
              label={d.staffFlow.label}
              heading={d.staffFlow.heading}
              steps={d.staffFlow.steps}
              accent="#60a5fa"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {dict.cta.heading}
          </h2>
          <p className="text-white/40">{dict.cta.sub}</p>
          <Button href={`/${lang}/contact`} variant="primary" size="lg">
            {dict.nav.requestAccess}
          </Button>
        </div>
      </section>
    </>
  );
}
