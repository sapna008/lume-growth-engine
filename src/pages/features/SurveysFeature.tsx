import { ClipboardList, HeartHandshake, MessageCircleQuestion, ShieldAlert, Sparkles, UserCheck2 } from "lucide-react";
import FeaturePageTemplate from "./FeaturePageTemplate";
import surveysImage from "@/assets/g-review.png";

export default function SurveysFeature() {
  return (
    <FeaturePageTemplate
      seoTitle="WhatsApp Surveys – Customer Feedback and Satisfaction Insights | Lume"
      seoDescription="Collect customer feedback through WhatsApp surveys, improve service quality, and resolve issues early to increase retention."
      heroBadge={{ en: "Feedback Surveys", hi: "फीडबैक सर्वे" }}
      heroTitle={{ en: "Collect customer feedback before it turns into churn", hi: "ग्राहक फीडबैक लें, churn बनने से पहले" }}
      heroSubtitle={{ en: "Run quick WhatsApp surveys after billing, understand satisfaction, and fix issues early to improve retention.", hi: "बिलिंग के बाद तेज WhatsApp सर्वे चलाएं, संतुष्टि समझें और मुद्दे जल्दी सुलझाकर रिटेंशन बढ़ाएं।" }}
      heroImage={surveysImage}
      heroImageAlt="Customer feedback surveys"
      heroCtaTargetId="surveys-features"
      stats={[
        { value: "1-click", label: { en: "Survey response", hi: "सर्वे रिस्पॉन्स" }, desc: { en: "Customers can reply quickly over WhatsApp.", hi: "ग्राहक WhatsApp पर जल्दी प्रतिक्रिया दे सकते हैं।" }, bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5", border: "border-[#146fb5]/20", color: "#146fb5" },
        { value: "Early", label: { en: "Issue detection", hi: "मुद्दों की जल्दी पहचान" }, desc: { en: "Find service gaps before they hurt loyalty.", hi: "लॉयल्टी प्रभावित होने से पहले सेवा गैप पहचानें।" }, bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", color: "#10b981" },
        { value: "Higher", label: { en: "Retention potential", hi: "रिटेंशन संभावना" }, desc: { en: "Feedback-led actions improve repeat behavior.", hi: "फीडबैक आधारित सुधार रिपीट व्यवहार बढ़ाते हैं।" }, bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", color: "#f59e0b" },
      ]}
      benefitsHeading={{ en: "Feedback system built for retail speed", hi: "रिटेल स्पीड के लिए बना फीडबैक सिस्टम" }}
      benefitsSubheading={{ en: "Capture sentiment continuously and improve customer experience proactively.", hi: "ग्राहक भावना लगातार कैप्चर करें और अनुभव को सक्रिय रूप से सुधारें।" }}
      benefits={[
        { icon: ClipboardList, title: { en: "WhatsApp surveys", hi: "WhatsApp सर्वे" }, desc: { en: "Collect structured feedback in the channel customers already use.", hi: "जिस चैनल का ग्राहक उपयोग करते हैं, उसी पर संरचित फीडबैक लें।" } },
        { icon: UserCheck2, title: { en: "Satisfaction tracking", hi: "संतुष्टि ट्रैकिंग" }, desc: { en: "Track satisfaction trends across time and customer groups.", hi: "समय और ग्राहक समूहों के आधार पर संतुष्टि ट्रेंड देखें।" } },
        { icon: ShieldAlert, title: { en: "Early issue alerts", hi: "मुद्दों की शुरुआती चेतावनी" }, desc: { en: "Identify unhappy customers and respond before they churn.", hi: "असंतुष्ट ग्राहकों को पहचानें और churn से पहले प्रतिक्रिया दें।" } },
      ]}
      stepsHeading={{ en: "How surveys work", hi: "सर्वे कैसे काम करते हैं" }}
      steps={[
        { title: { en: "Send survey after each bill", hi: "हर बिल के बाद सर्वे भेजें" }, desc: { en: "Trigger short feedback surveys right after purchase.", hi: "खरीद के तुरंत बाद छोटे फीडबैक सर्वे ट्रिगर करें।" } },
        { title: { en: "Capture customer responses", hi: "ग्राहक प्रतिक्रियाएं कैप्चर करें" }, desc: { en: "Responses are auto-collected and grouped by sentiment.", hi: "प्रतिक्रियाएं स्वतः एकत्र होकर भावना के अनुसार समूहित होती हैं।" } },
        { title: { en: "Improve service quality", hi: "सेवा गुणवत्ता सुधारें" }, desc: { en: "Use patterns to resolve issues and improve retention.", hi: "पैटर्न का उपयोग कर मुद्दे सुलझाएं और रिटेंशन बढ़ाएं।" } },
      ]}
      whyHeading={{ en: "Why businesses need surveys", hi: "बिजनेस को सर्वे क्यों चाहिए" }}
      whySubheading={{ en: "Customer feedback is the fastest path to better service and loyalty.", hi: "बेहतर सेवा और लॉयल्टी का सबसे तेज रास्ता ग्राहक फीडबैक है।" }}
      whyItems={[
        { title: { en: "Hear every customer voice", hi: "हर ग्राहक की आवाज सुनें" }, desc: { en: "Surveys help you understand real satisfaction, not assumptions.", hi: "सर्वे से वास्तविक संतुष्टि पता चलती है, अनुमान नहीं।" } },
        { title: { en: "Resolve issues sooner", hi: "मुद्दे जल्दी सुलझाएं" }, desc: { en: "Quick feedback loops prevent negative experiences from growing.", hi: "तेज फीडबैक लूप नकारात्मक अनुभवों को बढ़ने से रोकते हैं।" } },
        { title: { en: "Increase long-term retention", hi: "लंबी अवधि का रिटेंशन बढ़ाएं" }, desc: { en: "Customers stay longer when they feel heard and supported.", hi: "जब ग्राहक सुना हुआ महसूस करते हैं तो वे लंबे समय तक जुड़े रहते हैं।" } },
      ]}
      faqsHeading={{ en: "Surveys FAQ", hi: "सर्वे FAQ" }}
      faqsSubheading={{ en: "Answers to common feedback workflow questions.", hi: "फीडबैक वर्कफ्लो से जुड़े सामान्य प्रश्नों के उत्तर।" }}
      faqs={[
        { question: { en: "How are surveys sent to customers?", hi: "ग्राहकों को सर्वे कैसे भेजे जाते हैं?" }, answer: { en: "Surveys are shared on WhatsApp after billing for quick responses.", hi: "बिलिंग के बाद सर्वे WhatsApp पर भेजे जाते हैं ताकि प्रतिक्रिया जल्दी मिले।" } },
        { question: { en: "Can I identify unhappy customers quickly?", hi: "क्या मैं असंतुष्ट ग्राहकों को जल्दी पहचान सकता हूं?" }, answer: { en: "Yes, low-rated responses help flag issues early for action.", hi: "हां, कम रेटिंग वाली प्रतिक्रियाएं जल्दी मुद्दे पहचानने में मदद करती हैं।" } },
        { question: { en: "Will surveys help improve retention?", hi: "क्या सर्वे रिटेंशन सुधारते हैं?" }, answer: { en: "Yes, feedback-led service improvements increase customer retention.", hi: "हां, फीडबैक आधारित सेवा सुधार ग्राहक रिटेंशन बढ़ाते हैं।" } },
      ]}
      finalCtaTitle={{ en: "Ready to improve customer satisfaction?", hi: "ग्राहक संतुष्टि सुधारने के लिए तैयार हैं?" }}
      finalCtaText={{ en: "Use WhatsApp surveys to capture feedback early, improve service quality, and retain more customers.", hi: "WhatsApp सर्वे से जल्दी फीडबैक लें, सेवा गुणवत्ता सुधारें और अधिक ग्राहक बनाए रखें।" }}
    />
  );
}
