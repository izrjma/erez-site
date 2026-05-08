import { Badge } from '@/components/ui/Badge';

interface ProblemProps {
  dict: {
    eyebrow: string;
    heading: string;
    body: string;
    fixLabel: string;
    fixHeading: string;
    fixBody: string;
    unknownLabel: string;
    knownLabel: string;
    guestName: string;
    guestMeta: string;
    guestNote: string;
  };
}

export function Problem({ dict }: ProblemProps) {
  const bodyLines = dict.body.split('\n\n');

  return (
    <section className="relative py-16 sm:py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Badge className="mb-12">{dict.eyebrow}</Badge>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* ── Problem card ──────────────────────────── */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-10 lg:p-12 flex flex-col gap-6 sm:gap-8">
            {/* Accent line */}
            <div className="w-6 h-px bg-rose-400/40" />

            <h2 className="text-[1.65rem] md:text-3xl font-semibold text-white leading-snug tracking-tight">
              {dict.heading}
            </h2>

            <div className="flex flex-col gap-4">
              {bodyLines.map((line, i) => (
                <p key={i} className="text-[0.95rem] text-white/50 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Visual: stacked anonymous guest cards */}
            <div className="mt-auto pt-4">
              <div className="flex flex-col gap-2">
                {['—', '—', '—'].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-white/[0.025] border border-white/[0.05]"
                    style={{ opacity: 0.35 + i * 0.18 }}
                  >
                    {/* Anonymous avatar */}
                    <div className="size-8 rounded-full bg-white/[0.07] border border-white/[0.06] flex-shrink-0" />
                    {/* Redacted lines */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="h-2 rounded-full bg-white/[0.07] w-24" />
                      <div className="h-1.5 rounded-full bg-white/[0.04] w-36" />
                    </div>
                    {/* No tier */}
                    <div className="h-4 w-12 rounded-full bg-white/[0.04] border border-white/[0.05]" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/28 uppercase tracking-[0.15em] mt-4">
                {dict.unknownLabel}
              </p>
            </div>
          </div>

          {/* ── Solution card ─────────────────────────── */}
          <div className="rounded-2xl border border-violet-500/[0.18] bg-white/[0.015] p-6 sm:p-10 lg:p-12 flex flex-col gap-6 sm:gap-8 relative overflow-hidden">
            {/* Subtle corner glow */}
            <div
              className="absolute -top-12 -right-12 size-40 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'rgba(124,58,237,0.06)' }}
              aria-hidden
            />

            {/* Accent line */}
            <div
              className="w-6 h-px"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
            />

            <div>
              <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-violet-400/70">
                {dict.fixLabel}
              </span>
            </div>

            <h2 className="text-[1.65rem] md:text-3xl font-semibold text-white leading-snug tracking-tight">
              {dict.fixHeading}
            </h2>

            <p className="text-[0.95rem] text-white/50 leading-relaxed">{dict.fixBody}</p>

            {/* Visual: rich recognised guest card */}
            <div className="mt-auto pt-4">
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
                {/* Card header */}
                <div className="flex items-center gap-3.5 px-4 py-3.5 border-b border-white/[0.05]">
                  <div
                    className="size-9 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-black"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                  >
                    AM
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-white">{dict.guestName}</span>
                      <span className="text-[9.5px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full text-amber-400 bg-amber-400/10 border border-amber-400/20">
                        VIP
                      </span>
                    </div>
                    <div className="text-[11px] text-white/40 mt-0.5 truncate">{dict.guestMeta}</div>
                  </div>
                  <div className="size-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0">
                    <div className="size-2 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Card body: detail fields */}
                <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
                  {[
                    { label: 'Last visit', value: '6 days ago' },
                    { label: 'Total visits', value: '47' },
                  ].map((f) => (
                    <div key={f.label} className="bg-[#090909] px-4 py-2.5">
                      <div className="text-[9.5px] text-white/30 uppercase tracking-widest mb-0.5">{f.label}</div>
                      <div className="text-[12px] font-medium text-white/70">{f.value}</div>
                    </div>
                  ))}
                </div>

                {/* Note row */}
                <div className="px-4 py-3 bg-[#090909] border-t border-white/[0.04] flex items-center gap-2">
                  <span className="text-violet-400/50 text-[11px]">★</span>
                  <span className="text-[11px] text-white/40">{dict.guestNote}</span>
                </div>
              </div>

              <p className="text-[11px] text-white/28 uppercase tracking-[0.15em] mt-4">
                {dict.knownLabel}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
