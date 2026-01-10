import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Receipt, Users, MessageSquare, Zap, CreditCard, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const solutions = [
  {
    id: "digital-billing",
    icon: Receipt,
    title: "Digital Billing",
    tagline: "Create professional bills in seconds",
    problem: "Manual billing is slow, error-prone, and customers lose paper bills. No GST compliance means business risk.",
    solution: "Lume's digital billing creates GST-compliant bills instantly. Customers get digital copies via WhatsApp. All records saved automatically.",
    benefits: [
      "Bills in under 10 seconds",
      "GST-compliant invoices",
      "WhatsApp bill sharing",
      "Automatic record keeping",
      "Barcode scanning",
    ],
    href: "/solutions/digital-billing",
  },
  {
    id: "customer-capture",
    icon: Users,
    title: "Customer Capture",
    tagline: "Build your customer database automatically",
    problem: "Most retailers don't know who their customers are. No data means no way to bring them back.",
    solution: "Every transaction captures customer details automatically. Build a database of your loyal customers without extra effort.",
    benefits: [
      "Auto phone number capture",
      "Purchase history tracking",
      "Customer preferences",
      "Segment your customers",
      "Export data anytime",
    ],
    href: "/solutions/customer-capture",
  },
  {
    id: "feedback-engagement",
    icon: MessageSquare,
    title: "Feedback & Engagement",
    tagline: "Listen to customers, keep them coming back",
    problem: "You never know what customers think until they stop coming. No way to collect or act on feedback.",
    solution: "Collect ratings after every purchase. Send personalized offers based on preferences. Build relationships that last.",
    benefits: [
      "Post-purchase ratings",
      "Feedback collection",
      "Personalized offers",
      "Birthday/anniversary wishes",
      "Loyalty rewards",
    ],
    href: "/solutions/feedback-engagement",
  },
  {
    id: "real-time-engagement",
    icon: Zap,
    title: "Real-time Engagement",
    tagline: "Reach customers at the right moment",
    problem: "Customers forget about your store. No way to remind them or share offers when it matters.",
    solution: "Send instant WhatsApp messages for new arrivals, discounts, and reminders. Bring customers back when you need them.",
    benefits: [
      "WhatsApp campaigns",
      "New arrival alerts",
      "Flash sale notifications",
      "Restock reminders",
      "Automated messages",
    ],
    href: "/solutions/real-time-engagement",
  },
  {
    id: "credit-management",
    icon: CreditCard,
    title: "Credit (Udhaar) Management",
    tagline: "Track credit, reduce bad debts",
    problem: "Udhaar leads to losses. Paper records get lost. Customers forget to pay. Awkward collection conversations.",
    solution: "Digital credit tracking with automatic reminders. Customers see their balance. Professional, hassle-free collection.",
    benefits: [
      "Digital ledger for each customer",
      "Automatic payment reminders",
      "Customer self-check balance",
      "Credit limit settings",
      "Payment history",
    ],
    href: "/solutions/credit-management",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reports",
    tagline: "Make smarter decisions with data",
    problem: "You don't know your real profits. No visibility into what's selling, what's not, or where money is going.",
    solution: "Real-time dashboard shows sales, profits, trends, and insights. Make data-driven decisions every day.",
    benefits: [
      "Real-time sales dashboard",
      "Profit margin tracking",
      "Best-selling products",
      "Customer insights",
      "Daily/weekly/monthly reports",
    ],
    href: "/solutions/analytics",
  },
];

export default function Solutions() {
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
              Solutions for Every <span className="text-emerald-400">Retail Challenge</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Practical tools that solve real problems Indian retailers face every day.
              No complexity, just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="section-padding bg-white">
        <div className="container-wide space-y-16">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900">{solution.title}</h2>
                </div>
                <p className="text-lg text-emerald-600 font-medium mb-4">{solution.tagline}</p>

                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-red-800 mb-1">The Problem:</p>
                    <p className="text-red-700">{solution.problem}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-emerald-800 mb-1">The Solution:</p>
                    <p className="text-emerald-700">{solution.solution}</p>
                  </div>
                </div>

                <Button variant="cta" asChild>
                  <Link to={solution.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              <div className={`bg-navy-50 rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-semibold text-navy-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-navy-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding subtle-gradient">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            All Solutions in One App
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get all these solutions and more with the Lume Retail App. Start your free trial today.
          </p>
          <Button size="xl" variant="cta" asChild>
            <Link to="/trial">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
