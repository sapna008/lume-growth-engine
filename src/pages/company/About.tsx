import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const values = [
  {
    icon: Heart,
    title: "Retailer First",
    description: "Every decision we make starts with one question: Does this help our retailers win?",
  },
  {
    icon: Lightbulb,
    title: "Simple by Design",
    description: "We believe powerful technology should be easy to use. Complexity is the enemy.",
  },
  {
    icon: Users,
    title: "Local Impact",
    description: "We're building for India's 13M+ local retailers who are the backbone of our communities.",
  },
  {
    icon: TrendingUp,
    title: "Growth Obsessed",
    description: "We measure our success by our retailers' growth. Your wins are our wins.",
  },
];

const timeline = [
  { year: "2022", title: "Founded", description: "Apeiros AI founded with a mission to empower local retail" },
  { year: "2023", title: "Lume Launch", description: "Launched Lume Retail App with 1,000 beta users" },
  { year: "2024", title: "Scaling Up", description: "Reached 10,000+ retailers across 50+ cities in India" },
  { year: "2025", title: "The Future", description: "Expanding product suite and entering new markets" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 hero-gradient text-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering India's{" "}
                <span className="text-emerald-400">Local Retailers</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                We're on a mission to give 13 million local retailers the digital tools 
                they need to compete, grow, and thrive in the modern economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-2xl p-8"
            >
              <Target className="w-12 h-12 text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
              <p className="text-navy-700 text-lg">
                To democratize retail technology by making powerful, easy-to-use digital 
                tools accessible to every local retailer in India — regardless of their 
                size, location, or technical expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy-50 rounded-2xl p-8"
            >
              <Eye className="w-12 h-12 text-navy-600 mb-4" />
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h2>
              <p className="text-navy-700 text-lg">
                A future where every local store has the same technological advantages 
                as the biggest retailers — where family shops don't just survive, 
                but flourish and grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding subtle-gradient">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">
              Our values guide every product decision, customer interaction, and team hire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <value.icon className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Journey</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-emerald-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm text-emerald-600 font-semibold">{item.year}</div>
                  <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Transforming Retail</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a retailer looking to grow or a talented individual 
            wanting to make an impact, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/trial">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link to="/company/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
