import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import successStoryIcon from "@/assets/success-story.png";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Clock, 
  Award, 
  BarChart3,
  MessageSquare,
  Gift,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Target,
  Lightbulb,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const caseStudies = [
  {
    id: 1,
    storeName: "Golden Steel",
    storeNameHI: "Golden Steel",
    location: "Thane",
    businessType: "Electronics & Home Appliances Store",
    businessTypeHI: "इलेक्ट्रॉनिक्स और होम अप्लायंसेज़ स्टोर",
    icon: Store,
    challenge: [
      "Billing was slow and manual",
      "No customer data captured",
      "No repeat purchase tracking"
    ],
    challengeHI: [
      "बिलिंग धीमी थी और सब कुछ मैन्युअल था",
      "ग्राहकों का कोई डेटा सेव नहीं हो रहा था",
      "दोबारा खरीदने वाले ग्राहकों की ट्रैकिंग नहीं थी"
    ],
    solution: [
      "Bills sent via WhatsApp and SMS",
      "Customer details captured automatically",
      "Simple discount campaigns sent weekly"
    ],
    solutionHI: [
      "WhatsApp और SMS के ज़रिये डिजिटल बिल भेजना शुरू किया",
      "ग्राहक की जानकारी अपने आप कैप्चर होने लगी",
      "हर हफ्ते आसान डिस्काउंट कैंपेन भेजे गए"
    ],
    results: [
      "40% increase in repeat customers",
      "Daily billing time reduced by 1.5 hours",
      "Customers began returning within 7–10 days"
    ],
    resultsHI: [
      "दोबारा आने वाले ग्राहकों में 40% की बढ़ोतरी",
      "रोज़ के बिल बनाने में 1.5 घंटे की बचत",
      "ग्राहक 7–10 दिनों के अंदर वापिस आने लगे"
    ],
    takeaway: "Digital bills and campaigns turned casual shoppers into regular customers.",
    takeawayHI: "डिजिटल बिल और कैंपेन ने सामान्य खरीदारों को रेगुलर कस्टमर में बदल दिया।"
  },
  {
    id: 2,
    storeName: "Surabhi",
    storeNameHI: "Surabhi",
    location: "Thane",
    businessType: "Fashion & Apparel",
    businessTypeHI: "फ़ैशन और कपड़ों की दुकान",
    icon: Store,
    challenge: [
      "Inventory and returns hard to manage",
      "No visibility on popular sizes/colors",
      "Marketing was random and ineffective"
    ],
    challengeHI: [
      "इन्वेंटरी और रिटर्न मैनेज करना मुश्किल था",
      "कौन‑सा साइज़/कलर ज़्यादा बिक रहा है, यह दिख नहीं रहा था",
      "मार्केटिंग बिना प्लान की और कम असरदार थी"
    ],
    solution: [
      "Used analytics dashboard to track sales trends",
      "Launched tailored SMS/WhatsApp offers for slow-moving stock",
      "Loyalty points introduced for repeat buyers"
    ],
    solutionHI: [
      "सेल्स ट्रेंड ट्रैक करने के लिए एनालिटिक्स डैशबोर्ड का इस्तेमाल किया",
      "धीरे चलने वाले स्टॉक के लिए SMS/WhatsApp पर टार्गेटेड ऑफ़र चलाए",
      "दोबारा खरीदने वाले ग्राहकों के लिए लॉयल्टी पॉइंट्स शुरू किए"
    ],
    results: [
      "₹50,000 saved monthly in inventory costs",
      "30% reduction in returns",
      "Push marketing led to 20% more repeat purchases"
    ],
    resultsHI: [
      "इन्वेंटरी लागत में हर महीने लगभग ₹50,000 की बचत",
      "रिटर्न में 30% की कमी",
      "पुश मार्केटिंग से 20% ज़्यादा रिपीट परचेस"
    ],
    takeaway: "Insights + targeted campaigns = smart clearance and loyalty.",
    takeawayHI: "सही इनसाइट्स + टार्गेटेड कैंपेन = स्मार्ट क्लियरेंस और मज़बूत लॉयल्टी।"
  },
  {
    id: 3,
    storeName: "Geonet IT Mall - HP World",
    storeNameHI: "Geonet IT Mall - HP World",
    location: "Mumbai, Pune",
    businessType: "Electronics Store",
    businessTypeHI: "इलेक्ट्रॉनिक्स स्टोर",
    icon: Store,
    challenge: [
      "Billing errors during peak hours",
      "Warranty and service reminders handled manually",
      "No single system to manage high-value products"
    ],
    challengeHI: [
      "पीक आवर्स में बिलिंग में अक्सर गलती हो जाती थी",
      "वारंटी और सर्विस रिमाइंडर हाथ से मैनेज होते थे",
      "हाई‑वैल्यू प्रोडक्ट्स के लिए एक सेंट्रल सिस्टम नहीं था"
    ],
    solution: [
      "Prompt warranty tracking within bills",
      "Auto SMS reminders for service due",
      "Fast billing templates reduced errors"
    ],
    solutionHI: [
      "बिल के अंदर ही वारंटी ट्रैकिंग जोड़ी गई",
      "सर्विस ड्यू होने पर ऑटो SMS रिमाइंडर भेजे गए",
      "तेज़ बिलिंग टेम्पलेट्स की वजह से गलतियाँ कम हुईं"
    ],
    results: [
      "2 hours daily saved on billing",
      "Customer satisfaction improved",
      "Digital reminders boosted aftermarket sales"
    ],
    resultsHI: [
      "रोज़ाना बिलिंग में लगभग 2 घंटे की बचत",
      "कस्टमर सैटिस्फैक्शन में साफ़ सुधार",
      "डिजिटल रिमाइंडर्स से आफ्टरमार्केट सेल्स बढ़ीं"
    ],
    takeaway: "Operational automation gives time back to business owners.",
    takeawayHI: "ऑपरेशन्स के ऑटोमेशन ने बिज़नेस ओनर्स को दोबारा समय वापस दे दिया।"
  }
];

const testimonials = [
  {
    quote: "Lume changed how we see customers — now we know who comes back and why.",
    quoteHI: "ल्यूम ने ग्राहकों को देखने का हमारा नज़रिया बदल दिया — अब हमें पता है कौन दोबारा आता है और क्यों।",
    author: "Golden Steel",
    location: "Thane"
  },
  {
    quote: "We sell more because we send personalized offers.",
    quoteHI: "हमारी सेल इसलिए बढ़ी है क्योंकि हम पर्सनलाइज़्ड ऑफ़र भेजते हैं।",
    author: "Surabhi",
    location: "Style Corner, Pune"
  },
  {
    quote: "Billing is faster and cleaner — customers love it.",
    quoteHI: "बिलिंग अब तेज़ और क्लीन है — ग्राहकों को ये बहुत पसंद है।",
    author: "Geonet IT Mall",
    location: "Mumbai, Pune"
  }
];

export default function CaseStudies() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-[#eaf2f8] to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4">
                <img 
                  src={successStoryIcon} 
                  alt="Success Story" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ color: '#1b181f' }}>
                  {language === "HI" ? "कस्टमर सक्सेस स्टोरीज़" : "Customer Success Stories"}
                </h1>
              </div>
              <p className="text-xl sm:text-2xl mb-6 sm:mb-8" style={{ color: '#4f4f4f' }}>
                {language === "HI"
                  ? "देखिए ल्यूम कैसे रिटेल बिज़नेस को बदल रहा है"
                  : "How Lume is Transforming Retail Businesses"}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#4f4f4f' }}>
                {language === "HI"
                  ? "भारत भर के रिटेलर्स ल्यूम का इस्तेमाल करके अपनी दुकानों को मॉडर्न बना रहे हैं, सेल बढ़ा रहे हैं, ग्राहकों को दोबारा ला रहे हैं और स्मार्ट कैंपेन चला रहे हैं — वो भी बिना अपना मौजूदा सिस्टम बदले। नीचे छोटे, मंझोले और बड़े रिटेलर्स की असली कहानियाँ हैं जिन्होंने ल्यूम के साथ ग्रोथ अनलॉक की।"
                  : "Retailers across India are using Lume to modernize their stores, increase sales, retain customers, and run smart campaigns — all without changing their existing systems. Below are real stories of how small, medium, and large retailers have unlocked growth with Lume."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <div className="space-y-8 sm:space-y-10">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#eaf2f8] to-white border-2 border-[#146fb5]/20">
                        <study.icon className="w-8 h-8" style={{ color: '#146fb5' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1b181f' }}>
                            {language === "HI" && (study as any).storeNameHI ? (study as any).storeNameHI : study.storeName}
                          </h2>
                          <MapPin className="w-5 h-5" style={{ color: '#4f4f4f' }} />
                          <span className="text-lg" style={{ color: '#4f4f4f' }}>{study.location}</span>
                        </div>
                        <p className="text-base sm:text-lg font-medium" style={{ color: '#146fb5' }}>
                          {language === "HI" && (study as any).businessTypeHI ? (study as any).businessTypeHI : study.businessType}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5" style={{ color: '#146fb5' }} />
                          <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                            {language === "HI" ? "चुनौती" : "Challenge"}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {(language === "HI" && (study as any).challengeHI ? (study as any).challengeHI : study.challenge).map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Lightbulb className="w-5 h-5" style={{ color: '#146fb5' }} />
                          <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                            {language === "HI" ? "ल्यूम के साथ समाधान" : "Solution with Lume"}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {(language === "HI" && (study as any).solutionHI ? (study as any).solutionHI : study.solution).map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#146fb5' }} />
                              <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="w-5 h-5" style={{ color: '#146fb5' }} />
                          <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                            {language === "HI" ? "नतीजे" : "Results"}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {(language === "HI" && (study as any).resultsHI ? (study as any).resultsHI : study.results).map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Zap className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#146fb5' }} />
                              <span className="text-sm sm:text-base leading-relaxed font-medium" style={{ color: '#1b181f' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-start gap-3 bg-gradient-to-r from-[#eaf2f8] to-white rounded-lg p-4">
                        <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <p className="text-base sm:text-lg font-medium" style={{ color: '#1b181f' }}>
                          <strong>
                            {language === "HI" ? "मुख्य सीख:" : "Key takeaway:"}
                          </strong>{" "}
                          {language === "HI" && (study as any).takeawayHI ? (study as any).takeawayHI : study.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Stories Matter */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: '#1b181f' }}>
                {language === "HI" ? "ये कहानियाँ क्यों महत्वपूर्ण हैं" : "Why These Stories Matter"}
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4f4f4f' }}>
                {language === "HI"
                  ? "हर दुकानदार की समस्या अलग थी, लेकिन पैटर्न एक जैसा रहा:"
                  : "Every retailer had a different problem, but the pattern is the same:"}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {(language === "HI"
                  ? [
                      "मैन्युअल बिलिंग या डेटा की कमी ने उन्हें पीछे रोके रखा",
                      "डिजिटल बिल + ऑटो एंगेजमेंट से ग्राहक दोबारा आने लगे",
                      "एनालिटिक्स ने काम की इनसाइट्स दीं",
                      "कैंपेन ने डेटा को रिपीट बिज़नेस में बदला"
                    ]
                  : [
                      "Manual billing or lack of data held them back",
                      "Digital bills + automated engagement increased retention",
                      "Analytics gave actionable insights",
                      "Campaigns turned data into repeat business"
                    ]
                ).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#eaf2f8] rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                    <span className="text-base leading-relaxed" style={{ color: '#1b181f' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-center" style={{ color: '#4f4f4f' }}>
                {language === "HI" ? (
                  <>
                    <strong style={{ color: '#1b181f' }}>ल्यूम का लक्ष्य हर रिटेल स्टोर को बदलना है</strong> — पारंपरिक दुकान से डेटा‑प्रेरित ग्रोथ बिज़नेस तक।
                  </>
                ) : (
                  <>
                    <strong style={{ color: '#1b181f' }}>Lume's goal is to transform every retail store</strong> — from traditional to data-enabled growth businesses.
                  </>
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Snapshot Comparison */}
        <section className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: '#1b181f' }}>
                {language === "HI" ? "स्नैपशॉट तुलना" : "Snapshot Comparison"}
              </h2>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>
                        {language === "HI" ? "स्टोर" : "Store"}
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>
                        {language === "HI" ? "मुख्य समस्या" : "Main Problem"}
                      </th>
                          <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>
                        {language === "HI" ? "ल्यूम का असर" : "Lume Impact"}
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>
                        {language === "HI" ? "मुख्य नतीजा" : "Key Result"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>Golden Steel</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>
                        {language === "HI" ? "ग्राहक डेटा नहीं था" : "No customer data"}
                      </td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>
                        {language === "HI" ? "WhatsApp बिल + कैंपेन" : "WhatsApp bills + campaigns"}
                      </td>
                      <td className="py-4 px-4 font-medium" style={{ color: '#146fb5' }}>
                        {language === "HI" ? "40% रिपीट ग्रोथ" : "40% repeat growth"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>Surabhi</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>
                        {language === "HI" ? "इन्वेंटरी से जुड़ी दिक्कतें" : "Inventory issues"}
                      </td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>
                        {language === "HI" ? "एनालिटिक्स + ऑफ़र" : "Analytics + offers"}
                      </td>
                      <td className="py-4 px-4 font-medium" style={{ color: '#146fb5' }}>
                        {language === "HI" ? "₹50k की लागत की बचत" : "₹50k costs saved"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>Geonet IT Mall</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>
                        {language === "HI" ? "वारंटी और बिलिंग में ग़लतियाँ" : "Warranty & errors"}
                      </td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>
                        {language === "HI" ? "ऑटो रिमाइंडर्स" : "Auto reminders"}
                      </td>
                      <td className="py-4 px-4 font-medium" style={{ color: '#146fb5' }}>
                        {language === "HI" ? "रोज़ 2 घंटे की बचत" : "2 hrs saved daily"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: '#1b181f' }}>
                {language === "HI" ? "रिटेलर टेस्टिमोनियल्स" : "Retailer Testimonials"}
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-[#eaf2f8] to-white rounded-xl p-6 border border-gray-100"
                  >
                    <MessageSquare className="w-8 h-8 mb-4" style={{ color: '#146fb5' }} />
                    <p className="text-base leading-relaxed mb-4 italic" style={{ color: '#4f4f4f' }}>
                      "
                      {language === "HI" && (testimonial as any).quoteHI ? (testimonial as any).quoteHI : testimonial.quote}
                      "
                    </p>
                    <p className="text-sm font-semibold" style={{ color: '#1b181f' }}>
                      — {testimonial.author}, {testimonial.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1b181f' }}>
                {language === "HI"
                  ? "क्या आप हमारी अगली सक्सेस स्टोरी बनने के लिए तैयार हैं?"
                  : "Ready to be our next success story?"}
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  className="bg-[#146fb5] text-white hover:bg-[#115a94] font-semibold px-8 py-6 text-lg rounded-lg"
                >
                  <Link to="/book-demo">
                    {language === "HI" ? "डेमो बुक करें" : "Book a Demo"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#146fb5] text-[#146fb5] hover:bg-[#eaf2f8] font-semibold px-8 py-6 text-lg rounded-lg"
                >
                  <Link to="/pricing">
                    {language === "HI" ? "प्राइसिंग प्लान देखें" : "See Pricing Plans"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Closing */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg leading-relaxed text-center" style={{ color: '#4f4f4f' }}>
                {language === "HI"
                  ? "ल्यूम की ये केस स्टडीज़ आपको ये समझने में मदद करती हैं कि रिटेलर्स स्मार्ट बिलिंग, कस्टमर इनसाइट्स, लॉयल्टी टूल्स और मल्टी‑चैनल कैंपेन के साथ वास्तव में कैसे ग्रो कर रहे हैं। अगर आपकी दुकान पर रिपीट कस्टमर कम आ रहे हैं या सेल्स परफॉर्मेंस साफ़ नज़र नहीं आ रही, तो ये सक्सेस पैटर्न आपके अगले कदम तय करने में मदद कर सकते हैं।"
                  : "Lume case studies help you explore real ways retailers are growing with smart billing, customer insights, loyalty tools, and multi-channel campaigns. If your store isn't seeing repeat customers or lacks visibility into sales performance, these success patterns can guide your next steps."}
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

