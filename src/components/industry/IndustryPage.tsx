import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Megaphone,
  Boxes,
  MessageCircle,
  ReceiptIndianRupee,
  HeartHandshake,
  Sparkles,
  ShoppingCart,
  ShieldCheck,
  Repeat,
  BarChart3,
  PackageCheck,
  Store,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import type { IndustryPageConfig } from "@/data/industryPages";
import { cn } from "@/lib/utils";

export type { IndustryPageConfig };

const heroHighlightPalette = [
  {
    bg: "linear-gradient(135deg, rgba(196,181,253,0.32), rgba(233,213,255,0.46))",
    border: "rgba(139,92,246,0.25)",
    iconBg: "rgba(139,92,246,0.16)",
    iconColor: "#7c3aed",
    shadow: "0 10px 22px rgba(124,58,237,0.12)",
  },
  {
    bg: "linear-gradient(135deg, rgba(153,246,228,0.35), rgba(204,251,241,0.5))",
    border: "rgba(13,148,136,0.22)",
    iconBg: "rgba(13,148,136,0.14)",
    iconColor: "#0f766e",
    shadow: "0 10px 22px rgba(15,118,110,0.11)",
  },
  {
    bg: "linear-gradient(135deg, rgba(253,186,116,0.34), rgba(254,215,170,0.5))",
    border: "rgba(234,88,12,0.2)",
    iconBg: "rgba(234,88,12,0.13)",
    iconColor: "#c2410c",
    shadow: "0 10px 22px rgba(194,65,12,0.1)",
  },
  {
    bg: "linear-gradient(135deg, rgba(251,207,232,0.35), rgba(254,226,226,0.5))",
    border: "rgba(225,29,72,0.2)",
    iconBg: "rgba(225,29,72,0.12)",
    iconColor: "#be123c",
    shadow: "0 10px 22px rgba(190,18,60,0.1)",
  },
] as const;

function getHeroHighlightIcon(label: string) {
  const key = label.toLowerCase();
  if (key.includes("promotion") || key.includes("offer") || key.includes("retarget")) return Megaphone;
  if (key.includes("inventory") || key.includes("stock")) return Boxes;
  if (key.includes("whatsapp")) return MessageCircle;
  if (key.includes("billing") || key.includes("checkout")) return ReceiptIndianRupee;
  if (key.includes("loyalty")) return HeartHandshake;
  if (key.includes("bundle") || key.includes("combo")) return Sparkles;
  if (key.includes("buyer") || key.includes("customer")) return Repeat;
  if (key.includes("warranty")) return ShieldCheck;
  if (key.includes("sales") || key.includes("value")) return BarChart3;
  if (key.includes("item")) return PackageCheck;
  if (key.includes("kirana")) return Store;
  return ShoppingCart;
}

/** Replace with actual image when assets are ready */
function ImagePlaceholder({ className, label }: { className?: string; label: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-muted/80 flex flex-col items-center justify-center text-center p-6 min-h-[200px] text-muted-foreground",
        className
      )}
      aria-hidden
    >
      <span className="text-xs font-medium uppercase tracking-wide mb-1">Image placeholder</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

/** Benefits: main shape (subtle) + decor distributed around image edges — not hero */
function IndustryBenefitsVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative isolate ml-auto w-full max-w-[88%] overflow-visible sm:max-w-[92%] lg:sticky lg:top-28">
      <div className="relative overflow-visible px-1 pb-2 pt-1 sm:px-2 sm:pb-3 sm:pt-2">
        {/* L1 — main background (soft, slightly right-biased; not a full edge-to-edge block) */}
        <div
          className="pointer-events-none absolute right-[6%] top-[12%] z-0 h-[76%] w-[58%] rounded-[1.65rem] bg-gradient-to-br from-cyan-400/24 to-blue-500/16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[18%] top-[22%] z-0 h-[48%] w-[52%] rounded-full bg-cyan-300/18 blur-3xl"
          aria-hidden
        />

        {/* Decoration — outside / beside image (z below image) */}
        <div
          className="pointer-events-none absolute -right-1 top-0 z-[1] h-[3.5rem] w-[3.5rem] rounded-full border-2 border-cyan-400/42 opacity-90 sm:h-14 sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-2 bottom-0 z-[1] h-[6.25rem] w-[7rem] rounded-2xl opacity-[0.28] [background-image:radial-gradient(circle,rgba(34,211,238,0.55)_1px,transparent_1px)] [background-size:14px_14px] sm:h-28 sm:w-[7.5rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-0 top-[46%] z-[1] h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400/55 sm:h-2.5 sm:w-2.5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[20%] right-1 z-[1] h-2 w-2 rounded-full bg-sky-400/55 sm:h-2.5 sm:w-2.5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[-2px] right-[18%] z-[1] h-2 w-2 rounded-full bg-blue-500/45"
          aria-hidden
        />
        <div className="pointer-events-none absolute -bottom-1 -right-1 z-[1] h-14 w-14 overflow-visible opacity-50 sm:h-16 sm:w-16" aria-hidden>
          <div className="absolute bottom-0 right-0 h-[5.25rem] w-[5.25rem] rounded-full border-2 border-dashed border-cyan-400/38 sm:h-[5.75rem] sm:w-[5.75rem]" />
        </div>

        <div className="relative z-10 mx-4 my-3 sm:mx-5 sm:my-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-cyan-500/14">
            <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Overview: same language — purple palette; decor around edges, main shape soft left */
function IndustryOverviewVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative ml-auto w-full max-w-[88%] overflow-visible sm:max-w-[92%]">
      <div className="relative overflow-visible px-1 pb-2 pt-1 sm:px-2 sm:pb-3 sm:pt-2">
        <div
          className="pointer-events-none absolute left-[8%] top-[14%] z-0 h-[74%] w-[56%] rounded-[1.5rem] bg-gradient-to-br from-violet-300/26 to-purple-400/18"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[14%] top-[24%] z-0 h-[46%] w-[48%] rounded-full opacity-95 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.12), rgba(167, 139, 250, 0.14) 45%, transparent 70%)",
          }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute -left-1 top-1 z-[1] h-[3.5rem] w-[3.5rem] rounded-full border-2 border-violet-400/42 opacity-90 sm:h-14 sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-2 bottom-0 z-[1] h-[6.25rem] w-[7rem] rounded-2xl opacity-[0.28] [background-image:radial-gradient(circle,rgba(167,139,250,0.55)_1px,transparent_1px)] [background-size:14px_14px] sm:h-28 sm:w-[7.5rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-[40%] z-[1] h-2 w-2 -translate-y-1 rounded-full bg-fuchsia-400/55 sm:h-2.5 sm:w-2.5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[28%] left-1 z-[1] h-2 w-2 rounded-full bg-violet-500/55 sm:h-2.5 sm:w-2.5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[10%] right-[8%] z-[1] h-2 w-2 rounded-full bg-purple-500/45"
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-1 bottom-0 z-[1] h-14 w-14 overflow-visible opacity-50 sm:h-16 sm:w-16" aria-hidden>
          <div className="absolute -bottom-1 -left-1 h-[5.25rem] w-[5.25rem] rounded-full border-2 border-dashed border-violet-400/38 sm:h-[5.75rem] sm:w-[5.75rem]" />
        </div>

        <div className="relative z-10 mx-4 my-3 sm:mx-5 sm:my-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-violet-400/18">
            <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroImageComposition({
  mainSrc,
  secondarySrc1,
  secondarySrc2,
  alt,
}: {
  mainSrc: string;
  secondarySrc1: string;
  secondarySrc2: string;
  alt: string;
}) {
  return (
    <div className="relative z-20 isolate w-full max-w-[22rem] sm:max-w-sm lg:max-w-md xl:max-w-lg py-5 sm:py-7">
      {/* z-0: soft blue glow behind backplate (readable on light hero bg) */}
      <div
        className="absolute z-0 right-[-12%] top-[2%] h-[92%] w-[108%] rounded-[2rem] blur-2xl opacity-50"
        style={{
          background: "radial-gradient(circle at 65% 42%, rgba(59,130,246,0.28), transparent 68%)",
        }}
        aria-hidden
      />
      {/* z-0: bright backplate — clearly visible under images */}
      <div
        className="absolute z-0 right-[-9%] top-[5%] h-[90%] w-[100%] rounded-[2rem] shadow-2xl shadow-blue-600/40 ring-1 ring-white/35"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute z-0 right-[-5%] top-[9%] h-[82%] w-[92%] rounded-[2rem] opacity-95 blur-xl"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255,255,255,0.5) 0%, rgba(96,165,250,0.12) 40%, transparent 65%)",
        }}
        aria-hidden
      />

      {/* z-10: decorative patterns AROUND the cluster (partially outside image bounds) */}
      <div
        className="pointer-events-none absolute z-10 -top-3 -right-5 h-32 w-32 rounded-full border-[3px] border-[#3b82f6]/85 shadow-[0_0_28px_rgba(59,130,246,0.45)] sm:h-36 sm:w-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-10 top-1/4 -right-9 h-[4.5rem] w-[4.5rem] rounded-full bg-[#60a5fa]/60 shadow-[0_0_24px_rgba(37,99,235,0.45)] blur-[1px] sm:-right-11 sm:h-24 sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-10 -bottom-5 -left-7 h-40 w-40 rounded-full border-[3px] border-dashed border-[#2563eb]/80 shadow-[0_0_22px_rgba(37,99,235,0.35)] sm:h-44 sm:w-44"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-10 bottom-[16%] -left-11 h-3 w-28 rotate-[-25deg] rounded-full bg-gradient-to-r from-[#60a5fa]/70 to-transparent shadow-sm sm:w-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute z-10 top-[10%] -left-6 h-24 w-24 opacity-80 sm:h-28 sm:w-28"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.55) 1.75px, transparent 0)",
          backgroundSize: "11px 11px",
        }}
        aria-hidden
      />

      {/* z-20: images on top */}
      {/* Desktop / large screens: layered composition */}
      <div className="relative z-20 hidden sm:block">
        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/80 bg-white shadow-2xl shadow-black/20">
          <img
            src={mainSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        <div className="absolute -top-4 -left-4 z-30 w-[38%] origin-center rounded-2xl overflow-hidden border-2 border-white bg-white shadow-2xl shadow-black/30 ring-2 ring-[#146fb5]/15 -rotate-[1.5deg] scale-[0.97]">
          <img
            src={secondarySrc1}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        <div className="absolute -bottom-4 -right-4 z-30 w-[36%] origin-center rounded-2xl overflow-hidden border-2 border-white bg-white shadow-2xl shadow-black/30 ring-2 ring-[#146fb5]/15 rotate-[1.5deg] scale-[0.97]">
          <img
            src={secondarySrc2}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
      </div>

      {/* Small screens: stack for clarity */}
      <div className="relative z-20 sm:hidden space-y-3">
        <div className="rounded-2xl overflow-hidden border-2 border-white/80 bg-white shadow-2xl shadow-black/15">
          <img
            src={mainSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="origin-center rounded-xl overflow-hidden border-2 border-white bg-white shadow-2xl shadow-black/25 ring-1 ring-[#146fb5]/10 -rotate-[1deg] scale-[0.98]">
            <img
              src={secondarySrc1}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="origin-center rounded-xl overflow-hidden border-2 border-white bg-white shadow-2xl shadow-black/25 ring-1 ring-[#146fb5]/10 rotate-[1deg] scale-[0.98]">
            <img
              src={secondarySrc2}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryPage({ config }: { config: IndustryPageConfig }) {
  useSEO(config.seoTitle, config.seoDescription);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — soft blue-tinted gradient (homepage-adjacent); subtle radial depth near images */}
      <section className="relative overflow-x-hidden overflow-y-visible pt-24 lg:pt-28 pb-12 lg:pb-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 75% 40%, rgba(59,130,246,0.08), transparent 60%), linear-gradient(to bottom, #f8fafc 0%, #eef4ff 50%, #e6f0ff 100%)",
          }}
          aria-hidden
        />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-display font-bold leading-tight mb-5 tracking-tight text-gray-900">
                {config.heroTitle}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-gray-600">
                {config.heroSubtext}
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-xl">
                {config.heroHighlights.map((item, idx) => {
                  const Icon = getHeroHighlightIcon(item);
                  const palette = heroHighlightPalette[idx % heroHighlightPalette.length];
                  return (
                  <div
                    key={item}
                    className="rounded-xl border px-3 py-3 sm:px-3.5 sm:py-3.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[102px] sm:min-h-[110px]"
                    style={{
                      background: palette.bg,
                      borderColor: palette.border,
                      boxShadow: palette.shadow,
                    }}
                  >
                    <div className="flex items-start gap-2.5 mb-1.5">
                      <span
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: palette.iconBg }}
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: palette.iconColor }} />
                      </span>
                      <p className="text-xs sm:text-sm font-bold leading-snug text-[#1b181f] pt-0.5">
                        {item}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs leading-snug text-[#4f4f4f]" style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                        {config.heroHighlightLines[idx] ?? "Built to support high-velocity retail"}
                      </p>
                    </div>
                  </div>
                )})}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative z-20 flex justify-center lg:justify-end"
            >
              {config.heroMainImage && config.secondaryImage1 && config.secondaryImage2 ? (
                <HeroImageComposition
                  mainSrc={config.heroMainImage}
                  secondarySrc1={config.secondaryImage1}
                  secondarySrc2={config.secondaryImage2}
                  alt={`${config.categoryLabel} store visual`}
                />
              ) : (
                // replace with actual image
                <ImagePlaceholder
                  className="w-full max-w-sm lg:max-w-md aspect-[4/3]"
                  label={`${config.categoryLabel} hero visual`}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 lg:py-20 bg-white border-b border-border/60">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8" style={{ color: "#1b181f" }}>
                {config.benefitsHeading}
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {config.benefitBlocks.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-border/60 bg-secondary/30 p-5 transition-colors hover:bg-[#146fb5]/5 hover:border-[#146fb5]/20"
                  >
                    <p className="text-2xl font-bold text-[#146fb5] font-display mb-2">{b.metric}</p>
                    <p className="font-semibold text-foreground mb-2">{b.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {config.benefitsImage ? (
                <IndustryBenefitsVisual
                  src={config.benefitsImage}
                  alt={`${config.categoryLabel} retail — benefits`}
                />
              ) : (
                <div className="lg:sticky lg:top-28">
                  <ImagePlaceholder className="w-full aspect-[4/3]" label={`${config.categoryLabel} benefits visual`} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industry overview */}
      <section className="py-14 lg:py-20 bg-muted/40">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6" style={{ color: "#1b181f" }}>
                {config.overviewTitle}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {config.overviewParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                to={config.overviewLearnMoreHref}
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#146fb5] hover:underline"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              {config.overviewImage ? (
                <IndustryOverviewVisual
                  src={config.overviewImage}
                  alt={`${config.categoryLabel} retail — overview`}
                />
              ) : (
                <ImagePlaceholder className="w-full aspect-[4/3]" label={`${config.categoryLabel} overview visual`} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-10 lg:mb-14" style={{ color: "#1b181f" }}>
            Features that fit your store
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {config.featureCards.map((f) => (
              <Link
                key={f.title}
                to={f.learnMoreHref}
                className="group flex flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:bg-secondary/40 hover:border-[#146fb5]/25"
              >
                <div className="w-12 h-12 rounded-xl bg-[#146fb5]/10 flex items-center justify-center text-[#146fb5] mb-4 group-hover:bg-[#146fb5]/15 transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#146fb5] transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{f.description}</p>
                <span className="text-sm font-semibold text-[#146fb5] inline-flex items-center gap-1">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 relative overflow-hidden bg-gradient-to-br from-[#146fb5] via-[#1a7fc7] to-[#0d5a94] text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.25),_transparent_50%)]" />
        <div className="container-wide relative text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">{config.ctaTitle}</h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed">{config.ctaSubtext}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
