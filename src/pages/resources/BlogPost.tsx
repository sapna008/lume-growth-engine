import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { getBlogPostBySlug, getListingBlurb } from "@/data/blogPosts";
import { getBlogPostBody } from "@/components/blog/postBodies/registry";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const Body = slug ? getBlogPostBody(slug) : undefined;

  const title = post
    ? language === "HI"
      ? post.titleHI
      : post.title
    : language === "HI"
      ? "लेख नहीं मिला"
      : "Article not found";

  const metaDescription = post ? getListingBlurb(post, language) : "Retail insights and guides from Lume.";

  useSEO(post ? `${post.title} | Lume Blog` : "Blog | Lume", metaDescription);

  const lead = post ? getListingBlurb(post, language) : "";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <article className="container-wide max-w-3xl mx-auto">
          <Button variant="ghost" size="sm" className="mb-8 -ml-2 gap-1 text-[var(--brand)]" asChild>
            <Link to="/resources/blog">
              <ArrowLeft className="w-4 h-4" />
              {language === "HI" ? "ब्लॉग पर वापस" : "Back to Blog"}
            </Link>
          </Button>

          {post && (post.category || post.readTime) && (
            <div className="flex flex-wrap items-center gap-2 text-sm mb-4" style={{ color: "#6b7280" }}>
              {post.category && (
                <span className="inline-flex items-center rounded-full border border-[rgb(var(--brand-rgb)/0.25)] bg-[rgb(var(--brand-rgb)/0.08)] px-2.5 py-0.5 font-medium text-[var(--brand)]">
                  {post.category}
                </span>
              )}
              {post.readTime && <span>{post.readTime}</span>}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6" style={{ color: "#1b181f" }}>
            {title}
          </h1>

          {!post && (
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#4f4f4f" }}>
              {language === "HI"
                ? "यह लेख अभी उपलब्ध नहीं है या लिंक गलत है।"
                : "This article is not available yet, or the link may be incorrect."}
            </p>
          )}

          {post && Body && (
            <>
              <p className="text-lg leading-relaxed mb-10 pb-2 border-b border-gray-100" style={{ color: "#4f4f4f" }}>
                {lead}
              </p>
              <Body />
            </>
          )}

          {post && !Body && (
            <>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#4f4f4f" }}>
                {lead}
              </p>
              <div
                className="rounded-xl border border-dashed border-[rgb(var(--brand-rgb)/0.3)] bg-[var(--brand)]/[0.06] p-6 sm:p-8 text-center"
                role="status"
              >
                <p className="text-sm sm:text-base font-medium" style={{ color: "#1b181f" }}>
                  {language === "HI"
                    ? "पूरा लेख जल्द यहाँ दिखेगा।"
                    : "Full article content will appear here in a future update."}
                </p>
              </div>
            </>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
