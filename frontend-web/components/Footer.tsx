'use client';

import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">AutoOne</h3>
          <p className="text-gray-400">
            {t('footer.description')}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">{t('footer.product')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">{t('footer.workshops')}</a></li>
            <li><a href="#" className="hover:text-white">{t('footer.carWash')}</a></li>
            <li><a href="#" className="hover:text-white">{t('footer.rental')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">{t('footer.company')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">{t('footer.about')}</a></li>
            <li><a href="#" className="hover:text-white">{t('footer.contact')}</a></li>
            <li><a href="#" className="hover:text-white">{t('footer.careers')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">{t('footer.legal')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">{t('footer.privacy')}</a></li>
            <li><a href="#" className="hover:text-white">{t('footer.terms')}</a></li>
            <li><a href="#" className="hover:text-white">{t('footer.cookies')}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 AutoOne. {t('footer.allRights')}</p>
      </div>
    </footer>
  );
}
