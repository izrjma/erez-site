'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface ContactFormProps {
  dict: {
    name: string;
    email: string;
    venue: string;
    type: string;
    typePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    successHeading: string;
    successBody: string;
    note: string;
    legalPrefix: string;
    legalLink: string;
    legalSuffix: string;
    legalUrl: string;
  };
}

const inputBase =
  'w-full h-12 px-5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/30 outline-none focus:border-amber-400/40 focus:bg-white/[0.07] transition-all duration-200';

const labelBase = 'text-xs font-medium text-white/50 uppercase tracking-widest mb-2 block';

export function ContactForm({ dict }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    venue: '',
    type: '',
    message: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Send failed');
      setSent(true);
    } catch {
      setError('Something went wrong. Please email hello@erez.app directly.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-5 py-16 text-center">
        <div className="size-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
          <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p className="text-xl font-semibold text-white">{dict.successHeading}</p>
          <p className="text-sm text-white/50 mt-1">{dict.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelBase}>{dict.name}</label>
          <input
            type="text"
            required
            placeholder=""
            value={form.name}
            onChange={set('name')}
            className={inputBase}
          />
        </div>
        <div>
          <label className={labelBase}>{dict.email}</label>
          <input
            type="email"
            required
            placeholder=""
            value={form.email}
            onChange={set('email')}
            className={inputBase}
          />
        </div>
      </div>

      {/* Venue + Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelBase}>{dict.venue}</label>
          <input
            type="text"
            required
            placeholder=""
            value={form.venue}
            onChange={set('venue')}
            className={inputBase}
          />
        </div>
        <div>
          <label className={labelBase}>{dict.type}</label>
          <input
            type="text"
            placeholder={dict.typePlaceholder}
            value={form.type}
            onChange={set('type')}
            className={inputBase}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelBase}>{dict.message}</label>
        <textarea
          rows={4}
          placeholder={dict.messagePlaceholder}
          value={form.message}
          onChange={set('message')}
          className={`${inputBase} h-auto py-4 resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <Button type="submit" variant="primary" size="lg" disabled={sending}>
          {sending ? '…' : dict.submit}
        </Button>
        <span className="text-[13px] sm:text-xs text-white/35">{dict.note}</span>
      </div>

      {error && (
        <p className="text-xs text-rose-400/80 mt-2">{error}</p>
      )}

      <p className="text-xs text-white/[0.35] hover:text-white/60 transition-colors mt-3">
        {dict.legalPrefix}
        <a
          href={dict.legalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {dict.legalLink}
        </a>
        {dict.legalSuffix}
      </p>
    </form>
  );
}
