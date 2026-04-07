import type { LucideIcon } from "lucide-react";
import {
  ReceiptIndianRupee,
  Tag,
  Megaphone,
  BarChart3,
  Star,
  MessageSquare,
} from "lucide-react";

// Industry-specific images (only configured where available)
import fashionHeroMain from "@/assets/industry images/fashion3.png";
import fashionSecondary1 from "@/assets/industry images/fashion2.jpg";
import fashionSecondary2 from "@/assets/industry images/fashion.jpeg";

export type IndustryFeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  learnMoreHref: string;
};

export type IndustryBenefitBlock = {
  metric: string;
  title: string;
  description: string;
};

export type IndustryPageConfig = {
  slug: string;
  categoryLabel: string;
  heroTitle: string;
  heroSubtext: string;
  heroMainImage?: string;
  secondaryImage1?: string;
  secondaryImage2?: string;
  benefitsHeading: string;
  benefitBlocks: IndustryBenefitBlock[];
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewLearnMoreHref: string;
  featureCards: IndustryFeatureCard[];
  ctaTitle: string;
  ctaSubtext: string;
  seoTitle: string;
  seoDescription: string;
};

const BENEFITS_HEADING = "Drive smarter and digital retail";

/** Shared 6 feature cards; links to existing product features */
function standardFeatureCards(label: string): IndustryFeatureCard[] {
  return [
    {
      icon: ReceiptIndianRupee,
      title: "Digital bills on WhatsApp",
      description: `Send WhatsApp bills after every sale so ${label} customers keep a record and return faster.`,
      learnMoreHref: "/features/digital-bills",
    },
    {
      icon: Tag,
      title: "Loyalty & coupons",
      description: `Reward repeat visits for ${label} purchases with points, coupons, and timely offers.`,
      learnMoreHref: "/features/loyalty",
    },
    {
      icon: Megaphone,
      title: "Promotions & campaigns",
      description: `Reach shoppers with WhatsApp campaigns for launches, discounts, and seasonal ${label} pushes.`,
      learnMoreHref: "/features/promotion",
    },
    {
      icon: BarChart3,
      title: "Analytics & insights",
      description: `Track revenue, categories, and store performance tailored to how ${label} retail operates.`,
      learnMoreHref: "/features/analytics",
    },
    {
      icon: Star,
      title: "Google Reviews",
      description: `Turn every bill into a review request so your ${label} store ranks higher in local search.`,
      learnMoreHref: "/features/reviews",
    },
    {
      icon: MessageSquare,
      title: "Surveys & feedback",
      description: `Collect feedback after purchases to refine ${label} assortment and service.`,
      learnMoreHref: "/features/surveys",
    },
  ];
}

const BASE_CTA = {
  ctaTitle: "Get started with Lume today",
  ctaSubtext:
    "Connect billing, customer data, and marketing in one platform built for Indian retailers.",
};

function cfg(
  slug: string,
  categoryLabel: string,
  heroSubtext: string,
  benefitBlocks: IndustryBenefitBlock[],
  overviewParagraphs: string[],
  seoDescription: string,
  /** Lowercase phrasing for shared feature card copy, e.g. "electronics", "home appliances" */
  featureSubjectLabel: string
): IndustryPageConfig {
  const heroTitle = `The best choice for ${categoryLabel} retailers`;
  return {
    slug,
    categoryLabel,
    heroTitle,
    heroSubtext,
    benefitsHeading: BENEFITS_HEADING,
    benefitBlocks,
    overviewTitle: `${categoryLabel} retail, powered by Lume`,
    overviewParagraphs,
    overviewLearnMoreHref: "/for-retailers",
    featureCards: standardFeatureCards(featureSubjectLabel),
    ctaTitle: BASE_CTA.ctaTitle,
    ctaSubtext: BASE_CTA.ctaSubtext,
    seoTitle: `${categoryLabel} Retail Software & Customer Engagement`,
    seoDescription,
  };
}

export const industryPageBySlug: Record<string, IndustryPageConfig> = {
  fashion: {
    ...cfg(
      "fashion",
      "Fashion",
      "Grow sales, run sharper campaigns, and keep customers engaged with digital billing and WhatsApp-first touchpoints built for apparel and lifestyle stores.",
      [
        { metric: "25%", title: "Higher repeat visits", description: "Loyalty and timely offers bring shoppers back for new collections." },
        { metric: "50x", title: "Faster outreach", description: "WhatsApp campaigns reach customers in seconds versus manual follow-ups." },
        { metric: "3x", title: "Clearer bestsellers", description: "Analytics highlight styles and categories that sell fast." },
        { metric: "90%", title: "Less billing friction", description: "Digital bills reduce queues and errors at peak hours." },
      ],
      [
        "Fashion retail moves fast—seasons, sizes, and trends change every week. Lume helps you bill quickly, capture customer data at checkout, and bring them back with offers that match what they buy.",
        "From single stores to multi-outlet chains, you get one view of sales and loyalty so you can invest in the right inventory and marketing.",
      ],
      "Digital billing, loyalty, and WhatsApp campaigns for fashion and apparel retailers in India. Request a demo.",
      "fashion"
    ),
    heroMainImage: fashionHeroMain,
    secondaryImage1: fashionSecondary1,
    secondaryImage2: fashionSecondary2,
  },
  jewellery: cfg(
    "jewellery",
    "Jewellery",
    "Improve trust, transparency, and follow-ups with digital bills and customer insights that match high-value jewellery purchases.",
    [
      { metric: "25%", title: "Stronger trust", description: "Clear digital bills and receipts reinforce authenticity for every sale." },
      { metric: "50x", title: "Faster follow-ups", description: "Reach customers for festivals and schemes without cold calls." },
      { metric: "3x", title: "Better repeat sales", description: "Loyalty and reminders help buyers return for next occasions." },
      { metric: "90%", title: "Less paperwork", description: "Digital records reduce manual tracking and disputes." },
    ],
    [
      "Jewellery stores rely on relationships and repeat visits. Lume connects every sale to a customer profile so you can nurture buyers over time with personalised offers and reminders.",
      "Digital bills on WhatsApp keep your brand professional while giving customers an easy way to save and share purchases.",
    ],
    "Retail software for jewellery stores: digital bills, loyalty, and WhatsApp engagement. Book a demo.",
    "jewellery"
  ),
  electronics: cfg(
    "electronics",
    "Electricals & Electronics",
    "Move more inventory with clearer offers, warranties, and post-sale engagement that keeps customers coming back for accessories and upgrades.",
    [
      { metric: "25%", title: "More add-on sales", description: "Campaigns highlight accessories and extended warranties." },
      { metric: "50x", title: "Instant announcements", description: "Flash deals and new stock alerts go out on WhatsApp." },
      { metric: "3x", title: "Clearer margins", description: "Analytics show categories and products that drive profit." },
      { metric: "90%", title: "Less checkout delay", description: "Fast digital billing keeps peak-hour lines moving." },
    ],
    [
      "Electronics and electricals retailers juggle models, EMI, and service. Lume helps you bill consistently, capture customer contacts, and run campaigns that drive upgrades and service visits.",
      "Use WhatsApp to share digital bills and follow up with offers that match what customers already bought.",
    ],
    "POS and customer engagement for electronics and electricals stores. Digital bills, campaigns, analytics. Request a demo.",
    "electronics"
  ),
  accessories: cfg(
    "accessories",
    "Accessories",
    "Increase basket size and repeat purchases with smart promotions and loyalty tied to every small-ticket sale.",
    [
      { metric: "25%", title: "Higher basket size", description: "Bundles and coupons encourage customers to add more items." },
      { metric: "50x", title: "Faster retargeting", description: "WhatsApp campaigns reach past buyers in one click." },
      { metric: "3x", title: "Better repeat rate", description: "Loyalty rewards bring shoppers back for seasonal trends." },
      { metric: "90%", title: "Smoother billing", description: "Quick digital bills reduce friction at the counter." },
    ],
    [
      "Accessories retailers win on frequency and add-ons. Lume helps you recognise returning customers, reward loyalty, and promote new arrivals without heavy ad spend.",
      "Every digital bill is a touchpoint to drive reviews and feedback that grow your local reputation.",
    ],
    "Retail software for accessories stores: loyalty, WhatsApp campaigns, and digital billing. Book a demo.",
    "accessories"
  ),
  bakery: cfg(
    "bakery",
    "Bakery",
    "Serve fresh demand with faster billing, daily campaigns, and loyalty that keeps customers choosing your bakery every morning.",
    [
      { metric: "25%", title: "More daily regulars", description: "Rewards and reminders encourage repeat morning visits." },
      { metric: "50x", title: "Same-day offers", description: "WhatsApp pushes for fresh batches and closing deals." },
      { metric: "3x", title: "Clearer daily sales", description: "See what sells out early and what to bake tomorrow." },
      { metric: "90%", title: "Less counter wait", description: "Quick billing keeps rush-hour lines short." },
    ],
    [
      "Bakeries rely on speed and freshness. Lume speeds up checkout, sends digital bills customers can trust, and helps you run same-day offers when you need to clear stock.",
      "Use loyalty and feedback to understand what your neighbourhood loves most.",
    ],
    "Bakery POS and customer engagement: digital bills, WhatsApp offers, loyalty. Request a demo.",
    "bakery"
  ),
  cosmetics: cfg(
    "cosmetics",
    "Cosmetics",
    "Build loyalty in a crowded category with personalised follow-ups, reviews, and campaigns that match beauty and personal care buying cycles.",
    [
      { metric: "25%", title: "Higher loyalty", description: "Points and coupons reward repeat beauty purchases." },
      { metric: "50x", title: "Faster launches", description: "Announce new brands and SKUs on WhatsApp instantly." },
      { metric: "3x", title: "Clearer bestsellers", description: "Analytics show categories and products that drive revenue." },
      { metric: "90%", title: "Less billing friction", description: "Digital bills reduce errors at busy counters." },
    ],
    [
      "Cosmetics shoppers love trying new products. Lume helps you capture preferences, send relevant offers, and collect reviews that attract new customers searching online.",
      "Digital bills on WhatsApp keep your store looking modern and trustworthy.",
    ],
    "Cosmetics retail software: loyalty, reviews, WhatsApp campaigns, analytics. Book a demo.",
    "cosmetics"
  ),
  footwear: cfg(
    "footwear",
    "Footwear",
    "Sell more pairs with size-aware campaigns, loyalty, and digital billing that fits busy footwear floors.",
    [
      { metric: "25%", title: "More repeat buyers", description: "Seasonal reminders and loyalty bring families back." },
      { metric: "50x", title: "Faster stock pushes", description: "WhatsApp campaigns for new arrivals and clearance." },
      { metric: "3x", title: "Better category insight", description: "See which brands and sizes move fastest." },
      { metric: "90%", title: "Quicker checkout", description: "Digital billing keeps peak shopping days smooth." },
    ],
    [
      "Footwear stores need speed at billing and clarity on what sells. Lume connects every sale to customer data so you can run offers that match school seasons, sports, and festivals.",
      "Use WhatsApp to share bills and follow up when new stock arrives.",
    ],
    "Footwear retail POS and engagement: digital bills, loyalty, campaigns. Request a demo.",
    "footwear"
  ),
  grocery: cfg(
    "grocery",
    "Grocery",
    "Run a tighter kirana with faster billing, credit visibility, and WhatsApp campaigns that lift basket size without extra staff.",
    [
      { metric: "25%", title: "Higher basket size", description: "Offers and reminders nudge customers to add more items." },
      { metric: "50x", title: "Instant announcements", description: "Price drops and new stock alerts on WhatsApp." },
      { metric: "3x", title: "Clearer daily sales", description: "Understand categories and SKUs that drive the day." },
      { metric: "90%", title: "Less billing friction", description: "Digital bills reduce queues during peak hours." },
    ],
    [
      "Grocery and kirana stores win on speed and trust. Lume helps you bill quickly, track regular customers, and keep them informed about offers and staples.",
      "Digital bills strengthen trust while giving you data to run smarter promotions.",
    ],
    "Kirana and grocery retail software: fast billing, WhatsApp engagement, loyalty. Book a demo.",
    "grocery"
  ),
  "home-appliances": cfg(
    "home-appliances",
    "Home Appliances",
    "Support high-ticket sales with clear digital bills, follow-ups for service and accessories, and campaigns that drive upgrades.",
    [
      { metric: "25%", title: "More referrals", description: "Reviews and referrals grow after every digital bill." },
      { metric: "50x", title: "Faster follow-ups", description: "WhatsApp for EMI reminders, service, and schemes." },
      { metric: "3x", title: "Clearer attach sales", description: "Track add-ons and extended warranties over time." },
      { metric: "90%", title: "Less paperwork", description: "Digital records reduce manual follow-up." },
    ],
    [
      "Home appliance retailers need strong post-sale engagement. Lume connects billing to customer data so you can remind buyers about service, accessories, and exchange offers.",
      "WhatsApp keeps communication professional and timely.",
    ],
    "Home appliances retail: digital bills, campaigns, analytics, reviews. Request a demo.",
    "home appliances"
  ),
  stationery: cfg(
    "stationery",
    "Stationery",
    "Serve schools and offices with faster billing, loyalty for bulk buyers, and campaigns for seasonal demand.",
    [
      { metric: "25%", title: "Higher repeat sales", description: "Loyalty rewards schools and businesses that buy often." },
      { metric: "50x", title: "Faster season pushes", description: "Back-to-school and exam season offers on WhatsApp." },
      { metric: "3x", title: "Clearer bestsellers", description: "See what moves every academic cycle." },
      { metric: "90%", title: "Less checkout delay", description: "Digital billing keeps peak days manageable." },
    ],
    [
      "Stationery demand spikes in seasons. Lume helps you bill quickly, capture institutional buyers, and run timely WhatsApp campaigns when parents and students shop most.",
      "Digital bills build trust with schools and small businesses alike.",
    ],
    "Stationery store software: billing, loyalty, WhatsApp campaigns. Book a demo.",
    "stationery"
  ),
  supermarket: cfg(
    "supermarket",
    "Supermarket",
    "Unify promotions, loyalty, and customer data across categories so your supermarket competes with modern retail formats.",
    [
      { metric: "25%", title: "Higher loyalty uptake", description: "Rewards and coupons increase registered customers." },
      { metric: "50x", title: "Faster campaigns", description: "WhatsApp drives footfall for weekly deals." },
      { metric: "3x", title: "Clearer category mix", description: "Analytics highlight winners and slow movers." },
      { metric: "90%", title: "Less friction at checkout", description: "Digital bills reduce queues and errors." },
    ],
    [
      "Supermarkets need repeat visits and bigger baskets. Lume helps you capture customer data, run targeted offers, and measure what works across departments.",
      "Reviews and surveys help you tune assortment and service to local shoppers.",
    ],
    "Supermarket retail platform: loyalty, campaigns, analytics, digital bills. Request a demo.",
    "supermarket"
  ),
  watches: cfg(
    "watches",
    "Watches",
    "Elevate premium service with digital bills, follow-ups for new collections, and loyalty that rewards long-term buyers.",
    [
      { metric: "25%", title: "Stronger repeat rate", description: "Loyalty and reminders bring buyers back for upgrades." },
      { metric: "50x", title: "Faster launch buzz", description: "WhatsApp campaigns for limited editions and events." },
      { metric: "3x", title: "Clearer bestsellers", description: "Analytics show brands and price bands that sell." },
      { metric: "90%", title: "Less billing friction", description: "Digital bills reduce paperwork at high-value sales." },
    ],
    [
      "Watch retailers blend prestige and service. Lume connects every sale to a customer profile so you can follow up with care tips, new arrivals, and trade-in opportunities.",
      "Digital bills reinforce trust and make reviews easy to collect.",
    ],
    "Watch retail software: digital bills, loyalty, WhatsApp engagement, reviews. Book a demo.",
    "watches"
  ),
};

export function getIndustryPageConfig(slug: string): IndustryPageConfig | undefined {
  return industryPageBySlug[slug];
}

export const INDUSTRY_PAGE_SLUGS = Object.keys(industryPageBySlug);
