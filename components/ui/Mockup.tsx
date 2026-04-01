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
function TierBadge({ tier, color }: { tier: string; color: 'amber' | 'sky' | 'muted' }) {
  const styles = {
    amber: 'text-violet-400 bg-violet-400/10 border border-violet-400/15',
    sky:   'text-sky-400    bg-sky-400/10    border border-sky-400/15',
    muted: 'text-white/30   bg-white/[0.04]  border border-white/[0.07]',
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
      <WindowChrome title="erez  ·  Staff Dashboard" live />

      {/* Stats strip */}
      <div className="flex gap-2 px-5 py-3.5 border-b border-white/[0.05] bg-[#0b0b0b]">
        <StatPill label="Tonight" value="142" sub="guests checked in" />
        <StatPill label="VIPs active" value="38" sub="3 new this week" />
        <StatPill label="Avg. spend" value="€84" sub="↑ 6% vs last Fri" />
      </div>

      {/* Live check-in notification */}
      <div className="mx-4 mt-3.5 mb-1 rounded-xl border border-violet-500/[0.22] bg-violet-500/[0.05] px-4 py-3 flex items-center gap-3.5">
        <div className="size-2 rounded-full bg-violet-400 flex-shrink-0 animate-pulse" />
        <div className="flex-1 min-w-0">
          <span className="text-[11.5px] font-semibold text-violet-300/90">Alex M.</span>
          <span className="text-[11.5px] text-white/35"> just checked in</span>
          <span className="text-[10.5px] text-white/20 ml-2">· Platinum · 47 visits</span>
        </div>
        <span className="text-[10px] text-white/20 flex-shrink-0">now</span>
      </div>

      {/* Guest list */}
      <div className="divide-y divide-white/[0.04] mt-1.5">

        {/* Guest 1 — Platinum, active */}
        <div className="flex items-start gap-3.5 px-5 py-3.5">
          <Avatar
            initials="AM"
            bg="bg-gradient-to-br from-violet-500 to-cyan-400 text-white"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[13px] font-semibold text-white">Alex M.</span>
              <TierBadge tier="Platinum" color="amber" />
            </div>
            <div className="text-[11px] text-white/35 truncate">47 visits · Whiskey Old Fashioned · Birthday next week 🎂</div>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-[10px] text-white/20">€3,200 lifetime</span>
              <span className="text-[10px] text-white/15">·</span>
              <span className="text-[10px] text-white/20">Last: 6 days ago</span>
            </div>
          </div>
          <span className="text-[10px] text-white/20 flex-shrink-0 pt-0.5">now</span>
        </div>

        {/* Guest 2 — Gold */}
        <div className="flex items-start gap-3.5 px-5 py-3.5">
          <Avatar
            initials="SK"
            bg="bg-gradient-to-br from-sky-400/80 to-blue-500/80 text-white"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[13px] font-semibold text-white">Sarah K.</span>
              <TierBadge tier="Gold" color="sky" />
            </div>
            <div className="text-[11px] text-white/35 truncate">23 visits · Champagne · Table 7 preferred</div>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-[10px] text-white/20">€1,440 lifetime</span>
              <span className="text-[10px] text-white/15">·</span>
              <span className="text-[10px] text-white/20">Last: 2 weeks ago</span>
            </div>
          </div>
          <span className="text-[10px] text-white/20 flex-shrink-0 pt-0.5">4m</span>
        </div>

        {/* Guest 3 — New, dimmed */}
        <div className="flex items-start gap-3.5 px-5 py-3.5 opacity-45">
          <Avatar initials="MT" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[13px] font-semibold text-white/70">Marcus T.</span>
              <TierBadge tier="New" color="muted" />
            </div>
            <div className="text-[11px] text-white/30 truncate">First visit · Referred by Alex M.</div>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-[10px] text-white/20">First visit tonight</span>
            </div>
          </div>
          <span className="text-[10px] text-white/20 flex-shrink-0 pt-0.5">9m</span>
        </div>
      </div>

      {/* Footer: status */}
      <div className="px-5 py-3 border-t border-white/[0.04] bg-[#0b0b0b] flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
        <span className="text-[10px] text-white/25 tracking-wide">Live · 3 check-ins in the last 5 min</span>
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
            <div className="size-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white">P</span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-violet-300">Platinum member</div>
              <div className="text-[10px] text-white/25 mt-0.5">2,840 pts · 160 to Diamond</div>
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

          {/* Perk available */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.05] px-4 py-2.5 flex items-center gap-2.5">
            <span className="text-violet-400 text-[11px]">★</span>
            <span className="text-[11px] text-white/50">Free drink available</span>
            <span className="ml-auto text-[10px] text-violet-400/70">Redeem →</span>
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
  const bars = [38, 52, 44, 68, 55, 78, 62, 85, 70, 92, 75, 88];

  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#090909] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] max-w-full">
      <WindowChrome title="erez  ·  Analytics" />

      <div className="p-5 flex flex-col gap-4">

        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: 'Return rate',      value: '68%',  delta: '+4%',  up: true  },
            { label: 'Avg. visits / mo', value: '3.2',  delta: '+0.4', up: true  },
            { label: 'VIP conversion',   value: '24%',  delta: '+2%',  up: true  },
            { label: 'Churn risk',       value: '12',   delta: '-3',   up: false },
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3">
              <div className="text-[9.5px] text-white/25 mb-1 truncate">{k.label}</div>
              <div className="text-[18px] font-bold text-white leading-none">{k.value}</div>
              <div className={`text-[10px] mt-1.5 font-medium ${k.up ? 'text-green-400' : 'text-rose-400'}`}>
                {k.delta} vs last month
              </div>
            </div>
          ))}
        </div>

        {/* Revenue sparkline */}
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9.5px] uppercase tracking-widest text-white/25">Guest visits — last 12 weeks</span>
            <span className="text-[10px] text-white/20">↑ 24%</span>
          </div>
          <div className="flex items-end gap-1 h-10">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i === bars.length - 1
                      ? 'linear-gradient(to top, #7c3aed, #06b6d4)'
                      : `rgba(255,255,255,${0.06 + (h / 92) * 0.1})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Top guests */}
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3.5">
          <div className="text-[9.5px] uppercase tracking-widest text-white/25 mb-3">Top guests this month</div>
          <div className="flex flex-col gap-2.5">
            {[
              { name: 'Alex M.',  value: '€840', visits: '8 visits', color: 'from-violet-500 to-cyan-400 text-white' },
              { name: 'Sarah K.', value: '€620', visits: '6 visits', color: 'from-sky-400 to-blue-500 text-white' },
              { name: 'Lena R.',  value: '€510', visits: '5 visits', color: 'bg-white/[0.08] text-white/50' },
            ].map((g) => (
              <div key={g.name} className="flex items-center gap-2.5">
                <div className={`size-6 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold ${g.color.includes('from-') ? `bg-gradient-to-br ${g.color}` : g.color}`}>
                  {g.name[0]}
                </div>
                <span className="text-[11px] text-white/60 flex-1">{g.name}</span>
                <span className="text-[10px] text-white/25">{g.visits}</span>
                <span className="text-[11px] font-medium text-white/70">{g.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
