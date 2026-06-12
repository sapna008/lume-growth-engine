// Lightweight translation proxy. Uses Google's public translate endpoint so the
// admin panel can auto-fill Hindi from English without an API key. The result is
// only a suggestion — the admin can edit it before saving.
const GOOGLE_TRANSLATE_URL = "https://translate.googleapis.com/translate_a/single";

export const translateText = async (req, res, next) => {
  try {
    const { text, from = "en", to = "hi" } = req.body ?? {};

    if (typeof text !== "string" || text.trim().length === 0) {
      res.status(400).json({ success: false, message: "Text to translate is required." });
      return;
    }

    const params = new URLSearchParams({
      client: "gtx",
      sl: from,
      tl: to,
      dt: "t",
      q: text.trim(),
    });

    const response = await fetch(`${GOOGLE_TRANSLATE_URL}?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Translation provider responded with ${response.status}`);
    }

    const result = await response.json();
    // result[0] is an array of sentence segments: [[translated, original, ...], ...]
    const translated = Array.isArray(result?.[0])
      ? result[0].map((segment) => segment?.[0] ?? "").join("")
      : "";

    res.status(200).json({ success: true, translated });
  } catch (error) {
    next(error);
  }
};
