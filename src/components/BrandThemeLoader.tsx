import { useEffect } from "react";
import { getHeroContentFromDb } from "@/lib/contentStore";
import { applyBrandColor } from "@/lib/brandTheme";

/**
 * Loads the admin-selected brand color from the database once on app start and
 * applies it site-wide. Renders nothing. Falls back silently to the default
 * brand color in CSS when no color is set or the fetch fails.
 */
const BrandThemeLoader = (): null => {
  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const data = await getHeroContentFromDb();
        if (active) applyBrandColor(data?.colorTheme);
      } catch {
        // keep default brand color
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return null;
};

export default BrandThemeLoader;
