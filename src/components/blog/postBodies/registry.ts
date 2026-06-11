import type { ComponentType } from "react";
import { GstBillingBasicsRetailersIndiaEn } from "./GstBillingBasicsRetailersIndiaEn";
import { TurnDigitalBillIntoWhatsappTouchpointEn } from "./TurnDigitalBillIntoWhatsappTouchpointEn";
import { WhySmartPosBeatsManualBillingBusyStoresEn } from "./WhySmartPosBeatsManualBillingBusyStoresEn";
import { LoyaltyProgramsSmallShopsEn } from "./LoyaltyProgramsSmallShopsEn";
import { InventoryCashFlowTipsEn } from "./InventoryCashFlowTipsEn";
import { CustomerFeedbackRetailEn } from "./CustomerFeedbackRetailEn";
import { GstBillingMistakesEn } from "./GstBillingMistakesEn";
import { EBillingExplainedEn } from "./EBillingExplainedEn";
import { HowToChooseRightPosEn } from "./HowToChooseRightPosEn";
import { SevenSignsOutgrownManualBillingEn } from "./SevenSignsOutgrownManualBillingEn";
import { DigitalBillsRepeatCustomersEn } from "./DigitalBillsRepeatCustomersEn";
import { UnderstandingSalesReportsEn } from "./UnderstandingSalesReportsEn";
import { BillingToBusinessGrowthEn } from "./BillingToBusinessGrowthEn";

const bodies: Record<string, ComponentType> = {
  "gst-billing-basics-retailers-india": GstBillingBasicsRetailersIndiaEn,
  "turn-digital-bill-into-whatsapp-touchpoint": TurnDigitalBillIntoWhatsappTouchpointEn,
  "why-smart-pos-beats-manual-billing-busy-stores": WhySmartPosBeatsManualBillingBusyStoresEn,
  "loyalty-without-complexity": LoyaltyProgramsSmallShopsEn,
  "inventory-cash-flow-tips": InventoryCashFlowTipsEn,
  "customer-feedback-that-helps": CustomerFeedbackRetailEn,
  "gst-billing-mistakes-small-businesses": GstBillingMistakesEn,
  "e-billing-explained": EBillingExplainedEn,
  "how-to-choose-right-pos-system-2026": HowToChooseRightPosEn,
  "7-signs-outgrown-manual-billing": SevenSignsOutgrownManualBillingEn,
  "how-digital-bills-increase-repeat-customers": DigitalBillsRepeatCustomersEn,
  "understanding-sales-reports-retail": UnderstandingSalesReportsEn,
  "pos-billing-to-business-growth": BillingToBusinessGrowthEn,
};

export function getBlogPostBody(slug: string): ComponentType | undefined {
  return bodies[slug];
}
