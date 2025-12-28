import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/work"
  ogImage?: string; // e.g. "https://www.nuviz.studio/og.jpg" OR "/og.jpg"
  ogType?: "website" | "article";
  robots?: string; // default: "index,follow"
};

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/de8d8i155/image/upload/v1766872540/DSC05869_February_19_2017_jen543.jpg";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  const selector = `meta[${attr}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  const selector = `link[rel="${rel}"]`;
  let tag = document.head.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
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

    if (description) {
      upsertMeta("name", "description", description);
    }

    const canonical =
      meta.canonicalPath ? absoluteUrl(meta.canonicalPath) : absoluteUrl(window.location.pathname);

    upsertLink("canonical", canonical);

    const ogTitle = title || document.title;
    const ogDesc = description || "";
    const ogUrl = canonical;

    // Default OG image unless page overrides it
    const ogImage = meta.ogImage ? absoluteUrl(meta.ogImage) : absoluteUrl(DEFAULT_OG_IMAGE);

    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDesc);
    upsertMeta("property", "og:type", meta.ogType || "website");
    upsertMeta("property", "og:url", ogUrl);
    upsertMeta("property", "og:image", ogImage);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", ogTitle);
    upsertMeta("name", "twitter:description", ogDesc);
    upsertMeta("name", "twitter:image", ogImage);

    upsertMeta("name", "robots", meta.robots || "index,follow");
  }, [meta.title, meta.description, meta.canonicalPath, meta.ogImage, meta.ogType, meta.robots]);
}
