import { BellRing, CalendarDays, Gift, Megaphone, MessageSquareMore, RefreshCcw } from "lucide-react";
import FeaturePageTemplate from "./FeaturePageTemplate";
import promoImage from "@/assets/refer/whatsapp-refer.png";

export default function PromotionFeature() {
  return (
    <FeaturePageTemplate
      seoTitle="WhatsApp Promotions – Offers, Greetings, Campaigns | Lume"
      seoDescription="Send WhatsApp offers, discounts, and festive greetings to re-engage old customers and increase store traffic."
      heroBadge={{ en: "WhatsApp Promotions", hi: "WhatsApp प्रमोशन" }}
      heroTitle={{ en: "Run high-converting campaigns on WhatsApp", hi: "WhatsApp पर हाई-कन्वर्टिंग कैंपेन चलाएं" }}
      heroSubtitle={{ en: "Send offers, discounts, and festival greetings that re-engage inactive customers and drive store traffic.", hi: "ऐसे ऑफर्स, डिस्काउंट और फेस्टिव ग्रीटिंग्स भेजें जो निष्क्रिय ग्राहकों को फिर से जोड़ें और स्टोर ट्रैफिक बढ़ाएं।" }}
      heroImage={promoImage}
      heroImageAlt="WhatsApp promotions and campaigns"
      heroCtaTargetId="promotion-features"
      stats={[
        { value: "5x", label: { en: "Campaign reach", hi: "कैंपेन रीच" }, desc: { en: "Reach customers directly where they respond faster.", hi: "ग्राहकों तक सीधे पहुंचें जहां वे तेजी से रिस्पॉन्ड करते हैं।" }, bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5", border: "border-[#146fb5]/20", color: "#146fb5" },
        { value: "+27%", label: { en: "Store footfall", hi: "स्टोर फुटफॉल" }, desc: { en: "Offer-led campaigns bring back old shoppers.", hi: "ऑफर आधारित कैंपेन पुराने ग्राहकों को वापस लाते हैं।" }, bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", color: "#10b981" },
        { value: "1-tap", label: { en: "Message delivery", hi: "मैसेज डिलीवरी" }, desc: { en: "Launch promotions instantly without complex setup.", hi: "बिना जटिल सेटअप के तुरंत प्रमोशन शुरू करें।" }, bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", color: "#f59e0b" },
      ]}
      benefitsHeading={{ en: "Promotion tools that drive action", hi: "एक्शन बढ़ाने वाले प्रमोशन टूल्स" }}
      benefitsSubheading={{ en: "Build timely campaigns that increase visits and sales across your customer base.", hi: "ऐसे समय पर कैंपेन बनाएं जो विजिट और बिक्री दोनों बढ़ाएं।" }}
      benefits={[
        { icon: Gift, title: { en: "Offer and discount campaigns", hi: "ऑफर और डिस्काउंट कैंपेन" }, desc: { en: "Push targeted offers that convert quickly.", hi: "टार्गेटेड ऑफर भेजें जो जल्दी कन्वर्ट हों।" } },
        { icon: CalendarDays, title: { en: "Festival greetings", hi: "फेस्टिव ग्रीटिंग्स" }, desc: { en: "Send seasonal greetings to stay top-of-mind.", hi: "सीजनल ग्रीटिंग्स भेजकर ब्रांड याद बनाए रखें।" } },
        { icon: MessageSquareMore, title: { en: "Campaign messaging", hi: "कैंपेन मैसेजिंग" }, desc: { en: "Craft clear campaign messages for each audience segment.", hi: "हर ग्राहक सेगमेंट के लिए स्पष्ट कैंपेन संदेश भेजें।" } },
      ]}
      stepsHeading={{ en: "How promotions work", hi: "प्रमोशन कैसे काम करते हैं" }}
      steps={[
        { title: { en: "Select customer segment", hi: "कस्टमर सेगमेंट चुनें" }, desc: { en: "Choose old, frequent, or high-value customers for targeting.", hi: "पुराने, नियमित या हाई-वैल्यू ग्राहकों को टार्गेट करें।" } },
        { title: { en: "Create campaign message", hi: "कैंपेन संदेश बनाएं" }, desc: { en: "Add offers, greetings, and store call-to-actions.", hi: "ऑफर, ग्रीटिंग और स्टोर कॉल-टू-एक्शन जोड़ें।" } },
        { title: { en: "Launch and track responses", hi: "लॉन्च करें और प्रतिक्रिया ट्रैक करें" }, desc: { en: "Monitor engagement and optimize next campaigns.", hi: "एंगेजमेंट ट्रैक करें और अगले कैंपेन को बेहतर बनाएं।" } },
      ]}
      whyHeading={{ en: "Why businesses need promotions", hi: "बिजनेस को प्रमोशन क्यों चाहिए" }}
      whySubheading={{ en: "Consistent messaging keeps your store active in customer memory.", hi: "नियमित मैसेजिंग से आपका स्टोर ग्राहकों की याद में बना रहता है।" }}
      whyItems={[
        { title: { en: "Re-activate old customers", hi: "पुराने ग्राहकों को फिर सक्रिय करें" }, desc: { en: "Promotional nudges bring inactive customers back into the buying cycle.", hi: "प्रमोशनल मैसेज निष्क्रिय ग्राहकों को फिर खरीद चक्र में लाते हैं।" } },
        { title: { en: "Increase store traffic", hi: "स्टोर ट्रैफिक बढ़ाएं" }, desc: { en: "Offers and greetings create regular reasons to visit your store.", hi: "ऑफर और ग्रीटिंग्स ग्राहकों को विजिट का कारण देते हैं।" } },
        { title: { en: "Improve campaign ROI", hi: "बेहतर कैंपेन ROI" }, desc: { en: "Targeting existing customers lowers spend and improves outcomes.", hi: "मौजूदा ग्राहकों को टार्गेट करना लागत घटाता और परिणाम सुधारता है।" } },
      ]}
      faqsHeading={{ en: "Promotion FAQ", hi: "प्रमोशन FAQ" }}
      faqsSubheading={{ en: "Everything you need before launch.", hi: "लॉन्च से पहले जरूरी जानकारी।" }}
      faqs={[
        { question: { en: "Can I send festival greetings and offers together?", hi: "क्या मैं फेस्टिव ग्रीटिंग्स और ऑफर साथ भेज सकता हूं?" }, answer: { en: "Yes, campaigns can combine greetings with discounts or announcements.", hi: "हां, कैंपेन में ग्रीटिंग्स के साथ डिस्काउंट या घोषणा जोड़ी जा सकती है।" } },
        { question: { en: "Can I target only old customers?", hi: "क्या मैं सिर्फ पुराने ग्राहकों को टार्गेट कर सकता हूं?" }, answer: { en: "Yes, you can segment audiences and re-engage inactive customers.", hi: "हां, आप ऑडियंस सेगमेंट बनाकर निष्क्रिय ग्राहकों को री-एंगेज कर सकते हैं।" } },
        { question: { en: "How do I measure campaign success?", hi: "कैंपेन सफलता कैसे मापूं?" }, answer: { en: "Track clicks, responses, and visit trends to evaluate campaign performance.", hi: "क्लिक्स, प्रतिक्रियाएं और विजिट ट्रेंड ट्रैक करके प्रदर्शन मापा जाता है।" } },
      ]}
      finalCtaTitle={{ en: "Ready to boost traffic with promotions?", hi: "प्रमोशन से ट्रैफिक बढ़ाने के लिए तैयार हैं?" }}
      finalCtaText={{ en: "Engage, re-activate, and convert your customers through timely WhatsApp campaigns.", hi: "समय पर WhatsApp कैंपेन से ग्राहकों को जोड़ें, वापस लाएं और कन्वर्ट करें।" }}
    />
  );
}
