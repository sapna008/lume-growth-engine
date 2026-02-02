import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Heart, Users, Zap, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const perks = [
  { icon: Rocket, title: "High Impact Work", description: "Build products used by 250+ retailers daily" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance for you & family" },
  { icon: Users, title: "Great Team", description: "Work with passionate, talented people" },
  { icon: Zap, title: "Fast Growth", description: "Rapid learning and career progression" },
];

const openings = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Ahmedabad / Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Ahmedabad",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Ahmedabad",
    type: "Full-time",
  },
  {
    title: "Customer Success Lead",
    department: "Customer Success",
    location: "Ahmedabad / Remote",
    type: "Full-time",
  },
];

export default function Careers() {
  useSEO('Careers – Join Lume & Apeiros AI', 'Join the Lume team. Build products for Indian retailers. Open roles in engineering, design, marketing.');
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Build the Future of{" "}
                <span className="text-[#4fc3ff]">Retail Technology</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Join a team that's on a mission to empower 13 million local retailers 
                in India. Make an impact at scale.
              </p>
              <Button size="lg" variant="hero" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1b181f] mb-4">Why Join Apeiros AI?</h2>
            <p className="text-lg text-muted-foreground">
              We're building something meaningful, and we want you to be part of it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e3f0ff] flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-7 h-7 text-[#146fb5]" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{perk.title}</h3>
                <p className="text-muted-foreground">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-spacing subtle-gradient">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1b181f] mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity. We're always looking for talented people.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card hover-lift border border-[#146fb5]/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="text-sm bg-[#e3f0ff] text-[#146fb5] px-2 py-0.5 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="cta" asChild>
                    <Link to="/contact">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for great talent.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
