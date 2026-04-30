'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/workshops"
            className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            {t('hero.browseServices')}
          </Link>
          <Link
            href="/auth/register"
            className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            {t('hero.getStarted')}
          </Link>
        </div>
      </div>
    </section>
  );
}
