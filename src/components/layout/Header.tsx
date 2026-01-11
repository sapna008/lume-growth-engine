import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Search, HelpCircle } from "lucide-react";
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
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Digital Billing", href: "/solutions/digital-billing" },
      { name: "Customer Capture", href: "/solutions/customer-capture" },
      { name: "Loyalty & Campaigns", href: "/solutions/loyalty-campaigns" },
      { name: "Credit Management", href: "/solutions/credit-management" },
      { name: "Reports & Analytics", href: "/solutions/analytics" },
    ],
  },
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
  { name: "Pricing", href: "/pricing" },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Blog", href: "/resources/blog" },
      { name: "Guides", href: "/resources/guides" },
      { name: "Videos", href: "/resources/videos" },
    ],
  },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "हिंदी", name: "Hindi" },
  { code: "ગુજરાતી", name: "Gujarati" },
  { code: "मराठी", name: "Marathi" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container-wide flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-foreground leading-tight">Apeiros AI</span>
          </div>
        </Link>

        {/* Desktop Navigation - Center */}
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
                className={isActive(item.href) ? "text-primary bg-primary/5" : ""}
              >
                <Link to={item.href}>{item.name}</Link>
              </Button>
            )
          )}
        </div>

        {/* Right Side - Utilities & CTA */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Search */}
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="w-4 h-4" />
          </Button>
          
          {/* Help */}
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/help">
              <HelpCircle className="w-4 h-4" />
            </Link>
          </Button>
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
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
                  {lang.code} - {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Primary CTA */}
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
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-foreground font-medium hover:text-primary"
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
              
              {/* Mobile Language & CTA */}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span>Language:</span>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLang(lang.code)}
                        className={`px-2 py-1 rounded text-xs ${
                          selectedLang === lang.code 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>
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
