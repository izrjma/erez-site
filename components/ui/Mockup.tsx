/* ─────────────────────────────────────────────────────────
   CSS-only UI mockup blocks — no images, no external assets
   ───────────────────────────────────────────────────────── */

/* ── Shared window chrome ─────────────────────────────── */
function WindowChrome({ title, live = false }: { title: string; live?: boolean }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-[#0c0c0c]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.07]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.07]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.07]" />
        <span className="ml-3 text-[11px] text-white/20 tracking-wide select-none">{title}</span>
      </div>
      {live && (
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-white/25 tracking-wide">live</span>
        </div>
      )}
    </div>
  );
}

/* ── Tier badge ───────────────────────────────────────── */
function TierBadge({ tier, color }: { tier: string; color: 'gold' | 'sky' | 'muted' }) {
  const styles = {
    gold:  'text-amber-400 bg-amber-400/10 border border-amber-400/20',
    sky:   'text-sky-400   bg-sky-400/10   border border-sky-400/15',
    muted: 'text-white/30  bg-white/[0.04] border border-white/[0.07]',
  };
  return (
    <span className={`text-[9.5px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${styles[color]}`}>
      {tier}
    </span>
  );
}

/* ── Avatar ───────────────────────────────────────────── */
function Avatar({
  initials,
  bg = 'bg-white/[0.08] text-white/40',
}: {
  initials: string;
  bg?: string;
}) {
  return (
    <div className={`size-9 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold ${bg}`}>
      {initials}
    </div>
  );
}

/* ── Stat pill ────────────────────────────────────────── */
function StatPill({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
      <div className="text-[9.5px] text-white/25 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-[15px] font-semibold text-white leading-none">{value}</div>
      <div className="text-[9.5px] text-white/20 mt-0.5">{sub}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   DashboardMockup — staff check-in view
   ═══════════════════════════════════════════════════════ */
export function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#090909] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] max-w-full">
      <WindowChrome title="erez  ·  Dashboard" />

      {/* KPI cards — matches real product */}
      <div className="grid grid-cols-4 gap-2 px-4 py-3.5 border-b border-white/[0.05] bg-[#0b0b0b]">
        {[
          { label: "Today's Visits", value: '38',  color: 'text-violet-400' },
          { label: 'Members',        value: '520', color: 'text-violet-300' },
          { label: 'Repeat Guests',  value: '67%', color: 'text-cyan-400' },
          { label: 'Active Benefits',value: '7',   color: 'text-green-400' },
        ].map((k) => (
          <div key={k.label} className="px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-center">
            <div className={`text-[14px] font-bold leading-none ${k.color}`}>{k.value}</div>
            <div className="text-[8px] text-white/25 uppercase tracking-widest mt-1.5">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-px bg-white/[0.04] border-b border-white/[0.05]">
        {[
          { label: 'Avg Visits / Guest', value: '5.2' },
          { label: 'Avg Between Visits', value: '8d' },
          { label: 'New / Returning',    value: '28 / 112', highlight: true },
        ].map((s) => (
          <div key={s.label} className="bg-[#0b0b0b] px-3.5 py-2.5 text-center">
            <div className={`text-[13px] font-semibold leading-none ${s.highlight ? 'text-green-400' : 'text-white'}`}>{s.value}</div>
            <div className="text-[8px] text-white/20 uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Top Guests This Week */}
      <div className="px-4 pt-3.5 pb-1">
        <div className="text-[10px] text-white/30 font-semibold uppercase tracking-widest mb-2.5">Top Guests This Week</div>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {[
          { rank: 1, initials: 'V', name: 'Victoria R.', tier: 'VIP', pts: '3850 pts', visits: '68 visits', weekly: '8', bg: 'bg-gradient-to-br from-violet-500 to-cyan-400 text-white' },
          { rank: 2, initials: 'A', name: 'Alexander K.', tier: 'VIP', pts: '2940 pts', visits: '52 visits', weekly: '7', bg: 'bg-gradient-to-br from-orange-400 to-amber-500 text-white' },
          { rank: 3, initials: 'C', name: 'Charlotte W.', tier: 'VIP', pts: '2410 pts', visits: '48 visits', weekly: '6', bg: 'bg-gradient-to-br from-rose-400 to-pink-500 text-white' },
        ].map((g) => (
          <div key={g.rank} className="flex items-center gap-3 px-4 py-2.5">
            <span className="text-[10px] font-bold text-white/25 w-3 text-center">{g.rank}</span>
            <div className={`size-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${g.bg}`}>
              {g.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold text-white">{g.name}</span>
                <TierBadge tier={g.tier} color="gold" />
              </div>
              <div className="text-[10px] text-white/25 mt-0.5">{g.pts} · {g.visits}</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-[14px] font-bold text-white">{g.weekly}</div>
              <div className="text-[8px] text-white/20">this week</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PhoneMockup — guest check-in confirmation screen
   ═══════════════════════════════════════════════════════ */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[230px]">
      {/* Ambient glow */}
      <div
        className="absolute -inset-4 rounded-[3rem] blur-2xl -z-10 pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.06)' }}
        aria-hidden
      />

      {/* Phone shell */}
      <div className="rounded-[2.75rem] border-[5px] border-white/[0.09] bg-[#0a0a0a] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
        {/* Dynamic island */}
        <div className="flex justify-center pt-3.5 pb-1 bg-[#0a0a0a]">
          <div className="w-[80px] h-[22px] rounded-full bg-[#141414]" />
        </div>

        {/* Screen */}
        <div className="px-5 pb-8 pt-3 flex flex-col gap-4">

          {/* Check-in success */}
          <div className="flex flex-col items-center gap-2 py-1">
            <div
              className="size-14 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
              }}
            >
              <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="text-center mt-1">
              <div className="text-[11px] text-white/35">Welcome back</div>
              <div className="text-[17px] font-semibold text-white mt-0.5">Alex M.</div>
            </div>
          </div>

          {/* Tier status */}
          <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3.5 flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-black">V</span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-amber-400">VIP member</div>
              <div className="text-[10px] text-white/25 mt-0.5">2,840 pts · 160 to next tier</div>
            </div>
          </div>

          {/* Progress bar */}
          <div>
            <div className="w-full h-1 rounded-full bg-white/[0.07]">
              <div
                className="h-full rounded-full"
                style={{
                  width: '82%',
                  background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                }}
              />
            </div>
          </div>

          {/* Points earned */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 flex items-center justify-between">
            <span className="text-[11px] text-white/30">Tonight's points</span>
            <span className="text-[13px] font-semibold text-white">+50</span>
          </div>

          {/* Benefit available */}
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.05] px-4 py-2.5 flex items-center gap-2.5">
            <span className="text-amber-400 text-[11px]">★</span>
            <span className="text-[11px] text-white/50">1 benefit available</span>
            <span className="ml-auto text-[10px] text-amber-400/70">Redeem →</span>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   StatsMockup — analytics dashboard, used in for-clubs
   ═══════════════════════════════════════════════════════ */
export function StatsMockup() {
  /* Visit trend data — matches real "Visits Over Time" chart shape */
  const visitPoints = [52, 55, 170, 80, 42, 55, 120, 185, 65, 55, 50, 80, 170, 55, 75, 115, 195, 70, 60];

  /* Hourly distribution — matches real "Visits by Hour" bar chart */
  const hourlyBars = [90, 150, 55, 15, 5, 3, 2, 2, 3, 5, 8, 12, 18, 22, 30, 42, 55, 80, 100, 130, 155, 145, 110, 70];

  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#090909] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] max-w-full">
      <WindowChrome title="erez  ·  Analytics" />

      <div className="p-4 flex flex-col gap-3">

        {/* Period selector */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/25 px-2.5 py-1 rounded-full border border-white/[0.06]">Last 7 Days</span>
          <span className="text-[10px] text-white font-medium px-2.5 py-1 rounded-full bg-violet-500/80">Last 30 Days</span>
        </div>

        {/* KPI row 1 — main metrics */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: '2687', label: 'Check-ins (30d)', color: 'text-violet-400' },
            { value: '90',   label: 'Daily Avg (30d)', color: 'text-violet-300' },
            { value: 'Saturday', label: 'Best Day', sub: '198 visits', color: 'text-amber-400' },
            { value: '11 PM', label: 'Peak Hour', sub: 'Peak activity', color: 'text-amber-400' },
          ].map((k) => (
            <div key={k.label} className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5 text-center">
              <div className={`text-[13px] font-bold leading-none ${k.color}`}>{k.value}</div>
              <div className="text-[7.5px] text-white/25 uppercase tracking-widest mt-1">{k.label}</div>
              {k.sub && <div className="text-[7px] text-white/15 mt-0.5">{k.sub}</div>}
            </div>
          ))}
        </div>

        {/* KPI row 2 — engagement metrics */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: '67%', label: 'Repeat Guests', sub: '+8% vs prev period', color: 'text-cyan-400' },
            { value: '5.2', label: 'Avg Visits / Guest', sub: 'in selected period', color: 'text-violet-300' },
            { value: '8d',  label: 'Avg Between Visits', sub: 'guests with 2+ visits', color: 'text-amber-400' },
            { value: '28 / 112', label: 'New / Returning', sub: '80% returning', color: 'text-green-400' },
          ].map((k) => (
            <div key={k.label} className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5 text-center">
              <div className={`text-[13px] font-bold leading-none ${k.color}`}>{k.value}</div>
              <div className="text-[7.5px] text-white/25 uppercase tracking-widest mt-1">{k.label}</div>
              {k.sub && <div className="text-[7px] text-green-400/60 mt-0.5">{k.sub}</div>}
            </div>
          ))}
        </div>

        {/* Visits Over Time — line chart approximation */}
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3.5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[9px] text-violet-400">📈</span>
            <span className="text-[10px] font-semibold text-white">Visits Over Time</span>
          </div>
          <div className="relative h-12">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[7px] text-white/15 pr-1">
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            {/* Chart area */}
            <div className="ml-5 h-full flex items-end gap-px">
              {visitPoints.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end items-center">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${(v / 200) * 100}%`,
                      background: `rgba(6,182,212,${0.3 + (v / 200) * 0.5})`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row: Visits by Hour + Insights */}
        <div className="grid grid-cols-2 gap-2.5">

          {/* Visits by Hour — bar chart */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-[8px] text-amber-400">◎</span>
              <span className="text-[9px] font-semibold text-white">Visits by Hour</span>
            </div>
            <div className="flex items-end gap-px h-8">
              {hourlyBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${(h / 155) * 100}%`,
                    background: h > 100 ? '#f59e0b' : 'rgba(245,158,11,0.4)',
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[6px] text-white/15">12 AM</span>
              <span className="text-[6px] text-white/15">12 PM</span>
              <span className="text-[6px] text-white/15">11 PM</span>
            </div>
          </div>

          {/* Insights */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3">
            <div className="text-[8px] uppercase tracking-widest text-white/25 mb-2.5">Insights</div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2">
                <div className="size-4 rounded-full bg-cyan-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[7px] text-cyan-400">◎</span>
                </div>
                <div>
                  <div className="text-[9px] font-semibold text-white">Peak Hours</div>
                  <div className="text-[8px] text-white/25 mt-0.5">Busiest at 11 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="size-4 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[7px] text-green-400">✓</span>
                </div>
                <div>
                  <div className="text-[9px] font-semibold text-white">Strong Loyalty</div>
                  <div className="text-[8px] text-white/25 mt-0.5">67% came back more than once</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
