import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getBlogImageSrc, getListingBlurb, type BlogPostPreview } from "@/data/blogPosts";

export interface FeaturedBlogProps {
  post: BlogPostPreview;
  language: "EN" | "HI";
  className?: string;
}

export function FeaturedBlog({ post, language, className }: FeaturedBlogProps) {
  const title = language === "HI" ? post.titleHI : post.title;
  const description = getListingBlurb(post, language);
  const imageSrc = getBlogImageSrc(post);

  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white shadow-md overflow-hidden flex flex-col md:flex-row md:min-h-[280px] lg:min-h-[320px] transition-shadow duration-300 hover:shadow-xl hover:border-[#146fb5]/20",
        className,
      )}
    >
      <div className="relative md:w-[46%] lg:w-[42%] shrink-0 min-h-[200px] sm:min-h-[220px] md:min-h-0 bg-gradient-to-br from-[#146fb5]/12 via-[#e8f2fb] to-[#fef9c3]/40">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-center flex-1 p-6 sm:p-8 lg:p-10">
        <span className="inline-flex self-start items-center rounded-full border border-[#146fb5]/25 bg-[#146fb5]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#146fb5] mb-4">
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
