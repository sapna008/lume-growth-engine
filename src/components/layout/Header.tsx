import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "For Retailers", href: "/for-retailers" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Lume Retail App", href: "/products/lume-retail-app" },
      { name: "mPOS (Coming Soon)", href: "/products/mpos" },
      { name: "Consumer App (Coming Soon)", href: "/products/consumer-app" },
      { name: "Supplier App (Coming Soon)", href: "/products/supplier-app" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Digital Billing", href: "/solutions/digital-billing" },
      { name: "Customer Capture", href: "/solutions/customer-capture" },
      { name: "Feedback & Engagement", href: "/solutions/feedback-engagement" },
      { name: "Real-time Engagement", href: "/solutions/real-time-engagement" },
      { name: "Credit Management", href: "/solutions/credit-management" },
      { name: "Analytics & Reports", href: "/solutions/analytics" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Guides & FAQs", href: "/resources/guides" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Blog", href: "/resources/blog" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Company",
    href: "/company",
    children: [
      { name: "About Us", href: "/company/about" },
      { name: "Careers", href: "/company/careers" },
      { name: "Contact Us", href: "/company/contact" },
    ],
  },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "HI", name: "हिंदी" },
  { code: "GU", name: "ગુજરાતી" },
  { code: "MR", name: "मराठी" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl text-foreground">Lume</span>
          <span className="text-xs text-muted-foreground font-medium hidden sm:block">by Apeiros AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="nav" size="sm" className="gap-1">
                    {item.name}
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 animate-slide-down">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link to={child.href} className="cursor-pointer">
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.name}
                variant="nav"
                size="sm"
                asChild
                className={isActive(item.href) ? "text-foreground bg-muted" : ""}
              >
                <Link to={item.href}>{item.name}</Link>
              </Button>
            )
          )}
        </div>

        {/* Right Side CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Globe className="w-4 h-4" />
                {selectedLang}
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className="cursor-pointer"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="cta" asChild>
            <Link to="/trial">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-foreground font-medium hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-1.5 text-muted-foreground text-sm hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/trial">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
