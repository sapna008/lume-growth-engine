import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Lume Retail App", href: "/products/lume-retail-app" },
    { name: "mPOS", href: "/products/mpos" },
    { name: "Consumer App", href: "/products/consumer-app" },
    { name: "Supplier App", href: "/products/supplier-app" },
  ],
  solutions: [
    { name: "Digital Billing", href: "/solutions/digital-billing" },
    { name: "Customer Capture", href: "/solutions/customer-capture" },
    { name: "Credit Management", href: "/solutions/credit-management" },
    { name: "Analytics & Reports", href: "/solutions/analytics" },
  ],
  resources: [
    { name: "Guides & FAQs", href: "/resources/guides" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Blog", href: "/resources/blog" },
    { name: "Videos", href: "/resources/videos" },
  ],
  company: [
    { name: "About Us", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Contact Us", href: "/company/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Ready to Transform Your Retail Business?
              </h3>
              <p className="text-white/70">
                Join 10,000+ retailers across India who trust Lume.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/trial"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-wide py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-xl">Lume</span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Empowering 13M+ Indian retailers to compete with quick commerce through 
              simple, powerful digital tools.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@apeiros.ai" className="flex items-center gap-2 text-white/60 hover:text-white text-sm">
                <Mail className="w-4 h-4" />
                hello@apeiros.ai
              </a>
              <a href="tel:+918001234567" className="flex items-center gap-2 text-white/60 hover:text-white text-sm">
                <Phone className="w-4 h-4" />
                +91 800-123-4567
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Apeiros AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
