import whySmartPosBeatsManualBilling from "@/assets/blog images/Why Smart POS Beats Manual Billing.png";
import turnDigitalBillWhatsapp from "@/assets/blog images/Turn Every Digital Bill into a WhatsApp .png";
import loyaltyProgramsSmallShops from "@/assets/blog images/Loyalty Programs That Work for Small .png";
import tighterInventoryHealthierCash from "@/assets/blog images/Tighter Inventory, Healthier Cash .png";
import collectingFeedbackCustomers from "@/assets/blog images/Collecting Feedback Customers.png";
import gstBillingMistakesSmallBusinesses from "@/assets/blog images/GST Billing Mistakes Small Businesses.png";
import ebillExplained from "@/assets/blog images/Ebill explained.png";
import howToChooseRightPos from "@/assets/blog images/How to Choose the Right POS .png";
import sevenSignsOutgrownManualBilling from "@/assets/blog images/your store has outgrown manual billing.png";
import howDigitalBillsRepeatCustomers from "@/assets/blog images/How Digital Bills Increase Repeat Customers.png";
import understandingSalesReports from "@/assets/blog images/Understanding Sales Reports.png";
import billingToBusinessGrowth from "@/assets/blog images/From Billing to Business Growth.png";

/** Slug → bundled thumbnail URL for blog listing cards */
export const blogThumbnailBySlug: Record<string, string> = {
  // No dedicated image was generated for this blog — shares the GST visual
  "gst-billing-basics-retailers-india": gstBillingMistakesSmallBusinesses,
  "why-smart-pos-beats-manual-billing-busy-stores": whySmartPosBeatsManualBilling,
  "turn-digital-bill-into-whatsapp-touchpoint": turnDigitalBillWhatsapp,
  "loyalty-without-complexity": loyaltyProgramsSmallShops,
  "inventory-cash-flow-tips": tighterInventoryHealthierCash,
  "customer-feedback-that-helps": collectingFeedbackCustomers,
  "gst-billing-mistakes-small-businesses": gstBillingMistakesSmallBusinesses,
  "e-billing-explained": ebillExplained,
  "how-to-choose-right-pos-system-2026": howToChooseRightPos,
  "7-signs-outgrown-manual-billing": sevenSignsOutgrownManualBilling,
  "how-digital-bills-increase-repeat-customers": howDigitalBillsRepeatCustomers,
  "understanding-sales-reports-retail": understandingSalesReports,
  "pos-billing-to-business-growth": billingToBusinessGrowth,
};

export function getBlogThumbnail(slug: string): string | undefined {
  return blogThumbnailBySlug[slug];
}
