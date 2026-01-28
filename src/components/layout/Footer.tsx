import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import apeirosLogo from "@/assets/apeiros-logo.png";

const footerLinks = {
  company: [
    { nameKey: "footer.about", href: "/company/about" },
    { nameKey: "footer.careers", href: "/company/careers" },
    { nameKey: "footer.investors", href: "/company/investors" },
    { nameKey: "footer.contact", href: "/contact" },
  ],
  products: [
    { nameKey: "footer.webPos", href: "/products/web-pos" },
    { nameKey: "footer.posPlugin", href: "/products/pos-plugin" },
    { nameKey: "footer.analytics", href: "/products/analytics-dashboard" },
    { nameKey: "footer.campaign", href: "/products/campaign-manager" },
  ],
  solutions: [
    { nameKey: "footer.smartBilling", href: "/solutions/smart-billing" },
    { nameKey: "footer.customerAnalytics", href: "/solutions/customer-analytics" },
    { nameKey: "footer.loyalty", href: "/solutions/loyalty-coupons" },
    { nameKey: "footer.campaignManagement", href: "/solutions/campaign-management" },
  ],
  resources: [
    { nameKey: "footer.caseStudies", href: "/resources/case-studies" },
    { nameKey: "footer.blog", href: "/resources/blog" },
    { nameKey: "footer.guides", href: "/resources/guides" },
    { nameKey: "footer.helpCenter", href: "/help" },
  ],
  legal: [
    { nameKey: "footer.privacy", href: "/privacy-policy" },
    { nameKey: "footer.terms", href: "/terms-conditions" },
  ],
};

export function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-blue-900 text-white">
      {/* Links Section */}
      <div className="container-wide py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={apeirosLogo} alt="Apeiros AI" className="h-8 w-auto rounded" />
            </Link>
            <p className="text-white/80 text-sm mb-4 max-w-xs leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@apeiros.ai" className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4" />
                hello@apeiros.ai
              </a>
              <a href="tel:+918001234567" className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" />
                +91 800-123-4567
              </a>
              <div className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>{language === 'HI' ? 'अहमदाबाद, भारत' : 'Ahmedabad, India'}</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.nameKey}>
                  <Link to={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">{t('footer.products')}</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.nameKey}>
                  <Link to={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">{t('footer.solutions')}</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.nameKey}>
                  <Link to={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-sm text-white">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.nameKey}>
                  <Link to={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {t(link.nameKey)}
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
          <p className="text-white/80 text-xs">
            © {new Date().getFullYear()} Apeiros AI. {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.nameKey} 
                  to={link.href} 
                  className="text-white/80 hover:text-white text-xs transition-colors"
                >
                  {t(link.nameKey)}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
