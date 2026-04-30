/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar', 'de'],
    defaultLocale: 'en',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
