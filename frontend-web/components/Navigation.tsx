'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function Navigation() {
  const { t, language, setLanguage } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          AutoOne
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/workshops" className="hover:text-primary">
            {t('nav.workshops')}
          </Link>
          <Link href="/car-wash" className="hover:text-primary">
            {t('nav.carWash')}
          </Link>
          <Link href="/bookings" className="hover:text-primary">
            {t('nav.bookings')}
          </Link>
          <Link href="/about" className="hover:text-primary">
            {t('nav.about')}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="de">Deutsch</option>
          </select>

          <Link
            href="/login"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {t('nav.login')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
