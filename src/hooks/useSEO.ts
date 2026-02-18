import { useEffect } from 'react';

const SITE_NAME = 'Lume Retail POS Software';
const DEFAULT_DESCRIPTION =
  'Leading customer engagement and marketing platform helping retailers grow faster and build strong relationships with their customers. Transforming the way India does retail.';

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
