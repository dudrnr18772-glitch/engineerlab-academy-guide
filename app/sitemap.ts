import type { MetadataRoute } from "next";
import {
  provinces,
  qualifications,
  regions,
  siteUrl,
} from "./site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-07-24T00:00:00+09:00");

  const provincePages: MetadataRoute.Sitemap = provinces.map((province) => ({
    url: `${siteUrl}/regions/${province.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const detailPages: MetadataRoute.Sitemap = regions.flatMap((region) =>
    qualifications.map((qualification) => ({
      url: `${siteUrl}/academy/${region.slug}/${qualification.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [
    {
      url: siteUrl,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...provincePages,
    ...detailPages,
  ];
}

