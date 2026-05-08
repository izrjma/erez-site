import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/contact/ContactForm';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);
  const d = dict.contactPage;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 30% 20%, rgba(255,184,0,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-6 max-w-xl">
            <Badge>{d.hero.eyebrow}</Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
              {d.hero.headline}
            </h1>
            <p className="text-lg text-white/55 leading-relaxed">{d.hero.sub}</p>
          </div>
        </div>
      </section>

      {/* ── Form + aside ──────────────────────────────────── */}
      <section className="pb-32 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm dict={d.form} />
            </div>

            {/* Aside */}
            <aside className="flex flex-col gap-8 pt-1 border-t border-white/[0.06] lg:border-t-0 pt-8 lg:pt-1">
              {/* Who it's for */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[11px] uppercase tracking-widest text-white/35 font-medium">
                  {d.aside.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {d.aside.items.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #ffb800, #ff6b35)' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* Promise */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[11px] uppercase tracking-widest text-white/35 font-medium">
                    Invite-only
                  </span>
                </div>
                <p className="text-[13px] sm:text-xs text-white/40 leading-relaxed">
                  {d.form.note}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
