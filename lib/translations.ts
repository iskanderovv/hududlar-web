export type Language = "en" | "uz"

export const translations = {
  en: {
    // Header
    usage: "Usage",
    install: "Install",

    // Hero
    madeForUzbekistan: "Made for Uzbekistan",
    heroTitle: "Administrative Regions of",
    heroTitleHighlight: "Uzbekistan",
    heroDescription:
      "A comprehensive TypeScript library for retrieving regions, districts, and villages of Uzbekistan with full multilingual support and zero dependencies.",
    getStarted: "Get Started",
    viewDocs: "View Docs",

    // Features
    lightningFast: "Lightning Fast",
    lightningFastDesc: "Zero dependencies, tree-shakable, and optimized for performance",
    multilingual: "Multilingual",
    multilingualDesc: "Support for Uzbek (Latin & Cyrillic) and English",
    typescript: "100% TypeScript",
    typescriptDesc: "Fully typed with excellent IntelliSense and autocomplete",

    // Installation
    installation: "Installation",

    // Usage
    usageExamples: "Usage",
    basicUsage: "Basic Usage",
    basicUsageDesc: "Get regions, districts, and villages",
    searchFunctionality: "Search Functionality",
    searchFunctionalityDesc: "Search across all administrative divisions",
    typescriptSupport: "TypeScript Support",
    typescriptSupportDesc: "Full type safety and IntelliSense",

    // Footer
    footerDescription: "Administrative regions of Uzbekistan for developers",
    documentation: "Documentation",
    resources: "Resources",
    community: "Community",
    copyright: "MIT License. Developed by AII for Uzbekistan",
  },

  uz: {
    // Header
    usage: "Foydalanish",
    search: "Qidiruv",
    install: "O'rnatish",

    // Hero
    madeForUzbekistan: "O'zbekiston uchun yaratilgan",
    heroTitle: "O'zbekistonning",
    heroTitleHighlight: "Ma'muriy Hududlari",
    heroDescription:
      "O'zbekistonning viloyat, tuman va qishloqlarini olish uchun to'liq ko'p tilli qo'llab-quvvatlash va nol bog'liqlik bilan keng qamrovli TypeScript kutubxonasi.",
    getStarted: "Boshlash",
    viewDocs: "Hujjatlarni Ko'rish",

    // Features
    lightningFast: "Chaqmoq Tez",
    lightningFastDesc: "Nol bog'liqlik, tree-shakable va ishlash uchun optimallashtirilgan",
    multilingual: "Ko'p Tilli",
    multilingualDesc: "O'zbek (Lotin va Kirill) va Ingliz tillarini qo'llab-quvvatlash",
    typescript: "100% TypeScript",
    typescriptDesc: "To'liq terilgan va ajoyib IntelliSense va avtomatik to'ldirish",

    // Installation
    installation: "O'rnatish",

    // Usage
    usageExamples: "Foydalanish",
    basicUsage: "Asosiy Foydalanish",
    basicUsageDesc: "Viloyat, tuman va qishloqlarni olish",
    searchFunctionality: "Qidiruv Funksiyasi",
    searchFunctionalityDesc: "Barcha ma'muriy bo'linmalar bo'ylab qidiruv",
    typescriptSupport: "TypeScript Qo'llab-quvvatlash",
    typescriptSupportDesc: "To'liq tip xavfsizligi va IntelliSense",

    // Footer
    footerDescription: "Dasturchilar uchun O'zbekistonning ma'muriy hududlari",
    documentation: "Hujjatlar",
    resources: "Resurslar",
    community: "Jamiyat",
    copyright: "MIT Litsenziyasi. O'zbekiston uchun AII tomonidan yaratilgan",
  },
}

export function useTranslation(language: Language) {
  return translations[language]
}
