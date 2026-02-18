import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const features = [
  {
    id: "reviews",
    title: "Get More Google Reviews Effortlessly",
    titleHI: "आसानी से अधिक Google समीक्षाएं प्राप्त करें",
    description: "Automatically encourage satisfied customers to leave reviews right after their purchase through WhatsApp digital bills.",
    descriptionHI: "WhatsApp डिजिटल बिल के माध्यम से खरीदारी के तुरंत बाद संतुष्ट ग्राहकों को स्वचालित रूप से समीक्षा देने के लिए प्रोत्साहित करें।",
    benefits: [
      "Review request triggered instantly after billing",
      "One-click Google review redirection",
      "Increase online reputation and discoverability",
      "Track review performance from dashboard",
    ],
    benefitsHI: [
      "बिलिंग के तुरंत बाद समीक्षा अनुरोध ट्रिगर",
      "एक-क्लिक Google समीक्षा रीडायरेक्शन",
      "ऑनलाइन प्रतिष्ठा और खोजने की क्षमता बढ़ाएं",
      "डैशबोर्ड से समीक्षा प्रदर्शन ट्रैक करें",
    ],
  },
  {
    id: "referrals",
    title: "Turn Customers into Brand Advocates",
    titleHI: "ग्राहकों को ब्रांड एडवोकेट में बदलें",
    description: "Enable customers to refer your store to friends directly through WhatsApp after receiving their bill.",
    descriptionHI: "ग्राहकों को अपना बिल प्राप्त करने के बाद WhatsApp के माध्यम से सीधे अपने दोस्तों को अपनी दुकान का संदर्भ देने में सक्षम बनाएं।",
    benefits: [
      "One-click referral sharing",
      "WhatsApp-native referral flow",
      "Increase organic customer acquisition",
      "Incentivize referrals with rewards",
    ],
    benefitsHI: [
      "एक-क्लिक रेफरल शेयरिंग",
      "WhatsApp-नेटिव रेफरल फ्लो",
      "ऑर्गेनिक ग्राहक अधिग्रहण बढ़ाएं",
      "पुरस्कारों के साथ रेफरल को प्रोत्साहित करें",
    ],
  },
  {
    id: "digital-bills",
    title: "Send Smart Digital Bills via WhatsApp",
    titleHI: "WhatsApp के माध्यम से स्मार्ट डिजिटल बिल भेजें",
    description: "Automatically send professional, GST-ready digital invoices directly to customers on WhatsApp.",
    descriptionHI: "WhatsApp पर ग्राहकों को स्वचालित रूप से पेशेवर, GST-तैयार डिजिटल चालान सीधे भेजें।",
    benefits: [
      "Instant WhatsApp delivery",
      "Secure and branded invoices",
      "Easy re-access anytime",
      "Reduce printing costs",
    ],
    benefitsHI: [
      "तत्काल WhatsApp डिलीवरी",
      "सुरक्षित और ब्रांडेड चालान",
      "कभी भी आसान पुनः पहुंच",
      "प्रिंटिंग लागत कम करें",
    ],
  },
  {
    id: "loyalty",
    title: "Build Customer Loyalty That Drives Repeat Sales",
    titleHI: "ग्राहक वफादारी बनाएं जो दोहराई गई बिक्री को बढ़ावा देती है",
    description: "Reward repeat customers with automated loyalty programs integrated with billing.",
    descriptionHI: "बिलिंग के साथ एकीकृत स्वचालित लॉयल्टी कार्यक्रमों के साथ नियमित ग्राहकों को पुरस्कृत करें।",
    benefits: [
      "Points-based rewards system",
      "Automated reward tracking",
      "Increase repeat visits",
      "Seamless POS integration",
    ],
    benefitsHI: [
      "पॉइंट-आधारित पुरस्कार प्रणाली",
      "स्वचालित पुरस्कार ट्रैकिंग",
      "दोहराई गई यात्राओं को बढ़ाएं",
      "सीमलेस POS एकीकरण",
    ],
  },
  {
    id: "promotion",
    title: "Run Targeted Promotions with Ease",
    titleHI: "आसानी से लक्षित प्रचार चलाएं",
    description: "Send personalized offers, discounts, and greetings to customers through WhatsApp campaigns.",
    descriptionHI: "WhatsApp अभियानों के माध्यम से ग्राहकों को व्यक्तिगत ऑफ़र, छूट और अभिवादन भेजें।",
    benefits: [
      "Target specific customer segments",
      "Schedule promotional campaigns",
      "Improve engagement rates",
      "Track campaign performance",
    ],
    benefitsHI: [
      "विशिष्ट ग्राहक खंडों को लक्षित करें",
      "प्रचार अभियान शेड्यूल करें",
      "सगाई दरों में सुधार करें",
      "अभियान प्रदर्शन ट्रैक करें",
    ],
  },
  {
    id: "analytics",
    title: "Make Smarter Decisions with Real-Time Analytics",
    titleHI: "रियल-टाइम एनालिटिक्स के साथ स्मार्ट निर्णय लें",
    description: "Get actionable insights into customer behavior, billing trends, and store performance.",
    descriptionHI: "ग्राहक व्यवहार, बिलिंग रुझान और स्टोर प्रदर्शन में कार्रवाई योग्य अंतर्दृष्टि प्राप्त करें।",
    benefits: [
      "Sales trend analysis",
      "Customer behavior insights",
      "Store-level performance metrics",
      "Exportable reports",
    ],
    benefitsHI: [
      "बिक्री रुझान विश्लेषण",
      "ग्राहक व्यवहार अंतर्दृष्टि",
      "स्टोर-स्तरीय प्रदर्शन मेट्रिक्स",
      "निर्यात योग्य रिपोर्ट्स",
    ],
  },
  {
    id: "surveys",
    title: "Capture Customer Feedback Instantly",
    titleHI: "तुरंत ग्राहक प्रतिक्रिया कैप्चर करें",
    description: "Collect feedback directly via WhatsApp to understand customer satisfaction and improve service.",
    descriptionHI: "ग्राहक संतुष्टि को समझने और सेवा में सुधार करने के लिए WhatsApp के माध्यम से सीधे प्रतिक्रिया एकत्र करें।",
    benefits: [
      "Instant post-purchase surveys",
      "Automated feedback requests",
      "Identify service gaps",
      "Improve customer experience",
    ],
    benefitsHI: [
      "तत्काल खरीदारी के बाद सर्वेक्षण",
      "स्वचालित प्रतिक्रिया अनुरोध",
      "सेवा अंतराल की पहचान करें",
      "ग्राहक अनुभव में सुधार करें",
    ],
  },
];

export default function Features() {
  const { language } = useLanguage();
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

    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Matching Solutions page */}
      <section className="pt-24 lg:pt-32 pb-16 hero-gradient text-white">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1b181f' }}>
              {language === "HI" ? "फ़ीचर्स" : "Features"}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
              {language === "HI" 
                ? "अपने खुदरा व्यवसाय को बढ़ाने के लिए शक्तिशाली उपकरण" 
                : "Powerful tools to grow your retail business"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features List - Clean Content Blocks */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={i > 0 ? "pt-16 border-t border-border/30" : ""}
              >
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#1b181f' }}>
                  {language === "HI" && feature.titleHI ? feature.titleHI : feature.title}
                </h2>
                <p className="text-lg mb-6" style={{ color: '#4f4f4f' }}>
                  {language === "HI" && feature.descriptionHI ? feature.descriptionHI : feature.description}
                </p>
                <ul className="space-y-3">
                  {(language === "HI" ? feature.benefitsHI : feature.benefits).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" style={{ color: '#146fb5' }} />
                      <span style={{ color: '#1b181f' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
