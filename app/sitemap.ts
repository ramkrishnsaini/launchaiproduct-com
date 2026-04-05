import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** Emitted at `/sitemap.xml` (see also `robots.ts`). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
