import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);
  const d = dict.imprint;

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12">
          {d.title}
        </h1>
        <div className="text-sm text-white/40 leading-relaxed whitespace-pre-line">
          {d.content}
        </div>
      </div>
    </section>
  );
}
