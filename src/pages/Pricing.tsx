import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, HelpCircle, Zap, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const plans = [
  {
    name: "Standard",
    nameHI: "स्टैंडर्ड",
    tagLine: "Ideal for small retail businesses",
    price: "₹2,500",
    originalPrice: "₹14,999",
    periodLabel: "per year + 18% GST",
    highlightLine: "What's included:",
    messagesLabel: "500 FREE MESSAGES INCLUDED",
    features: [
      "E‑Bill sending (SMS, WhatsApp, Email)",
      "Smart E‑Bills (Logo, Social, AI‑Driven)",
      "Credit Management (Udhaar Control)",
      "Marketing & Campaign Tools",
    ],
    featuresHI: [
      "ई-बिल भेजना (SMS, व्हाट्सऐप, Email)",
      "स्मार्ट ई-बिल (लोगो, सोशल, AI के साथ)",
      "क्रेडिट मैनेजमेंट (उधार कंट्रोल)",
      "मार्केटिंग और कैंपेन टूल्स",
    ],
    cta: "Get Started",
    href: "/book-demo",
    popular: false,
    badge: null,
  },
  {
    name: "Advance",
    nameHI: "एडवांस",
    tagLine: "Focus on retention & insights",
    price: "₹7,500",
    originalPrice: "₹29,999",
    periodLabel: "per year + 18% GST",
    highlightLine: "Everything in Standard, plus:",
    messagesLabel: "500 FREE MESSAGES INCLUDED",
    features: [
      "Customer Behaviour Analysis",
      "Customer Loyalty & Rewards",
      "Cashback & Smart Coupons",
      "Advanced Growth Insights",
    ],
    featuresHI: [
      "ग्राहक व्यवहार की जानकारी",
      "ग्राहक लॉयल्टी और रिवॉर्ड्स",
      "कैशबैक और स्मार्ट कूपन",
      "एडवांस ग्रोथ इनसाइट्स",
    ],
    cta: "Get Started",
    href: "/book-demo",
    popular: false,
    badge: null,
  },
  {
    name: "Premium",
    nameHI: "प्रीमियम",
    tagLine: "Maximize Brand Impact",
    price: "₹9,500",
    originalPrice: "₹49,999",
    periodLabel: "per year + 18% GST",
    highlightLine: "Everything in Advance, plus:",
    messagesLabel: "500 FREE MESSAGES INCLUDED",
    features: [
      "Your own customer shopping app",
      "Direct access to your customers",
      "No third‑party dependency",
      "Higher repeat sales & engagement",
    ],
    featuresHI: [
      "आपकी अपनी शॉपिंग ऐप",
      "ग्राहकों से सीधा जुड़ाव",
      "थर्ड-पार्टी पर निर्भरता नहीं",
      "ज़्यादा रिपीट सेल और जुड़ाव",
    ],
    cta: "Get Started",
    href: "/book-demo",
    popular: true,
    badge: "Recommended",
  },
];

type PlanFlag = "yes" | "no";

const comparisonFeatures = [
  {
    name: "Smart Billing",
    nameHI: "स्मार्ट बिलिंग",
    description:
      "Create and manage POS, Quick and Image bills with e-bill sharing via WhatsApp or SMS",
    descriptionHI: "POS, Quick और Image बिल बनाएँ और व्हाट्सऐप या SMS के ज़रिये ई-बिल शेयर करें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Widget Plugin for POS",
    nameHI: "POS के लिए विजेट प्लगइन",
    description:
      "Integrate Lume widget in existing POS to capture and send digital bills seamlessly",
    descriptionHI: "मौजूदा POS में Lume विजेट इंटीग्रेट करें और डिजिटल बिल कैप्चर और भेजें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Smart e-Bill Customization",
    nameHI: "स्मार्ट ई-बिल कस्टमाइज़ेशन",
    description:
      "Add Google review, social links, WhatsApp buttons, logos and referral programs to e-bills",
    descriptionHI: "ई-बिल में गूगल रिव्यू, सोशल लिंक, व्हाट्सऐप बटन, लोगो और रेफरल प्रोग्राम जोड़ें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "e-Bill Listing & Tracking",
    nameHI: "ई-बिल लिस्टिंग और ट्रैकिंग",
    description: "View all e-bills with date, store and amount filters",
    descriptionHI: "तारीख, स्टोर और रकम के फिल्टर के साथ सभी ई-बिल देखें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Dynamic Dashboard",
    nameHI: "डायनामिक डैशबोर्ड",
    description:
      "Real-time daily, weekly, monthly, quarterly and yearly sales insights",
    descriptionHI: "रियल-टाइम दैनिक, साप्ताहिक, मासिक, त्रैमासिक और वार्षिक सेल्स इनसाइट्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Automated Campaign Builder",
    nameHI: "ऑटोमेटेड कैंपेन बिल्डर",
    description: "Birthday, anniversary and seasonal offer campaigns",
    descriptionHI: "जन्मदिन, वर्षगाँठ और मौसमी ऑफर कैंपेन",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Social Media Campaigns",
    nameHI: "सोशल मीडिया कैंपेन",
    description: "Facebook and Instagram campaign integration",
    descriptionHI: "फेसबुक और इंस्टाग्राम कैंपेन इंटीग्रेशन",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Promotional Templates",
    nameHI: "प्रमोशनल टेम्प्लेट्स",
    description: "Predefined templates for offers, products and branding",
    descriptionHI: "ऑफर, प्रोडक्ट्स और ब्रांडिंग के लिए पहले से तैयार टेम्प्लेट्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Customer Feedback System",
    nameHI: "ग्राहक फीडबैक सिस्टम",
    description: "Collect reviews, ratings and feedback via bills and WhatsApp",
    descriptionHI: "बिल और व्हाट्सऐप के ज़रिये रिव्यू, रेटिंग और फीडबैक इकट्ठा करें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Master Sales Reports",
    nameHI: "मास्टर सेल्स रिपोर्ट्स",
    description: "Sales, customer and store-level reports with drill-down",
    descriptionHI: "सेल्स, कस्टमर और स्टोर-लेवल रिपोर्ट्स ड्रिल-डाउन के साथ",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Business Insights Dashboard",
    nameHI: "बिज़नेस इनसाइट्स डैशबोर्ड",
    description: "AI powered insights on trends, visits and growth",
    descriptionHI: "ट्रेंड्स, विज़िट्स और ग्रोथ पर AI-पावर्ड इनसाइट्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "SMS & Campaign Analytics & Reports",
    nameHI: "SMS और कैंपेन एनालिटिक्स और रिपोर्ट्स",
    description: "Message usage, campaign performance and ROI tracking",
    descriptionHI: "मैसेज यूज़ेज, कैंपेन परफॉर्मेंस और ROI ट्रैकिंग",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Multi-Store POS Management",
    nameHI: "मल्टी-स्टोर POS मैनेजमेंट",
    description: "Manage multiple stores and POS devices centrally",
    descriptionHI: "कई स्टोर्स और POS डिवाइस को केंद्रीय रूप से मैनेज करें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Product & SKU Management",
    nameHI: "प्रोडक्ट और SKU मैनेजमेंट",
    description: "Manual and CSV product upload with POS sync",
    descriptionHI: "POS सिंक के साथ मैन्युअल और CSV प्रोडक्ट अपलोड",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Franchise Management",
    nameHI: "फ्रैंचाइज़ मैनेजमेंट",
    description: "Franchise level access control, tracking and reports",
    descriptionHI: "फ्रैंचाइज़ लेवल एक्सेस कंट्रोल, ट्रैकिंग और रिपोर्ट्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "User Role Management",
    nameHI: "यूज़र रोल मैनेजमेंट",
    description: "Roles for managers, cashiers and admins",
    descriptionHI: "मैनेजर्स, कैशियर्स और एडमिन्स के लिए रोल्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Historical Data Upload",
    nameHI: "हिस्टोरिकल डेटा अपलोड",
    description: "Import past customer and sales data",
    descriptionHI: "पिछले कस्टमर और सेल्स डेटा इम्पोर्ट करें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Credit and Advance Management",
    nameHI: "क्रेडिट और एडवांस मैनेजमेंट",
    description: "Customer credit and advance management system",
    descriptionHI: "कस्टमर क्रेडिट और एडवांस मैनेजमेंट सिस्टम",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Promo Slips and Banners",
    nameHI: "प्रोमो स्लिप्स और बैनर्स",
    description: "Promote products and offers via images, videos and text",
    descriptionHI: "इमेज, वीडियो और टेक्स्ट के ज़रिये प्रोडक्ट्स और ऑफर प्रमोट करें",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Quick Store Setup",
    nameHI: "क्विक स्टोर सेटअप",
    description: "Dynamic QR code generation for UPI transactions",
    descriptionHI: "UPI ट्रांजैक्शन के लिए डायनामिक QR कोड जेनरेशन",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Quick & Verified Store Setup",
    nameHI: "क्विक और वेरिफाइड स्टोर सेटअप",
    description: "Self registration, KYC and multi outlet onboarding",
    descriptionHI: "सेल्फ रजिस्ट्रेशन, KYC और मल्टी आउटलेट ऑनबोर्डिंग",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Integrated POS & Data Management",
    nameHI: "इंटीग्रेटेड POS और डेटा मैनेजमेंट",
    description: "POS integration, device linking, bulk upload and recovery",
    descriptionHI: "POS इंटीग्रेशन, डिवाइस लिंकिंग, बल्क अपलोड और रिकवरी",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Custom Access & Branding",
    nameHI: "कस्टम एक्सेस और ब्रांडिंग",
    description: "Store logos, themes and digital agreement approvals",
    descriptionHI: "स्टोर लोगो, थीम्स और डिजिटल एग्रीमेंट अप्रूवल्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "In-App & WhatsApp Alerts",
    nameHI: "इन-ऐप और व्हाट्सऐप अलर्ट्स",
    description:
      "Real-time alerts for transactions, campaigns and performance",
    descriptionHI: "ट्रांजैक्शन, कैंपेन और परफॉर्मेंस के लिए रियल-टाइम अलर्ट्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "SMS Packages & Tracking",
    nameHI: "SMS पैकेज और ट्रैकिंग",
    description: "SMS bundles, recharge, usage and analytics",
    descriptionHI: "SMS बंडल, रिचार्ज, यूज़ेज और एनालिटिक्स",
    standard: "yes",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Advanced Campaign Builder (6W Logic)",
    nameHI: "एडवांस कैंपेन बिल्डर (6W लॉजिक)",
    description: "Who, What, When, Where, Why, How campaign logic",
    descriptionHI: "कौन, क्या, कब, कहाँ, क्यों, कैसे कैंपेन लॉजिक",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Personalized Notifications & Promo Slips",
    nameHI: "पर्सनलाइज़्ड नोटिफिकेशन और प्रोमो स्लिप्स",
    description: "Campaigns based on purchase history",
    descriptionHI: "खरीदारी के इतिहास पर आधारित कैंपेन",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Cross-Retailer Campaigns",
    nameHI: "क्रॉस-रिटेलर कैंपेन",
    description: "Multi store shopping carnival promotions",
    descriptionHI: "मल्टी स्टोर शॉपिंग कार्निवल प्रमोशन",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Rewards Redemption at POS",
    nameHI: "POS पर रिवॉर्ड रिडेम्प्शन",
    description: "Instant reward redemption at checkout",
    descriptionHI: "चेकआउट पर तुरंत रिवॉर्ड रिडेम्प्शन",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Brand-Sponsored Campaigns",
    nameHI: "ब्रांड-स्पॉन्सर्ड कैंपेन",
    description:
      "FMCG or brand funded rewards, coupons, cashback points",
    descriptionHI: "FMCG या ब्रांड फंडेड रिवॉर्ड्स, कूपन, कैशबैक पॉइंट्स",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Reward Campaigns",
    nameHI: "रिवॉर्ड कैंपेन",
    description:
      "Advanced coupon, cashback, referral, upsell and cross-sell campaigns",
    descriptionHI: "एडवांस कूपन, कैशबैक, रेफरल, अपसेल और क्रॉस-सेल कैंपेन",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Rewards on Bill",
    nameHI: "बिल पर रिवॉर्ड्स",
    description: "Rewards by brand, HSN category or SKU",
    descriptionHI: "ब्रांड, HSN कैटेगरी या SKU के अनुसार रिवॉर्ड्स",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Auto Reward Reminders and Expiry",
    nameHI: "ऑटो रिवॉर्ड रिमाइंडर्स और एक्सपायरी",
    description: "System managed reward expiry reminders",
    descriptionHI: "सिस्टम मैनेज्ड रिवॉर्ड एक्सपायरी रिमाइंडर्स",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Reward for Non-Transactional Events",
    nameHI: "नॉन-ट्रांजैक्शनल इवेंट्स के लिए रिवॉर्ड",
    description: "Rewards for referrals, reviews, registration and follows",
    descriptionHI: "रेफरल, रिव्यू, रजिस्ट्रेशन और फॉलो के लिए रिवॉर्ड्स",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Loyalty & Referral Program",
    nameHI: "लॉयल्टी और रेफरल प्रोग्राम",
    description: "Loyalty points and referral tracking system",
    descriptionHI: "लॉयल्टी पॉइंट्स और रेफरल ट्रैकिंग सिस्टम",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "Wallet & Transaction History",
    nameHI: "वॉलेट और ट्रांजैक्शन हिस्ट्री",
    description: "Wallet topups, spends and auto reconciliation",
    descriptionHI: "वॉलेट टॉपअप, खर्च और ऑटो रिकॉन्सिलिएशन",
    standard: "no",
    advance: "yes",
    premium: "yes",
  },
  {
    name: "E-Commerce Storefront",
    nameHI: "ई-कॉमर्स स्टोरफ्रंट",
    description: "Online store for retailers to sell digitally",
    descriptionHI: "रिटेलर्स के लिए डिजिटली बेचने के लिए ऑनलाइन स्टोर",
    standard: "no",
    advance: "no",
    premium: "yes",
  },
  {
    name: "E-Commerce Shopping App",
    nameHI: "ई-कॉमर्स शॉपिंग ऐप",
    description: "Customer app for shopping discovery and delivery",
    descriptionHI: "शॉपिंग डिस्कवरी और डिलीवरी के लिए कस्टमर ऐप",
    standard: "no",
    advance: "no",
    premium: "yes",
  },
  {
    name: "Nearby Store Discovery",
    nameHI: "नज़दीकी स्टोर डिस्कवरी",
    description: "Discover nearby retailers on Lume network",
    descriptionHI: "Lume नेटवर्क पर नज़दीकी रिटेलर्स खोजें",
    standard: "no",
    advance: "no",
    premium: "yes",
  },
  {
    name: "Instant Order Placement",
    nameHI: "इंस्टेंट ऑर्डर प्लेसमेंट",
    description: "Buy directly from nearby stores",
    descriptionHI: "नज़दीकी स्टोर्स से सीधे खरीदें",
    standard: "no",
    advance: "no",
    premium: "yes",
  },
  {
    name: "Order Tracking",
    nameHI: "ऑर्डर ट्रैकिंग",
    description: "Live order acceptance and delivery updates",
    descriptionHI: "लाइव ऑर्डर एक्सेप्टेंस और डिलीवरी अपडेट्स",
    standard: "no",
    advance: "no",
    premium: "yes",
  },
  {
    name: "Digital Wallet Integration",
    nameHI: "डिजिटल वॉलेट इंटीग्रेशन",
    description: "Pay, earn and redeem points or cashback",
    descriptionHI: "पे करें, कमाएँ और पॉइंट्स या कैशबैक रिडीम करें",
    standard: "no",
    advance: "no",
    premium: "yes",
  },
];

const faqs = [
  {
    question: "What plans does Lume offer?",
    questionHI: "Lume कौन से प्लान ऑफर करता है?",
    answer:
      "Lume offers flexible paid plans designed for different types of retailers — from single stores to multi-store businesses. Each plan is based on store size, feature usage, messaging (WhatsApp / SMS), and analytics & growth tools. You can choose a plan that fits your current business and upgrade anytime as you grow.",
    answerHI:
      "Lume अलग-अलग तरह के रिटेलर्स के लिए लचीले पेड प्लान ऑफर करता है — सिंगल स्टोर से लेकर मल्टी-स्टोर बिज़नेस तक। हर प्लान स्टोर साइज़, फीचर यूज़ेज, मैसेजिंग (व्हाट्सऐप / SMS), और एनालिटिक्स और ग्रोथ टूल्स पर आधारित है। आप अपने मौजूदा बिज़नेस के लिए सही प्लान चुन सकते हैं और जैसे-जैसे बिज़नेस बढ़े, कभी भी अपग्रेड कर सकते हैं।",
  },
  {
    question: "What features are included in all plans?",
    questionHI: "सभी प्लान में कौन से फीचर्स शामिल हैं?",
    answer:
      "All Lume plans include core retail features such as Quick Bill, POS Bill, Image Bill & MPOS, digital bills via WhatsApp / SMS / Email, customer data capture, e-bill history & listing, and basic store & billing management. Advanced growth tools like loyalty, rewards, and deep analytics vary by plan.",
    answerHI:
      "सभी Lume प्लान में कोर रिटेल फीचर्स शामिल हैं जैसे Quick Bill, POS Bill, Image Bill और MPOS, व्हाट्सऐप / SMS / Email के ज़रिये डिजिटल बिल, कस्टमर डेटा कैप्चर, ई-बिल हिस्ट्री और लिस्टिंग, और बेसिक स्टोर और बिलिंग मैनेजमेंट। एडवांस ग्रोथ टूल्स जैसे लॉयल्टी, रिवॉर्ड्स, और डीप एनालिटिक्स प्लान के अनुसार अलग-अलग होते हैं।",
  },
  {
    question: "Are WhatsApp and SMS charges included in the plan price?",
    questionHI: "क्या व्हाट्सऐप और SMS चार्ज प्लान की कीमत में शामिल हैं?",
    answer:
      "No. WhatsApp and SMS are usage-based and charged separately, as per actual usage. This helps you pay only for what you use, control communication costs, and view charges transparently inside the Lume dashboard. There are no hidden communication charges.",
    answerHI:
      "नहीं। व्हाट्सऐप और SMS यूज़ेज-आधारित हैं और अलग से चार्ज किए जाते हैं, जैसा कि आपका असली यूज़ेज हो। इससे आप सिर्फ उतना ही पे करते हैं जितना यूज़ करते हैं, कम्युनिकेशन कॉस्ट कंट्रोल कर सकते हैं, और Lume डैशबोर्ड में चार्ज्स को पारदर्शी तरीके से देख सकते हैं। कोई छुपे हुए कम्युनिकेशन चार्ज नहीं हैं।",
  },
  {
    question: "Can I change or upgrade my plan later?",
    questionHI: "क्या मैं बाद में अपना प्लान बदल या अपग्रेड कर सकता हूँ?",
    answer:
      "Yes. You can upgrade your plan anytime from the Lume dashboard. As your business grows you can add more features, enable advanced campaigns, and manage multiple stores and POS systems under one account. Lume is built to scale with your business.",
    answerHI:
      "हाँ। आप Lume डैशबोर्ड से कभी भी अपना प्लान अपग्रेड कर सकते हैं। जैसे-जैसे आपका बिज़नेस बढ़ेगा, आप और फीचर्स जोड़ सकते हैं, एडवांस कैंपेन चालू कर सकते हैं, और एक अकाउंट के तहत कई स्टोर्स और POS सिस्टम मैनेज कर सकते हैं। Lume आपके बिज़नेस के साथ बढ़ने के लिए बना है।",
  },
  {
    question: "Do I need an existing POS system to use Lume?",
    questionHI: "क्या Lume इस्तेमाल करने के लिए मुझे मौजूदा POS सिस्टम चाहिए?",
    answer:
      "No. You can start with Lume’s own web or mobile POS for quick billing, or integrate Lume with your existing POS using Lume plugins. All billing data from different sources is unified in one place so your reports and analytics stay consistent.",
    answerHI:
      "नहीं। आप Lume के अपने वेब या मोबाइल POS से क्विक बिलिंग के लिए शुरू कर सकते हैं, या Lume प्लगइन का इस्तेमाल करके Lume को अपने मौजूदा POS के साथ इंटीग्रेट कर सकते हैं। अलग-अलग स्रोतों से सभी बिलिंग डेटा एक जगह यूनिफाइड होता है ताकि आपकी रिपोर्ट्स और एनालिटिक्स कंसिस्टेंट रहें।",
  },
  {
    question: "Is onboarding and support included?",
    questionHI: "क्या ऑनबोर्डिंग और सपोर्ट शामिल है?",
    answer:
      "Yes. Every plan includes assisted onboarding, WhatsApp and phone support, and help with setup, billing, and integrations. Whether you are a single-store kirana or a multi-store chain, our team is available to guide you at every step.",
    answerHI:
      "हाँ। हर प्लान में असिस्टेड ऑनबोर्डिंग, व्हाट्सऐप और फोन सपोर्ट, और सेटअप, बिलिंग, और इंटीग्रेशन में मदद शामिल है। चाहे आप सिंगल-स्टोर किराना हों या मल्टी-स्टोर चेन, हमारी टीम हर कदम पर आपकी मदद के लिए उपलब्ध है।",
  },
];

export default function Pricing() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-amber-50/30">
      <Header />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#146fb5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 relative z-10">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {language === "HI" ? (
              <>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1b181f" }}>
                  अपने बिज़नेस के लिए सही प्लान चुनें
                </h1>
                <p
                  className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "#4f4f4f" }}
                >
                  पहले सिंपल से शुरू करें, जैसे‑जैसे बिज़नेस बढ़े वैसे‑वैसे प्लान अपग्रेड करें। कोई छुपा
                  चार्ज नहीं, कोई सरप्राइज़ नहीं।
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1b181f" }}>
                  Choose the right plan for your business
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#4f4f4f" }}>
                  Start free, upgrade when you're ready. No hidden fees, no surprises.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 relative z-10">
        <div className="container-wide max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#eaf2f8] via-[#d4e6f3]/50 to-white border-2 border-[#146fb5] scale-105 shadow-2xl shadow-[#146fb5]/20"
                    : "bg-white border border-border shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-0.5 right-4 px-3 py-1.5 rounded-b-lg text-xs font-bold uppercase tracking-wide ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#146fb5] to-[#1a7fc7] text-white shadow-lg"
                        : "bg-gradient-to-r from-[#146fb5] to-[#1a7fc7] text-white"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold" style={{ color: "#1b181f" }}>
                    {language === "HI" && plan.nameHI ? plan.nameHI : plan.name}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "#4f4f4f" }}>
                    {language === "HI"
                      ? plan.name === "Standard"
                        ? "छोटे रिटेल बिज़नेस के लिए सही शुरुआत"
                        : plan.name === "Advance"
                        ? "उन स्टोर्स के लिए जो रिपीट कस्टमर और इनसाइट्स पर फोकस करते हैं"
                        : "ब्रांड इम्पैक्ट और कस्टमर ऐप के लिए पूरा सॉल्यूशन"
                      : plan.tagLine}
                  </p>
                </div>

                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold" style={{ color: plan.popular ? '#146fb5' : '#1b181f' }}>
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm line-through" style={{ color: '#9ca3af' }}>{plan.originalPrice}</span>
                    )}
                  </div>
                  {plan.periodLabel && (
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI" ? "प्रति वर्ष + 18% GST" : plan.periodLabel}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#146fb5]/10"
                    style={{ color: "#146fb5" }}
                  >
                    {language === "HI"
                      ? "500 मुफ्त मैसेज शामिल"
                      : plan.messagesLabel}
                  </span>
                </div>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  className={`w-full mb-6 ${plan.popular ? "shadow-lg" : ""}`}
                  asChild
                >
                  <Link to={plan.href}>
                    {language === "HI" ? "शुरू करें" : plan.cta}
                  </Link>
                </Button>

                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{ color: "#4f4f4f" }}
                  >
                    {language === "HI"
                      ? plan.name === "Standard"
                        ? "इस प्लान में शामिल:"
                        : plan.name === "Advance"
                        ? "स्टैण्डर्ड में जो है, उसके साथ:"
                        : "एडवांस में जो है, उसके साथ:"
                      : plan.highlightLine}
                  </p>
                  <ul className="space-y-2.5">
                    {(language === "HI" && plan.featuresHI ? plan.featuresHI : plan.features).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span style={{ color: "#1b181f" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className={`rounded-lg overflow-hidden ${plan.popular ? "ring-1 ring-[#146fb5]/30" : ""}`}>
                    <div className="py-2 px-3 text-xs font-bold flex items-center gap-2 text-white" style={{ background: 'linear-gradient(135deg, #146fb5 0%, #1a7fc7 100%)' }}>
                      <Sparkles className="w-3 h-3" />
                      {language === "HI" ? "ल्यूम द्वारा संचालित" : "POWERED BY LUME"}
                    </div>
                    <div className="bg-slate-50 py-2 px-3">
                      <p className="text-xs" style={{ color: "#4f4f4f" }}>
                        {language === "HI"
                          ? "शुरू करने के लिए डेमो बुक करें"
                          : "Book a demo to get started"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl p-8 border border-border text-center"
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: '#1b181f' }}>
              {language === "HI" ? "एंटरप्राइज़" : "Enterprise"}
            </h3>
            <p className="mb-4" style={{ color: '#4f4f4f' }}>
              {language === "HI"
                ? "मल्टी-स्टोर चेन के लिए जिन्हें कस्टम ज़रूरतें हों। API एक्सेस, समर्पित सपोर्ट और कस्टम इंटीग्रेशन पाएँ।"
                : "For multi-store chains with custom needs. Get API access, dedicated support, and custom integrations."}
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/company/contact">
                {language === "HI" ? "सेल्स से संपर्क करें" : "Contact Sales"}
              </Link>
            </Button>
          </motion.div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 relative z-10">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#1b181f" }}>
              {language === "HI" ? "एक नज़र में प्लान की तुलना" : "Compare plans at a glance"}
            </h2>
            <p style={{ color: "#4f4f4f" }}>
              {language === "HI"
                ? "स्टैण्डर्ड बनाम एडवांस बनाम प्रीमियम"
                : "Standard vs Advance vs Premium"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full comparison-table">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-slate-100">
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1b181f' }}>
                      {language === "HI" ? "फीचर्स" : "Features"}
                    </th>
                    <th className="text-center py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>
                      <div className="flex flex-col items-center">
                        <span>{language === "HI" ? "स्टैंडर्ड" : "Standard"}</span>
                        <span className="text-sm font-normal" style={{ color: '#4f4f4f' }}>₹2,500 / year</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>
                      <div className="flex flex-col items-center">
                        <span>{language === "HI" ? "एडवांस" : "Advance"}</span>
                        <span className="text-sm font-normal" style={{ color: '#4f4f4f' }}>₹7,500 / year</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold bg-[#146fb5]/10" style={{ color: '#1b181f' }}>
                      <div className="flex flex-col items-center">
                        <span className="flex items-center gap-1">
                          {language === "HI" ? "प्रीमियम" : "Premium"}
                          <Star className="w-4 h-4" style={{ color: '#146fb5', fill: '#146fb5' }} />
                        </span>
                        <span className="text-sm font-normal" style={{ color: '#4f4f4f' }}>₹9,500 / year</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Detailed feature rows */}
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50/50"} align-top`}
                    >
                      <td className="py-4 px-6 text-sm" style={{ color: '#1b181f' }}>
                        <div className="font-medium mb-1">
                          {language === "HI" && feature.nameHI ? feature.nameHI : feature.name}
                        </div>
                        <div className="text-xs" style={{ color: '#4f4f4f' }}>
                          {language === "HI" && feature.descriptionHI ? feature.descriptionHI : feature.description}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.standard === "yes" ? (
                          <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} />
                        ) : (
                          <span className="text-base" style={{ color: '#9ca3af' }}>—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.advance === "yes" ? (
                          <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} />
                        ) : (
                          <span className="text-base" style={{ color: '#9ca3af' }}>—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center bg-[#146fb5]/5">
                        {feature.premium === "yes" ? (
                          <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: '#16a34a' }} />
                        ) : (
                          <span className="text-base" style={{ color: '#9ca3af' }}>—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 relative z-10">
        <div className="container-tight">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#146fb5' }} />
            <h2 className="text-3xl font-bold" style={{ color: '#1b181f' }}>
              {language === "HI" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline" style={{ color: '#1b181f' }}>
                  {language === "HI" && faq.questionHI ? faq.questionHI : faq.question}
                </AccordionTrigger>
                <AccordionContent style={{ color: '#4f4f4f' }}>
                  {language === "HI" && faq.answerHI ? faq.answerHI : faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative z-10">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              {language === "HI" ? "शुरू करने के लिए तैयार हैं?" : "Ready to Get Started?"}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {language === "HI" 
                ? "250+ रिटेलर्स जो अपने बिज़नेस के लिए ल्यूम पर भरोसा करते हैं, उनके साथ जुड़ें।"
                : "Join 250+ retailers who trust Lume for their business."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" asChild>
                <Link to="/book-demo">
                  {language === "HI" ? "डेमो बुक करें" : "Book a Demo"}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/company/contact">
                  {language === "HI" ? "सेल्स से संपर्क करें" : "Contact Sales"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
