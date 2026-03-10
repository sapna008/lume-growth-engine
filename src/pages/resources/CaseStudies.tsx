import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import smileIcon from "@/assets/smile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Clock, 
  Award, 
  BarChart3,
  MessageSquare,
  Gift,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Target,
  Lightbulb,
  Zap,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const getLogoUrl = (filename: string) =>
  new URL(`../../assets/RetailersLogosTR/${filename}`, import.meta.url).href;

const getInstagramEmbedUrl = (url: string) => {
  // Convert to official embed URL: https://www.instagram.com/reel/<shortcode>/embed
  const match =
    url.match(/instagram\.com\/reel\/([^/?#]+)\//i) ||
    url.match(/instagram\.com\/reel\/([^/?#]+)/i);
  const shortcode = match?.[1];
  return shortcode ? `https://www.instagram.com/reel/${shortcode}/embed` : url;
};

const videoTestimonials = [
  {
    id: "golden-steel",
    title: "Golden Steel",
    titleHI: "Golden Steel",
    url: "https://www.instagram.com/reel/DObCsAFiU8S/?igsh=MXh6MnQ4b3oyN2tncw==",
    profileUrl: "https://www.instagram.com/the_lume.app/",
  },
  {
    id: "city-shoes",
    title: "City Shoes",
    titleHI: "City Shoes",
    url: "https://www.instagram.com/reel/DOqWfX5j020/?igsh=emppa2M2eTJldGds",
    profileUrl: "https://www.instagram.com/the_lume.app/",
  },
  {
    id: "customer-review-1",
    title: "Customer Review",
    titleHI: "कस्टमर रिव्यू",
    url: "https://www.instagram.com/reel/DOsdwk6iOpJ/?igsh=M2lpbW41MjlobnZt",
    profileUrl: "https://www.instagram.com/the_lume.app/",
  },
  {
    id: "ladies-garment",
    title: "Ladies Garment Store",
    titleHI: "लेडीज़ गारमेंट स्टोर",
    url: "https://www.instagram.com/reel/DO-wwx8kX2E/?igsh=MW1tN2NlYnoxOTZneA==",
    profileUrl: "https://www.instagram.com/the_lume.app/",
  },
  {
    id: "customer-review-2",
    title: "Customer Review",
    titleHI: "कस्टमर रिव्यू",
    url: "https://www.instagram.com/reel/DPCQO0XiViK/?igsh=MTB5OGIyNDJzbnl5ag==",
    profileUrl: "https://www.instagram.com/the_lume.app/",
  },
];

// Retailer Success Stories — real brands with logos, why they chose Lume, testimonials
const successStories = [
  {
    id: "senoritas",
    name: "Señorita's Jewellery",
    nameHI: "सेन्योरिटाज़ ज्वैलरी",
    category: "Fashion Jewellery",
    categoryHI: "फ़ैशन ज्वैलरी",
    location: "Mumbai & Thane",
    stores: "10 Stores",
    logo: "senorita-removebg-preview.png",
    whyChose: [
      "Increase repeat customers and store visits",
      "Run loyalty rewards and cashback programs",
      "Engage customers through digital bills and offers",
      "Promote new products, collections and campaigns",
      "Improve customer relationships and retention",
    ],
    whyChoseHI: [
      "रिपीट कस्टमर और स्टोर विज़िट बढ़ाना",
      "लॉयल्टी रिवॉर्ड्स और कैशबैक प्रोग्राम चलाना",
      "डिजिटल बिल और ऑफ़र से कस्टमर एंगेज करना",
      "नए प्रोडक्ट्स, कलेक्शन और कैंपेन प्रोमोट करना",
      "कस्टमर रिलेशन और रिटेंशन बेहतर करना",
    ],
    testimonial: "Lume helps us track customers across all our stores and run reward campaigns that bring them back.",
    testimonialHI: "ल्यूम से हम सभी स्टोर्स के कस्टमर्स ट्रैक कर पाते हैं और रिवॉर्ड कैंपेन चलाते हैं जो उन्हें वापस लाते हैं।",
  },
  {
    id: "timesprime",
    name: "Times Prime",
    nameHI: "टाइम्स प्राइम",
    category: "Watches & Mobile Store",
    categoryHI: "घड़ियाँ और मोबाइल स्टोर",
    location: "Mumbai",
    stores: null,
    logo: null,
    whyChose: [
      "Increase repeat purchases using campaigns",
      "Run targeted promotions for mobile and accessories",
      "e-bill",
      "Promotional offers for returning customers",
    ],
    whyChoseHI: [
      "कैंपेन से रिपीट खरीद बढ़ाना",
      "मोबाइल और एक्सेसरीज़ के लिए टार्गेटेड प्रोमो",
      "ई-बिल",
      "वापस आने वाले ग्राहकों के लिए ऑफ़र",
    ],
    testimonial: "With Lume it’s easier to bring phone buyers back for accessories instead of losing them to online offers.",
    testimonialHI: "ल्यूम की मदद से अब मोबाइल खरीदने वाले ग्राहक एक्सेसरीज़ के लिए हमारी ही दुकान पर वापस आते हैं, ऑनलाइन ऑफ़र की तरफ नहीं जाते।",
  },
  {
    id: "dixit",
    name: "Mobile Dixit",
    nameHI: "मोबाइल दीक्षित",
    category: "Mobile Store",
    categoryHI: "मोबाइल स्टोर",
    location: "Mumbai & Thane",
    stores: "19 Stores",
    logo: "dixit-removebg-preview.png",
    whyChose: [
      "Engage customers using e-bill",
      "Campaign and track repeat purchases",
      "WhatsApp engagement campaigns",
    ],
    whyChoseHI: [
      "ई-बिल से कस्टमर एंगेज करना",
      "कैंपेन और रिपीट खरीद ट्रैक करना",
      "WhatsApp एंगेजमेंट कैंपेन",
    ],
    testimonial: "Earlier we had no way to track repeat buyers. Now we can see who came back and which campaigns worked.",
    testimonialHI: "पहले हमें नहीं पता चलता था कौन दोबारा खरीदने आया। अब साफ दिखता है कौन वापस आया और कौन‑सा कैंपेन चला।",
  },
  {
    id: "beyondeez",
    name: "Beyondeez",
    nameHI: "बियॉन्डीज़",
    category: "Men & Women Fashion",
    categoryHI: "मेन और वूमन फ़ैशन",
    location: "Thane",
    stores: null,
    special: "Using Lume mPOS Billing System",
    specialHI: "ल्यूम mPOS बिलिंग सिस्टम इस्तेमाल कर रहे हैं",
    logo: "byondezines-log.png",
    whyChose: [
      "Modern POS billing for fashion retail",
      "Customer database creation",
      "Automated reward campaigns",
      "Low cost with zero hardware",
      "Easy to use - Three steps billing",
      "Cloud based central system for multi stores",
      "Customer purchase tracking",
      "Loyalty rewards for repeat buyers",
    ],
    whyChoseHI: [
      "फ़ैशन रिटेल के लिए मॉडर्न POS बिलिंग",
      "कस्टमर डेटाबेस बनाना",
      "ऑटोमेटेड रिवॉर्ड कैंपेन",
      "ज़ीरो हार्डवेयर के साथ कम लागत",
      "तीन स्टेप बिलिंग - आसान इस्तेमाल",
      "मल्टी स्टोर के लिए क्लाउड सेंट्रल सिस्टम",
      "कस्टमर खरीद ट्रैकिंग",
      "रिपीट बायर्स के लिए लॉयल्टी रिवॉर्ड्स",
    ],
    testimonial: "Lume mPOS keeps billing fast and simple, and still gives us the data and rewards engine we need for fashion retail.",
    testimonialHI: "ल्यूम mPOS से बिलिंग तेज़ और आसान रहती है, फिर भी हमें फ़ैशन रिटेल के लिए ज़रूरी डेटा और रिवॉर्ड इंजन मिल जाता है।",
  },
  {
    id: "aara-shreesanskar",
    name: "Aara Fashion & Shree Sanskar",
    nameHI: "आरा फ़ैशन और श्री संस्कार",
    category: "Fashion Retail",
    categoryHI: "फ़ैशन रिटेल",
    location: "Dadar, Mumbai",
    stores: null,
    logo: "shreesanskar-removebg-preview.png",
    whyChose: [
      "Increase repeat customers",
      "Run festival promotions",
      "Build long-term customer relationships",
      "Digital billing",
      "Customer loyalty rewards",
      "Seasonal campaign management",
    ],
    whyChoseHI: [
      "रिपीट कस्टमर बढ़ाना",
      "फेस्टिवल प्रोमो चलाना",
      "लॉन्ग-टर्म कस्टमर रिलेशन बनाना",
      "डिजिटल बिलिंग",
      "कस्टमर लॉयल्टी रिवॉर्ड्स",
      "सीज़नल कैंपेन मैनेजमेंट",
    ],
    testimonial: "Seasonal saree and fashion campaigns are much easier with Lume – one place to run offers and track loyal customers.",
    testimonialHI: "अब सीज़नल साड़ी और फ़ैशन कैंपेन ल्यूम से बहुत आसान हो गए हैं – एक ही जगह से ऑफ़र चलाना और लॉयल कस्टमर ट्रैक करना संभव है।",
  },
  {
    id: "tulsi",
    name: "Tulsi Footwear",
    nameHI: "तुलसी फुटवियर",
    category: "Footwear Retail",
    categoryHI: "फुटवियर रिटेल",
    location: "Thane",
    stores: null,
    logo: "tulsi-removebg-preview.png",
    whyChose: [
      "Bring customers back for repeat purchases",
      "Build a customer contact database",
      "Run promotional offers",
      "Customer mobile billing",
      "Customer engagement campaigns",
    ],
    whyChoseHI: [
      "रिपीट खरीद के लिए ग्राहक वापस लाना",
      "कस्टमर कॉन्टैक्ट डेटाबेस बनाना",
      "प्रोमो ऑफ़र चलाना",
      "कस्टमर मोबाइल बिलिंग",
      "कस्टमर एंगेजमेंट कैंपेन",
    ],
    testimonial: "Our customers now receive e-bills and rewards on every visit, so they remember Tulsi Footwear for their next pair.",
    testimonialHI: "अब हर विज़िट पर ई‑बिल और रिवॉर्ड जाने से ग्राहक अगली खरीद के लिए तुलसी फुटवियर को याद रखते हैं।",
  },
  {
    id: "patel",
    name: "Patel Sarees Pvt Ltd",
    nameHI: "पटेल साड़ी प्राइवेट लिमिटेड",
    category: "Saree Store",
    categoryHI: "साड़ी स्टोर",
    location: "Thane Station Road",
    stores: null,
    logo: "PatelSareesPvt-removebg-preview.png",
    whyChose: [
      "Track repeat customers",
      "Run festive saree promotions",
      "Build long-term loyalty",
      "Digital billing",
      "Loyalty cashback",
      "Festival reward campaigns",
    ],
    whyChoseHI: [
      "रिपीट कस्टमर ट्रैक करना",
      "फेस्टिवल साड़ी प्रोमो चलाना",
      "लॉन्ग-टर्म लॉयल्टी बनाना",
      "डिजिटल बिलिंग",
      "लॉयल्टी कैशबैक",
      "फेस्टिवल रिवॉर्ड कैंपेन",
    ],
    testimonial: "Festival saree campaigns with cashback rewards keep our regular customers coming back to Patel Sarees.",
    testimonialHI: "कैशबैक रिवॉर्ड वाले फेस्टिवल साड़ी कैंपेन की वजह से हमारे रेगुलर कस्टमर बार‑बार पटेल साड़ी पर वापस आते हैं।",
  },
];

// Structured case studies: Store profile → Problem → Lume solution → Results (from docs)
const caseStudies = [
  {
    id: 1,
    storeName: "Fashion Retail Store",
    storeNameHI: "फ़ैशन रिटेल स्टोर",
    location: "City retail market",
    locationHI: "शहरी रिटेल मार्केट",
    businessType: "Women's Fashion Boutique — Sarees, ethnic wear, dress materials",
    businessTypeHI: "महिला फ़ैशन बुटीक — साड़ी, एथनिक वियर, ड्रेस मैटीरियल",
    icon: Store,
    challenge: [
      "No customer database",
      "No system to bring customers back",
      "Hard to promote new collections",
      "Sales depended mostly on footfall",
    ],
    challengeHI: [
      "ग्राहक डेटाबेस नहीं था",
      "ग्राहकों को वापस लाने की कोई व्यवस्था नहीं थी",
      "नए कलेक्शन प्रोमोट करना मुश्किल",
      "सेल ज़्यादातर फुटफॉल पर निर्भर थी",
    ],
    solution: [
      "Implemented Lume reward system — Next Visit Reward",
      "Spend ₹2,000 → Get ₹200 reward for next visit",
      "Customers received message after purchase about their reward",
    ],
    solutionHI: [
      "ल्यूम रिवॉर्ड सिस्टम — नेक्स्ट विज़िट रिवॉर्ड लॉन्च किया",
      "₹2,000 खर्च करो → अगली विज़िट पर ₹200 रिवॉर्ड",
      "खरीद के बाद ग्राहक को रिवॉर्ड की मैसेज मिली",
    ],
    results: [
      "Repeat customers increased significantly",
      "Customer database started growing daily",
      "Customers returned to use their rewards",
      "Higher engagement during festive campaigns",
    ],
    resultsHI: [
      "रिपीट कस्टमर काफ़ी बढ़े",
      "कस्टमर डेटाबेस रोज़ बढ़ने लगा",
      "ग्राहक रिवॉर्ड इस्तेमाल करने वापस आने लगे",
      "फेस्टिवल कैंपेन में ज़्यादा एंगेजमेंट",
    ],
    takeaway: "Repeat customers increased because shoppers returned to use rewards.",
    takeawayHI: "रिवॉर्ड इस्तेमाल करने ग्राहक वापस आए तो रिपीट कस्टमर बढ़ गए।",
  },
  {
    id: 2,
    storeName: "Mobile & Electronics Store",
    storeNameHI: "मोबाइल और इलेक्ट्रॉनिक्स स्टोर",
    location: "City retail",
    locationHI: "शहरी रिटेल",
    businessType: "Mobile & Accessories — Smartphones, chargers, earphones, accessories",
    businessTypeHI: "मोबाइल और एक्सेसरीज़ — स्मार्टफोन, चार्जर, ईयरफोन, एक्सेसरीज़",
    icon: Smartphone,
    challenge: [
      "No system to retain mobile buyers",
      "Customers went to other shops for accessories",
      "No marketing communication with past buyers",
    ],
    challengeHI: [
      "मोबाइल खरीदने वालों को रोकने की कोई व्यवस्था नहीं थी",
      "ग्राहक एक्सेसरीज़ के लिए दूसरी दुकानों पर जाते थे",
      "पुराने खरीदारों से कोई मार्केटिंग कम्युनिकेशन नहीं",
    ],
    solution: [
      "Lume purchase rewards — Buy phone worth ₹20,000 → Get ₹500 reward for next purchase",
      "Customers received reward messages encouraging them to return",
    ],
    solutionHI: [
      "ल्यूम परचेस रिवॉर्ड — ₹20,000 का फोन खरीदो → अगली खरीद पर ₹500 रिवॉर्ड",
      "ग्राहकों को वापस आने के लिए रिवॉर्ड मैसेज मिले",
    ],
    results: [
      "More customers returned for accessories",
      "Accessory sales improved",
      "Store built a customer database",
    ],
    resultsHI: [
      "ज़्यादा ग्राहक एक्सेसरीज़ के लिए वापस आए",
      "एक्सेसरी सेल में सुधार",
      "स्टोर का कस्टमर डेटाबेस बना",
    ],
    takeaway: "Phone buyers came back to buy accessories using their reward.",
    takeawayHI: "फोन खरीदने वाले रिवॉर्ड इस्तेमाल करने एक्सेसरीज़ लेने वापस आए।",
  },
  {
    id: 3,
    storeName: "Jewelry Store",
    storeNameHI: "ज्वैलरी स्टोर",
    location: "City retail",
    locationHI: "शहरी रिटेल",
    businessType: "Gold jewelry, diamond jewelry, wedding jewelry",
    businessTypeHI: "गोल्ड ज्वैलरी, डायमंड ज्वैलरी, वेडिंग ज्वैलरी",
    icon: Store,
    challenge: [
      "Difficult to remind customers about future purchases",
      "Limited communication with previous buyers",
      "Hard to promote festive collections",
    ],
    challengeHI: [
      "ग्राहकों को भविष्य की खरीद के लिए याद दिलाना मुश्किल",
      "पुराने खरीदारों से सीमित कम्युनिकेशन",
      "फेस्टिवल कलेक्शन प्रोमोट करना मुश्किल",
    ],
    solution: [
      "Festival reward campaigns using Lume — Spend ₹50,000 → Get ₹1,000 reward for next visit",
      "Customers received notifications about their rewards",
    ],
    solutionHI: [
      "ल्यूम से फेस्टिवल रिवॉर्ड कैंपेन — ₹50,000 खर्च करो → अगली विज़िट पर ₹1,000 रिवॉर्ड",
      "ग्राहकों को रिवॉर्ड की नोटिफिकेशन मिलीं",
    ],
    results: [
      "More repeat visits during festivals",
      "Stronger customer relationships",
      "Increased engagement with loyal buyers",
    ],
    resultsHI: [
      "फेस्टिवल में ज़्यादा रिपीट विज़िट",
      "मज़बूत कस्टमर रिलेशन",
      "लॉयल बायर्स के साथ बढ़ी एंगेजमेंट",
    ],
    takeaway: "Festival rewards encouraged customers to return for future purchases.",
    takeawayHI: "फेस्टिवल रिवॉर्ड्स ने ग्राहकों को भविष्य की खरीद के लिए वापस आने को प्रोत्साहित किया।",
  },
];

const testimonials = [
  {
    quote: "Customers like the reward system and many come back to use their reward.",
    quoteHI: "ग्राहकों को रिवॉर्ड सिस्टम पसंद है और कई रिवॉर्ड इस्तेमाल करने वापस आते हैं।",
    author: "Fashion Retail Store",
    locationHI: "फ़ैशन रिटेल स्टोर",
    location: "City retail market",
  },
  {
    quote: "Customers often come back to use their reward when buying accessories.",
    quoteHI: "ग्राहक अक्सर एक्सेसरीज़ खरीदते समय रिवॉर्ड इस्तेमाल करने वापस आते हैं।",
    author: "Mobile & Electronics Store",
    locationHI: "मोबाइल व इलेक्ट्रॉनिक्स स्टोर",
    location: "City retail",
  },
  {
    quote: "Rewards help remind customers to visit the store again.",
    quoteHI: "रिवॉर्ड्स ग्राहकों को दुकान पर दोबारा आने की याद दिलाते हैं।",
    author: "Jewelry Store",
    locationHI: "ज्वैलरी स्टोर",
    location: "City retail",
  },
];

export default function CaseStudies() {
  const { language } = useLanguage();
  useSEO('Case Studies – Retailers Growing with Lume', 'See how Indian retailers use Lume for digital billing, loyalty & growth. Real success stories.');
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero + Success Stories Slider (single container, no image bg) */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Light blue + yellowish gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#eaf2ff] via-[#f7fbff] to-[#fff7d6]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(600px circle at 20% 10%, rgba(20,111,181,0.18), transparent 55%), radial-gradient(600px circle at 80% 20%, rgba(250,204,21,0.20), transparent 55%), radial-gradient(700px circle at 60% 80%, rgba(56,189,248,0.16), transparent 55%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 to-transparent" />
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-3">
                {language === "HI" ? "रिटेलर सक्सेस स्टोरीज़" : "Retailer Success Stories"}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                {language === "HI"
                  ? "क्यों रिटेलर्स ल्यूम चुनते हैं — और कैसे वे उससे ग्रो करते हैं।"
                  : "Why retailers choose Lume — and how they grow with it."}
              </p>
            </motion.div>

            <div className="relative mt-10 sm:mt-12 max-w-6xl mx-auto px-4 sm:px-6">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 24 },
                  1024: { slidesPerView: 2, spaceBetween: 28 },
                }}
                centeredSlides={false}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={500}
                pagination={{
                  clickable: true,
                  el: ".retailer-swiper-pagination",
                }}
                navigation={{
                  prevEl: ".retailer-swiper-prev",
                  nextEl: ".retailer-swiper-next",
                }}
                className="retailer-swiper overflow-hidden"
              >
                {successStories.map((story) => (
                  <SwiperSlide key={story.id}>
                    <div className="h-full min-h-[380px] bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex flex-col">
                      {/* Accent bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#146fb5] to-[#38bdf8]" />
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        {/* Brand row */}
                        <div className="flex items-center gap-4 mb-5">
                          {story.logo ? (
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                                <img src={getLogoUrl(story.logo)} alt={story.name} className="w-full h-full object-contain" />
                              </div>
                              {(story as any).logo2 && (
                                <div className="w-11 h-11 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 border border-slate-100">
                                  <img src={getLogoUrl((story as any).logo2)} alt="" className="w-full h-full object-contain" />
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                              <Store className="w-7 h-7 text-[#146fb5]" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-tight">
                              {language === "HI" && (story as any).nameHI ? (story as any).nameHI : story.name}
                            </h3>
                            <p className="text-sm font-medium text-[#146fb5] mt-0.5">
                              {language === "HI" && (story as any).categoryHI ? (story as any).categoryHI : story.category}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                              {story.location}
                              {story.stores && ` · ${story.stores}`}
                            </div>
                            {(story as any).special && (
                              <span className="inline-block mt-2 text-xs font-medium text-[#146fb5] bg-sky-50 px-2 py-1 rounded">
                                {language === "HI" && (story as any).specialHI ? (story as any).specialHI : (story as any).special}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                          {language === "HI" ? "ल्यूम क्यों चुना" : "Why they chose Lume"}
                        </p>
                        <ul className="space-y-2 flex-1">
                          {(language === "HI" && (story as any).whyChoseHI ? (story as any).whyChoseHI : story.whyChose).slice(0, 4).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#146fb5] mt-1.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {story.testimonial && (
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-600 italic leading-relaxed">
                              &ldquo;{language === "HI" && (story as any).testimonialHI ? (story as any).testimonialHI : story.testimonial}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                aria-label="Previous"
                className="retailer-swiper-prev absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#146fb5] hover:text-white hover:border-[#146fb5] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="retailer-swiper-next absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#146fb5] hover:text-white hover:border-[#146fb5] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="retailer-swiper-pagination flex justify-center mt-8" />
            </div>
          </div>
        </section>

        {/* Video Testimonials (Instagram Reels) */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {language === "HI" ? "हमारे खुश ग्राहक" : "Our Happy Customers"}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {language === "HI"
                  ? "असली रिटेलर्स की आवाज़ — देखिए उन्होंने ल्यूम के बारे में क्या कहा।"
                  : "Hear it directly from retailers — what they say about Lume."}
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 24 },
                  1024: { slidesPerView: 3, spaceBetween: 28 },
                }}
                centeredSlides={false}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                loop={true}
                autoplay={{ delay: 4200, disableOnInteraction: false }}
                speed={550}
                pagination={{ clickable: true, el: ".video-swiper-pagination" }}
                navigation={{ prevEl: ".video-swiper-prev", nextEl: ".video-swiper-next" }}
                className="retailer-swiper overflow-hidden"
              >
                {videoTestimonials.map((v) => (
                  <SwiperSlide key={v.id}>
                    <div className="h-full rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col overflow-hidden">
                      <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                            the lume app
                          </span>
                          <span className="text-sm font-semibold text-slate-900">
                            {language === "HI" && (v as any).titleHI ? (v as any).titleHI : v.title}
                          </span>
                        </div>
                        <a
                          href={(v as any).profileUrl ?? "https://www.instagram.com/the_lume.app/"}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-semibold text-white bg-[#146fb5] hover:bg-[#115a94] px-3 py-2 rounded-sm shadow-sm"
                        >
                          View profile
                        </a>
                      </div>
                      <div className="p-4">
                        <div
                          className="relative w-full rounded-lg overflow-hidden bg-slate-100"
                          style={{ paddingBottom: "170%" }}
                        >
                          <iframe
                            className="absolute left-0 w-full"
                            style={{
                              top: -60,
                              height: "calc(100% + 100px)",
                              border: "none",
                            }}
                            src={getInstagramEmbedUrl(v.url)}
                            title={`Instagram reel - ${v.title}`}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                aria-label="Previous video"
                className="video-swiper-prev absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#146fb5] hover:text-white hover:border-[#146fb5] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next video"
                className="video-swiper-next absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#146fb5] hover:text-white hover:border-[#146fb5] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="video-swiper-pagination flex justify-center mt-8" />
            </div>
          </div>
        </section>

        {/* How they use Lume */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">
                {language === "HI" ? "वे ल्यूम का इस्तेमाल कैसे करते हैं" : "How they use Lume"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {(language === "HI"
                  ? [
                      "डिजिटल ई-बिल से कस्टमर एंगेजमेंट",
                      "Google रेटिंग और रिव्यू बढ़ाना",
                      "सोशल मीडिया पेज से कनेक्ट करना",
                      "रिवॉर्ड्स, लॉयल्टी और कैशबैक प्रोग्राम",
                      "ऑफ़र, कैंपेन और फेस्टिवल प्रोमो",
                      "प्रोडक्ट बैनर और प्रोमो वीडियो",
                      "कस्टमर सपोर्ट कॉन्टैक्ट",
                      "रेफर-अ-फ्रेंड प्रोग्राम",
                    ]
                  : [
                      "Customer engagement through digital e-bills",
                      "Encourage Google ratings and reviews",
                      "Connect customers to social media pages",
                      "Run rewards, loyalty and cashback programs",
                      "Promote offers, campaigns and festival promotions",
                      "Display product banners and promotional videos",
                      "Provide customer support contact",
                      "Run Refer-a-Friend programs",
                    ]
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg px-4 py-3 bg-slate-50 border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-[#146fb5] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies — Problem / Solution / Results */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#eaf2f8] via-white to-[#e0f2fe]">
          {/* Decorative background icons (same vibe as home testimonials) */}
          <div className="absolute left-4 top-[40px] w-[220px] h-[220px] opacity-20 pointer-events-none hidden lg:block">
            <img
              src={smileIcon}
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(194deg) brightness(96%) contrast(89%) opacity(0.35)",
                transform: "scale(1.1)",
              }}
            />
          </div>
          <div className="absolute right-4 bottom-[-20px] w-[220px] h-[220px] opacity-20 pointer-events-none hidden lg:block">
            <img
              src={smileIcon}
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1352%) hue-rotate(194deg) brightness(96%) contrast(89%) opacity(0.35)",
                transform: "scale(1.15)",
              }}
            />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {language === "HI" ? "ल्यूम केस स्टडीज़" : "Lume Case Studies"}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {language === "HI" ? "स्टोर प्रोफाइल → समस्या → ल्यूम समाधान → नतीजे।" : "Store profile → Problem → Lume solution → Results."}
              </p>
              <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-[#146fb5] to-[#38bdf8]" />
            </motion.div>
            <div className="space-y-8 max-w-5xl mx-auto">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="bg-white/95 backdrop-blur rounded-xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md hover:border-[#146fb5]/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="h-1 w-full bg-gradient-to-r from-[#146fb5] to-[#38bdf8]" />
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-100 text-[#146fb5]">
                          <study.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                              {language === "HI" && (study as any).storeNameHI ? (study as any).storeNameHI : study.storeName}
                            </h2>
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-600 text-base">
                              {language === "HI" && (study as any).locationHI ? (study as any).locationHI : study.location}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base font-medium text-[#146fb5]">
                            {language === "HI" && (study as any).businessTypeHI ? (study as any).businessTypeHI : study.businessType}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5 text-[#146fb5]" />
                            <h3 className="text-base font-bold text-slate-900">
                              {language === "HI" ? "चुनौती" : "Challenge"}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {(language === "HI" && (study as any).challengeHI ? (study as any).challengeHI : study.challenge).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="w-5 h-5 text-[#146fb5]" />
                            <h3 className="text-base font-bold text-slate-900">
                              {language === "HI" ? "ल्यूम के साथ समाधान" : "Solution with Lume"}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {(language === "HI" && (study as any).solutionHI ? (study as any).solutionHI : study.solution).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#146fb5] mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-[#146fb5]" />
                            <h3 className="text-base font-bold text-slate-900">
                              {language === "HI" ? "नतीजे" : "Results"}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {(language === "HI" && (study as any).resultsHI ? (study as any).resultsHI : study.results).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-100">
                          <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#146fb5]" />
                          <p className="text-sm sm:text-base font-medium text-slate-800">
                            <strong className="text-slate-900">{language === "HI" ? "मुख्य सीख:" : "Key takeaway:"}</strong>{" "}
                            {language === "HI" && (study as any).takeawayHI ? (study as any).takeawayHI : study.takeaway}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Stories Matter */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {language === "HI" ? "ये कहानियाँ क्यों महत्वपूर्ण हैं" : "Why These Stories Matter"}
              </h2>
              <p className="text-slate-600 mb-8">
                {language === "HI"
                  ? "हर दुकानदार की समस्या अलग थी, लेकिन पैटर्न एक जैसा रहा:"
                  : "Every retailer had a different problem, but the pattern is the same:"}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {(language === "HI"
                  ? [
                      "मैन्युअल बिलिंग या डेटा की कमी ने उन्हें पीछे रोके रखा",
                      "डिजिटल बिल + ऑटो एंगेजमेंट से ग्राहक दोबारा आने लगे",
                      "एनालिटिक्स ने काम की इनसाइट्स दीं",
                      "कैंपेन ने डेटा को रिपीट बिज़नेस में बदला"
                    ]
                  : [
                      "Manual billing or lack of data held them back",
                      "Digital bills + automated engagement increased retention",
                      "Analytics gave actionable insights",
                      "Campaigns turned data into repeat business"
                    ]
                ).map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg px-4 py-3 bg-slate-50 border border-slate-100 text-left">
                    <span className="w-2 h-2 rounded-full bg-[#146fb5] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-base sm:text-lg">
                {language === "HI" ? (
                  <><strong className="text-slate-900">ल्यूम का लक्ष्य हर रिटेल स्टोर को बदलना है</strong> — पारंपरिक दुकान से डेटा‑प्रेरित ग्रोथ बिज़नेस तक।</>
                ) : (
                  <><strong className="text-slate-900">Lume's goal is to transform every retail store</strong> — from traditional to data-enabled growth businesses.</>
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Snapshot Comparison */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8">
                {language === "HI" ? "स्नैपशॉट तुलना" : "Snapshot Comparison"}
              </h2>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-4 px-4 font-bold text-sm sm:text-base text-slate-900">
                        {language === "HI" ? "स्टोर" : "Store"}
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-sm sm:text-base text-slate-900">
                        {language === "HI" ? "मुख्य समस्या" : "Main Problem"}
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-sm sm:text-base text-slate-900">
                        {language === "HI" ? "ल्यूम का असर" : "Lume Impact"}
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-sm sm:text-base text-slate-900">
                        {language === "HI" ? "मुख्य नतीजा" : "Key Result"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {language === "HI" ? "फ़ैशन रिटेल स्टोर" : "Fashion Retail Store"}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {language === "HI" ? "ग्राहक डेटाबेस नहीं, रिपीट नहीं आते थे" : "No customer database, low repeat visits"}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {language === "HI" ? "नेक्स्ट विज़िट रिवॉर्ड ₹2000→₹200" : "Next Visit Reward ₹2000→₹200"}
                      </td>
                      <td className="py-4 px-4 font-medium text-[#146fb5] text-sm">
                        {language === "HI" ? "रिपीट कस्टमर बढ़े, रिवॉर्ड इस्तेमाल करने वापस आए" : "Repeat customers up; returned to use rewards"}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {language === "HI" ? "मोबाइल व इलेक्ट्रॉनिक्स स्टोर" : "Mobile & Electronics Store"}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {language === "HI" ? "फोन खरीदार वापस नहीं आते, एक्सेसरी दूसरी दुकान से" : "Phone buyers didn’t return; accessories bought elsewhere"}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {language === "HI" ? "फोन खरीद पर रिवॉर्ड ₹20k→₹500" : "Phone purchase reward ₹20k→₹500"}
                      </td>
                      <td className="py-4 px-4 font-medium text-[#146fb5] text-sm">
                        {language === "HI" ? "एक्सेसरी के लिए वापस आने लगे" : "Customers returned for accessories"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {language === "HI" ? "ज्वैलरी स्टोर" : "Jewelry Store"}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {language === "HI" ? "खरीद कम फ्रीक्वेंट, एंगेजमेंट कम" : "Infrequent purchases; low engagement"}
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {language === "HI" ? "फेस्टिवल रिवॉर्ड ₹50k→₹1000" : "Festival reward ₹50k→₹1000"}
                      </td>
                      <td className="py-4 px-4 font-medium text-[#146fb5] text-sm">
                        {language === "HI" ? "फेस्टिवल पर रिपीट विज़िट बढ़े" : "More repeat visits during festivals"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-10">
                {language === "HI" ? "रिटेलर टेस्टिमोनियल्स" : "Retailer Testimonials"}
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-100"
                  >
                    <MessageSquare className="w-8 h-8 mb-4 text-[#146fb5]" />
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 italic">
                      &ldquo;{language === "HI" && (testimonial as any).quoteHI ? (testimonial as any).quoteHI : testimonial.quote}&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      — {testimonial.author}, {language === "HI" && (testimonial as any).locationHI ? (testimonial as any).locationHI : testimonial.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#e0f2fe] via-white to-[#fefce8]">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 mb-3">
                {language === "HI" ? "अगली सक्सेस स्टोरी बनें" : "Become the next success story"}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0f172a] via-[#146fb5] to-[#eab308] bg-clip-text text-transparent">
                {language === "HI"
                  ? "क्या आप हमारी अगली सक्सेस स्टोरी बनने के लिए तैयार हैं?"
                  : "Ready to be our next success story?"}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-8">
                {language === "HI"
                  ? "एक छोटा सा डेमो आपके स्टोर के लिए ल्यूम कैसे काम करेगा, ये साफ दिखा देगा — बिना सिस्टम बदले, सिर्फ बेहतर तरीके से ग्रो करके।"
                  : "A short demo can show exactly how Lume will work for your store — without changing your systems, just growing smarter."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  className="bg-[#146fb5] text-white hover:bg-[#115a94] font-semibold px-8 py-6 text-base rounded-lg shadow-md shadow-[#0f172a]/10"
                >
                  <Link to="/book-demo">
                    {language === "HI" ? "डेमो बुक करें" : "Book a Demo"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border border-slate-300 text-slate-800 bg-white/70 hover:bg-white font-semibold px-8 py-6 text-base rounded-lg"
                >
                  <Link to="/pricing">
                    {language === "HI" ? "प्राइसिंग प्लान देखें" : "See Pricing Plans"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Closing */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg leading-relaxed text-center text-slate-600">
                {language === "HI"
                  ? "ल्यूम की ये केस स्टडीज़ आपको ये समझने में मदद करती हैं कि रिटेलर्स स्मार्ट बिलिंग, कस्टमर इनसाइट्स, लॉयल्टी टूल्स और मल्टी‑चैनल कैंपेन के साथ वास्तव में कैसे ग्रो कर रहे हैं। अगर आपकी दुकान पर रिपीट कस्टमर कम आ रहे हैं या सेल्स परफॉर्मेंस साफ़ नज़र नहीं आ रही, तो ये सक्सेस पैटर्न आपके अगले कदम तय करने में मदद कर सकते हैं।"
                  : "Lume case studies help you explore real ways retailers are growing with smart billing, customer insights, loyalty tools, and multi-channel campaigns. If your store isn't seeing repeat customers or lacks visibility into sales performance, these success patterns can guide your next steps."}
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

