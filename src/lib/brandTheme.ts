/**
 * Brand theming helpers. The whole public site reads its accent color from the
 * CSS variable `--brand-rgb` (space-separated RGB channels). Changing that one
 * variable re-colors every brand-tinted element across the site.
 */

/** Converts a hex string like "#146fb5" to "20 111 181" (RGB channels). */
export const hexToRgbChannels = (hex: string): string | null => {
  const match = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
  if (!match) return null;
  const int = parseInt(match[1], 16);
  return `${(int >> 16) & 255} ${(int >> 8) & 255} ${int & 255}`;
};

/** Applies a hex brand color to the document root (live, no reload). */
export const applyBrandColor = (hex?: string | null): void => {
  if (!hex) return;
  const channels = hexToRgbChannels(hex);
  if (channels) {
    document.documentElement.style.setProperty("--brand-rgb", channels);
  }
};
