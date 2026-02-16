import { useState, useCallback, useRef, useEffect } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const YOUTUBE_SHORTS_EMBED_URL = "https://www.youtube.com/embed/ojflp89LdjE?si=yexUA-GgIrB1zeD9";

const MIN_WIDTH = 140;
const MIN_HEIGHT = 249;
const MAX_WIDTH = 280;
const MAX_HEIGHT = 499;
const DEFAULT_WIDTH = 160;
const DEFAULT_HEIGHT = 284;

export function FloatingYouTubeShorts() {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isResizing, setIsResizing] = useState(false);
  const startRef = useRef({ x: 0, y: 0, w: 0, h: 0 });

  const toggleExpand = useCallback(() => {
    if (isExpanded) {
      setWidth(DEFAULT_WIDTH);
      setHeight(DEFAULT_HEIGHT);
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

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
      const dx = e.clientX - startRef.current.x;
      const dy = e.clientY - startRef.current.y;
      setWidth((w) => Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startRef.current.w + dx)));
      setHeight((h) => Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, startRef.current.h + dy)));
    },
    [isResizing]
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
      {/* Header: title + controls */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-between gap-1 border-b border-border bg-muted/50",
          isExpanded ? "px-3 py-2" : "px-1.5 py-1"
        )}
      >
        <span
          className={cn(
            "truncate font-medium text-muted-foreground",
            isExpanded ? "text-sm" : "text-[10px]"
          )}
        >
          Short
        </span>
        <div className="flex items-center gap-0.5">
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
          src={YOUTUBE_SHORTS_EMBED_URL}
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
