import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import apeirosLogo from "@/assets/apeiros-logo.jpg";

const footerLinks = {
  company: [
    { name: "About Apeiros", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Investors", href: "/company/investors" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Web POS", href: "/products/web-pos" },
    { name: "POS Plugin", href: "/products/pos-plugin" },
    { name: "Analytics Dashboard", href: "/products/analytics-dashboard" },
    { name: "Campaign Manager", href: "/products/campaign-manager" },
  ],
  solutions: [
    { name: "Smart Billing", href: "/solutions/smart-billing" },
    { name: "Customer Analytics", href: "/solutions/customer-analytics" },
    { name: "Loyalty & Coupons", href: "/solutions/loyalty-coupons" },
    { name: "Campaign Management", href: "/solutions/campaign-management" },
  ],
  resources: [
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Blog", href: "/resources/blog" },
    { name: "Guides", href: "/resources/guides" },
    { name: "Help Center", href: "/help" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="text-center lg:text-left">
              <h3 className="text-xl lg:text-2xl font-display font-bold mb-1.5">
                Ready to turn billing into growth?
              </h3>
              <p className="text-white/70 text-sm">
                Join 10,000+ retailers across India
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/trial"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-orange-500 transition-all text-sm"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all text-sm"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-wide py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={apeirosLogo} alt="Apeiros AI" className="h-8 w-auto rounded" />
            </Link>
            <p className="text-white/60 text-sm mb-4 max-w-xs leading-relaxed">
              We turn billing into a growth engine for retailers.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@apeiros.ai" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" />
                hello@apeiros.ai
              </a>
              <a href="tel:+918001234567" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +91 800-123-4567
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
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

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Products</h4>
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
            <h4 className="font-semibold mb-3 text-sm">Solutions</h4>
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
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Apeiros AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
