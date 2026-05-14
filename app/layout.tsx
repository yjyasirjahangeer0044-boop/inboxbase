import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://inboxbase.online'),
  title: {
    default: 'iboxbase — The Independent Brevo Education Hub',
    template: '%s | iboxbase',
  },
  description:
    'Master Brevo from beginner to pro. Real strategies for email marketing, automation, deliverability, and integrations. No fluff. Just results.',
  keywords: [
    'Brevo',
    'Brevo tutorial',
    'Brevo pricing',
    'email marketing',
    'Brevo vs Mailchimp',
    'email automation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inboxbase.online',
    siteName: 'iboxbase',
    title: 'iboxbase — The Independent Brevo Education Hub',
    description:
      'Master Brevo from beginner to pro. Real strategies for email marketing, automation, deliverability, and integrations.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
