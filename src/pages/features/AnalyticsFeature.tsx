import { BarChart3, Building2, ChartLine, FileSpreadsheet, ScanSearch, TrendingUp } from "lucide-react";
import FeaturePageTemplate from "./FeaturePageTemplate";
import analyticsDashboardScreenshot from "@/assets/features/analytics.png";

export default function AnalyticsFeature() {
  return (
    <FeaturePageTemplate
      seoTitle="Retail Analytics – Multi-Store Trends and Growth Insights | Lume"
      seoDescription="Track multi-store revenue trends, customer behavior, billing performance, and growth reports for smarter decisions."
      heroBadge={{ en: "Business Analytics", hi: "बिजनेस एनालिटिक्स" }}
      heroTitle={{ en: "Get real-time insights across every store", hi: "हर स्टोर के लिए रियल-टाइम इनसाइट्स पाएं" }}
      heroSubtitle={{ en: "Understand revenue trends, customer behavior, and billing performance to make smarter growth decisions.", hi: "रेवेन्यू ट्रेंड, ग्राहक व्यवहार और बिलिंग प्रदर्शन समझकर बेहतर ग्रोथ निर्णय लें।" }}
      heroImage={analyticsDashboardScreenshot}
      heroImageAlt="Lume analytics dashboard with KPI cards and trend charts"
      heroUseCardFrame
      heroMediaClassName="w-full h-auto max-w-[480px] lg:max-w-[560px] xl:max-w-[620px] object-cover"
      heroCtaTargetId="analytics-features"
      stats={[
        { value: "Multi", label: { en: "Store visibility", hi: "मल्टी-स्टोर विजिबिलिटी" }, desc: { en: "Track all locations from one analytics view.", hi: "एक व्यू से सभी लोकेशन का प्रदर्शन देखें।" }, bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5", border: "border-[#146fb5]/20", color: "#146fb5" },
        { value: "Real-time", label: { en: "Performance trends", hi: "परफॉर्मेंस ट्रेंड" }, desc: { en: "Spot sales and billing changes as they happen.", hi: "सेल्स और बिलिंग बदलाव को तुरंत पहचानें।" }, bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", color: "#10b981" },
        { value: "Actionable", label: { en: "Growth reports", hi: "ग्रोथ रिपोर्ट" }, desc: { en: "Turn reports into decisions that improve outcomes.", hi: "रिपोर्ट को फैसलों में बदलें जो परिणाम सुधारें।" }, bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", color: "#f59e0b" },
      ]}
      benefitsHeading={{ en: "Analytics that helps you act faster", hi: "ऐसे एनालिटिक्स जो आपको तेजी से निर्णय लेने दें" }}
      benefitsSubheading={{ en: "From billing to customer behavior, get one clear view of business growth.", hi: "बिलिंग से ग्राहक व्यवहार तक, बिजनेस ग्रोथ का एक स्पष्ट व्यू पाएं।" }}
      benefits={[
        { icon: Building2, title: { en: "Multi-store insights", hi: "मल्टी-स्टोर इनसाइट्स" }, desc: { en: "Compare location-level performance in one dashboard.", hi: "एक डैशबोर्ड में लोकेशन स्तर का प्रदर्शन तुलना करें।" } },
        { icon: ChartLine, title: { en: "Revenue trends", hi: "रेवेन्यू ट्रेंड" }, desc: { en: "Identify top-performing periods, products, and stores.", hi: "बेहतर प्रदर्शन वाले समय, प्रोडक्ट और स्टोर पहचानें।" } },
        { icon: ScanSearch, title: { en: "Customer behavior analysis", hi: "ग्राहक व्यवहार विश्लेषण" }, desc: { en: "Understand repeat frequency and engagement patterns.", hi: "रिपीट आवृत्ति और एंगेजमेंट पैटर्न समझें।" } },
      ]}
      stepsHeading={{ en: "How analytics works", hi: "एनालिटिक्स कैसे काम करता है" }}
      steps={[
        { title: { en: "Collect billing and engagement data", hi: "बिलिंग और एंगेजमेंट डेटा इकट्ठा करें" }, desc: { en: "Data is automatically captured from your daily store operations.", hi: "दैनिक स्टोर संचालन से डेटा स्वतः कैप्चर होता है।" } },
        { title: { en: "Visualize trends and reports", hi: "ट्रेंड और रिपोर्ट देखें" }, desc: { en: "Monitor growth reports and KPI trends across stores.", hi: "स्टोर्स के KPI और ग्रोथ रिपोर्ट नियमित देखें।" } },
        { title: { en: "Take smarter actions", hi: "बेहतर निर्णय लें" }, desc: { en: "Use insights to optimize campaigns, inventory, and staffing.", hi: "इनसाइट्स से कैंपेन, इन्वेंट्री और स्टाफिंग बेहतर करें।" } },
      ]}
      whyHeading={{ en: "Why businesses need analytics", hi: "बिजनेस को एनालिटिक्स क्यों चाहिए" }}
      whySubheading={{ en: "Growth comes from measurement, not guesswork.", hi: "ग्रोथ अनुमान से नहीं, मापन से आती है।" }}
      whyItems={[
        { title: { en: "Clear revenue direction", hi: "स्पष्ट रेवेन्यू दिशा" }, desc: { en: "Know exactly what drives growth and what needs correction.", hi: "स्पष्ट जानें कि ग्रोथ किससे आती है और क्या सुधारना है।" } },
        { title: { en: "Operational efficiency", hi: "ऑपरेशनल दक्षता" }, desc: { en: "Use billing performance insights to improve daily processes.", hi: "बिलिंग प्रदर्शन इनसाइट्स से दैनिक प्रक्रियाएं बेहतर करें।" } },
        { title: { en: "Confident decisions", hi: "आत्मविश्वासी निर्णय" }, desc: { en: "Make strategic decisions backed by real business data.", hi: "वास्तविक बिजनेस डेटा के आधार पर रणनीतिक निर्णय लें।" } },
      ]}
      faqsHeading={{ en: "Analytics FAQ", hi: "एनालिटिक्स FAQ" }}
      faqsSubheading={{ en: "Most asked questions by growing retailers.", hi: "तेजी से बढ़ते रिटेलर्स के आम प्रश्न।" }}
      faqs={[
        { question: { en: "Can I monitor multiple stores in one place?", hi: "क्या मैं कई स्टोर एक जगह से मॉनिटर कर सकता हूं?" }, answer: { en: "Yes, the dashboard is designed to provide multi-store visibility.", hi: "हां, डैशबोर्ड मल्टी-स्टोर विजिबिलिटी के लिए बनाया गया है।" } },
        { question: { en: "Will I get billing performance reports?", hi: "क्या मुझे बिलिंग प्रदर्शन रिपोर्ट मिलेगी?" }, answer: { en: "Yes, you can track billing trends, performance, and growth reports.", hi: "हां, आप बिलिंग ट्रेंड, प्रदर्शन और ग्रोथ रिपोर्ट देख सकते हैं।" } },
        { question: { en: "Can I export reports for my team?", hi: "क्या मैं टीम के लिए रिपोर्ट एक्सपोर्ट कर सकता हूं?" }, answer: { en: "Yes, reports can be shared to support team-level decision making.", hi: "हां, रिपोर्ट साझा की जा सकती हैं ताकि टीम निर्णय बेहतर ले सके।" } },
      ]}
      finalCtaTitle={{ en: "Ready for smarter business decisions?", hi: "बेहतर बिजनेस निर्णयों के लिए तैयार हैं?" }}
      finalCtaText={{ en: "Use multi-store analytics and growth reports to scale with confidence.", hi: "मल्टी-स्टोर एनालिटिक्स और ग्रोथ रिपोर्ट के साथ आत्मविश्वास से स्केल करें।" }}
    />
  );
}
