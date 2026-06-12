import { getHeroContent, upsertHeroContent } from "../services/contentService.js";

const getSingleFile = (files, fieldName) => {
  const list = files?.[fieldName];
  return Array.isArray(list) && list.length > 0 ? list[0] : null;
};

export const getContent = async (_req, res, next) => {
  try {
    const data = await getHeroContent();
    res.status(200).json({
      success: true,
      data: data ?? null,
    });
  } catch (error) {
    next(error);
  }
};

const cleanField = (value) => (typeof value === "string" ? value.trim() : undefined);

export const postContent = async (req, res, next) => {
  try {
    const { headingEn, headingHi, subheadingEn, subheadingHi, colorTheme, template } = req.body;
    const heroImageFile = getSingleFile(req.files, "heroImage");
    const heroVideoFile = getSingleFile(req.files, "heroVideo");

    const hasAnyBodyField = [headingEn, headingHi, subheadingEn, subheadingHi, colorTheme, template].some(
      (item) => typeof item === "string" && item.trim().length > 0
    );

    if (!hasAnyBodyField && !heroImageFile && !heroVideoFile) {
      res.status(400).json({
        success: false,
        message: "At least one field or media file is required.",
      });
      return;
    }

    const data = await upsertHeroContent({
      headingEn: cleanField(headingEn),
      headingHi: cleanField(headingHi),
      subheadingEn: cleanField(subheadingEn),
      subheadingHi: cleanField(subheadingHi),
      colorTheme: cleanField(colorTheme),
      template: cleanField(template),
      heroImageFile,
      heroVideoFile,
    });

    res.status(200).json({
      success: true,
      message: "Hero content saved successfully.",
      data,
      preview: {
        heroImage: data.heroImage,
        heroVideo: data.heroVideo,
      },
    });
  } catch (error) {
    next(error);
  }
};
