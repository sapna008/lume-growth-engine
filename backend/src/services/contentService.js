import { cloudinary } from "../config/cloudinary.js";
import { firestoreDb, firestoreTimestamp } from "../config/firebase.js";

const CONTENT_COLLECTION = "content-management";
const HERO_DOC_ID = "hero";
const HERO_FOLDER = "hero-content";

const heroRef = firestoreDb.collection(CONTENT_COLLECTION).doc(HERO_DOC_ID);

const uploadMediaToCloudinary = async (file) => {
  if (!file) return null;

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: HERO_FOLDER,
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );

    uploadStream.end(file.buffer);
  });
};

const deleteCloudinaryAsset = async (publicId) => {
  if (!publicId) return;

  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: "auto" });
  } catch (error) {
    // Do not fail full request for cleanup failure.
    console.warn(`Cloudinary cleanup failed for ${publicId}:`, error.message);
  }
};

export const getHeroContent = async () => {
  const snapshot = await heroRef.get();
  if (!snapshot.exists) return null;
  return snapshot.data();
};

export const upsertHeroContent = async ({
  headingEn,
  headingHi,
  subheadingEn,
  subheadingHi,
  colorTheme,
  template,
  heroImageFile,
  heroVideoFile,
}) => {
  const current = (await getHeroContent()) ?? {};

  let nextHeroImage = current.heroImage ?? "";
  let nextHeroImageId = current.heroImageId ?? "";
  let nextHeroVideo = current.heroVideo ?? "";
  let nextHeroVideoId = current.heroVideoId ?? "";

  if (heroImageFile) {
    await deleteCloudinaryAsset(current.heroImageId);
    const uploadedImage = await uploadMediaToCloudinary(heroImageFile);
    nextHeroImage = uploadedImage.secure_url;
    nextHeroImageId = uploadedImage.public_id;
  }

  if (heroVideoFile) {
    await deleteCloudinaryAsset(current.heroVideoId);
    const uploadedVideo = await uploadMediaToCloudinary(heroVideoFile);
    nextHeroVideo = uploadedVideo.secure_url;
    nextHeroVideoId = uploadedVideo.public_id;
  }

  // Backward compatibility: older docs stored single heading/subheading (English).
  const resolvedHeadingEn = headingEn ?? current.headingEn ?? current.heading ?? "";
  const resolvedHeadingHi = headingHi ?? current.headingHi ?? "";
  const resolvedSubheadingEn = subheadingEn ?? current.subheadingEn ?? current.subheading ?? "";
  const resolvedSubheadingHi = subheadingHi ?? current.subheadingHi ?? "";

  const payload = {
    headingEn: resolvedHeadingEn,
    headingHi: resolvedHeadingHi,
    subheadingEn: resolvedSubheadingEn,
    subheadingHi: resolvedSubheadingHi,
    // Keep legacy mirrors so any older consumer keeps working.
    heading: resolvedHeadingEn,
    subheading: resolvedSubheadingEn,
    colorTheme: colorTheme ?? current.colorTheme ?? "",
    template: template ?? current.template ?? "",
    heroImage: nextHeroImage,
    heroImageId: nextHeroImageId,
    heroVideo: nextHeroVideo,
    heroVideoId: nextHeroVideoId,
    updatedAt: firestoreTimestamp(),
  };

  await heroRef.set(payload, { merge: false });

  const latest = await heroRef.get();
  return latest.data();
};
