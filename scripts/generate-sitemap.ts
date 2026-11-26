// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { articles } from "../src/data/articles";

const BASE_URL = "https://jordanbeambong.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

function extractProjectSlugs(): string[] {
  const src = readFileSync(resolve("src/data/translations.ts"), "utf-8");
  const enSection = src.split(/\n  fr:\s*\{/)[0] ?? src;
  const matches = [...enSection.matchAll(/slug:\s*"([^"]+)"/g)];
  return [...new Set(matches.map((m) => m[1]))];
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/experience", changefreq: "monthly", priority: "0.8" },
  { path: "/portfolio", changefreq: "weekly", priority: "0.9" },
  { path: "/writing", changefreq: "weekly", priority: "0.8" },
  { path: "/recommendations", changefreq: "monthly", priority: "0.6" },
  { path: "/music", changefreq: "monthly", priority: "0.5" },
];

const projectEntries: SitemapEntry[] = extractProjectSlugs().map((slug) => ({
  path: `/portfolio/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const articleEntries: SitemapEntry[] = articles
  .filter((a) => a.published)
  .map((a) => ({
    path: `/blog/${a.slug}`,
    lastmod: /^\d{4}-\d{2}-\d{2}$/.test(a.date) ? a.date : undefined,
    changefreq: "monthly",
    priority: "0.7",
  }));

const entries: SitemapEntry[] = [
  ...staticEntries,
  ...projectEntries,
  ...articleEntries,
];

function generateSitemap(items: SitemapEntry[]) {
  const urls = items.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);