import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Users, 
  TrendingUp, 
  Shield, 
  Smartphone,
  BarChart3,
  Receipt,
  CreditCard,
  MessageSquare,
  Star,
  CheckCircle2,
  Store,
  ShoppingBag,
  Zap,
  IndianRupee,
  RefreshCw,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import heroBanner from "@/assets/hero-banner.png";

const stats = [
  { value: "10,000+", label: "Retailers Trust Us" },
  { value: "₹50Cr+", label: "Transactions Processed" },
  { value: "25%", label: "Average Revenue Increase" },
  { value: "4.8/5", label: "Customer Rating" },
];

const painPoints = [
  { icon: Users, text: "Losing customers to quick commerce apps" },
  { icon: Receipt, text: "Manual billing wastes time & causes errors" },
  { icon: Target, text: "No way to track or engage customers" },
  { icon: BarChart3, text: "No visibility into business performance" },
];

const benefits = [
  {
    icon: IndianRupee,
    title: "Save Money",
    description: "Reduce billing errors, track inventory better, and cut operational costs with digital tools.",
  },
  {
    icon: RefreshCw,
    title: "Increase Repeat Sales",
    description: "Build customer loyalty with personalized offers and engagement that brings them back.",
  },
  {
    icon: Users,
    title: "Capture Customers Automatically",
    description: "Every transaction builds your customer database. Know who buys, what they buy, when they buy.",
  },
  {
    icon: BarChart3,
    title: "Track Business Easily",
    description: "Real-time dashboard shows sales, profits, inventory — everything you need to make smart decisions.",
  },
];

const howItWorks = [
  { step: "1", title: "Download the App", description: "Free download from Play Store. Setup takes just 5 minutes." },
  { step: "2", title: "Add Your Products", description: "Scan barcodes or add manually. Bulk import available." },
  { step: "3", title: "Start Billing", description: "Create digital bills and capture customer data automatically." },
  { step: "4", title: "Grow Your Business", description: "Use insights and engagement tools to increase repeat customers." },
];

const industries = [
  { name: "Grocery & Kirana", icon: Store, count: "5,000+ stores" },
  { name: "Fashion & Apparel", icon: ShoppingBag, count: "2,000+ stores" },
  { name: "Electronics", icon: Zap, count: "1,500+ stores" },
  { name: "General Stores", icon: IndianRupee, count: "1,500+ stores" },
];

const testimonials = [
  {
    quote: "Lume helped me increase my repeat customers by 40%. The credit management feature alone saved me ₹50,000 in bad debts.",
    author: "Ramesh Kumar",
    role: "Kirana Store Owner, Delhi",
    rating: 5,
  },
  {
    quote: "Finally, a billing app that understands Indian retailers. Simple to use, and my customers love getting digital bills.",
    author: "Priya Sharma",
    role: "Fashion Boutique, Mumbai",
    rating: 5,
  },
  {
    quote: "I can now track my daily sales from anywhere. The insights helped me stock the right products at the right time.",
    author: "Mohammed Ali",
    role: "Electronics Shop, Hyderabad",
    rating: 5,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 overflow-hidden">
        <div className="hero-gradient text-white">
          <div className="container-wide py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-medium">Trusted by 10,000+ retailers across India</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                  Grow Your Retail Business with{" "}
                  <span className="text-accent">Digital Tools</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                  Simple billing, smart customer management, and real-time insights — 
                  everything you need to compete with quick commerce and grow your store.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" variant="hero" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                    <Link to="/trial">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="hero-outline" asChild>
                    <Link to="/demo">
                      <Play className="w-5 h-5 mr-1" />
                      Watch 2-min Demo
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/30 flex items-center justify-center shadow-lg">
                        <Users className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-accent">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/70">4.8/5 from 2,000+ reviews</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img 
                    src={heroBanner} 
                    alt="Lume retail management app interface showing billing and analytics" 
                    className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/20 rounded-3xl blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white shadow-xl relative z-10 -mt-8 mx-4 lg:mx-auto max-w-5xl rounded-2xl border border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 text-center group hover:bg-primary/5 transition-colors rounded-xl"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-semibold text-sm uppercase tracking-wider mb-4">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                Local Retailers Are Losing Customers
              </h2>
              <p className="text-lg text-muted-foreground">
                While apps deliver in 10 minutes, local stores struggle with manual processes, 
                no customer data, and zero digital presence.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4 shadow-inner">
                  <point.icon className="w-7 h-7 text-red-600" />
                </div>
                <p className="text-sm text-red-800 font-medium">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                Lume Gives You the Digital Edge
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Transform your store with digital billing, customer management, and real-time insights — 
                all from your smartphone. No expensive hardware, no technical skills needed.
              </p>
              <Button size="lg" variant="cta" asChild className="shadow-lg">
                <Link to="/for-retailers">
                  See How It Works
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section (NOT features) */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                What You Get with Lume
              </h2>
              <p className="text-lg text-muted-foreground">
                Focus on outcomes, not features. Here's how Lume helps your business grow.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all flex gap-6 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                Start Selling Smarter in 4 Simple Steps
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative group"
              >
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="cta" asChild className="shadow-lg">
              <Link to="/trial">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Metrics & Logos */}
      <section className="section-padding-sm bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Trusted by Retailers
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-3">
              Join 10,000+ Stores Using Lume
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["BigMart", "QuickStop", "CityStore", "LocalBest", "ShopEasy", "RetailHub"].map((name) => (
              <div key={name} className="px-8 py-4 bg-white rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
                <span className="font-bold text-muted-foreground text-lg">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding-sm hero-gradient text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Built for All Types of Retail Stores</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all border border-white/10 hover:border-white/30 group"
              >
                <industry.icon className="w-10 h-10 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{industry.name}</h3>
                <p className="text-sm text-white/70">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
                Retailers Love Lume
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of store owners who have transformed their business with Lume.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-md">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10" />
        <div className="container-tight text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Grow Your Retail Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join 10,000+ retailers who trust Lume. Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" asChild className="shadow-xl">
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
