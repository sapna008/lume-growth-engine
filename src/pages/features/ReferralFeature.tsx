import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Gift, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/refer/hero.png";
import whatsappReferImage from "@/assets/refer/whatsapp-refer.png";
import inStoreImage from "@/assets/refer/in-store.png";
import referAnalyticsImage from "@/assets/refer/refer-analytics.png";

const benefits = [
  {
    icon: MessageCircle,
    titleEN: "Easy to communicate",
    titleHI: "संवाद आसान",
    descEN: "Communicating the referrals is a tough task which we have made easier with WhatsApp as a channel.",
    descHI: "रेफरल संवाद करना मुश्किल काम था – हमने WhatsApp से इसे आसान बना दिया।",
  },
  {
    icon: Gift,
    titleEN: "Incentivise the referrer",
    titleHI: "रेफरर को इनाम दें",
    descEN: "Reward your customers for referrals with easy-to-redeem store coupons and watch the sales roll in.",
    descHI: "रेफरल के लिए ग्राहकों को आसानी से रिडीम होने वाले कूपन से इनाम दें और बिक्री बढ़ते देखें।",
  },
  {
    icon: Megaphone,
    titleEN: "Promote store location",
    titleHI: "दुकान का लोकेशन प्रमोट करें",
    descEN: "Send store location with each referral, thereby increasing the chances of successful referral conversion.",
    descHI: "हर रेफरल के साथ दुकान का लोकेशन भेजें, जिससे कन्वर्जन की संभावना बढ़े।",
  },
];

export default function ReferralFeature() {
  const { language } = useLanguage();
  useSEO(
    "WhatsApp-Driven Referrals – Turn Customers into Fans | Lume",
    "Enable one-click referrals via WhatsApp. Reward loyal customers, track referral analytics, grow with word-of-mouth. Book a demo."
  );

  const t = (en: string, hi: string) => (language === "HI" ? hi : en);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero – WhatsApp-Driven Referrals */}
      <section className="relative overflow-hidden pt-24 lg:pt-28 pb-12 lg:pb-16">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(140deg, #f5f3fc 0%, #e8eaf8 25%, #dce4f4 50%, #d0dcef 75%, #b8d0e8 100%)",
          }}
        />
        <div className="absolute -z-10 w-[80%] h-[70%] -top-[15%] -left-[15%]" style={{ background: "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(255,255,255,0.6) 0%, rgba(240,245,255,0.2) 50%, transparent 70%)" }} />
        <div className="absolute -z-10 w-[70%] h-[80%] -bottom-[20%] -right-[10%]" style={{ background: "radial-gradient(ellipse 50% 60% at 90% 90%, rgba(20,111,181,0.08) 0%, rgba(180,210,235,0.15) 40%, transparent 70%)" }} />
        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #146fb5 1px, transparent 0)", backgroundSize: "28px 28px" }} />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-[#146fb5]/25 mb-6">
                <span className="text-sm font-semibold" style={{ color: "#146fb5" }}>
                  {t("WhatsApp-Driven Referrals", "WhatsApp से रेफरल")}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-display font-bold leading-[1.15] mb-5 tracking-tight" style={{ color: "#1b181f" }}>
                {t("Turn customers to ", "ग्राहकों को ")}
                <span style={{ color: "#146fb5" }}>{t("life-long fans", "जीवन भर के फैन")}</span>
                {t(" of your store", " बनाएं")}
              </h1>
              <p className="text-base sm:text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "#4f4f4f" }}>
                {t(
                  "Enable one-click referrals via WhatsApp and reward your most loyal customers with perks. Turn your advocates into revenue-drivers.",
                  "WhatsApp से एक-क्लिक रेफरल चालू करें और वफादार ग्राहकों को इनाम दें। अपने अडवोकेट्स को रेवेन्यू ड्राइवर बनाएं।"
                )}
              </p>
              <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                <Button size="lg" asChild variant="hero" className="rounded-xl px-4 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold shadow-xl shadow-[#146fb5]/25 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex-1 sm:flex-initial min-w-0">
                  <Link to="/book-demo" className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                    <span className="truncate">{t("Book a demo", "डेमो बुक करें")}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  type="button"
                  className="rounded-xl px-4 py-4 sm:px-8 sm:py-6 text-sm sm:text-base border-2 border-[#146fb5]/40 hover:bg-[#146fb5]/10 hover:border-[#146fb5]/60 transition-all duration-300 flex-1 sm:flex-initial min-w-0"
                  style={{ color: "#146fb5" }}
                  onClick={() => document.getElementById("referral-features")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  <span className="truncate block">{t("See all features", "सभी फ़ीचर्स देखें")}</span>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <img src={heroImage} alt="Referrals – WhatsApp, megaphone, customers" className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-xl rounded-xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats – 35%, 10x, 92% */}
      <section className="pt-16 lg:pt-24 pb-12 lg:pb-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container-wide relative">
          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 mb-14 lg:mb-20">
            {[
              { value: "35%", labelEN: "More customers", labelHI: "ज्यादा ग्राहक", descEN: "Referrals contribute to 35% of new sales or customers", descHI: "रेफरल नई बिक्री या ग्राहकों का 35% योगदान करते हैं", bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5", border: "border-[#146fb5]/20", color: "#146fb5" },
              { value: "10x", labelEN: "More effective", labelHI: "ज्यादा असरदार", descEN: "Customers rely on referrals up to 10X more than paid media", descHI: "ग्राहक पेड मीडिया से 10 गुना ज्यादा रेफरल पर भरोसा करते हैं", bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", color: "#10b981" },
              { value: "92%", labelEN: "Of customers", labelHI: "ग्राहक", descEN: "Trust referrals from people they know for a purchase", descHI: "खरीद के लिए जान-पहचान वालों के रेफरल पर भरोसा करते हैं", bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", color: "#f59e0b" },
            ].map((card, i) => (
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
                <div className="text-sm font-semibold mb-3" style={{ color: card.color }}>{t(card.labelEN, card.labelHI)}</div>
                <p className="text-sm leading-relaxed" style={{ color: "#1b181f" }}>{t(card.descEN, card.descHI)}</p>
              </motion.div>
            ))}
          </div>

          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-center max-w-4xl mx-auto mb-14 lg:mb-20 leading-snug" style={{ color: "#1b181f" }}>
            {t("Grow your business reach with a ", "वर्ड-ऑफ-माउथ से बिज़नेस रीच बढ़ाएं – ")}
            <span className="bg-gradient-to-r from-[#146fb5] to-[#0ea5e9] bg-clip-text text-transparent">{t("word-of-mouth strategy", "वर्ड-ऑफ-माउथ स्ट्रैटेजी")}</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { icon: MessageCircle, titleEN: "Easy to communicate", titleHI: "संवाद आसान", descEN: "Communicating the referrals is a tough task which we have made easier with WhatsApp as a channel.", descHI: "रेफरल संवाद करना मुश्किल था – WhatsApp से हमने इसे आसान बना दिया।" },
              { icon: Gift, titleEN: "Incentivise the referrer", titleHI: "रेफरर को इनाम दें", descEN: "Reward your customers for referrals with easy-to-redeem store coupons and watch the sales roll in.", descHI: "रेफरल के लिए ग्राहकों को आसान कूपन से इनाम दें और बिक्री बढ़ते देखें।" },
              { icon: Megaphone, titleEN: "Promote store location", titleHI: "दुकान लोकेशन प्रमोट करें", descEN: "Send store location with each referral, thereby increasing the chances of successful referral conversion.", descHI: "हर रेफरल के साथ दुकान का लोकेशन भेजें, कन्वर्जन बढ़ेगा।" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -4 }} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#146fb5]/20 to-[#146fb5]/5 flex items-center justify-center mx-auto mb-5 text-[#146fb5] border border-[#146fb5]/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#146fb5]/20 transition-all duration-300">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1b181f" }}>{t(item.titleEN, item.titleHI)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>{t(item.descEN, item.descHI)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 feature blocks – alternating image + text */}
      <section id="referral-features" className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-gradient-to-b from-primary/30 to-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(20,111,181,0.06),transparent)] pointer-events-none" />
        <div className="container-wide relative space-y-12 lg:space-y-16">
          {[
            { image: whatsappReferImage, imageAlt: "One-click WhatsApp referral", pillEN: "One-click WhatsApp referral", pillHI: "एक-क्लिक WhatsApp रेफरल", headingEN: "Run referrals where your customers are", headingHI: "रेफरल वहां चलाएं जहां आपके ग्राहक हैं", bodyEN: "Enable your customers to send one-click referrals via WhatsApp that enroll at a 30% higher efficiency.", bodyHI: "ग्राहक WhatsApp से एक-क्लिक रेफरल भेज सकें, 30% ज्यादा एफिशिएंसी के साथ।", imageFirst: true },
            { image: inStoreImage, imageAlt: "In-store redeemable codes", pillEN: "Personal referral codes", pillHI: "पर्सनल रेफरल कोड", headingEN: "In-store redeemable codes", headingHI: "इन-स्टोर रिडीम कोड", bodyEN: "Let your advocates share referrals with their mobile number as the referral code to be mentioned at billing.", bodyHI: "अपने अडवोकेट्स मोबाइल नंबर को रेफरल कोड की तरह बिलिंग पर बताएं।", imageFirst: false },
            { image: referAnalyticsImage, imageAlt: "Referral analytics", pillEN: "Referral analytics", pillHI: "रेफरल एनालिटिक्स", headingEN: "Track referrals, usage and redemption", headingHI: "रेफरल, यूज और रिडेम्प्शन ट्रैक करें", bodyEN: "Get access to key metrics such as revenue from referrals and new customers who join your referral programs.", bodyHI: "रेफरल से रेवेन्यू और नए ग्राहक जैसे मेट्रिक्स देखें।", imageFirst: true },
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${block.imageFirst ? "" : "lg:flex-row-reverse"}`}
            >
              <div className={block.imageFirst ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/60">
                  <img src={block.image} alt={block.imageAlt} className="w-full h-auto object-cover min-h-[280px]" />
                </motion.div>
              </div>
              <div className={`${block.imageFirst ? "order-1 lg:order-2" : "order-1 lg:order-1"} text-center lg:text-left`}>
                <div className="inline-flex items-center rounded-full px-5 py-2.5 mb-3 bg-white/90 border border-[#146fb5]/25 shadow-sm">
                  <span className="text-sm font-semibold" style={{ color: "#146fb5" }}>{t(block.pillEN, block.pillHI)}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 leading-tight" style={{ color: "#1b181f" }}>{t(block.headingEN, block.headingHI)}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#4f4f4f" }}>{t(block.bodyEN, block.bodyHI)}</p>
                <div className="flex justify-center lg:justify-start">
                  <Button variant="outline" size="lg" asChild className="rounded-xl border-[#146fb5]/50 text-[#146fb5] hover:bg-[#146fb5]/10 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <Link to="/book-demo" className="inline-flex items-center">
                      {t("Get Started", "शुरू करें")}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why stores love it */}
      <section className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-gradient-to-b from-primary/25 to-white relative">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3" style={{ color: "#1b181f" }}>{t("Why stores love referrals", "दुकानें रेफरल क्यों पसंद करती हैं")}</h2>
            <p className="text-base" style={{ color: "#4f4f4f" }}>{t("One-click WhatsApp referrals – reward advocates, grow with word-of-mouth.", "एक-क्लिक WhatsApp रेफरल – अडवोकेट्स को इनाम, वर्ड-ऑफ-माउथ से ग्रोथ।")}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((item, i) => (
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
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1b181f" }}>{t(item.titleEN, item.titleHI)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>{t(item.descEN, item.descHI)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-white border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(20,111,181,0.06),transparent)] pointer-events-none" />
        <div className="container-wide relative">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-[#146fb5]/15 via-primary/25 to-[#146fb5]/10 border border-[#146fb5]/25 shadow-xl shadow-[#146fb5]/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #146fb5 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#146fb5]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" style={{ color: "#146fb5" }} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1b181f" }}>{t("Ready to grow with referrals?", "रेफरल से ग्रोथ के लिए तैयार हैं?")}</h3>
              <p className="text-base mb-6" style={{ color: "#4f4f4f" }}>{t("Join 250+ retailers using Lume for WhatsApp referrals and loyalty.", "250+ रिटेलर्स के साथ जुड़ें जो ल्यूम से WhatsApp रेफरल और लॉयल्टी इस्तेमाल कर रहे हैं।")}</p>
              <Button size="lg" asChild variant="hero" className="rounded-xl px-8 py-6 font-semibold shadow-lg shadow-[#146fb5]/25 hover:shadow-xl hover:shadow-[#146fb5]/30 hover:-translate-y-0.5 transition-all duration-300">
                <Link to="/book-demo" className="inline-flex items-center">
                  {t("Book a demo", "डेमो बुक करें")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
