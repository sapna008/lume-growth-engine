/**
 * Static blog preview data. Replace or extend with CMS/API when ready.
 */

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
    readTime: "6 min read (approx)",
  },
  {
    slug: "gst-billing-basics-for-retail",
    title: "GST Billing Basics Every Retailer Should Know",
    titleHI: "हर रिटेलर को पता होनी चाहिए GST बिलिंग की बुनियादी बातें",
    description:
      "Understand GST invoices, HSN codes, and how digital billing keeps your store compliant without slowing checkout.",
    descriptionHI:
      "GST इनवॉइस, HSN कोड और डिजिटल बिलिंग से कैसे कम्प्लायंस बनी रहती है — बिना चेकआउट धीमी किए।",
  },
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
    imageSrc: "",
  },
  {
    slug: "whatsapp-digital-bills",
    title: "Turn Every Digital Bill Into a WhatsApp Touchpoint",
    titleHI: "हर डिजिटल बिल को WhatsApp टचपॉइंट कैसे बनाएँ",
    description:
      "Learn how sending bills on WhatsApp improves recall, feedback, and repeat visits for local retailers.",
    descriptionHI:
      "WhatsApp पर बिल भेजने से रिकॉल, फ़ीडबैक और दोबारा विज़िट कैसे बढ़ते हैं — स्थानीय रिटेलर्स के लिए।",
  },
  {
    slug: "loyalty-without-complexity",
    title: "Loyalty Programs That Work for Small Shops",
    titleHI: "छोटी दुकानों के लिए काम करने वाले लॉयल्टी प्रोग्राम",
    description:
      "Simple points, coupons, and cashback ideas that do not need a big team to manage day to day.",
    descriptionHI:
      "आसान पॉइंट्स, कूपन और कैशबैक आइडियाज़ — बिना बड़ी टीम के रोज़ मैनेज किए।",
  },
  {
    slug: "inventory-cash-flow-tips",
    title: "Tighter Inventory, Healthier Cash Flow",
    titleHI: "बेहतर इन्वेंटरी, मज़बूत कैश फ्लो",
    description:
      "Practical tips to align stock levels with sales patterns and avoid dead inventory in seasonal categories.",
    descriptionHI:
      "स्टॉक को सेल पैटर्न के साथ मिलाना और सीज़नल कैटगरी में डेड स्टॉक से बचना — व्यावहारिक टिप्स।",
  },
  {
    slug: "customer-feedback-that-helps",
    title: "Collecting Feedback Customers Actually Want to Give",
    titleHI: "ऐसा फ़ीडबैक जो ग्राहक देना चाहें",
    description:
      "Short surveys, rating links on bills, and how to act on insights without overwhelming your staff.",
    descriptionHI:
      "छोटे सर्वे, बिल पर रेटिंग लिंक और स्टाफ़ पर बोझ बढ़ाए बिना इनसाइट पर काम करना।",
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
