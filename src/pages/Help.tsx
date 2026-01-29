import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, BookOpen, Video, MessageCircle, Phone, Mail, ChevronDown, Play, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { 
    icon: BookOpen, 
    title: "Getting Started", 
    titleHI: "शुरुआत कैसे करें", 
    count: 8, 
    desc: "Setup and basics",
    descHI: "सेटअप और बेसिक जानकारी" 
  },
  { 
    icon: FileText, 
    title: "Billing", 
    titleHI: "बिलिंग", 
    count: 12, 
    desc: "Creating and managing bills",
    descHI: "बिल बनाना और संभालना" 
  },
  { 
    icon: HelpCircle, 
    title: "Loyalty & Campaigns", 
    titleHI: "लॉयल्टी और कैंपेन", 
    count: 6, 
    desc: "Customer engagement",
    descHI: "कस्टमर से जुड़ने के तरीके" 
  },
  { 
    icon: Video, 
    title: "Video Tutorials", 
    titleHI: "वीडियो ट्यूटोरियल", 
    count: 10, 
    desc: "Watch and learn",
    descHI: "वीडियो देखकर सीखें" 
  },
];

const popularArticles = [
  { 
    title: "How to create your first bill", 
    titleHI: "अपना पहला बिल कैसे बनाएं", 
    category: "Getting Started",
    categoryHI: "शुरुआत कैसे करें",
  },
  { 
    title: "Setting up GST in Lume", 
    titleHI: "ल्यूम में GST सेटअप कैसे करें", 
    category: "Billing",
    categoryHI: "बिलिंग",
  },
  { 
    title: "Creating loyalty programs", 
    titleHI: "लॉयल्टी प्रोग्राम कैसे बनाएँ", 
    category: "Loyalty",
    categoryHI: "लॉयल्टी",
  },
  { 
    title: "Connecting your POS system", 
    titleHI: "अपने POS सिस्टम को कैसे जोड़ें", 
    category: "Integration",
    categoryHI: "इंटिग्रेशन",
  },
  { 
    title: "Understanding analytics dashboard", 
    titleHI: "एनालिटिक्स डैशबोर्ड कैसे समझें", 
    category: "Reports",
    categoryHI: "रिपोर्ट्स",
  },
];

const faqs = [
  { 
    q: "How do I reset my password?", 
    qHI: "मैं अपना पासवर्ड कैसे रीसेट करूँ?", 
    a: "Go to Settings > Account > Change Password. You'll receive an OTP on your registered mobile.", 
    aHI: "Settings > Account > Change Password पर जाएँ। आपके रजिस्टर मोबाइल नंबर पर एक OTP आएगा।" 
  },
  { 
    q: "How to add a new staff member?", 
    qHI: "नया स्टाफ सदस्य कैसे जोड़ें?", 
    a: "Navigate to Settings > Team > Add User. Enter their details and assign a role.", 
    aHI: "Settings > Team > Add User पर जाएँ। उनकी जानकारी भरें और सही रोल चुनें।" 
  },
  { 
    q: "Can I use Lume offline?", 
    qHI: "क्या मैं ल्यूम को ऑफ़लाइन इस्तेमाल कर सकता हूँ?", 
    a: "Yes, Lume works offline. Bills sync automatically when you're back online.", 
    aHI: "हाँ, ल्यूम ऑफ़लाइन भी काम करता है। जब आप दोबारा ऑनलाइन होंगे तो सारे बिल अपने आप सिंक हो जाएँगे।" 
  },
  { 
    q: "How to export my data?", 
    qHI: "मैं अपना डेटा कैसे एक्सपोर्ट करूँ?", 
    a: "Go to Reports > Export. Choose the date range and format (Excel/CSV/PDF).", 
    aHI: "Reports > Export पर जाएँ। डेट रेंज और फॉर्मेट (Excel/CSV/PDF) चुनें।" 
  },
  { 
    q: "What's included in the free trial?", 
    qHI: "फ्री ट्रायल में क्या मिलता है?", 
    a: "Full access to all features of the Growth plan for 14 days.", 
    aHI: "आपको 14 दिन के लिए Growth प्लान के सभी फीचर्स का फुल एक्सेस मिलता है।" 
  },
];

export default function Help() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20 lg:pt-24 pb-12 hero-gradient text-white">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {language === "HI" ? "हम आपकी कैसे मदद कर सकते हैं?" : "How can we help?"}
            </h1>
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={language === "HI" ? "मदद के लिए यहाँ खोजें..." : "Search for help..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-foreground bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category, i) => {
              const isGettingStarted = category.title === "Getting Started";
              const isBilling = category.title === "Billing";
              const linkTo = isGettingStarted
                ? "/help/getting-started"
                : isBilling
                ? "/help/billing-guide"
                : null;
              const content = (
                <>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(20, 111, 181, 0.15)' }}>
                    <category.icon className="w-5 h-5" style={{ color: '#146fb5' }} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {language === "HI" && (category as any).titleHI ? (category as any).titleHI : category.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#4f4f4f' }}>
                    {language === "HI" && (category as any).descHI ? (category as any).descHI : category.desc}
                  </p>
                  <p className="text-xs font-medium mt-2" style={{ color: '#146fb5' }}>
                    {category.count} {language === "HI" ? "लेख" : "articles"}
                  </p>
                </>
              );

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {linkTo ? (
                    <Link
                      to={linkTo}
                      className="block bg-secondary/30 p-5 rounded-xl hover:shadow-md transition-all cursor-pointer"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="bg-secondary/30 p-5 rounded-xl hover:shadow-md transition-all">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section-padding-sm subtle-gradient">
        <div className="container-wide">
          <h2 className="text-xl font-display font-bold text-foreground mb-6">
            {language === "HI" ? "लोकप्रिय लेख" : "Popular Articles"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-4 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
              >
                <span className="text-xs font-medium px-2 py-0.5 rounded inline-block" style={{ color: '#146fb5', backgroundColor: 'rgba(20, 111, 181, 0.1)' }}>
                  {language === "HI" && (article as any).categoryHI ? (article as any).categoryHI : article.category}
                </span>
                <p className="font-medium mt-2" style={{ color: '#1b181f' }}>
                  {language === "HI" && (article as any).titleHI ? (article as any).titleHI : article.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="text-xl font-display font-bold text-foreground">
              {language === "HI" ? "फिर भी मदद चाहिए?" : "Still need help?"}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {language === "HI" ? "हमारी सपोर्ट टीम हमेशा आपके साथ है" : "Our support team is here for you"}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-xl text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" style={{ color: '#1b181f' }} />
              <h3 className="font-semibold text-foreground">
                {language === "HI" ? "हमें कॉल करें" : "Call Us"}
              </h3>
              <p className="text-sm text-muted-foreground">+91 93266 01463</p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center">
              <Mail className="w-8 h-8 mx-auto mb-3" style={{ color: '#1b181f' }} />
              <h3 className="font-semibold text-foreground">
                {language === "HI" ? "ईमेल" : "Email"}
              </h3>
              <p className="text-sm text-muted-foreground">info@apeiros.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
