import { notFound } from 'next/navigation';
import { isValidLang, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);

  return (
    <>
      <Hero        lang={lang as Lang} dict={dict.hero} />
      <Problem     dict={dict.problem} />
      <HowItWorks  dict={dict.howItWorks} />
      <Features    dict={dict.features} />
      <CTA         lang={lang as Lang} dict={dict.cta} />
    </>
  );
}
