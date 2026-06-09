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

export const postContent = async (req, res, next) => {
  try {
    const { heading, subheading, colorTheme, template } = req.body;
    const heroImageFile = getSingleFile(req.files, "heroImage");
    const heroVideoFile = getSingleFile(req.files, "heroVideo");

    const hasAnyBodyField = [heading, subheading, colorTheme, template].some(
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
      heading: typeof heading === "string" ? heading.trim() : undefined,
      subheading: typeof subheading === "string" ? subheading.trim() : undefined,
      colorTheme: typeof colorTheme === "string" ? colorTheme.trim() : undefined,
      template: typeof template === "string" ? template.trim() : undefined,
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
