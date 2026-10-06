import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes)
    .flatMap((page) => Object.values(page))
    .map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    }));
}
