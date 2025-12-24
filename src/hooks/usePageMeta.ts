import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  canonicalPath?: string; // e.g. "/work"
  ogImage?: string; // e.g. "https://www.nuviz.studio/og.jpg"
  ogType?: "website" | "article";
  robots?: string; // default: "index,follow"
};

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

    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDesc);
    upsertMeta("property", "og:type", meta.ogType || "website");
    upsertMeta("property", "og:url", ogUrl);

    if (meta.ogImage) upsertMeta("property", "og:image", absoluteUrl(meta.ogImage));

    // Twitter
    upsertMeta("name", "twitter:card", meta.ogImage ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", ogTitle);
    upsertMeta("name", "twitter:description", ogDesc);
    if (meta.ogImage) upsertMeta("name", "twitter:image", absoluteUrl(meta.ogImage));

    upsertMeta("name", "robots", meta.robots || "index,follow");
  }, [meta.title, meta.description, meta.canonicalPath, meta.ogImage, meta.ogType, meta.robots]);
}
