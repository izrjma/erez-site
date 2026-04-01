import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);
  const d = dict.terms;

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
          {d.title}
        </h1>
        <p className="text-sm text-white/25 mb-16">{d.lastUpdated}</p>

        <div className="flex flex-col gap-12">
          {(d.sections as { title: string; content: string }[]).map((section, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="text-base font-semibold text-white/80 tracking-tight">
                {section.title}
              </h2>
              <p className="text-sm text-white/40 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
