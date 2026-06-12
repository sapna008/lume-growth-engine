import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getListingBlurb, type BlogPostPreview } from "@/data/blogPosts";

export interface FeaturedBlogProps {
  post: BlogPostPreview;
  language: "EN" | "HI";
  className?: string;
}

export function FeaturedBlog({ post, language, className }: FeaturedBlogProps) {
  const title = language === "HI" ? post.titleHI : post.title;
  const description = getListingBlurb(post, language);

  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white shadow-md overflow-hidden flex flex-col md:flex-row md:min-h-[280px] lg:min-h-[320px] transition-shadow duration-300 hover:shadow-xl hover:border-[rgb(var(--brand-rgb)/0.2)]",
        className,
      )}
    >
      <div className="relative md:w-[46%] lg:w-[42%] shrink-0 min-h-[200px] sm:min-h-[220px] md:min-h-0 bg-gradient-to-br from-[rgb(var(--brand-rgb)/0.12)] via-[#e8f2fb] to-[#fef9c3]/40">
        {post.imageSrc ? (
          <img
            src={post.imageSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="rounded-2xl bg-[rgb(var(--brand-rgb)/0.1)] p-8">
              <Newspaper className="h-16 w-16 md:h-20 md:w-20" style={{ color: "var(--brand)" }} aria-hidden />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center flex-1 p-6 sm:p-8 lg:p-10">
        <span className="inline-flex self-start items-center rounded-full border border-[rgb(var(--brand-rgb)/0.25)] bg-[rgb(var(--brand-rgb)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand)] mb-4">
          {language === "HI" ? "विशेष" : "Featured"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-4xl font-bold leading-tight mb-4" style={{ color: "#1b181f" }}>
          {title}
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed mb-6 line-clamp-4"
          style={{ color: "#4f4f4f" }}
        >
          {description}
        </p>
        <div>
          <Button variant="cta" size="default" className="shadow-md" asChild>
            <Link to={`/resources/blog/${post.slug}`}>
              {language === "HI" ? "पूरा लेख पढ़ें" : "Read Full Article"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
