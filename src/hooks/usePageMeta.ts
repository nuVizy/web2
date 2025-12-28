import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;

  canonicalPath?: string; // e.g. "/work"
  robots?: string; // default: "index,follow"

  // Open Graph
  ogImage?: string; // absolute or relative
  ogImageAlt?: string;
  ogImageWidth?: number; // e.g. 1200
  ogImageHeight?: number; // e.g. 630
  ogType?: "website" | "article";
  siteName?: string; // default from env or "nuViz Studio"
  locale?: string; // e.g. "en_GB"

  // Twitter
  twitterSite?: string; // e.g. "@nuviz"
  twitterCreator?: string; // e.g. "@liam"
};

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/de8d8i155/image/upload/v1766872540/DSC05869_February_19_2017_jen543.jpg";

function upsertMeta(attr: "name" | "property", key: string, content?: string | null) {
  const selector = `meta[${attr}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  // If content is empty/undefined, remove to avoid stale tags from previous route
  if (!content) {
    if (existing) existing.remove();
    return;
  }

  const tag = existing ?? document.createElement("meta");
  tag.setAttribute(attr, key);
  tag.setAttribute("content", content);
  if (!existing) document.head.appendChild(tag);
}

function upsertLink(rel: string, href?: string | null) {
  const selector = `link[rel="${rel}"]`;
  const existing = document.head.querySelector<HTMLLinkElement>(selector);

  if (!href) {
    if (existing) existing.remove();
    return;
  }

  const tag = existing ?? document.createElement("link");
  tag.setAttribute("rel", rel);
  tag.setAttribute("href", href);
  if (!existing) document.head.appendChild(tag);
}

function absoluteUrl(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;

  const base =
    (import.meta as any)?.env?.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");

  return `${String(base).replace(/\/$/, "")}/${pathOrUrl.replace(/^\//, "")}`;
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    const title = meta.title?.trim();
    const description = meta.description?.trim();

    if (title) document.title = title;

    upsertMeta("name", "description", description);

    const canonical =
      meta.canonicalPath ? absoluteUrl(meta.canonicalPath) : absoluteUrl(window.location.pathname);

    upsertLink("canonical", canonical);

    const ogTitle = title || document.title;
    const ogDesc = description || "";
    const ogUrl = canonical;

    const ogImage = meta.ogImage ? absoluteUrl(meta.ogImage) : absoluteUrl(DEFAULT_OG_IMAGE);

    const siteName = meta.siteName || (import.meta as any)?.env?.VITE_SITE_NAME || "nuViz Studio";
    const locale = meta.locale || "en_GB";

    // Open Graph
    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDesc);
    upsertMeta("property", "og:type", meta.ogType || "website");
    upsertMeta("property", "og:url", ogUrl);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", locale);

    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:secure_url", ogImage);
    upsertMeta("property", "og:image:alt", meta.ogImageAlt || ogTitle);

    if (meta.ogImageWidth) upsertMeta("property", "og:image:width", String(meta.ogImageWidth));
    else upsertMeta("property", "og:image:width", null);

    if (meta.ogImageHeight) upsertMeta("property", "og:image:height", String(meta.ogImageHeight));
    else upsertMeta("property", "og:image:height", null);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", ogTitle);
    upsertMeta("name", "twitter:description", ogDesc);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", meta.ogImageAlt || ogTitle);

    // Optional but nice
    upsertMeta("name", "twitter:site", meta.twitterSite || (import.meta as any)?.env?.VITE_TWITTER_SITE || null);
    upsertMeta("name", "twitter:creator", meta.twitterCreator || (import.meta as any)?.env?.VITE_TWITTER_CREATOR || null);

    // Robots
    upsertMeta("name", "robots", meta.robots || "index,follow");
  }, [
    meta.title,
    meta.description,
    meta.canonicalPath,
    meta.ogImage,
    meta.ogImageAlt,
    meta.ogImageWidth,
    meta.ogImageHeight,
    meta.ogType,
    meta.siteName,
    meta.locale,
    meta.twitterSite,
    meta.twitterCreator,
    meta.robots,
  ]);
}
