import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AutoOne - Your All-in-One Car Services Platform',
  description:
    'Book workshops, car wash, rentals, and import cars all in one app. Available in Arabic, English, and German.',
  keywords: [
    'car services',
    'workshops',
    'car wash',
    'car rental',
    'car import',
    'Middle East',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light text-dark">
        <I18nProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
