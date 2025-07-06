import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hududlar - O'zbekiston Ma'muriy Hududlari | TypeScript Kutubxonasi",
  description:
    "O'zbekistonning barcha viloyat, tuman va qishloqlarini olish uchun eng yaxshi TypeScript kutubxonasi. 14 viloyat, 200+ tuman, 1000+ qishloq ma'lumotlari. O'zbek va rus tillarida qo'llab-quvvatlash.",
  keywords: [
    "o'zbekiston",
    "uzbekistan",
    "viloyatlar",
    "regions",
    "tumanlar", 
    "districts",
    "qishloqlar",
    "villages",
    "ma'muriy hududlar",
    "administrative regions",
    "soato",
    "typescript",
    "javascript",
    "npm",
    "package",
    "kutubxona",
    "library",
    "api",
    "toshkent",
    "tashkent",
    "samarqand",
    "samarkand",
    "buxoro",
    "bukhara",
    "andijon",
    "andijan",
    "farg'ona",
    "fergana",
    "namangan",
    "qashqadaryo",
    "kashkadarya",
    "surxondaryo",
    "surkhandarya",
    "jizzax",
    "sirdaryo",
    "syrdarya",
    "xorazm",
    "khorezm",
    "navoiy",
    "navoi",
    "qoraqalpog'iston",
    "karakalpakstan"
  ],
  authors: [{ name: "Hududlar Team", url: "https://hududlar.uz" }],
  creator: "Hududlar Development Team",
  publisher: "Hududlar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    url: "https://hududlar.uz",
    siteName: "Hududlar - O'zbekiston Ma'muriy Hududlari",
    title: "Hududlar - O'zbekiston Ma'muriy Hududlari TypeScript Kutubxonasi",
    description: "O'zbekistonning barcha viloyat, tuman va qishloqlarini olish uchun eng yaxshi TypeScript kutubxonasi. 14 viloyat, 200+ tuman, 1000+ qishloq ma'lumotlari.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hududlar - O'zbekiston Ma'muriy Hududlari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hududlar_dev",
    creator: "@hududlar_dev",
    title: "Hududlar - O'zbekiston Ma'muriy Hududlari TypeScript Kutubxonasi",
    description: "O'zbekistonning barcha viloyat, tuman va qishloqlarini olish uchun eng yaxshi TypeScript kutubxonasi.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://hududlar.uz",
    languages: {
      'uz-UZ': 'https://hududlar.uz/uz',
      'ru-RU': 'https://hududlar.uz/ru',
      'en-US': 'https://hududlar.uz/en',
    },
  },
  category: "Technology",
  classification: "Software Library",
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
  generator: 'Next.js',
  applicationName: 'Hududlar',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" dir="ltr">
      <head>
        <link rel="canonical" href="https://hududlar.uz" />
        <link rel="alternate" hrefLang="uz" href="https://hududlar.uz/uz" />
        <link rel="alternate" hrefLang="ru" href="https://hududlar.uz/ru" />
        <link rel="alternate" hrefLang="en" href="https://hududlar.uz/en" />
        <link rel="alternate" hrefLang="x-default" href="https://hududlar.uz" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Hududlar",
              "description": "O'zbekistonning barcha viloyat, tuman va qishloqlarini olish uchun TypeScript kutubxonasi",
              "url": "https://hududlar.uz",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Cross-platform",
              "programmingLanguage": "TypeScript",
              "author": {
                "@type": "Organization",
                "name": "Hududlar Team"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "ratingCount": "100"
              }
            })
          }}
        />
        
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="UZ" />
        <meta name="geo.country" content="Uzbekistan" />
        <meta name="geo.placename" content="Uzbekistan" />
        
        {/* Language and content tags */}
        <meta httpEquiv="content-language" content="uz,ru" />
        <meta name="content-language" content="uz" />
      </head>
      <body className={poppins.className}>
        {children}
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
