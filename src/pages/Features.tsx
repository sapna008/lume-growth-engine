import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Star, Gift, ReceiptIndianRupee, Tag, Megaphone, BarChart3, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const features = [
  {
    id: "reviews",
    icon: Star,
    title: "Reviews",
    titleHI: "समीक्षाएं",
    tagline: "Earn more Google Reviews via digital bill",
    taglineHI: "डिजिटल बिल के माध्यम से अधिक Google समीक्षाएं प्राप्त करें",
    problem: "Getting customers to leave reviews is hard. Most never do, and you miss out on valuable social proof.",
    problemHI: "ग्राहकों को समीक्षा देने के लिए राजी करना मुश्किल है। ज़्यादातर कभी नहीं देते, और आप मूल्यवान सामाजिक प्रमाण खो देते हैं।",
    solution: "Automatically prompt customers for Google Reviews right after they receive their digital bill. Make it effortless for them to rate your store.",
    solutionHI: "ग्राहकों को डिजिटल बिल मिलने के तुरंत बाद Google समीक्षाओं के लिए स्वचालित रूप से प्रॉम्प्ट करें। उनके लिए अपनी दुकान को रेट करना आसान बनाएं।",
    benefits: [
      "One-click review requests",
      "Direct link to Google Reviews",
      "Higher review conversion rate",
      "Better online reputation",
      "Increased customer trust",
    ],
    benefitsHI: [
      "एक-क्लिक समीक्षा अनुरोध",
      "Google समीक्षाओं के लिए सीधा लिंक",
      "उच्च समीक्षा रूपांतरण दर",
      "बेहतर ऑनलाइन प्रतिष्ठा",
      "बढ़ी हुई ग्राहक विश्वसनीयता",
    ],
    href: "/features/reviews",
  },
  {
    id: "referrals",
    icon: Gift,
    title: "Referrals",
    titleHI: "रेफरल",
    tagline: "One-click referral on WhatsApp via digital bill",
    taglineHI: "डिजिटल बिल के माध्यम से WhatsApp पर एक-क्लिक रेफरल",
    problem: "Word-of-mouth referrals are powerful but hard to track. You never know which customers are bringing in new business.",
    problemHI: "मुँहज़ोर रेफरल शक्तिशाली हैं लेकिन ट्रैक करना मुश्किल है। आप कभी नहीं जानते कि कौन से ग्राहक नया व्यवसाय ला रहे हैं।",
    solution: "Add a referral button directly to digital bills. Customers can share your store with friends in one click, and you can track referrals easily.",
    solutionHI: "डिजिटल बिल में सीधे रेफरल बटन जोड़ें। ग्राहक एक क्लिक में अपने दोस्तों के साथ आपकी दुकान साझा कर सकते हैं, और आप आसानी से रेफरल ट्रैक कर सकते हैं।",
    benefits: [
      "One-click referral sharing",
      "WhatsApp integration",
      "Referral tracking",
      "Reward loyal customers",
      "Organic growth",
    ],
    benefitsHI: [
      "एक-क्लिक रेफरल शेयरिंग",
      "WhatsApp एकीकरण",
      "रेफरल ट्रैकिंग",
      "वफादार ग्राहकों को पुरस्कृत करें",
      "ऑर्गेनिक विकास",
    ],
    href: "/features/referrals",
  },
  {
    id: "digital-bills",
    icon: ReceiptIndianRupee,
    title: "Digital Bills",
    titleHI: "डिजिटल बिल",
    tagline: "Send bills to your customers digitally on WhatsApp",
    taglineHI: "WhatsApp पर अपने ग्राहकों को डिजिटल रूप से बिल भेजें",
    problem: "Paper bills get lost, damaged, or forgotten. Customers can't find them when needed, and you waste paper and time printing.",
    problemHI: "कागज़ी बिल खो जाते हैं, क्षतिग्रस्त हो जाते हैं या भूल जाते हैं। ग्राहक ज़रूरत पड़ने पर उन्हें नहीं ढूंढ सकते, और आप कागज़ और समय बर्बाद करते हैं।",
    solution: "Send professional digital bills instantly via WhatsApp. Customers always have access, and you save time and resources while building your digital presence.",
    solutionHI: "WhatsApp के माध्यम से तुरंत पेशेवर डिजिटल बिल भेजें। ग्राहकों के पास हमेशा पहुंच होती है, और आप अपनी डिजिटल उपस्थिति बनाते हुए समय और संसाधन बचाते हैं।",
    benefits: [
      "Instant WhatsApp delivery",
      "GST-compliant format",
      "Never lost or damaged",
      "Professional appearance",
      "Save paper and printing costs",
    ],
    benefitsHI: [
      "तत्काल WhatsApp डिलीवरी",
      "GST-अनुपालन प्रारूप",
      "कभी खोया या क्षतिग्रस्त नहीं",
      "पेशेवर उपस्थिति",
      "कागज़ और प्रिंटिंग लागत बचाएं",
    ],
    href: "/features/digital-bills",
  },
  {
    id: "loyalty",
    icon: Tag,
    title: "Loyalty",
    titleHI: "वफादारी",
    tagline: "Drive customer loyalty with coupons and latest offers",
    taglineHI: "कूपन और नवीनतम ऑफ़र के साथ ग्राहक वफादारी बढ़ाएं",
    problem: "Customers shop around for the best deals. Without a loyalty program, they have no reason to keep coming back to your store.",
    problemHI: "ग्राहक सबसे अच्छे सौदों के लिए खरीदारी करते हैं। लॉयल्टी प्रोग्राम के बिना, उनके पास आपकी दुकान पर वापस आने का कोई कारण नहीं है।",
    solution: "Create and share digital coupons and offers directly through bills. Reward repeat customers automatically and keep them coming back.",
    solutionHI: "बिलों के माध्यम से सीधे डिजिटल कूपन और ऑफ़र बनाएं और साझा करें। स्वचालित रूप से नियमित ग्राहकों को पुरस्कृत करें और उन्हें वापस आने के लिए प्रोत्साहित करें।",
    benefits: [
      "Digital coupon system",
      "Automatic rewards",
      "Personalized offers",
      "Repeat purchase incentives",
      "Customer retention",
    ],
    benefitsHI: [
      "डिजिटल कूपन सिस्टम",
      "स्वचालित पुरस्कार",
      "व्यक्तिगत ऑफ़र",
      "दोहराई गई खरीदारी प्रोत्साहन",
      "ग्राहक प्रतिधारण",
    ],
    href: "/features/loyalty",
  },
  {
    id: "promotion",
    icon: Megaphone,
    title: "Promotion",
    titleHI: "प्रचार",
    tagline: "Share offers, discounts and greetings on WhatsApp",
    taglineHI: "WhatsApp पर ऑफ़र, छूट और अभिवादन साझा करें",
    problem: "Announcing new offers or special occasions requires manual effort. You miss opportunities to engage customers at the right moments.",
    problemHI: "नए ऑफ़र या विशेष अवसरों की घोषणा करने के लिए मैन्युअल प्रयास की आवश्यकता होती है। आप सही समय पर ग्राहकों से जुड़ने के अवसर खो देते हैं।",
    solution: "Send promotional messages, discounts, and personalized greetings automatically via WhatsApp. Engage customers on birthdays, festivals, and special occasions.",
    solutionHI: "WhatsApp के माध्यम से स्वचालित रूप से प्रचार संदेश, छूट और व्यक्तिगत अभिवादन भेजें। जन्मदिन, त्योहारों और विशेष अवसरों पर ग्राहकों से जुड़ें।",
    benefits: [
      "Automated promotions",
      "Festival greetings",
      "Birthday wishes",
      "Flash sale alerts",
      "Personalized messaging",
    ],
    benefitsHI: [
      "स्वचालित प्रचार",
      "त्योहारी अभिवादन",
      "जन्मदिन की शुभकामनाएं",
      "फ्लैश सेल अलर्ट",
      "व्यक्तिगत मैसेजिंग",
    ],
    href: "/features/promotion",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    titleHI: "विश्लेषण",
    tagline: "Uncover trends and insights for multiple stores",
    taglineHI: "कई स्टोर के लिए रुझान और अंतर्दृष्टि खोजें",
    problem: "Running multiple stores without proper analytics means flying blind. You can't compare performance or identify what's working across locations.",
    problemHI: "उचित विश्लेषण के बिना कई स्टोर चलाने का मतलब है अंधाधुंध काम करना। आप प्रदर्शन की तुलना नहीं कर सकते या स्थानों में क्या काम कर रहा है, पहचान नहीं सकते।",
    solution: "Get comprehensive analytics across all your stores. Compare performance, identify trends, and make data-driven decisions to grow your retail business.",
    solutionHI: "अपने सभी स्टोर में व्यापक विश्लेषण प्राप्त करें। प्रदर्शन की तुलना करें, रुझानों की पहचान करें, और अपने खुदरा व्यवसाय को बढ़ाने के लिए डेटा-आधारित निर्णय लें।",
    benefits: [
      "Multi-store dashboard",
      "Performance comparison",
      "Trend analysis",
      "Sales insights",
      "Data-driven decisions",
    ],
    benefitsHI: [
      "मल्टी-स्टोर डैशबोर्ड",
      "प्रदर्शन तुलना",
      "ट्रेंड विश्लेषण",
      "बिक्री अंतर्दृष्टि",
      "डेटा-आधारित निर्णय",
    ],
    href: "/features/analytics",
  },
  {
    id: "surveys",
    icon: MessageSquare,
    title: "Surveys",
    titleHI: "सर्वेक्षण",
    tagline: "Collect customer feedback via digital bill on WhatsApp",
    taglineHI: "WhatsApp पर डिजिटल बिल के माध्यम से ग्राहक प्रतिक्रिया एकत्र करें",
    problem: "Getting honest feedback from customers is difficult. They rarely speak up, and you miss opportunities to improve your service.",
    problemHI: "ग्राहकों से ईमानदार प्रतिक्रिया प्राप्त करना मुश्किल है। वे शायद ही कभी बोलते हैं, और आप अपनी सेवा में सुधार के अवसर खो देते हैं।",
    solution: "Embed quick surveys in digital bills. Customers can provide feedback instantly via WhatsApp, helping you understand their needs and improve continuously.",
    solutionHI: "डिजिटल बिल में त्वरित सर्वेक्षण एम्बेड करें। ग्राहक WhatsApp के माध्यम से तुरंत प्रतिक्रिया दे सकते हैं, जिससे आप उनकी ज़रूरतों को समझ सकते हैं और लगातार सुधार कर सकते हैं।",
    benefits: [
      "In-bill surveys",
      "Quick feedback collection",
      "Customer satisfaction tracking",
      "Service improvement insights",
      "Real-time responses",
    ],
    benefitsHI: [
      "बिल में सर्वेक्षण",
      "त्वरित प्रतिक्रिया संग्रह",
      "ग्राहक संतुष्टि ट्रैकिंग",
      "सेवा सुधार अंतर्दृष्टि",
      "रियल-टाइम प्रतिक्रियाएं",
    ],
    href: "/features/surveys",
  },
];

export default function Features() {
  const { language, t } = useLanguage();
  const { id } = useParams<{ id?: string }>();
  useSEO(
    'Features – Reviews, Referrals, Digital Bills & More',
    'Lume features: Google Reviews, referrals, digital billing, loyalty, promotions, analytics, and surveys. Built for Indian retailers.'
  );

  useEffect(() => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Map route ids from header to internal section ids
    let targetId = id;
    // All feature IDs match their route IDs, so no mapping needed
    // But we can add mapping here if needed in the future

    const el = document.getElementById(targetId);
    if (el) {
      // Add a small delay to ensure page has rendered
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 hero-gradient text-white">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {language === "HI" ? "फ़ीचर्स" : "Features"}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {language === "HI" 
                ? "अपने खुदरा व्यवसाय को बढ़ाने के लिए शक्तिशाली उपकरण" 
                : "Powerful tools to grow your retail business"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 lg:py-24">
        <div className="container-wide space-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#146fb5]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {language === "HI" && feature.titleHI ? feature.titleHI : feature.title}
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {language === "HI" && feature.taglineHI ? feature.taglineHI : feature.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="rounded-lg p-4" style={{ background: '#fee2e2' }}>
                    <p className="text-sm font-medium mb-1" style={{ color: '#991b1b' }}>
                      {language === "HI" ? "समस्या:" : "The Problem:"}
                    </p>
                    <p style={{ color: '#7f1d1d' }}>
                      {language === "HI" ? feature.problemHI : feature.problem}
                    </p>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: '#eaf2f8' }}>
                    <p className="text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                      {language === "HI" ? "समाधान:" : "The Solution:"}
                    </p>
                    <p style={{ color: '#1b181f' }}>
                      {language === "HI" ? feature.solutionHI : feature.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-foreground">
                    {language === "HI" ? "मुख्य लाभ:" : "Key Benefits:"}
                  </p>
                  <ul className="space-y-2">
                    {(language === "HI" ? feature.benefitsHI : feature.benefits).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#146fb5] shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="cta" asChild>
                  <Link to={feature.href}>
                    {language === "HI" ? "और जानें" : "Learn More"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              <div className={`rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ background: '#eaf2f8' }}>
                <h3 className="font-semibold mb-4" style={{ color: '#1e3a5f' }}>
                  {language === "HI" ? "कैसे काम करता है" : "How It Works"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "HI" 
                    ? "यह फ़ीचर आपके खुदरा व्यवसाय को बढ़ाने में मदद करता है।" 
                    : "This feature helps grow your retail business."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
