import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: ["Bingbot", "Yandexbot"],
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: "https://hududlar.dev/sitemap.xml",
  }
}
