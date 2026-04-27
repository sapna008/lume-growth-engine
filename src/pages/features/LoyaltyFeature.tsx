import { BadgePercent, Coins, Repeat, Trophy, UserRoundCheck, Wallet } from "lucide-react";
import FeaturePageTemplate from "./FeaturePageTemplate";
import heroImage from "@/assets/refer/in-store.png";

export default function LoyaltyFeature() {
  return (
    <FeaturePageTemplate
      seoTitle="Customer Loyalty Programs – Points, Cashback, Offers | Lume"
      seoDescription="Reward repeat customers with points, cashback, and offers to increase retention and customer lifetime value."
      heroBadge={{ en: "Loyalty & Retention", hi: "लॉयल्टी और रिटेंशन" }}
      heroTitle={{ en: "Reward repeat buyers and grow lifetime value", hi: "रिपीट ग्राहकों को रिवॉर्ड दें और लाइफटाइम वैल्यू बढ़ाएं" }}
      heroSubtitle={{ en: "Launch points, cashback, and offers that automatically bring your best customers back to your store.", hi: "ऐसे पॉइंट्स, कैशबैक और ऑफर्स चलाएं जो आपके बेहतरीन ग्राहकों को दोबारा स्टोर तक लाएं।" }}
      heroImage={heroImage}
      heroImageAlt="Loyalty program visual"
      heroCtaTargetId="loyalty-features"
      stats={[
        { value: "2.4x", label: { en: "Repeat visits", hi: "रिपीट विजिट" }, desc: { en: "Reward-led engagement brings customers back faster.", hi: "रिवॉर्ड आधारित एंगेजमेंट ग्राहकों को जल्दी वापस लाता है।" }, bg: "bg-gradient-to-br from-[#146fb5]/15 to-[#146fb5]/5", border: "border-[#146fb5]/20", color: "#146fb5" },
        { value: "+30%", label: { en: "Retention uplift", hi: "रिटेंशन वृद्धि" }, desc: { en: "Personalized rewards reduce customer drop-off.", hi: "पर्सनलाइज्ड रिवॉर्ड ग्राहक ड्रॉप-ऑफ घटाते हैं।" }, bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", color: "#10b981" },
        { value: "CLV+", label: { en: "Lifetime value", hi: "लाइफटाइम वैल्यू" }, desc: { en: "Loyal customers spend more over time.", hi: "वफादार ग्राहक समय के साथ अधिक खर्च करते हैं।" }, bg: "bg-gradient-to-br from-amber-500/15 to-amber-500/5", border: "border-amber-500/20", color: "#f59e0b" },
      ]}
      benefitsHeading={{ en: "Everything needed to drive loyalty", hi: "लॉयल्टी बढ़ाने के लिए जरूरी सब कुछ" }}
      benefitsSubheading={{ en: "Smart reward journeys that keep your customers engaged after every purchase.", hi: "स्मार्ट रिवॉर्ड जर्नी जो हर खरीदारी के बाद ग्राहकों को जोड़े रखती है।" }}
      benefits={[
        { icon: Coins, title: { en: "Points and cashback", hi: "पॉइंट्स और कैशबैक" }, desc: { en: "Offer flexible reward mechanics that customers understand instantly.", hi: "ऐसे रिवॉर्ड विकल्प दें जिन्हें ग्राहक तुरंत समझें।" } },
        { icon: BadgePercent, title: { en: "Auto offers for return visits", hi: "रिटर्न विजिट के लिए ऑटो ऑफर्स" }, desc: { en: "Trigger rewards automatically based on purchase behavior.", hi: "खरीद पैटर्न के आधार पर रिवॉर्ड ऑटो ट्रिगर करें।" } },
        { icon: UserRoundCheck, title: { en: "Retention tracking", hi: "रिटेंशन ट्रैकिंग" }, desc: { en: "Track active members, redemptions, and repeat purchase trends.", hi: "एक्टिव मेंबर्स, रिडेम्प्शन और रिपीट खरीद ट्रेंड ट्रैक करें।" } },
      ]}
      stepsHeading={{ en: "How loyalty works", hi: "लॉयल्टी कैसे काम करती है" }}
      steps={[
        { title: { en: "Enroll customers at billing", hi: "बिलिंग पर ग्राहक एनरोल करें" }, desc: { en: "Add customers into your loyalty program while billing.", hi: "बिलिंग के दौरान ग्राहकों को लॉयल्टी प्रोग्राम में जोड़ें।" } },
        { title: { en: "Reward purchases automatically", hi: "खरीद पर ऑटो रिवॉर्ड दें" }, desc: { en: "Points, cashback, or offers are applied without manual work.", hi: "पॉइंट्स, कैशबैक या ऑफर बिना मैन्युअल काम के लागू होते हैं।" } },
        { title: { en: "Bring them back again", hi: "उन्हें फिर वापस लाएं" }, desc: { en: "Use reward reminders to convert occasional buyers into regulars.", hi: "रिवॉर्ड रिमाइंडर से कभी-कभार खरीदने वालों को रेगुलर बनाएं।" } },
      ]}
      whyHeading={{ en: "Why businesses need loyalty", hi: "बिजनेस को लॉयल्टी क्यों चाहिए" }}
      whySubheading={{ en: "Acquiring customers is costly; retaining them is profitable.", hi: "नए ग्राहक लाना महंगा है; उन्हें बनाए रखना लाभदायक है।" }}
      whyItems={[
        { title: { en: "Predictable repeat revenue", hi: "स्थिर रिपीट रेवेन्यू" }, desc: { en: "Loyal members return more often, improving revenue stability.", hi: "वफादार ग्राहक बार-बार आते हैं, जिससे रेवेन्यू स्थिर होता है।" } },
        { title: { en: "Higher customer stickiness", hi: "बेहतर ग्राहक जुड़ाव" }, desc: { en: "Personal rewards make customers choose your store over alternatives.", hi: "पर्सनल रिवॉर्ड से ग्राहक विकल्पों की जगह आपका स्टोर चुनते हैं।" } },
        { title: { en: "Stronger long-term value", hi: "लंबी अवधि की वैल्यू" }, desc: { en: "Retention and upsell together improve customer lifetime value.", hi: "रिटेंशन और अपसेल मिलकर कस्टमर लाइफटाइम वैल्यू बढ़ाते हैं।" } },
      ]}
      faqsHeading={{ en: "Loyalty FAQ", hi: "लॉयल्टी FAQ" }}
      faqsSubheading={{ en: "Common questions from store owners.", hi: "स्टोर ओनर्स के सामान्य प्रश्न।" }}
      faqs={[
        { question: { en: "Can I run points and cashback together?", hi: "क्या मैं पॉइंट्स और कैशबैक साथ चला सकता हूं?" }, answer: { en: "Yes, you can combine reward types based on your campaign strategy.", hi: "हां, आप अपनी कैंपेन रणनीति के अनुसार कई रिवॉर्ड टाइप साथ चला सकते हैं।" } },
        { question: { en: "Will customers get offers automatically?", hi: "क्या ग्राहकों को ऑफर्स ऑटोमेटिक मिलेंगे?" }, answer: { en: "Yes, offers can be auto-triggered for repeat purchase milestones.", hi: "हां, रिपीट खरीद माइलस्टोन पर ऑफर्स ऑटो-ट्रिगर किए जा सकते हैं।" } },
        { question: { en: "Can I track redemption performance?", hi: "क्या मैं रिडेम्प्शन परफॉर्मेंस ट्रैक कर सकता हूं?" }, answer: { en: "Yes, you can monitor redemptions and loyalty impact from your dashboard.", hi: "हां, आप डैशबोर्ड से रिडेम्प्शन और लॉयल्टी प्रभाव ट्रैक कर सकते हैं।" } },
      ]}
      finalCtaTitle={{ en: "Ready to build customer loyalty?", hi: "कस्टमर लॉयल्टी बनाने के लिए तैयार हैं?" }}
      finalCtaText={{ en: "Turn one-time buyers into loyal regulars with smart, automated reward journeys.", hi: "स्मार्ट और ऑटोमेटेड रिवॉर्ड जर्नी से एक बार खरीदने वालों को रेगुलर ग्राहकों में बदलें।" }}
    />
  );
}
