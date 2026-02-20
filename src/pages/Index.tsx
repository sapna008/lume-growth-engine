import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
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
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import dashboardDesktop from "@/assets/hero-banner/dashboard-hindii.png";
import dashboardEnglish from "@/assets/hero-banner/dashboard-english.png";
import mobileHeroVideo from "@/assets/hero-banner/mobile-hero.mp4";
import mobileHeroVideoEnglish from "@/assets/hero-banner/mobile-hero-english.mp4";
import billVideo from "@/assets/hero-banner/bill-vdoo.mp4";
import bgImage from "@/assets/bg-1.avif";
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
  'AaraCouture-removebg-preview.png',
  'AMStaationers-removebg-preview.png',
  'Auction-removebg-preview.png',
  'BottomForGroom-removebg-preview.png',
  'CakePointPartySpot-removebg-preview.png',
  'Canon-removebg-preview.png',
  'Golden-removebg-preview.png',
  'GopalDiary-removebg-preview.png',
  'Gunjan-removebg-preview.png',
  'HarrierLuggage-removebg-preview.png',
  'HeartyMart-removebg-preview.png',
  'HPWorld-removebg-preview.png',
  'JainTraders-removebg-preview.png',
  'JohnNBrown-removebg-preview.png',
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
  'Sonika-removebg-preview.png',
  'Surabhi-removebg-preview.png',
  'TheCakeShop-removebg-preview.png',
  'TheCakeWay-removebg-preview.png',
  'Vastram-removebg-preview.png',
  'Veera-removebg-preview.png',
];

// Stats will be translated in component
const statsKeys = [
  { value: "250+", key: "stats.retailers" },
  { value: "₹40Cr+", key: "stats.transactions" },
  { value: "25%", key: "stats.revenue" },
  { value: "4.8/5", key: "stats.rating" },
];

// Pain points will be translated in component
const painPointsKeys = [
  { icon: challengeIcon1, key: "challenge.point1" },
  { icon: challengeIcon2, key: "challenge.point2" },
  { icon: challengeIcon3, key: "challenge.point3" },
  { icon: challengeIcon4, key: "challenge.point4" },
];

// Benefits will be translated in component
const benefitsKeys = [
  {
    icon: benefitIcon1,
    titleKey: "benefit.fastBilling.title",
    descKey: "benefit.fastBilling.desc",
  },
  {
    icon: benefitIcon2,
    titleKey: "benefit.posIntegration.title",
    descKey: "benefit.posIntegration.desc",
  },
  {
    icon: benefitIcon3,
    titleKey: "benefit.engagement.title",
    descKey: "benefit.engagement.desc",
  },
  {
    icon: benefitIcon4,
    titleKey: "benefit.customerCapture.title",
    descKey: "benefit.customerCapture.desc",
  },
  {
    icon: benefitIcon5,
    titleKey: "benefit.smartOffers.title",
    descKey: "benefit.smartOffers.desc",
  },
  {
    icon: benefitIcon6,
    titleKey: "benefit.dashboard.title",
    descKey: "benefit.dashboard.desc",
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
    logo: "ELECTRONICS",
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
    logo: "ELECTRONICS",
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
    logo: "ELECTRONICS",
    logoSub: "GEONET HP WORLD",
    quote: "Best investment for our business!",
    quoteHI: "हमारे बिज़नेस के लिए अब तक का सबसे अच्छा निवेश!",
    text: "Lume has made billing so much faster and easier. The automatic customer capture and credit tracking features have saved us hours every day. Highly recommended!",
    textHI: "ल्यूम ने हमारी बिलिंग को बहुत तेज़ और आसान बना दिया है। ऑटोमैटिक कस्टमर कैप्चर और क्रेडिट ट्रैकिंग फ़ीचर्स रोज़ के कई घंटे बचा देते हैं। हम इसे हर रिटेलर को सलाह देंगे।",
    author: "Rajesh Verma",
    role: "Store Manager, GEONET HP WORLD",
    image: testimonialImg7,
  },
];

export default function Index() {
  const { t, language } = useLanguage();
  useSEO(
    'Digital Billing & Retail Growth for Indian Stores',
    'Lume helps Indian retailers with digital billing, customer insights, loyalty & campaigns. One simple platform. Grow your store.'
  );
  
  // Memoize testimonials to prevent re-renders
  const memoizedTestimonials = useMemo(() => testimonials, []);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        {/* Background Image */}
        <img 
          src={bgImage}
          alt="Retail POS billing software dashboard for Indian stores"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        {/* Gradient Overlay - Light blue overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, rgba(234, 242, 248, 0.7) 0%, rgba(212, 230, 243, 0.5) 100%)',
            zIndex: 1 
          }}
        />
        <Header />
        <div className={`relative z-10 ${language === 'HI' ? 'pt-10 sm:pt-18 lg:pt-20' : 'pt-10 sm:pt-12 lg:pt-14'}`}>
          <div className={`container-wide relative z-10 ${language === 'HI' ? 'py-6 sm:py-14 lg:py-18' : 'py-6 sm:py-8 lg:py-10'}`}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 ${language === 'HI' ? 'mb-4 sm:mb-8' : 'mb-4 sm:mb-6'}`}>
                  <span className="w-2 h-2 rounded-full bg-[#146fb5] animate-pulse" />
                  <span className={`font-medium ${language === 'HI' ? 'text-xs' : 'text-sm'}`} style={{ color: '#1b181f' }}>{t('hero.badge')}</span>
                </div>
                
                <h1 className={`font-display font-bold ${language === 'HI' ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-7 leading-[1.5]' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 leading-tight'}`} style={{ color: '#1b181f' }}>
                  {language === 'HI' ? (
                    <>
                      {/* Mobile: 2 lines — Line 1: title + स्मार्ट POS, Line 2: और डिजिटल बिलिंग से बढ़ाइए */}
                      <div className="sm:hidden">
                        <div className="block">
                          {t('hero.title')}{" "}
                          <span style={{ color: '#146fb5' }}>{t('hero.titleHighlightPart1')}</span>
                        </div>
                        <div className="block pt-2" style={{ color: '#146fb5' }}>
                          {t('hero.titleHighlightPart2') || t('hero.titleHighlightLine2')}
                        </div>
                      </div>
                      {/* Desktop: 3 lines — Line 1: title, Line 2: स्मार्ट POS और डिजिटल, Line 3: बिलिंग से बढ़ाइए */}
                      <div className="hidden sm:block">
                        <div className="block">{t('hero.title')}</div>
                        <div className="block pt-2 sm:pt-3" style={{ color: '#146fb5' }}>{t('hero.titleHighlightPart1')} {t('hero.titleHighlightPart2')}</div>
                        {t('hero.titleHighlightLine2') ? (
                          <div className="block pt-1.5 sm:pt-2" style={{ color: '#146fb5' }}>{t('hero.titleHighlightLine2')}</div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <>
                      {t('hero.title')}{" "}
                      <span style={{ color: '#146fb5' }}>{t('hero.titleHighlight')}</span>
                    </>
                  )}
                </h1>
                
                <p className={`max-w-lg ${language === 'HI' ? 'text-xs sm:text-sm md:text-base mb-7 sm:mb-9' : 'text-sm sm:text-base md:text-lg mb-4 sm:mb-6'}`} style={{ color: '#4f4f4f' }}>
                  {t('hero.description')}
                </p>
                
                <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button size="xl" variant="hero" asChild className="shadow-lg hover:shadow-xl transition-shadow h-10 sm:h-12 text-sm sm:text-base px-4 sm:px-6 flex-1 sm:flex-initial">
                    <a href="https://play.google.com/store/apps/details?id=com.mhjs.retailerapp" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-1.36-2.24l2.27 2.27L21.95 12l-4.48-4.48-2.27 2.27L17.45 12l-1.99 1.88zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/>
                      </svg>
                      {t('hero.download')}
                    </a>
                  </Button>
                  <Button size="xl" variant="hero-outline" asChild className="h-10 sm:h-12 text-sm sm:text-base px-4 sm:px-6 flex-1 sm:flex-initial">
                    <Link to="/demo">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                      {t('hero.watchDemo')}
                    </Link>
                  </Button>
                </div>
                
                {/* Desktop: testimonials above video */}
                <div className={`hidden sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 ${language === 'HI' ? 'mt-6 sm:mt-8' : 'mt-4 sm:mt-6'}`}>
                  <div className="flex -space-x-3">
                    {memoizedTestimonials.slice(0, 4).map((testimonial, i) => (
                      <div key={`hero-testimonial-${testimonial.author}-${i}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg overflow-hidden" style={{ borderColor: '#146fb5' }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="flex items-center gap-1" style={{ color: '#146fb5' }}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                    <span style={{ color: '#4f4f4f' }}>{t('hero.rating')}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Desktop only (lg+): layered desktop image + video overlay */}
                <div className="relative z-10 mt-8 lg:mt-0 hidden lg:block">
                  <div className="relative -mt-16 lg:-mt-20 xl:-mt-24">
                    {/* Desktop Image - right-aligned */}
                    <div className="flex justify-end w-full -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-12 xl:-mr-16" style={{ paddingRight: 0, marginRight: 0 }}>
                      <img
                        src={language === 'EN' ? dashboardEnglish : dashboardDesktop}
                        alt="Retail POS billing software dashboard for Indian stores"
                        className="max-w-[200px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[440px] xl:max-w-[520px] drop-shadow-2xl"
                        style={{
                          zIndex: 1,
                          marginRight: 0,
                          paddingRight: 0,
                          borderTopLeftRadius: '0.5rem',
                          borderBottomLeftRadius: '0.5rem',
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0
                        }}
                      />
                    </div>
                    {/* Bill video - foreground overlay bottom-left (2mm up) */}
                    <div className="absolute -bottom-24 sm:-bottom-22 md:-bottom-20 lg:-bottom-18 xl:-bottom-16 -left-2 sm:left-0 md:left-2 lg:left-6 -translate-y-1" style={{ zIndex: 20 }}>
                      <video
                        src={billVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-40 drop-shadow-2xl rounded-lg border-2 border-white shadow-2xl"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.8)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile + Tablet: full-width hero video */}
                <div className="lg:hidden mt-2 w-full -translate-y-0.5">
                  <video
                    src={language === 'EN' ? mobileHeroVideoEnglish : mobileHeroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto drop-shadow-2xl rounded-xl"
                  />
                  {/* Mobile: testimonials below video */}
                  <div className="mt-4 flex flex-col items-center gap-3">
                    <div className="flex -space-x-3">
                      {memoizedTestimonials.slice(0, 4).map((testimonial, i) => (
                        <div key={`mobile-testimonial-${testimonial.author}-${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden" style={{ borderColor: '#146fb5' }}>
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-center">
                      <div className="flex items-center justify-center gap-1 mb-1" style={{ color: '#146fb5' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span style={{ color: '#4f4f4f' }}>{t('hero.rating')}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#146fb5]/30 to-primary/20 rounded-3xl blur-3xl pointer-events-none -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white shadow-xl relative z-10 -mt-6 sm:-mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-5xl rounded-xl sm:rounded-2xl border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {statsKeys.map((stat, i) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-4 sm:p-6 text-center group hover:bg-primary/5 transition-colors rounded-xl"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold group-hover:scale-110 transition-transform" style={{ color: '#146fb5' }}>{stat.value}</div>
                <div className="text-xs sm:text-sm mt-1" style={{ color: '#4f4f4f' }}>{t(stat.key)}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Retailer Logos Banner */}
        <div className="relative z-10 -mt-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 sm:py-6 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            {retailerLogos.map((logo, index) => (
              <div key={`first-${index}`} className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
                <img 
                  src={new URL(`../assets/RetailersLogosTR/${logo}`, import.meta.url).href}
                  alt={logo.replace('-removebg-preview.png', '')}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {retailerLogos.map((logo, index) => (
              <div key={`second-${index}`} className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
                <img 
                  src={new URL(`../assets/RetailersLogosTR/${logo}`, import.meta.url).href}
                  alt={logo.replace('-removebg-preview.png', '')}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-white">
        <div className="container-wide px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: '#1b181f' }}>
                {t('challenge.title')}
              </h2>
              <p className="text-lg" style={{ color: '#4f4f4f' }}>
                {t('challenge.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {painPointsKeys.map((point, i) => (
              <motion.div
                key={point.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#eaf2f8] to-white border border-[#146fb5]/20 rounded-xl p-6 sm:p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <img 
                  src={point.icon} 
                  alt="" 
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform"
                  role="presentation"
                />
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#1b181f' }}>{t(point.key)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-[#146fb5]/10 border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden mt-6 sm:mt-8"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4" style={{ color: '#146fb5' }}>
                {t('challenge.solution')}
              </h3>
              <p className="text-sm sm:text-base max-w-2xl mx-auto mb-3 sm:mb-4" style={{ color: '#4f4f4f' }}>
                {t('challenge.solutionDesc')}
              </p>
              {t('challenge.supportLine') && (
                <p className="text-xs sm:text-sm mb-6 sm:mb-8" style={{ color: '#4f4f4f' }}>
                  {t('challenge.supportLine')}
                </p>
              )}
              <Button 
                size="lg" 
                variant="cta" 
                asChild 
                className={`shadow-lg w-full sm:w-auto ${language === 'HI' ? '!whitespace-normal text-xs sm:text-base !px-4 sm:!px-6' : ''}`}
              >
                <Link to="/for-retailers" className="flex items-center justify-center w-full">
                  <span className={language === 'HI' ? 'text-center leading-tight' : ''}>{t('challenge.cta')}</span>
                  <ArrowRight className={`${language === 'HI' ? 'w-3.5 h-3.5 sm:w-4 sm:h-4' : 'w-4 h-4'} ${language === 'HI' ? 'ml-1.5 sm:ml-1' : 'ml-1'} flex-shrink-0`} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section-spacing bg-gradient-to-b from-slate-50 to-white">
        <div className="container-wide px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
                {language === 'HI' ? (
                  <>{t('hero.title')} {t('hero.titleHighlight')}</>
                ) : (
                  <>{t('hero.title')} <span style={{ color: '#146fb5' }}>{t('hero.titleHighlight')}</span></>
                )}
              </h2>
              <p className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>
                {t('hero.description')}
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {benefitsKeys.map((benefit, i) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col sm:flex-row gap-4 sm:gap-5 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gradient-to-br from-[#eaf2f8] to-white rounded-lg border border-[#146fb5]/10 mx-auto sm:mx-0">
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
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-gradient-to-b from-white to-slate-50">
        <div className="container-wide px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
                  <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-[#146fb5] to-[#146fb5]/30" />
                )}
                
                {/* Step Number Circle */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#146fb5] text-white text-lg font-bold shadow-lg z-10">
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
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#146fb5]/40 to-transparent" />
                )}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#146fb5] text-white text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3" style={{ color: '#1b181f' }}>{t(item.titleKey)}</h3>
                <p className="text-xs sm:text-sm" style={{ color: '#4f4f4f' }}>{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button size="lg" variant="cta" asChild className="shadow-lg">
              <Link to="/book-demo">
                {t('howItWorks.cta')}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-spacing bg-gradient-to-b from-white to-[#eaf2f8]">
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
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: '#146fb5' }}>
                    {t(industry.key)}
                  </span>
                  <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
                </div>
              ))}
              <div className="flex items-center flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: '#146fb5' }}>
                  {language === 'HI' ? 'और भी कई तरह की दुकानें' : 'and many more'}
                </span>
                <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
              </div>
              {/* Duplicate set for seamless loop */}
              {industriesKeys.map((industry, i) => (
                <div key={`second-${i}`} className="flex items-center flex-shrink-0">
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: '#146fb5' }}>
                    {t(industry.key)}
                  </span>
                  <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
                </div>
              ))}
              <div className="flex items-center flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap" style={{ color: '#146fb5' }}>
                  {language === 'HI' ? 'और भी कई तरह की दुकानें' : 'and many more'}
                </span>
                <span className="mx-3 sm:mx-4 text-gray-300 font-bold" style={{ color: '#d1d5db' }}>|</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-[#eaf2f8] via-white to-[#eaf2f8]">
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

        <div className="container-wide px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Quote Icon */}
              <div className="mb-2 sm:mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#146fb5', transform: 'rotate(180deg)', opacity: 0.7 }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" fill="currentColor"/>
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
          <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
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
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#146fb5]',
              }}
              className="!pb-12"
            >
            {memoizedTestimonials.map((testimonial, i) => (
                <SwiperSlide key={`testimonial-${testimonial.author}-${i}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-xl pt-6 px-6 pb-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col min-h-[260px] sm:min-h-[280px] md:min-h-[320px]"
                  >
                    {/* Logo */}
                    <div className="mb-3">
                      <div className="text-xl font-bold" style={{ color: '#4b5563', fontFamily: 'Archivo, sans-serif' }}>
                        {testimonial.logo}
                </div>
                      <div className="text-xs uppercase tracking-wider" style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', letterSpacing: '1px' }}>
                        {testimonial.logoSub}
                  </div>
                </div>

                    {/* Quote */}
                    <div className="text-lg font-bold mb-3" style={{ color: '#1b181f', fontFamily: 'Archivo, sans-serif', lineHeight: '1.4' }}>
                      {language === 'HI' && testimonial.quoteHI ? testimonial.quoteHI : testimonial.quote}
                    </div>

                    {/* Text */}
                    <div className="text-sm mb-0 leading-relaxed flex-1" style={{ color: '#4b5563', fontFamily: 'Inter, sans-serif' }}>
                      {language === 'HI' && testimonial.textHI ? testimonial.textHI : testimonial.text}
                    </div>
              </motion.div>
                </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#146fb5]/10" />
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
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" variant="hero" asChild className="shadow-xl text-base sm:text-lg">
                    <Link to="/book-demo">
                      {t('cta.startTrial')}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
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
