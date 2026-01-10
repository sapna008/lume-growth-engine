import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, HelpCircle, Video, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const guides = [
  {
    title: "Getting Started with Lume",
    description: "Everything you need to set up your store and start billing",
    icon: BookOpen,
    href: "/resources/guides/getting-started",
  },
  {
    title: "Digital Billing Guide",
    description: "Master GST-compliant billing in minutes",
    icon: FileText,
    href: "/resources/guides/digital-billing",
  },
  {
    title: "Customer Management",
    description: "Build and engage your customer database",
    icon: FileText,
    href: "/resources/guides/customer-management",
  },
  {
    title: "Credit Tracking",
    description: "Manage udhaar without the headache",
    icon: FileText,
    href: "/resources/guides/credit-tracking",
  },
];

const faqs = [
  {
    question: "How do I download the Lume app?",
    answer: "You can download Lume from the Google Play Store. Search for 'Lume Retail' and install. The app is free to download and use with our Free plan.",
  },
  {
    question: "What devices does Lume work on?",
    answer: "Lume works on any Android smartphone running Android 6.0 or higher. No special hardware is needed — your existing phone is enough to get started.",
  },
  {
    question: "How do I create a GST-compliant bill?",
    answer: "Simply add your GST number in Settings, then create bills as usual. Lume automatically adds GST details, calculates taxes, and generates compliant invoices.",
  },
  {
    question: "Can I import my existing products?",
    answer: "Yes! You can import products via Excel/CSV file, scan barcodes to add products, or add them manually. Bulk import is available in all paid plans.",
  },
  {
    question: "How does customer data capture work?",
    answer: "When you create a bill, Lume prompts for the customer's phone number. All purchase history is automatically linked, building a database over time.",
  },
  {
    question: "Is my data safe and secure?",
    answer: "Absolutely. All data is encrypted and stored on secure cloud servers in India. We follow industry-standard security practices and never share your data.",
  },
  {
    question: "How do I send bills via WhatsApp?",
    answer: "After creating a bill, tap the 'Share' button and select WhatsApp. The bill is sent as a professional PDF to your customer instantly.",
  },
  {
    question: "What if I need help?",
    answer: "We offer email support for all plans, with priority support on Growth plans. You can also WhatsApp us at +91 800-123-4567 for quick assistance.",
  },
];

export default function Guides() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guides & <span className="text-emerald-400">FAQs</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Everything you need to get the most out of Lume. Learn, explore, and grow.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for help..."
                className="pl-12 h-12 bg-white text-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guides */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Popular Guides</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={guide.href}
                  className="block bg-navy-50 rounded-xl p-6 hover-lift h-full"
                >
                  <guide.icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-navy-900 mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <span className="text-emerald-600 font-medium text-sm flex items-center gap-1">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding subtle-gradient">
        <div className="container-tight">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-navy-900">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-navy-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-navy-900 rounded-2xl p-8 lg:p-12 text-center text-white">
            <Video className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Video Tutorials Coming Soon</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
              We're creating step-by-step video tutorials in Hindi, English, and regional languages.
              Subscribe to get notified when they're ready.
            </p>
            <Button variant="hero" asChild>
              <Link to="/company/contact">Notify Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="section-padding-sm subtle-gradient">
        <div className="container-tight text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you succeed.
          </p>
          <Button variant="cta" asChild>
            <Link to="/company/contact">
              Contact Support
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
