import type { ComponentType } from "react";
import { GstBillingBasicsRetailersIndiaEn } from "./GstBillingBasicsRetailersIndiaEn";

const bodies: Record<string, ComponentType> = {
  "gst-billing-basics-retailers-india": GstBillingBasicsRetailersIndiaEn,
};

export function getBlogPostBody(slug: string): ComponentType | undefined {
  return bodies[slug];
}
