import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Receipt,
  CreditCard,
  BarChart3,
  MessageSquare,
  Clock,
  Shield,
  Store,
  ShoppingBag,
  Zap,
  IndianRupee,
  Star,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const painPoints = [
  {
    problem: "Manual billing wastes hours daily",
    solution: "Digital bills in under 10 seconds",
    icon: Receipt,
  },
  {
    problem: "No customer data or repeat buyers",
    solution: "Auto-capture customer info & history",
    icon: Users,
  },
  {
    problem: "Credit (udhaar) leads to losses",
    solution: "Smart tracking & auto-reminders",
    icon: CreditCard,
  },
  {
    problem: "Can't track real profit margins",
    solution: "Real-time analytics dashboard",
    icon: BarChart3,
  },
  {
    problem: "Customers forget your store",
    solution: "Automated WhatsApp offers",
    icon: MessageSquare,
  },
  {
    problem: "Quick commerce taking customers",
    solution: "Digital tools to compete & win",
    icon: TrendingUp,
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Download & Setup",
    description: "Download from Play Store. Add your store details and products in minutes.",
    time: "5 minutes",
  },
  {
    step: "2",
    title: "Start Billing",
    description: "Create professional GST bills instantly. Customer data captured automatically.",
    time: "10 seconds/bill",
  },
  {
    step: "3",
    title: "Grow Revenue",
    description: "Use insights & engagement tools to bring customers back and increase sales.",
    time: "25% avg. growth",
  },
];

const industries = [
  {
    name: "Grocery & Kirana",
    icon: Store,
    description: "Inventory tracking, expiry alerts, supplier management",
    benefits: ["Barcode scanning", "Stock alerts", "Margin tracking"],
  },
  {
    name: "Fashion & Apparel",
    icon: ShoppingBag,
    description: "Size/color variants, seasonal sales, loyalty programs",
    benefits: ["Product variants", "Season planning", "Customer loyalty"],
  },
  {
    name: "Electronics",
    icon: Zap,
    description: "Warranty tracking, service reminders, high-value billing",
    benefits: ["Warranty management", "Service tracking", "EMI options"],
  },
  {
    name: "General Stores",
    icon: IndianRupee,
    description: "Multi-category management, flexible pricing, credit tracking",
    benefits: ["Mixed inventory", "Quick billing", "Credit management"],
  },
];

const successStories = [
  {
    name: "Vijay Grocery",
    location: "Ahmedabad",
    metric: "40%",
    outcome: "increase in repeat customers",
    quote: "My customers now get WhatsApp bills. They love it and keep coming back.",
  },
  {
    name: "Style Corner",
    location: "Pune",
    metric: "₹50K",
    outcome: "saved in bad debts monthly",
    quote: "The credit tracking feature has transformed how I manage udhaar.",
  },
  {
    name: "Tech Point",
    location: "Bangalore",
    metric: "2 hours",
    outcome: "saved daily on billing",
    quote: "What took hours now takes minutes. I can focus on customers.",
  },
];

const roiCalculation = {
  timeSaved: "2 hours/day",
  creditRecovered: "₹15,000/month",
  repeatCustomers: "30% increase",
  averageROI: "10x return on investment",
};

export default function ForRetailers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 hero-gradient text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">Rated 4.8/5 by 10,000+ retailers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Turn Your Store into a{" "}
                <span className="text-emerald-400">Modern Business</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8">
                Lume gives you everything you need to compete with quick commerce — 
                digital billing, customer insights, and smart tools that work on any phone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="xl" variant="hero" asChild>
                  <Link to="/trial">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button size="xl" variant="hero-outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>

              <p className="text-sm text-white/60 mt-6">
                <Shield className="w-4 h-4 inline mr-1" />
                14-day free trial • No credit card required
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points → Solutions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Why Lume
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
              Your Problems, Solved
            </h2>
            <p className="text-lg text-muted-foreground">
              We built Lume for the real challenges Indian retailers face every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, i) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm line-through mb-2">
                      {item.problem}
                    </p>
                    <p className="text-navy-900 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding subtle-gradient">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
              Go Digital in 3 Easy Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white text-xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-navy-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Industry Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
              Built for Your Type of Store
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you sell groceries, fashion, or electronics — Lume adapts to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-50 rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{industry.name}</h3>
                    <p className="text-muted-foreground mt-1">{industry.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {industry.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-navy-700"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Real Results from Real Retailers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-emerald-400 mb-2">{story.metric}</div>
                <p className="text-white/80 mb-4">{story.outcome}</p>
                <p className="text-white/70 italic mb-4">"{story.quote}"</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold">{story.name}</div>
                  <div className="text-sm text-white/60">{story.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Return on Investment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Lume Pays for Itself in the First Month
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our retailers see measurable ROI within weeks of starting. Here's what you can expect:
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <Calculator className="w-8 h-8 text-emerald-600 mb-3" />
                  <div className="text-2xl font-bold text-navy-900">{roiCalculation.timeSaved}</div>
                  <div className="text-muted-foreground">Time saved on billing</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <CreditCard className="w-8 h-8 text-emerald-600 mb-3" />
                  <div className="text-2xl font-bold text-navy-900">{roiCalculation.creditRecovered}</div>
                  <div className="text-muted-foreground">Credit recovered</div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6">
                  <Users className="w-8 h-8 text-emerald-600 mb-3" />
                  <div className="text-2xl font-bold text-navy-900">{roiCalculation.repeatCustomers}</div>
                  <div className="text-muted-foreground">More repeat customers</div>
                </div>
                <div className="bg-navy-900 rounded-xl p-6 text-white">
                  <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
                  <div className="text-2xl font-bold">{roiCalculation.averageROI}</div>
                  <div className="text-white/70">Average ROI</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Ready to Get Started?</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "14-day free trial with all features",
                  "No credit card required",
                  "Free onboarding support",
                  "Works on any Android phone",
                  "Cancel anytime, no questions asked",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-navy-800">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="xl" variant="cta" className="w-full" asChild>
                <Link to="/trial">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Or <Link to="/pricing" className="text-emerald-600 font-medium hover:underline">view pricing plans</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
