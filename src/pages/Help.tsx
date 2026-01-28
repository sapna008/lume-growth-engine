import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, BookOpen, Video, MessageCircle, Phone, Mail, ChevronDown, Play, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const categories = [
  { icon: BookOpen, title: "Getting Started", count: 8, desc: "Setup and basics" },
  { icon: FileText, title: "Billing", count: 12, desc: "Creating and managing bills" },
  { icon: HelpCircle, title: "Loyalty & Campaigns", count: 6, desc: "Customer engagement" },
  { icon: Video, title: "Video Tutorials", count: 10, desc: "Watch and learn" },
];

const popularArticles = [
  { title: "How to create your first bill", category: "Getting Started" },
  { title: "Setting up GST in Lume", category: "Billing" },
  { title: "Creating loyalty programs", category: "Loyalty" },
  { title: "Connecting your POS system", category: "Integration" },
  { title: "Understanding analytics dashboard", category: "Reports" },
];

const faqs = [
  { q: "How do I reset my password?", a: "Go to Settings > Account > Change Password. You'll receive an OTP on your registered mobile." },
  { q: "How to add a new staff member?", a: "Navigate to Settings > Team > Add User. Enter their details and assign a role." },
  { q: "Can I use Lume offline?", a: "Yes, Lume works offline. Bills sync automatically when you're back online." },
  { q: "How to export my data?", a: "Go to Reports > Export. Choose the date range and format (Excel/CSV/PDF)." },
  { q: "What's included in the free trial?", a: "Full access to all features of the Growth plan for 14 days." },
];

export default function Help() {
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
              How can we help?
            </h1>
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for help..."
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
                  <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
                  <p className="text-sm" style={{ color: '#4f4f4f' }}>{category.desc}</p>
                  <p className="text-xs font-medium mt-2" style={{ color: '#146fb5' }}>{category.count} articles</p>
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
          <h2 className="text-xl font-display font-bold text-foreground mb-6">Popular Articles</h2>
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
                <span className="text-xs font-medium px-2 py-0.5 rounded inline-block" style={{ color: '#146fb5', backgroundColor: 'rgba(20, 111, 181, 0.1)' }}>{article.category}</span>
                <p className="font-medium mt-2" style={{ color: '#1b181f' }}>{article.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding-sm bg-white">
        <div className="container-tight">
          <h2 className="text-xl font-display font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-foreground text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="text-xl font-display font-bold text-foreground">Still need help?</h2>
            <p className="text-muted-foreground text-sm mt-1">Our support team is here for you</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-xl text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Chat with our team</p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Call Us</h3>
              <p className="text-sm text-muted-foreground">+91 93266 01463</p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">info@apeiros.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
