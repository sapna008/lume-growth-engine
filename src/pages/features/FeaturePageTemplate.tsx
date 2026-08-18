import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle, LucideIcon } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

type LocalizedText = {
  en: string;
  hi: string;
};

type CardItem = {
  icon: LucideIcon;
  title: LocalizedText;
  desc: LocalizedText;
};

type StatItem = {
  value: string;
  label: LocalizedText;
  desc: LocalizedText;
  bg: string;
  border: string;
  color: string;
};

type StepItem = {
  title: LocalizedText;
  desc: LocalizedText;
};

type FaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

type WhyItem = {
  title: LocalizedText;
  desc: LocalizedText;
};

type FeaturePageTemplateProps = {
  seoTitle: string;
  seoDescription: string;
  heroBadge: LocalizedText;
  heroTitle: LocalizedText;
  heroSubtitle: LocalizedText;
  heroImage?: string;
  heroImageAlt: string;
  heroVideo?: {
    en: string;
    hi: string;
  };
  heroMediaClassName?: string;
  heroUseDeviceFrame?: boolean;
  heroUseCardFrame?: boolean;
  heroCtaTargetId: string;
  stats: StatItem[];
  benefitsHeading: LocalizedText;
  benefitsSubheading: LocalizedText;
  benefits: CardItem[];
  stepsHeading: LocalizedText;
  steps: StepItem[];
  whyHeading: LocalizedText;
  whySubheading: LocalizedText;
  whyItems: WhyItem[];
  faqsHeading: LocalizedText;
  faqsSubheading: LocalizedText;
  faqs: FaqItem[];
  finalCtaTitle: LocalizedText;
  finalCtaText: LocalizedText;
};

export default function FeaturePageTemplate(props: FeaturePageTemplateProps) {
  const { language } = useLanguage();
  useSEO(props.seoTitle, props.seoDescription);

  const t = (v: LocalizedText) => (language === "HI" ? v.hi : v.en);
  const heroMediaClassName =
    props.heroMediaClassName ?? "w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl";
  const heroMediaSrc = props.heroVideo
    ? language === "HI"
      ? props.heroVideo.hi
      : props.heroVideo.en
    : undefined;
  const faqSchemaItems = props.faqs.map((faq) => ({
    question: t(faq.question),
    answer: t(faq.answer),
  }));

  return (
    <div className="min-h-screen bg-background">
      <FaqJsonLd faqs={faqSchemaItems} />
      <Header />

      <section className="hero-section relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(140deg, #f5f3fc 0%, #e8eaf8 25%, #dce4f4 50%, #d0dcef 75%, #b8d0e8 100%)",
          }}
        />
        <div
          className="absolute -z-10 w-[80%] h-[70%] -top-[15%] -left-[15%]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(255,255,255,0.6) 0%, rgba(240,245,255,0.2) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute -z-10 w-[70%] h-[80%] -bottom-[20%] -right-[10%]"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 90% 90%, rgba(20,111,181,0.08) 0%, rgba(180,210,235,0.15) 40%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #146fb5 1px, transparent 0)", backgroundSize: "28px 28px" }} />

        <div className="site-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-[#146fb5]/25 mb-6">
                <span className="text-sm font-semibold" style={{ color: "#146fb5" }}>
                  {t(props.heroBadge)}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-display font-bold leading-[1.15] mb-5 tracking-tight" style={{ color: "#1b181f" }}>
                {t(props.heroTitle)}
              </h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-5 max-w-lg leading-relaxed" style={{ color: "#4f4f4f" }}>
                {t(props.heroSubtitle)}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                {props.heroUseDeviceFrame && heroMediaSrc ? (
                  <>
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                      <div className="h-[78%] w-[78%] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,111,181,0.22)_0%,rgba(20,111,181,0.10)_38%,rgba(20,111,181,0)_70%)] blur-2xl" />
                    </div>
                    <div className={`${heroMediaClassName} relative rounded-[2.2rem] bg-gradient-to-b from-[#0f1117] to-[#06080f] p-[6px] shadow-[0_30px_70px_rgba(15,23,42,0.38),0_8px_20px_rgba(2,8,23,0.35)]`}>
                      <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-black">
                        <video
                          src={heroMediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </>
                ) : props.heroUseCardFrame ? (
                  <div className="relative rounded-2xl border border-white/60 bg-white/70 p-2 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur-[1px]">
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(20,111,181,0.16),rgba(20,111,181,0.02)_55%,transparent_72%)] blur-xl" />
                    {props.heroVideo ? (
                      <video
                        src={heroMediaSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`${heroMediaClassName} rounded-xl border border-[#146fb5]/10 shadow-sm`}
                      />
                    ) : (
                      <img src={props.heroImage} alt={props.heroImageAlt} className={`${heroMediaClassName} rounded-xl border border-[#146fb5]/10 shadow-sm`} />
                    )}
                  </div>
                ) : props.heroVideo ? (
                  <video
                    src={heroMediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${heroMediaClassName} drop-shadow-2xl rounded-xl`}
                  />
                ) : (
                  <img src={props.heroImage} alt={props.heroImageAlt} className={`${heroMediaClassName} drop-shadow-xl rounded-xl`} />
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id={props.heroCtaTargetId} className="section-spacing bg-white relative scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="site-container relative">
          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 mb-14 lg:mb-20">
            {props.stats.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${card.bg} ${card.border} rounded-2xl p-6 lg:p-8 text-center border shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-3xl lg:text-4xl font-extrabold mb-1 tracking-tight" style={{ color: card.color }}>{card.value}</div>
                <div className="text-sm font-semibold mb-3" style={{ color: card.color }}>{t(card.label)}</div>
                <p className="text-sm leading-relaxed" style={{ color: "#1b181f" }}>{t(card.desc)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3" style={{ color: "#1b181f" }}>{t(props.benefitsHeading)}</h2>
            <p className="text-base" style={{ color: "#4f4f4f" }}>{t(props.benefitsSubheading)}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {props.benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-gradient-to-b from-white to-primary/10 border border-[#146fb5]/15 rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl hover:border-[#146fb5]/30 hover:ring-2 hover:ring-[#146fb5]/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5 text-[#146fb5] border border-[#146fb5]/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#146fb5]/15 transition-all duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1b181f" }}>{t(item.title)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>{t(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-b from-primary/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(20,111,181,0.06),transparent)] pointer-events-none" />
        <div className="site-container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold" style={{ color: "#1b181f" }}>{t(props.stepsHeading)}</h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {props.steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] h-full relative pt-10 sm:pt-12 border border-gray-100">
                    <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white" style={{ background: "#146fb5" }}>
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "#1b181f" }}>{t(s.title)}</h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4f4f4f" }}>{t(s.desc)}</p>
                  </div>
                  {i < props.steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-0">
                      <ArrowRight className="w-6 h-6" style={{ color: "#b6c6d6" }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="site-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3" style={{ color: "#1b181f" }}>{t(props.whyHeading)}</h2>
            <p className="text-base" style={{ color: "#4f4f4f" }}>{t(props.whySubheading)}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {props.whyItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="rounded-2xl border border-[#146fb5]/15 p-6 lg:p-8 bg-gradient-to-b from-white to-primary/5">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1b181f" }}>{t(item.title)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>{t(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-b from-primary/20 to-white">
        <div className="site-container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3" style={{ color: "#1b181f" }}>{t(props.faqsHeading)}</h2>
            <p className="text-base" style={{ color: "#4f4f4f" }}>{t(props.faqsSubheading)}</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {props.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.08 }} className="rounded-2xl border border-[#146fb5]/15 bg-white p-5 lg:p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 mt-0.5 text-[#146fb5] shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#1b181f" }}>{t(faq.question)}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>{t(faq.answer)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(20,111,181,0.06),transparent)] pointer-events-none" />
        <div className="site-container relative">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-[#146fb5]/15 via-primary/25 to-[#146fb5]/10 border border-[#146fb5]/25 shadow-xl shadow-[#146fb5]/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #146fb5 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#146fb5]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" style={{ color: "#146fb5" }} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1b181f" }}>{t(props.finalCtaTitle)}</h3>
              <p className="text-base mb-6" style={{ color: "#4f4f4f" }}>{t(props.finalCtaText)}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
