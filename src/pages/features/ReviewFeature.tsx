import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Zap, TrendingUp, MessageCircle, ArrowRight, CheckCircle2, ThumbsUp, BarChart3, Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingYouTubeShorts } from "@/components/FloatingYouTubeShorts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import gReviewImage from "@/assets/g-review.png";
import review1 from "@/assets/review/review-1.png";
import review2 from "@/assets/review/review-2.png";
import review3 from "@/assets/review/review-3.png";

const benefits = [
  {
    icon: Zap,
    titleEN: "One-click review link",
    titleHI: "एक-क्लिक समीक्षा लिंक",
    descEN: "Sent with every digital bill on WhatsApp – customers tap to leave a Google review.",
    descHI: "हर डिजिटल बिल के साथ WhatsApp पर भेजें – ग्राहक टैप करके Google समीक्षा देते हैं।",
  },
  {
    icon: TrendingUp,
    titleEN: "Rank higher locally",
    titleHI: "लोकल सर्च में ऊपर रैंक करें",
    descEN: "More positive reviews help your store appear first when customers search nearby.",
    descHI: "ज्यादा पॉजिटिव समीक्षाएं आपकी दुकान को नजदीक खोजने पर पहले दिखाती हैं।",
  },
  {
    icon: MessageCircle,
    titleEN: "Build trust with new customers",
    titleHI: "नए ग्राहकों का विश्वास बनाएं",
    descEN: "Reviews and ratings on Google help new customers choose your store with confidence.",
    descHI: "Google पर समीक्षाएं और रेटिंग नए ग्राहकों को आपकी दुकान चुनने में मदद करती हैं।",
  },
];

export default function ReviewFeature() {
  const { language } = useLanguage();
  useSEO(
    "Google Reviews from Digital Bills – Turn Every Bill into a Review | Lume",
    "Get more Google Reviews with every digital bill. One-click review link, rank higher in local search, build trust. Book a demo."
  );

  const t = (en: string, hi: string) => (language === "HI" ? hi : en);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero – attractive bg + stars */}
      <section className="relative overflow-hidden pt-24 lg:pt-28 pb-12 lg:pb-16">
        {/* Base gradient – soft lavender to blue */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(140deg, #f5f3fc 0%, #e8eaf8 25%, #dce4f4 50%, #d0dcef 75%, #b8d0e8 100%)",
          }}
        />
        {/* Soft glow – top left */}
        <div
          className="absolute -z-10 w-[80%] h-[70%] -top-[15%] -left-[15%]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(255,255,255,0.6) 0%, rgba(240,245,255,0.2) 50%, transparent 70%)",
          }}
        />
        {/* Soft glow – bottom right */}
        <div
          className="absolute -z-10 w-[70%] h-[80%] -bottom-[20%] -right-[10%]"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 90% 90%, rgba(20,111,181,0.08) 0%, rgba(180,210,235,0.15) 40%, transparent 70%)",
          }}
        />
        {/* Subtle dots */}
        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #146fb5 1px, transparent 0)", backgroundSize: "28px 28px" }} />

        {/* Purane wale stars – big, subtle, top-left + bottom-right */}
        <div className="absolute left-0 top-20 sm:top-24 pointer-events-none z-0 opacity-[0.06]">
          <Star className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 fill-[#94c8e8] text-[#94c8e8]" strokeWidth={0} />
        </div>
        <div className="absolute right-0 bottom-12 sm:bottom-16 pointer-events-none z-0 opacity-[0.06]">
          <Star className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 fill-[#94c8e8] text-[#94c8e8]" strokeWidth={0} />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-[#146fb5]/25 mb-6"
              >
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold" style={{ color: "#146fb5" }}>
                  {t("Turn Every Bill into a Google Review", "हर बिल को Google समीक्षा में बदलें")}
                </span>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-display font-bold leading-[1.15] mb-5 tracking-tight" style={{ color: "#1b181f" }}>
                {t("Grow Your Customer Base with Smart Google Reviews", "स्मार्ट Google समीक्षाओं से अपना ग्राहक आधार बढ़ाएं")}
              </h1>
              <p className="text-base sm:text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "#4f4f4f" }}>
                {t(
                  "Encourage Google Reviews with Every Digital Bill You Send to customer. Get more reviews, build trust, and rank higher in Google search results.",
                  "हर डिजिटल बिल के साथ ग्राहकों को Google समीक्षा देने के लिए प्रोत्साहित करें। अधिक समीक्षाएं पाएं, विश्वास बनाएं और Google खोज में ऊपर रैंक करें।"
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
                  onClick={() => document.getElementById("review-features")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  <span className="truncate block">{t("See all features", "सभी फ़ीचर्स देखें")}</span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <img
                  src={gReviewImage}
                  alt="Digital bill with Google review prompt – smartphone and storefront"
                  className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-xl rounded-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats + Heading + 3 benefits – premium cards */}
      <section className="pt-16 lg:pt-24 pb-12 lg:pb-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container-wide relative">
          {/* Top row – 3 stat cards with hover lift */}
          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6 mb-14 lg:mb-20">
            {[
              {
                value: "20x",
                labelEN: "Google Reviews",
                labelHI: "Google समीक्षाएं",
                descEN: "Automate review generation and get top rankings",
                descHI: "समीक्षाएं ऑटोमेट करें और टॉप रैंकिंग पाएं",
                bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5",
                border: "border-[#146fb5]/20",
                color: "#146fb5",
              },
              {
                value: "18%",
                labelEN: "More revenue",
                labelHI: "ज्यादा रेवेन्यू",
                descEN: "Grow sales with better discoverability and reputation",
                descHI: "बेहतर दिखावट और प्रतिष्ठा से बिक्री बढ़ाएं",
                bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5",
                border: "border-emerald-500/20",
                color: "#10b981",
              },
              {
                value: "90%",
                labelEN: "customers",
                labelHI: "ग्राहक",
                descEN: "Read reviews before visiting a business",
                descHI: "बिज़नेस पर जाने से पहले समीक्षाएं पढ़ते हैं",
                bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5",
                border: "border-amber-500/20",
                color: "#f59e0b",
              },
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
                <div className="text-3xl lg:text-4xl font-extrabold mb-1 tracking-tight" style={{ color: card.color }}>
                  {card.value}
                </div>
                <div className="text-sm font-semibold mb-3" style={{ color: card.color }}>
                  {t(card.labelEN, card.labelHI)}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#1b181f" }}>
                  {t(card.descEN, card.descHI)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Main heading – gradient highlight */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-center max-w-4xl mx-auto mb-14 lg:mb-20 leading-snug"
            style={{ color: "#1b181f" }}
          >
            {t("The ", "वह ")}
            <span className="bg-gradient-to-r from-[#146fb5] to-[#0ea5e9] bg-clip-text text-transparent">#1</span>
            {t(" tool to earn five star customer reviews on ", " टूल जिससे ग्राहक पाँच स्टार समीक्षाएं देते हैं ")}
            <span className="bg-gradient-to-r from-[#146fb5] to-[#0ea5e9] bg-clip-text text-transparent">Google Maps</span>
          </motion.h2>

          {/* Bottom row – 3 benefit columns with icon cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { icon: ThumbsUp, titleEN: "Build trust", titleHI: "विश्वास बनाएं", descEN: "Connect with more customers, become more discoverable and increase online reputation to build trust.", descHI: "ज्यादा ग्राहकों से जुड़ें, ज्यादा दिखें और ऑनलाइन प्रतिष्ठा बढ़ाकर विश्वास बनाएं।" },
              { icon: TrendingUp, titleEN: "Grow sales", titleHI: "बिक्री बढ़ाएं", descEN: "Google Reviews help attract more customers to your retail shop, thereby increasing sales and revenue.", descHI: "Google समीक्षाएं आपकी दुकान पर ज्यादा ग्राहक लाती हैं, जिससे बिक्री और रेवेन्यू बढ़ते हैं।" },
              { icon: Search, titleEN: "Improve local SEO", titleHI: "लोकल SEO सुधारें", descEN: "Get to the top of Google local search results by collecting more reviews and help your business get found.", descHI: "ज्यादा समीक्षाएं जुटाकर Google लोकल सर्च में ऊपर आएं और अपने बिज़नेस को मिलने लायक बनाएं।" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#146fb5]/20 to-[#146fb5]/5 flex items-center justify-center mx-auto mb-5 text-[#146fb5] border border-[#146fb5]/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#146fb5]/20 transition-all duration-300">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1b181f" }}>
                  {t(item.titleEN, item.titleHI)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>
                  {t(item.descEN, item.descHI)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 feature blocks – premium image hover + pill + CTA (Generate more reviews, automatically) */}
      <section id="review-features" className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-gradient-to-b from-primary/30 to-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(20,111,181,0.06),transparent)] pointer-events-none" />
        <div className="container-wide relative space-y-12 lg:space-y-16">
          {[
            { image: review1, imageAlt: "Retail store with one-click Google review prompt on digital bill", pillEN: "One-click Google Reviews", pillHI: "एक-क्लिक Google समीक्षाएं", headingEN: "Generate more reviews, automatically", headingHI: "ज्यादा समीक्षाएं ऑटोमेटिक जनरेट करें", bodyEN: "Collect customer ratings and reviews on Google via one-click review requests on the digital bill.", bodyHI: "डिजिटल बिल पर एक-क्लिक समीक्षा अनुरोध से Google पर ग्राहक रेटिंग और समीक्षाएं इकट्ठा करें।", imageFirst: true },
            { image: review2, imageAlt: "Review analytics and trends on map with Google Reviews chart", pillEN: "Review Analytics", pillHI: "समीक्षा एनालिटिक्स", headingEN: "View Reviews trends and performance", headingHI: "समीक्षाओं के ट्रेंड और परफॉर्मेंस देखें", bodyEN: "Track the review's performance in one place and establish actionable trends and insights.", bodyHI: "समीक्षाओं का परफॉर्मेंस एक जगह ट्रैक करें और एक्शन योग्य ट्रेंड और इनसाइट्स बनाएं।", imageFirst: false },
            { image: review3, imageAlt: "Store traffic growth with Google Business Profile interactions", pillEN: "Higher traffic", pillHI: "ज्यादा ट्रैफिक", headingEN: "Drive more online and in-person traffic", headingHI: "ऑनलाइन और ऑफलाइन ज्यादा ट्रैफिक लाएं", bodyEN: "Get the online reputation you deserve and add 20% more traffic to your store and online presence.", bodyHI: "वो ऑनलाइन प्रतिष्ठा पाएं जिसके आप हकदार हैं और अपनी दुकान और ऑनलाइन मौजूदगी पर 20% ज्यादा ट्रैफिक लाएं।", imageFirst: true },
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
                  <img src={block.image} alt={block.imageAlt} className="w-full h-auto object-cover" />
                </motion.div>
              </div>
              <div className={`${block.imageFirst ? "order-1 lg:order-2" : "order-1 lg:order-1"} text-center lg:text-left`}>
                <div className="inline-flex items-center rounded-full px-5 py-2.5 mb-3 bg-white/90 border border-[#146fb5]/25 shadow-sm">
                  <span className="text-sm font-semibold" style={{ color: "#146fb5" }}>
                    {t(block.pillEN, block.pillHI)}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 leading-tight" style={{ color: "#1b181f" }}>
                  {t(block.headingEN, block.headingHI)}
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#4f4f4f" }}>
                  {t(block.bodyEN, block.bodyHI)}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button variant="outline" size="lg" asChild className="rounded-xl border-[#146fb5]/50 text-[#146fb5] hover:bg-[#146fb5]/10 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <Link to="/book-demo">
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

      {/* Benefits – 3 cards with hover lift + gradient border */}
      <section className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-gradient-to-b from-primary/25 to-white relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3" style={{ color: "#1b181f" }}>
              {t("Why stores love it", "दुकानें इसे क्यों पसंद करती हैं")}
            </h2>
            <p className="text-base" style={{ color: "#4f4f4f" }}>
              {t("One simple link in every bill – more reviews, better visibility.", "हर बिल में एक लिंक – ज्यादा समीक्षाएं, बेहतर दिखावट।")}
            </p>
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
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1b181f" }}>
                  {t(item.titleEN, item.titleHI)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4f4f4f" }}>
                  {t(item.descEN, item.descHI)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works – card layout like Products "How Lume Fits" */}
      <section className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold" style={{ color: "#1b181f" }}>
              {t("How it works", "कैसे काम करता है")}
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            {/* Connecting line (desktop) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { step: 1, titleEN: "Send digital bill", titleHI: "डिजिटल बिल भेजें", descEN: "Share the digital bill with your customer on WhatsApp.", descHI: "ग्राहक को WhatsApp पर डिजिटल बिल भेजें।" },
                { step: 2, titleEN: "Customer taps review for reward", titleHI: "ग्राहक रिवॉर्ड के लिए समीक्षा टैप करें", descEN: "They get a reward and leave a 5-star review in one tap.", descHI: "एक टैप में रिवॉर्ड पाएं और 5 स्टार समीक्षा दें।" },
                { step: 3, titleEN: "Review on Google — customer gets reward", titleHI: "Google पर समीक्षा — ग्राहक को रिवॉर्ड", descEN: "Your listing gets the rating; the customer gets their reward.", descHI: "आपकी लिस्टिंग को रेटिंग मिलती है; ग्राहक को रिवॉर्ड मिलता है।" },
                { step: 4, titleEN: "Customer returns, rating grows", titleHI: "ग्राहक वापस आता है, रेटिंग बढ़ती है", descEN: "They come back to redeem; your store rating rises and new customers engage.", descHI: "रिडीम करने वापस आते हैं; दुकान की रेटिंग बढ़ती है, नए ग्राहक जुड़ते हैं।" },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] h-full relative pt-10 sm:pt-12 border border-gray-100">
                    <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white" style={{ background: "#146fb5" }}>
                        {s.step}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "#1b181f" }}>
                      {t(s.titleEN, s.titleHI)}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4f4f4f" }}>
                      {t(s.descEN, s.descHI)}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-0">
                      <ArrowRight className="w-6 h-6" style={{ color: "#b6c6d6" }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip – stronger gradient + pattern + button hover */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-white border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(20,111,181,0.06),transparent)] pointer-events-none" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center rounded-2xl p-8 lg:p-12 bg-gradient-to-br from-[#146fb5]/15 via-primary/25 to-[#146fb5]/10 border border-[#146fb5]/25 shadow-xl shadow-[#146fb5]/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #146fb5 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#146fb5]/15 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" style={{ color: "#146fb5" }} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "#1b181f" }}>
                {t("Ready to get more Google Reviews?", "अधिक Google समीक्षाएं पाने के लिए तैयार हैं?")}
              </h3>
              <p className="text-base mb-6" style={{ color: "#4f4f4f" }}>
                {t("Join 250+ retailers using Lume to grow with digital bills and reviews.", "250+ रिटेलर्स के साथ जुड़ें जो ल्यूम से डिजिटल बिल और समीक्षाओं के साथ बढ़ रहे हैं।")}
              </p>
              <Button size="lg" asChild variant="hero" className="rounded-xl px-8 py-6 font-semibold shadow-lg shadow-[#146fb5]/25 hover:shadow-xl hover:shadow-[#146fb5]/30 hover:-translate-y-0.5 transition-all duration-300">
                <Link to="/book-demo">
                  {t("Book a demo", "डेमो बुक करें")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingYouTubeShorts videoId="TEuaDZPbsEU" />
    </div>
  );
}
