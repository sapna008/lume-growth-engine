import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  LineChart,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import dashboardEnglish from "@/assets/hero-banner/dashboard-english.png";
import quickBillImage from "@/assets/help-guide/billing-guides/step-2-quickbill.png";
import gyanPhoto from "@/assets/about-us/gyan.jpg";
import seemaPhoto from "@/assets/about-us/seema.jpg";
import bgImage from "@/assets/bg-1.avif";

export default function Startup() {
  useSEO(
    "Startup Overview – Apeiros AI & Lume Retail SaaS",
    "Public overview of Apeiros AI, the Lume retail SaaS platform, technical architecture, and planned Google Cloud usage."
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero / Company Header */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <img
            src={bgImage}
            alt="Retail technology background"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-[#e0f2fe]/70" />
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 mb-3">
                Startup Overview · Apeiros AI
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0f172a] via-[#146fb5] to-[#eab308] bg-clip-text text-transparent">
                AI-Powered Retail SaaS Platform for Billing, Customer Engagement & Analytics
              </h1>
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl">
                Apeiros AI is a cloud-native SaaS startup building AI-powered software for retailers.
                Our flagship platform Lume helps retailers manage billing, customer engagement, loyalty
                programs, and analytics from a unified dashboard.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Company Overview</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-3">
                Apeiros AI is a cloud-native SaaS startup building AI-powered software for retailers.
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-3">
                Our platform Lume helps retailers manage billing, customer engagement, loyalty programs,
                and analytics from a unified dashboard.
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                The platform transforms retail billing data into customer intelligence and automated
                marketing workflows, enabling retailers to move from simple billing systems to an
                intelligent retail operating platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-[1.4fr,1fr] gap-8 md:gap-10 items-start"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Product Overview</h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                  Lume is a retail intelligence platform designed for modern retailers.
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 mb-3">
                  Key Capabilities
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                  <li>• Smart billing &amp; POS integrations</li>
                  <li>• Digital bills via WhatsApp, SMS, and Email</li>
                  <li>• Customer loyalty &amp; rewards</li>
                  <li>• Campaign automation</li>
                  <li>• Retail analytics &amp; business insights</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white shadow-sm border border-slate-200 p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">
                  <Sparkles className="w-4 h-4 text-[#146fb5]" />
                  <span>Platform Snapshot</span>
                </div>
                <p className="text-sm text-slate-700">
                  Lume connects billing, customer data, campaigns, and analytics into one intelligent
                  retail platform that works with existing store systems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Screenshots */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-wide max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Product Screenshots</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                The following live screenshots are from the Lume web dashboards used by retailers today.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <figure className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
                  <img
                    src={dashboardEnglish}
                    alt="Lume retail dashboard overview"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm text-slate-700">
                    Retail dashboard – high-level view of sales, customers, and campaigns, used daily by
                    retailers to understand performance and track repeat business.
                  </figcaption>
                </figure>
                <figure className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
                  <img
                    src={quickBillImage}
                    alt="Lume Quick Bill screen"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm text-slate-700">
                    Quick Bill – simple billing flow from our Billing Guide, where retailers can create a
                    bill by filling only the mandatory fields while optional fields power richer reports
                    and insights later.
                  </figcaption>
                </figure>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container-wide max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Technical Architecture</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                The Lume platform is built using a cloud-native microservices architecture.
              </p>

              <div className="grid lg:grid-cols-[2fr,1.5fr] gap-8 lg:gap-10 items-start">
                <div className="space-y-3 text-sm sm:text-base text-slate-700">
                  <p>
                    Core backend services are written in{" "}
                    <span className="font-semibold">Node.js</span>, with{" "}
                    <span className="font-semibold">MongoDB</span> as the primary data store and{" "}
                    <span className="font-semibold">Redis</span> for caching and queues. Frontend
                    dashboards are built using <span className="font-semibold">Next.js</span> and React.
                  </p>
                  <p>
                    All services are containerized and deployed using CI/CD pipelines. The system is
                    designed to be horizontally scalable, fault-tolerant, and observability-friendly.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3">
                      <Server className="w-5 h-5 text-[#146fb5] mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Application Services</div>
                        <div className="text-xs text-slate-600">
                          Node.js microservices for billing ingestion, customer profiles, loyalty engine,
                          and campaign orchestration.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3">
                      <Database className="w-5 h-5 text-[#146fb5] mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Data Layer</div>
                        <div className="text-xs text-slate-600">
                          MongoDB for transactional and customer data, Redis for sessions, caching, and
                          background queues.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3">
                      <MonitorSmartphone className="w-5 h-5 text-[#146fb5] mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Web Dashboards</div>
                        <div className="text-xs text-slate-600">
                          Next.js dashboards for retailers to view analytics, manage campaigns, and
                          configure loyalty programs.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 flex gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#146fb5] mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Security &amp; Observability</div>
                        <div className="text-xs text-slate-600">
                          API gateway, authentication, logging, and monitoring integrated across services.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simple architecture diagram */}
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
                    High-Level Architecture
                  </p>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#146fb5]" />
                      <span>Billing sources (POS, web, integrations) send data into Lume Ingestion APIs.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#146fb5]" />
                      <span>
                        Ingestion services normalise transactions and push them into the customer &amp;
                        loyalty engine.
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LineChart className="w-4 h-4 text-[#146fb5]" />
                      <span>
                        Analytics and segmentation services compute KPIs, cohorts, and campaign audiences.
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-[#146fb5]" />
                      <span>
                        Campaign services trigger WhatsApp/SMS/Email messages and feed results back into
                        the analytics layer.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Google Cloud Usage */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Planned Google Cloud Usage</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                We plan to scale our infrastructure on Google Cloud using the following services:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
                  <Cloud className="w-5 h-5 text-[#146fb5] mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Compute &amp; Orchestration</div>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                      <li>• Google Compute Engine / Google Kubernetes Engine (GKE)</li>
                      <li>• Autoscaling for microservices</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
                  <Database className="w-5 h-5 text-[#146fb5] mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Managed Data Stores</div>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                      <li>• Cloud SQL / managed Mongo-compatible databases</li>
                      <li>• Cloud Storage for assets &amp; exports</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
                  <Server className="w-5 h-5 text-[#146fb5] mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Networking &amp; Security</div>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                      <li>• Cloud Load Balancing</li>
                      <li>• Secret Manager for credentials</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex gap-3">
                  <LineChart className="w-5 h-5 text-[#146fb5] mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">DevOps &amp; Observability</div>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm">
                      <li>• Cloud Build for CI/CD pipelines</li>
                      <li>• Cloud Monitoring &amp; Logging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Founding Team</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Gyan profile */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#146fb5]/20 bg-white flex-shrink-0">
                      <img
                        src={gyanPhoto}
                        alt="Gyanendra Singh – Founder & Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold text-slate-900">Gyanendra Singh</div>
                      <div className="text-xs font-medium text-[#146fb5] uppercase tracking-[0.18em]">
                        Founder &amp; Director
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    23+ years across retail, POS, fintech, payments, loyalty and digital platforms. Built and
                    scaled FuturePay at Future Group to 25M+ users and has led zero‑downtime migrations across
                    thousands of stores.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/gyanendra-singh-615a5a17/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center text-xs font-medium text-[#146fb5] hover:underline"
                  >
                    View LinkedIn profile
                  </a>
                </div>

                {/* Seema profile */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#146fb5]/20 bg-white flex-shrink-0">
                      <img
                        src={seemaPhoto}
                        alt="Seema Singh – Director"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold text-slate-900">Seema Singh</div>
                      <div className="text-xs font-medium text-[#146fb5] uppercase tracking-[0.18em]">
                        Director
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    15+ years across QA, retail systems, POS platforms, loyalty programs, fintech and digital
                    applications. Acts as the execution anchor keeping Lume stable, scalable, and
                    production‑ready.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/seema-singh-80585617/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center text-xs font-medium text-[#146fb5] hover:underline"
                  >
                    View LinkedIn profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Vision</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Our mission is to help millions of retailers transition from traditional billing systems
                to intelligent retail platforms powered by AI and data insights. We want Lume to become
                the default growth platform for everyday retail stores.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container-wide max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Platform Capabilities
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-3">
                Lume is already being used by retailers in production to run billing-linked engagement,
                loyalty and analytics – the core capabilities of the platform are:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                <li>• Cloud-based POS billing</li>
                <li>• Digital customer receipts</li>
                <li>• Automated loyalty rewards</li>
                <li>• Customer segmentation</li>
                <li>• Campaign automation</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

