import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ReceiptIndianRupee,
  FileText,
  Image as ImageIcon,
  Smartphone,
  ListChecks,
  Info,
  Mail,
  Phone,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Billing guide images
import billTabsImage from "@/assets/help-guide/billing-guides/step-1-bill-tabs.png";
import quickBillImage from "@/assets/help-guide/billing-guides/step-2-quickbill.png";
import posStep1Image from "@/assets/help-guide/billing-guides/step-3-pos-bill-step-1.png";
import posStep2Image from "@/assets/help-guide/billing-guides/step-3-pos-bill-step-2.png";
import posStep3Image from "@/assets/help-guide/billing-guides/step-3-pos-bill-step-3.png";
import imageBillImage from "@/assets/help-guide/billing-guides/step-4-imagebill.png";
import ebillListingImage from "@/assets/help-guide/billing-guides/step-5-ebillListing.png";
import billingGuideBanner from "@/assets/help-guide/billing-guide.png";

type BillingTypeKey = "quick" | "pos" | "image" | "mpos" | "listing";

export default function BillingGuide() {
  const [openSection, setOpenSection] = useState<BillingTypeKey | null>("quick");
  const { language } = useLanguage();

  const toggleSection = (key: BillingTypeKey) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero / SEO banner */}
      <section className="relative pt-20 lg:pt-24 pb-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={billingGuideBanner}
            alt="Illustration of billing tools and mobile POS for Lume"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/75 to-white/40" />
        </div>

        <div className="relative z-10">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl py-8 lg:py-14"
            >
              {language === "HI" ? (
                <>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug font-display font-bold mb-3 text-left">
                    <span style={{ color: "#1b181f" }}>ल्यूम रिटेलर्स के लिए </span>
                    <span style={{ color: "#146fb5" }}>बिलिंग गाइड</span>
                  </h1>
                  <p className="mt-1 text-base md:text-xl mb-3 text-left leading-relaxed" style={{ color: "#1b181f" }}>
                    ल्यूम में अलग–अलग तरह के बिल कैसे बनाएं, ये गाइड आपको आसान भाषा में स्टेप–बाय–स्टेप
                    समझाता है। सिर्फ ज़रूरी जानकारी भरें, बाकी सब बाद में भी जोड़ा जा सकता है।
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-left">
                    <span style={{ color: "#1b181f" }}>Billing Guide for </span>
                    <span style={{ color: "#146fb5" }}>Lume Retailers</span>
                  </h1>
                  <p className="text-lg md:text-2xl mb-3 text-left" style={{ color: "#1b181f" }}>
                    Learn how to create bills in Lume in just a few simple steps. You only need the
                    minimum required details – everything else is optional.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top information + overview */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide space-y-4">
          {/* Info banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl px-6 py-8 md:px-10 md:py-10 max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-display font-bold mb-3"
              style={{ color: "#146fb5" }}
            >
              {language === "HI"
                ? "बिलिंग आसान है – सिर्फ ज़रूरी जानकारी भरें"
                : "Billing is Simple – Fill Only What You Need"}
            </h2>
            <p className="text-sm md:text-lg mb-2" style={{ color: "#4f4f4f" }}>
              {language === "HI"
                ? "ल्यूम में आप सिर्फ ज़रूरी फ़ील्ड्स भरकर भी बिल बना सकते हैं। बाकी ऑप्शनल फ़ील्ड्स आपको बाद में बेहतर रिपोर्ट और इनसाइट्स देने के लिए होते हैं, पर बिलिंग के लिए अनिवार्य नहीं हैं।"
                : "In Lume, you can create a bill by filling only the mandatory fields. Optional fields are there to give you better insights later, but you can safely skip them."}
            </p>
            <p className="text-sm md:text-lg font-medium" style={{ color: "#1b181f" }}>
              {language === "HI"
                ? "ऑप्शनल फ़ील्ड्स छोड़ देने पर भी बिलिंग 100% सही से काम करेगी।"
                : "You can skip optional fields. Billing will still work perfectly."}
            </p>
          </motion.div>

          {/* Tabs overview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#f0f6ff] via-[#e6f0ff] to-[#f5f8ff] border border-primary/15 rounded-2xl shadow-sm px-6 py-6 md:px-8 md:py-8 grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6 items-center">
              <div>
                <h3
                  className="text-xl md:text-2xl font-semibold mb-3"
                  style={{ color: "#1b181f" }}
                >
                  {language === "HI"
                    ? "सारे बिलिंग ऑप्शंस एक ही जगह"
                    : "All Billing Options in One Place"}
                </h3>
                <p className="text-sm md:text-lg leading-relaxed" style={{ color: "#4f4f4f" }}>
                  {language === "HI"
                    ? "क्विक बिल से लेकर इमेज बिल और MPOS तक – आप वही तरीका चुन सकते हैं जो आपके काउंटर और टीम के लिए सबसे आसान हो। यह ओवरव्यू आपको सही बिलिंग फ्लो चुनने में मदद करेगा।"
                    : "From Quick Bill to Image Bill and MPOS, you can choose the billing type that matches how your store works. Use this overview to decide which flow is best for your counter and team."}
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="rounded-xl border border-border/60 overflow-hidden bg-white shadow-sm">
                  <img
                    src={billTabsImage}
                    alt="Lume billing tabs - Quick Bill, POS Bill, Image Bill, MPOS, E‑Bill Listing"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Billing types accordion */}
      <section className="section-padding-sm subtle-gradient">
        <div className="container-wide space-y-5">
          {/* Quick Bill */}
          <BillingSection
            id="quick"
            title={language === "HI" ? "क्विक बिल" : "Quick Bill"}
            icon={<ReceiptIndianRupee className="w-6 h-6" style={{ color: "#146fb5" }} />}
            open={openSection === "quick"}
            onToggle={() => toggleSection("quick")}
            description={
              language === "HI"
                ? "क्विक बिल तेज़ ट्रांज़ैक्शन और व्यस्त काउंटर के लिए बनाया गया है। कुछ क्लिक में बिल तैयार हो जाता है।"
                : "Quick Bill is designed for fast transactions and busy counters. Create a bill in just a few clicks."
            }
            mandatoryItems={[
              language === "HI" ? "स्टोर सेलेक्शन" : "Store selection",
              language === "HI"
                ? "कस्टमर का मोबाइल नंबर या नाम"
                : "Customer mobile number or name",
              language === "HI"
                ? "कम से कम एक प्रोडक्ट (नाम, मात्रा, कीमत)"
                : "At least one product (name, quantity, price)",
              language === "HI" ? "पेमेंट मेथड" : "Payment method",
            ]}
            optionalItems={[
              language === "HI" ? "डिस्काउंट" : "Discount",
              language === "HI" ? "सेल्समैन" : "Salesman",
              language === "HI" ? "यूनिट टाइप" : "Unit type",
            ]}
            steps={[
              language === "HI" ? "स्टोर चुनें" : "Select store",
              language === "HI"
                ? "कस्टमर का मोबाइल नंबर या नाम भरें"
                : "Enter customer mobile number or name",
              language === "HI"
                ? "कम से कम एक प्रोडक्ट मात्रा और कीमत के साथ जोड़ें"
                : "Add at least one product with quantity and price",
              language === "HI"
                ? "पेमेंट मेथड चुनें (Cash / UPI / Card / Credit)"
                : "Choose payment method (Cash / UPI / Card / Credit)",
              language === "HI"
                ? "सेव करें और बिल कस्टमर को भेजें"
                : "Save and send the bill to your customer",
            ]}
            bestFor={
              language === "HI"
                ? "जब काउंटर पर भीड़ हो और आपको जल्दी–जल्दी बिल बनाना हो।"
                : "Fast billing and quick customer checkout when the counter is busy."
            }
            image={
              <img
                src={quickBillImage}
                alt="Quick Bill screen in Lume"
                className="w-full h-auto"
              />
            }
          />

          {/* POS Bill */}
          <BillingSection
            id="pos"
            title={language === "HI" ? "POS बिल" : "POS Bill"}
            icon={<FileText className="w-6 h-6" style={{ color: "#146fb5" }} />}
            open={openSection === "pos"}
            onToggle={() => toggleSection("pos")}
            description={
              language === "HI"
                ? "POS बिल एक पूरा इनवॉइस है जिसमें इन्वेंटरी और कस्टमर दोनों की डिटेल्स रहती हैं – डिटेल्ड GST बिल के लिए परफ़ेक्ट।"
                : "POS Bill is a complete invoice with inventory and customer details – perfect for detailed GST bills."
            }
            mandatoryItems={[
              language === "HI" ? "स्टोर सेलेक्शन" : "Store selection",
              language === "HI"
                ? "कस्टमर का मोबाइल नंबर या नाम"
                : "Customer mobile number or name",
              language === "HI"
                ? "इन्वेंटरी से कम से कम एक प्रोडक्ट"
                : "At least one product from inventory",
              language === "HI" ? "पेमेंट मेथड" : "Payment method",
            ]}
            optionalItems={[
              language === "HI" ? "ईमेल एड्रेस" : "Email address",
              language === "HI"
                ? "डेट ऑफ़ बर्थ और एनिवर्सरी"
                : "Date of birth & Anniversary",
              language === "HI" ? "जेंडर" : "Gender",
              language === "HI" ? "प्रोडक्ट डिस्क्रिप्शन" : "Product description",
              language === "HI"
                ? "डिस्काउंट या टैक्स फ़ील्ड्स"
                : "Discount or tax fields",
            ]}
            steps={[
              language === "HI"
                ? "सही स्टोर सेलेक्ट करें"
                : "Select the correct store",
              language === "HI"
                ? "कस्टमर का मोबाइल नंबर या नाम भरें (बाकी डिटेल्स ऑप्शनल हैं)"
                : "Enter customer mobile number or name (other details are optional)",
              language === "HI"
                ? "इन्वेंटरी लिस्ट से प्रोडक्ट्स जोड़ें"
                : "Add products from your inventory list",
              language === "HI"
                ? "मात्रा, कीमत और डिस्काउंट चेक करें"
                : "Review quantities, prices and discounts if needed",
              language === "HI"
                ? "पेमेंट मेथड चुनें और इनवॉइस सेव/डाउनलोड करें"
                : "Choose payment method and save / download invoice",
            ]}
            bestFor={
              language === "HI"
                ? "जब आपको कस्टमर डिटेल्स के साथ प्रोफेशनल GST बिल चाहिए – जैसे इलेक्ट्रॉनिक्स, फ़ैशन या फ़ार्मेसी में।"
                : "Professional billing with customer details, ideal for electronics, fashion, pharmacies and GST invoices."
            }
            image={
              <div className="space-y-4">
                <img
                  src={posStep1Image}
                  alt="POS Bill customer information step in Lume"
                  className="w-full h-auto rounded-lg border border-border"
                />
                <img
                  src={posStep2Image}
                  alt="POS Bill add products step in Lume"
                  className="w-full h-auto rounded-lg border border-border"
                />
                <img
                  src={posStep3Image}
                  alt="POS Bill payment details step in Lume"
                  className="w-full h-auto rounded-lg border border-border"
                />
              </div>
            }
          />

          {/* Image Bill */}
          <BillingSection
            id="image"
            title={language === "HI" ? "इमेज बिल" : "Image Bill"}
            icon={<ImageIcon className="w-6 h-6" style={{ color: "#146fb5" }} />}
            open={openSection === "image"}
            onToggle={() => toggleSection("image")}
            description={
              language === "HI"
                ? "इमेज बिल से आप किसी भी फिज़िकल बिल की फोटो को डिजिटल e‑bill में बदल सकते हैं।"
                : "Image Bill lets you convert a photo of a physical bill into a digital e‑bill."
            }
            mandatoryItems={[
              language === "HI" ? "स्टोर सेलेक्शन" : "Store selection",
              language === "HI"
                ? "कस्टमर का मोबाइल नंबर या नाम"
                : "Customer mobile number or name",
              language === "HI"
                ? "बिल की साफ़ इमेज अपलोड करें"
                : "Upload clear bill image",
              language === "HI"
                ? "टोटल बिल अमाउंट"
                : "Total bill amount",
              language === "HI" ? "पेमेंट मेथड" : "Payment method",
            ]}
            optionalItems={[
              language === "HI"
                ? "ऑटो–डिटेक्टेड लाइन आइटम्स में एडिट करना"
                : "Editing auto-detected line items",
              language === "HI"
                ? "अतिरिक्त कस्टमर डिटेल्स (ईमेल, नोट्स आदि)"
                : "Additional customer details (email, notes, etc.)",
            ]}
            steps={[
              language === "HI"
                ? "वह स्टोर चुनें जहाँ यह बिल बना था"
                : "Select the store where the bill belongs",
              language === "HI"
                ? "फिज़िकल बिल की साफ़ फोटो या स्कैन अपलोड करें"
                : "Upload a clear photo or scan of the physical bill",
              language === "HI"
                ? "इमेज से निकले डिटेल्स को चेक करें"
                : "Review the details detected from the image",
              language === "HI"
                ? "टोटल बिल अमाउंट भरें या कन्फर्म करें"
                : "Enter or confirm the total bill amount",
              language === "HI"
                ? "डिजिटल बिल कस्टमर को भेजें"
                : "Send the digital bill to the customer",
            ]}
            bestFor={
              language === "HI"
                ? "पुराने सिस्टम या हाथ से लिखे गए बिलों को डिजिटल बनाने के लिए।"
                : "Digitising handwritten or printed bills from old systems or manual notebooks."
            }
            image={
              <img
                src={imageBillImage}
                alt="Image Bill screen in Lume"
                className="w-full h-auto rounded-lg border border-border"
              />
            }
          />

          {/* MPOS */}
          <BillingSection
            id="mpos"
            title={language === "HI" ? "MPOS (मोबाइल POS)" : "MPOS (Mobile POS)"}
            icon={<Smartphone className="w-6 h-6" style={{ color: "#146fb5" }} />}
            open={openSection === "mpos"}
            onToggle={() => toggleSection("mpos")}
            description={
              language === "HI"
                ? "MPOS ल्यूम का मोबाइल‑फ्रेंडली POS है – बारकोड स्कैनिंग और बिना फिक्स्ड काउंटर के बिलिंग के लिए बिल्कुल सही।"
                : "MPOS is Lume’s mobile‑friendly POS system, ideal for barcode scanning and counter‑less billing."
            }
            mandatoryItems={[
              language === "HI" ? "स्टोर सेलेक्शन" : "Store selection",
              language === "HI"
                ? "कम से कम एक प्रोडक्ट (स्कैन किया हुआ या सेलेक्ट किया हुआ)"
                : "At least one product (scanned or selected)",
              language === "HI" ? "पेमेंट मेथड" : "Payment method",
            ]}
            optionalItems={[
              language === "HI" ? "कस्टमर डिटेल्स" : "Customer details",
              language === "HI" ? "डिस्काउंट्स" : "Discounts",
              language === "HI"
                ? "नोट्स या ऑर्डर रेफ़रेंस"
                : "Notes or order references",
            ]}
            steps={[
              language === "HI"
                ? "बिलिंग टैब से MPOS खोलें"
                : "Open MPOS from the billing tabs",
              language === "HI"
                ? "बारकोड स्कैनर से प्रोडक्ट स्कैन करें या लिस्ट से सेलेक्ट करें"
                : "Scan products using barcode scanner or select from the list",
              language === "HI"
                ? "कार्ट में पड़े आइटम्स को चेक करें"
                : "Review items in the cart",
              language === "HI"
                ? "पेमेंट मेथड चुनकर कन्फर्म करें"
                : "Choose payment method and confirm",
              language === "HI"
                ? "बिल तुरंत बन जाएगा और डिजिटल तरीके से भेजा जा सकता है"
                : "Bill is generated instantly and can be shared digitally",
            ]}
            bestFor={
              language === "HI"
                ? "मोबाइल या टैबलेट पर तेज़ बिलिंग, बारकोड‑आधारित चेकआउट और लचीले POS के लिए।"
                : "Mobile billing, barcode‑based checkout and stores that want fast POS on tablets or phones."
            }
            image={
              <div className="rounded-lg border border-dashed border-primary/30 p-4 text-sm text-center bg-primary/5">
                {language === "HI"
                  ? "MPOS का फ्लो क्विक बिल और POS बिल जैसा ही है – प्रोडक्ट स्कैन या सेलेक्ट करें, फिर पेमेंट चुनें। आपका पार्टनर ऐप डिवाइस के हिसाब से स्क्रीन थोड़ा अलग दिखा सकता है।"
                  : "MPOS uses a similar flow as Quick Bill and POS Bill – scan or select products, then choose payment. Your partner app may show this screen slightly differently based on device."}
              </div>
            }
          />

          {/* E‑Bill Listing */}
          <BillingSection
            id="listing"
            title={language === "HI" ? "E‑Bill लिस्टिंग" : "E‑Bill Listing"}
            icon={<ListChecks className="w-6 h-6" style={{ color: "#146fb5" }} />}
            open={openSection === "listing"}
            onToggle={() => toggleSection("listing")}
            description={
              language === "HI"
                ? "E‑Bill लिस्टिंग वह जगह है जहाँ आप ल्यूम में बने सारे बिल देख और मैनेज कर सकते हैं।"
                : "E‑Bill Listing is where you can view and manage all the bills created in Lume."
            }
            mandatoryItems={[
              language === "HI"
                ? "कोई भी फ़ील्ड ज़रूरी नहीं – यहाँ सिर्फ बिल देखना और मैनेज करना होता है।"
                : "No fields are mandatory – this is only for viewing and managing bills.",
            ]}
            optionalItems={[
              language === "HI"
                ? "आप कस्टमर नाम, बिल नंबर, तारीख या अमाउंट के आधार पर फ़िल्टर या सर्च कर सकते हैं।"
                : "You can filter or search using customer name, bill number, date or amount.",
            ]}
            steps={[
              language === "HI"
                ? "E‑Bill लिस्टिंग टैब खोलें"
                : "Open the E‑Bill Listing tab",
              language === "HI"
                ? "सर्च बॉक्स या फ़िल्टर्स से बिल ढूँढें"
                : "Use search box or filters to find a bill",
              language === "HI"
                ? "डिटेल्स देखने के लिए किसी भी बिल पर क्लिक करें"
                : "Click on a bill to view details",
              language === "HI"
                ? "ज़रूरत हो तो PDF डाउनलोड करें या डिजिटल बिल दोबारा भेजें"
                : "Download the PDF or resend the digital bill if needed",
            ]}
            bestFor={
              language === "HI"
                ? "पुराने बिल देखने, दोबारा शेयर करने और e‑bill परफ़ॉर्मेंस ट्रैक करने के लिए।"
                : "Checking history, sharing old bills again and tracking e‑bill performance."
            }
            image={
              <img
                src={ebillListingImage}
                alt="E‑Bill Listing screen in Lume"
                className="w-full h-auto rounded-lg border border-border"
              />
            }
          />
        </div>
      </section>

      {/* Important clarification box */}
      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8 flex gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" style={{ color: "#b45309" }} />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2" style={{ color: "#1b181f" }}>
                {language === "HI"
                  ? "हर फ़ील्ड भरना ज़रूरी नहीं है"
                  : "You do NOT need to fill every field"}
              </h2>
              <p className="text-sm md:text-base" style={{ color: "#4f4f4f" }}>
                {language === "HI"
                  ? "सिर्फ ज़रूरी फ़ील्ड्स भरकर भी आप आराम से बिल बना सकते हैं। ऑप्शनल फ़ील्ड्स आगे चलकर कस्टमर को बेहतर समझने और रिपोर्ट्स मजबूत बनाने में मदद करते हैं, पर बिलिंग इनके बिना भी ठीक से चलेगी। पहले सिंपल से शुरू करें – आराम से होने लगे तो बाद में और डिटेल्स जोड़ सकते हैं।"
                  : "Mandatory fields are enough to create a bill. Optional fields help you understand your customers better in the future, but they are not required for billing to work. Start simple – you can always add more details later as you get comfortable."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support section */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-6 md:p-8 text-center"
          >
            <h2 className="text-2xl font-display font-bold mb-3" style={{ color: "#1b181f" }}>
              {language === "HI" ? "बिलिंग में मदद चाहिए?" : "Need Help?"}
            </h2>
            <p className="text-sm md:text-base mb-5" style={{ color: "#4f4f4f" }}>
              {language === "HI"
                ? "अगर बिलिंग करते समय आपको कोई दिक्कत आए, तो हमारी सपोर्ट टीम हमेशा मदद के लिए तैयार है। बिना हिचकिचाए हमसे संपर्क करें – हमारा लक्ष्य है कि आपकी दुकान बेहतर तरीके से बढ़े।"
                : "Our support team is always available if you face any issue while billing. Do not hesitate to reach out – we are here to help your store grow."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support@apeirosai.com"
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors"
              >
                <Mail className="w-5 h-5" style={{ color: "#146fb5" }} />
                <span className="text-sm font-medium" style={{ color: "#1b181f" }}>
                  support@apeirosai.com
                </span>
              </a>
              <a
                href="tel:+919724151647"
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors"
              >
                <Phone className="w-5 h-5" style={{ color: "#146fb5" }} />
                <span className="text-sm font-medium" style={{ color: "#1b181f" }}>
                  +91 97241 51647
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface BillingSectionProps {
  id: BillingTypeKey;
  title: string;
  icon: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  description: string;
  mandatoryItems: string[];
  optionalItems: string[];
  steps: string[];
  bestFor: string;
  image: React.ReactNode;
}

function BillingSection({
  title,
  icon,
  open,
  onToggle,
  description,
  mandatoryItems,
  optionalItems,
  steps,
  bestFor,
  image,
}: BillingSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left hover:bg-primary/5 transition-colors"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold" style={{ color: "#1b181f" }}>
              {title}
            </h3>
            <p className="text-xs md:text-sm" style={{ color: "#4f4f4f" }}>
              {description}
            </p>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#146fb5" }} />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#146fb5" }} />
        )}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border px-5 py-5 md:px-6 md:py-6"
        >
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2" style={{ color: "#1b181f" }}>
                  Mandatory fields
                </h4>
                <ul className="space-y-1 text-sm">
                  {mandatoryItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span style={{ color: "#4f4f4f" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2" style={{ color: "#1b181f" }}>
                  Optional fields
                </h4>
                <ul className="space-y-1 text-sm">
                  {optionalItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span style={{ color: "#4f4f4f" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2" style={{ color: "#1b181f" }}>
                  How to use
                </h4>
                <ol className="list-decimal list-inside space-y-1 text-sm" style={{ color: "#4f4f4f" }}>
                  {steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs md:text-sm" style={{ color: "#146fb5" }}>
                  Best for: {bestFor}
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white">{image}</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}


