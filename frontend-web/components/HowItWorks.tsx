'use client';

import { useI18n } from '@/lib/i18n';

export default function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    { step: 1, title: t('howItWorks.step1Title'), description: t('howItWorks.step1Desc') },
    { step: 2, title: t('howItWorks.step2Title'), description: t('howItWorks.step2Desc') },
    { step: 3, title: t('howItWorks.step3Title'), description: t('howItWorks.step3Desc') },
    { step: 4, title: t('howItWorks.step4Title'), description: t('howItWorks.step4Desc') },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t('howItWorks.title')}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
