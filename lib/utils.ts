import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const LANGS = ['en', 'de', 'es'] as const;
export type Lang = (typeof LANGS)[number];

export function isValidLang(lang: string): lang is Lang {
  return LANGS.includes(lang as Lang);
}
