import { redirect } from 'next/navigation';

// Root "/" redirects to English. The middleware handles Accept-Language
// detection for the initial visit; this fallback handles direct "/" navigation.
export default function RootPage() {
  redirect('/en');
}
