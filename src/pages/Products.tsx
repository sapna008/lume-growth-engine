import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Cpu, BarChart3, Package, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const products = [
  {
    id: "web-pos",
    icon: Smartphone,
    title: "Web POS",
    tagline: "Complete retail POS system",
    status: "active",
    description: "Full-featured point of sale system that runs in your browser. No installation needed.",
    features: ["Tax & non-tax billing", "Image-based billing", "Multiple bill templates", "Customer capture", "Smart bill generation", "Inventory management", "GST compliant"],
    benefits: ["Works on any device", "Real-time sync", "Offline capable", "Multi-store support"],
  },
  {
    id: "pos-plugin",
    icon: Cpu,
    title: "POS Plugin",
    tagline: "Connect existing systems",
    status: "active",
    description: "Plugin that connects to your existing POS and adds smart features without replacing your system.",
    features: ["Works with any POS", "Bill data extraction", "Customer linking", "Smart bill overlay", "Zero disruption", "Quick setup"],
    benefits: ["No system change", "Keep your workflow", "Add features instantly", "Unified data"],
  },
  {
    id: "analytics-dashboard",
    icon: BarChart3,
    title: "Analytics Dashboard",
    tagline: "Business intelligence",
    status: "active",
    description: "Real-time dashboards with sales, customer, and inventory insights.",
    features: ["Sales analytics", "Customer insights", "Product performance", "Store comparison", "Custom reports", "Export options"],
    benefits: ["Data-driven decisions", "Identify trends", "Optimize inventory", "Track growth"],
  },
  {
    id: "campaign-manager",
    icon: Package,
    title: "Campaign Manager",
    tagline: "Marketing automation",
    status: "active",
    description: "Create and manage multi-channel marketing campaigns from a single dashboard.",
    features: ["SMS campaigns", "WhatsApp marketing", "Customer segments", "Scheduled sends", "A/B testing", "ROI tracking"],
    benefits: ["Automated marketing", "Targeted messaging", "Higher conversions", "Measure results"],
  },
];

export default function Products() {
  const { id } = useParams();
  const selectedProduct = id ? products.find(p => p.id === id) : null;

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-20 lg:pt-24 pb-12 hero-gradient text-white">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <selectedProduct.icon className="w-7 h-7 text-orange-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{selectedProduct.title}</h1>
              <p className="text-lg text-orange-400">{selectedProduct.tagline}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-lg text-muted-foreground mb-6">{selectedProduct.description}</p>
                <h3 className="font-semibold text-foreground mb-4">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 p-6 rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {selectedProduct.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant="cta" className="w-full mt-6" asChild>
                  <Link to="/trial">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 lg:pt-24 pb-12 hero-gradient text-white">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Products Built for <span className="text-orange-400">Modern Retail</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A complete ecosystem to digitize, grow, and compete
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="block bg-secondary/30 p-6 rounded-xl hover:shadow-lg transition-all h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">{product.title}</h3>
                      <p className="text-sm text-orange-600 mb-2">{product.tagline}</p>
                      <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
