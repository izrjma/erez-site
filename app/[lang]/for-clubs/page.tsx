import { redirect } from 'next/navigation';

export default async function ForClubsRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  redirect(`/${lang}/for-venues`);
}
