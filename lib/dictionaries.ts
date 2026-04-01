import type { Lang } from './utils';

const loaders: Record<Lang, () => Promise<unknown>> = {
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  de: () => import('@/dictionaries/de.json').then((m) => m.default),
  es: () => import('@/dictionaries/es.json').then((m) => m.default),
};

export async function getDictionary(lang: Lang) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return loaders[lang]() as Promise<any>;
}
