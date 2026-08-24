import { get, push, ref, runTransaction, serverTimestamp, set } from "firebase/database";
import { realtimeDb } from "@/lib/firebase";

type DemoLeadInput = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
};

type QuickLeadInput = {
  name: string;
  phone: string;
  email: string;
  message?: string;
};

const LEADS_PATH = "leads";
const METRICS_PATH = "leadsMeta";
const CLICK_METRICS_PATH = "websiteClickMetrics";

export const ensureLeadDatabaseStructure = async () => {
  const leadsRef = ref(realtimeDb, LEADS_PATH);
  const leadsSnapshot = await get(leadsRef);
  const metricsRef = ref(realtimeDb, METRICS_PATH);
  const metricsSnapshot = await get(metricsRef);

  if (!leadsSnapshot.exists()) {
    await set(leadsRef, {});
  }

  if (!metricsSnapshot.exists()) {
    await set(metricsRef, {
      totalLeads: 0,
      updatedAt: serverTimestamp(),
    });
  }
};

const persistLead = async (lead: Record<string, unknown>, source: string) => {
  const leadsRef = ref(realtimeDb, LEADS_PATH);
  const leadsSnapshot = await get(leadsRef);

  if (!leadsSnapshot.exists()) {
    await set(leadsRef, {});
  }

  const newLeadRef = push(ref(realtimeDb, LEADS_PATH));

  await set(newLeadRef, {
    ...lead,
    source,
    createdAt: serverTimestamp(),
  });

  await runTransaction(ref(realtimeDb, METRICS_PATH), (currentValue) => {
    const existing = currentValue ?? {};
    return {
      ...existing,
      totalLeads: (existing.totalLeads ?? 0) + 1,
      updatedAt: serverTimestamp(),
    };
  });
};

export const saveBookDemoLead = (lead: DemoLeadInput) => persistLead(lead, "book_demo_page");

export const saveQuickLead = (lead: QuickLeadInput) => persistLead(lead, "quick_inquiry_popup");

const incrementClickCounter = async (key: string) => {
  await runTransaction(ref(realtimeDb, `${CLICK_METRICS_PATH}/${key}`), (currentValue) => {
    const existing = currentValue ?? {};
    return {
      ...existing,
      count: (existing.count ?? 0) + 1,
      updatedAt: serverTimestamp(),
    };
  });
};

export const trackDownloadClick = async () => {
  await incrementClickCounter("downloadButton");
};

export const trackBookDemoClick = async () => {
  await incrementClickCounter("bookDemoButton");
};
