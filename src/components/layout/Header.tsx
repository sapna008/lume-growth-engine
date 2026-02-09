import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Search, HelpCircle, Users, Gift, CreditCard, BarChart3, Smartphone, Cpu, ShoppingBag, Package, BookOpen, FileText, Video, Play } from "lucide-react";
import { ReceiptIndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import apeirosLogo from "@/assets/apeiros-logo.png";

// Navigation items with translation keys
const navigation = [
  { name: "For Retailers", nameKey: "nav.forRetailers", href: "/for-retailers" },
  {
    name: "Solutions",
    nameKey: "nav.solutions",
    href: "/solutions",
    children: [
      { name: "Smart Billing", nameHI: "बुद्धिमान बिलिंग", href: "/solutions/smart-billing", icon: ReceiptIndianRupee, desc: "Digital billing with engagement", descHI: "जुड़ाव के साथ डिजिटल बिलिंग" },
      { name: "POS Integration", nameHI: "POS एकीकरण", href: "/solutions/pos-integration", icon: Cpu, desc: "Connect any existing POS", descHI: "किसी भी मौजूदा POS को जोड़ें" },
      { name: "Customer Analytics", nameHI: "ग्राहक विश्लेषण", href: "/solutions/customer-analytics", icon: Users, desc: "Understand your customers", descHI: "अपने ग्राहकों को समझें" },
      { name: "Loyalty & Coupons", nameHI: "वफादारी और कूपन", href: "/solutions/loyalty-coupons", icon: Gift, desc: "Reward repeat customers", descHI: "नियमित ग्राहकों को पुरस्कार दें" },
      { name: "Campaign Management", nameHI: "अभियान प्रबंधन", href: "/solutions/campaign-management", icon: BarChart3, desc: "Multi-channel marketing", descHI: "बहु-चैनल मार्केटिंग" },
      { name: "Reports & Dashboard", nameHI: "रिपोर्ट्स और डैशबोर्ड", href: "/solutions/reports-dashboard", icon: BarChart3, desc: "Business insights", descHI: "व्यापारिक अंतर्दृष्टि" },
      { name: "Hyperlocal Commerce", nameHI: "स्थानीय वाणिज्य", href: "/solutions/hyperlocal-commerce", icon: ShoppingBag, desc: "Quick commerce ready", descHI: "त्वरित वाणिज्य के लिए तैयार" },
    ],
  },
  {
    name: "Products",
    nameKey: "nav.products",
    href: "/products",
    children: [
      { name: "Lume", nameHI: "ल्यूम", href: "/products", icon: Smartphone, desc: "Complete retail platform", descHI: "पूर्ण खुदरा मंच" },
      { name: "Lume Shop", nameHI: "ल्यूम दुकान", href: "#", icon: ShoppingBag, desc: "Coming Soon", descHI: "जल्द आ रहा है", comingSoon: true },
    ],
  },
  {
    name: "Resources",
    nameKey: "nav.resources",
    href: "/resources",
    children: [
      { name: "Guide and FAQs", nameHI: "मार्गदर्शिका और सवाल-जवाब", href: "/resources/guides", icon: BookOpen, desc: "Quick guides and FAQs", descHI: "त्वरित मार्गदर्शिका और सवाल-जवाब" },
      { name: "Case Studies", nameHI: "सफलता के उदाहरण", href: "/resources/case-studies", icon: FileText, desc: "Success stories", descHI: "सफलता की कहानियाँ" },
    ],
  },
  { name: "Pricing", nameKey: "nav.pricing", href: "/pricing" },
];

const searchablePages = [
  { name: "Home", href: "/", keywords: ["home", "main", "start", "apeiros", "lume", "index"] },
  { name: "For Retailers", href: "/for-retailers", keywords: ["retailers", "shops", "stores", "business", "kirana", "दुकान", "for retailers"] },

  // Solutions
  { name: "Solutions (Overview)", href: "/solutions", keywords: ["solutions", "features", "tools", "समाधान पेज"] },
  { name: "Digital Billing", href: "/solutions/digital-billing", keywords: ["digital billing", "smart billing", "invoice", "gst", "bill", "बिलिंग"] },
  { name: "Customer Capture", href: "/solutions/customer-capture", keywords: ["customer capture", "customer data", "ग्राहक डेटा", "customer list"] },
  { name: "Feedback & Engagement", href: "/solutions/feedback-engagement", keywords: ["feedback", "engagement", "ratings", "reviews", "feedback और जुड़ाव"] },
  { name: "Real-time Engagement", href: "/solutions/real-time-engagement", keywords: ["whatsapp campaign", "real time", "offers", "campaigns"] },
  { name: "Credit (Udhaar) Management", href: "/solutions/credit-management", keywords: ["credit", "udhaar", "उधार", "ledger"] },
  { name: "Analytics & Reports", href: "/solutions/analytics", keywords: ["analytics", "reports", "डैशबोर्ड", "insights"] },

  // Products
  { name: "Products (Overview)", href: "/products", keywords: ["products", "apps", "software", "product page"] },
  { name: "Products – Core Capabilities", href: "/products/core", keywords: ["features", "core capabilities", "billing & pos", "smart digital bills", "campaign manager"] },
  { name: "Products – How Lume Works", href: "/products/how-it-works", keywords: ["how lume works", "process", "workflow"] },
  { name: "Products – Who is Lume For", href: "/products/who-is-lume-for", keywords: ["who is lume for", "single store", "multi store", "chains"] },
  { name: "Lume Shop", href: "/products/lume-shop", keywords: ["lume shop", "hyperlocal", "online store", "shopping app"] },

  // Pricing & plans
  { name: "Pricing", href: "/pricing", keywords: ["pricing", "plans", "cost", "price", "free", "कीमत", "standard", "advance", "premium"] },

  // Help & Guides
  { name: "Help Center", href: "/help", keywords: ["help", "support", "faq", "tutorial", "guide center"] },
  { name: "Getting Started Guide", href: "/help/getting-started", keywords: ["getting started", "onboarding", "setup", "ल्यूम के साथ शुरुआत"] },
  { name: "Billing Guide", href: "/help/billing-guide", keywords: ["billing guide", "quick bill", "pos bill", "mpos", "ebill", "बिलिंग गाइड"] },

  // Resources
  { name: "Guides & FAQs", href: "/resources/guides", keywords: ["guides", "faqs", "quick guides", "resource", "help articles"] },
  { name: "Case Studies", href: "/resources/case-studies", keywords: ["case studies", "success stories", "customer success", "stories"] },

  // Company
  { name: "About Us", href: "/company/about", keywords: ["about", "about us", "apeiros", "हमारे बारे में"] },
  { name: "Careers", href: "/company/careers", keywords: ["careers", "jobs", "join team", "hiring"] },
  { name: "Contact", href: "/contact", keywords: ["contact", "support", "email", "call", "संपर्क"] },

  // Legal
  { name: "Privacy Policy", href: "/privacy-policy", keywords: ["privacy", "data", "गोपनीयता"] },
  { name: "Terms & Conditions", href: "/terms-conditions", keywords: ["terms", "conditions", "rules", "नियम और शर्तें"] },
];

const languages = [
  { code: "EN" as const, name: "English" },
  { code: "HI" as const, name: "हिंदी" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchablePages>([]);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => location.pathname === href;

  // Scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Close search when clicking outside
  useEffect(() => {
    if (!searchOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Don't do anything if clicking inside search container (multiple checks)
      if (
        searchContainerRef.current?.contains(target) ||
        target.closest('[data-search-container]') ||
        target.closest('.search-results-dropdown') ||
        target === searchInputRef.current ||
        searchInputRef.current?.contains(target)
      ) {
        return;
      }
      
      // Only close if truly outside
      setSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    };

    // Add delay and use capture phase
    const timeoutId = setTimeout(() => {
      // Use click instead of mousedown to avoid conflicts
      document.addEventListener("click", handleClickOutside, true);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside, true);
    };
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

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`${
          mobileMenuOpen
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-border"
            : isScrolled
              ? "fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-border shadow-sm"
              : "absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
        } transition-all duration-300`}
      >
        <nav className="container-wide flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src={apeirosLogo} 
              alt="Apeiros AI" 
              className="h-12 lg:h-14 w-auto object-contain"
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
                    className={`gap-1 text-base font-medium transition-colors ${
                      hoveredMenu === item.name 
                        ? isScrolled 
                          ? 'text-primary bg-primary/5' 
                          : 'text-[#1b181f] bg-white/10'
                        : isScrolled 
                          ? 'text-foreground/80 hover:bg-primary/5 hover:text-[#1b181f]' 
                          : 'text-[#1b181f] hover:bg-white/10 hover:text-[#1b181f]'
                    }`}
                  >
                    {item.nameKey ? t(item.nameKey) : item.name}
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
                          {item.children.map((child) =>
                            child.comingSoon ? (
                              <div
                                key={child.name}
                                className="flex items-start gap-3 p-3 rounded-lg cursor-not-allowed opacity-60"
                              >
                                <div className="w-9 h-9 rounded-lg bg-[#146fb5]/10 flex items-center justify-center shrink-0">
                                  <child.icon className="w-4.5 h-4.5" style={{ color: '#146fb5' }} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <p className="font-medium text-base text-foreground">
                                      {language === "HI" && child.nameHI ? child.nameHI : child.name}
                                    </p>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#146fb5]/10 text-[#146fb5] font-medium">
                                      {language === "HI" ? "जल्द आ रहा है" : "Coming Soon"}
                                    </span>
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {language === "HI" && child.descHI ? child.descHI : child.desc}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="flex items-start gap-3 p-3 rounded-lg transition-colors group hover:bg-secondary/50"
                              >
                                <div className="w-9 h-9 rounded-lg bg-[#146fb5]/10 flex items-center justify-center shrink-0 group-hover:bg-[#146fb5]/15">
                                  <child.icon className="w-4.5 h-4.5" style={{ color: '#146fb5' }} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <p className="font-medium text-base text-foreground">
                                      {language === "HI" && child.nameHI ? child.nameHI : child.name}
                                    </p>
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {language === "HI" && child.descHI ? child.descHI : child.desc}
                                  </p>
                                </div>
                              </Link>
                            )
                          )}
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
                  className={`text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-[#146fb5]"
                      : isScrolled
                        ? "text-foreground/80 hover:bg-primary/5 hover:text-[#1b181f]"
                        : "text-[#1b181f] hover:bg-white/10 hover:text-[#1b181f]"
                  }`}
                >
                  <Link to={item.href}>{item.nameKey ? t(item.nameKey) : item.name}</Link>
                </Button>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Search - Inline in Header */}
            <div 
              ref={searchContainerRef}
              data-search-container
              className="relative"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              {!searchOpen ? (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`transition-colors h-9 w-9 ${
                    isScrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-[#1b181f] hover:text-[#146fb5]"
                  }`}
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="w-4 h-4" />
                </Button>
              ) : (
                <motion.div
                  initial={{ width: 40 }}
                  animate={{ width: 240 }}
                  exit={{ width: 40 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-w-[240px] sm:max-w-[240px]"
                  data-search-container
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                >
                  <div 
                    className="relative flex items-center" 
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <Search className="absolute left-3 w-4 h-4 z-10" style={{ color: '#9ca3af' }} />
                    <Input
                      ref={searchInputRef}
                      type="text"
                      placeholder={language === 'HI' ? 'पेज खोजें...' : 'Search pages...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onFocus={(e) => {
                        e.stopPropagation();
                        e.currentTarget.focus();
                      }}
                      onKeyDown={(e) => {
                        e.stopPropagation();
                        if (e.key === 'Escape') {
                          setSearchOpen(false);
                          setSearchQuery("");
                          setSearchResults([]);
                        }
                        if (e.key === 'Enter' && searchResults.length > 0) {
                          handleSearchSelect(searchResults[0].href);
                        }
                      }}
                      className="w-full pl-10 pr-10 h-9 text-sm bg-white border-border focus:border-border focus:ring-0"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 h-9 w-9 hover:bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSearchOpen(false);
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </div>
                  
                  {/* Search Results Dropdown */}
                  {searchQuery.trim() && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="search-results-dropdown absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-border/50 overflow-hidden z-50 max-h-96 overflow-y-auto w-[240px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="py-1">
                        {searchResults.map((result) => (
                          <button
                            key={result.href}
                            onClick={() => handleSearchSelect(result.href)}
                            className="w-full text-left px-4 py-3 hover:bg-[#e0f0ff] transition-colors flex items-center gap-3 group"
                          >
                            <Search className="w-4 h-4 text-muted-foreground group-hover:text-[#146fb5]" />
                            <div className="flex-1">
                              <p className="font-medium text-sm text-foreground group-hover:text-[#146fb5]">
                                {result.name}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className={`transition-colors h-9 w-9 ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-[#1b181f] hover:text-[#146fb5]"
              }`}
              asChild
            >
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
              <Button 
                variant="ghost" 
                size="sm" 
                className={`gap-1 transition-colors h-9 px-2 ${
                  isScrolled 
                    ? "text-muted-foreground" 
                    : "text-[#1b181f] hover:text-[#146fb5]"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs">{language === 'HI' ? 'HI' : 'EN'}</span>
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
                          onClick={() => setLanguage(lang.code)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            language === lang.code 
                              ? 'bg-primary/10 text-[#146fb5] font-semibold' 
                              : 'text-[#1b181f] hover:bg-secondary/50'
                          }`}
                        >
                          {lang.code === 'HI' ? 'हिंदी' : 'English'}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Button variant="cta" size="sm" className="ml-2" asChild>
              <Link to="/book-demo">{t('cta.startTrial')}</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1 ml-auto">
            <div 
              ref={searchContainerRef}
              data-search-container
              className="relative"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              {!searchOpen ? (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`transition-colors ${
                    isScrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-[#1b181f] hover:text-[#146fb5]"
                  }`}
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="w-5 h-5" />
                </Button>
              ) : (
                <motion.div
                  initial={{ width: 40 }}
                  animate={{ width: 180 }}
                  exit={{ width: 40 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-w-[180px]"
                  data-search-container
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                >
                  <div 
                    className="relative flex items-center w-full" 
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <Search className="absolute left-3 w-4 h-4 z-10" style={{ color: '#9ca3af' }} />
                    <Input
                      ref={searchInputRef}
                      type="text"
                      placeholder={language === 'HI' ? 'पेज खोजें...' : 'Search pages...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onFocus={(e) => {
                        e.stopPropagation();
                        e.currentTarget.focus();
                      }}
                      onKeyDown={(e) => {
                        e.stopPropagation();
                        if (e.key === 'Escape') {
                          setSearchOpen(false);
                          setSearchQuery("");
                          setSearchResults([]);
                        }
                        if (e.key === 'Enter' && searchResults.length > 0) {
                          handleSearchSelect(searchResults[0].href);
                        }
                      }}
                      className="w-full pl-10 pr-10 h-9 text-sm bg-white border-border focus:border-border focus:ring-0"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 h-9 w-9 hover:bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSearchOpen(false);
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </div>
                  
                  {/* Search Results Dropdown - Mobile */}
                  {searchQuery.trim() && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="search-results-dropdown absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-border/50 overflow-hidden z-50 max-h-96 overflow-y-auto w-[180px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {searchResults.length > 0 ? (
                        <div className="py-1">
                          {searchResults.map((result) => (
                            <button
                              key={result.href}
                              onClick={() => handleSearchSelect(result.href)}
                              className="w-full text-left px-4 py-3 hover:bg-[#e0f0ff] transition-colors flex items-center gap-3 group"
                            >
                              <Search className="w-4 h-4 text-muted-foreground group-hover:text-[#146fb5]" />
                              <div className="flex-1">
                                <p className="font-medium text-sm text-foreground group-hover:text-[#146fb5]">
                                  {result.name}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="px-4 py-8 text-center">
                          <p className="text-sm text-muted-foreground">
                            No results for "{searchQuery}"
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`transition-colors hover:bg-transparent ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-[#1b181f] hover:text-[#146fb5]"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
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
              className="lg:hidden bg-gradient-to-b from-white via-[#eaf2f8]/60 to-white border-b border-border/60 overflow-hidden shadow-md"
            >
              <div className="container-wide py-4 space-y-2">
                {navigation.map((item) => {
                  const hasChildren = !!item.children;
                  const isExpanded = mobileExpandedMenu === item.name;
                  const label = item.nameKey ? t(item.nameKey) : item.name;

                  return (
                    <div
                      key={item.name}
                      className="rounded-lg bg-white/95 border border-border/60 overflow-hidden"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-3 py-3 min-h-[52px] text-base font-medium text-[#1b181f]"
                        onClick={() => {
                          if (hasChildren) {
                            setMobileExpandedMenu(isExpanded ? null : item.name);
                          } else {
                            setMobileMenuOpen(false);
                            navigate(item.href);
                          }
                        }}
                      >
                        <span>{label}</span>
                        {hasChildren ? (
                          <ChevronDown
                            className={`w-4 h-4 text-muted-foreground transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        ) : (
                          <span className="text-[11px] text-primary/80">
                            {language === "HI" ? "पेज खोलें" : "Open"}
                          </span>
                        )}
                      </button>

                      {hasChildren && isExpanded && (
                        <div className="border-t border-border/50 bg-gradient-to-b from-white to-[#f5f8fc]">
                          {item.children!.map((child) =>
                            child.comingSoon ? (
                              <div
                                key={child.name}
                                className="flex items-center gap-2 px-3 py-2 text-base text-muted-foreground/60 cursor-not-allowed"
                              >
                                <child.icon className="w-4 h-4" />
                                <span>
                                  {language === "HI" && child.nameHI ? child.nameHI : child.name}
                                </span>
                                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#146fb5]/10 text-[#146fb5] font-medium">
                                  {language === "HI" ? "जल्द आ रहा है" : "Coming Soon"}
                                </span>
                              </div>
                            ) : (
                              <Link
                                key={child.name}
                                to={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                              >
                                <child.icon className="w-4 h-4" />
                                <span>
                                  {language === "HI" && child.nameHI ? child.nameHI : child.name}
                                </span>
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Help link inside sidebar */}
                <div className="rounded-lg bg-white/95 border border-border/60 overflow-hidden">
                  <Link
                    to="/help"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center gap-2 px-3 py-3 text-base font-medium text-[#1b181f]"
                  >
                    <HelpCircle className="w-4 h-4 text-[#146fb5]" />
                    <span>{language === "HI" ? "मदद / हेल्प सेंटर" : "Help Center"}</span>
                  </Link>
                </div>
                
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-2 px-3 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>{language === "HI" ? "भाषा चुनें:" : "Language:"}</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code)}
                          className={`px-2.5 py-1 rounded text-xs font-medium ${
                            language === lang.code 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {lang.code === 'HI' ? 'हिंदी' : 'EN'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                      {t('cta.startTrial')}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

    </>
  );
}
