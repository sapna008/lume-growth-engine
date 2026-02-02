import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle2,
  MessageSquare,
  Users,
  BarChart3,
  Megaphone,
  Smartphone,
  Zap,
  Link2,
  ShoppingBag,
  ReceiptIndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import dashboardDesktop from "@/assets/hero-banner/dashboard-hindii.png";
import dashboardEnglish from "@/assets/hero-banner/dashboard-english.png";
import dashboardMobile from "@/assets/hero-banner/dashboard-mob-hindi.png";
import lumeLogo from "@/assets/lume_logo.png";
import loyaltyImage from "@/assets/products/loyalty.png";
import storeIcon from "@/assets/lume/icon/store.png";
import multiStoreIcon from "@/assets/lume/icon/multi-store.png";
import storeGrowthIcon from "@/assets/lume/icon/store-growth.png";
import lumeShopImage from "@/assets/products/lume-sop.png";
import lumeShopIcon from "@/assets/products/lume-sop-icon.png";
import campaignManagerImage from "@/assets/products/campaign_manager.png";
import smartDigitalBillImage from "@/assets/products/smart-digital-bill.png";
import analyticsReportImage from "@/assets/products/analytics-report.png";
import posImage from "@/assets/products/pos.png";

export default function Products() {
  const { t, language } = useLanguage();
  const { id } = useParams<{ id?: string }>();
  useSEO(
    'Products – Billing, POS, Loyalty & Analytics | Lume',
    'Lume products: billing & POS integration, smart digital bills, customer loyalty, analytics & campaign manager. One retail platform.'
  );

  useEffect(() => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let targetId = id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [id]);
  
  const coreCapabilities = [
    {
      icon: ReceiptIndianRupee,
      title: t('products.coreCapabilities.billing.title'),
      features: [
        t('products.coreCapabilities.billing.feature1'),
        t('products.coreCapabilities.billing.feature2'),
        t('products.coreCapabilities.billing.feature3'),
        t('products.coreCapabilities.billing.feature4')
      ],
      description: t('products.coreCapabilities.billing.desc')
    },
    {
      icon: MessageSquare,
      title: t('products.coreCapabilities.digitalBills.title'),
      features: [
        t('products.coreCapabilities.digitalBills.feature1'),
        t('products.coreCapabilities.digitalBills.feature2'),
        t('products.coreCapabilities.digitalBills.feature3'),
        t('products.coreCapabilities.digitalBills.feature4')
      ],
      description: t('products.coreCapabilities.digitalBills.desc')
    },
    {
      icon: Users,
      title: t('products.coreCapabilities.loyalty.title'),
      features: [
        t('products.coreCapabilities.loyalty.feature1'),
        t('products.coreCapabilities.loyalty.feature2'),
        t('products.coreCapabilities.loyalty.feature3'),
        t('products.coreCapabilities.loyalty.feature4')
      ],
      description: t('products.coreCapabilities.loyalty.desc')
    },
    {
    icon: BarChart3,
      title: t('products.coreCapabilities.analytics.title'),
      features: [
        t('products.coreCapabilities.analytics.feature1'),
        t('products.coreCapabilities.analytics.feature2'),
        t('products.coreCapabilities.analytics.feature3'),
        t('products.coreCapabilities.analytics.feature4')
      ],
      description: t('products.coreCapabilities.analytics.desc')
    },
    {
      icon: Megaphone,
      title: t('products.coreCapabilities.campaign.title'),
      features: [
        t('products.coreCapabilities.campaign.feature1'),
        t('products.coreCapabilities.campaign.feature2'),
        t('products.coreCapabilities.campaign.feature3'),
        t('products.coreCapabilities.campaign.feature4')
      ],
      description: t('products.coreCapabilities.campaign.desc')
    }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: t('products.howItWorks.step1.title'),
      description: t('products.howItWorks.step1.desc')
    },
    {
      step: "2",
      title: t('products.howItWorks.step2.title'),
      description: t('products.howItWorks.step2.desc')
    },
    {
      step: "3",
      title: t('products.howItWorks.step3.title'),
      description: t('products.howItWorks.step3.desc')
    },
    {
      step: "4",
      title: t('products.howItWorks.step4.title'),
      description: t('products.howItWorks.step4.desc')
    }
  ];

  const whoIsLumeFor = [
    {
      icon: storeIcon,
      title: t('products.whoIsLumeFor.singleStore.title'),
      description: t('products.whoIsLumeFor.singleStore.desc')
    },
    {
      icon: multiStoreIcon,
      title: t('products.whoIsLumeFor.multiStore.title'),
      description: t('products.whoIsLumeFor.multiStore.desc')
    },
    {
      icon: storeGrowthIcon,
      title: t('products.whoIsLumeFor.growingChains.title'),
      description: t('products.whoIsLumeFor.growingChains.desc')
    }
  ];

    return (
      <div className="min-h-screen bg-background">
        <Header />
        
      {/* 1. PRODUCT HERO */}
      <section id="overview" className="pt-20 lg:pt-24 pb-12 lg:pb-16 bg-gradient-to-b from-white via-[#eaf2f8]/30 to-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            {/* Left: Clear product explanation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-2 sm:mb-3">
                <img 
                  src={lumeLogo} 
                  alt="Lume Logo" 
                  className="h-12 sm:h-16 md:h-20 w-auto"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {language === 'HI' ? (
                  <>
                    <div style={{ color: '#1b181f' }} className="leading-[1.4]">{t('products.hero.titleLine1')}</div>
                    <div className="pt-1 sm:pt-1.5 leading-[1.4]">
                      <span style={{ color: '#1b181f' }}>{t('products.hero.titleLine1Part2Before')} </span>
                      <span style={{ color: '#146fb5' }}>{t('products.hero.titleLine1Part2After')}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ color: '#1b181f' }} className="whitespace-nowrap">{t('products.hero.titleLine1')}</div>
                    <div>
                      <span style={{ color: '#1b181f' }}>your </span>
                      <span style={{ color: '#146fb5' }}>business</span>
                    </div>
                  </>
                )}
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed" style={{ color: '#4f4f4f' }}>
                {language === 'HI' ? (
                  <>
                    {t('products.hero.titleLine2')}<br />
                    {t('products.hero.titleLine3')}<br />
                    {t('products.hero.titleLine4')}
                  </>
                ) : (
                  t('products.hero.subtitle')
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="hero" className="w-full sm:w-auto" asChild>
                  <Link to="/book-demo">
                    {t('products.hero.bookDemo')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="xl" variant="hero-outline" className="w-full sm:w-auto" asChild>
                  <Link to="#core">{t('products.hero.seeFeatures')}</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: App / dashboard visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src={language === 'EN' ? dashboardEnglish : dashboardDesktop} 
                  alt="Lume retail management dashboard" 
                  className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS LUME? */}
      <section id="what-is-lume" className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/30 to-white">
          <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary/5 via-white to-accent/5 rounded-2xl p-8 border border-border"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1b181f' }}>
                {t('products.whatIsLume.title')}
              </h2>
              <div className="space-y-6 text-lg sm:text-xl leading-relaxed" style={{ color: '#4f4f4f' }}>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ background: '#146fb5' }}></div>
                  <p className="font-medium" style={{ color: '#1b181f' }}>
                    {t('products.whatIsLume.point1')}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ background: '#146fb5' }}></div>
                  <p>
                    {t('products.whatIsLume.point2')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

      {/* 3. CORE CAPABILITIES */}
      <section
        id="core"
        className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white"
      >
          <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1b181f' }}>
              {t('products.coreCapabilities.title')}
            </h2>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {coreCapabilities.map((capability, i) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: '#eaf2f8' }}>
                        <capability.icon className="w-7 h-7" style={{ color: '#146fb5' }} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1b181f' }}>
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg mb-6" style={{ color: '#4f4f4f' }}>
                      {capability.description}
                    </p>
                    <ul className="space-y-3">
                      {capability.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#146fb5' }} />
                          <span className="text-base sm:text-lg" style={{ color: '#1b181f' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
                  <div className={`${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex items-center justify-center`}>
                    {capability.title === t('products.coreCapabilities.billing.title') ? (
                      <img 
                        src={posImage} 
                        alt="Retail POS billing software dashboard for Indian stores"
                        className="w-full max-w-md h-auto max-h-64 sm:max-h-80 rounded-lg object-contain"
                      />
                    ) : capability.title === t('products.coreCapabilities.loyalty.title') ? (
                      <img 
                        src={loyaltyImage} 
                        alt="Customer loyalty and rewards system in POS software"
                        className="w-full max-w-md h-auto max-h-64 sm:max-h-80 rounded-lg object-contain"
                      />
                    ) : capability.title === t('products.coreCapabilities.digitalBills.title') ? (
                      <img 
                        src={smartDigitalBillImage} 
                        alt="Digital billing system for retail shops"
                        className="w-full max-w-md h-auto max-h-64 sm:max-h-80 rounded-lg object-contain"
                      />
                    ) : capability.title === t('products.coreCapabilities.analytics.title') ? (
                      <img 
                        src={analyticsReportImage} 
                        alt="Customer insights and sales analytics for retailers"
                        className="w-full max-w-md h-auto max-h-64 sm:max-h-80 rounded-lg object-contain"
                      />
                    ) : capability.title === t('products.coreCapabilities.campaign.title') ? (
                      <img 
                        src={campaignManagerImage} 
                        alt="Retail marketing and SMS campaign tools"
                        className="w-full max-w-md h-auto max-h-64 sm:max-h-80 rounded-lg object-contain"
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-[#eaf2f8] to-white rounded-xl p-6 sm:p-8 h-64 sm:h-80 flex items-center justify-center">
                        <div className="text-center">
                          <capability.icon className="w-24 h-24 mx-auto mb-4 opacity-20" style={{ color: '#146fb5' }} />
                          <p className="text-sm" style={{ color: '#4f4f4f' }}>Visual placeholder</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW LUME WORKS */}
      <section
        id="how-it-works"
        className="section-spacing bg-white"
      >
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1b181f' }}>
              {t('products.howItWorks.title')}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {howItWorksSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-card h-full relative pt-10 sm:pt-12 border border-gray-100">
                    {/* Number Circle - Half inside, half outside */}
                    <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white" style={{ background: '#146fb5' }}>
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#1b181f' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                      {step.description}
                    </p>
                  </div>
                  {i < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-0">
                      <ArrowRight className="w-6 h-6" style={{ color: '#b6c6d6' }} />
                      </div>
                  )}
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </section>

      {/* 5. WHO IS LUME FOR? */}
      <section
        id="who-is-lume-for"
        className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white"
      >
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1b181f' }}>
              {t('products.whoIsLumeFor.title')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {whoIsLumeFor.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#146fb5]/30"
              >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-[#eaf2f8] to-white border-2 border-[#146fb5]/20 shadow-sm mx-auto">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
      </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#1b181f' }}>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#4f4f4f' }}>
                  {item.description}
            </p>
          </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LUME + LUME SHOP CONNECTION */}
      <section
        id="lume-shop"
        className="section-spacing bg-white"
      >
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#eaf2f8] to-white rounded-2xl p-8 sm:p-12 border-2" style={{ borderColor: '#146fb5' }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-4">
                    <div className="mb-4 flex justify-center lg:justify-start">
                      <img 
                        src={lumeShopIcon} 
                        alt="Lume Shop Icon" 
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#1b181f' }}>
                      {t('products.lumeShop.title')}
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#4f4f4f' }}>
                    {t('products.lumeShop.desc')}
                  </p>
                  <Button size="lg" variant="hero-outline" className="w-full sm:w-auto" disabled>
                    <span className="opacity-60">{t('products.lumeShop.comingSoon')}</span>
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src={lumeShopImage} 
                    alt="Lume Shop" 
                    className="w-full max-w-xs sm:max-w-sm max-h-64 sm:max-h-80 object-contain rounded-md"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. TRUST (LIGHT VERSION) */}
      <section
        id="trust"
        className="section-spacing bg-gradient-to-b from-white via-[#eaf2f8]/20 to-white"
      >
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#146fb5' }}>250+</div>
                  <div className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>{t('products.trust.retailers')}</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#146fb5' }}>₹40Cr+</div>
                  <div className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>{t('products.trust.transactions')}</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#146fb5' }}>4.8/5</div>
                  <div className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>{t('products.trust.rating')}</div>
                    </div>
                    <div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#146fb5' }}>25%</div>
                  <div className="text-sm sm:text-base" style={{ color: '#4f4f4f' }}>{t('products.trust.growth')}</div>
                    </div>
                  </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <p className="text-lg italic mb-4" style={{ color: '#1b181f' }}>
                  "{t('products.trust.testimonial')}"
                </p>
                <p className="text-base font-semibold" style={{ color: '#4f4f4f' }}>
                  — {t('products.trust.testimonialAuthor')}
                </p>
              </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section
        id="cta"
        className="section-spacing bg-white"
      >
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1b181f' }}>
              {t('products.cta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="w-full sm:w-auto" asChild>
                <Link to="/book-demo">
                  {t('products.cta.bookDemo')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" className="w-full sm:w-auto" asChild>
                <Link to="/pricing">{t('products.cta.viewPricing')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
