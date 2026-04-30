'use client';

import { useI18n } from '@/lib/i18n';

export default function Services() {
  const { t } = useI18n();

  const services = [
    { icon: '🔧', title: t('services.workshops'), description: t('services.workshopsDesc') },
    { icon: '🚗', title: t('services.carWash'), description: t('services.carWashDesc') },
    { icon: '🚙', title: t('services.rental'), description: t('services.rentalDesc') },
    { icon: '✈️', title: t('services.import'), description: t('services.importDesc') },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
