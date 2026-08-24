import { useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  BarChart3,
  CreditCard,
  MessageSquare,
  Star,
  CheckCircle2,
  Store,
  ShoppingBag,
  Zap,
  IndianRupee,
  RefreshCw,
  Target,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock,
  Truck,
  ShieldCheck,
  PackageCheck,
  Globe,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { useHeroContent } from "@/hooks/useHeroContent";
import { trackDownloadClick } from "@/lib/leadStore";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import dashboardDesktop from "@/assets/hero-banner/dashboard-hindii.png";
import dashboardEnglish from "@/assets/hero-banner/dashboard-english.png";
import mobileHeroVideo from "@/assets/hero-banner/mobile-hero.mp4";
import mobileHeroVideoEnglish from "@/assets/hero-banner/mobile-hero-english.mp4";
import billVideo from "@/assets/hero-banner/bill-vdoo.mp4";
import bgImage from "@/assets/bg-1.avif";
import lumeShopConsumerImg from "@/assets/hero-banner/lume-shop-consumer.png";
import retailChallenges3dImg from "@/assets/retail-challenges-3d.png";
import smileIcon from "@/assets/smile.png";
import challengeIcon1 from "@/assets/home-icons/chalanges-icons/i-1.png";
import challengeIcon2 from "@/assets/home-icons/chalanges-icons/i-2.png";
import challengeIcon3 from "@/assets/home-icons/chalanges-icons/i-3.png";
import challengeIcon4 from "@/assets/home-icons/chalanges-icons/i-4.png";
import benefitIcon1 from "@/assets/home-icons/benifit-icons/i-1.png";
import benefitIcon2 from "@/assets/home-icons/benifit-icons/i-2.png";
import benefitIcon3 from "@/assets/home-icons/benifit-icons/i-3.png";
import benefitIcon4 from "@/assets/home-icons/benifit-icons/i-4.png";
import benefitIcon5 from "@/assets/home-icons/benifit-icons/i-5.png";
import benefitIcon6 from "@/assets/home-icons/benifit-icons/i-6.png";
import testimonialImg1 from "@/assets/testimonials/Testimonial-01.png";
import testimonialImg2 from "@/assets/testimonials/Testimonial-02.png";
import testimonialImg3 from "@/assets/testimonials/Testimonial-03.png";
import testimonialImg4 from "@/assets/testimonials/Testimonial-04.png";
import testimonialImg5 from "@/assets/testimonials/Testimonial-05.png";
import testimonialImg6 from "@/assets/testimonials/Testimonial-06.png";
import testimonialImg7 from "@/assets/testimonials/Testimonial-07.png";

// Import retailer logos
const retailerLogos = [
  // NEW logos (must appear first)
  'shreesanskar-removebg-preview.png', // Sai sanskar
  'tulsi-removebg-preview.png', // Tulsi Footwear
  'cottonking-removebg-preview.png',
  'jumi.png',
  'fashionhub.png',
  'cookiesnuts.png',

  // Remaining logos
  'AaraCouture-removebg-preview.png', // Aarti collection
  'dixit-removebg-preview.png', // Dixit mobile
  'time prime.png', // Time prime
  'AMStaationers-removebg-preview.png',
  'Auction-removebg-preview.png',
  'BottomForGroom-removebg-preview.png',
  'CakePointPartySpot-removebg-preview.png',
  'Canon-removebg-preview.png',
  'byondezines-log.png',
  'Golden-removebg-preview.png',
  'GopalDiary-removebg-preview.png',
  'Gunjan-removebg-preview.png',
  'HarrierLuggage-removebg-preview.png',
  'HeartyMart-removebg-preview.png',
  'HPWorld-removebg-preview.png',
  'JainTraders-removebg-preview.png',
  'JohnNBrown-removebg-preview.jpeg',
  'JyotiStores-removebg-preview.png',
  'Kirti-removebg-preview.png',
  'KrishnaFashion-removebg-preview.png',
  'KuberJwellers-removebg-preview.png',
  'Lotus-removebg-preview.png',
  'MagicScissors-removebg-preview.png',
  'MetroPharmacy-removebg-preview.png',
  'NagrikStores-removebg-preview.png',
  'PatelSareesPvt-removebg-preview.png',
  'RJHairBeauty-removebg-preview.png',
  'Salvi-removebg-preview.png',
  'senorita-removebg-preview.png', // Senorita
  'Surabhi-removebg-preview.png',
  'TheCakeShop-removebg-preview.png',
  'TheCakeWay-removebg-preview.png',
  'Vastram-removebg-preview.png',
  'Veera-removebg-preview.png',
];

// IMPORTANT: Only these exact filenames should show the "NEW" badge.
// Do NOT assign "NEW" based on index/position.
const newLogos = [
  'shreesanskar-removebg-preview.png',
  'tulsi-removebg-preview.png',
  'cottonking-removebg-preview.png',
  'jumi.png',
  'fashionhub.png',
  'cookiesnuts.png',
] as const;

// Split logos for 2-row marquee
const newLogoFiles = retailerLogos.filter(l => newLogos.includes(l as (typeof newLogos)[number]));
const oldLogoFiles = retailerLogos.filter(l => !newLogos.includes(l as (typeof newLogos)[number]));
// Row 1: all new logos + first 8 old logos so the row looks full
const row1LogoFiles = [...newLogoFiles, ...oldLogoFiles.slice(0, 8)];
// Row 2: remaining old logos
const row2LogoFiles = oldLogoFiles.slice(8);

const renderRatingStars = (sizeClass: string) => (
  <>
    {[0, 1, 2, 3].map((i) => (
      <Star key={`full-star-${i}`} className={`${sizeClass} fill-current text-amber-400`} />
    ))}
    <span className={`relative inline-flex ${sizeClass}`}>
      <Star className={`${sizeClass} fill-current text-slate-300`} />
      <span className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 50% 0 0)" }}>
        <Star className={`${sizeClass} fill-current text-amber-400`} />
      </span>
    </span>
  </>
);

// const statsCards = [
//   {
//     value: "285+",
//     title: "Retailers Trust Us",
//     description:
//       "Growing businesses across India rely on Lume to simplify billing and boost repeat customers.",
//     icon: Users,
//     cardClass:
//       "bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 border-violet-200/60",
//     iconClass: "text-violet-600",
//     valueClass: "text-violet-700",
//   },
//   {
//     value: "₹75Cr+",
//     title: "Transactions Processed",
//     description:
//       "Handle high-volume billing seamlessly with a fast, reliable, and scalable POS system.",
//     icon: CreditCard,
//     cardClass:
//       "bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-sky-200/60",
//     iconClass: "text-blue-600",
//     valueClass: "text-blue-700",
//   },
//   {
//     value: "25%",
//     title: "Average Revenue Increase",
//     description:
//       "Retailers see measurable growth through better customer engagement and smarter campaigns.",
//     icon: TrendingUp,
//     cardClass:
//       "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-emerald-200/60",
//     iconClass: "text-emerald-600",
//     valueClass: "text-emerald-700",
//   },
//   {
//     value: "4.8/5",
//     title: "Customer Rating",
//     description:
//       "Loved by business owners for ease of use, speed, and powerful features.",
//     icon: Star,
//     cardClass:
//       "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-amber-200/60",
//     iconClass: "text-amber-600",
//     valueClass: "text-amber-700",
//   },
// ];

// Pain points will be translated in component

// Stats will be translated in component
const statsKeys = [
  { value: "285+", key: "stats.retailers" },
  { value: "₹75Cr+", key: "stats.transactions" },
  { value: "25%", key: "stats.revenue" },
  { value: "4.8/5", key: "stats.rating" },
];

const painPointsKeys = [
  { icon: challengeIcon1, key: "challenge.point1", subKey: "challenge.point1Sub" },
  { icon: challengeIcon2, key: "challenge.point2", subKey: "challenge.point2Sub" },
  { icon: challengeIcon3, key: "challenge.point3", subKey: "challenge.point3Sub" },
  { icon: challengeIcon4, key: "challenge.point4", subKey: "challenge.point4Sub" },
];

// Benefits will be translated in component
const benefitsKeys = [
  {
    icon: benefitIcon1,
    titleKey: "benefit.fastBilling.title",
    descKey: "benefit.fastBilling.desc",
    href: "/features/digital-bills",
  },
  {
    icon: benefitIcon2,
    titleKey: "benefit.posIntegration.title",
    descKey: "benefit.posIntegration.desc",
    href: "/features/pos-billing",
  },
  {
    icon: benefitIcon3,
    titleKey: "benefit.engagement.title",
    descKey: "benefit.engagement.desc",
    href: "/features/reviews",
  },
  {
    icon: benefitIcon4,
    titleKey: "benefit.customerCapture.title",
    descKey: "benefit.customerCapture.desc",
    href: "/features/analytics",
  },
  {
    icon: benefitIcon5,
    titleKey: "benefit.smartOffers.title",
    descKey: "benefit.smartOffers.desc",
    href: "/features/promotion",
  },
  {
    icon: benefitIcon6,
    titleKey: "benefit.dashboard.title",
    descKey: "benefit.dashboard.desc",
    href: "/features/analytics",
  },
];

// How it works will be translated in component
const howItWorksKeys = [
  { step: "1", titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.desc" },
  { step: "2", titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.desc" },
  { step: "3", titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.desc" },
  { step: "4", titleKey: "howItWorks.step4.title", descKey: "howItWorks.step4.desc" },
];

// Industries will be translated in component
const industriesKeys = [
  { key: "industries.grocery" },
  { key: "industries.fashion" },
  { key: "industries.electronics" },
  { key: "industries.pharmacy" },
  { key: "industries.general" },
  { key: "industries.footwear" },
  { key: "industries.cosmetic" },
  { key: "industries.stationery" },
  { key: "industries.hardware" },
  { key: "industries.bakery" },
];

const testimonials = [
  {
    logo: "MOBILE SHOP",
    logoSub: "K K Telecome",
    quote: "Sales increased by 40% in just 3 months!",
    quoteHI: "सिर्फ 3 महीने में 40% ज़्यादा सेल्स!",
    text: "Lume helped me increase my repeat customers by 40%. The credit management feature alone saved me ₹50,000 in bad debts. The digital billing and customer management features have made our operations so smooth.",
    textHI: "ल्यूम की वजह से मेरे रिपीट कस्टमर लगभग 40% तक बढ़ गए। सिर्फ क्रेडिट मैनेजमेंट फ़ीचर ने ही हमें करीब ₹50,000 तक के खराब उधार से बचा लिया। डिजिटल बिलिंग और कस्टमर मैनेजमेंट ने हमारी रोज़ की दुकानदारी बहुत स्मूद बना दी है।",
    author: "Ramesh Kumar",
    role: "Store Manager, K K Telecome",
    image: testimonialImg1,
  },
  {
    logo: "ELECTRONICS STORE",
    logoSub: "Lotus Enterprises",
    quote: "Best retail management solution we've used!",
    quoteHI: "अब तक का सबसे बढ़िया रिटेल मैनेजमेंट सॉल्यूशन!",
    text: "Finally, a billing app that understands Indian retailers. The inventory management and sales analytics features are outstanding. We can now track our best-selling products efficiently.",
    textHI: "आख़िरकार ऐसा बिलिंग ऐप मिला जो सच में भारतीय रिटेलर्स को समझता है। इन्वेंटरी मैनेजमेंट और सेल्स एनालिटिक्स के फ़ीचर कमाल के हैं। अब हम आसानी से देख सकते हैं कि कौन-से प्रोडक्ट सबसे ज़्यादा बिक रहे हैं।",
    author: "Priya Sharma",
    role: "Store Manager, Lotus Enterprises",
    image: testimonialImg2,
  },
  {
    logo: "GENERAL STORE",
    logoSub: "Burhan Store",
    quote: "Customer loyalty program is a game changer!",
    quoteHI: "कस्टमर लॉयल्टी प्रोग्राम ने खेल ही बदल दिया!",
    text: "I can now track my daily sales from anywhere. The loyalty and rewards system has helped us retain customers and increase sales. The campaign builder makes it so easy to create offers.",
    textHI: "अब मैं कहीं से भी अपनी रोज़ की सेल्स देख सकता हूँ। लॉयल्टी और रिवॉर्ड सिस्टम ने हमें कस्टमर रोके रखने और सेल बढ़ाने में बहुत मदद की है। कैंपेन बिल्डर से ऑफ़र बनाना भी अब कुछ सेकंड का काम हो गया है।",
    author: "Mohammed Ali",
    role: "Founder, General Store",
    image: testimonialImg3,
  },
  {
    logo: "STYLE",
    logoSub: "The Clothing House",
    quote: "Streamlined operations with amazing insights!",
    quoteHI: "बेहतरीन इनसाइट्स के साथ पूरे ऑपरेशन आसान हो गए!",
    text: "Lume's dashboard gives us real-time insights into our business performance. The credit management feature has helped us track customer payments efficiently. The smart e-bills have enhanced our brand image significantly.",
    textHI: "ल्यूम का डैशबोर्ड हमें रियल-टाइम में बिज़नेस की परफॉर्मेंस दिखाता है। क्रेडिट मैनेजमेंट फ़ीचर से कस्टमर पेमेंट ट्रैक करना बहुत आसान हो गया है। स्मार्ट ई-बिल्स ने हमारे ब्रांड की इमेज भी काफ़ी मज़बूत कर दी है।",
    author: "Neha Singh",
    role: "Store Manager, The Clothing House",
    image: testimonialImg4,
  },
  {
    logo: "CLOTHING",
    logoSub: "Patel Sarees",
    quote: "Perfect for multi-store management!",
    quoteHI: "मल्टी-स्टोर मैनेजमेंट के लिए परफेक्ट सॉल्यूशन!",
    text: "Managing multiple pharmacy stores was challenging until we found Lume. The centralized dashboard, franchise management, and multi-store POS features have made our operations seamless.",
    textHI: "कई स्टोर्स संभालना पहले बहुत मुश्किल था, जब तक हमें ल्यूम नहीं मिला था। सेंट्रलाइज़्ड डैशबोर्ड, फ़्रेंचाइज़ मैनेजमेंट और मल्टी-स्टोर POS फीचर्स की वजह से अब हमारा पूरा ऑपरेशन बहुत आसान और कंट्रोल में है।",
    author: "Vikram Patel",
    role: "Store Manager, Patel Sarees",
    image: testimonialImg5,
  },
  {
    logo: "STYLE",
    logoSub: "Surabhi Store",
    quote: "Amazing customer engagement features!",
    quoteHI: "कस्टमर एंगेजमेंट वाले फ़ीचर वाकई कमाल के हैं!",
    text: "The WhatsApp campaigns and customer feedback system have transformed how we interact with our customers. Sales have increased significantly since we started using Lume.",
    textHI: "व्हाट्सऐप कैंपेन और कस्टमर फ़ीडबैक सिस्टम ने हमारे ग्राहकों से जुड़ने का तरीका पूरी तरह बदल दिया है। ल्यूम इस्तेमाल करने के बाद से हमारी सेल्स में साफ़-साफ़ बढ़ोतरी दिख रही है।",
    author: "Anjali Mehta",
    role: "Owner, Surabhi Store",
    image: testimonialImg6,
  },
  {
    logo: "TECH STORE",
    logoSub: "GEONET HP WORLD",
    quote: "Best investment for our business!",
    quoteHI: "हमारे बिज़नेस के लिए अब तक का सबसे अच्छा निवेश!",
    text: "Lume has made billing so much faster and easier. The automatic customer capture and credit tracking features have saved us hours every day. Highly recommended!",
    textHI: "ल्यूम ने हमारी बिलing को बहुत तेज़ और आसान बना दिया है। ऑटोमैटिक कस्टमर कैप्चर और क्रेडिट ट्रैकिंग फ़ीचर्स रोज़ के कई घंटे बचा देते हैं। हम इसे हर रिटेलर को सलाह देंगे।",
    author: "Rajesh Verma",
    role: "Store Manager, GEONET HP WORLD",
    image: testimonialImg7,
  },
];

/** Swiper-only order: interleave categories so the same type rarely appears back-to-back (hero still uses canonical `testimonials` order). */
const testimonialSliderIndices = [0, 2, 3, 1, 4, 6, 5] as const;

export default function Index() {
  const { t, language } = useLanguage();
  const heroContent = useHeroContent();
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  // Admin-managed hero copy (falls back to static i18n when unset).
  const dynamicHeading = heroContent
    ? (language === "HI" ? heroContent.headingHi : heroContent.headingEn).trim()
    : "";
  const dynamicSubheading = heroContent
    ? (language === "HI" ? heroContent.subheadingHi : heroContent.subheadingEn).trim()
    : "";

  // Render an admin-managed heading with its last two words in the brand color
  // (mirrors the highlight on the static hero headline).
  const renderDynamicHeading = (text: string) => {
    const words = text.split(/\s+/);
    if (words.length <= 2) {
      return <span style={{ color: "var(--brand)" }}>{text}</span>;
    }
    const head = words.slice(0, -2).join(" ");
    const tail = words.slice(-2).join(" ");
    return (
      <>
        {head} <span style={{ color: "var(--brand)" }}>{tail}</span>
      </>
    );
  };

  useSEO(
    'Digital Billing & Retail Growth for Indian Stores',
    'Lume helps Indian retailers with digital billing, customer insights, loyalty & campaigns. One simple platform. Grow your store.'
  );

  // Memoize testimonials to prevent re-renders
  const memoizedTestimonials = useMemo(() => testimonials, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section !pb-6 sm:!pb-10 relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        {/* Background Image */}
        <img
          src={bgImage}
          alt="Retail POS billing software & consumer shopping platform background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgb(var(--brand-rgb) / 0.15) 0%, transparent 70%)',
            zIndex: 1
          }}
        />

        <Header />

        <div className="relative z-10 pt-2 sm:pt-4">
          <div className="site-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

            {/* Swiper Hero Slider with 5-second Auto-swipe */}
            <div className="relative group">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={700}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.realIndex);
                }}
                className="w-full hero-swiper overflow-visible"
              >
                {/* SLIDE 1: Retailer Growth Engine App (B2B) */}
                <SwiperSlide>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-2 sm:py-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-20"
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        <span>{t('hero.slide1.badge')}</span>
                      </div>

                      {/* Headline */}
                      <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] mb-4 leading-tight text-slate-900">
                        {dynamicHeading ? (
                          renderDynamicHeading(dynamicHeading)
                        ) : language === 'HI' ? (
                          <>
                            अपनी दुकान को बनाओ <span className="text-[var(--brand)]">स्मार्ट ग्रोइंग बिज़नेस</span> — ग्राहक बार-बार वापस आएँगे!
                          </>
                        ) : (
                          <>
                            AI-First Retail Solutions that Turn Billing into <span className="text-[var(--brand)]">Repeat Customers & Sales Growth</span>
                          </>
                        )}
                      </h1>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">
                        {dynamicSubheading || t('hero.slide1.desc')}
                      </p>

                      {/* Feature Pills */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 max-w-xl">
                        {[
                          { text: t('hero.slide1.pill1'), icon: Zap },
                          { text: t('hero.slide1.pill2'), icon: Star },
                          { text: t('hero.slide1.pill3'), icon: TrendingUp },
                          { text: t('hero.slide1.pill4'), icon: Shield },
                        ].map((pill, idx) => {
                          const PillIcon = pill.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg border border-slate-200/80 shadow-xs text-xs sm:text-sm font-medium text-slate-800">
                              <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                                <PillIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="truncate">{pill.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* CTAs - 50/50 Side by Side on Mobile */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 w-full max-w-xl">
                        <Button size="xl" variant="hero" asChild className="shadow-lg hover:shadow-xl transition-all h-11 sm:h-12 text-xs sm:text-base px-2 sm:px-6 w-full justify-center">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.apeiros.consumermobilewrapper&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => void trackDownloadClick()}
                            className="flex items-center justify-center gap-1.5 sm:gap-2 truncate"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M3.609 1.814L13.793 12 3.61 22.186A1.83 1.83 0 0 1 3 20.887V3.113c0-.498.21-.954.609-1.299z" />
                              <path fill="#34A853" d="M17.332 8.461l-3.539 3.539 3.539 3.539 4.025-2.284c.854-.485.854-1.637 0-2.122l-4.025-2.672z" />
                              <path fill="#EA4335" d="M13.793 12L3.609 1.814 17.332 9.61l-3.539 2.39z" />
                              <path fill="#FBBC04" d="M13.793 12l3.539 2.39-13.723 7.796L13.793 12z" />
                            </svg>
                            <span className="truncate">{t('hero.slide1.ctaPrimary')}</span>
                          </a>
                        </Button>
                        <Button size="xl" variant="outline" asChild className="h-11 sm:h-12 text-xs sm:text-base px-2 sm:px-6 bg-white/80 border-slate-300 text-slate-800 hover:bg-slate-50 w-full justify-center">
                          <Link to="/book-demo" className="flex items-center justify-center gap-1.5 sm:gap-2 truncate">
                            <span className="truncate">{t('hero.slide1.ctaSecondary')}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                          </Link>
                        </Button>
                      </div>

                      {/* Rating row */}
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 shrink-0">
                          {memoizedTestimonials.slice(0, 4).map((testimonial, i) => (
                            <div key={`s1-${i}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white">
                              <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-1">
                          {renderRatingStars("w-3.5 h-3.5")}
                        </div>
                        <span className="text-xs sm:text-sm text-slate-600 font-medium">
                          {t('hero.rating')}
                        </span>
                      </div>
                    </motion.div>

                    {/* Right Visual: Desktop Dashboard + Bill Video */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="relative max-w-xl mx-auto lg:ml-auto">
                        <div className="rounded-2xl p-2 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-xl border border-white/80 shadow-2xl">
                          <img
                            src={language === 'EN' ? dashboardEnglish : dashboardDesktop}
                            alt="Retail POS dashboard preview"
                            className="w-full h-auto rounded-xl shadow-md border border-slate-200/60"
                          />
                        </div>
                        {/* Video overlay floating bottom-left */}
                        <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20">
                          <div className="p-1.5 bg-white rounded-xl shadow-2xl border-2 border-blue-500/30 backdrop-blur-md">
                            <video
                              src={billVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-28 sm:w-36 rounded-lg shadow-inner"
                            />
                          </div>
                        </div>
                        {/* Floating stat pill top-right */}
                        <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-emerald-200 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                          <span className="text-xs font-bold text-slate-800">⚡ 3-Sec Bill Generation</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>

                {/* SLIDE 2: Lume Shop B2C Consumer App */}
                <SwiperSlide>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-2 sm:py-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-20"
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 bg-purple-50/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-purple-200/80 text-purple-800 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
                        <ShoppingBag className="w-4 h-4 text-purple-600 animate-pulse" />
                        <span>{t('hero.slide2.badge')}</span>
                      </div>

                      {/* Headline */}
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] mb-4 leading-tight text-slate-900">
                        {language === 'HI' ? (
                          <>
                            अपने पास की दुकानों से <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">ऑनलाइन मँगवाएँ</span> — तेज़ इन्स्टेंट डिलीवरी!
                          </>
                        ) : (
                          <>
                            Shop Online from Nearby Stores with <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Instant Delivery</span> via Lume Shop
                          </>
                        )}
                      </h2>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">
                        {t('hero.slide2.desc')}
                      </p>

                      {/* Feature Pills */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 max-w-xl">
                        {[
                          { text: t('hero.slide2.pill1'), icon: Clock },
                          { text: t('hero.slide2.pill2'), icon: Store },
                          { text: t('hero.slide2.pill3'), icon: IndianRupee },
                          { text: t('hero.slide2.pill4'), icon: Truck },
                        ].map((pill, idx) => {
                          const PillIcon = pill.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg border border-purple-100 shadow-xs text-xs sm:text-sm font-medium text-slate-800">
                              <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center shrink-0 text-purple-600">
                                <PillIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="truncate">{pill.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* CTAs - 50/50 Side by Side on Mobile */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 w-full max-w-xl">
                        <Button size="xl" asChild className="shadow-lg hover:shadow-xl transition-all h-11 sm:h-12 text-xs sm:text-base px-2 sm:px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 w-full justify-center">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.apeiros.consumermobilewrapper&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 sm:gap-2 truncate"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M3.609 1.814L13.793 12 3.61 22.186A1.83 1.83 0 0 1 3 20.887V3.113c0-.498.21-.954.609-1.299z" />
                              <path fill="#34A853" d="M17.332 8.461l-3.539 3.539 3.539 3.539 4.025-2.284c.854-.485.854-1.637 0-2.122l-4.025-2.672z" />
                              <path fill="#EA4335" d="M13.793 12L3.609 1.814 17.332 9.61l-3.539 2.39z" />
                              <path fill="#FBBC04" d="M13.793 12l3.539 2.39-13.723 7.796L13.793 12z" />
                            </svg>
                            <span className="truncate">{t('hero.slide2.ctaPrimary')}</span>
                          </a>
                        </Button>
                        <Button size="xl" variant="outline" asChild className="h-11 sm:h-12 text-xs sm:text-base px-2 sm:px-6 bg-white/80 border-purple-200 text-purple-900 hover:bg-purple-50 w-full justify-center">
                          <Link to="/for-retailers" className="flex items-center justify-center gap-1.5 sm:gap-2 truncate">
                            <span className="truncate">{t('hero.slide2.ctaSecondary')}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                          </Link>
                        </Button>
                      </div>

                      {/* Consumer Rating Row */}
                      <div className="flex items-center gap-3 bg-purple-50/60 p-2.5 rounded-xl border border-purple-100 max-w-md">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700 font-semibold">
                          ⭐ 4.9/5 Rating from Happy Local Shoppers Across India
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Visual: Generated Lume Shop Consumer Visual Mockup */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="relative max-w-md mx-auto lg:ml-auto">
                        <div className="relative p-3 bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-700 rounded-[2.5rem] shadow-2xl border-4 border-white/90">
                          <img
                            src={lumeShopConsumerImg}
                            alt="Lume Shop Consumer Hyper-Local Delivery App Mockup"
                            className="w-full h-auto rounded-[2rem] shadow-inner object-cover"
                          />

                          {/* Floating Badge 1: Instant Delivery */}
                          <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-purple-200 flex items-center gap-2 animate-bounce">
                            <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs">
                              ⚡
                            </div>
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">{language === 'HI' ? 'इन्स्टेंट डिलीवरी' : 'Instant Delivery'}</div>
                              <div className="text-[9px] text-slate-500">Live order tracking</div>
                            </div>
                          </div>

                          {/* Floating Badge 2: Local Stores */}
                          <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-indigo-200 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                              🏪
                            </div>
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Verified Nearby Stores</div>
                              <div className="text-[9px] text-emerald-600 font-semibold">Kirana • Fashion • Bakery</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>

                {/* SLIDE 3: Unified Ecosystem (B2B + B2C Network) */}
                <SwiperSlide>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-2 sm:py-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-20"
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 bg-emerald-50/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
                        <Globe className="w-4 h-4 text-emerald-600 animate-spin" />
                        <span>{t('hero.slide3.badge')}</span>
                      </div>

                      {/* Headline */}
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] mb-4 leading-tight text-slate-900">
                        {language === 'HI' ? (
                          <>
                            दुकानदार की ऑनलाइन दुकान और ग्राहक की आसान ख़रीदारी — <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">एक ही नेटवर्क पर!</span>
                          </>
                        ) : (
                          <>
                            Connecting Local Retailers & Nearby Customers into <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">One Unified Growth Network</span>
                          </>
                        )}
                      </h2>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl leading-relaxed">
                        {t('hero.slide3.desc')}
                      </p>

                      {/* Feature Pills */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 max-w-xl">
                        {[
                          { text: t('hero.slide3.pill1'), icon: RefreshCw },
                          { text: t('hero.slide3.pill2'), icon: IndianRupee },
                          { text: t('hero.slide3.pill3'), icon: TrendingUp },
                          { text: t('hero.slide3.pill4'), icon: Truck },
                        ].map((pill, idx) => {
                          const PillIcon = pill.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2.5 rounded-lg border border-emerald-100 shadow-xs text-xs sm:text-sm font-medium text-slate-800">
                              <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                                <PillIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="truncate">{pill.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* CTAs - 50/50 Side by Side on Mobile */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 w-full max-w-xl">
                        <Button size="xl" asChild className="shadow-lg hover:shadow-xl transition-all h-11 sm:h-12 text-xs sm:text-base px-2 sm:px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 w-full justify-center">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.apeiros.consumermobilewrapper&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 sm:gap-2 truncate"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M3.609 1.814L13.793 12 3.61 22.186A1.83 1.83 0 0 1 3 20.887V3.113c0-.498.21-.954.609-1.299z" />
                              <path fill="#34A853" d="M17.332 8.461l-3.539 3.539 3.539 3.539 4.025-2.284c.854-.485.854-1.637 0-2.122l-4.025-2.672z" />
                              <path fill="#EA4335" d="M13.793 12L3.609 1.814 17.332 9.61l-3.539 2.39z" />
                              <path fill="#FBBC04" d="M13.793 12l3.539 2.39-13.723 7.796L13.793 12z" />
                            </svg>
                            <span className="truncate">{t('hero.slide3.ctaPrimary')}</span>
                          </a>
                        </Button>
                        <Button size="xl" variant="outline" asChild className="h-11 sm:h-12 text-xs sm:text-base px-2 sm:px-6 bg-white/80 border-emerald-200 text-emerald-900 hover:bg-emerald-50 w-full justify-center">
                          <Link to="/solutions" className="flex items-center justify-center gap-1.5 sm:gap-2 truncate">
                            <span className="truncate">{t('hero.slide3.ctaSecondary')}</span>
                          </Link>
                        </Button>
                      </div>

                      {/* Ecosystem Trust Banner */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Seamless 1-click integration with your existing store POS hardware</span>
                      </div>
                    </motion.div>

                    {/* Right Visual: Interactive Ecosystem Sync Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <div className="relative max-w-lg mx-auto lg:ml-auto bg-gradient-to-br from-white/95 via-slate-50 to-emerald-50/40 p-6 rounded-3xl border border-emerald-200/80 shadow-2xl">
                        <div className="text-center mb-4">
                          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                            ⚡ REAL-TIME ECOSYSTEM SYNC
                          </span>
                        </div>

                        {/* Interactive Dual Nodes */}
                        <div className="grid grid-cols-2 gap-4 items-center relative">
                          {/* Node 1: Retailer App */}
                          <div className="p-4 bg-white rounded-2xl border border-blue-200 shadow-md text-center">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                              <Store className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold text-slate-900">Lume Retailer App</div>
                            <div className="text-[10px] text-blue-600 font-semibold mt-1">B2B Store POS</div>
                            <div className="mt-2 text-[9px] bg-slate-100 p-1 rounded text-slate-600 font-mono">
                              Catalog • Stock • Bills
                            </div>
                          </div>

                          {/* Central Pulsing Sync Arrow */}
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full border-2 border-emerald-500 shadow-lg animate-pulse">
                            <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin" />
                          </div>

                          {/* Node 2: Consumer App */}
                          <div className="p-4 bg-white rounded-2xl border border-purple-200 shadow-md text-center">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
                              <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold text-slate-900">Lume Shop App</div>
                            <div className="text-[10px] text-purple-600 font-semibold mt-1">B2C Local Orders</div>
                            <div className="mt-2 text-[9px] bg-slate-100 p-1 rounded text-slate-600 font-mono">
                              Live Online Storefront
                            </div>
                          </div>
                        </div>

                        {/* Floating live order notification */}
                        <div className="mt-5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                              ✓
                            </div>
                            <div>
                              <div className="font-bold text-slate-800">New Order #4821 Received!</div>
                              <div className="text-[10px] text-slate-500">Auto-synced from Lume Shop to POS</div>
                            </div>
                          </div>
                          <span className="text-xs font-extrabold text-emerald-600">₹450</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Interactive Clickable Dots Pagination (Pause on hover enabled) */}
              <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6 z-20 relative">
                {[0, 1, 2].map((idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveSlide(idx);
                        swiperRef.current?.slideToLoop(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="group p-1.5 focus:outline-none transition-all duration-300"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${isActive
                          ? "w-8 sm:w-10 h-3 bg-[var(--brand)] shadow-md ring-4 ring-blue-500/20"
                          : "w-3 h-3 bg-slate-300 hover:bg-slate-400 group-hover:scale-125"
                          }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white shadow-xl relative z-10 mt-4 sm:mt-6 lg:mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-5xl rounded-xl sm:rounded-2xl border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {statsKeys.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-4 sm:p-6 text-center group hover:bg-primary/5 transition-colors"
              >
                <div
                  className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:scale-110 transition-transform"
                  style={{ color: 'var(--brand)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs sm:text-sm mt-1"
                  style={{ color: '#4f4f4f' }}
                >
                  {t(stat.key)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Retailer Logos Banner - 2 Row Marquee */}
        <div className="relative z-10 mt-3 sm:mt-4 py-0 overflow-hidden flex flex-col gap-0">

          {/* Row 1: New stores — scrolls right to left */}
          <div className="overflow-hidden py-0">
            <div className="logo-marquee-rtl flex w-max items-center gap-3 sm:gap-4 md:gap-5 whitespace-nowrap">
              {[...row1LogoFiles, ...row1LogoFiles].map((logo, index) => (
                <div key={`r1-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative w-[124px] h-[86px] sm:w-[140px] sm:h-[98px] md:w-[156px] md:h-[108px] flex items-center justify-center">
                    <div className="relative flex h-[90%] w-[90%] items-center justify-center">
                      <div className="relative inline-block max-h-full max-w-full leading-none overflow-hidden rounded-lg sm:rounded-xl">
                        <img
                          src={new URL(`../assets/RetailersLogosTR/${logo}`, import.meta.url).href}
                          alt={logo.replace(/-removebg-preview\.(png|jpeg|jpg)$/, '').replace(/\.(png|jpeg|jpg)$/, '')}
                          className="block max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                        {newLogos.includes(logo as (typeof newLogos)[number]) && (
                          <div className="logo-new-ribbon" aria-hidden>
                            <span className="logo-new-ribbon__strip">NEW</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Existing stores — scrolls left to right */}
          <div className="overflow-hidden py-0 -mt-2 sm:-mt-2.5 md:-mt-3">
            <div className="logo-marquee-ltr flex w-max items-center gap-3 sm:gap-4 md:gap-5 whitespace-nowrap">
              {[...row2LogoFiles, ...row2LogoFiles].map((logo, index) => (
                <div key={`r2-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <div className="relative w-[124px] h-[86px] sm:w-[140px] sm:h-[98px] md:w-[156px] md:h-[108px] flex items-center justify-center">
                    <div className="relative flex h-[90%] w-[90%] items-center justify-center">
                      <div className="relative inline-block max-h-full max-w-full leading-none overflow-hidden rounded-lg sm:rounded-xl">
                        <img
                          src={new URL(`../assets/RetailersLogosTR/${logo}`, import.meta.url).href}
                          alt={logo.replace(/-removebg-preview\.(png|jpeg|jpg)$/, '').replace(/\.(png|jpeg|jpg)$/, '')}
                          className="block max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Problem Statement Section - "Why Local Retailers Are Losing Customers" Redesign */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white relative overflow-hidden border-t border-b border-slate-200/80">
        {/* Background glow circle */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header row */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-[11px] font-bold mb-2.5 border border-red-200 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>{language === 'HI' ? 'रिटेल चुनौतियाँ व तरक्की की राह' : 'RETAIL GROWTH GAP & CHALLENGES'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-2 leading-tight">
                {t('challenge.title')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {t('challenge.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

            {/* Left Column: 3D Visual Hero Graphic + Bottom Aligned Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-between h-full space-y-3"
            >
              <div className="relative p-2 bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 rounded-2xl shadow-xl border border-white/15 overflow-hidden group flex-1 flex items-center justify-center min-h-[220px]">
                <img
                  src={retailChallenges3dImg}
                  alt="Why Retailers Lose Customers"
                  className="w-full max-h-[240px] sm:max-h-[260px] rounded-xl shadow-inner object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Overlay Badge 1 */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-md border border-red-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-900">
                    {language === 'HI' ? '📉 40% पुराने ग्राहक खो जाते हैं' : '📉 40% Buyers Lost'}
                  </span>
                </div>

                {/* Floating Overlay Badge 2 */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-md border border-blue-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-900">
                    {language === 'HI' ? '⚡ इन्स्टेंट डिलीवरी' : '⚡ Instant Delivery'}
                  </span>
                </div>
              </div>

              <Button
                asChild
                size="md"
                className="h-10 px-4 shadow-lg shadow-blue-500/20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm w-full"
              >
                <Link to="/solutions" className="inline-flex items-center justify-center gap-1.5">
                  <span>{language === 'HI' ? 'देखें ल्यूम हर चुनौती को कैसे हल करता है' : 'See How Lume Solves Every Challenge'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right Column: 4 Compact Challenge Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {painPointsKeys.map((point, i) => {
                const colors = [
                  { border: "hover:border-blue-400", badge: "bg-blue-50 text-blue-700 border-blue-200", stat: language === 'HI' ? '⚡ ग्राहक खोने का ख़तरा' : '⚡ High Churn Risk' },
                  { border: "hover:border-amber-400", badge: "bg-amber-50 text-amber-700 border-amber-200", stat: language === 'HI' ? '⏳ 4.5 मिनट काउंटर देरी' : '⏳ 4.5 Min Wait' },
                  { border: "hover:border-purple-400", badge: "bg-purple-50 text-purple-700 border-purple-200", stat: language === 'HI' ? '💔 82% पर्ची फेंकी जाती है' : '💔 82% Trash Rate' },
                  { border: "hover:border-emerald-400", badge: "bg-emerald-50 text-emerald-700 border-emerald-200", stat: language === 'HI' ? '📊 फंसा हुआ उधार पैसा' : '📊 Uncollected Credit' },
                ];
                const theme = colors[i % colors.length];

                return (
                  <motion.div
                    key={point.key}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs hover:shadow-lg ${theme.border} hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
                  >
                    {/* Top Stat Ribbon */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border border-slate-200/80 group-hover:scale-110 transition-transform">
                        <img
                          src={point.icon}
                          alt=""
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${theme.badge}`}>
                        {theme.stat}
                      </span>
                    </div>

                    <div className="mb-2">
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1 leading-snug group-hover:text-blue-600 transition-colors">
                        {t(point.key)}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">
                        {t(point.subKey)}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span>{language === 'HI' ? `असर #0${i + 1}` : `Impact #0${i + 1}`}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="solutions" className="section-spacing bg-gradient-to-b from-slate-50 to-white">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
                {t('featuresSection.title')}
              </h2>
              <p className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>
                {t('featuresSection.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {benefitsKeys.map((benefit, i) => (
              <Link key={benefit.titleKey} to={benefit.href} className="block cursor-pointer">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col sm:flex-row gap-4 sm:gap-5 items-start cursor-pointer"
                >
                  <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gradient-to-br from-[var(--brand-tint)] to-white rounded-lg border border-[rgb(var(--brand-rgb)/0.1)] mx-auto sm:mx-0">
                    <img
                      src={benefit.icon}
                      alt={t(benefit.titleKey)}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#1b181f' }}>{t(benefit.titleKey)}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4f4f4f' }}>{t(benefit.descKey)}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-gradient-to-b from-white to-slate-50">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
                {t('howItWorks.title')}
              </h2>
              <p className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>
                {t('howItWorks.subtitle')}
              </p>
            </motion.div>
          </div>

          {/* Mobile: Vertical Timeline Layout */}
          <div className="md:hidden space-y-6">
            {howItWorksKeys.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Connecting Line */}
                {i < howItWorksKeys.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-[var(--brand)] to-[rgb(var(--brand-rgb)/0.3)]" />
                )}

                {/* Step Number Circle */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand)] text-white text-lg font-bold shadow-lg z-10">
                  {item.step}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <h3 className="text-base font-bold mb-2" style={{ color: '#1b181f' }}>{t(item.titleKey)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4f4f4f' }}>{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {howItWorksKeys.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative group"
              >
                {i < howItWorksKeys.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[rgb(var(--brand-rgb)/0.4)] to-transparent" />
                )}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[var(--brand)] text-white text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3" style={{ color: '#1b181f' }}>{t(item.titleKey)}</h3>
                <p className="text-xs sm:text-sm" style={{ color: '#4f4f4f' }}>{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="section-spacing bg-gradient-to-b from-white to-[var(--brand-tint)]">
        <div className="container-wide px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
              {t('industries.title')}
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
              {t('industries.subtitle')}
            </p>
          </div>

          {/* Horizontal Scrolling Banner */}
          <div className="border-t border-b border-gray-300 py-4 sm:py-5 overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4 animate-scroll-text whitespace-nowrap">
              {/* First set */}
              {industriesKeys.map((industry, i) => (
                <div key={`first-${i}`} className="flex items-center flex-shrink-0">
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: 'var(--brand)' }}>
                    {t(industry.key)}
                  </span>
                  <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
                </div>
              ))}
              <div className="flex items-center flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: 'var(--brand)' }}>
                  {language === 'HI' ? 'और भी कई तरह की दुकानें' : 'and many more'}
                </span>
                <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
              </div>
              {/* Duplicate set for seamless loop */}
              {industriesKeys.map((industry, i) => (
                <div key={`second-${i}`} className="flex items-center flex-shrink-0">
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: 'var(--brand)' }}>
                    {t(industry.key)}
                  </span>
                  <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
                </div>
              ))}
              <div className="flex items-center flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: 'var(--brand)' }}>
                  {language === 'HI' ? 'और भी कई तरह की दुकानें' : 'and many more'}
                </span>
                <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-2 sm:pb-3 lg:pb-4 relative overflow-hidden bg-gradient-to-b from-[var(--brand-tint)] via-white to-[var(--brand-tint)]">
        {/* Decorative background element - Left Top */}
        <div className="absolute left-8 top-[100px] w-[250px] h-[250px] opacity-15 pointer-events-none hidden lg:block">
          <img
            src={smileIcon}
            alt="Smile icon"
            className="w-full h-full object-contain"
            style={{
              filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(194deg) brightness(96%) contrast(89%) opacity(0.3)',
              transform: 'scale(1.2)'
            }}
          />
        </div>

        {/* Decorative background element - Right Bottom */}
        <div className="absolute right-0 bottom-0 w-[250px] h-[250px] opacity-15 pointer-events-none hidden lg:block">
          <img
            src={smileIcon}
            alt="Smile icon"
            className="w-full h-full object-contain"
            style={{
              filter: 'brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(194deg) brightness(96%) contrast(89%) opacity(0.3)',
              transform: 'scale(1.2)'
            }}
          />
        </div>

        <div className="site-container relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Quote Icon */}
              <div className="mb-2 sm:mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--brand)', transform: 'rotate(180deg)', opacity: 0.7 }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" fill="currentColor" />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
                {t('testimonials.quote')}
              </h2>
              <p className="text-base sm:text-lg" style={{ color: '#4f4f4f' }}>
                {t('testimonials.subtitle')}
              </p>
            </motion.div>
          </div>

          {/* Swiper */}
          <div className="mx-auto w-full max-w-[1400px] px-1 sm:px-3 md:px-4 lg:px-2">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: {
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[var(--brand)]',
              }}
              className="!pb-4 sm:!pb-5 [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:flex [&_.swiper-slide]:h-auto"
            >
              {testimonialSliderIndices.map((ti, i) => {
                const testimonial = memoizedTestimonials[ti];
                return (
                  <SwiperSlide key={`testimonial-${testimonial.author}-${ti}`} className="!h-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all h-full w-full flex flex-col min-h-[200px] sm:min-h-[220px] lg:min-h-[235px] relative overflow-hidden"
                    >
                      <span
                        aria-hidden
                        className="absolute right-3 top-1 text-5xl sm:text-6xl leading-none select-none pointer-events-none"
                        style={{ color: '#146fb5', opacity: 0.06, fontFamily: 'Archivo, sans-serif' }}
                      >
                        "
                      </span>
                      {/* Primary headline */}
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <div
                          className="text-sm sm:text-base font-bold leading-snug pr-2 flex-1"
                          style={{
                            color: '#1b181f',
                            fontFamily: 'Archivo, sans-serif',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          "{language === 'HI' && testimonial.quoteHI ? testimonial.quoteHI : testimonial.quote}"
                        </div>
                        <span className="shrink-0 text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold" style={{ color: '#146fb5', backgroundColor: '#eaf2f8' }}>
                          Verified
                        </span>
                      </div>

                      {/* Review text */}
                      <div className="relative flex-1">
                        <div
                          className="text-xs sm:text-sm leading-relaxed"
                          style={{
                            color: '#4b5563',
                            fontFamily: 'Inter, sans-serif',
                            display: '-webkit-box',
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {language === 'HI' && testimonial.textHI ? testimonial.textHI : testimonial.text}
                        </div>
                      </div>

                      {/* Bottom metadata */}
                      <div className="mt-3 pt-3 border-t border-border/60">
                        <div className="text-sm sm:text-base font-semibold uppercase tracking-wide" style={{ color: '#4b5563', fontFamily: 'Archivo, sans-serif', letterSpacing: '0.6px' }}>
                          {testimonial.logoSub}
                        </div>
                        <div className="text-[11px] sm:text-xs uppercase tracking-wide mt-0.5" style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', letterSpacing: '0.8px' }}>
                          {testimonial.logo}
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing !pt-1 sm:!pt-2 md:!pt-3 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[rgb(var(--brand-rgb)/0.1)]" />
        <div className="container-tight text-center relative z-10 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6" style={{ color: '#1b181f' }}>
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
              {t('cta.description')}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
