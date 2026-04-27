import { FileText, MessageCircle, Repeat, ReceiptText, ScrollText, UserPlus } from "lucide-react";
import FeaturePageTemplate from "./FeaturePageTemplate";
import billVideo from "@/assets/hero-banner/bill-vdoo.mp4";

export default function DigitalBillsFeature() {
  return (
    <FeaturePageTemplate
      seoTitle="Digital Bills on WhatsApp – Fast, Paperless Billing | Lume"
      seoDescription="Send digital bills instantly on WhatsApp, collect customer data, and improve repeat visits with faster, paperless billing."
      heroBadge={{ en: "Digital Bills on WhatsApp", hi: "WhatsApp पर डिजिटल बिल" }}
      heroTitle={{ en: "Send branded digital bills in seconds", hi: "सेकंड्स में ब्रांडेड डिजिटल बिल भेजें" }}
      heroSubtitle={{ en: "Replace paper bills with fast WhatsApp billing that feels modern, captures customer data, and keeps shoppers coming back.", hi: "पेपर बिलिंग को तेज WhatsApp बिलिंग से बदलें जो आधुनिक अनुभव देती है, ग्राहक डेटा कैप्चर करती है और ग्राहकों को वापस लाती है।" }}
      heroVideo={{ en: billVideo, hi: billVideo }}
      heroMediaClassName="w-full max-w-[190px] sm:max-w-[210px] md:max-w-[225px] lg:max-w-[235px] xl:max-w-[250px]"
      heroUseDeviceFrame
      heroImageAlt="WhatsApp digital bill mobile screen"
      heroCtaTargetId="digital-bills-features"
      stats={[
        { value: "3x", label: { en: "Faster billing", hi: "तेज बिलिंग" }, desc: { en: "Create and send bills instantly over WhatsApp.", hi: "WhatsApp पर तुरंत बिल बनाएं और भेजें।" }, bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5", border: "border-[#146fb5]/20", color: "#146fb5" },
        { value: "100%", label: { en: "Paperless flow", hi: "पेपरलेस फ्लो" }, desc: { en: "Reduce printing cost and manual bill handling.", hi: "प्रिंटिंग लागत और मैन्युअल बिल हैंडलिंग घटाएं।" }, bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", color: "#10b981" },
        { value: "24/7", label: { en: "Bill access", hi: "बिल एक्सेस" }, desc: { en: "Customers can re-open bills anytime on their phone.", hi: "ग्राहक कभी भी फोन पर बिल दोबारा देख सकते हैं।" }, bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", color: "#f59e0b" },
      ]}
      benefitsHeading={{ en: "Built for fast, modern billing", hi: "तेज और आधुनिक बिलिंग के लिए बना" }}
      benefitsSubheading={{ en: "Everything your counter needs to bill quicker and stay connected with customers.", hi: "काउंटर पर तेज बिलिंग और ग्राहक कनेक्शन के लिए जरूरी सब कुछ।" }}
      benefits={[
        { icon: MessageCircle, title: { en: "Instant WhatsApp delivery", hi: "तुरंत WhatsApp डिलीवरी" }, desc: { en: "Send each bill directly to your customer in one tap.", hi: "हर बिल एक टैप में ग्राहक तक WhatsApp पर भेजें।" } },
        { icon: ScrollText, title: { en: "Branded invoices", hi: "ब्रांडेड इनवॉइस" }, desc: { en: "Keep your store identity visible on every invoice.", hi: "हर इनवॉइस पर अपनी स्टोर पहचान बनाए रखें।" } },
        { icon: UserPlus, title: { en: "Collect customer data", hi: "ग्राहक डेटा कैप्चर करें" }, desc: { en: "Capture phone-linked purchase history automatically.", hi: "फोन से जुड़ा खरीद इतिहास ऑटोमेटिक कैप्चर करें।" } },
      ]}
      stepsHeading={{ en: "How digital bills work", hi: "डिजिटल बिल कैसे काम करते हैं" }}
      steps={[
        { title: { en: "Create bill at checkout", hi: "चेकआउट पर बिल बनाएं" }, desc: { en: "Generate a clean digital bill during billing in seconds.", hi: "बिलिंग के दौरान सेकंड्स में साफ डिजिटल बिल जेनरेट करें।" } },
        { title: { en: "Share instantly on WhatsApp", hi: "WhatsApp पर तुरंत भेजें" }, desc: { en: "Customer receives bill link and invoice instantly.", hi: "ग्राहक को तुरंत बिल लिंक और इनवॉइस मिल जाता है।" } },
        { title: { en: "Use data for repeat business", hi: "रिपीट बिजनेस के लिए डेटा उपयोग करें" }, desc: { en: "Use captured customer data for retention campaigns.", hi: "कैप्चर किए डेटा से रिटेंशन कैंपेन चलाएं।" } },
      ]}
      whyHeading={{ en: "Why businesses need digital bills", hi: "बिजनेस को डिजिटल बिल क्यों चाहिए" }}
      whySubheading={{ en: "Paperless billing is now a growth lever, not just a billing method.", hi: "पेपरलेस बिलिंग अब सिर्फ बिलिंग नहीं, बल्कि ग्रोथ का साधन है।" }}
      whyItems={[
        { title: { en: "Speed at the counter", hi: "काउंटर पर स्पीड" }, desc: { en: "Shorter billing time means better customer experience and faster queues.", hi: "कम बिलिंग समय से ग्राहक अनुभव बेहतर होता है और लाइनें तेज चलती हैं।" } },
        { title: { en: "Data-backed retention", hi: "डेटा आधारित रिटेंशन" }, desc: { en: "Every bill builds a usable customer database for future engagement.", hi: "हर बिल भविष्य के एंगेजमेंट के लिए उपयोगी ग्राहक डेटाबेस बनाता है।" } },
        { title: { en: "Professional brand image", hi: "प्रोफेशनल ब्रांड इमेज" }, desc: { en: "Branded digital invoices make your business look premium and reliable.", hi: "ब्रांडेड डिजिटल इनवॉइस आपके बिजनेस को प्रीमियम और भरोसेमंद दिखाते हैं।" } },
      ]}
      faqsHeading={{ en: "Digital bills FAQ", hi: "डिजिटल बिल FAQ" }}
      faqsSubheading={{ en: "Quick answers before you start.", hi: "शुरू करने से पहले जरूरी जवाब।" }}
      faqs={[
        { question: { en: "Can I send bills directly on WhatsApp?", hi: "क्या मैं बिल सीधे WhatsApp पर भेज सकता हूं?" }, answer: { en: "Yes, bills are sent instantly to customer WhatsApp during checkout.", hi: "हां, चेकआउट के दौरान बिल तुरंत ग्राहक के WhatsApp पर भेजा जाता है।" } },
        { question: { en: "Will invoices show my brand details?", hi: "क्या इनवॉइस पर मेरी ब्रांड डिटेल्स होंगी?" }, answer: { en: "Yes, invoices can include your store identity and branding elements.", hi: "हां, इनवॉइस में आपकी स्टोर पहचान और ब्रांडिंग एलिमेंट्स दिखते हैं।" } },
        { question: { en: "Does digital billing help repeat visits?", hi: "क्या डिजिटल बिलिंग से रिपीट विजिट बढ़ती हैं?" }, answer: { en: "Yes, because every bill helps capture customer data for follow-up campaigns.", hi: "हां, क्योंकि हर बिल से ग्राहक डेटा कैप्चर होता है जिससे फॉलो-अप कैंपेन चलते हैं।" } },
      ]}
      finalCtaTitle={{ en: "Ready to switch to digital bills?", hi: "डिजिटल बिलिंग शुरू करने के लिए तैयार हैं?" }}
      finalCtaText={{ en: "Deliver faster billing, paperless operations, and stronger repeat customer growth with Lume.", hi: "ल्यूम के साथ तेज बिलिंग, पेपरलेस ऑपरेशन और बेहतर रिपीट ग्राहक ग्रोथ पाएं।" }}
    />
  );
}
