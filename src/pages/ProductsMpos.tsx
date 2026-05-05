import { motion } from "framer-motion";
import {
  BarChart3,
  Barcode,
  Box,
  Boxes,
  Camera,
  Check,
  CreditCard,
  Smartphone,
  Store,
  Tag,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import mposImage from "@/assets/mpos/mpos1.png";

const features = [
  {
    title: "Billing",
    icon: CreditCard,
    points: ["Fast billing system", "GST & Non-GST invoices", "Multiple payment modes"],
    cardClass: "bg-[#c7dbff] border-slate-300",
  },
  {
    title: "Inventory Management",
    icon: Boxes,
    points: ["Real-time stock tracking", "Product variants (size, etc.)", "Low-stock alerts"],
    cardClass: "bg-[#cfe9d6] border-slate-300",
  },
  {
    title: "Barcode System",
    icon: Barcode,
    points: ["Generate barcodes", "Scan via barcode"],
    cardClass: "bg-[#ddd2ff] border-slate-300",
  },
  {
    title: "Mobile Camera Scanning",
    icon: Camera,
    points: ["Scan using phone camera", "No hardware needed"],
    cardClass: "bg-[#ffe3a3] border-slate-300",
  },
  {
    title: "Offers & Discounts",
    icon: Tag,
    points: ["Apply offers during billing"],
    cardClass: "bg-[#f8caca] border-slate-300",
  },
  {
    title: "WhatsApp E-Billing",
    icon: Smartphone,
    points: ["Send bills via WhatsApp", "Print & download bills"],
    cardClass: "bg-[#c7ebdd] border-slate-300",
  },
];

const workflowSteps = [
  { step: "1", title: "Add Products", desc: "Create your product catalog" },
  { step: "2", title: "Scan Products", desc: "Use barcode or mobile camera" },
  { step: "3", title: "Generate Bill", desc: "Process instantly" },
  { step: "4", title: "Send to Customer", desc: "Via WhatsApp" },
  { step: "5", title: "Track Sales", desc: "Real-time analytics" },
];

const managementItems = [
  {
    title: "Sales Management",
    description: "Track and analyze sales data",
    icon: BarChart3,
  },
  {
    title: "Inventory Control",
    description: "Keep stock in perfect balance",
    icon: Store,
  },
  {
    title: "Payment Processing",
    description: "Accept multiple payment modes",
    icon: CreditCard,
  },
  {
    title: "Customer Interaction",
    description: "Engage via WhatsApp",
    icon: Smartphone,
  },
];

export default function ProductsMpos() {
  useSEO(
    "MPos — Mobile POS for Retail",
    "Manage your entire retail store from your phone with billing, inventory, payments, and customer management in one mobile POS."
  );

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-br from-white to-[#f7fbff] py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-primary/[0.08] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 z-0 h-[320px] w-[520px] -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,111,181,0.10) 0%, rgba(20,111,181,0.04) 40%, rgba(20,111,181,0) 75%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 z-0 h-[360px] w-[360px] -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(20,111,181,0.22) 0%, rgba(20,111,181,0.08) 45%, rgba(20,111,181,0) 80%)",
          }}
        />

        <div className="site-container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-left"
            >
              <div className="max-w-[640px]">
                <p className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium tracking-wide text-[#146fb5]">
                  MPOS
                </p>
                <h1
                  className="font-display font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 leading-snug max-w-[600px]"
                  style={{ color: "#1b181f" }}
                >
                  POS System in Your <span className="text-[#146fb5]">Pocket</span>
                </h1>
                <p
                  className="max-w-[560px] text-base sm:text-base md:text-lg mb-3 sm:mb-4"
                  style={{ color: "#4f4f4f" }}
                >
                  MPos is a mobile and web-based POS system that helps retailers
                  manage billing, inventory, payments, and customer interactions
                  from a single platform.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#146fb5]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="max-w-[300px]">
                      <p className="text-base sm:text-lg font-bold mb-1" style={{ color: "#1b181f" }}>
                        No hardware required
                      </p>
                      <p className="text-sm sm:text-base leading-snug" style={{ color: "#4f4f4f" }}>
                        Use your phone to scan and bill.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#146fb5]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="max-w-[300px]">
                      <p className="text-base sm:text-lg font-bold mb-1" style={{ color: "#1b181f" }}>
                        Real-time operations
                      </p>
                      <p className="text-sm sm:text-base leading-snug" style={{ color: "#4f4f4f" }}>
                        Manage inventory, offers, and billing in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#146fb5]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="max-w-[300px]">
                      <p className="text-base sm:text-lg font-bold mb-1" style={{ color: "#1b181f" }}>
                        WhatsApp billing
                      </p>
                      <p className="text-sm sm:text-base leading-snug" style={{ color: "#4f4f4f" }}>
                        Send bills directly to customers via WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="relative lg:-ml-6"
            >
              <div className="absolute top-6 right-6 grid grid-cols-4 gap-1 opacity-40">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#146fb5] rounded-full" />
                ))}
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-dashed border-[#146fb5]/40 rounded-full" />
              <div className="absolute top-1/2 -left-4 w-3 h-3 bg-[#146fb5]/40 rounded-full" />
              <div className="absolute bottom-10 right-10 w-2 h-2 bg-[#146fb5]/30 rounded-full" />

              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#146fb5]/10 rounded-2xl" />
              <img
                src={mposImage}
                alt="MPos product interface preview"
                  className="relative z-10 mx-auto w-full h-auto max-w-[680px] rounded-2xl border border-gray-200 object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="section-spacing bg-white">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: "#1b181f" }}>
              Everything You Need to Run Your Store
            </h2>
            <p className="text-base sm:text-lg" style={{ color: "#4f4f4f" }}>
              One unified system for all your retail operations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {features.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`rounded-lg min-h-[150px] sm:min-h-[170px] p-4 sm:p-5 border transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md ${feature.cardClass}`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-gray-800">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW */}
      <section className="section-spacing border-y border-border/60 bg-primary/[0.02]">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4" style={{ color: "#1b181f" }}>
              Simple Workflow
            </h2>
            <p className="text-base sm:text-lg" style={{ color: "#4f4f4f" }}>
              From adding products to tracking sales, everything is streamlined
            </p>
          </motion.div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
              <div className="hidden md:block absolute top-5 left-0 w-full h-[2px] bg-gray-300" />

              <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start mt-8 gap-8 lg:gap-12">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex-1 flex flex-col items-center text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#146fb5] text-white flex items-center justify-center font-semibold shadow-md z-10">
                      {step.step}
                    </div>
                    <div className="mt-4 text-base sm:text-lg lg:text-xl font-semibold text-black">
                      {step.title}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 mt-1 max-w-[220px]">
                      {step.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STORE MANAGEMENT */}
      <section className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-white via-[#f5f9ff] to-[#eef4ff]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.1]" aria-hidden>
          <div className="w-full h-full bg-[radial-gradient(circle,_#146fb5_1px,_transparent_1px)] bg-[size:28px_28px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]" aria-hidden>
          <div className="grid grid-cols-10 gap-10 p-12">
            <div className="h-5 w-3 border-l border-[#146fb5] border-r border-[#146fb5] opacity-60" />
            <div className="h-5 w-4 border border-[#146fb5] rounded-sm opacity-60" />
            <div className="h-5 w-5 border-t border-[#146fb5] rotate-12 opacity-60" />
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="w-[2px] h-[2px] bg-[#146fb5]" />
              <div className="w-[2px] h-[2px] bg-[#146fb5]" />
              <div className="w-[2px] h-[2px] bg-[#146fb5]" />
              <div className="w-[2px] h-[2px] bg-[#146fb5]" />
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: "#1b181f" }}>
                Complete Store Management
              </h2>
              <p className="text-base text-gray-600 mt-3 max-w-2xl leading-relaxed">
                MPos gives you everything needed to manage your retail business in one unified system.
                <br />
                From sales operations to customer communication, every core workflow stays connected and easy to manage.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-6 mt-6">
              <div>
                <div className="space-y-2 mb-8">
                  <div className="w-6 h-[2px] bg-[#146fb5] mb-2" />
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-[#146fb5]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Sales & Reports</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Track and analyze sales performance across products and categories</li>
                    <li>Monitor daily billing trends to make faster business decisions</li>
                  </ul>
                </div>
                <div className="space-y-2 mb-8">
                  <div className="w-6 h-[2px] bg-[#146fb5] mb-2" />
                  <div className="flex items-center gap-2 mb-2">
                    <Box className="w-5 h-5 text-[#146fb5]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Inventory Management</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Keep stock in balance with real-time quantity visibility</li>
                    <li>Identify low-stock items before they affect sales</li>
                  </ul>
                </div>
              </div>

              <div className="lg:border-l lg:border-gray-200 lg:pl-6">
                <div className="space-y-2 mb-8">
                  <div className="w-6 h-[2px] bg-[#146fb5] mb-2" />
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-[#146fb5]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Billing & Payments</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Accept multiple payment modes with smooth checkout flow</li>
                    <li>Maintain clear billing records for reconciliation and reporting</li>
                  </ul>
                </div>
                <div className="space-y-2 mb-8">
                  <div className="w-6 h-[2px] bg-[#146fb5] mb-2" />
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#146fb5]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Customer Management</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Manage customer details from billing to repeat engagement</li>
                    <li>Improve retention through consistent communication touchpoints</li>
                  </ul>
                </div>
              </div>

              <div className="lg:border-l lg:border-gray-200 lg:pl-6">
                <div className="space-y-2 mb-8">
                  <div className="w-6 h-[2px] bg-[#146fb5] mb-2" />
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-5 h-5 text-[#146fb5]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Offers & Promotions</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Run targeted offers directly from your billing workflow</li>
                    <li>Keep campaigns aligned with customer purchase behavior</li>
                  </ul>
                </div>
                <div className="space-y-2 mb-8">
                  <div className="w-6 h-[2px] bg-[#146fb5] mb-2" />
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-[#146fb5]" />
                    <h3 className="text-lg sm:text-xl font-semibold text-black">E-Billing & Communication</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                    <li>Send bills instantly on WhatsApp after every transaction</li>
                    <li>Share updates and follow-ups without extra manual effort</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
