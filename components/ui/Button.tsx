import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  href?: string;
}

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]';

const variants = {
  primary:
    'bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#06b6d4] text-white rounded-full hover:opacity-90 active:scale-[0.98] shadow-lg shadow-violet-600/25',
  secondary:
    'bg-white/[0.05] border border-white/[0.12] text-white/80 rounded-full hover:bg-white/[0.09] hover:border-white/20 hover:text-white active:scale-[0.98]',
  ghost:
    'text-white/50 hover:text-white rounded-full hover:bg-white/[0.05] active:scale-[0.98]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
