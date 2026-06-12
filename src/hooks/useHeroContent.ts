import { useEffect, useState } from "react";
import { getHeroContentFromDb } from "@/lib/contentStore";

/**
 * Hero content managed from the admin panel and stored in Realtime Database.
 * Both language variants are kept so the public site can switch instantly.
 */
export interface HeroContent {
  headingEn: string;
  headingHi: string;
  subheadingEn: string;
  subheadingHi: string;
  heroImage: string;
  heroVideo: string;
}

/**
 * Fetches admin-managed hero content. Returns `null` while loading or when no
 * content is available, so callers can fall back to their static i18n copy.
 */
export function useHeroContent(): HeroContent | null {
  const [content, setContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    let active = true;

    const fetchContent = async () => {
      try {
        const data = await getHeroContentFromDb();
        if (!active || !data) return;

        setContent({
          headingEn: data.headingEn ?? "",
          headingHi: data.headingHi ?? "",
          subheadingEn: data.subheadingEn ?? "",
          subheadingHi: data.subheadingHi ?? "",
          heroImage: data.heroImage ?? "",
          heroVideo: data.heroVideo ?? "",
        });
      } catch {
        // Read failure — silently fall back to static copy.
      }
    };

    void fetchContent();
    return () => {
      active = false;
    };
  }, []);

  return content;
}
