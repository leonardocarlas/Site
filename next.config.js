/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'fr', 'it', 'es', 'pt', 'de'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localeDetection: false,
  },
  env: {
    EMAIL_SENDER : "JORDAN",
    EMAIL_PASSWORD : "MICHEAL"

  },
}
