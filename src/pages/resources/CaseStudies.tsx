import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import successStoryIcon from "@/assets/success-story.png";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Clock, 
  Award, 
  BarChart3,
  MessageSquare,
  Gift,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Target,
  Lightbulb,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    storeName: "Golden Steel",
    location: "Thane",
    businessType: "Electronics & Home Appliances Store",
    icon: Store,
    challenge: [
      "Billing was slow and manual",
      "No customer data captured",
      "No repeat purchase tracking"
    ],
    solution: [
      "Bills sent via WhatsApp and SMS",
      "Customer details captured automatically",
      "Simple discount campaigns sent weekly"
    ],
    results: [
      "40% increase in repeat customers",
      "Daily billing time reduced by 1.5 hours",
      "Customers began returning within 7–10 days"
    ],
    takeaway: "Digital bills and campaigns turned casual shoppers into regular customers."
  },
  {
    id: 2,
    storeName: "Surabhi",
    location: "Thane",
    businessType: "Fashion & Apparel",
    icon: Store,
    challenge: [
      "Inventory and returns hard to manage",
      "No visibility on popular sizes/colors",
      "Marketing was random and ineffective"
    ],
    solution: [
      "Used analytics dashboard to track sales trends",
      "Launched tailored SMS/WhatsApp offers for slow-moving stock",
      "Loyalty points introduced for repeat buyers"
    ],
    results: [
      "₹50,000 saved monthly in inventory costs",
      "30% reduction in returns",
      "Push marketing led to 20% more repeat purchases"
    ],
    takeaway: "Insights + targeted campaigns = smart clearance and loyalty."
  },
  {
    id: 3,
    storeName: "Geonet IT Mall - HP World",
    location: "Mumbai,Pune",
    businessType: "Electronics Store",
    icon: Store,
    challenge: [
      "Billing errors during peak hours",
      "Warranty and service reminders handled manually",
      "No single system to manage high-value products"
    ],
    solution: [
      "Prompt warranty tracking within bills",
      "Auto SMS reminders for service due",
      "Fast billing templates reduced errors"
    ],
    results: [
      "2 hours daily saved on billing",
      "Customer satisfaction improved",
      "Digital reminders boosted aftermarket sales"
    ],
    takeaway: "Operational automation gives time back to business owners."
  }
];

const testimonials = [
  {
    quote: "Lume changed how we see customers — now we know who comes back and why.",
    author: "Golden Steel",
    location: "Thane"
  },
  {
    quote: "We sell more because we send personalized offers.",
    author: "Surabhi",
    location: "Style Corner, Pune"
  },
  {
    quote: "Billing is faster and cleaner — customers love it.",
    author: "Geonet IT Mall",
    location: "Mumbai,Pune"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-[#eaf2f8] to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4">
                <img 
                  src={successStoryIcon} 
                  alt="Success Story" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold" style={{ color: '#1b181f' }}>
                  Customer Success Stories
                </h1>
              </div>
              <p className="text-xl sm:text-2xl mb-6 sm:mb-8" style={{ color: '#4f4f4f' }}>
                How Lume is Transforming Retail Businesses
              </p>
              <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#4f4f4f' }}>
                Retailers across India are using Lume to modernize their stores, increase sales, retain customers, and run smart campaigns — all without changing their existing systems. Below are real stories of how small, medium, and large retailers have unlocked growth with Lume.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <div className="space-y-8 sm:space-y-10">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#eaf2f8] to-white border-2 border-[#146fb5]/20">
                        <study.icon className="w-8 h-8" style={{ color: '#146fb5' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1b181f' }}>
                            {study.storeName}
                          </h2>
                          <MapPin className="w-5 h-5" style={{ color: '#4f4f4f' }} />
                          <span className="text-lg" style={{ color: '#4f4f4f' }}>{study.location}</span>
                        </div>
                        <p className="text-base sm:text-lg font-medium" style={{ color: '#146fb5' }}>
                          {study.businessType}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                      {/* Challenge */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5" style={{ color: '#146fb5' }} />
                          <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                            Challenge
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {study.challenge.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Lightbulb className="w-5 h-5" style={{ color: '#146fb5' }} />
                          <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                            Solution with Lume
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {study.solution.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#146fb5' }} />
                              <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="w-5 h-5" style={{ color: '#146fb5' }} />
                          <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#1b181f' }}>
                            Results
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {study.results.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Zap className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#146fb5' }} />
                              <span className="text-sm sm:text-base leading-relaxed font-medium" style={{ color: '#1b181f' }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-start gap-3 bg-gradient-to-r from-[#eaf2f8] to-white rounded-lg p-4">
                        <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <p className="text-base sm:text-lg font-medium" style={{ color: '#1b181f' }}>
                          <strong>Key takeaway:</strong> {study.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Stories Matter */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: '#1b181f' }}>
                Why These Stories Matter
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4f4f4f' }}>
                Every retailer had a different problem, but the pattern is the same:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Manual billing or lack of data held them back",
                  "Digital bills + automated engagement increased retention",
                  "Analytics gave actionable insights",
                  "Campaigns turned data into repeat business"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#eaf2f8] rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                    <span className="text-base leading-relaxed" style={{ color: '#1b181f' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-center" style={{ color: '#4f4f4f' }}>
                <strong style={{ color: '#1b181f' }}>Lume's goal is to transform every retail store</strong> — from traditional to data-enabled growth businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Snapshot Comparison */}
        <section className="section-padding bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: '#1b181f' }}>
                Snapshot Comparison
              </h2>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>Store</th>
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>Main Problem</th>
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>Lume Impact</th>
                      <th className="text-left py-4 px-4 font-bold text-base sm:text-lg" style={{ color: '#1b181f' }}>Key Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>Golden Steel</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>No customer data</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>WhatsApp bills + campaigns</td>
                      <td className="py-4 px-4 font-medium" style={{ color: '#146fb5' }}>40% repeat growth</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>Surabhi</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>Inventory issues</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>Analytics + offers</td>
                      <td className="py-4 px-4 font-medium" style={{ color: '#146fb5' }}>₹50k costs saved</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold" style={{ color: '#1b181f' }}>Geonet IT Mall</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>Warranty & errors</td>
                      <td className="py-4 px-4" style={{ color: '#4f4f4f' }}>Auto reminders</td>
                      <td className="py-4 px-4 font-medium" style={{ color: '#146fb5' }}>2 hrs saved daily</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: '#1b181f' }}>
                Retailer Testimonials
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-[#eaf2f8] to-white rounded-xl p-6 border border-gray-100"
                  >
                    <MessageSquare className="w-8 h-8 mb-4" style={{ color: '#146fb5' }} />
                    <p className="text-base leading-relaxed mb-4 italic" style={{ color: '#4f4f4f' }}>
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm font-semibold" style={{ color: '#1b181f' }}>
                      — {testimonial.author}, {testimonial.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1b181f' }}>
                Ready to be our next success story?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  className="bg-[#146fb5] text-white hover:bg-[#115a94] font-semibold px-8 py-6 text-lg rounded-lg"
                >
                  <Link to="/book-demo">Book a Demo</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#146fb5] text-[#146fb5] hover:bg-[#eaf2f8] font-semibold px-8 py-6 text-lg rounded-lg"
                >
                  <Link to="/pricing">See Pricing Plans</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Closing */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-base sm:text-lg leading-relaxed text-center" style={{ color: '#4f4f4f' }}>
                Lume case studies help you explore real ways retailers are growing with smart billing, customer insights, loyalty tools, and multi-channel campaigns. If your store isn't seeing repeat customers or lacks visibility into sales performance, these success patterns can guide your next steps.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

