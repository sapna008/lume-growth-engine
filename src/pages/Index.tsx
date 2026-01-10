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
  IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import heroImage from "@/assets/hero-retailer.jpg";
import appMockup from "@/assets/app-mockup.png";

const stats = [
  { value: "10,000+", label: "Retailers Trust Us" },
  { value: "₹50Cr+", label: "Transactions Processed" },
  { value: "25%", label: "Average Revenue Increase" },
  { value: "4.8/5", label: "Customer Rating" },
];

const benefits = [
  {
    icon: Receipt,
    title: "Digital Billing in Seconds",
    description: "Create professional GST-compliant bills instantly. No more paper bills or manual calculations.",
  },
  {
    icon: Users,
    title: "Know Your Customers",
    description: "Capture customer data automatically and build lasting relationships with personalized engagement.",
  },
  {
    icon: CreditCard,
    title: "Manage Credit Smartly",
    description: "Track udhaar digitally, send payment reminders, and reduce credit risk effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Real-time Business Insights",
    description: "See your sales, inventory, and profits on one dashboard. Make smarter decisions daily.",
  },
  {
    icon: MessageSquare,
    title: "Engage & Retain Customers",
    description: "Send offers, collect feedback, and bring customers back with automated engagement tools.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Phone",
    description: "Simple mobile app that works on basic Android phones. No expensive hardware needed.",
  },
];

const howItWorks = [
  { step: "01", title: "Download the App", description: "Free download from Play Store. Setup takes just 5 minutes." },
  { step: "02", title: "Add Your Products", description: "Scan barcodes or add manually. Bulk import available." },
  { step: "03", title: "Start Billing", description: "Create bills, capture customers, and grow your business." },
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
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium">Trusted by 10,000+ retailers across India</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Grow Your Retail Business with{" "}
                  <span className="text-emerald-400">Digital Tools</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                  Simple billing, smart customer management, and real-time insights — 
                  everything you need to compete with quick commerce and grow your store.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" variant="hero" asChild>
                    <Link to="/trial">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="hero-outline" asChild>
                    <Link to="/demo">
                      <Play className="w-5 h-5 mr-1" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-emerald-500/30 border-2 border-white/30 flex items-center justify-center">
                        <Users className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-emerald-400">
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
                    src={appMockup} 
                    alt="Lume retail management app" 
                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-3xl blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white shadow-lg relative z-10 -mt-8 mx-4 lg:mx-auto max-w-5xl rounded-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-navy-900">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
                Local Retailers Are Losing Customers to Quick Commerce
              </h2>
              <p className="text-lg text-muted-foreground">
                While apps deliver in 10 minutes, local stores struggle with manual billing, 
                no customer data, and zero digital presence. It's time to level up.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={heroImage} 
                alt="Indian retailer using digital billing" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Lume Gives You the Digital Edge
                </h3>
                <ul className="space-y-3">
                  {[
                    "Create GST bills in under 10 seconds",
                    "Build a customer database automatically",
                    "Track sales & profits in real-time",
                    "Send WhatsApp offers to bring customers back",
                    "Manage credit (udhaar) without hassle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button size="lg" variant="cta" asChild>
                <Link to="/for-retailers">
                  See How It Works
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding subtle-gradient">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Why Lume
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
                Everything You Need to Run a Modern Store
              </h2>
              <p className="text-lg text-muted-foreground">
                Powerful tools that are simple to use. No technical skills required.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
                Start Selling Smarter in 3 Simple Steps
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-900 text-white text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="cta" asChild>
              <Link to="/trial">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding-sm hero-gradient text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Built for All Types of Retail Stores</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
                <h3 className="font-semibold mb-1">{industry.name}</h3>
                <p className="text-sm text-white/70">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
                Retailers Love Lume
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of store owners who have transformed their business with Lume.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-50 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-navy-800 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-navy-900">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding subtle-gradient">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 10,000+ retailers who have modernized their stores with Lume. 
              Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="cta" asChild>
                <Link to="/trial">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <Shield className="w-4 h-4 inline mr-1" />
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
