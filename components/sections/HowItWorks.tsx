import { Badge } from '@/components/ui/Badge';
import { PhoneMockup } from '@/components/ui/Mockup';

interface Step {
  number: string;
  title: string;
  body: string;
}

interface HowItWorksProps {
  dict: {
    eyebrow: string;
    heading: string;
    sub: string;
    steps: Step[];
  };
}

export function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-36 bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <Badge>{dict.eyebrow}</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-white leading-[1.08] max-w-2xl">
            {dict.heading}
          </h2>
          <p className="text-[0.95rem] text-white/35 max-w-sm">{dict.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

          {/* Steps */}
          <ol className="flex flex-col">
            {dict.steps.map((step, i) => (
              <li key={step.number} className="relative flex gap-5 sm:gap-6 pb-8 sm:pb-12 last:pb-0">
                {/* Connector line */}
                {i < dict.steps.length - 1 && (
                  <div
                    className="absolute left-[19px] top-11 bottom-0 w-px"
                    style={{
                      background:
                        'linear-gradient(to bottom, rgba(124,58,237,0.20) 0%, rgba(6,182,212,0.04) 100%)',
                    }}
                    aria-hidden
                  />
                )}

                {/* Step number */}
                <div className="relative flex-shrink-0">
                  <div
                    className="size-[38px] rounded-full border flex items-center justify-center text-[11px] font-semibold tabular-nums"
                    style={{
                      borderColor: 'rgba(124,58,237,0.28)',
                      background: 'rgba(124,58,237,0.06)',
                      color: '#a855f7',
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="text-[1.05rem] font-semibold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[0.9rem] text-white/38 leading-relaxed max-w-sm">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Phone */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden />
    </section>
  );
}
