import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Download,
  Play,
  CheckCircle2,
  Video,
  HelpCircle,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

// Guide data configuration
export const guideData = [
  {
    slug: "download-app",
    type: "download" as const,
    title: "Getting Started with Lume",
    buttonLabel: "Download",
    buttonLink: "https://play.google.com/store/apps/details?id=com.mhjs.retailerapp&hl=en",
    bullets: [
      "Download the Lume app from Play Store",
      "Set up your store details and staff",
      "Start billing within minutes",
      "Send your first digital bill to a customer"
    ]
  },
  // Analytics + campaigns module guides
  {
    slug: "analytics-dashboard",
    type: "video" as const,
    title: "Analytics Dashboard – Sales, Customers & Products",
    videoUrl: "https://www.youtube.com/embed/wQ4f4bbpVOw?rel=0",
    bullets: [
      "Use Analysis → Know Your Sales for full sales & bill analysis",
      "Compare total sales and bill count with previous period",
      "Track Daily Sales, Bills & Avg Bill Value",
      "See Monthly & Hourly trends for peak time",
      "Know Your Customer → visits, top spenders, segments",
      "Product charts → top sellers, combos, repeat buys"
    ]
  },
  {
    slug: "onboarding",
    type: "video" as const,
    title: "Onboarding – Set Up Your Store & Start Billing",
    videoUrl: "https://www.youtube.com/embed/fvolXdZDLxU?rel=0",
    bullets: [
      "Complete store registration in minutes",
      "Add store details and configure preferences",
      "Activate subscription and payment setup",
      "Get ready to start billing instantly"
    ]
  },
  {
    slug: "dashboard",
    type: "video" as const,
    title: "Dashboard – Track Your Store Performance",
    videoUrl: "https://www.youtube.com/embed/Qk_xRFe8lw0?rel=0",
    bullets: [
      "View daily sales and billing summary",
      "Monitor customer visits and activity",
      "Track revenue trends in real time",
      "Get insights to improve store performance"
    ]
  },
  {
    slug: "analytics-dashboard",
    type: "video" as const,
    title: "Analytics Dashboard – Sales, Customers & Products",
    videoUrl: "https://www.youtube.com/embed/wQ4f4bbpVOw?rel=0",
    bullets: [
      "Know Your Sales for full sales & bill analysis",
      "Compare total sales and bill count with previous period",
      "Track Daily Sales, Bills & Avg Bill Value",
      "See Monthly & Hourly trends for peak time",
      "Know Your Customer → visits, top spenders, segments",
      "Product charts → top sellers, combos, repeat buys"
    ]
  },
  {
    slug: "create-bill",
    type: "video" as const,
    title: "Create & Send Digital Bills",
    videoUrl: "https://www.youtube.com/embed/IDCfNJ3yRbE?rel=0",
    bullets: [
      "Generate GST and non-GST bills",
      "Use quick billing for faster checkout",
      "Send invoices instantly via WhatsApp",
      "Automatically save billing records"
    ]
  },
  {
    slug: "credit-management",
    type: "video" as const,
    title: "Credit Management – Track & Settle Credits",
    videoUrl: "https://www.youtube.com/embed/dtlGQOfM8fc?rel=0",
    bullets: [
      "View outstanding customer credits",
      "Record and settle pending payments",
      "Maintain clear credit history",
      "Reduce billing discrepancies"
    ]
  },
  {
    slug: "ebill-listing",
    type: "video" as const,
    title: "eBill Listing – Manage All Your Bills",
    videoUrl: "https://www.youtube.com/embed/4ANztwVu31o?rel=0",
    bullets: [
      "Access complete billing history",
      "Search and filter bills quickly",
      "Track transaction records easily",
      "Maintain organized digital documentation"
    ]
  },
  {
    slug: "product-management",
    type: "video" as const,
    title: "Product Management – Control Your Inventory",
    videoUrl: "https://www.youtube.com/embed/ivkiHcfe7V8?rel=0",
    bullets: [
      "Add and edit product details",
      "Update stock levels instantly",
      "Remove discontinued items",
      "Maintain accurate pricing records"
    ]
  },
  {
    slug: "wallet",
    type: "video" as const,
    title: "Wallet – Recharge & Manage Credits",
    videoUrl: "https://www.youtube.com/embed/I27PTe0r2SM?rel=0",
    bullets: [
      "Recharge SMS and WhatsApp credits",
      "Track usage and transaction history",
      "Monitor available balance in real time",
      "Ensure uninterrupted customer communication"
    ]
  },
  {
    slug: "reports",
    type: "video" as const,
    title: "Reports – Analyze & Export Business Data",
    videoUrl: "https://www.youtube.com/embed/V0t4fikzBTw?rel=0",
    bullets: [
      "Generate detailed sales reports",
      "Access multiple report formats",
      "Download and export master reports",
      "Make data-driven decisions"
    ]
  },
  {
    slug: "customer-feedback",
    type: "video" as const,
    title: "Customer Feedback – Understand Your Customers",
    videoUrl: "https://www.youtube.com/embed/iiSRtiwZPyA?rel=0",
    bullets: [
      "View customer reviews and feedback",
      "Identify service improvement areas",
      "Monitor satisfaction trends",
      "Strengthen customer relationships"
    ]
  },
  {
    slug: "user-management",
    type: "video" as const,
    title: "User Management – Control Staff Access",
    videoUrl: "https://www.youtube.com/embed/NE2ZFmO0CZg?rel=0",
    bullets: [
      "Add and manage store users",
      "Assign role-based permissions",
      "Update or remove staff accounts",
      "Maintain secure access control"
    ]
  },
  // Campaign / marketing module guides
  {
    slug: "basic-marketing-campaign",
    type: "video" as const,
    title: "Marketing Campaigns – Basics & Overview",
    videoUrl: "https://www.youtube.com/embed/1MoOO5XbFgE?rel=0",
    bullets: [
      "Understand how marketing campaigns work inside Lume.",
      "Pick the right customers and channels for each campaign.",
      "Set clear goals and track basic campaign performance.",
      "Use campaigns to bring back inactive customers and lift average bill value."
    ]
  },
  {
    slug: "promotions-on-ebills",
    type: "video" as const,
    title: "Promotions – Show Offers on eBills",
    videoUrl: "https://www.youtube.com/embed/yWv2G8aNz3g?rel=0",
    bullets: [
      "Show offers directly on eBills so every customer sees active deals.",
      "Create a promotion from Campaigns → Promotions → Add Promotion.",
      "Add name, short description and expiry date for the offer.",
      "Select image, text or video, upload the file and submit to go live."
    ]
  },
  {
    slug: "coupons-cashback",
    type: "video" as const,
    title: "Coupons – Cashback & Targeted Offers",
    videoUrl: "https://www.youtube.com/embed/bYJHBM4c9ug?rel=0",
    bullets: [
      "Use coupons for cashback and targeted offers that drive traffic and sales.",
      "Create a coupon from Campaigns → Coupons → Create Coupon.",
      "Set name, short description and issuance type (bulk, personal or on-demand).",
      "Choose issuance/redemption dates, discount type (amount or %) and discount value.",
      "Add header, CQ code, banner image and terms file, then set how many coupons you need."
    ]
  }
];

export default function Guides() {
  const { language } = useLanguage();
  useSEO('Guides – Lume Setup, Billing & Campaigns', 'Step-by-step Lume guides: getting started, billing, campaigns, loyalty. For Indian retailers.');

  const faqs = [
    {
      question: "What is Lume?",
      questionHI: "ल्यूम क्या है?",
      answer: "Lume is a smart retail platform designed to help retailers manage billing, customer engagement, campaigns, analytics, and online sales — all from one system. It goes beyond basic billing and helps you grow your business using data and digital tools.",
      answerHI: "ल्यूम एक स्मार्ट रिटेल प्लेटफ़ॉर्म है जो दुकानदारों को बिलिंग, ग्राहक जुड़ाव, कैंपेन, एनालिटिक्स और ऑनलाइन सेल्स — सब कुछ एक ही सिस्टम से मैनेज करने में मदद करता है। यह सिर्फ़ बेसिक बिलिंग से आगे बढ़कर डेटा और डिजिटल टूल्स की मदद से आपका बिज़नेस बढ़ाने के लिए बनाया गया है।"
    },
    {
      question: "What features do I get for free?",
      questionHI: "मुझे फ्री में कौन‑कौन से फीचर्स मिलते हैं?",
      answer: "With Lume, you get free access to essential tools including: Basic tax and non-tax billing, Digital bills via SMS, WhatsApp, and Email, Store listing and visibility, Customer feedback collection, Staff and team management tools, ONDC auto-onboarding, Simple promotional campaigns. These features are enough to start billing and engaging customers digitally.",
      answerHI: "ल्यूम के साथ आपको कई ज़रूरी टूल्स का फ्री एक्सेस मिलता है: बेसिक टैक्स और नॉन‑टैक्स बिलिंग, SMS, WhatsApp और Email के ज़रिये डिजिटल बिल, स्टोर लिस्टिंग और विज़िबिलिटी, कस्टमर फ़ीडबैक कलेक्शन, स्टाफ और टीम मैनेजमेंट टूल्स, ONDC ऑटो‑ऑनबोर्डिंग और सिंपल प्रमोशनल कैंपेन। ये सब आपको डिजिटल बिलिंग और कस्टमर एंगेजमेंट शुरू करने के लिए काफ़ी है।"
    },
    {
      question: "What advanced features can I use?",
      questionHI: "मैं कौन‑कौन से एडवांस फीचर्स इस्तेमाल कर सकता हूँ?",
      answer: "Advanced features are designed for growing businesses and include: Advanced sales and customer analytics, Personalised campaigns (rewards, loyalty, coupons), Customer segmentation, Campaign performance insights, Social media promotion tools, Multi-store and franchise management. You can enable these tools based on your business needs.",
      answerHI: "एडवांस फीचर्स बढ़ते हुए बिज़नेस के लिए बनाए गए हैं, जैसे: एडवांस सेल्स और कस्टमर एनालिटिक्स, पर्सनलाइज़्ड कैंपेन (रिवॉर्ड्स, लॉयल्टी, कूपन), कस्टमर सेगमेंटेशन, कैंपेन परफॉर्मेंस इनसाइट्स, सोशल मीडिया प्रमोशन टूल्स, मल्टी‑स्टोर और फ्रैंचाइज़ मैनेजमेंट। आप अपने बिज़नेस की ज़रूरत के हिसाब से इन्हें ऑन कर सकते हैं।"
    },
    {
      question: "Can I send bills directly to my customers?",
      questionHI: "क्या मैं सीधे अपने ग्राहकों को बिल भेज सकता हूँ?",
      answer: "Yes. Lume allows you to send bills instantly through: WhatsApp, SMS, Email, App notifications. This ensures customers always receive and remember your store bills.",
      answerHI: "हाँ। ल्यूम आपको तुरंत WhatsApp, SMS, Email और ऐप नोटिफिकेशन के ज़रिये ग्राहकों को बिल भेजने की सुविधा देता है। इससे ग्राहक हमेशा आपका बिल आसानी से देख और संभाल पाते हैं और आपकी दुकान याद रहती है।"
    },
    {
      question: "How can I promote my store using Lume?",
      questionHI: "मैं ल्यूम के ज़रिये अपनी दुकान का प्रमोशन कैसे करूँ?",
      answer: "You can promote your store using multiple channels: WhatsApp and SMS campaigns, Social media promotions, Visibility on the Lume consumer app, Listing and discovery via ONDC. These tools help attract new customers and bring back existing ones.",
      answerHI: "आप कई चैनलों के ज़रिये अपनी दुकान प्रमोट कर सकते हैं: WhatsApp और SMS कैंपेन, सोशल मीडिया प्रमोशन, ल्यूम कंज्यूमर ऐप पर विज़िबिलिटी, और ONDC के माध्यम से लिस्टिंग व डिस्कवरी। ये टूल्स नए ग्राहकों को लाने और पुराने ग्राहकों को वापस बुलाने में मदद करते हैं।"
    },
    {
      question: "Can I manage more than one shop in Lume?",
      questionHI: "क्या मैं ल्यूम में एक से ज़्यादा दुकानें मैनेज कर सकता हूँ?",
      answer: "Yes. Lume supports: Multiple stores, POS-based billing, Franchise or chain store management. All your stores can be managed from a single dashboard.",
      answerHI: "हाँ। ल्यूम में आप मल्टीपल स्टोर्स, POS‑आधारित बिलिंग और फ्रैंचाइज़ या चेन स्टोर्स को मैनेज कर सकते हैं। आपकी सारी दुकानों का कंट्रोल एक ही डैशबोर्ड से हो सकता है।"
    },
    {
      question: "Can I track customer activity and behaviour?",
      questionHI: "क्या मैं ग्राहकों की एक्टिविटी और व्यवहार ट्रैक कर सकता हूँ?",
      answer: "Yes. Lume automatically: Tracks customer purchase history, Collects feedback, Segments customers based on behaviour, Helps you create targeted campaigns. This allows you to make better business decisions.",
      answerHI: "हाँ। ल्यूम अपने आप ग्राहकों की खरीदारी हिस्ट्री ट्रैक करता है, फ़ीडबैक जुटाता है, व्यवहार के आधार पर कस्टमर सेगमेंट बनाता है और आपको टार्गेटेड कैंपेन बनाने में मदद करता है। इससे आप बेहतर बिज़नेस डिसीज़न ले पाते हैं।"
    },
    {
      question: "What are cashback, rewards, and loyalty features?",
      questionHI: "कैशबैक, रिवॉर्ड और लॉयल्टी फीचर्स क्या हैं?",
      answer: "Lume lets you run custom retention programs such as: Loyalty points, Discount coupons, Cashback offers, Referral programs. These tools help increase repeat customers and long-term loyalty.",
      answerHI: "ल्यूम आपको कई तरह के रिटेंशन प्रोग्राम चलाने देता है जैसे: लॉयल्टी पॉइंट्स, डिस्काउंट कूपन, कैशबैक ऑफ़र और रेफ़रल प्रोग्राम। ये टूल्स रिपीट कस्टमर बढ़ाने और लंबी अवधि की लॉयल्टी बनाने में मदद करते हैं।"
    },
    {
      question: "Is customer support available?",
      questionHI: "क्या कस्टमर सपोर्ट उपलब्ध है?",
      answer: "Yes. Lume provides: WhatsApp support, Phone support, Personalised onboarding and assistance. Our support team helps you at every step of your journey.",
      answerHI: "हाँ। ल्यूम आपको WhatsApp सपोर्ट, फ़ोन सपोर्ट और पर्सनलाइज़्ड ऑनबोर्डिंग व असिस्टेंस देता है। हमारी सपोर्ट टीम हर स्टेप पर आपकी मदद के लिए तैयार रहती है।"
    },
    {
      question: "Do I need to pay for all features?",
      questionHI: "क्या मुझे सारे फीचर्स के लिए पैसे देने पड़ेंगे?",
      answer: "No. Basic features are completely free. You only pay for additional tools such as: Advanced campaigns, SMS / WhatsApp usage beyond free limits, Loyalty and rewards programs, Advanced analytics. You can upgrade anytime based on your needs.",
      answerHI: "नहीं। बेसिक फीचर्स पूरी तरह फ्री हैं। आपको सिर्फ़ कुछ एडवांस टूल्स के लिए पे करना होता है, जैसे: एडवांस कैंपेन, फ्री लिमिट से ज़्यादा SMS / WhatsApp यूज़ेज, लॉयल्टी और रिवॉर्ड प्रोग्राम, एडवांस एनालिटिक्स। अपनी ज़रूरत के हिसाब से आप कभी भी अपग्रेड कर सकते हैं।"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Guides Grid Section */}
        <section className="section-spacing bg-gradient-to-b from-white via-[#f4f7fb] to-white pt-24">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Video className="w-6 h-6" style={{ color: '#146fb5' }} />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: '#1b181f' }}>
                  {language === "HI" ? "गाइड्स" : "Guides"}
                </h2>
              </div>
              <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
                {language === "HI"
                  ? "Lume के साथ शुरुआत करने के लिए चरण-दर-चरण गाइड"
                  : "Step-by-step guides to get started with Lume"}
              </p>
            </motion.div>

            {/* Core guides – uniform cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {guideData
                .filter(
                  (guide) =>
                    !["basic-marketing-campaign", "promotions-on-ebills", "coupons-cashback"].includes(guide.slug)
                )
                .map((guide, i) => (
                <motion.div
                  key={guide.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#146fb5]/30 flex flex-col"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                      {guide.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold bg-[#146fb5]/5 text-[#146fb5]">
                      {guide.type === "download" ? "Download" : "Video"}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm sm:text-[0.95rem] flex-1">
                    {guide.bullets.slice(0, 4).map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="leading-relaxed" style={{ color: '#4f4f4f' }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {guide.bullets.length > 4 && (
                    <p className="mt-2 text-xs text-[#6b7280]">
                      + {guide.bullets.length - 4} more points inside the guide
                    </p>
                  )}

                  <div className="mt-4">
                    {guide.type === "download" ? (
                      <Button
                        size="sm"
                        variant="cta"
                        onClick={() => window.open(guide.buttonLink, '_blank')}
                        className="w-full justify-center text-xs sm:text-sm"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        {guide.buttonLabel}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="cta"
                        asChild
                        className="w-full justify-center text-xs sm:text-sm"
                      >
                        <Link to={`/guides/${guide.slug}`}>
                          <Play className="w-4 h-4 mr-1" />
                          Watch guide
                        </Link>
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Campaign / Marketing guides – same cards, inside a separate box */}
            <div id="campaign-guides" className="mt-14 sm:mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 sm:mb-6 text-center"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#146fb5]/5 border border-[#146fb5]/20">
                    <span className="w-2 h-2 rounded-full bg-[#146fb5]" />
                    <span className="text-xs sm:text-sm font-semibold" style={{ color: "#146fb5" }}>
                      {language === "HI" ? "कैंपेन और मार्केटिंग गाइड्स" : "Campaign & marketing guides"}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight" style={{ color: "#1b181f" }}>
                    {language === "HI"
                      ? "ऑफ़र, कूपन और कैंपेन की पूरी समझ"
                      : "Master offers, coupons & campaigns"}
                  </h3>
                </div>
              </motion.div>

              <div className="rounded-2xl border border-[#e0e7ff] bg-white/90 p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                  {guideData
                    .filter((guide) =>
                      ["basic-marketing-campaign", "promotions-on-ebills", "coupons-cashback"].includes(guide.slug)
                    )
                    .map((guide, i) => (
                      <motion.div
                        key={guide.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#146fb5]/30 flex flex-col"
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <h4 className="text-lg sm:text-xl font-bold" style={{ color: "#1b181f" }}>
                            {guide.title}
                          </h4>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold bg-[#146fb5]/5 text-[#146fb5]">
                            Video
                          </span>
                        </div>

                        <ul className="space-y-2 text-sm sm:text-[0.95rem] flex-1">
                          {guide.bullets.slice(0, 4).map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#146fb5" }} />
                              <span className="leading-relaxed" style={{ color: "#4f4f4f" }}>
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {guide.bullets.length > 4 && (
                          <p className="mt-2 text-xs text-[#6b7280]">
                            + {guide.bullets.length - 4} more points inside the guide
                          </p>
                        )}

                        <div className="mt-4">
                          <Button
                            size="sm"
                            variant="cta"
                            asChild
                            className="w-full justify-center text-xs sm:text-sm"
                          >
                            <Link to={`/guides/${guide.slug}`}>
                              <Play className="w-4 h-4 mr-1" />
                              {language === "HI" ? "वीडियो देखें" : "Watch guide"}
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section-padding bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <HelpCircle className="w-6 h-6" style={{ color: '#146fb5' }} />
                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#1b181f' }}>
                  {language === "HI" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}
                </h2>
              </div>
              <p className="text-lg" style={{ color: '#4f4f4f' }}>
                {language === "HI"
                  ? "Lume से जुड़े आम सवालों के जवाब यहाँ पाएँ"
                  : "Find answers to common questions about Lume"}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <AccordionItem
                      value={`item-${i}`}
                      className="bg-white rounded-xl border border-gray-100 px-6 sm:px-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-bold text-lg sm:text-xl hover:no-underline py-6" style={{ color: '#1b181f' }}>
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#146fb5' }} />
                          <span>
                            {language === "HI" && (faq as any).questionHI ? (faq as any).questionHI : faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed pb-6 ml-8" style={{ color: '#4f4f4f' }}>
                        {language === "HI" && (faq as any).answerHI ? (faq as any).answerHI : faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
