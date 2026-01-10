import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Smartphone, CreditCard, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const products = [
  {
    name: "Lume Retail App",
    tagline: "Your complete retail management solution",
    status: "active",
    icon: Smartphone,
    description:
      "The all-in-one app that transforms how you run your retail store. From digital billing to customer insights, everything works seamlessly on your phone.",
    features: [
      "Instant GST-compliant billing",
      "Customer data capture & management",
      "Credit (udhaar) tracking with reminders",
      "Real-time sales & profit analytics",
      "Inventory management with alerts",
      "WhatsApp engagement & offers",
    ],
    cta: "Start Free Trial",
    href: "/trial",
  },
  {
    name: "mPOS Terminal",
    tagline: "Accept all payments, anywhere",
    status: "coming",
    icon: CreditCard,
    description:
      "Compact, affordable payment terminal that connects with your Lume app. Accept cards, UPI, and digital payments with instant reconciliation.",
    features: [
      "Card & contactless payments",
      "UPI & wallet integration",
      "Auto-sync with Lume billing",
      "Daily settlement reports",
      "Competitive transaction rates",
    ],
    cta: "Join Waitlist",
    href: "/waitlist",
  },
  {
    name: "Consumer App",
    tagline: "Your digital storefront",
    status: "coming",
    icon: Users,
    description:
      "Let customers browse products, place orders, and engage with your store — all from their phone. Build loyalty with a personalized shopping experience.",
    features: [
      "Digital catalog & ordering",
      "Loyalty points & rewards",
      "Order history & reordering",
      "Personalized offers",
      "Store ratings & reviews",
    ],
    cta: "Join Waitlist",
    href: "/waitlist",
  },
  {
    name: "Supplier App",
    tagline: "Connect with your suppliers",
    status: "coming",
    icon: Package,
    description:
      "Streamline your supply chain. Order from suppliers, track deliveries, and manage payments — all integrated with your inventory system.",
    features: [
      "Supplier catalog & ordering",
      "Delivery tracking",
      "Payment management",
      "Price comparison",
      "Auto-reorder suggestions",
    ],
    cta: "Join Waitlist",
    href: "/waitlist",
  },
];

export default function Products() {
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
              Products Built for <span className="text-emerald-400">Modern Retail</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              A complete ecosystem of tools designed to help Indian retailers 
              digitize, grow, and compete in the modern marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-12">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 lg:p-12 ${
                  product.status === "active" ? "bg-navy-50" : "bg-muted/50"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          product.status === "active"
                            ? "bg-emerald-500"
                            : "bg-navy-300"
                        }`}
                      >
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-navy-900">{product.name}</h2>
                        {product.status === "coming" && (
                          <span className="text-xs bg-navy-200 text-navy-700 px-2 py-0.5 rounded-full font-medium">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-lg text-emerald-600 font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <Button
                      size="lg"
                      variant={product.status === "active" ? "cta" : "outline"}
                      asChild
                    >
                      <Link to={product.href}>
                        {product.cta}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-card">
                    <h3 className="font-semibold text-navy-900 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 ${
                              product.status === "active"
                                ? "text-emerald-600"
                                : "text-navy-400"
                            }`}
                          />
                          <span className="text-navy-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding subtle-gradient">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Start with the Lume Retail App Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get everything you need to run a modern retail store. More products coming soon.
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
