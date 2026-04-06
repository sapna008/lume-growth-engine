import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { BlogCard } from "@/components/blog/BlogCard";
import { FeaturedBlog } from "@/components/blog/FeaturedBlog";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mhjs.retailerapp&hl=en";

export default function Blog() {
  const { language, t } = useLanguage();
  useSEO(
    "Retail Insights & POS Guides | Lume Blog",
    "Grow your retail business with billing, POS, and customer engagement ideas from Lume.",
  );

  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  const heroTitle =
    language === "HI"
      ? "रिटेल इनसाइट्स और POS सॉफ़्टवेयर गाइड्स"
      : "Retail Insights & POS Software Guides";
  const heroSubtitle =
    language === "HI"
      ? "बिलिंग, POS सिस्टम और ग्राहक जुड़ाव की रणनीतियों से अपना रिटेल व्यवसाय बढ़ाना सीखें।"
      : "Learn how to grow your retail business with billing, POS systems, and customer engagement strategies.";

  const ctaTitle =
    language === "HI"
      ? "क्या आप बिलिंग आसान करके रिटेल व्यवसाय बढ़ाना चाहते हैं?"
      : "Ready to simplify your billing and grow your retail business?";
  const ctaSubtitle =
    language === "HI"
      ? "देखें कि ल्यूम POS रिटेलर्स को एक ही प्लेटफ़ॉर्म पर बिलिंग, इन्वेंटरी और ग्राहक जुड़ाव कैसे मैनेज करने में मदद करता है।"
      : "See how Lume POS helps retailers manage billing, inventory, and customer engagement in one platform.";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-24 pb-10 sm:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eaf2ff] via-[#f7fbff] to-white" />
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(500px circle at 15% 20%, rgba(20,111,181,0.14), transparent 55%), radial-gradient(480px circle at 85% 30%, rgba(56,189,248,0.12), transparent 50%)",
            }}
          />
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <Newspaper className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: "#146fb5" }} aria-hidden />
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
                style={{ color: "#1b181f" }}
              >
                {heroTitle}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#4f4f4f" }}>
                {heroSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured article */}
        <section className="pb-10 sm:pb-12 lg:pb-14">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <FeaturedBlog post={featuredPost} language={language} />
            </motion.div>
          </div>
        </section>

        {/* Latest articles grid */}
        <section className="section-spacing bg-gradient-to-b from-white via-[#f4f7fb] to-white pt-2 pb-16 sm:pb-20 lg:pb-24">
          <div className="container-wide">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10 sm:mb-12 lg:mb-14"
              style={{ color: "#1b181f" }}
            >
              {language === "HI" ? "नवीनतम लेख" : "Latest Articles"}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
              {gridPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full flex"
                >
                  <BlogCard post={post} language={language} className="w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden border-t border-[#146fb5]/10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#eaf2f8] via-[#f0f6fc] to-white" />
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(700px circle at 50% 0%, rgba(20,111,181,0.12), transparent 60%)",
            }}
          />
          <div className="container-wide relative z-10 max-w-3xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[1.75rem] font-bold leading-tight mb-4" style={{ color: "#1b181f" }}>
              {ctaTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10" style={{ color: "#4f4f4f" }}>
              {ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Button size="lg" variant="cta" className="shadow-lg w-full sm:w-auto min-w-[200px]" asChild>
                <Link to="/book-demo">{t("cta.startTrial")}</Link>
              </Button>
              <Button size="lg" variant="hero-outline" className="w-full sm:w-auto min-w-[200px]" asChild>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  {t("hero.download")}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
