import type { ComponentType } from "react";
import { GstBillingBasicsRetailersIndiaEn } from "./GstBillingBasicsRetailersIndiaEn";
import { TurnDigitalBillIntoWhatsappTouchpointEn } from "./TurnDigitalBillIntoWhatsappTouchpointEn";
import { WhySmartPosBeatsManualBillingBusyStoresEn } from "./WhySmartPosBeatsManualBillingBusyStoresEn";

const bodies: Record<string, ComponentType> = {
  "gst-billing-basics-retailers-india": GstBillingBasicsRetailersIndiaEn,
  "turn-digital-bill-into-whatsapp-touchpoint": TurnDigitalBillIntoWhatsappTouchpointEn,
  "why-smart-pos-beats-manual-billing-busy-stores": WhySmartPosBeatsManualBillingBusyStoresEn,
};

export function getBlogPostBody(slug: string): ComponentType | undefined {
  return bodies[slug];
}
