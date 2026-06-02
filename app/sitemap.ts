import type { MetadataRoute } from "next";
import { pageSeo, siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-22T00:00:00.000Z");
  const pages = Object.values(pageSeo);

  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
