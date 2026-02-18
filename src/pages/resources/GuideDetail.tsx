import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { guideData } from "./Guides";

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
  const guide = guideData.find(g => g.slug === slug);

  // If guide not found, show 404
  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#1b181f' }}>Guide Not Found</h1>
            <p className="text-lg mb-6" style={{ color: '#4f4f4f' }}>The guide you're looking for doesn't exist.</p>
            <Button variant="cta" asChild>
              <Link to="/resources/guides">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Guides
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Use placeholder video if no video URL is provided
  const videoUrl = guide.type === "video" && guide.videoUrl 
    ? guide.videoUrl 
    : "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"; // Placeholder video

  useSEO(`${guide.title} – Lume Guides`, `Learn how to ${guide.title.toLowerCase()} with Lume. Step-by-step video guide.`);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="section-spacing bg-white pt-24">
          <div className="container-wide max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <Button variant="ghost" asChild>
                <Link to="/resources/guides">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Guides
                </Link>
              </Button>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1b181f' }}>
                {guide.title}
              </h1>
            </motion.div>

            {/* Video Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={videoUrl}
                  title={guide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              </div>
              {guide.type === "video" && !guide.videoUrl && (
                <p className="text-sm text-muted-foreground mt-2 italic">
                  {/* TODO: Replace placeholder video with actual video URL */}
                  Note: This is a placeholder video. The actual guide video will be added soon.
                </p>
              )}
            </motion.div>

            {/* Description/Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1b181f' }}>
                What you'll learn:
              </h2>
              <ul className="space-y-3">
                {guide.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                    <span className="text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
