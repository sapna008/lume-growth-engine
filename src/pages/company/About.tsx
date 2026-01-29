import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import gyanPhoto from "@/assets/about-us/gyan.jpg";
import seemaPhoto from "@/assets/about-us/seema.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-14 bg-gradient-to-b from-[#e9f4ff] via-white to-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {language === "HI" ? (
              <>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#146fb5]/80 mb-3">
                  हमारे बारे में
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl leading-snug font-display font-bold mb-3 text-[#1b181f]">
                  भारत के रिटेलर्स को{" "}
                  <span className="text-[#146fb5]">स्पष्टता, नियंत्रण और भरोसा</span> देने वाला
                  टेक्नोलॉजी पार्टनर
                </h1>
                <p
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                  style={{ color: "#3b3b3f" }}
                >
                  Apeiros AI Pvt. Ltd. एक रिटेल टेक्नोलॉजी कंपनी है, जो इस एक साफ़ विश्वास पर बनी है कि
                  स्थानीय रिटेलर्स को ऐसा टेक्नोलॉजी प्लैटफॉर्म मिलना चाहिए जो सच में समझे कि रिटेल
                  ज़मीन पर कैसे चलता है।
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[#146fb5]/80 mb-3">
                  About Us
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-[#1b181f]">
                  Empowering India’s Retailers with{" "}
                  <span className="text-[#146fb5]">Clarity, Control, and Confidence</span>
                </h1>
                <p
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                  style={{ color: "#3b3b3f" }}
                >
                  Apeiros AI Pvt. Ltd. is a retail technology company built with one clear belief:
                  local retailers deserve technology that actually understands how retail works.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="section-spacing bg-white">
        <div className="container-wide grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-[#1b181f]">
              {language === "HI" ? "हम क्यों मौजूद हैं" : "Why We Exist"}
            </h2>
            {language === "HI" ? (
              <>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  आज जब क्विक कॉमर्स और बड़े प्लेटफ़ॉर्म बहुत तेज़ी से बढ़ रहे हैं, तब भारत के स्थानीय
                  और बढ़ते रिटेलर्स अक्सर मैन्युअल बिलिंग, अलग‑अलग सिस्टम और अपने ही बिज़नेस की
                  सीमित विज़िबिलिटी के साथ फँसे रहते हैं।
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  भारत का रिटेल इकोसिस्टम बहुत विशाल, विविध और इंसानी रिश्तों से भरा हुआ है — लेकिन
                  ज़्यादातर टेक्नोलॉजी सॉल्यूशंस ऐसे लोगों ने बनाए हैं जो असल स्टोर वर्कफ़्लो को
                  करीब से नहीं समझते।
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  रिटेलर्स को और ज़्यादा सॉफ़्टवेयर की नहीं,
                  <span className="font-semibold"> साफ़ तस्वीर और क्लैरिटी की ज़रूरत है।</span>
                </p>
              </>
            ) : (
              <>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  In a world where quick commerce and large platforms are moving fast, India’s local and
                  growing retailers are often left with manual billing, disconnected systems, and zero
                  visibility into their own business.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  India’s retail ecosystem is massive, diverse, and deeply human — yet most technology
                  solutions are built without understanding real store workflows.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Retailers don’t need more software. <span className="font-semibold">They need clarity.</span>
                </p>
              </>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#146fb5]/15 bg-[#f3f7ff] p-5">
                <Target className="w-8 h-8 text-[#146fb5] mb-3" />
                <h3 className="font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "असल दुकानों के लिए बना" : "Built for real stores"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "HI"
                    ? "ऐसे सिस्टम जो बिलिंग, स्टाफ और काउंटर पर होने वाले असली काम से मैच करें।"
                    : "Systems that match how billing, staff, and counters actually work on the ground."}
                </p>
              </div>
              <div className="rounded-2xl border border-[#146fb5]/15 bg-[#f5fbff] p-5">
                <Lightbulb className="w-8 h-8 text-[#146fb5] mb-3" />
                <h3 className="font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "कम्प्लेक्सिटी से ज़्यादा क्लैरिटी" : "Clarity over complexity"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "HI"
                    ? "सिंपल और भरोसेमंद टूल्स जो रिटेलर्स को कस्टमर, सेल्स और ग्रोथ को साफ़‑साफ़ समझने में मदद करें।"
                    : "Simple, reliable tools that help retailers understand customers, sales, and growth."}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-dashed border-[#146fb5]/30 bg-[#f8fbff] p-6 flex flex-col gap-3"
          >
            <p className="text-sm font-semibold tracking-wide text-[#146fb5] uppercase">
              {language === "HI" ? "हम किस पर फोकस करते हैं" : "What we focus on"}
            </p>
            <ul className="space-y-2 text-sm md:text-base text-[#1b181f]">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  {language === "HI"
                    ? "मैन्युअल बिलिंग और अलग‑अलग, न जुड़े हुए काउंटर्स से आगे बढ़ना।"
                    : "Move beyond manual billing and disconnected counters."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  {language === "HI"
                    ? "गेसवर्क की जगह कस्टमर और सेल्स को डेटा के ज़रिए समझना।"
                    : "Understand customers and sales instead of guessing."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  {language === "HI"
                    ? "सिर्फ़ रिपोर्ट के लिए नहीं, रोज़मर्रा के फ़ैसलों के लिए डेटा का इस्तेमाल करना।"
                    : "Use data to make everyday decisions — not just reports."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  {language === "HI"
                    ? "स्टोर में और जटिलता बढ़ाए बिना बिज़नेस को ग्रो करना।"
                    : "Grow without adding more complexity to the store."}
                </span>
              </li>
            </ul>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              {language === "HI"
                ? "हमारा फोकस सिंपल है: ऐसी टेक्नोलॉजी जो ज़मीन पर काम करे, सिर्फ़ प्रेज़ेंटेशन में नहीं।"
                : "Our focus is simple: technology that works on the ground, not just on slides."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we build - Lume */}
      <section className="section-spacing subtle-gradient">
        <div className="container-wide grid lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#146fb5] mb-2">
              {language === "HI" ? "हम क्या बनाते हैं" : "What We Build"}
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#1b181f]">
              {language === "HI" ? "ल्यूम — रिटेल इंटेलिजेंस प्लेटफ़ॉर्म" : "Lume — Retail Intelligence Platform"}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              {language === "HI"
                ? "ल्यूम हमारा फ़्लैगशिप प्रोडक्ट है — एक यूनिफ़ाइड रिटेल इंटेलिजेंस प्लेटफ़ॉर्म जो बिलिंग, POS सिस्टम, कस्टमर डेटा, लॉयल्टी, कैम्पेन और एनालिटिक्स को एक ही सिंपल सिस्टम में जोड़ देता है।"
                : "Lume is our flagship product — a unified retail intelligence platform that connects billing, POS systems, customer data, loyalty, campaigns, and analytics into one simple system."}
            </p>
            <p className="text-sm font-semibold text-[#146fb5] mb-3">
              {language === "HI" ? "ल्यूम इन सबको एक साथ जोड़ता है:" : "Lume brings together:"}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-2xl bg-white/80 border border-[#146fb5]/15 p-4">
                <h3 className="text-sm font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "बिलिंग और POS" : "Billing & POS"}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "HI"
                    ? "टैक्स और नॉन‑टैक्स बिलिंग, मौजूदा POS, वेब बिलिंग और मोबाइल‑फ्रेंडली POS।"
                    : "Tax & non-tax billing, existing POS, web billing, and mobile-friendly POS."}
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-[#146fb5]/15 p-4">
                <h3 className="text-sm font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "कस्टमर और लॉयल्टी" : "Customer & Loyalty"}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "HI"
                    ? "ऑटोमैटिक कस्टमर कैप्चर, लॉयल्टी और रिवॉर्ड्स, रिपीट ट्रैकिंग और सेगमेंट।"
                    : "Automatic customer capture, loyalty & rewards, repeat tracking and segments."}
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-[#146fb5]/15 p-4">
                <h3 className="text-sm font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "कैम्पेन और एंगेजमेंट" : "Campaigns & Engagement"}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "HI"
                    ? "व्हाट्सऐप, SMS और मल्टी‑चैनल कैम्पेन जो रियल परचेज डेटा पर चलते हैं।"
                    : "WhatsApp, SMS and multi-channel campaigns that run on real purchase data."}
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-[#146fb5]/15 p-4">
                <h3 className="text-sm font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "एनालिटिक्स और रिपोर्ट्स" : "Analytics & Reports"}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "HI"
                    ? "सेल्स, प्रोडक्ट, कस्टमर, टाइमिंग और मार्जिन — सब कुछ एक ही डैशबोर्ड में।"
                    : "Sales, products, customers, timing and margins — all in one dashboard."}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              {language === "HI" ? (
                <>
                  हर बिल — चाहे वह किसी भी सोर्स से बना हो — अपने‑आप पढ़ा, प्रोसेस और एक्शन लेने लायक
                  इनसाइट्स में बदल जाता है। रिटेलर्स सिर्फ़ बिल नहीं बनाते,
                  <span className="font-semibold text-[#146fb5]">
                    {" "}
                    ल्यूम के ज़रिए वे बिलिंग से ही अपना पूरा बिज़नेस समझने लगते हैं।
                  </span>
                </>
              ) : (
                <>
                  Every bill created — from any source — is automatically read, processed and converted
                  into actionable insights. Retailers don’t just generate bills with Lume —{" "}
                  <span className="font-semibold text-[#146fb5]">
                    they understand their business through billing.
                  </span>
                </>
              )}
            </p>
          </motion.div>

          {/* Lume highlights card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/90 border border-[#146fb5]/15 shadow-sm p-6 space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#1b181f] mb-1">
              {language === "HI" ? "Lume को क्या अलग बनाता है" : "What makes Lume different"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  <span className="font-semibold text-[#1b181f]">
                    {language === "HI" ? "स्मार्ट डिजिटल बिलिंग:" : "Smart Digital Billing:"}
                  </span>{" "}
                  {language === "HI"
                    ? "बिल सिर्फ़ प्रिंट या PDF नहीं, बल्कि प्रमोशन, फ़ीडबैक, Google रेटिंग, रेफ़रल और लॉयल्टी के लिए एंगेजमेंट टूल बन जाते हैं।"
                    : "Bills become engagement tools with promotions, feedback, Google ratings, referrals, and loyalty."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  <span className="font-semibold text-[#1b181f]">
                    {language === "HI" ? "कस्टमर इंटेलिजेंस:" : "Customer Intelligence:"}
                  </span>{" "}
                  {language === "HI"
                    ? "ऑटोमैटिक कस्टमर कैप्चर, परचेज हिस्ट्री, रिपीट विज़िट ट्रैकिंग और सेगमेंटेशन।"
                    : "Automatic customer capture, purchase history, repeat tracking and segmentation."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  <span className="font-semibold text-[#1b181f]">
                    {language === "HI" ? "वाकई काम करने वाले कैम्पेन:" : "Campaigns that actually work:"}
                  </span>{" "}
                  {language === "HI"
                    ? "व्हाट्सऐप, SMS और मल्टी‑चैनल कैम्पेन जो रियल परचेज डेटा पर चलकर सही कस्टमर तक सही मैसेज पहुँचाते हैं।"
                    : "WhatsApp, SMS and multi-channel campaigns driven by real purchase data."}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                <span>
                  <span className="font-semibold text-[#1b181f]">
                    {language === "HI" ? "इंडियन रिटेल की असल ज़मीन के लिए:" : "Built for Indian retail reality:"}
                  </span>{" "}
                  {language === "HI"
                    ? "किराना से लेकर फ़ैशन, इलेक्ट्रॉनिक्स, फ़ार्मेसी और मल्टी‑स्टोर चेन तक — सबके लिए काम करता है।"
                    : "Works for kirana stores, fashion, electronics, pharmacies and multi-store chains."}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our belief */}
      <section className="section-spacing bg-white">
        <div className="container-wide grid lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#1b181f]">
              {language === "HI" ? "हमारा विश्वास" : "Our Belief"}
            </h2>
            {language === "HI" ? (
              <>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  स्थानीय रिटेलर्स भारत की इकॉनमी की रीढ़ हैं। उन्हें जटिल डैशबोर्ड या भारी‑भरकम जार्गन
                  वाले सॉफ़्टवेयर की ज़रूरत नहीं है, बल्कि ऐसे सिंपल और भरोसेमंद सिस्टम की ज़रूरत है जो
                  उन्हें अपने बिज़नेस पर कंट्रोल दें।
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  हमारा मिशन है कि रिटेलर्स बिना सिम्प्लिसिटी खोए डिजिटल हों — और ऐसे टेक्नोलॉजी के साथ
                  ग्रो करें जो असल रिटेल की रियलिटी को रिस्पेक्ट करे।
                </p>
              </>
            ) : (
              <>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Local retailers are the backbone of India’s economy. They don’t need complicated
                  dashboards or jargon-heavy software. They need simple, reliable systems that give
                  them control over their business.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our mission is to help retailers go digital without losing simplicity — and grow using
                  technology that respects how retail actually works.
                </p>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#146fb5]/15 bg-[#f4f8ff] p-6 flex gap-4 items-start"
          >
            <Heart className="w-8 h-8 text-[#146fb5] mt-1" />
            <div>
              <p className="text-sm md:text-base text-[#1b181f] font-semibold mb-2">
                {language === "HI"
                  ? "हम डेमो के लिए फीचर्स नहीं बनाते।"
                  : "We don’t build features for demos."}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {language === "HI"
                  ? "हम ऐसे सिस्टम बनाते हैं जिन पर रिटेलर्स हर दिन भरोसा कर सकें — भीड़ वाले बिलिंग काउंटर पर, त्योहारों के समय, छोटे कस्बों से लेकर बड़े शहरों तक।"
                  : "We build systems retailers can rely on every single day — at busy billing counters, during festivals, in small towns and big cities alike."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-spacing subtle-gradient">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#1b181f]">
              {language === "HI" ? "नेतृत्व" : "Leadership"}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              {language === "HI"
                ? "Apeiros AI ऐसे बिल्डर्स द्वारा लीड किया जाता है जिन्होंने सालों तक भारतीय रिटेल के अंदर काम किया है — स्टोर फ़्लोर और POS टर्मिनल से लेकर पेमेंट रेल्स और लॉयल्टी प्लेटफ़ॉर्म तक।"
                : "Apeiros AI is led by builders who have spent decades inside Indian retail — from store floors and POS terminals to payment rails and loyalty platforms."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gyan card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#146fb5]/15 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="bg-[#f4f7ff] px-6 pt-6 pb-4 flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[#146fb5]/20 bg-white flex-shrink-0">
                  <img
                    src={gyanPhoto}
                    alt="Gyan – Founder & Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-[#1b181f]">Gyan</h3>
                  <p className="text-sm font-medium text-[#146fb5]">Founder & Director</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    23+ years across Retail, POS, FinTech, Payments, Loyalty, Banking & Digital Platforms.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                {language === "HI" ? (
                  <>
                    <p>
                      Gyan के पास रिटेल, POS, फ़िनटेक, पेमेंट्स, लॉयल्टी, बैंकिंग और डिजिटल प्लेटफ़ॉर्म्स
                      में 23+ साल का डीप, हैंड्स‑ऑन अनुभव है।
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>मैथमेटिक्स और कंप्यूटर एप्लिकेशन में मास्टर्स।</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Future Group में FuturePay को 2.5 करोड़+ यूज़र्स तक स्केल किया।</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>10 लाख+ लाइनों का प्रोडक्शन POS और रिटेल सिस्टम कोड खुद लिखा और शिप किया।</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>हज़ारों रिटेल स्टोर्स में ज़ीरो‑डाउनटाइम माइग्रेशन्स लीड किए।</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>
                          Fiserv (US), Specsavers (UK), JK Technosoft, Future Group और कई ग्लोबल व इंडियन
                          एंटरप्राइज़ के साथ काम किया।
                        </span>
                      </li>
                    </ul>
                    <p>
                      दो दशकों से ज़्यादा समय भारतीय रिटेल रियलिटी के भीतर काम करने के बाद Gyan स्टोर
                      ऑपरेशंस, मार्जिन, लॉयल्टी मार्केटिंग, स्टाफ बिहेवियर और कस्टमर साइकोलॉजी को गहराई
                      से समझते हैं। उन्होंने Apeiros AI इस मिशन के साथ शुरू किया कि भारत के छोटे और मिड‑साइज़
                      रिटेलर्स भी बड़े, ऑर्गेनाइज़्ड प्लेयर्स जितनी पावर और इंटेलिजेंस के साथ ऑपरेट कर सकें।
                      दिल से बिल्डर — आज भी खुद कोड लिखते हैं, डिसिप्लिन के साथ एग्ज़िक्यूट करते हैं और
                      लॉन्ग‑टर्म रिज़ल्ट्स पर फोकस रखते हैं।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Gyan brings over 23+ years of deep, hands-on experience across retail, POS,
                      fintech, payments, loyalty, banking and digital platforms.
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Masters in Mathematics and Computer Applications.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Built and scaled FuturePay at Future Group to 25+ million users.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Personally wrote and shipped 10+ lakh lines of production POS code.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Led zero‑downtime migrations across thousands of retail stores.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>
                          Worked with Fiserv (US), Specsavers (UK), JK Technosoft, Future Group and other
                          enterprises.
                        </span>
                      </li>
                    </ul>
                    <p>
                      With over two decades embedded in Indian retail reality, Gyan understands store
                      operations, margins, loyalty marketing, staff behaviour and customer psychology at
                      ground level. He founded Apeiros AI with one clear mission: enable India’s small
                      and mid retailers to operate with the power and intelligence of large, organised
                      players. A builder at heart — he still codes, executes with discipline and focuses
                      on long-term outcomes.
                    </p>
                  </>
                )}
              </div>
            </motion.article>

            {/* Seema card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-[#146fb5]/15 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="bg-[#f4f7ff] px-6 pt-6 pb-4 flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[#146fb5]/20 bg-white flex-shrink-0">
                  <img
                    src={seemaPhoto}
                    alt="Seema – Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-[#1b181f]">Seema</h3>
                  <p className="text-sm font-medium text-[#146fb5]">Director</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    15+ years across QA, retail systems, POS, loyalty, FinTech & digital applications.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                {language === "HI" ? (
                  <>
                    <p>
                      Seema के पास QA, रिटेल सिस्टम्स, POS प्लेटफ़ॉर्म, लॉयल्टी प्रोग्राम्स, फ़िनटेक और
                      डिजिटल एप्लिकेशन्स में 15+ साल का अनुभव है।
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>इन्फ़ॉर्मेशन टेक्नोलॉजी में पोस्ट‑ग्रेजुएट।</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Fiserv, NIIT, M‑Intellect, Future Group और अन्य संगठनों के साथ काम किया।</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>क्वालिटी इंजीनियरिंग और एक्ज़ीक्यूशन रिलायबिलिटी में गहरी विशेषज्ञता।</span>
                      </li>
                    </ul>
                    <p>
                      Apeiros AI में Seema एक्ज़ीक्यूशन एंकर की भूमिका निभाती हैं — यह सुनिश्चित करते हुए कि
                      Lume स्थिर, स्केलेबल और प्रोडक्शन‑रेडी रहे। उनकी भूमिका में क्वालिटी इंजीनियरिंग,
                      सेल्स प्लानिंग सपोर्ट, कस्टमर ऑपरेशंस, गवर्नन्स, ऑडिट्स और डिलीवरी डिसिप्लिन शामिल हैं।
                    </p>
                    <p>
                      काम से बाहर, वे डांस, डिजिटल कंटेंट क्रिएशन और पेंटिंग में सक्रिय हैं — और यही
                      क्रिएटिविटी व यूज़र एम्पैथी प्रोडक्ट एक्ज़ीक्यूशन में भी लेकर आती हैं।
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Seema brings 15+ years of experience across QA, retail systems, POS platforms,
                      loyalty programs, fintech and digital applications.
                    </p>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Post‑graduate in Information Technology.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Worked with Fiserv, NIIT, M‑Intellect, Future Group and others.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#146fb5]" />
                        <span>Deep expertise in quality engineering and execution reliability.</span>
                      </li>
                    </ul>
                    <p>
                      At Apeiros AI, Seema acts as the execution anchor — ensuring that Lume is stable,
                      scalable and production‑ready. Her role spans quality engineering, sales planning
                      support, customer operations, governance, audits and delivery discipline.
                    </p>
                    <p>
                      Beyond work, she is actively engaged in dance, digital content creation and
                      painting — bringing creativity and strong user empathy into product execution.
                    </p>
                  </>
                )}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-spacing bg-white">
        <div className="container-wide grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#1b181f]">
              {language === "HI" ? "हम कैसे काम करते हैं" : "How We Work"}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              {language === "HI"
                ? "हम रिटेलर्स, उनके काउंटर और उनकी टीम के बहुत करीब रहते हैं। प्रोडक्ट डिसीजन स्लाइड्स से नहीं, बल्कि स्टोर में रोज़ जो होता है, वहीं से आते हैं।"
                : "We stay close to retailers, their counters and their staff. Product decisions come from what actually happens in stores — not from slides or conference rooms."}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#146fb5]/15 bg-[#f5fbff] p-5">
                <Users className="w-7 h-7 text-[#146fb5] mb-2" />
                <p className="text-sm font-semibold text-[#1b181f] mb-1">
                  {language === "HI" ? "प्रोडक्ट‑फर्स्ट, रिटेलर‑फर्स्ट" : "Product‑first, retailer‑first"}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "HI"
                    ? "रिटेल की असल रियलिटी, किसी भी थ्योरी से पहले। हर फीचर को एक असली काउंटर प्रॉब्लम सॉल्व करनी चाहिए।"
                    : "Retail reality before assumptions. Every feature must solve a real counter problem."}
                </p>
              </div>
              <div className="rounded-2xl border border-[#146fb5]/15 bg-[#f3f7ff] p-5">
                <p className="text-sm font-semibold text-[#1b181f] mb-1">
                  {language === "HI"
                    ? "क्वालिटी और रिलायबिलिटी, शॉर्टकट से ऊपर"
                    : "Quality and reliability over shortcuts"}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {language === "HI"
                    ? "हम सिर्फ़ लॉन्च नहीं, बल्कि स्टेबिलिटी, अपटाइम और लॉन्ग‑टर्म स्केलेबिलिटी के लिए ऑप्टिमाइज़ करते हैं।"
                    : "We optimise for stability, uptime and long‑term scalability, not just launches."}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#0b1530] text-white p-6 space-y-3"
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7fb6ff]">
              {language === "HI" ? "हमारे सिद्धांत" : "Principles"}
            </p>
            <ul className="space-y-2 text-sm md:text-base">
              {language === "HI" ? (
                <>
                  <li>• प्रोडक्ट‑फर्स्ट सोच।</li>
                  <li>• किसी भी असम्पशन से पहले रिटेल रियलिटी।</li>
                  <li>• शॉर्टकट से ज़्यादा क्वालिटी और रिलायबिलिटी।</li>
                  <li>• क्विक विन से ज़्यादा लॉन्ग‑टर्म स्केलेबिलिटी।</li>
                </>
              ) : (
                <>
                  <li>• Product‑first thinking.</li>
                  <li>• Retail reality before assumptions.</li>
                  <li>• Quality and reliability over shortcuts.</li>
                  <li>• Long‑term scalability over quick wins.</li>
                </>
              )}
            </ul>
            <p className="text-sm md:text-base text-white/80">
              {language === "HI"
                ? "हम डेमो के लिए फीचर्स नहीं बनाते। हम ऐसे सिस्टम बनाते हैं जिन पर रिटेलर्स हर दिन भरोसा कर सकें।"
                : "We don’t build features for demos. We build systems retailers can rely on every single day."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Looking ahead & Join the journey */}
      <section className="section-spacing bg-gradient-to-b from-[#0b1530] via-[#101c3a] to-[#0b1530] text-white">
        <div className="container-wide grid lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-display font-bold mb-3"
              style={{ color: "#ffffff" }}
            >
              {language === "HI" ? "आगे की राह" : "Looking Ahead"}
            </h2>
            {language === "HI" ? (
              <>
                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                  हम लगातार Lume की क्षमताएँ बढ़ा रहे हैं और हाइपरलोकल कॉमर्स सॉल्यूशंस बना रहे हैं जो
                  रिटेलर्स को बदलती हुई रिटेल दुनिया में और मज़बूती से कम्पीट करने में मदद करेंगे।
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  यह सफ़र अभी शुरू ही हुआ है — और हम इसे एक‑एक रिटेलर के साथ मिलकर बना रहे हैं।
                </p>
              </>
            ) : (
              <>
                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                  We continue to expand Lume’s capabilities and are building hyperlocal commerce
                  solutions that will help retailers compete more effectively in the evolving retail
                  landscape.
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Our journey has just begun — and we’re building it one retailer at a time.
                </p>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center lg:text-left"
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#ffffff" }}
            >
              {language === "HI" ? "हमारे साथ यह सफ़र जोड़ें" : "Join the Journey"}
            </h3>
            <p className="text-sm md:text-base text-white/80 mb-5">
              {language === "HI"
                ? "चाहे आप ग्रो करना चाहने वाले रिटेलर हों, रिटेल सॉल्यूशन बनाने वाले पार्टनर, लॉन्ग‑टर्म वैल्यू समझने वाले इन्वेस्टर, या असली प्रॉब्लम्स पर काम करना चाहने वाले बिल्डर — Apeiros AI आपके लिए खुला है।"
                : "Whether you are a retailer looking to grow, a partner building retail solutions, an investor who understands long‑term value, or a builder who wants to work on real problems — Apeiros AI welcomes you."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" variant="hero" asChild>
                <Link to="/book-demo">
                  {language === "HI" ? "डेमो बुक करें" : "Book a Demo"}
                  <ArrowRight className="w-5 h-5 ml-1" />
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
