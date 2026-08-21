// app/page.tsx
import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Skillra | From Learning to Placements - Career Companion',
  description: 'Empower your journey with cutting-edge industry training, expert mentorship, and premium career placements all in one collaborative hub with Skillra.',
  keywords: [
    'Skillra', 
    'career placement training', 
    'industry mentorship program', 
    'job placement courses', 
    'professional skill development'
  ],
  alternates: {
    canonical: 'https://skillra.com',
  },
  openGraph: {
    title: 'Skillra | From Learning to Placements - Career Companion',
    description: 'Empower your journey with cutting-edge industry training, expert mentorship, and premium career placements.',
    url: 'https://skillra.com',
    siteName: 'Skillra',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <HomePageClient />;
}
