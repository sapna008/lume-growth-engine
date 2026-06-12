import { get, ref, serverTimestamp, update } from "firebase/database";
import { realtimeDb } from "@/lib/firebase";

const HERO_PATH = "content/hero";

export interface HeroContentRecord {
  headingEn?: string;
  headingHi?: string;
  subheadingEn?: string;
  subheadingHi?: string;
  colorTheme?: string;
  template?: string;
  heroImage?: string;
  heroVideo?: string;
}

/** Reads admin-managed hero content directly from Realtime Database. */
export const getHeroContentFromDb = async (): Promise<HeroContentRecord | null> => {
  const snapshot = await get(ref(realtimeDb, HERO_PATH));
  return snapshot.exists() ? (snapshot.val() as HeroContentRecord) : null;
};

/**
 * Saves hero content fields to Realtime Database. Only the provided keys are
 * written (a shallow merge), so saving text leaves existing media untouched.
 */
export const saveHeroContentToDb = async (fields: HeroContentRecord): Promise<void> => {
  await update(ref(realtimeDb, HERO_PATH), {
    ...fields,
    updatedAt: serverTimestamp(),
  });
};
