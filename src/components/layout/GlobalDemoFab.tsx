import { Link, useLocation } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { trackBookDemoClick } from "@/lib/leadStore";

const hiddenRoutePrefixes = ["/book-demo", "/demo", "/trial", "/admin"];

export function GlobalDemoFab() {
  const { pathname } = useLocation();
  const shouldHide = hiddenRoutePrefixes.some((prefix) => pathname.startsWith(prefix));

  if (shouldHide) {
    return null;
  }

  return (
    <div
      className="fixed right-4 z-[60] sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <Link
        to="/book-demo"
        onClick={() => {
          void trackBookDemoClick();
        }}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgb(var(--brand-rgb)/0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#115f9c] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--brand-rgb)/0.6)] focus-visible:ring-offset-2 sm:px-5 sm:py-3.5 sm:text-base"
        aria-label="Book Demo"
      >
        <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>Book Demo</span>
      </Link>
    </div>
  );
}
