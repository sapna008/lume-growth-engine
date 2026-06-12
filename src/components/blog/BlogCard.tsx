import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getListingBlurb, type BlogPostPreview } from "@/data/blogPosts";

export interface BlogCardProps {
  post: BlogPostPreview;
  language: "EN" | "HI";
  className?: string;
}

export function BlogCard({ post, language, className }: BlogCardProps) {
  const title = language === "HI" ? post.titleHI : post.title;
  const description = getListingBlurb(post, language);

  return (
    <article
      className={cn(
        "group flex flex-col h-full bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[rgb(var(--brand-rgb)/0.3)] transition-all duration-300 overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[rgb(var(--brand-rgb)/0.12)] via-[#e8f2fb] to-[#fef9c3]/40">
        {post.imageSrc ? (
          <img
            src={post.imageSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-xl bg-[rgb(var(--brand-rgb)/0.1)] p-4">
              <Newspaper className="h-10 w-10 sm:h-12 sm:w-12" style={{ color: "var(--brand)" }} aria-hidden />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold leading-snug mb-2" style={{ color: "#1b181f" }}>
          {title}
        </h2>
        <p
          className="text-sm sm:text-[0.95rem] leading-relaxed flex-1 line-clamp-2"
          style={{ color: "#4f4f4f" }}
        >
          {description}
        </p>
        <div className="mt-4 pt-2">
          <Button variant="cta" size="sm" className="w-full justify-center" asChild>
            <Link to={`/resources/blog/${post.slug}`}>
              {language === "HI" ? "और पढ़ें" : "Read More"}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
