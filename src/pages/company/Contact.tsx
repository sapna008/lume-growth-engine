import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support",
    value: "info@apeirosai.com",
    href: "mailto:info@apeirosai.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Sat, 9am-6pm IST",
    value: "+91 93266 01463",
    href: "tel:+919326601463",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Ahmedabad, Gujarat, India",
    href: "#",
  },
];

export default function Contact() {
  useSEO('Contact – Lume & Apeiros AI', 'Contact Lume: email, phone, address. Sales, support, and partnerships.');
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
              Get in <span className="text-emerald-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Ramesh" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Kumar" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="ramesh@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    How can we help?
                  </label>
                  <Textarea
                    placeholder="Tell us about your store and what you're looking for..."
                    rows={5}
                  />
                </div>
                <Button size="lg" variant="cta" type="submit" className="w-full md:w-auto">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6 mb-8">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl hover:bg-navy-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-emerald-600 font-medium mt-1">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                  <h3 className="font-semibold text-navy-900">WhatsApp Support</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Prefer WhatsApp? Chat with our support team directly for quick assistance.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://wa.me/918001234567" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-6 p-6 border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-navy-600" />
                  <h3 className="font-semibold text-navy-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
