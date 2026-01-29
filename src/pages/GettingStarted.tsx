import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Smartphone,
  Globe,
  Building2,
  Store,
  CreditCard,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Download,
  FileText,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import loginImage from "@/assets/help-guide/login.png";
import step1Image from "@/assets/help-guide/step-1.png";
import step2Image from "@/assets/help-guide/step-2-pricing.png";
import step3Image from "@/assets/help-guide/step-3-store-creation.png";
import step4Image from "@/assets/help-guide/step-4-category-selection.png";
import step5Image from "@/assets/help-guide/step-5-payment-method.png";
import step6Image from "@/assets/help-guide/step-6-choose-payment.png";
import step7DoneImage from "@/assets/help-guide/step-7-done.png";
import step7StartBillImage from "@/assets/help-guide/step-7-startbill.png";
import helpBanner from "@/assets/help-guide/help-banner.png";

export default function GettingStarted() {
  const [expandedSection, setExpandedSection] = useState<string | null>("setup-options");
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const { language } = useLanguage();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 lg:pt-24 pb-12 overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={helpBanner}
            alt="Retailers using Lume on a tablet"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay so header text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-[#071730]/40" />
        </div>

        <div className="relative z-10">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl py-10 lg:py-16"
            >
              {language === "HI" ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug font-display font-bold mb-3 text-left">
                    <span style={{ color: "#1b181f" }}>ल्यूम के साथ </span>
                    <span style={{ color: "#146fb5" }}>शुरुआत करें</span>
                  </h1>
                  <p className="mt-1 text-base md:text-xl text-left leading-relaxed" style={{ color: "#1b181f" }}>
                    इन आसान स्टेप्स को फॉलो करके ल्यूम सेटअप करें और अपनी दुकान को और स्मार्ट तरीके से
                    मैनेज करना शुरू करें — चाहे आप मोबाइल ऐप इस्तेमाल कर रहे हों या पहले से मौजूद POS सिस्टम।
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-left">
                    <span style={{ color: "#1b181f" }}>Getting Started </span>
                    <span style={{ color: "#146fb5" }}>with Lume</span>
                  </h1>
                  <p className="text-lg md:text-2xl text-left" style={{ color: "#1b181f" }}>
                    Follow these simple steps to set up Lume and start managing your store smarter —
                    whether you're using a mobile app or an existing POS system.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Setup Options */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2" style={{ color: "#1b181f" }}>
              {language === "HI" ? "अपनी सेटअप विधि चुनें" : "Choose Your Setup Method"}
            </h2>
            <p className="text-muted-foreground">
              {language === "HI"
                ? "वह विकल्प चुनें जो आपके बिज़नेस के लिए सबसे सही हो"
                : "Select the option that best fits your needs"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Mobile App Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" style={{ color: "#146fb5" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                    {language === "HI" ? "मोबाइल ऐप (सिंपल)" : "Mobile App (Simple)"}
                  </h3>
                  <p className="text-sm" style={{ color: "#4f4f4f" }}>
                    {language === "HI" ? "सबसे तेज़ और आसान शुरुआत" : "Fastest way to get started"}
                  </p>
                </div>
              </div>
              <p className="mb-4" style={{ color: "#4f4f4f" }}>
                {language === "HI"
                  ? "सीधे Google Play Store से ल्यूम POS डाउनलोड करें और कुछ ही मिनटों में बिलिंग शुरू करें।"
                  : "Download Lume POS directly from the Play Store and start billing in minutes."}
              </p>
              <div className="space-y-2">
                {[
                  language === "HI"
                    ? "अपने एंड्रॉइड फ़ोन में Google Play Store खोलें"
                    : "Open Google Play Store on your Android phone",
                  language === "HI"
                    ? "\"ल्यूम POS\" या \"ल्यूम Retailer\" सर्च करें"
                    : "Search for Lume POS or Lume Retailer",
                  language === "HI" ? "इंस्टॉल (Install) पर टैप करें" : "Tap Install",
                  language === "HI" ? "ऐप खोलें" : "Open the app",
                  language === "HI"
                    ? "अपने क्रेडेंशियल्स से लॉगिन करें"
                    : "Login with your credentials",
                  language === "HI"
                    ? "रोज़ाना की बिलिंग के लिए ल्यूम POS इस्तेमाल करना शुरू करें"
                    : "Start using Lume POS for daily billing",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#146fb5" }} />
                    <span className="text-sm" style={{ color: "#4f4f4f" }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium" style={{ color: "#146fb5" }}>
                  {language === "HI"
                    ? "👉 शुरुआत करने का यह सबसे तेज़ और आसान तरीका है"
                    : "👉 This is the fastest and easiest way to get started"}
                </p>
              </div>
            </motion.div>

            {/* Web Integration Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary/30 to-secondary/20 border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Globe className="w-6 h-6" style={{ color: "#146fb5" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                    {language === "HI"
                      ? "वेब इंटीग्रेशन (जो पहले से POS इस्तेमाल करते हैं)"
                      : "Web Integration (For Existing POS Users)"}
                  </h3>
                  <p className="text-sm" style={{ color: "#4f4f4f" }}>
                    {language === "HI"
                      ? "अपने मौजूदा सिस्टम के साथ ल्यूम को जोड़ें"
                      : "Integrate with your current system"}
                  </p>
                </div>
              </div>
              <p className="mb-4" style={{ color: "#4f4f4f" }}>
                {language === "HI"
                  ? "ल्यूम इंस्टॉलर की मदद से ल्यूम को अपने मौजूदा POS सिस्टम से कनेक्ट करें।"
                  : "Integrate Lume with your current POS system using the Lume Installer."}
              </p>
              <div className="space-y-2">
                {[
                  language === "HI"
                    ? "ल्यूम रिटेलर पोर्टल (Lume Retailer Portal) में लॉगिन करें"
                    : "Login to your Lume Retailer Portal",
                  language === "HI"
                    ? "\"Stores & POS\" सेक्शन में जाएँ"
                    : "Go to Stores & POS section",
                  language === "HI"
                    ? "अपना स्टोर चुनें और \"Edit POS\" पर क्लिक करें"
                    : "Select your store and click Edit POS",
                  language === "HI"
                    ? "\"Download Installer\" पर क्लिक करें"
                    : "Click Download Installer",
                  language === "HI"
                    ? "इंस्टॉलर, secretKey.txt और गाइड वाला ZIP फाइल डाउनलोड करें"
                    : "Download ZIP file containing installer, secretKey.txt, and guide",
                  language === "HI"
                    ? "अपने POS टर्मिनल पर ल्यूम इंस्टॉलर (Lume Installer) इंस्टॉल करें"
                    : "Install the Lume Installer on your POS terminal",
                  language === "HI"
                    ? "इंटीग्रेशन पूरा करने के लिए POS सिस्टम रीस्टार्ट करें"
                    : "Restart POS system to complete integration",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#146fb5" }} />
                    <span className="text-sm" style={{ color: "#4f4f4f" }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium" style={{ color: "#146fb5" }}>
                  {language === "HI"
                    ? "👉 अपने मौजूदा POS सिस्टम को बदलने की ज़रूरत नहीं"
                    : "👉 No need to change your existing POS"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onboarding Journey */}
      <section className="section-padding-sm subtle-gradient">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2" style={{ color: "#1b181f" }}>
              {language === "HI" ? "ऑनबोर्डिंग जर्नी" : "Onboarding Journey"}
            </h2>
            <p className="text-muted-foreground">
              {language === "HI"
                ? "अपना सेटअप पूरा करने के लिए इन स्टेप्स को फॉलो करें"
                : "Follow these steps to complete your setup"}
            </p>
          </motion.div>

          {/* Step 0: Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <button
              onClick={() => toggleStep(0)}
              className="w-full bg-white rounded-xl border-2 border-primary/20 p-6 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold" style={{ color: '#146fb5' }}>0</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "लॉगिन / साइनअप" : "Login / Signup"}
                    </h3>
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI"
                        ? "अपना मोबाइल नंबर और OTP डालें"
                        : "Enter your mobile number and OTP"}
                    </p>
                  </div>
                </div>
                {expandedStep === 0 ? (
                  <ChevronUp className="w-6 h-6" style={{ color: '#146fb5' }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: '#146fb5' }} />
                )}
              </div>
            </button>
            {expandedStep === 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-xl border-2 border-primary/20 p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "स्टेप्स:" : "Steps:"}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ color: '#146fb5' }}>1</span>
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "अपना मोबाइल नंबर दर्ज करें" : "Enter your mobile number"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ color: '#146fb5' }}>2</span>
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "\"Send Verification Code\" पर क्लिक करें"
                            : 'Click "Send Verification Code"'}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ color: '#146fb5' }}>3</span>
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "मिले हुए OTP को दर्ज करें" : "Enter the OTP received"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ color: '#146fb5' }}>4</span>
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "Terms & Conditions से सहमत हों"
                            : "Agree to Terms & Conditions"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ color: '#146fb5' }}>5</span>
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "\"Submit\" पर क्लिक करके आगे बढ़ें"
                            : 'Click "Submit" to proceed'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img src={loginImage} alt="Login page" className="w-full h-auto" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Step 1: Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <button
              onClick={() => toggleStep(1)}
              className="w-full bg-white rounded-xl border-2 border-primary/20 p-6 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "स्टेप 1: कंपनी डिटेल्स" : "Step 1: Company Details"}
                    </h3>
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI"
                        ? "ल्यूम को अपने बिज़नेस के बारे में बताएं"
                        : "Tell Lume about your business"}
                    </p>
                  </div>
                </div>
                {expandedStep === 1 ? (
                  <ChevronUp className="w-6 h-6" style={{ color: '#146fb5' }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: '#146fb5' }} />
                )}
              </div>
            </button>
            {expandedStep === 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-xl border-2 border-primary/20 p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "ज़रूरी फ़ील्ड्स:" : "Mandatory Fields:"}
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <div>
                          <span className="font-medium" style={{ color: "#1b181f" }}>
                            {language === "HI"
                              ? "कंपनी का नाम (लीगल नाम) *"
                              : "Company Name (Legal Name) *"}
                          </span>
                          <p className="text-xs" style={{ color: "#4f4f4f" }}>
                            {language === "HI" ? "कम से कम 2 अक्षर" : "Minimum 2 characters"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <div>
                          <span className="font-medium" style={{ color: "#1b181f" }}>
                            {language === "HI" ? "पता *" : "Address *"}
                          </span>
                          <p className="text-xs" style={{ color: "#4f4f4f" }}>
                            {language === "HI" ? "पूरा बिज़नेस एड्रेस" : "Complete business address"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "ऑप्शनल फ़ील्ड्स:" : "Optional Fields:"}
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4f4f4f' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "ईमेल एड्रेस" : "Email address"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4f4f4f' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "GST सेलेक्शन (Yes / No)"
                            : "GST selection (Yes / No)"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4f4f4f' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "GST नंबर (15 कैरेक्टर, अगर GST = Yes)"
                            : "GST Number (15 characters, if GST = Yes)"}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "कम्युनिकेशन प्रेफरेंसेज़:" : "Communication Preferences:"}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "चुनें: WhatsApp, SMS या दोनों"
                            : "Choose: WhatsApp, SMS, or Both"}
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-xs font-medium mb-1" style={{ color: "#146fb5" }}>
                          {language === "HI" ? "मैसेज चार्जेस:" : "Message Charges:"}
                        </p>
                        <p className="text-xs" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "SMS: ₹0.12 / संदेश" : "SMS: ₹0.12 / message"}
                        </p>
                        <p className="text-xs" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "WhatsApp: ₹0.18 (e-bill), ₹0.977 (promotion)"
                            : "WhatsApp: ₹0.18 (e-bill), ₹0.977 (promotion)"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img src={step1Image} alt="Company Details" className="w-full h-auto" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Step 2: Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <button
              onClick={() => toggleStep(2)}
              className="w-full bg-white rounded-xl border-2 border-primary/20 p-6 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "स्टेप 2: पेमेंट और सब्सक्रिप्शन" : "Step 2: Payment & Subscription"}
                    </h3>
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI"
                        ? "अपना प्लान चुनें और एक्टिवेट करें"
                        : "Select your plan and activate"}
                    </p>
                  </div>
                </div>
                {expandedStep === 2 ? (
                  <ChevronUp className="w-6 h-6" style={{ color: '#146fb5' }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: '#146fb5' }} />
                )}
              </div>
            </button>
            {expandedStep === 2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-xl border-2 border-primary/20 p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "उपलब्ध प्लान:" : "Available Plans:"}
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                        <p className="font-medium text-sm mb-1" style={{ color: "#146fb5" }}>
                          {language === "HI" ? "7-दिन का ट्रायल" : "7-Days Trial"}
                        </p>
                        <p className="text-xs" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "मुफ़्त – स्टैण्डर्ड फीचर्स + 120 मैसेज"
                            : "FREE - Standard features with 120 messages"}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-border">
                        <p className="font-medium text-sm mb-1" style={{ color: "#1b181f" }}>
                          {language === "HI" ? "स्टैण्डर्ड" : "Standard"}
                        </p>
                        <p className="text-xs" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "₹2,500 + GST – 500 फ्री मैसेज"
                            : "₹2,500 + GST - 500 free messages"}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-border">
                        <p className="font-medium text-sm mb-1" style={{ color: "#1b181f" }}>
                          {language === "HI" ? "एडवांस" : "Advance"}
                        </p>
                        <p className="text-xs" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "₹7,500 + GST – 500 फ्री मैसेज + एनालिटिक्स"
                            : "₹7,500 + GST - 500 free messages + Analytics"}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg border border-primary/20 bg-primary/5">
                        <p className="font-medium text-sm mb-1" style={{ color: "#146fb5" }}>
                          {language === "HI" ? "प्रीमियम (रिकमेन्डेड)" : "Premium (Recommended)"}
                        </p>
                        <p className="text-xs" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "₹9,500 + GST – सभी फीचर्स + कस्टमर ऐप"
                            : "₹9,500 + GST - All features + Customer App"}
                        </p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-xs font-medium" style={{ color: "#146fb5" }}>
                        {language === "HI"
                          ? "👉 आप कभी भी अपना प्लान अपग्रेड कर सकते हैं"
                          : "👉 You can upgrade your plan anytime"}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img src={step2Image} alt="Pricing Plans" className="w-full h-auto" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Step 3: Store Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <button
              onClick={() => toggleStep(3)}
              className="w-full bg-white rounded-xl border-2 border-primary/20 p-6 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Store className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "स्टेप 3: स्टोर सेटअप" : "Step 3: Store Setup"}
                    </h3>
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI"
                        ? "अपना स्टोर और POS कॉन्फ़िगरेशन बनाएं"
                        : "Create your store and POS configuration"}
                    </p>
                  </div>
                </div>
                {expandedStep === 3 ? (
                  <ChevronUp className="w-6 h-6" style={{ color: '#146fb5' }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: '#146fb5' }} />
                )}
              </div>
            </button>
            {expandedStep === 3 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-xl border-2 border-primary/20 p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI"
                        ? "स्टोर क्रिएशन (ज़रूरी):"
                        : "Store Creation (Mandatory):"}
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "स्टोर का नाम" : "Store Name"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "पिनकोड (6 अंक)" : "Pincode (6 digits)"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI" ? "स्टोर एड्रेस" : "Store Address"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "स्टोर कैटेगरी (Grocery, Pharmacy आदि)"
                            : "Store Category (Grocery, Pharmacy, etc.)"}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "कंडीशनल फ़ील्ड्स:" : "Conditional Fields:"}
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4f4f4f' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "FSSAI लाइसेंस (फूड से जुड़ी कैटेगरी के लिए)"
                            : "FSSAI License (for food-related categories)"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4f4f4f' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "ड्रग लाइसेंस (फार्मेसी के लिए)"
                            : "Drug License (for pharmacy)"}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "POS सेटअप:" : "POS Setup:"}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "POS नाम (ज़रूरी)"
                            : "POS Name (mandatory)"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#4f4f4f' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "POS लोकेशन (ऑप्शनल)"
                            : "POS Location (optional)"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "स्टोर चुनें (ज़रूरी)"
                            : "Select Store (mandatory)"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "टर्मिनल OS (Windows / Linux)"
                            : "Terminal OS (Windows / Linux)"}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-xs font-medium" style={{ color: "#146fb5" }}>
                        {language === "HI"
                          ? "👉 आप बाद में कई स्टोर्स और POS टर्मिनल जोड़ सकते हैं"
                          : "👉 You can add multiple stores and POS terminals later"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={step3Image} alt="Store Creation" className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={step4Image} alt="Category Selection" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Step 4: Payment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <button
              onClick={() => toggleStep(4)}
              className="w-full bg-white rounded-xl border-2 border-primary/20 p-6 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "स्टेप 4: पेमेंट" : "Step 4: Payment"}
                    </h3>
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI"
                        ? "पेमेंट करके अपना प्लान एक्टिवेट करें"
                        : "Complete payment to activate your plan"}
                    </p>
                  </div>
                </div>
                {expandedStep === 4 ? (
                  <ChevronUp className="w-6 h-6" style={{ color: '#146fb5' }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: '#146fb5' }} />
                )}
              </div>
            </button>
            {expandedStep === 4 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-xl border-2 border-primary/20 p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "पेमेंट ऑप्शंस:" : "Payment Options:"}
                    </h4>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-3 mb-2">
                          <CreditCard className="w-5 h-5" style={{ color: "#146fb5" }} />
                          <span className="font-medium" style={{ color: "#1b181f" }}>
                            {language === "HI" ? "Razorpay (ऑनलाइन)" : "Razorpay (Online)"}
                          </span>
                        </div>
                        <div className="pl-8 space-y-2 text-sm" style={{ color: "#4f4f4f" }}>
                          <p>
                            {language === "HI"
                              ? "• UPI / कार्ड / नेट बैंकिंग / वॉलेट"
                              : "• UPI / Card / Net Banking / Wallet"}
                          </p>
                          <p>
                            {language === "HI" ? "• ऑटो वेरिफ़िकेशन" : "• Auto verification"}
                          </p>
                          <p>
                            {language === "HI"
                              ? "• रिसीट ऑटो-डाउनलोड"
                              : "• Receipt auto-download"}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-3 mb-2">
                          <ShoppingBag className="w-5 h-5" style={{ color: "#4f4f4f" }} />
                          <span className="font-medium" style={{ color: "#1b181f" }}>
                            {language === "HI" ? "QR कोड पेमेंट" : "QR Code Payment"}
                          </span>
                        </div>
                        <div className="pl-8 space-y-2 text-sm" style={{ color: "#4f4f4f" }}>
                          <p>
                            {language === "HI"
                              ? "• किसी भी UPI ऐप से QR स्कैन करें"
                              : "• Scan QR using any UPI app"}
                          </p>
                          <p>
                            {language === "HI"
                              ? "• अमाउंट पहले से भरा हुआ रहेगा"
                              : "• Amount pre-filled"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-xs font-medium" style={{ color: "#146fb5" }}>
                        {language === "HI"
                          ? "👉 ऑनबोर्डिंग तभी पूरा होता है जब पेमेंट कन्फर्म हो जाए"
                          : "👉 Onboarding completes only after payment confirmation"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={step5Image} alt="Payment Method" className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={step6Image} alt="Payment Options" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Step 5: Completion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <button
              onClick={() => toggleStep(5)}
              className="w-full bg-white rounded-xl border-2 border-primary/20 p-6 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "स्टेप 5: सब तैयार है!" : "Step 5: You're All Set!"}
                    </h3>
                    <p className="text-sm" style={{ color: "#4f4f4f" }}>
                      {language === "HI"
                        ? "अब बिल बनाना और अपनी दुकान मैनेज करना शुरू करें"
                        : "Start creating bills and managing your store"}
                    </p>
                  </div>
                </div>
                {expandedStep === 5 ? (
                  <ChevronUp className="w-6 h-6" style={{ color: '#146fb5' }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: '#146fb5' }} />
                )}
              </div>
            </button>
            {expandedStep === 5 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white rounded-xl border-2 border-primary/20 p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4" style={{ color: "#1b181f" }}>
                      {language === "HI" ? "आगे क्या?" : "What's Next?"}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "आपका ऑनबोर्डिंग पूरा हो गया है!"
                            : "Your onboarding is complete!"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "डैशबोर्ड से बिल बनाना शुरू करें"
                            : "Start creating bills from the dashboard"}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span className="text-sm" style={{ color: "#4f4f4f" }}>
                          {language === "HI"
                            ? "कैम्पेन, एनालिटिक्स और बाकी फीचर्स एक्सप्लोर करें"
                            : "Explore campaigns, analytics, and more features"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={step7DoneImage} alt="Onboarding Complete" className="w-full h-auto" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={step7StartBillImage} alt="Start Creating Bills" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4" style={{ color: "#1b181f" }}>
              {language === "HI" ? "सेटअप के दौरान मदद चाहिए?" : "Need Help During Setup?"}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "#4f4f4f" }}>
              {language === "HI"
                ? "अगर आपको ल्यूम सेटअप करते समय कोई दिक्कत आती है, तो हमारी सपोर्ट टीम हमेशा आपकी मदद के लिए तैयार है।"
                : "If you face any issues while setting up Lume, our support team is always available to help you."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@apeirosai.com"
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary/20 rounded-lg hover:bg-primary/5 transition-all"
              >
                <Mail className="w-5 h-5" style={{ color: "#146fb5" }} />
                <span className="font-medium" style={{ color: "#1b181f" }}>support@apeirosai.com</span>
              </a>
              <a
                href="tel:+919724151647"
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary/20 rounded-lg hover:bg-primary/5 transition-all"
              >
                <Phone className="w-5 h-5" style={{ color: "#146fb5" }} />
                <span className="font-medium" style={{ color: "#1b181f" }}>+91 97241 51647</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

