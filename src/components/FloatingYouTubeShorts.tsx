import { useState, useCallback, useRef, useEffect } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import lumeLogo from "@/assets/lumelogo.jpg";

// Unmuted by default; some browsers may block autoplay with sound until user interaction
const DEFAULT_VIDEO_ID = "ojflp89LdjE";

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
}

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/the_lume_app/";

const DESKTOP_BREAKPOINT = 768;

// Mobile (chhota) – left corner
const MOBILE_DEFAULT_WIDTH = 180;
const MOBILE_DEFAULT_HEIGHT = 298;
const MOBILE_MIN_WIDTH = 150;
const MOBILE_MIN_HEIGHT = 250;
const MOBILE_MAX_WIDTH = 300;
const MOBILE_MAX_HEIGHT = 500;

// Desktop – left side (thoda chota taaki video upar se na kate)
const DESKTOP_DEFAULT_WIDTH = 300;
const DESKTOP_DEFAULT_HEIGHT = 508;
const DESKTOP_MIN_WIDTH = 240;
const DESKTOP_MIN_HEIGHT = 400;
const DESKTOP_MAX_WIDTH = 400;
const DESKTOP_MAX_HEIGHT = 710;

function getDefaultSize(isDesktop: boolean) {
  return isDesktop
    ? { w: DESKTOP_DEFAULT_WIDTH, h: DESKTOP_DEFAULT_HEIGHT }
    : { w: MOBILE_DEFAULT_WIDTH, h: MOBILE_DEFAULT_HEIGHT };
}

function getMinMax(isDesktop: boolean) {
  return isDesktop
    ? { minW: DESKTOP_MIN_WIDTH, minH: DESKTOP_MIN_HEIGHT, maxW: DESKTOP_MAX_WIDTH, maxH: DESKTOP_MAX_HEIGHT }
    : { minW: MOBILE_MIN_WIDTH, minH: MOBILE_MIN_HEIGHT, maxW: MOBILE_MAX_WIDTH, maxH: MOBILE_MAX_HEIGHT };
}

interface FloatingYouTubeShortsProps {
  /** YouTube Shorts video ID (e.g. from youtube.com/shorts/VIDEO_ID). Default: For Retailers video */
  videoId?: string;
}

export function FloatingYouTubeShorts({ videoId = DEFAULT_VIDEO_ID }: FloatingYouTubeShortsProps) {
  const embedUrl = getEmbedUrl(videoId);
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== "undefined" && window.innerWidth >= DESKTOP_BREAKPOINT);
  const defaultSize = getDefaultSize(isDesktop);
  const [width, setWidth] = useState(defaultSize.w);
  const [height, setHeight] = useState(defaultSize.h);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isResizing, setIsResizing] = useState(false);
  const startRef = useRef({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const handler = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const toggleExpand = useCallback(() => {
    if (isExpanded) {
      const { w, h } = getDefaultSize(isDesktop);
      setWidth(w);
      setHeight(h);
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded, isDesktop]);

  const handleResizeStart = useCallback(
    (e: React.MouseEvent) => {
      if (isExpanded) return;
      e.preventDefault();
      setIsResizing(true);
      startRef.current = { x: e.clientX, y: e.clientY, w: width, h: height };
    },
    [width, height, isExpanded]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;
      const { minW, minH, maxW, maxH } = getMinMax(isDesktop);
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;
      setWidth((w) => Math.min(maxW, Math.max(minW, startRef.current.w + dx)));
      setHeight((h) => Math.min(maxH, Math.max(minH, startRef.current.h + dy)));
    },
    [isResizing, isDesktop]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed z-[9999] flex flex-col overflow-hidden border border-border bg-card transition-all duration-200",
        isExpanded
          ? "inset-0 rounded-none shadow-none"
          : "bottom-4 left-4 rounded-lg shadow-md",
        isResizing && !isExpanded && "shadow-2xl"
      )}
      style={isExpanded ? undefined : { width, height }}
    >
      {/* Header: logo circle + name + blue tick (left) | View profile + controls (right) */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-between gap-2 border-b border-border bg-muted/50",
          isExpanded ? "min-h-10 px-3 py-2" : "min-h-8 px-2 py-1.5"
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          {/* Lume logo in circle */}
          <img
            src={lumeLogo}
            alt="Lume"
            className={cn("shrink-0 rounded-full object-cover", isExpanded ? "h-7 w-7" : "h-5 w-5")}
          />
          <span
            className={cn(
              "truncate font-semibold text-foreground",
              isExpanded ? "text-base" : "text-xs"
            )}
          >
            the_lume_app
          </span>
          {/* Blue verified tick (Instagram style) */}
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full bg-[#0095F6] text-white",
              isExpanded ? "h-4 w-4" : "h-3 w-3"
            )}
            aria-hidden
          >
            <svg
              className={isExpanded ? "h-2.5 w-2.5" : "h-1.5 w-1.5"}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {isDesktop && (
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "shrink-0 rounded bg-[#0095F6] font-semibold text-white transition hover:bg-[#0077C2] focus:outline-none focus:ring-2 focus:ring-[#0095F6] focus:ring-offset-1",
                isExpanded ? "px-3 py-1.5 text-xs" : "px-2 py-1 text-[10px]"
              )}
            >
              View profile
            </a>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={isExpanded ? "h-9 w-9" : "h-6 w-6"}
            onClick={toggleExpand}
            title={isExpanded ? "Chhota karo" : "Full screen"}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-3 w-3" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={isExpanded ? "h-9 w-9" : "h-6 w-6"}
            onClick={() => setIsVisible(false)}
            title="Band karo"
          >
            <X className={isExpanded ? "h-4 w-4" : "h-3 w-3"} />
          </Button>
        </div>
      </div>

      {/* Iframe */}
      <div className="relative flex-1 min-h-0">
        <iframe
          src={embedUrl}
          title="YouTube Short"
          className={cn("absolute inset-0 h-full w-full", isExpanded ? "rounded-none" : "rounded-b-lg")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Resize handle - only when not expanded */}
      {!isExpanded && (
        <div
          role="button"
          tabIndex={0}
          onMouseDown={handleResizeStart}
          className="absolute bottom-0 right-0 z-10 cursor-se-resize p-2"
          style={{ margin: "-2px -2px 0 0" }}
          title="Size badhao – corner se kheecho"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") e.currentTarget.click();
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            className="text-muted-foreground/70"
            aria-hidden
          >
            <path
              d="M14 14L8 8M8 8L2 2M8 8L14 2M8 8L2 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
