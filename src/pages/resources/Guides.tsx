import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Rocket, 
  Users, 
  Megaphone, 
  BarChart3, 
  HelpCircle,
  Download,
  MessageSquare,
  Mail,
  Phone,
  CheckCircle2,
  TrendingUp,
  Gift,
  FileText,
  Zap,
  ReceiptIndianRupee
} from "lucide-react";
import { motion } from "framer-motion";
import lumeLogo from "@/assets/lume_logo.png";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Guides() {
  const quickGuides = [
    {
      icon: Rocket,
      title: "Getting Started with Lume",
      steps: [
        "Download the Lume app from Play Store",
        "Set up your store details and staff",
        "Start billing within minutes",
        "Send your first digital bill to a customer"
      ]
    },
    {
      icon: ReceiptIndianRupee,
      title: "How to Create & Send Digital Bills",
      steps: [
        "Create tax or non-tax bills",
        "Use quick billing or image billing",
        "Send bills via WhatsApp, SMS, or Email",
        "Bills are stored automatically for reports"
      ]
    },
    {
      icon: Users,
      title: "Capturing & Managing Customers",
      steps: [
        "Customer details are auto-captured from bills",
        "View purchase history and feedback",
        "Segment customers for better targeting"
      ]
    },
    {
      icon: Megaphone,
      title: "Running Campaigns & Offers",
      steps: [
        "Create WhatsApp or SMS promotions",
        "Run rewards, coupons, or loyalty programs",
        "Track campaign performance"
      ]
    },
    {
      icon: BarChart3,
      title: "Understanding Reports & Analytics",
      steps: [
        "Track daily, weekly, and monthly sales",
        "Understand customer buying behaviour",
        "See product and timing insights"
      ]
    },
    {
      icon: HelpCircle,
      title: "Need Help?",
      steps: [
        "Reach out via WhatsApp or phone support",
        "Get personalised assistance from the Lume team"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is Lume?",
      answer: "Lume is a smart retail platform designed to help retailers manage billing, customer engagement, campaigns, analytics, and online sales — all from one system. It goes beyond basic billing and helps you grow your business using data and digital tools."
    },
    {
      question: "What features do I get for free?",
      answer: "With Lume, you get free access to essential tools including: Basic tax and non-tax billing, Digital bills via SMS, WhatsApp, and Email, Store listing and visibility, Customer feedback collection, Staff and team management tools, ONDC auto-onboarding, Simple promotional campaigns. These features are enough to start billing and engaging customers digitally."
    },
    {
      question: "What advanced features can I use?",
      answer: "Advanced features are designed for growing businesses and include: Advanced sales and customer analytics, Personalised campaigns (rewards, loyalty, coupons), Customer segmentation, Campaign performance insights, Social media promotion tools, Multi-store and franchise management. You can enable these tools based on your business needs."
    },
    {
      question: "Can I send bills directly to my customers?",
      answer: "Yes. Lume allows you to send bills instantly through: WhatsApp, SMS, Email, App notifications. This ensures customers always receive and remember your store bills."
    },
    {
      question: "How can I promote my store using Lume?",
      answer: "You can promote your store using multiple channels: WhatsApp and SMS campaigns, Social media promotions, Visibility on the Lume consumer app, Listing and discovery via ONDC. These tools help attract new customers and bring back existing ones."
    },
    {
      question: "Can I manage more than one shop in Lume?",
      answer: "Yes. Lume supports: Multiple stores, POS-based billing, Franchise or chain store management. All your stores can be managed from a single dashboard."
    },
    {
      question: "Can I track customer activity and behaviour?",
      answer: "Yes. Lume automatically: Tracks customer purchase history, Collects feedback, Segments customers based on behaviour, Helps you create targeted campaigns. This allows you to make better business decisions."
    },
    {
      question: "What are cashback, rewards, and loyalty features?",
      answer: "Lume lets you run custom retention programs such as: Loyalty points, Discount coupons, Cashback offers, Referral programs. These tools help increase repeat customers and long-term loyalty."
    },
    {
      question: "Is customer support available?",
      answer: "Yes. Lume provides: WhatsApp support, Phone support, Personalised onboarding and assistance. Our support team helps you at every step of your journey."
    },
    {
      question: "Do I need to pay for all features?",
      answer: "No. Basic features are completely free. You only pay for additional tools such as: Advanced campaigns, SMS / WhatsApp usage beyond free limits, Loyalty and rewards programs, Advanced analytics. You can upgrade anytime based on your needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Quick Guides Section */}
        <section className="section-padding bg-white pt-24">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Rocket className="w-6 h-6" style={{ color: '#146fb5' }} />
                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#1b181f' }}>
                  Quick Guides
                </h2>
              </div>
              <p className="text-lg" style={{ color: '#4f4f4f' }}>
                Short & actionable steps to get you started
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {quickGuides.map((guide, i) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#146fb5]/30"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#eaf2f8] to-white border-2 border-[#146fb5]/20">
                    <guide.icon className="w-7 h-7" style={{ color: '#146fb5' }} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1b181f' }}>
                    {guide.title}
                  </h3>
                  <ul className="space-y-3">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-lg" style={{ color: '#4f4f4f' }}>
                Find answers to common questions about Lume
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
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed pb-6 ml-8" style={{ color: '#4f4f4f' }}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl p-8 sm:p-12" style={{
                background: 'linear-gradient(135deg, #146fb5 0%, #87CEEB 50%, #B0E0E6 100%)',
                backgroundSize: '200% 200%',
              }}>
                <div className="relative z-10 flex flex-col items-start text-left">
                  {/* Logo */}
                  <div className="flex-shrink-0 mb-2">
                    <img 
                      src={lumeLogo} 
                      alt="Lume" 
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="max-w-2xl">
                    <p className="text-lg sm:text-xl leading-relaxed text-white font-medium mb-4 sm:mb-6">
                      Lume is built to be simple for retailers and powerful for growing businesses — start with basics and upgrade only when you're ready.
                    </p>
                    
                    {/* Get Started Button */}
                    <Button
                      onClick={() => window.open('https://r.apeirosai.com/en', '_blank')}
                      className="bg-white text-[#146fb5] hover:bg-white/90 font-semibold px-6 py-3 rounded-lg shadow-lg"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
