'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface I18nContextType {
  t: (key: string) => string;
  language: string;
  setLanguage: (lang: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.workshops': 'Workshops',
    'nav.carWash': 'Car Wash',
    'nav.bookings': 'My Bookings',
    'nav.about': 'About',
    'nav.login': 'Login',
    'hero.title': 'Welcome to AutoOne',
    'hero.subtitle': 'Your all-in-one digital platform for car services in the Middle East',
    'hero.browseServices': 'Browse Services',
    'hero.getStarted': 'Get Started',
    'services.title': 'Our Services',
    'services.workshops': 'Workshops',
    'services.workshopsDesc': 'Book nearby workshops for repairs and maintenance',
    'services.carWash': 'Car Wash',
    'services.carWashDesc': 'On-demand car wash services at your convenience',
    'services.rental': 'Car Rental',
    'services.rentalDesc': 'Flexible rental terms from hourly to yearly',
    'services.import': 'Car Import',
    'services.importDesc': 'Order cars directly from Europe, China, and USA',
    'featured.title': 'Featured Workshops',
    'featured.reviews': 'reviews',
    'howItWorks.title': 'How It Works',
    'howItWorks.step1Title': 'Search',
    'howItWorks.step1Desc': 'Find nearby workshops and services',
    'howItWorks.step2Title': 'Book',
    'howItWorks.step2Desc': 'Select your preferred time slot',
    'howItWorks.step3Title': 'Pay',
    'howItWorks.step3Desc': 'Secure payment with Stripe',
    'howItWorks.step4Title': 'Enjoy',
    'howItWorks.step4Desc': 'Get your service and rate your experience',
    'footer.description': 'Your complete car services solution',
    'footer.product': 'Product',
    'footer.workshops': 'Workshops',
    'footer.carWash': 'Car Wash',
    'footer.rental': 'Rentals',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.careers': 'Careers',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.allRights': 'All rights reserved',
  },
  ar: {
    'nav.workshops': 'ورش العمل',
    'nav.carWash': 'غسيل السيارات',
    'nav.bookings': 'حجوزاتي',
    'nav.about': 'عن',
    'nav.login': 'تسجيل الدخول',
    'hero.title': 'أهلا بك في AutoOne',
    'hero.subtitle': 'منصتك الرقمية الشاملة لخدمات السيارات في الشرق الأوسط',
    'hero.browseServices': 'استعرض الخدمات',
    'hero.getStarted': 'ابدأ الآن',
    'services.title': 'خدماتنا',
    'services.workshops': 'ورش العمل',
    'services.workshopsDesc': 'احجز ورش عمل قريبة للإصلاحات والصيانة',
    'services.carWash': 'غسيل السيارات',
    'services.carWashDesc': 'خدمات غسيل سيارات عند الطلب',
    'services.rental': 'تأجير السيارات',
    'services.rentalDesc': 'شروط تأجير مرنة من ساعة إلى سنة',
    'services.import': 'استيراد السيارات',
    'services.importDesc': 'اطلب السيارات مباشرة من أوروبا والصين والولايات المتحدة',
    'featured.title': 'ورش العمل المميزة',
    'featured.reviews': 'تقييمات',
    'howItWorks.title': 'كيف يعمل',
    'howItWorks.step1Title': 'ابحث',
    'howItWorks.step1Desc': 'ابحث عن ورش عمل وخدمات قريبة',
    'howItWorks.step2Title': 'احجز',
    'howItWorks.step2Desc': 'اختر فترتك الزمنية المفضلة',
    'howItWorks.step3Title': 'ادفع',
    'howItWorks.step3Desc': 'دفع آمن مع Stripe',
    'howItWorks.step4Title': 'استمتع',
    'howItWorks.step4Desc': 'احصل على خدمتك وقيم تجربتك',
    'footer.description': 'حلك الشامل لخدمات السيارات',
    'footer.product': 'المنتج',
    'footer.workshops': 'ورش العمل',
    'footer.carWash': 'غسيل السيارات',
    'footer.rental': 'التأجير',
    'footer.company': 'الشركة',
    'footer.about': 'عن هيئتنا',
    'footer.contact': 'اتصل بنا',
    'footer.careers': 'الوظائف',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة الكوكيز',
    'footer.allRights': 'جميع الحقوق محفوظة',
  },
  de: {
    'nav.workshops': 'Werkstätten',
    'nav.carWash': 'Autowäsche',
    'nav.bookings': 'Meine Buchungen',
    'nav.about': 'Über',
    'nav.login': 'Anmelden',
    'hero.title': 'Willkommen bei AutoOne',
    'hero.subtitle': 'Ihre All-in-One-Digitalplattform für Autoservices im Nahen Osten',
    'hero.browseServices': 'Dienstleistungen durchsuchen',
    'hero.getStarted': 'Jetzt loslegen',
    'services.title': 'Unsere Dienstleistungen',
    'services.workshops': 'Werkstätten',
    'services.workshopsDesc': 'Buchen Sie nahegelegene Werkstätten für Reparaturen und Wartung',
    'services.carWash': 'Autowäsche',
    'services.carWashDesc': 'On-Demand-Autowäschedienste',
    'services.rental': 'Autovermietung',
    'services.rentalDesc': 'Flexible Mietbedingungen von stündlich bis jährlich',
    'services.import': 'Autoimport',
    'services.importDesc': 'Bestellen Sie Autos direkt aus Europa, China und den USA',
    'featured.title': 'Empfohlene Werkstätten',
    'featured.reviews': 'Bewertungen',
    'howItWorks.title': 'Wie es funktioniert',
    'howItWorks.step1Title': 'Suchen',
    'howItWorks.step1Desc': 'Finden Sie nahegelegene Werkstätten und Services',
    'howItWorks.step2Title': 'Buchen',
    'howItWorks.step2Desc': 'Wählen Sie Ihren bevorzugten Zeitslot',
    'howItWorks.step3Title': 'Zahlen',
    'howItWorks.step3Desc': 'Sichere Zahlung mit Stripe',
    'howItWorks.step4Title': 'Genießen',
    'howItWorks.step4Desc': 'Erhalten Sie Ihren Service und bewerten Sie Ihre Erfahrung',
    'footer.description': 'Ihre umfassende Autoserviceslösung',
    'footer.product': 'Produkt',
    'footer.workshops': 'Werkstätten',
    'footer.carWash': 'Autowäsche',
    'footer.rental': 'Vermietung',
    'footer.company': 'Unternehmen',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.careers': 'Karrieren',
    'footer.legal': 'Recht',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.cookies': 'Cookie-Richtlinie',
    'footer.allRights': 'Alle Rechte vorbehalten',
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageName] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguageName(savedLang);
    document.documentElement.lang = savedLang;
    if (savedLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageName(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
