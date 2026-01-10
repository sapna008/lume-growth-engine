import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, HelpCircle, Zap } from "lucide-react";
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
  },
  {
    name: "Starter",
    price: "₹499",
    period: "per month",
    description: "For small retail stores",
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
  },
  {
    name: "Growth",
    price: "₹999",
    period: "per month",
    description: "For growing businesses",
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
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-store chains",
    features: [
      "Everything in Growth",
      "Multi-store management",
      "Custom integrations",
      "Dedicated account manager",
      "API access",
      "On-site training",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/company/contact",
    popular: false,
  },
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
              Simple, Transparent <span className="text-emerald-400">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white -mt-8">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 ${
                  plan.popular
                    ? "bg-navy-900 text-white ring-4 ring-emerald-500"
                    : "bg-white border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-bold ${plan.popular ? "text-white" : "text-navy-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-navy-900"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 ${
                          plan.popular ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                      <span className={`text-sm ${plan.popular ? "text-white/90" : "text-navy-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={plan.href}>{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-800 font-medium">
                14-day free trial on all paid plans • No credit card required
              </span>
            </div>
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

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 10,000+ retailers who trust Lume for their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta" asChild>
              <Link to="/trial">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link to="/company/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
