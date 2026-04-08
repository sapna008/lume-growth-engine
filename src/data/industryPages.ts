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
import fashionBenefits from "@/assets/industry images/fashion4.jpeg";
import fashionOverview from "@/assets/industry images/fashion5.png";
import jewelleryHeroMain from "@/assets/industry images/jewellry.png";
import jewellerySecondary1 from "@/assets/industry images/jewellry2.png";
import jewellerySecondary2 from "@/assets/industry images/jewellry3.png";
import jewelleryBenefits from "@/assets/industry images/jewellry4.png";
import jewelleryOverview from "@/assets/industry images/jewellry5.png";
import electronicsHeroMain from "@/assets/industry images/Electronic.png";
import electronicsSecondary1 from "@/assets/industry images/electronic2.png";
import electronicsSecondary2 from "@/assets/industry images/electronic3.png";
import electronicsBenefits from "@/assets/industry images/electronic4.png";
import electronicsOverview from "@/assets/industry images/electronic5.png";
import accessoriesHeroMain from "@/assets/industry images/Accessories.jpg";
import accessoriesSecondary1 from "@/assets/industry images/Accessories2.png";
import accessoriesSecondary2 from "@/assets/industry images/Accessories3.png";
import accessoriesBenefits from "@/assets/industry images/Accessories4.jpg";
import accessoriesOverview from "@/assets/industry images/Accessories5.png";
import bakeryHeroMain from "@/assets/industry images/bakery.jpeg";
import bakerySecondary1 from "@/assets/industry images/bakery2.png";
import bakerySecondary2 from "@/assets/industry images/bakery3.jpg";
import bakeryBenefits from "@/assets/industry images/bakery4.jpg";
import bakeryOverview from "@/assets/industry images/bakery5.webp";
import cosmeticsHeroMain from "@/assets/industry images/cosmetics.png";
import cosmeticsSecondary1 from "@/assets/industry images/cosmetics2.png";
import cosmeticsSecondary2 from "@/assets/industry images/cosmetics3.png";
import cosmeticsBenefits from "@/assets/industry images/cosmetics.jpg";
import cosmeticsOverview from "@/assets/industry images/cosmetics5.webp";
import footwearHeroMain from "@/assets/industry images/footware.png";
import footwearSecondary1 from "@/assets/industry images/footware2.webp";
import footwearSecondary2 from "@/assets/industry images/footware3.jpg";
import footwearBenefits from "@/assets/industry images/footware4.png";
import footwearOverview from "@/assets/industry images/footware5.webp";
import groceryHeroMain from "@/assets/industry images/grocery.webp";
import grocerySecondary1 from "@/assets/industry images/grocery2.webp";
import grocerySecondary2 from "@/assets/industry images/grocery3.jpg";
import groceryBenefits from "@/assets/industry images/grocery4.png";
import groceryOverview from "@/assets/industry images/grocery5.jpg";
import homeAppliancesHeroMain from "@/assets/industry images/home.png";
import homeAppliancesSecondary1 from "@/assets/industry images/home2.png";
import homeAppliancesSecondary2 from "@/assets/industry images/home3.jpeg";
import homeAppliancesBenefits from "@/assets/industry images/home4.jpg";
import homeAppliancesOverview from "@/assets/industry images/home5.png";
import stationeryHeroMain from "@/assets/industry images/stationary.webp";
import stationerySecondary1 from "@/assets/industry images/stationary2.png";
import stationerySecondary2 from "@/assets/industry images/stationary3.png";
import stationeryBenefits from "@/assets/industry images/stationary4.jpg";
import stationeryOverview from "@/assets/industry images/stationary5.webp";
import supermarketHeroMain from "@/assets/industry images/supermarket.png";
import supermarketSecondary1 from "@/assets/industry images/supermarket2.webp";
import supermarketSecondary2 from "@/assets/industry images/supermarket3.jpg";
import supermarketBenefits from "@/assets/industry images/supermarket4.jpg";
import supermarketOverview from "@/assets/industry images/supermarket5.webp";
import watchesHeroMain from "@/assets/industry images/watch.png";
import watchesSecondary1 from "@/assets/industry images/watch2.jpg";
import watchesSecondary2 from "@/assets/industry images/watch3.webp";
import watchesBenefits from "@/assets/industry images/watch4.webp";
import watchesOverview from "@/assets/industry images/watch5.jpg";

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
  /** Section image beside benefits grid (optional per industry) */
  benefitsImage?: string;
  /** Section image beside overview copy (optional per industry) */
  overviewImage?: string;
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
    benefitsImage: fashionBenefits,
    overviewImage: fashionOverview,
  },
  jewellery: {
    ...cfg(
      "jewellery",
      "Jewellery",
      "Build trust, streamline billing, and bring buyers back with WhatsApp-first engagement designed for high-value jewellery retail.",
      [
        { metric: "25%", title: "Higher repeat purchases", description: "Loyalty and personalised offers encourage returns for anniversaries and gifting." },
        { metric: "50x", title: "Faster follow-ups", description: "Send festival campaigns and new collection updates on WhatsApp in seconds." },
        { metric: "3x", title: "Clearer insights", description: "Analytics reveal top categories, designs, and store performance." },
        { metric: "90%", title: "Less billing friction", description: "Digital bills reduce errors and keep counters moving during peak hours." },
      ],
      [
        "Jewellery retail is built on trust and long-term relationships. Lume helps you bill quickly, capture customer details at checkout, and keep every purchase tied to a customer profile.",
        "Use WhatsApp bills, loyalty, and targeted offers to stay top-of-mind for festivals, gifting seasons, and repeat upgrades—without manual follow-ups.",
      ],
      "Retail software for jewellery stores in India: digital bills, loyalty, WhatsApp campaigns, and analytics. Book a demo.",
      "jewellery"
    ),
    heroMainImage: jewelleryHeroMain,
    secondaryImage1: jewellerySecondary1,
    secondaryImage2: jewellerySecondary2,
    benefitsImage: jewelleryBenefits,
    overviewImage: jewelleryOverview,
  },
  electronics: {
    ...cfg(
      "electronics",
      "Electricals & Electronics",
      "Sell faster, track performance, and drive repeat purchases with WhatsApp-first engagement built for electronics and electricals retailers.",
      [
        { metric: "25%", title: "More add-on sales", description: "Targeted WhatsApp campaigns push accessories, upgrades, and bundles." },
        { metric: "50x", title: "Instant announcements", description: "New stock, festive offers, and flash deals go live in one click." },
        { metric: "3x", title: "Clearer margins", description: "Analytics highlight top-selling categories and products driving profit." },
        { metric: "90%", title: "Faster checkout", description: "Digital bills reduce delays and errors during peak hours." },
      ],
      [
        "Electricals and electronics retail moves quickly—models change, accessories matter, and service follow-ups build trust. Lume helps you bill consistently, capture customer contacts, and keep post-sale engagement effortless.",
        "Send WhatsApp bills, run targeted campaigns for upgrades and add-ons, and track performance across categories so you can restock smarter.",
      ],
      "Retail software for electronics and electricals stores in India: digital bills, WhatsApp campaigns, loyalty, and analytics. Book a demo.",
      "electronics"
    ),
    heroMainImage: electronicsHeroMain,
    secondaryImage1: electronicsSecondary1,
    secondaryImage2: electronicsSecondary2,
    benefitsImage: electronicsBenefits,
    overviewImage: electronicsOverview,
  },
  accessories: {
    ...cfg(
      "accessories",
      "Accessories",
      "Boost basket size and repeat purchases with digital bills and WhatsApp-first campaigns built for accessories retailers.",
      [
        { metric: "25%", title: "Higher basket size", description: "Bundles, add-ons, and coupons nudge shoppers to pick more." },
        { metric: "50x", title: "Faster retargeting", description: "WhatsApp campaigns reach past buyers in one click." },
        { metric: "3x", title: "Better repeat rate", description: "Loyalty rewards bring shoppers back for seasonal trends." },
        { metric: "90%", title: "Smoother billing", description: "Fast digital bills reduce friction at the counter." },
      ],
      [
        "Accessories retail thrives on frequency and add-ons. Lume helps you bill quickly, capture customer details at checkout, and bring shoppers back with offers that match what they buy.",
        "Promote new arrivals, combos, and seasonal drops on WhatsApp, and track what sells best so you can stock the right styles.",
      ],
      "Retail software for accessories stores in India: digital bills, WhatsApp campaigns, loyalty, and analytics. Book a demo.",
      "accessories"
    ),
    heroMainImage: accessoriesHeroMain,
    secondaryImage1: accessoriesSecondary1,
    secondaryImage2: accessoriesSecondary2,
    benefitsImage: accessoriesBenefits,
    overviewImage: accessoriesOverview,
  },
  bakery: {
    ...cfg(
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
    heroMainImage: bakeryHeroMain,
    secondaryImage1: bakerySecondary1,
    secondaryImage2: bakerySecondary2,
    benefitsImage: bakeryBenefits,
    overviewImage: bakeryOverview,
  },
  cosmetics: {
    ...cfg(
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
    heroMainImage: cosmeticsHeroMain,
    secondaryImage1: cosmeticsSecondary1,
    secondaryImage2: cosmeticsSecondary2,
    benefitsImage: cosmeticsBenefits,
    overviewImage: cosmeticsOverview,
  },
  footwear: {
    ...cfg(
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
    heroMainImage: footwearHeroMain,
    secondaryImage1: footwearSecondary1,
    secondaryImage2: footwearSecondary2,
    benefitsImage: footwearBenefits,
    overviewImage: footwearOverview,
  },
  grocery: {
    ...cfg(
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
    heroMainImage: groceryHeroMain,
    secondaryImage1: grocerySecondary1,
    secondaryImage2: grocerySecondary2,
    benefitsImage: groceryBenefits,
    overviewImage: groceryOverview,
  },
  "home-appliances": {
    ...cfg(
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
    heroMainImage: homeAppliancesHeroMain,
    secondaryImage1: homeAppliancesSecondary1,
    secondaryImage2: homeAppliancesSecondary2,
    benefitsImage: homeAppliancesBenefits,
    overviewImage: homeAppliancesOverview,
  },
  stationery: {
    ...cfg(
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
    heroMainImage: stationeryHeroMain,
    secondaryImage1: stationerySecondary1,
    secondaryImage2: stationerySecondary2,
    benefitsImage: stationeryBenefits,
    overviewImage: stationeryOverview,
  },
  supermarket: {
    ...cfg(
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
    heroMainImage: supermarketHeroMain,
    secondaryImage1: supermarketSecondary1,
    secondaryImage2: supermarketSecondary2,
    benefitsImage: supermarketBenefits,
    overviewImage: supermarketOverview,
  },
  watches: {
    ...cfg(
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
    heroMainImage: watchesHeroMain,
    secondaryImage1: watchesSecondary1,
    secondaryImage2: watchesSecondary2,
    benefitsImage: watchesBenefits,
    overviewImage: watchesOverview,
  },
};

export function getIndustryPageConfig(slug: string): IndustryPageConfig | undefined {
  return industryPageBySlug[slug];
}

export const INDUSTRY_PAGE_SLUGS = Object.keys(industryPageBySlug);
