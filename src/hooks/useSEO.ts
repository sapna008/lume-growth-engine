import { useEffect } from 'react';

const SITE_NAME = 'Lume – Retail Growth Platform';
const SITE_URL = 'https://lume.apeiros.ai';
const DEFAULT_DESCRIPTION =
  'Lume helps Indian retailers send digital bills, engage customers, and run marketing campaigns that turn one-time buyers into repeat customers.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export interface SEOOptions {
  /**
   * Overrides the canonical path (e.g. "/products") when the current URL is a
   * variant of a page that shouldn't be indexed separately (e.g. /products/:id).
   * Defaults to the current pathname.
   */
  canonicalPath?: string;
  /** Absolute image URL for social sharing. Defaults to the site's default OG image. */
  ogImage?: string;
}

/**
 * Set unique page title, meta description, canonical URL, and Open Graph /
 * Twitter tags for SEO. Use on every page for better search rankings.
 *
 * Note: this app is a client-side SPA with no server-side rendering, so these
 * tags are only present after JS executes. Crawlers that render JS (Googlebot)
 * will see them; scrapers that don't (some social-share bots) will still see
 * the static defaults in index.html.
 */
export function useSEO(title: string, description?: string, options?: SEOOptions) {
  useEffect(() => {
    const fullTitle = title.toLowerCase().includes('lume') ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const finalDescription = description || DEFAULT_DESCRIPTION;
    if (metaDesc) {
      metaDesc.setAttribute('content', finalDescription);
    }

    const canonicalHref = `${SITE_URL}${options?.canonicalPath ?? window.location.pathname}`;
    setCanonical(canonicalHref);

    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', finalDescription);
    setMetaByProperty('og:url', canonicalHref);
    setMetaByProperty('og:image', options?.ogImage ?? DEFAULT_OG_IMAGE);
    setMetaByName('twitter:title', fullTitle);
    setMetaByName('twitter:description', finalDescription);

    return () => {
      document.title = SITE_NAME;
      if (metaDesc) {
        metaDesc.setAttribute('content', DEFAULT_DESCRIPTION);
      }
      setMetaByProperty('og:title', SITE_NAME);
      setMetaByProperty('og:description', DEFAULT_DESCRIPTION);
      setMetaByProperty('og:url', SITE_URL);
      setMetaByProperty('og:image', DEFAULT_OG_IMAGE);
      setMetaByName('twitter:title', SITE_NAME);
      setMetaByName('twitter:description', DEFAULT_DESCRIPTION);
    };
  }, [title, description, options?.canonicalPath, options?.ogImage]);
}
