import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Users, MessageSquare, Zap, CreditCard, BarChart3, ReceiptIndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const solutions = [
  {
    id: "digital-billing",
    icon: ReceiptIndianRupee,
    title: "Digital Billing",
    titleHI: "डिजिटल बिलिंग",
    tagline: "Create professional bills in seconds",
    taglineHI: "सेकंडों में पेशेवर बिल बनाएँ",
    problem: "Manual billing is slow, error-prone, and customers lose paper bills. No GST compliance means business risk.",
    problemHI: "मैन्युअल बिलिंग धीमी है, गलतियाँ होती हैं, और ग्राहक कागज़ी बिल खो देते हैं। GST compliance न होने से बिज़नेस में जोखिम रहता है।",
    solution: "Lume's digital billing creates GST-compliant bills instantly. Customers get digital copies via WhatsApp. All records saved automatically.",
    solutionHI: "Lume की डिजिटल बिलिंग तुरंत GST-compliant बिल बनाती है। ग्राहकों को WhatsApp से डिजिटल कॉपी मिलती है। सभी रिकॉर्ड अपने-आप सेव हो जाते हैं।",
    benefits: [
      "Bills in under 10 seconds",
      "GST-compliant invoices",
      "WhatsApp bill sharing",
      "Automatic record keeping",
      "Barcode scanning",
    ],
    benefitsHI: [
      "10 सेकंड में बिल तैयार",
      "GST-compliant चालान",
      "WhatsApp पर बिल शेयर करें",
      "स्वचालित रिकॉर्ड रखरखाव",
      "बारकोड स्कैनिंग",
    ],
    href: "/solutions/digital-billing",
  },
  {
    id: "customer-capture",
    icon: Users,
    title: "Customer Capture",
    titleHI: "ग्राहक डेटा कैप्चर",
    tagline: "Build your customer database automatically",
    taglineHI: "अपना ग्राहक डेटाबेस अपने-आप बनाएँ",
    problem: "Most retailers don't know who their customers are. No data means no way to bring them back.",
    problemHI: "ज़्यादातर रिटेलर्स को पता नहीं होता कि उनके ग्राहक कौन हैं। डेटा न होने से उन्हें वापस लाना मुश्किल होता है।",
    solution: "Every transaction captures customer details automatically. Build a database of your loyal customers without extra effort.",
    solutionHI: "हर ट्रांजैक्शन ग्राहक की जानकारी अपने-आप कैप्चर करता है। बिना किसी अतिरिक्त मेहनत के अपने वफादार ग्राहकों का डेटाबेस बनाएँ।",
    benefits: [
      "Auto phone number capture",
      "Purchase history tracking",
      "Customer preferences",
      "Segment your customers",
      "Export data anytime",
    ],
    benefitsHI: [
      "फ़ोन नंबर अपने-आप कैप्चर",
      "खरीदारी इतिहास ट्रैकिंग",
      "ग्राहक की पसंद",
      "ग्राहकों को सेगमेंट करें",
      "कभी भी डेटा एक्सपोर्ट करें",
    ],
    href: "/solutions/customer-capture",
  },
  {
    id: "feedback-engagement",
    icon: MessageSquare,
    title: "Feedback & Engagement",
    titleHI: "फीडबैक और जुड़ाव",
    tagline: "Listen to customers, keep them coming back",
    taglineHI: "ग्राहकों की सुनें, उन्हें वापस लाएँ",
    problem: "You never know what customers think until they stop coming. No way to collect or act on feedback.",
    problemHI: "जब तक ग्राहक आना बंद न करें, आपको पता नहीं चलता कि वे क्या सोचते हैं। फीडबैक लेने या उस पर कार्रवाई करने का कोई तरीका नहीं है।",
    solution: "Collect ratings after every purchase. Send personalized offers based on preferences. Build relationships that last.",
    solutionHI: "हर खरीदारी के बाद रेटिंग लें। पसंद के आधार पर व्यक्तिगत ऑफर भेजें। लंबे समय तक चलने वाले रिश्ते बनाएँ।",
    benefits: [
      "Post-purchase ratings",
      "Feedback collection",
      "Personalized offers",
      "Birthday/anniversary wishes",
      "Loyalty rewards",
    ],
    benefitsHI: [
      "खरीदारी के बाद रेटिंग",
      "फीडबैक संग्रह",
      "व्यक्तिगत ऑफर",
      "जन्मदिन/वर्षगाँठ की शुभकामनाएँ",
      "वफादारी इनाम",
    ],
    href: "/solutions/feedback-engagement",
  },
  {
    id: "real-time-engagement",
    icon: Zap,
    title: "Real-time Engagement",
    titleHI: "रियल-टाइम जुड़ाव",
    tagline: "Reach customers at the right moment",
    taglineHI: "सही समय पर ग्राहकों तक पहुँचें",
    problem: "Customers forget about your store. No way to remind them or share offers when it matters.",
    problemHI: "ग्राहक आपकी दुकान भूल जाते हैं। उन्हें याद दिलाने या ज़रूरी समय पर ऑफर शेयर करने का कोई तरीका नहीं है।",
    solution: "Send instant WhatsApp messages for new arrivals, discounts, and reminders. Bring customers back when you need them.",
    solutionHI: "नए आगमन, छूट और रिमाइंडर के लिए तुरंत WhatsApp मैसेज भेजें। जब ज़रूरत हो, ग्राहकों को वापस लाएँ।",
    benefits: [
      "WhatsApp campaigns",
      "New arrival alerts",
      "Flash sale notifications",
      "Restock reminders",
      "Automated messages",
    ],
    benefitsHI: [
      "WhatsApp अभियान",
      "नए आगमन की सूचनाएँ",
      "फ्लैश सेल नोटिफिकेशन",
      "रिस्टॉक रिमाइंडर",
      "स्वचालित मैसेज",
    ],
    href: "/solutions/real-time-engagement",
  },
  {
    id: "credit-management",
    icon: CreditCard,
    title: "Credit (Udhaar) Management",
    titleHI: "क्रेडिट (उधार) प्रबंधन",
    tagline: "Track credit, reduce bad debts",
    taglineHI: "उधार ट्रैक करें, बुरे कर्ज़ कम करें",
    problem: "Udhaar leads to losses. Paper records get lost. Customers forget to pay. Awkward collection conversations.",
    problemHI: "उधार से नुकसान होता है। कागज़ी रिकॉर्ड खो जाते हैं। ग्राहक भुगतान भूल जाते हैं। पैसे माँगने में असहज बातचीत होती है।",
    solution: "Digital credit tracking with automatic reminders. Customers see their balance. Professional, hassle-free collection.",
    solutionHI: "स्वचालित रिमाइंडर के साथ डिजिटल क्रेडिट ट्रैकिंग। ग्राहक अपना बैलेंस देख सकते हैं। पेशेवर, परेशानी-मुक्त वसूली।",
    benefits: [
      "Digital ledger for each customer",
      "Automatic payment reminders",
      "Customer self-check balance",
      "Credit limit settings",
      "Payment history",
    ],
    benefitsHI: [
      "हर ग्राहक के लिए डिजिटल लेज़र",
      "स्वचालित भुगतान रिमाइंडर",
      "ग्राहक अपना बैलेंस खुद चेक करें",
      "क्रेडिट लिमिट सेटिंग्स",
      "भुगतान इतिहास",
    ],
    href: "/solutions/credit-management",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reports",
    titleHI: "विश्लेषण और रिपोर्ट्स",
    tagline: "Make smarter decisions with data",
    taglineHI: "डेटा के साथ स्मार्ट निर्णय लें",
    problem: "You don't know your real profits. No visibility into what's selling, what's not, or where money is going.",
    problemHI: "आपको अपने असली मुनाफ़े का पता नहीं होता। क्या बिक रहा है, क्या नहीं, या पैसा कहाँ जा रहा है — इसकी कोई दृश्यता नहीं है।",
    solution: "Real-time dashboard shows sales, profits, trends, and insights. Make data-driven decisions every day.",
    solutionHI: "रियल-टाइम डैशबोर्ड सेल्स, मुनाफ़ा, ट्रेंड और इनसाइट्स दिखाता है। हर दिन डेटा-आधारित निर्णय लें।",
    benefits: [
      "Real-time sales dashboard",
      "Profit margin tracking",
      "Best-selling products",
      "Customer insights",
      "Daily/weekly/monthly reports",
    ],
    benefitsHI: [
      "रियल-टाइम सेल्स डैशबोर्ड",
      "मुनाफ़ा मार्जिन ट्रैकिंग",
      "सबसे ज़्यादा बिकने वाले उत्पाद",
      "ग्राहक इनसाइट्स",
      "दैनिक/साप्ताहिक/मासिक रिपोर्ट्स",
    ],
    href: "/solutions/analytics",
  },
];

export default function Solutions() {
  const { language } = useLanguage();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Map route ids from header/search to internal section ids
    let targetId = id;
    switch (id) {
      case "smart-billing":
        targetId = "digital-billing";
        break;
      case "customer-analytics":
        targetId = "analytics";
        break;
      case "pos-integration":
      case "loyalty-coupons":
      case "campaign-management":
      case "reports-dashboard":
      case "hyperlocal-commerce":
        // For now scroll to top of list for these high-level concepts
        targetId = "digital-billing";
        break;
      default:
        break;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1b181f' }}>
              {language === "HI" ? (
                <>
                  हर <span style={{ color: '#146fb5' }}>रिटेल चुनौती</span> के लिए समाधान
                </>
              ) : (
                <>
                  Solutions for Every <span style={{ color: '#146fb5' }}>Retail Challenge</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
              {language === "HI" ? (
                <>
                  व्यावहारिक टूल जो भारतीय रिटेलर्स की रोज़ाना की समस्याओं को हल करते हैं।
                  कोई जटिलता नहीं, बस परिणाम।
                </>
              ) : (
                <>
                  Practical tools that solve real problems Indian retailers face every day.
                  No complexity, just results.
                </>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="section-spacing bg-white">
        <div className="container-wide space-y-16">
          {solutions.map((solution, i) => (
          <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#eaf2f8' }}>
                    <solution.icon className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: '#1b181f' }}>
                    {language === "HI" ? solution.titleHI : solution.title}
                  </h2>
                </div>
                <p className="text-lg font-medium mb-4" style={{ color: '#146fb5' }}>
                  {language === "HI" ? solution.taglineHI : solution.tagline}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="rounded-lg p-4" style={{ background: '#fee2e2' }}>
                    <p className="text-sm font-medium mb-1" style={{ color: '#991b1b' }}>
                      {language === "HI" ? "समस्या:" : "The Problem:"}
                    </p>
                    <p style={{ color: '#7f1d1d' }}>
                      {language === "HI" ? solution.problemHI : solution.problem}
                    </p>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: '#eaf2f8' }}>
                    <p className="text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                      {language === "HI" ? "समाधान:" : "The Solution:"}
                    </p>
                    <p style={{ color: '#1b181f' }}>
                      {language === "HI" ? solution.solutionHI : solution.solution}
                    </p>
                  </div>
                </div>

                <Button variant="cta" asChild>
                  <Link to={solution.href}>
                    {language === "HI" ? "और जानें" : "Learn More"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              <div className={`rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ background: '#eaf2f8' }}>
                <h3 className="font-semibold mb-4" style={{ color: '#1b181f' }}>
                  {language === "HI" ? "मुख्य लाभ" : "Key Benefits"}
                </h3>
                <ul className="space-y-3">
                  {(language === "HI" ? solution.benefitsHI : solution.benefits).map((benefit, idx) => (
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

      {/* CTA */}
      <section className="section-spacing subtle-gradient">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1b181f' }}>
            {language === "HI" ? "एक ऐप में सभी समाधान" : "All Solutions in One App"}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
            {language === "HI" ? (
              <>
                ल्यूम रिटेल ऐप के साथ ये सभी समाधान और बहुत कुछ पाएँ। आज ही अपना मुफ़्त ट्रायल शुरू करें।
              </>
            ) : (
              <>
                Get all these solutions and more with the Lume Retail App. Start your free trial today.
              </>
            )}
          </p>
          <Button size="xl" variant="cta" asChild>
            <Link to="/book-demo">
              {language === "HI" ? "डेमो बुक करें" : "Book a Demo"}
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
