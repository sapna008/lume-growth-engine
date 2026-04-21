import { get, push, ref, runTransaction, serverTimestamp, set } from "firebase/database";
import { realtimeDb } from "@/lib/firebase";

type DemoLeadInput = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
};

const LEADS_PATH = "leads";
const METRICS_PATH = "leadsMeta";

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

export const saveBookDemoLead = async (lead: DemoLeadInput) => {
  const leadsRef = ref(realtimeDb, LEADS_PATH);
  const leadsSnapshot = await get(leadsRef);

  if (!leadsSnapshot.exists()) {
    await set(leadsRef, {});
  }

  const newLeadRef = push(ref(realtimeDb, LEADS_PATH));

  await set(newLeadRef, {
    ...lead,
    source: "book_demo_page",
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
