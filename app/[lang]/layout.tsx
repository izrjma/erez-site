import { notFound } from 'next/navigation';
import { isValidLang, LANGS, type Lang } from '@/lib/utils';
import { getDictionary } from '@/lib/dictionaries';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const labels: Record<string, string> = {
    en: 'erez · Guest recognition infrastructure',
    de: 'erez · Gästeerkennungs-Infrastruktur',
    es: 'erez · Infraestructura de reconocimiento de clientes',
  };
  return {
    title: labels[lang] ?? labels.en,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLang(lang)) notFound();

  const dict = await getDictionary(lang as Lang);

  return (
    <div className="flex flex-col min-h-screen bg-base">
      <Navbar lang={lang as Lang} dict={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Lang} dict={dict.footer} />
    </div>
  );
}
