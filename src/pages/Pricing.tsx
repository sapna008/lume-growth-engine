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

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for trying out Lume",
    messages: "50 bills/month",
    features: [
      "50 bills per month",
      "Basic customer capture",
      "GST-compliant invoices",
      "WhatsApp bill sharing",
      "Mobile app access",
    ],
    cta: "Start Free",
    href: "/trial",
    popular: false,
    badge: null,
  },
  {
    name: "Starter",
    price: "₹499",
    originalPrice: "₹799",
    period: "per month",
    description: "For small retail stores",
    messages: "500 bills/month",
    features: [
      "500 bills per month",
      "Customer management",
      "Credit tracking",
      "Basic analytics",
      "WhatsApp campaigns (100/month)",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/trial",
    popular: false,
    badge: "Save 37%",
  },
  {
    name: "Growth",
    price: "₹999",
    originalPrice: "₹1,499",
    period: "per month",
    description: "For growing businesses",
    messages: "Unlimited bills",
    features: [
      "Unlimited bills",
      "Advanced customer insights",
      "Full credit management",
      "Detailed analytics & reports",
      "WhatsApp campaigns (500/month)",
      "Inventory management",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/trial",
    popular: true,
    badge: "Recommended",
  },
];

const comparisonFeatures = [
  { name: "Monthly Bills", free: "50", starter: "500", growth: "Unlimited" },
  { name: "Customer Capture", free: "Basic", starter: "Advanced", growth: "Advanced + Insights" },
  { name: "GST-Compliant Invoices", free: true, starter: true, growth: true },
  { name: "WhatsApp Bill Sharing", free: true, starter: true, growth: true },
  { name: "Credit (Udhaar) Management", free: false, starter: "Basic", growth: "Full" },
  { name: "Analytics & Reports", free: false, starter: "Basic", growth: "Detailed" },
  { name: "WhatsApp Campaigns", free: false, starter: "100/month", growth: "500/month" },
  { name: "Inventory Management", free: false, starter: false, growth: true },
  { name: "Multi-staff Access", free: false, starter: false, growth: true },
  { name: "Customer Loyalty Program", free: false, starter: false, growth: true },
  { name: "Priority Support", free: false, starter: false, growth: true },
  { name: "API Access", free: false, starter: false, growth: "Coming Soon" },
];

const faqs = [
  {
    question: "Is there really a free plan?",
    answer:
      "Yes! Our Free plan lets you create up to 50 bills per month forever. It's perfect for trying out Lume and seeing how it works for your store.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including UPI, credit/debit cards, net banking, and wallets. For Enterprise plans, we also offer invoicing.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, security is our top priority. All data is encrypted, stored securely on cloud servers in India, and we never share your data with third parties.",
  },
  {
    question: "Do I need any special hardware?",
    answer:
      "No! Lume works on any Android smartphone. You don't need POS machines, printers, or any other hardware to get started.",
  },
  {
    question: "What happens after the free trial?",
    answer:
      "After your 14-day free trial, you can choose any plan that fits your needs. If you don't upgrade, you'll automatically move to our Free plan — no charges, no data loss.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-amber-50/30">
      <Header />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-blue-600 bg-clip-text text-transparent">
              Choose the right plan for your business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees, no surprises.
            </p>
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
                    ? "bg-gradient-to-br from-amber-50 via-amber-100/50 to-white border-2 border-accent scale-105 shadow-2xl shadow-accent/20"
                    : "bg-white border border-border shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-0.5 right-4 px-3 py-1.5 rounded-b-lg text-xs font-bold uppercase tracking-wide ${
                    plan.popular 
                      ? "bg-gradient-to-r from-accent to-amber-500 text-white shadow-lg" 
                      : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-accent" : "text-foreground"}`}>
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  {plan.period && (
                    <p className="text-sm text-muted-foreground">/{plan.period} + GST</p>
                  )}
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    {plan.messages}
                  </span>
                </div>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  className={`w-full mb-6 ${plan.popular ? "shadow-lg" : ""}`}
                  asChild
                >
                  <Link to={plan.href}>{plan.cta}</Link>
                </Button>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    What's included:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular ? "text-accent" : "text-emerald-600"
                        }`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className={`rounded-lg overflow-hidden ${plan.popular ? "ring-1 ring-accent/30" : ""}`}>
                    <div className={`py-2 px-3 text-xs font-bold flex items-center gap-2 ${
                      plan.popular 
                        ? "bg-gradient-to-r from-accent to-amber-500 text-white" 
                        : "bg-gradient-to-r from-primary to-blue-600 text-white"
                    }`}>
                      <Sparkles className="w-3 h-3" />
                      POWERED BY LUME
                    </div>
                    <div className="bg-slate-50 py-2 px-3">
                      <p className="text-xs text-muted-foreground">14-day free trial • Cancel anytime</p>
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
            <h3 className="text-xl font-bold text-foreground mb-2">Enterprise</h3>
            <p className="text-muted-foreground mb-4">
              For multi-store chains with custom needs. Get API access, dedicated support, and custom integrations.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/company/contact">Contact Sales</Link>
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-800 font-medium">
                14-day free trial on all paid plans • No credit card required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 relative z-10">
        <div className="container-wide max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Compare Plans</h2>
            <p className="text-muted-foreground">See what's included in each plan</p>
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
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Features</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">
                      <div className="flex flex-col items-center">
                        <span>Free</span>
                        <span className="text-sm font-normal text-muted-foreground">₹0</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">
                      <div className="flex flex-col items-center">
                        <span>Starter</span>
                        <span className="text-sm font-normal text-muted-foreground">₹499/mo</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground bg-accent/10">
                      <div className="flex flex-col items-center">
                        <span className="flex items-center gap-1">
                          Growth
                          <Star className="w-4 h-4 fill-accent text-accent" />
                        </span>
                        <span className="text-sm font-normal text-muted-foreground">₹999/mo</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={feature.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="py-3 px-6 text-sm font-medium text-foreground">{feature.name}</td>
                      <td className="py-3 px-4 text-center">
                        {typeof feature.free === "boolean" ? (
                          feature.free ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{feature.free}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-muted-foreground">{feature.starter}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center bg-accent/5">
                        {typeof feature.growth === "boolean" ? (
                          feature.growth ? (
                            <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm font-medium text-foreground">{feature.growth}</span>
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
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join 10,000+ retailers who trust Lume for their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" asChild>
                <Link to="/trial">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/company/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
