'use client';

import { useI18n } from '@/lib/i18n';

export default function FeaturedWorkshops() {
  const { t } = useI18n();

  const workshops = [
    { name: 'Premium Auto Care', rating: 4.8, reviews: 234, location: 'Dubai' },
    { name: 'Expert Mechanics', rating: 4.6, reviews: 189, location: 'Abu Dhabi' },
    { name: 'Quick Fix Service', rating: 4.9, reviews: 312, location: 'Sharjah' },
  ];

  return (
    <section className="py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t('featured.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{workshop.name}</h3>
              <p className="text-gray-600 mb-4">{workshop.location}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span className="font-bold">{workshop.rating}</span>
                  <span className="text-gray-500 ml-2">({workshop.reviews} {t('featured.reviews')})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
