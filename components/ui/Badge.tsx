import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

export function Badge({ children, className, dot = true }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full',
        'text-[11px] font-medium tracking-widest uppercase',
        'border border-white/[0.1] bg-white/[0.04] text-white/50',
        className,
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex-shrink-0" />
      )}
      {children}
    </span>
  );
}
