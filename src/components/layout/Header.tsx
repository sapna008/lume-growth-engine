import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Search, HelpCircle, Receipt, Users, Gift, CreditCard, BarChart3, Smartphone, Cpu, ShoppingBag, Package, BookOpen, FileText, Video, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import apeirosLogo from "@/assets/apeiros-logo.jpg";

const navigation = [
  { name: "For Retailers", href: "/for-retailers" },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Smart Billing", href: "/solutions/smart-billing", icon: Receipt, desc: "Digital billing with engagement" },
      { name: "POS Integration", href: "/solutions/pos-integration", icon: Cpu, desc: "Connect any existing POS" },
      { name: "Customer Analytics", href: "/solutions/customer-analytics", icon: Users, desc: "Understand your customers" },
      { name: "Loyalty & Coupons", href: "/solutions/loyalty-coupons", icon: Gift, desc: "Reward repeat customers" },
      { name: "Campaign Management", href: "/solutions/campaign-management", icon: BarChart3, desc: "Multi-channel marketing" },
      { name: "Reports & Dashboard", href: "/solutions/reports-dashboard", icon: BarChart3, desc: "Business insights" },
      { name: "Hyperlocal Commerce", href: "/solutions/hyperlocal-commerce", icon: ShoppingBag, desc: "Quick commerce ready" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Web POS", href: "/products/web-pos", icon: Smartphone, desc: "Complete retail POS" },
      { name: "POS Plugin", href: "/products/pos-plugin", icon: Cpu, desc: "Connect existing systems" },
      { name: "Analytics Dashboard", href: "/products/analytics-dashboard", icon: BarChart3, desc: "Business intelligence" },
      { name: "Campaign Manager", href: "/products/campaign-manager", icon: Package, desc: "Marketing automation" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Case Studies", href: "/resources/case-studies", icon: FileText, desc: "Success stories" },
      { name: "Blog", href: "/resources/blog", icon: BookOpen, desc: "Retail insights" },
      { name: "Guides", href: "/resources/guides", icon: BookOpen, desc: "How-to tutorials" },
      { name: "Videos", href: "/resources/videos", icon: Video, desc: "Watch & learn" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
];

const searchablePages = [
  { name: "Home", href: "/", keywords: ["home", "main", "start", "apeiros", "lume"] },
  { name: "For Retailers", href: "/for-retailers", keywords: ["retailers", "shops", "stores", "business", "kirana", "दुकान"] },
  { name: "Solutions", href: "/solutions", keywords: ["solutions", "features", "tools"] },
  { name: "Smart Billing", href: "/solutions/smart-billing", keywords: ["billing", "invoice", "gst", "bill", "receipt", "smart"] },
  { name: "POS Integration", href: "/solutions/pos-integration", keywords: ["pos", "integration", "plugin", "connect"] },
  { name: "Customer Analytics", href: "/solutions/customer-analytics", keywords: ["customer", "analytics", "data", "ग्राहक"] },
  { name: "Loyalty & Coupons", href: "/solutions/loyalty-coupons", keywords: ["loyalty", "coupons", "rewards", "offers", "points"] },
  { name: "Campaign Management", href: "/solutions/campaign-management", keywords: ["campaigns", "marketing", "promotion"] },
  { name: "Reports & Dashboard", href: "/solutions/reports-dashboard", keywords: ["reports", "dashboard", "insights", "analytics"] },
  { name: "Hyperlocal Commerce", href: "/solutions/hyperlocal-commerce", keywords: ["hyperlocal", "commerce", "delivery", "quick"] },
  { name: "Products", href: "/products", keywords: ["products", "apps", "software"] },
  { name: "Pricing", href: "/pricing", keywords: ["pricing", "plans", "cost", "price", "free", "कीमत"] },
  { name: "Help Center", href: "/help", keywords: ["help", "support", "faq", "tutorial"] },
  { name: "Contact", href: "/contact", keywords: ["contact", "support", "email", "call"] },
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchablePages>([]);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = searchablePages.filter(
        (page) =>
          page.name.toLowerCase().includes(query) ||
          page.keywords.some((keyword) => keyword.includes(query))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchSelect = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    navigate(href);
  };

  const handleMouseEnter = (name: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setHoveredMenu(name);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container-wide flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src={apeirosLogo} 
              alt="Apeiros AI" 
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`gap-1 text-sm font-medium ${hoveredMenu === item.name ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${hoveredMenu === item.name ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  <AnimatePresence>
                    {hoveredMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-border/50 p-2 min-w-[280px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15">
                                <child.icon className="w-4.5 h-4.5 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-sm text-foreground">{child.name}</p>
                                <p className="text-xs text-muted-foreground">{child.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`text-sm font-medium ${isActive(item.href) ? "text-primary bg-primary/5" : "text-foreground/80"}`}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Button>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-1.5">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-foreground h-9 w-9"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-9 w-9" asChild>
              <Link to="/help">
                <HelpCircle className="w-4 h-4" />
              </Link>
            </Button>
            
            {/* Language Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('lang')}
              onMouseLeave={handleMouseLeave}
            >
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground h-9 px-2">
                <Globe className="w-4 h-4" />
                <span className="text-xs">{selectedLang}</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
              
              <AnimatePresence>
                {hoveredMenu === 'lang' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 pt-2"
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-border/50 p-1 min-w-[140px]">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setSelectedLang(lang.code)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            selectedLang === lang.code 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'hover:bg-secondary/50'
                          }`}
                        >
                          {lang.code} - {lang.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Button variant="cta" size="sm" className="ml-2" asChild>
              <Link to="/trial">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
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
              <div className="container-wide py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block py-2.5 px-3 text-foreground font-medium hover:bg-secondary/50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center gap-2 py-2 px-3 text-muted-foreground text-sm hover:text-foreground hover:bg-secondary/30 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <child.icon className="w-4 h-4" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-2 px-3 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>Language:</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setSelectedLang(lang.code)}
                          className={`px-2.5 py-1 rounded text-xs font-medium ${
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

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg">Search</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              ref={searchInputRef}
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base"
            />
            {searchResults.length > 0 && (
              <div className="space-y-0.5 max-h-64 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.href}
                    onClick={() => handleSearchSelect(result.href)}
                    className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-3"
                  >
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{result.name}</span>
                  </button>
                ))}
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <p className="text-center text-muted-foreground py-4 text-sm">
                No results for "{searchQuery}"
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
