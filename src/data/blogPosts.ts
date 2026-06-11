/**
 * Static blog preview data. Replace or extend with CMS/API when ready.
 */

import { getBlogThumbnail } from "@/data/blogThumbnails";

export interface BlogPostPreview {
  slug: string;
  title: string;
  titleHI: string;
  description: string;
  descriptionHI: string;
  /** Optional cover image URL (e.g. from CMS later) */
  imageSrc?: string;
  /** Card / SEO excerpt; falls back to description when omitted */
  excerpt?: string;
  excerptHI?: string;
  category?: string;
  readTime?: string;
}

export const blogPosts: BlogPostPreview[] = [
  {
    slug: "why-smart-pos-beats-manual-billing-busy-stores",
    title: "Why Smart POS Beats Manual Billing in Busy Stores (2026 Guide)",
    titleHI: "भीड़ वाली दुकानों में स्मार्ट POS मैनुअल बिलिंग से क्यों आगे है (2026 गाइड)",
    excerpt:
      "Still using manual billing in your store? Learn why smart POS systems are faster, more accurate, and better for busy retail businesses in India.",
    excerptHI:
      "अब भी दुकान में मैनुअल बिलिंग कर रहे हैं? जानें क्यों स्मार्ट POS सिस्टम तेज, अधिक सटीक और भारत के व्यस्त रिटेल व्यवसायों के लिए बेहतर हैं।",
    description:
      "Still using manual billing in your store? Learn why smart POS systems are faster, more accurate, and better for busy retail businesses in India.",
    descriptionHI:
      "अब भी दुकान में मैनुअल बिलिंग कर रहे हैं? जानें क्यों स्मार्ट POS सिस्टम तेज, अधिक सटीक और भारत के व्यस्त रिटेल व्यवसायों के लिए बेहतर हैं।",
    category: "POS",
    readTime: "7 min read",
  },
  {
    slug: "turn-digital-bill-into-whatsapp-touchpoint",
    title: "Turn Every Digital Bill into a WhatsApp Touchpoint (2026 Retail Guide)",
    titleHI: "हर डिजिटल बिल को WhatsApp टचपॉइंट में बदलें (2026 रिटेल गाइड)",
    excerpt:
      "Learn how sending digital bills on WhatsApp can boost customer engagement, feedback, and repeat sales for retail businesses in India.",
    excerptHI:
      "जानें कैसे WhatsApp पर डिजिटल बिल भेजना भारत के रिटेल व्यवसायों के लिए ग्राहक जुड़ाव, फ़ीडबैक और दोबारा बिक्री बढ़ा सकता है।",
    description:
      "Learn how sending digital bills on WhatsApp can boost customer engagement, feedback, and repeat sales for retail businesses in India.",
    descriptionHI:
      "जानें कैसे WhatsApp पर डिजिटल बिल भेजना भारत के रिटेल व्यवसायों के लिए ग्राहक जुड़ाव, फ़ीडबैक और दोबारा बिक्री बढ़ा सकता है।",
    category: "Growth",
    readTime: "7 min read",
  },
  {
    slug: "loyalty-without-complexity",
    title: "Loyalty Programs That Work for Small Shops",
    titleHI: "छोटी दुकानों के लिए काम करने वाले लॉयल्टी प्रोग्राम",
    excerpt:
      "Simple cashback, milestone rewards, and frequency programmes that small retailers can actually run — without a big team or complicated setup.",
    excerptHI:
      "आसान कैशबैक, माइलस्टोन रिवॉर्ड और फ्रीक्वेंसी प्रोग्राम जो छोटे रिटेलर बिना बड़ी टीम के चला सकते हैं।",
    description:
      "Simple cashback, milestone rewards, and frequency programmes that small retailers can actually run — without a big team or complicated setup.",
    descriptionHI:
      "आसान कैशबैक, माइलस्टोन रिवॉर्ड और फ्रीक्वेंसी प्रोग्राम जो छोटे रिटेलर बिना बड़ी टीम के चला सकते हैं।",
    category: "Growth",
    readTime: "7 min read",
  },
  {
    slug: "inventory-cash-flow-tips",
    title: "Tighter Inventory, Healthier Cash Flow",
    titleHI: "बेहतर इन्वेंटरी, मज़बूत कैश फ्लो",
    excerpt:
      "Dead stock is money sleeping on your shelves. Learn how smarter inventory management directly improves cash flow for Indian retail businesses.",
    excerptHI:
      "डेड स्टॉक आपकी शेल्फ पर सोया हुआ पैसा है। जानें कैसे स्मार्ट इन्वेंटरी मैनेजमेंट कैश फ्लो को बेहतर बनाती है।",
    description:
      "Dead stock is money sleeping on your shelves. Learn how smarter inventory management directly improves cash flow for Indian retail businesses.",
    descriptionHI:
      "डेड स्टॉक आपकी शेल्फ पर सोया हुआ पैसा है। जानें कैसे स्मार्ट इन्वेंटरी मैनेजमेंट कैश फ्लो को बेहतर बनाती है।",
    category: "Operations",
    readTime: "7 min read",
  },
  {
    slug: "customer-feedback-that-helps",
    title: "Collecting Feedback Customers Actually Want to Give",
    titleHI: "ऐसा फ़ीडबैक जो ग्राहक देना चाहें",
    excerpt:
      "Most dissatisfied customers leave without saying a word. Here is how to collect honest, actionable feedback through your billing process.",
    excerptHI:
      "ज़्यादातर नाराज़ ग्राहक बिना कुछ कहे चले जाते हैं। जानें कैसे बिलिंग के ज़रिए सच्चा और उपयोगी फ़ीडबैक पाएं।",
    description:
      "Most dissatisfied customers leave without saying a word. Here is how to collect honest, actionable feedback through your billing process.",
    descriptionHI:
      "ज़्यादातर नाराज़ ग्राहक बिना कुछ कहे चले जाते हैं। जानें कैसे बिलिंग के ज़रिए सच्चा और उपयोगी फ़ीडबैक पाएं।",
    category: "Growth",
    readTime: "6 min read",
  },
  {
    slug: "gst-billing-basics-retailers-india",
    title: "GST Billing Basics Every Retailer Should Know (2026 Guide)",
    titleHI: "GST बिलिंग की बुनियादी बातें — हर रिटेलर के लिए (2026 गाइड)",
    excerpt:
      "Learn GST billing basics for retail businesses in India. Understand invoices, tax rules, and how billing software simplifies compliance.",
    excerptHI:
      "भारत में रिटेल के लिए GST बिलिंग की बुनियादी बातें: इनवॉइस, टैक्स नियम और बिलिंग सॉफ़्टवेयर से कम्प्लायंस आसान कैसे होती है।",
    description:
      "Learn GST billing basics for retail businesses in India. Understand invoices, tax rules, and how billing software simplifies compliance.",
    descriptionHI:
      "भारत में रिटेल के लिए GST बिलिंग की बुनियादी बातें: इनवॉइस, टैक्स नियम और बिलिंग सॉफ़्टवेयर से कम्प्लायंस आसान कैसे होती है।",
    category: "Billing",
    readTime: "6 min read",
  },
  {
    slug: "gst-billing-mistakes-small-businesses",
    title: "GST Billing Mistakes Small Businesses Make (And How to Avoid Them)",
    titleHI: "छोटे व्यवसायों की GST बिलिंग गलतियाँ — और उनसे कैसे बचें",
    excerpt:
      "Wrong tax rates, incomplete invoices, IGST vs CGST errors — these GST billing mistakes are common and costly. Learn how to avoid every one of them.",
    excerptHI:
      "गलत टैक्स रेट, अधूरे इनवॉइस, IGST बनाम CGST की गलतियाँ — ये GST बिलिंग गलतियाँ आम और महंगी हैं। जानें कैसे इनसे बचें।",
    description:
      "Wrong tax rates, incomplete invoices, IGST vs CGST errors — these GST billing mistakes are common and costly. Learn how to avoid every one of them.",
    descriptionHI:
      "गलत टैक्स रेट, अधूरे इनवॉइस, IGST बनाम CGST की गलतियाँ — ये GST बिलिंग गलतियाँ आम और महंगी हैं। जानें कैसे इनसे बचें।",
    category: "Billing",
    readTime: "7 min read",
  },
  {
    slug: "e-billing-explained",
    title: "E-Billing Explained: Why Paper Bills Are Becoming Obsolete",
    titleHI: "E-बिलिंग समझाई: पेपर बिल क्यों पुराने पड़ रहे हैं",
    excerpt:
      "Paper receipts cost more than you think and do less than you need. Here is what e-billing actually means and why the switch makes practical sense.",
    excerptHI:
      "पेपर रिसीप्ट आपकी सोच से ज़्यादा महंगी हैं और कम काम करती हैं। जानें e-बिलिंग क्या है और स्विच करना क्यों समझदारी है।",
    description:
      "Paper receipts cost more than you think and do less than you need. Here is what e-billing actually means and why the switch makes practical sense.",
    descriptionHI:
      "पेपर रिसीप्ट आपकी सोच से ज़्यादा महंगी हैं और कम काम करती हैं। जानें e-बिलिंग क्या है और स्विच करना क्यों समझदारी है।",
    category: "Billing",
    readTime: "6 min read",
  },
  {
    slug: "how-to-choose-right-pos-system-2026",
    title: "How to Choose the Right POS System for Your Store in 2026",
    titleHI: "2026 में अपनी दुकान के लिए सही POS सिस्टम कैसे चुनें",
    excerpt:
      "Not all POS systems are built the same. Here is what to evaluate, what red flags to watch for, and the questions to ask before you commit.",
    excerptHI:
      "सभी POS सिस्टम एक जैसे नहीं होते। जानें क्या देखें, किन बातों से सावधान रहें और साइन अप करने से पहले कौन से सवाल पूछें।",
    description:
      "Not all POS systems are built the same. Here is what to evaluate, what red flags to watch for, and the questions to ask before you commit.",
    descriptionHI:
      "सभी POS सिस्टम एक जैसे नहीं होते। जानें क्या देखें, किन बातों से सावधान रहें और साइन अप करने से पहले कौन से सवाल पूछें।",
    category: "POS",
    readTime: "7 min read",
  },
  {
    slug: "7-signs-outgrown-manual-billing",
    title: "7 Signs Your Store Has Outgrown Manual Billing",
    titleHI: "7 संकेत कि आपकी दुकान मैनुअल बिलिंग से आगे निकल गई है",
    excerpt:
      "Manual billing fails gradually, not all at once. Here are seven signs that your store is ready for a smarter billing system — whether you know it or not.",
    excerptHI:
      "मैनुअल बिलिंग धीरे-धीरे फेल होती है। ये 7 संकेत बताते हैं कि आपकी दुकान को स्मार्ट बिलिंग सिस्टम की ज़रूरत है।",
    description:
      "Manual billing fails gradually, not all at once. Here are seven signs that your store is ready for a smarter billing system — whether you know it or not.",
    descriptionHI:
      "मैनुअल बिलिंग धीरे-धीरे फेल होती है। ये 7 संकेत बताते हैं कि आपकी दुकान को स्मार्ट बिलिंग सिस्टम की ज़रूरत है।",
    category: "POS",
    readTime: "6 min read",
  },
  {
    slug: "how-digital-bills-increase-repeat-customers",
    title: "How Digital Bills Increase Repeat Customers",
    titleHI: "डिजिटल बिल कैसे दोबारा आने वाले ग्राहक बढ़ाते हैं",
    excerpt:
      "The gap between a first-time and repeat customer is smaller than you think — and your billing process is where the difference is made.",
    excerptHI:
      "पहली बार और दोबारा आने वाले ग्राहक के बीच का फ़र्क उतना बड़ा नहीं — और यह फ़र्क आपकी बिलिंग प्रक्रिया से बनता है।",
    description:
      "The gap between a first-time and repeat customer is smaller than you think — and your billing process is where the difference is made.",
    descriptionHI:
      "पहली बार और दोबारा आने वाले ग्राहक के बीच का फ़र्क उतना बड़ा नहीं — और यह फ़र्क आपकी बिलिंग प्रक्रिया से बनता है।",
    category: "Growth",
    readTime: "7 min read",
  },
  {
    slug: "understanding-sales-reports-retail",
    title: "Understanding Sales Reports: Metrics Every Shop Owner Should Track",
    titleHI: "सेल्स रिपोर्ट समझना: हर दुकानदार को ट्रैक करने चाहिए ये मेट्रिक्स",
    excerpt:
      "Total revenue is the least useful number your POS generates. Here are the metrics that actually tell you how your business is performing.",
    excerptHI:
      "कुल रेवेन्यू आपके POS का सबसे कम उपयोगी नंबर है। ये मेट्रिक्स असल में बताते हैं कि आपका बिज़नेस कैसा चल रहा है।",
    description:
      "Total revenue is the least useful number your POS generates. Here are the metrics that actually tell you how your business is performing.",
    descriptionHI:
      "कुल रेवेन्यू आपके POS का सबसे कम उपयोगी नंबर है। ये मेट्रिक्स असल में बताते हैं कि आपका बिज़नेस कैसा चल रहा है।",
    category: "Analytics",
    readTime: "7 min read",
  },
  {
    slug: "pos-billing-to-business-growth",
    title: "From Billing to Business Growth: How Modern POS Systems Help Retailers Scale",
    titleHI: "बिलिंग से बिज़नेस ग्रोथ तक: मॉडर्न POS सिस्टम रिटेलर्स को कैसे स्केल करने में मदद करते हैं",
    excerpt:
      "When billing is just billing, you leave growth on the table. Here is how a modern POS system turns every transaction into a building block for scale.",
    excerptHI:
      "जब बिलिंग सिर्फ़ बिलिंग है, तो आप ग्रोथ पीछे छोड़ देते हैं। जानें कैसे मॉडर्न POS हर ट्रांज़ैक्शन को ग्रोथ की नींव बनाता है।",
    description:
      "When billing is just billing, you leave growth on the table. Here is how a modern POS system turns every transaction into a building block for scale.",
    descriptionHI:
      "जब बिलिंग सिर्फ़ बिलिंग है, तो आप ग्रोथ पीछे छोड़ देते हैं। जानें कैसे मॉडर्न POS हर ट्रांज़ैक्शन को ग्रोथ की नींव बनाता है।",
    category: "Growth",
    readTime: "8 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPostPreview | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getListingBlurb(post: BlogPostPreview, language: "EN" | "HI"): string {
  if (language === "HI") {
    return post.excerptHI ?? post.descriptionHI;
  }
  return post.excerpt ?? post.description;
}

export function getBlogImageSrc(post: BlogPostPreview): string | undefined {
  return post.imageSrc ?? getBlogThumbnail(post.slug);
}
