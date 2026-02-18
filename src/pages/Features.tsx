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
    subtitle: "Build trust and grow your online reputation automatically.",
    subtitleHI: "स्वचालित रूप से विश्वास बनाएं और अपनी ऑनलाइन प्रतिष्ठा बढ़ाएं।",
    overview: "After every successful transaction, customers receive a WhatsApp digital bill with a direct review prompt. This makes it effortless for satisfied buyers to leave a Google review while their experience is still fresh. Over time, this consistently increases your online visibility and credibility.",
    overviewHI: "हर सफल लेनदेन के बाद, ग्राहकों को एक सीधे समीक्षा प्रॉम्प्ट के साथ WhatsApp डिजिटल बिल प्राप्त होता है। यह संतुष्ट खरीदारों के लिए Google समीक्षा छोड़ना आसान बनाता है जबकि उनका अनुभव अभी भी ताजा है। समय के साथ, यह लगातार आपकी ऑनलाइन दृश्यता और विश्वसनीयता बढ़ाता है।",
    benefits: [
      "Instant post-purchase review prompts",
      "One-click Google redirection",
      "Improve store discoverability",
      "Strengthen brand trust",
      "Track review growth trends",
    ],
    benefitsHI: [
      "तत्काल खरीदारी के बाद समीक्षा प्रॉम्प्ट",
      "एक-क्लिक Google रीडायरेक्शन",
      "स्टोर खोजने की क्षमता में सुधार",
      "ब्रांड विश्वास मजबूत करें",
      "समीक्षा वृद्धि रुझान ट्रैक करें",
    ],
  },
  {
    id: "referrals",
    title: "Turn Customers into Brand Advocates",
    titleHI: "ग्राहकों को ब्रांड एडवोकेट में बदलें",
    subtitle: "Turn happy customers into your growth engine.",
    subtitleHI: "खुश ग्राहकों को अपने विकास इंजन में बदलें।",
    overview: "Enable customers to share your store with friends directly from their digital bill. Referral sharing happens seamlessly through WhatsApp, helping you generate organic word-of-mouth marketing without additional advertising spend.",
    overviewHI: "ग्राहकों को अपने डिजिटल बिल से सीधे अपने दोस्तों के साथ अपनी दुकान साझा करने में सक्षम बनाएं। रेफरल शेयरिंग WhatsApp के माध्यम से सीमलेस रूप से होती है, जो अतिरिक्त विज्ञापन खर्च के बिना ऑर्गेनिक मुँहज़ोर मार्केटिंग उत्पन्न करने में मदद करती है।",
    benefits: [
      "One-tap referral sharing",
      "WhatsApp-native referral flow",
      "Expand customer base organically",
      "Reward-based referral programs",
      "Increase repeat visits",
    ],
    benefitsHI: [
      "वन-टैप रेफरल शेयरिंग",
      "WhatsApp-नेटिव रेफरल फ्लो",
      "ऑर्गेनिक रूप से ग्राहक आधार का विस्तार",
      "पुरस्कार-आधारित रेफरल कार्यक्रम",
      "दोहराई गई यात्राओं को बढ़ाएं",
    ],
  },
  {
    id: "digital-bills",
    title: "Send Smart Digital Bills via WhatsApp",
    titleHI: "WhatsApp के माध्यम से स्मार्ट डिजिटल बिल भेजें",
    subtitle: "Professional billing in seconds.",
    subtitleHI: "सेकंडों में पेशेवर बिलिंग।",
    overview: "Create GST-compliant digital invoices instantly and send them directly to customers via WhatsApp. Every transaction is securely recorded and easily accessible, eliminating paper bills and reducing manual errors.",
    overviewHI: "तुरंत GST-अनुपालन डिजिटल चालान बनाएं और उन्हें WhatsApp के माध्यम से सीधे ग्राहकों को भेजें। हर लेनदेन सुरक्षित रूप से दर्ज किया जाता है और आसानी से सुलभ है, कागज़ी बिलों को समाप्त करता है और मैन्युअल त्रुटियों को कम करता है।",
    benefits: [
      "Bills generated in under 10 seconds",
      "GST-compliant invoice structure",
      "WhatsApp bill delivery",
      "Automatic record storage",
      "Reduced printing costs",
    ],
    benefitsHI: [
      "10 सेकंड से कम में बिल जेनरेट",
      "GST-अनुपालन चालान संरचना",
      "WhatsApp बिल डिलीवरी",
      "स्वचालित रिकॉर्ड स्टोरेज",
      "प्रिंटिंग लागत कम",
    ],
  },
  {
    id: "loyalty",
    title: "Build Customer Loyalty That Drives Repeat Sales",
    titleHI: "ग्राहक वफादारी बनाएं जो दोहराई गई बिक्री को बढ़ावा देती है",
    subtitle: "Drive repeat business with smart rewards.",
    subtitleHI: "स्मार्ट पुरस्कारों के साथ दोहराई गई व्यवसाय को बढ़ावा दें।",
    overview: "Build long-term relationships by rewarding frequent customers automatically. Loyalty points are tracked directly through your billing system, making repeat engagement effortless and transparent.",
    overviewHI: "नियमित ग्राहकों को स्वचालित रूप से पुरस्कृत करके दीर्घकालिक संबंध बनाएं। लॉयल्टी पॉइंट्स सीधे आपकी बिलिंग प्रणाली के माध्यम से ट्रैक किए जाते हैं, जिससे दोहराई गई सगाई आसान और पारदर्शी हो जाती है।",
    benefits: [
      "Points-based loyalty system",
      "Automatic reward tracking",
      "Boost repeat purchase rate",
      "Seamless POS integration",
      "Data-driven customer retention",
    ],
    benefitsHI: [
      "पॉइंट-आधारित लॉयल्टी प्रणाली",
      "स्वचालित पुरस्कार ट्रैकिंग",
      "दोहराई गई खरीदारी दर बढ़ाएं",
      "सीमलेस POS एकीकरण",
      "डेटा-आधारित ग्राहक प्रतिधारण",
    ],
  },
  {
    id: "promotion",
    title: "Run Targeted Promotions with Ease",
    titleHI: "आसानी से लक्षित प्रचार चलाएं",
    subtitle: "Engage customers with targeted campaigns.",
    subtitleHI: "लक्षित अभियानों के साथ ग्राहकों से जुड़ें।",
    overview: "Send personalized offers, discounts, and festive greetings through WhatsApp campaigns. Reach the right audience at the right time using your existing billing data.",
    overviewHI: "WhatsApp अभियानों के माध्यम से व्यक्तिगत ऑफ़र, छूट और त्योहारी अभिवादन भेजें। अपने मौजूदा बिलिंग डेटा का उपयोग करके सही समय पर सही दर्शकों तक पहुंचें।",
    benefits: [
      "Customer segmentation",
      "Scheduled campaigns",
      "Higher engagement rates",
      "Performance tracking",
      "Direct WhatsApp delivery",
    ],
    benefitsHI: [
      "ग्राहक विभाजन",
      "शेड्यूल किए गए अभियान",
      "उच्च सगाई दरें",
      "प्रदर्शन ट्रैकिंग",
      "सीधी WhatsApp डिलीवरी",
    ],
  },
  {
    id: "analytics",
    title: "Make Smarter Decisions with Real-Time Analytics",
    titleHI: "रियल-टाइम एनालिटिक्स के साथ स्मार्ट निर्णय लें",
    subtitle: "Make smarter business decisions.",
    subtitleHI: "स्मार्ट व्यावसायिक निर्णय लें।",
    overview: "Gain real-time insights into billing trends, customer behavior, and store performance. Use actionable analytics to identify growth opportunities and optimize operations.",
    overviewHI: "बिलिंग रुझान, ग्राहक व्यवहार और स्टोर प्रदर्शन में रियल-टाइम अंतर्दृष्टि प्राप्त करें। विकास के अवसरों की पहचान करने और संचालन को अनुकूलित करने के लिए कार्रवाई योग्य एनालिटिक्स का उपयोग करें।",
    benefits: [
      "Sales trend analysis",
      "Customer behavior insights",
      "Multi-store performance tracking",
      "Exportable reports",
      "Revenue growth visibility",
    ],
    benefitsHI: [
      "बिक्री रुझान विश्लेषण",
      "ग्राहक व्यवहार अंतर्दृष्टि",
      "मल्टी-स्टोर प्रदर्शन ट्रैकिंग",
      "निर्यात योग्य रिपोर्ट्स",
      "राजस्व वृद्धि दृश्यता",
    ],
  },
  {
    id: "surveys",
    title: "Capture Customer Feedback Instantly",
    titleHI: "तुरंत ग्राहक प्रतिक्रिया कैप्चर करें",
    subtitle: "Listen to your customers consistently.",
    subtitleHI: "अपने ग्राहकों को लगातार सुनें।",
    overview: "Collect feedback directly after purchase via WhatsApp. Understand customer satisfaction levels and identify areas for improvement using automated feedback collection.",
    overviewHI: "WhatsApp के माध्यम से खरीदारी के बाद सीधे प्रतिक्रिया एकत्र करें। स्वचालित प्रतिक्रिया संग्रह का उपयोग करके ग्राहक संतुष्टि स्तरों को समझें और सुधार के क्षेत्रों की पहचान करें।",
    benefits: [
      "Instant post-purchase surveys",
      "Automated feedback flow",
      "Service improvement insights",
      "Customer satisfaction tracking",
      "Better decision-making support",
    ],
    benefitsHI: [
      "तत्काल खरीदारी के बाद सर्वेक्षण",
      "स्वचालित प्रतिक्रिया फ्लो",
      "सेवा सुधार अंतर्दृष्टि",
      "ग्राहक संतुष्टि ट्रैकिंग",
      "बेहतर निर्णय लेने का समर्थन",
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

      {/* Features List - Matching Solutions page structure */}
      <section className="section-spacing bg-white">
        <div className="container-wide space-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left Side - Title, Subtitle, Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#1b181f' }}>
                  {language === "HI" && feature.titleHI ? feature.titleHI : feature.title}
                </h2>
                <p className="text-lg font-medium mb-4" style={{ color: '#146fb5' }}>
                  {language === "HI" && feature.subtitleHI ? feature.subtitleHI : feature.subtitle}
                </p>
                <div className="rounded-lg p-4" style={{ background: '#eaf2f8' }}>
                  <p className="text-sm font-medium mb-2" style={{ color: '#1e3a5f' }}>
                    {language === "HI" ? "अवलोकन:" : "Overview:"}
                  </p>
                  <p style={{ color: '#1b181f' }}>
                    {language === "HI" && feature.overviewHI ? feature.overviewHI : feature.overview}
                  </p>
                </div>
              </div>

              {/* Right Side - Key Benefits */}
              <div className="rounded-2xl p-8" style={{ background: '#eaf2f8' }}>
                <h3 className="font-semibold mb-4" style={{ color: '#1b181f' }}>
                  {language === "HI" ? "मुख्य लाभ" : "Key Benefits"}
                </h3>
                <ul className="space-y-3">
                  {(language === "HI" ? feature.benefitsHI : feature.benefits).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" style={{ color: '#146fb5' }} />
                      <span style={{ color: '#1b181f' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
