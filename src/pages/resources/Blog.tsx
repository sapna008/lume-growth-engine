import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts, getBlogImageSrc, getListingBlurb, type BlogPostPreview } from "@/data/blogPosts";
import { getBlogPostBody } from "@/components/blog/postBodies/registry";
import { Button } from "@/components/ui/button";

const FILTER_KEYS = ["All", "GST", "Loyalty", "POS", "Marketing", "Billing", "Growth Tips"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

function inferCategory(post: BlogPostPreview): FilterKey {
  const source = [post.category, post.title, post.description, post.excerpt, post.slug]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (source.includes("gst")) return "GST";
  if (source.includes("loyalty") || source.includes("reward") || source.includes("coupon")) return "Loyalty";
  if (source.includes("whatsapp") || source.includes("marketing") || source.includes("campaign")) return "Marketing";
  if (source.includes("pos")) return "POS";
  if (source.includes("bill") || source.includes("invoice") || source.includes("tax")) return "Billing";
  return "Growth Tips";
}

function normalizeCategory(post: BlogPostPreview): FilterKey {
  const raw = (post.category ?? "").toLowerCase().trim();
  if (raw === "gst") return "GST";
  if (raw === "loyalty") return "Loyalty";
  if (raw === "pos") return "POS";
  if (raw === "marketing") return "Marketing";
  if (raw === "billing") return "Billing";
  if (raw === "growth" || raw === "growth tips") return "Growth Tips";
  return inferCategory(post);
}

function estimatePublishedDate(index: number, language: "EN" | "HI"): string {
  if (language === "HI") {
    const labels = ["जनवरी 2026", "फरवरी 2026", "मार्च 2026", "अप्रैल 2026"];
    return labels[index % labels.length];
  }
  const labels = ["Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026"];
  return labels[index % labels.length];
}

export default function Blog() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  useSEO(
    "Retail Insights & POS Guides | Lume Blog",
    "Grow your retail business with billing, POS, and customer engagement ideas from Lume.",
  );

  const featuredPost = blogPosts[0];
  const featuredCategory = normalizeCategory(featuredPost);
  const featuredSummary = getListingBlurb(featuredPost, language);
  const featuredImageSrc = getBlogImageSrc(featuredPost);

  const gridPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return blogPosts
      .slice(1)
      .map((post, idx) => {
        const normalizedCategory = normalizeCategory(post);
        const title = language === "HI" ? post.titleHI : post.title;
        const summary = getListingBlurb(post, language);
        const searchable = [
          post.title,
          post.titleHI,
          post.description,
          post.descriptionHI,
          post.excerpt,
          post.excerptHI,
          post.category,
          normalizedCategory,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return {
          post,
          idx,
          title,
          summary,
          normalizedCategory,
          searchable,
          hasFullArticle: Boolean(getBlogPostBody(post.slug)),
        };
      })
      .filter((item) => (activeFilter === "All" ? true : item.normalizedCategory === activeFilter))
      .filter((item) => (q ? item.searchable.includes(q) : true))
      .sort((a, b) => Number(b.hasFullArticle) - Number(a.hasFullArticle));
  }, [activeFilter, language, searchQuery]);

  const labels = {
    title: language === "HI" ? "रिटेल इनसाइट्स, POS गाइड्स और ग्रोथ टिप्स" : "Retail Insights, POS Guides & Growth Tips",
    subtitle:
      language === "HI"
        ? "GST बिलिंग, लॉयल्टी प्रोग्राम, ग्राहक रिटेंशन, बिलिंग सॉफ़्टवेयर और भारत में रिटेल स्टोर्स बढ़ाने के लिए उपयोगी गाइड्स।"
        : "Actionable guides on GST billing, loyalty programs, customer retention, billing software, and growing retail stores in India.",
    searchPlaceholder:
      language === "HI"
        ? "GST, loyalty, billing, customer retention खोजें..."
        : "Search GST, loyalty, billing, customer retention...",
    exploreArticles: language === "HI" ? "लेख देखें" : "Explore Articles",
    latestTitle: language === "HI" ? "नवीनतम लेख" : "Latest Articles",
    latestSubtitle: language === "HI" ? "आधुनिक रिटेलर्स के लिए नए इनसाइट्स।" : "Fresh insights for modern retailers.",
    featured: language === "HI" ? "विशेष लेख" : "Featured",
    published: language === "HI" ? "प्रकाशित" : "Published",
    readFull: language === "HI" ? "पूरा लेख पढ़ें" : "Read Full Article",
    readMore: language === "HI" ? "और पढ़ें" : "Read More",
    noResultsTitle: language === "HI" ? "कोई लेख नहीं मिला" : "No articles found",
    noResultsText:
      language === "HI"
        ? "कोशिश करें: अलग कीवर्ड या फ़िल्टर चुनें।"
        : "Try a different keyword or filter to discover more articles.",
    popularTopics: language === "HI" ? "लोकप्रिय विषय" : "Popular Topics",
    ctaTitle: language === "HI" ? "और रिटेल ग्रोथ इनसाइट्स चाहिए?" : "Want More Retail Growth Insights?",
    ctaText:
      language === "HI"
        ? "जानें Apeiros कैसे स्मार्ट बिलिंग, लॉयल्टी और ग्राहक जुड़ाव के साथ स्टोर्स को बढ़ने में मदद करता है।"
        : "Explore how Apeiros helps stores with smart billing, loyalty, and customer engagement.",
    exploreProducts: language === "HI" ? "प्रोडक्ट्स देखें" : "Explore Products",
    readResources: language === "HI" ? "और संसाधन पढ़ें" : "Read More Resources",
  };

  const filterLabels: Record<FilterKey, string> = {
    All: language === "HI" ? "सभी" : "All",
    GST: "GST",
    Loyalty: language === "HI" ? "लॉयल्टी" : "Loyalty",
    POS: "POS",
    Marketing: language === "HI" ? "मार्केटिंग" : "Marketing",
    Billing: language === "HI" ? "बिलिंग" : "Billing",
    "Growth Tips": language === "HI" ? "ग्रोथ टिप्स" : "Growth Tips",
  };

  const popularTopics = [
    "GST Billing",
    "Customer Loyalty",
    "POS Software",
    "WhatsApp Marketing",
    "Repeat Customers",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-[#146fb5]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ebf4ff] via-[#f8fbff] to-white" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(420px circle at 8% 15%, rgba(20,111,181,0.14), transparent 58%), radial-gradient(420px circle at 92% 12%, rgba(56,189,248,0.14), transparent 56%)",
            }}
          />
          <div className="site-container hero-section relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5" style={{ color: "#1b181f" }}>
                {labels.title}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8" style={{ color: "#4f4f4f" }}>
                {labels.subtitle}
              </p>
              <div className="flex justify-center mb-6">
                <Button variant="cta" size="lg" asChild>
                  <a href="#latest-articles">{labels.exploreArticles}</a>
                </Button>
              </div>
              <div className="mx-auto max-w-2xl">
                <label htmlFor="blog-search" className="sr-only">
                  {labels.searchPlaceholder}
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: "#6b7280" }}
                    aria-hidden
                  />
                  <input
                    id="blog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={labels.searchPlaceholder}
                    className="w-full rounded-2xl border border-[#146fb5]/20 bg-white/95 py-3.5 pl-11 pr-4 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#146fb5]/30 focus:border-[#146fb5]/40"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[#146fb5]/10 bg-white/95">
          <div className="site-container">
            <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
              {FILTER_KEYS.map((key) => {
                const active = activeFilter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveFilter(key)}
                    className={[
                      "whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                      active
                        ? "border-[#146fb5] bg-[#146fb5] text-white shadow-sm"
                        : "border-[#146fb5]/20 bg-white text-[#146fb5] hover:border-[#146fb5]/40 hover:bg-[#146fb5]/8",
                    ].join(" ")}
                  >
                    {filterLabels[key]}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">
          <div className="site-container">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-[#146fb5]/15 bg-white shadow-[0_12px_48px_rgba(20,111,181,0.08)] overflow-hidden md:grid md:grid-cols-2"
            >
              <div className="relative min-h-[260px] sm:min-h-[320px] bg-gradient-to-br from-[#dbeafe] via-[#eaf4ff] to-[#fef9c3]/50">
                {featuredImageSrc ? (
                  <img
                    src={featuredImageSrc}
                    alt={language === "HI" ? featuredPost.titleHI : featuredPost.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null}
              </div>

              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full border border-[#146fb5]/25 bg-[#146fb5]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#146fb5]">
                    {labels.featured}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-[#4f4f4f]">
                    {featuredCategory}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-tight mb-4" style={{ color: "#1b181f" }}>
                  {language === "HI" ? featuredPost.titleHI : featuredPost.title}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: "#4f4f4f" }}>
                  {featuredSummary}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm mb-6" style={{ color: "#6b7280" }}>
                  {featuredPost.readTime && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-4 h-4" aria-hidden />
                      {featuredPost.readTime}
                    </span>
                  )}
                  <span>
                    {labels.published}: {estimatePublishedDate(0, language)}
                  </span>
                </div>
                <div>
                  <Button variant="cta" size="lg" className="shadow-md" asChild>
                    <Link to={`/resources/blog/${featuredPost.slug}`}>{labels.readFull}</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="latest-articles" className="section-spacing bg-gradient-to-b from-white via-[#f4f7fb] to-white pt-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="site-container">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" style={{ color: "#1b181f" }}>
                {labels.latestTitle}
              </h2>
              <p className="text-base sm:text-lg" style={{ color: "#4f4f4f" }}>
                {labels.latestSubtitle}
              </p>
            </div>

            {gridPosts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#146fb5]/30 bg-white p-8 sm:p-10 text-center">
                <p className="text-lg font-semibold mb-2" style={{ color: "#1b181f" }}>
                  {labels.noResultsTitle}
                </p>
                <p style={{ color: "#4f4f4f" }}>{labels.noResultsText}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
                {gridPosts.map((item, i) => {
                  const cardImageSrc = getBlogImageSrc(item.post);

                  return (
                  <motion.article
                    key={item.post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="group h-full rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative aspect-[3/2] w-full bg-gradient-to-br from-[#146fb5]/12 via-[#e8f2fb] to-[#fef9c3]/40">
                      {cardImageSrc ? (
                        <img
                          src={cardImageSrc}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : null}
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col h-full">
                      <div className="mb-3">
                        <span className="inline-flex items-center rounded-full border border-[#146fb5]/25 bg-[#146fb5]/8 px-2.5 py-0.5 text-xs font-medium text-[#146fb5]">
                          {item.normalizedCategory}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold leading-snug mb-2 line-clamp-2" style={{ color: "#1b181f" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[0.95rem] leading-relaxed line-clamp-2 flex-1" style={{ color: "#4f4f4f" }}>
                        {item.summary}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                        <span className="text-sm inline-flex items-center gap-1.5" style={{ color: "#6b7280" }}>
                          <Clock3 className="w-4 h-4" aria-hidden />
                          {item.post.readTime ?? "5-6 min read"}
                        </span>
                        <Button variant="cta" size="sm" className="gap-1.5" asChild>
                          <Link to={`/resources/blog/${item.post.slug}`}>
                            {labels.readMore}
                            <ArrowRight className="w-4 h-4" aria-hidden />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="pb-8 sm:pb-10 lg:pb-12">
          <div className="site-container">
            <div className="rounded-2xl border border-[#146fb5]/15 bg-white p-5 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#1b181f" }}>
                {labels.popularTopics}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {popularTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSearchQuery(topic)}
                    className="rounded-full border border-[#146fb5]/20 px-4 py-2 text-sm font-medium text-[#146fb5] bg-[#146fb5]/[0.05] hover:bg-[#146fb5]/10 hover:border-[#146fb5]/35 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
          <div className="site-container">
            <div className="relative rounded-3xl border border-[#146fb5]/15 bg-gradient-to-br from-[#eaf4ff] via-[#f4f9ff] to-[#fef9c3]/30 p-7 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(20,111,181,0.1)]">
              <div className="absolute inset-0 opacity-40 pointer-events-none rounded-3xl" style={{ backgroundImage: "radial-gradient(500px circle at 0% 0%, rgba(20,111,181,0.18), transparent 60%)" }} />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-tight mb-4" style={{ color: "#1b181f" }}>
                  {labels.ctaTitle}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "#4f4f4f" }}>
                  {labels.ctaText}
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button size="lg" variant="cta" className="w-full sm:w-auto min-w-[200px]" asChild>
                  <Link to="/products">{labels.exploreProducts}</Link>
                </Button>
                <Button size="lg" variant="hero-outline" className="w-full sm:w-auto min-w-[220px]" asChild>
                  <Link to="/resources">{labels.readResources}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
