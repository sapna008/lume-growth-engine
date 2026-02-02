import { useEffect } from 'react';

const SITE_NAME = 'Lume Retail POS Software';
const DEFAULT_DESCRIPTION =
  'Lume is a smart retail POS software for Indian stores. Billing, customer insights, loyalty & marketing tools. Grow your store.';

/**
 * Set unique page title and optional meta description for SEO.
 * Use on every page for better search rankings.
 */
export function useSEO(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    return () => {
      document.title = SITE_NAME;
      if (metaDesc) {
        metaDesc.setAttribute('content', DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
