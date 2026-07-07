import { Badge } from '@/components/ui/Badge';

/* ── Feature icons ────────────────────────────────────── */
const icons: Record<number, React.ReactNode> = {
  0: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
};

interface FeatureItem { title: string; body: string; }
interface Tiers { vip: string; regular: string; }
interface FeaturesProps {
  dict: { eyebrow: string; heading: string; sub?: string; tiers: Tiers; items: FeatureItem[] };
}

/* ── Single feature card ─────────────────────────────── */
function FeatureCard({
  item,
  index,
  wide = false,
  tiers,
}: {
  item: FeatureItem;
  index: number;
  wide?: boolean;
  tiers?: Tiers;
}) {
  return (
    <div
      className={`group rounded-2xl border border-white/[0.07] bg-white/[0.018] flex flex-col gap-5 hover:border-white/[0.13] hover:bg-white/[0.03] transition-all duration-300 ${
        wide ? 'p-6 sm:p-10 lg:flex-row lg:items-start lg:gap-8' : 'p-5 sm:p-8'
      }`}
    >
      {/* Icon */}
      <div
        className="size-10 rounded-xl flex-shrink-0 flex items-center justify-center text-violet-400/60 group-hover:text-violet-400 transition-colors duration-300"
        style={{ background: 'rgba(124,58,237,0.07)' }}
      >
        {icons[index]}
      </div>

      {/* Text */}
      <div className={`flex flex-col gap-2 ${wide ? 'lg:max-w-sm' : ''}`}>
        <h3 className="text-[0.95rem] font-semibold text-white tracking-tight">
          {item.title}
        </h3>
        <p className="text-[0.875rem] text-white/45 leading-relaxed">{item.body}</p>
      </div>

      {/* Wide-card visual: guest tier mockup on opening card */}
      {wide && index === 0 && (
        <div className="lg:ml-auto flex-shrink-0 flex flex-col gap-2 self-center">
          <div className="flex flex-col gap-2 min-w-[200px]">
            {[
              { name: 'Alex M.',  tier: tiers?.vip ?? 'VIP',         visits: '47', color: 'from-amber-400 to-yellow-500 text-black' },
              { name: 'Sarah K.', tier: tiers?.regular ?? 'Regular', visits: '23', color: 'from-sky-400 to-blue-500 text-white' },
            ].map((g) => (
              <div key={g.name} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <div className={`size-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold bg-gradient-to-br ${g.color}`}>
                  {g.name[0]}
                </div>
                <div>
                  <div className="text-[11.5px] font-medium text-white leading-none">{g.name}</div>
                  <div className="text-[10px] text-white/35 mt-0.5">{g.visits} visits · {g.tier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wide-card visual: reviews mockup on closing card */}
      {wide && index === 5 && (
        <div className="lg:ml-auto flex-shrink-0 flex flex-col gap-2 self-center">
          <div className="flex flex-col gap-2 min-w-[220px]">
            {[
              { name: 'Marco F.', quote: 'They knew my drink before I sat down.' },
              { name: 'Lena B.',  quote: 'Felt like a regular on visit two.' },
            ].map((r) => (
              <div key={r.name} className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <div className="flex items-center gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="size-3 text-amber-400">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div className="text-[11px] text-white/60 leading-snug italic">&ldquo;{r.quote}&rdquo;</div>
                <div className="text-[10px] text-white/35 mt-1">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Features({ dict }: FeaturesProps) {
  const [first, ...rest] = dict.items;
  const last = rest.pop()!;

  return (
    <section className="relative py-16 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <Badge>{dict.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-white leading-[1.08] max-w-xl">
            {dict.heading}
          </h2>
          {dict.sub && (
            <p className="text-[0.95rem] text-white/45 max-w-md">{dict.sub}</p>
          )}
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-4">

          {/* Row 1: featured full-width card */}
          <FeatureCard item={first} index={0} wide tiers={dict.tiers} />

          {/* Row 2: 2-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.slice(0, 2).map((item, i) => (
              <FeatureCard key={item.title} item={item} index={i + 1} />
            ))}
          </div>

          {/* Row 3: 2-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.slice(2, 4).map((item, i) => (
              <FeatureCard key={item.title} item={item} index={i + 3} />
            ))}
          </div>

          {/* Row 4: closing full-width card */}
          <FeatureCard item={last} index={5} wide />

        </div>
      </div>
    </section>
  );
}
