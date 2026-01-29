import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Receipt,
  CreditCard,
  BarChart3,
  MessageSquare,
  Clock,
  Shield,
  Store,
  ShoppingBag,
  Zap,
  IndianRupee,
  Star,
  Calculator,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Import problem and solution images
import problem1 from "@/assets/problem-solved/problem/i-1.png";
import problem2 from "@/assets/problem-solved/problem/i-2.png";
import problem3 from "@/assets/problem-solved/problem/i-3.png";
import problem4 from "@/assets/problem-solved/problem/i-4.png";
import problem5 from "@/assets/problem-solved/problem/i-5.png";

import solution1 from "@/assets/problem-solved/solution/i-1.png";
import solution2 from "@/assets/problem-solved/solution/i-2.png";
import solution3 from "@/assets/problem-solved/solution/i-3.png";
import solution4 from "@/assets/problem-solved/solution/i-4.png";
import solution5 from "@/assets/problem-solved/solution/i-5.png";

// Import get-started images
import getStarted1 from "@/assets/get-started/i-1.png";
import getStarted2 from "@/assets/get-started/i-2.png";
import getStarted3 from "@/assets/get-started/i-3.png";

// Import hero GIF
import retbanGif from "@/assets/retban.gif";

// painPoints will be created inside component to use translations

// howItWorks will be created inside component to use translations

// industries will be created inside component to use translations

export default function ForRetailers() {
  const { t, language } = useLanguage();
  
  const painPoints = [
    {
      problem: t('forRetailers.problems.problem1'),
      solution: t('forRetailers.problems.solution1'),
      problemImg: problem1,
      solutionImg: solution1,
    },
    {
      problem: t('forRetailers.problems.problem2'),
      solution: t('forRetailers.problems.solution2'),
      problemImg: problem2,
      solutionImg: solution2,
    },
    {
      problem: t('forRetailers.problems.problem3'),
      solution: t('forRetailers.problems.solution3'),
      problemImg: problem3,
      solutionImg: solution3,
    },
    {
      problem: t('forRetailers.problems.problem4'),
      solution: t('forRetailers.problems.solution4'),
      problemImg: problem4,
      solutionImg: solution4,
    },
    {
      problem: t('forRetailers.problems.problem5'),
      solution: t('forRetailers.problems.solution5'),
      problemImg: problem5,
      solutionImg: solution5,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: t('forRetailers.howItWorks.step1.title'),
      description: t('forRetailers.howItWorks.step1.description'),
      time: t('forRetailers.howItWorks.step1.time'),
      image: getStarted1,
    },
    {
      step: "2",
      title: t('forRetailers.howItWorks.step2.title'),
      description: t('forRetailers.howItWorks.step2.description'),
      time: t('forRetailers.howItWorks.step2.time'),
      image: getStarted2,
    },
    {
      step: "3",
      title: t('forRetailers.howItWorks.step3.title'),
      description: t('forRetailers.howItWorks.step3.description'),
      time: t('forRetailers.howItWorks.step3.time'),
      image: getStarted3,
    },
  ];

  const industries = [
    {
      name: t('forRetailers.industries.grocery.name'),
      icon: Store,
      description: t('forRetailers.industries.grocery.description'),
      benefits:
        language === "HI"
          ? ["बारकोड स्कैनिंग", "स्टॉक अलर्ट्स", "मार्जिन ट्रैकिंग"]
          : ["Barcode scanning", "Stock alerts", "Margin tracking"],
    },
    {
      name: t('forRetailers.industries.fashion.name'),
      icon: ShoppingBag,
      description: t('forRetailers.industries.fashion.description'),
      benefits:
        language === "HI"
          ? ["प्रोडक्ट वेरिएंट्स", "सीज़न प्लानिंग", "कस्टमर लॉयल्टी"]
          : ["Product variants", "Season planning", "Customer loyalty"],
    },
    {
      name: t('forRetailers.industries.electronics.name'),
      icon: Zap,
      description: t('forRetailers.industries.electronics.description'),
      benefits:
        language === "HI"
          ? ["वारंटी मैनेजमेंट", "सर्विस ट्रैकिंग", "ईएमआई विकल्प"]
          : ["Warranty management", "Service tracking", "EMI options"],
    },
    {
      name: t('forRetailers.industries.general.name'),
      icon: IndianRupee,
      description: t('forRetailers.industries.general.description'),
      benefits:
        language === "HI"
          ? ["मिक्स्ड इन्वेंटरी", "क्विक बिलिंग", "क्रेडिट मैनेजमेंट"]
          : ["Mixed inventory", "Quick billing", "Credit management"],
    },
  ];

  const successStories = [
    {
      name: "Hearty Mart",
      location: t('forRetailers.testimonials.story1.location'),
      metric: t('forRetailers.testimonials.story1.metric'),
      outcome: t('forRetailers.testimonials.story1.outcome'),
      quote: t('forRetailers.testimonials.story1.quote'),
    },
    {
      name: "RJ's Hair & Beauty Studio",
      location: t('forRetailers.testimonials.story2.location'),
      metric: t('forRetailers.testimonials.story2.metric'),
      outcome: t('forRetailers.testimonials.story2.outcome'),
      quote: t('forRetailers.testimonials.story2.quote'),
    },
    {
      name: "Surbhi",
      location: t('forRetailers.testimonials.story3.location'),
      metric: t('forRetailers.testimonials.story3.metric'),
      outcome: t('forRetailers.testimonials.story3.outcome'),
      quote: t('forRetailers.testimonials.story3.quote'),
    },
  ];

  const roiCalculation = {
    timeSaved: t('forRetailers.roi.timeSaved.value'),
    creditRecovered: t('forRetailers.roi.creditRecovered.value'),
    repeatCustomers: t('forRetailers.roi.repeatCustomers.value'),
    averageROI: t('forRetailers.roi.averageROI.value'),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24 hero-gradient text-white px-4 sm:px-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  <span className="text-xs sm:text-sm" style={{ color: '#1b181f' }}>{t('forRetailers.hero.badge')}</span>
                </div>

                <h1 className={`font-bold ${language === 'HI' ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 sm:mb-7 leading-[1.5]' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 leading-tight'} px-2 sm:px-0`} style={{ color: '#1b181f' }}>
                  {language === 'HI' ? (
                    <>
                      <div className="block">{t('forRetailers.hero.title')}</div>
                      <div className="block pt-2 sm:pt-3">
                        <span style={{ color: '#1b181f' }}>{t('forRetailers.hero.titleMiddle')} </span>
                        <span style={{ color: '#146fb5' }}>{t('forRetailers.hero.titleHighlight')}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {t('forRetailers.hero.title')}{" "}
                      <span style={{ color: '#146fb5' }}>{t('forRetailers.hero.titleHighlight')}</span>
                    </>
                  )}
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 px-4 sm:px-0 md:px-0" style={{ color: '#4f4f4f' }}>
                  {t('forRetailers.hero.description')}
                </p>

                <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                  <Button size="xl" variant="hero" asChild className="shadow-lg hover:shadow-xl transition-shadow h-10 sm:h-12 text-sm sm:text-base px-4 sm:px-6 flex-1 sm:flex-initial">
                    <Link to="/book-demo">
                      {t('forRetailers.hero.bookDemo')}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="hero-outline" asChild className="h-10 sm:h-12 text-sm sm:text-base px-4 sm:px-6 flex-1 sm:flex-initial">
                    <Link to="/pricing">{t('forRetailers.hero.viewPricing')}</Link>
                  </Button>
                </div>

              </motion.div>
            </div>

            {/* Right Side - GIF */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-sm sm:max-w-md md:max-w-lg mt-0 md:mt-8 lg:mt-16"
              >
                <img 
                  src={retbanGif} 
                  alt="Lume Retail Banner" 
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points → Solutions */}
      <section className="section-spacing bg-white px-4 sm:px-0">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
              {t('forRetailers.problems.title')}
            </h2>
            <p className="text-base sm:text-lg px-4 sm:px-0" style={{ color: '#4f4f4f' }}>
              {t('forRetailers.problems.subtitle')}
            </p>
          </div>

          <div className="relative py-4 sm:py-6 lg:py-8">
            {/* Center Vertical Line - Thinner */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#146fb5]/40 via-[#146fb5] to-[#146fb5]/40 transform -translate-x-1/2 z-0" />
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {painPoints.map((item, i) => (
                <motion.div
                  key={item.problem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                    {/* Problem Box - Left Side */}
                    <div className="relative order-2 lg:order-1">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200/60 px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.problemImg} 
                              alt={item.problem}
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain opacity-60"
                            />
                          </div>
                          <div className="flex-1 min-w-0 text-center sm:text-left flex items-center">
                            <p className="text-xs sm:text-sm md:text-base line-through leading-relaxed break-words font-medium w-full" style={{ color: '#9ca3af' }}>
                              {item.problem}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#146fb5] to-[#0d5a94] flex items-center justify-center shadow-xl border-4 border-white ring-2 ring-[#146fb5]/20">
                        <ArrowRightIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Solution Box - Right Side */}
                    <div className="relative order-3">
                      <div className="bg-gradient-to-br from-[#eaf2f8] to-white rounded-xl sm:rounded-2xl border-2 border-[#146fb5]/40 px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm hover:shadow-md hover:border-[#146fb5]/60 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.solutionImg} 
                              alt={item.solution}
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain opacity-70"
                            />
                          </div>
                          <div className="flex-1 min-w-0 text-center sm:text-left flex items-center">
                            <p className="text-xs sm:text-sm md:text-base font-semibold flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 leading-relaxed break-words w-full">
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#146fb5' }} />
                              <span style={{ color: '#1b181f' }}>{item.solution}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding subtle-gradient px-4 sm:px-0">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
              {t('forRetailers.howItWorks.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-card text-center h-full relative pt-10 sm:pt-12">
                    {/* Number Circle - Half inside, half outside */}
                    <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white text-lg sm:text-xl font-bold shadow-lg border-4 border-white" style={{ background: '#146fb5' }}>
                        {item.step}
                      </div>
                    </div>
                  
                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>{item.title}</h3>
                  
                  {/* Image */}
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                    />
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base mb-2 sm:mb-3" style={{ color: '#4f4f4f' }}>{item.description}</p>
                  
                  {/* Time */}
                  <div className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm" style={{ color: '#146fb5' }}>
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {item.time}
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6" style={{ color: '#b6c6d6' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-spacing bg-white px-4 sm:px-0">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
              {t('forRetailers.industries.title')}
            </h2>
            <p className="text-base sm:text-lg px-4 sm:px-0" style={{ color: '#4f4f4f' }}>
              {t('forRetailers.industries.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-4 sm:p-5 lg:p-4 hover-lift" style={{ background: '#eaf2f8' }}
              >
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2" style={{ color: '#1b181f' }}>{industry.name}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#4f4f4f' }}>{industry.description}</p>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                  {industry.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs"
                      style={{ color: '#1b181f' }}
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" style={{ color: '#146fb5' }} />
                      <span className="break-words">{benefit}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-spacing hero-gradient text-white px-4 sm:px-0">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1b181f' }}>
              {t('forRetailers.testimonials.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#146fb5' }}>{story.metric}</div>
                <p className="text-sm sm:text-base font-medium mb-2 sm:mb-3" style={{ color: '#1b181f' }}>{story.outcome}</p>
                <p className="italic text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed" style={{ color: '#4f4f4f' }}>"{story.quote}"</p>
                <div className="pt-2 sm:pt-3 border-t" style={{ borderColor: '#e5e7eb' }}>
                  <div className="font-semibold text-xs sm:text-sm" style={{ color: '#1b181f' }}>{story.name}</div>
                  <div className="text-xs" style={{ color: '#4f4f4f' }}>{story.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-spacing bg-white px-4 sm:px-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6" style={{ color: '#1b181f' }}>
                {t('forRetailers.roi.title')}
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{ color: '#4f4f4f' }}>
                {t('forRetailers.roi.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6" style={{ background: '#eaf2f8' }}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Calculator className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" style={{ color: '#146fb5' }} />
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: '#1b181f' }}>{roiCalculation.timeSaved}</div>
                      <div className="text-xs sm:text-sm" style={{ color: '#4f4f4f' }}>{t('forRetailers.roi.timeSaved.label')}</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6" style={{ background: '#eaf2f8' }}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" style={{ color: '#146fb5' }} />
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: '#1b181f' }}>{roiCalculation.creditRecovered}</div>
                      <div className="text-xs sm:text-sm" style={{ color: '#4f4f4f' }}>{t('forRetailers.roi.creditRecovered.label')}</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6" style={{ background: '#eaf2f8' }}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" style={{ color: '#146fb5' }} />
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: '#1b181f' }}>{roiCalculation.repeatCustomers}</div>
                      <div className="text-xs sm:text-sm" style={{ color: '#4f4f4f' }}>{t('forRetailers.roi.repeatCustomers.label')}</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-white" style={{ background: '#146fb5' }}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 text-white" />
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{roiCalculation.averageROI}</div>
                      <div className="text-xs sm:text-sm text-white/80">{t('forRetailers.roi.averageROI.label')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl sm:rounded-2xl p-6 sm:p-8" style={{ background: '#eaf2f8' }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#1b181f' }}>{t('forRetailers.cta.title')}</h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  t('forRetailers.cta.feature1'),
                  t('forRetailers.cta.feature2'),
                  t('forRetailers.cta.feature3'),
                  t('forRetailers.cta.feature4'),
                  t('forRetailers.cta.feature5'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: '#146fb5' }} />
                    <span className="text-sm sm:text-base" style={{ color: '#1b181f' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="xl" variant="cta" className="w-full" asChild>
                  <Link to="/book-demo">
                    {t('forRetailers.cta.bookDemo')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                  </Link>
              </Button>
              <p className="text-center text-xs sm:text-sm mt-3 sm:mt-4" style={{ color: '#4f4f4f' }}>
                <Link to="/pricing" className="font-medium hover:underline" style={{ color: '#146fb5' }}>{t('forRetailers.cta.viewPricing')}</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
